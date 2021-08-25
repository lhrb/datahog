(ns lhrb.showcase-engine
  (:require [lhrb.ukanren :refer [walk unify == conj* disj*]]))

(comment

  (walk {:a 1} :a)
  (walk {:a :b :b 2} :a)
  ;(walk {:a :b :b :a} :a)
  (walk {} :a)


  (unify {} 1 2)
  (unify {} 1 1)
  (unify {'b 1} 'a 'b)
  (unify {} 'a 'b)
  (unify {'a 'b 'b 1} 'b 'a)
  (unify {'a 'c 'b 'd} 'a 'b)

  ((== 1 1) '({} {}))
  ((== 1 2) '({}))
  ((== 'a 1) '({}))


  (->> '({c 1} {b 1})
       ((conj*
         (== 'a 1)
         (== 'b 2))))

  (->> '({})
       ((conj*
         (== 'a 1)
         (== 'a 2))))

  (->> '({c 1} {b 1})
       ((disj*
         (== 'a 1)
         (== 'b 2)
         (== 'd 2))))

  (->> '({})
       ((conj*
         (disj*
          (conj* (== 'x "split") (== 'y "pea"))
          (conj* (== 'x "red") (== 'y "bean")))
         (== ('x 'y "soup") 'r))))

  ,)
