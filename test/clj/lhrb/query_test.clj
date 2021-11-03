(ns lhrb.query-test
  (:require [lhrb.query :as sut :refer [q]]
            [clojure.test :as t]
            [lhrb.test :refer [is=]]
            [lhrb.readcsv :refer [create-got-db]]))

(t/deftest test-q
  (let [db [[0 :name "Peter"]
            [0 :age 40]
            [0 :likes "Pizza"]
            [1 :name "Erik"]
            [1 :likes "Pizza"]
            [1 :age 30]
            [2 :age 40]
            [2 :likes "Pizza"]]]

    (is= (q {:find [?e]
             :where [[?e :likes "Pizza"]]} db)
         [[2] [1] [0]])

    (is= (q {:find [?e]
             :where [[?e :likes "Pizza"]
                     [?e :age 40]]} db)
         [[2] [0]])

    (is= (q {:find [?e]
             :where [[?e :name (or "Peter" "Erik")]]} db)
         [[0] [1]])

    (is= (q {:find [?e]
             :where [[?e :age (> ?a 30)]]} db)
         [[0] [2]])))

(t/deftest got-test
  (let [db (create-got-db)
        noble-def-cmd [["Renly Baratheon" "nobel"]
                       ["Randyll Tarly" "nobel"]
                       ["Mathis Rowan" "nobel"]
                       ["Cortnay Penrose" "nobel"]
                       ["Loras Tyrell" "nobel"]]]
    (is=
     "simply test multiple joins"
     (q {:find [?name ?noble]
         :where [[?b :battle/location "Storm's End"]
                 [?b :battle/defender_commander ?name]
                 [?p :char/Name ?name]
                 [?p :char/Nobility ?noble]]}
        db)
     noble-def-cmd)

    (is=
     "test 'or' clause. Expect to find two names."
     (count
      (q {:find [?e]
          :where [[?e :char/Name (or "Randa" "Drogo")]]}
         db))
     2)))
