(ns lhrb.replservice-test
  (:require  [clojure.test :refer :all]
             [lhrb.replservice :refer :all]))

(deftest test-sym-table-interceptor
  (is
   (=
    ((:enter
      (sym-table-interceptor (atom {:a 1})))
     {})

    {:sym-table {:a 1}}))

  (is
   (=
    ((:leave
      (sym-table-interceptor (atom {:a 1})))
     {:tx-data [:b 2]})

    {:tx-data [:b 2], :sym-table {:a 1, :b 2}})))

(deftest test-replace-symbols
  (is
   (=
    ((:enter replace-symbols)
     {:sym-table {:a "a" :b "b"}
      :body-params '(:a {:b [:a]})})

    {:sym-table {:a "a", :b "b"}
     :body-params '("a" {"b" ["a"]})})))

(deftest test-eval-body
  (is
   (=
    (eval-body {:body-params '(+ 1 2)})

    {:status 200
     :headers {"Content-Type" "application/transit+json"}
     :body {:result 3}})))

(deftest test-resp->transit
  (is
   (=
    ((:leave resp->transit)
     {:response {:body '(1 2 3)}})

    {:response {:body "[\"~#list\",[1,2,3]]"}}))

  (is
   (=
    ((:leave resp->transit)
     {:response {:body {:result #'resp->transit}}})

    {:response {:body "[\"^ \",\"~:result\",\"~$resp->transit\"]"}})))

(deftest test-load-db-instructions
  (is
   (=
    ((:enter load-db-instructions)
     {:body-params
            '(do
               (load-db db0 "resources/test-db.edn")
               (load-db db1 "resources/test-db.edn"))})

    '{:body-params (do),
     :sym-table
     {db0
      [[1 :battle/attacker_commander "Stannis Baratheon"]
       [1 :battle/defender_1 "Bolton"]
       [1 :battle/attacker_size 5000]
       [1 :battle/attacker_4 "Glover"]
       [1 :battle/defender_king "Joffrey/Tommen Baratheon"]
       [1 :battle/attacker_2 "Karstark"]
       [1 :battle/year 300]
       [1 :battle/name "Siege of Winterfell"]
       [1 :battle/attacker_3 "Mormont"]
       [1 :battle/summer false]],
      db1
      [[1 :battle/attacker_commander "Stannis Baratheon"]
       [1 :battle/defender_1 "Bolton"]
       [1 :battle/attacker_size 5000]
       [1 :battle/attacker_4 "Glover"]
       [1 :battle/defender_king "Joffrey/Tommen Baratheon"]
       [1 :battle/attacker_2 "Karstark"]
       [1 :battle/year 300]
       [1 :battle/name "Siege of Winterfell"]
       [1 :battle/attacker_3 "Mormont"]
       [1 :battle/summer false]]},
     :tx-data
     [[db0
       [[1 :battle/attacker_commander "Stannis Baratheon"]
        [1 :battle/defender_1 "Bolton"]
        [1 :battle/attacker_size 5000]
        [1 :battle/attacker_4 "Glover"]
        [1 :battle/defender_king "Joffrey/Tommen Baratheon"]
        [1 :battle/attacker_2 "Karstark"]
        [1 :battle/year 300]
        [1 :battle/name "Siege of Winterfell"]
        [1 :battle/attacker_3 "Mormont"]
        [1 :battle/summer false]]]
      [db1
       [[1 :battle/attacker_commander "Stannis Baratheon"]
        [1 :battle/defender_1 "Bolton"]
        [1 :battle/attacker_size 5000]
        [1 :battle/attacker_4 "Glover"]
        [1 :battle/defender_king "Joffrey/Tommen Baratheon"]
        [1 :battle/attacker_2 "Karstark"]
        [1 :battle/year 300]
        [1 :battle/name "Siege of Winterfell"]
        [1 :battle/attacker_3 "Mormont"]
        [1 :battle/summer false]]]]})))

(deftest round-trip
  (is
   (=
    (-> {:body-params '(do
                         (load-db db0 "resources/test-db.edn")
                         (:a db0))}
        ((:enter (sym-table-interceptor (atom {:a 'first}))))
        ((:enter load-db-instructions))
        ((:enter replace-symbols)))
    '{:body-params
      (do
        (first
         [[1 :battle/attacker_commander "Stannis Baratheon"]
          [1 :battle/defender_1 "Bolton"]
          [1 :battle/attacker_size 5000]
          [1 :battle/attacker_4 "Glover"]
          [1 :battle/defender_king "Joffrey/Tommen Baratheon"]
          [1 :battle/attacker_2 "Karstark"]
          [1 :battle/year 300]
          [1 :battle/name "Siege of Winterfell"]
          [1 :battle/attacker_3 "Mormont"]
          [1 :battle/summer false]])),
      :sym-table
      {:a first,
       db0
       [[1 :battle/attacker_commander "Stannis Baratheon"]
        [1 :battle/defender_1 "Bolton"]
        [1 :battle/attacker_size 5000]
        [1 :battle/attacker_4 "Glover"]
        [1 :battle/defender_king "Joffrey/Tommen Baratheon"]
        [1 :battle/attacker_2 "Karstark"]
        [1 :battle/year 300]
        [1 :battle/name "Siege of Winterfell"]
        [1 :battle/attacker_3 "Mormont"]
        [1 :battle/summer false]]},
      :tx-data
      [[db0
        [[1 :battle/attacker_commander "Stannis Baratheon"]
         [1 :battle/defender_1 "Bolton"]
         [1 :battle/attacker_size 5000]
         [1 :battle/attacker_4 "Glover"]
         [1 :battle/defender_king "Joffrey/Tommen Baratheon"]
         [1 :battle/attacker_2 "Karstark"]
         [1 :battle/year 300]
         [1 :battle/name "Siege of Winterfell"]
         [1 :battle/attacker_3 "Mormont"]
         [1 :battle/summer false]]]]})))
