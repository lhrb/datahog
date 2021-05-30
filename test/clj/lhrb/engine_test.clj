(ns lhrb.engine-test
  (:require [clojure.test :refer [deftest is are testing]]
            [lhrb.engine :as e]))

(deftest walk
  (testing "walk"
    (is (= (e/walk {:a 1} :a)
           1))
    (is (= (e/walk {:a :b :b 2} :a)
           2))
    (is (= (e/walk {} :a)
           :a))))

(deftest unify
 (testing "unify"
   (is (nil? (e/unify {} 1 2)))
   (is (= (e/unify {} 1 1)
          {}))
   (is (= (e/unify {'b 1} 'a 'b)
          {'b 1 'a 1}))
   (is (= (e/unify {} 'a 'b)
          {'a 'b}))
   (is (= (e/unify {'a 'b 'b 1} 'a 'b)
          {'a 'b, 'b 1}))
   (is (= (e/unify {'a 'c 'b 'd} 'a 'b)
          {'a 'c, 'b 'd, 'c 'd}))))

(deftest eq==
  (testing "=="
    (is (= ((e/== 1 1) '({}))
           '({})))
    (is (= ((e/== 1 2) '({}))
           '()))
    (is (= ((e/== 'a 1) '({}))
           '({a 1})))))

(deftest conjunction
  (is (= (->> '({})
              ((e/conj*
                (e/== 'a 1)
                (e/== 'b 2))))
         '({a 1 b 2})))
  (is (= (->> '({})
              ((e/conj*
                (e/== 'a 1)
                (e/== 'a 2))))
         '())))

(deftest disjunction
  (is (= (->> '({})
              ((e/disj*
                (e/== 'a 1)
                (e/== 'b 2))))
         '({a 1} {b 2})))
  (is (= (->> '({})
              ((e/conj*
                (e/disj*
                 (e/conj* (e/== 'x "split") (e/== 'y "pea"))
                 (e/conj* (e/== 'x "red") (e/== 'y "bean")))
                (e/== ('x 'y "soup") 'r))))
         '({r "soup", y "pea", x "split"}
           {r "soup", y "bean", x "red"}))))

(deftest db-index
  (testing "create-index"
   (is (= (e/create-index [[1 2 3] [1 2 3]] 0 1)
          {1 {2 #{[1 2 3]}}}))
   (is (= (e/create-index [[1 2 3] [1 2 3]] 1 2)
          {2 {3 #{[1 2 3]}}}))
   (is (= (e/create-index [[1 2 3] [1 2 3]] 2 0)
          {3 {1 #{[1 2 3]}}})))

  (testing "for-index"
    (is (= (e/for-index [[1 2 3] [1 2 3]] 0 1 1)
           #{[1 2 3]}))))

(deftest query-db
  (are [r args]
      (= r
         (->> '({})
              ((e/q-db [[0 :name "Peter"]
                        [0 :age 40]
                        [0 :likes "Pizza"]
                        [1 :name "Erik"]
                        [1 :likes "Pizza"]
                        [1 :age 30]]
                       (args 0)
                       (args 1)
                       (args 2)))))
    '({e 1} {e 0})  ['e :likes "Pizza"]
    '({e 1})        ['e :name "Erik"]
    '({a :name})    [0 'a "Peter"]
    '({v "Peter"})  [0 :name 'v]
    '({a :age, v 40}
      {a :name, v "Peter"}
      {a :likes, v "Pizza"}) [0 'a 'v]))
