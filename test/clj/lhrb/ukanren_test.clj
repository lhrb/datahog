(ns lhrb.ukanren-test
  (:require [lhrb.ukanren :as sut :refer :all]
            [clojure.test :as t]
            [lhrb.util.test :refer [is=]]))

(t/deftest test-mplus
  ;; side note: we use keywords here instead of symbols
  ;; this is fine for this test but won't be sufficient
  ;; in another context
  (is=
   "merge two mature streams"
   (take-all (mplus ($ {:a 1} {:b 2}) ($ {:c 3})))
   '({:a 1} {:b 2} {:c 3}))

  (is=
   "first stream is empty"
   (take-all (mplus nil (cons' {:a 1} nil)))
   '({:a 1}))

  (is=
   "if the first stream is empty we return the second given
  arg -> maybe we have to change the behaviour and return
  mzero here?"
   (mplus nil nil)
   nil)

  (is=
   "given an immature stream we have to realize it first
  note that (sut/mplus (constantly '({:a 1})) '())
  will return a function due to the lazyness"
   (take-all (mplus (constantly (cons' {:a 1} nil)) nil))
   '({:a 1}))

  (is=
   "test stream interleaving. The second stream should be the first
  value in the result"
   (take-all (mplus (constantly ($ {:a 1})) ($ {:b 2})))
   '({:b 2} {:a 1})))

(t/deftest test-mbind
  ;; we need to use a goal here
  (is=
   ""
   (take-all (bind ($ {'a 1}) (== 'b 2)))
   '({a 1 b 2}))

  (is=
   "if we don't have an env every goal will just get thrown away
  fyi mzero = '()"
   (bind nil (== 'b 2))
   nil)

  (is=
   "test function clause should realize the function"
   (take-all (bind (constantly ($ {'a 1})) (== 'b 2)))
   '({a 1 b 2})))


(t/deftest test-==
  (is=
   "basic operation: add the substitution to the given env"
   (take-all ((== 'a 1) {}))
   '({a 1}))

  (is=
   "unify fails -> we throw the env away"
   (take-all ((== 'a 1) {'a 2}))
   '()))

(t/deftest test-disj'
  (is=
   (take-all
    ((disj'
      (== 'a 1)
      (== 'b 2))
     {}))
   '({a 1} {b 2})))

(t/deftest test-conj'
  (is=
   (take-all
    ((conj'
      (== 'a 1)
      (== 'b 2))
     {}))
   '({a 1, b 2}))

  (is=
   "there is no env where a is 1 and 2 at the same time"
   (take-all
    ((conj'
      (== 'a 1)
      (== 'a 2))
     {}))
   '()))

(comment
 (defn fives [x]
   (disj+
    (== x 5)
    (fives x)))

 (t/deftest test-enless-recursion
   (is=
    "n is 3 here but can be any number"
    (take-n 3 ((fives 'x) {}))
    '({x 5} {x 5} {x 5}))))

(t/deftest test-user-level-fun
  (is=
   (take-all (((zzz (== 'x 1)) {})))
   '({x 1}))

  (is=
   (take-all
    ((disj+
      (conj+
       (== 'a 1)
       (== 'b 2)
       (== 'c 3))
      (conj+
       (== 'a 2)
       (== 'b 1))) {}))
   '({a 2, b 1} {a 1, b 2, c 3}))

  (comment
    ;; TODO convert to tests
    (pull
     ((disj+
       (conj+
        (== 'a 1)
        (== 'b 2)
        (== 'c 3))
       (conj+
        (== 'a 2)
        (== 'b 1))) {}))

    (pull
     ((conj+
       (== 'a 1)
       (== 'b 2)
       (== 'c 3)
       (== 'd 4)) {}))

    (macroexpand-1 '(conj+
                     (== a 1)))

    (macroexpand '(conj+
                   (== a 1)
                   (== b 2)
                   (== c 3)
                   (== d 4)))


    ((((((conj+
          (== 'a 1)
          (== 'b 2)
          (== 'c 3)
          (== 'd 4)) {})))))))
