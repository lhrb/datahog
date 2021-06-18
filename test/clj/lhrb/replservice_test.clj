(ns lhrb.replservice-test
  (:require  [clojure.test :refer [deftest is testing]]
             [lhrb.replservice :as t]))

(deftest test-sym-table-interceptor
  (is
   (=
    ((:enter
      (t/sym-table-interceptor (atom {:a 1})))
     {})

    {:sym-table {:a 1}}))

  (is
   (=
    ((:leave
      (t/sym-table-interceptor (atom {:a 1})))
     {:tx-data [[:b 2] [:c 3]]})

    {:tx-data [[:b 2] [:c 3]], :sym-table {:a 1, :b 2, :c 3}})))

(deftest test-replace-symbols
  (is
   (=
    ((:enter t/replace-symbols)
     {:sym-table {:a "a" :b "b"}
      :body-params '(:a {:b [:a]})})

    {:sym-table {:a "a", :b "b"}
     :body-params '("a" {"b" ["a"]})})))

(deftest test-eval-body
  (is
   (=
    (t/eval-body {:body-params '(+ 1 2)})

    {:status 200
     :headers {"Content-Type" "application/transit+json"}
     :body {:result 3}})))

(deftest test-resp->transit
  (is
   (=
    ((:leave t/resp->transit)
     {:response {:body '(1 2 3)}})

    {:response {:body "[\"~#list\",[1,2,3]]"}}))

  (testing "can we handle nil?"
    (is
     (=
      ((:leave t/resp->transit)
       {:response {:body nil}})

      {:response {:body "[\"~#'\",null]"}})))

  (is
   (=
    ((:leave t/resp->transit)
     {:response {:body {:result #'t/resp->transit}}})

    {:response {:body "[\"^ \",\"~:result\",\"~$resp->transit\"]"}})))

(deftest test-load-db-instructions
  (is
   (=
    ((:enter t/load-db-instructions)
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
  (testing "test enter interceptor chain"
   (is
    (=
     (-> {:body-params
          '(do
             (load-db db0 "resources/test-db.edn")
             (:a db0))}
         ((:enter (t/sym-table-interceptor (atom {:a 'first}))))
         ((:enter t/load-db-instructions))
         ((:enter t/replace-symbols)))
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

  (testing "test leave interceptor chain"
   (is 
    (=
     (-> {:response {:body {:result 5}}
          :tx-data [[:b 2] [:c 3]]}
         ((:leave (t/sym-table-interceptor (atom {:a 1}))))
         ((:leave t/resp->transit)))

     {:response {:body "[\"^ \",\"~:result\",5]"},
      :tx-data [[:b 2] [:c 3]],
      :sym-table {:a 1, :b 2, :c 3}}))))
