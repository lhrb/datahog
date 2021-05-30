(ns lhrb.datahog
  (:gen-class)
  (:require [clojure.string :as str]))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (greet {:name (first args)}))

(defmulti clause-item
  (fn [item]
    (cond
      (symbol? item)  :var
      (fn? item)      :fn
      :else           :const)))

(defmethod clause-item :var
  [_]
  `(constantly true))

(defmethod clause-item :fn
  [item]
  item)

(defmethod clause-item :const
  [item]
  `(fn ~'compare-const [x#] (= x# ~item)))

(defmacro parse-query [q]
  (->> q
       (mapv (fn [x] (->> x (mapv clause-item))))))


(defn fixed-point
  [f x]
  (let [x' (f x)]
    (if (= x x')
      x
      (recur f x'))))


(macroexpand (parse-query [[?e :child "a"] [?e :name "x"]]))

(defn walk
  "find an associated value for val in assv or
  returns val, does not detected circles atm"
  [assv val]
  (if-let [[_ val'] (find assv val)]
    (recur assv val')
    val))

(comment
  (walk {:a 1} :a)
  (walk {:a :b :b 1} :a)
  (walk {} :a)
  ,)

(defn unify
  "finds an enviroment where x & y is"
  [env x y]
  (let [x (walk env x)
        y (walk env y)]
    (cond
      (nil? env)          nil
      (and (symbol? x)
           (symbol? y))   (assoc env x y)
      (symbol? x)         (assoc env x y)
      (symbol? y)         (assoc env y x)
      :else               (when (= x y) env))))

(comment
  (unify {} 1 2)
  (unify {} 1 1)
  (unify {'a 1} 'a 'b)
  (unify {} 'a 'b)
  (unify {'a 'b 'b 1} 'a 'b)
  ,)

(defn create-index
  "creates an index for the (e)ntity (a)ttribute (v)alue triplet
     eav 0 1
     ave 1 2
     vea 2 0
     vae 2 1"
  [db idx1 idx2]
  (->> db
       (reduce
        (fn [acc elem]
          (update-in acc [(elem idx1) (elem idx2)] (fnil conj #{}) elem))
        {})))

(def cache-index
  (memoize create-index))

(defn get-from-idx
  ([idx x]
   (->> (get idx x)
        (vals)
        (apply concat)))
  ([idx x y]
   (get-in idx [x y])))

(defn grounded? [x]
  (not (symbol? x)))

(defn from-idx
  ([db idx1 idx2 x y]
   (-> (cache-index db idx1 idx2)
       (get-from-idx x y)))
  ([db idx1 idx2 x]
   (-> (cache-index db idx1 idx2)
       (get-from-idx x))))

(defn q [db e a v]
  (mapcat
   (fn [env]
     (->> (let [e' (walk env e)
                a' (walk env a)
                v' (walk env v)]
            (case [(grounded? e') (grounded? a') (grounded? v')]
              [false true true] (->> (from-idx db 1 2 a' v')
                                     (map (fn [[e _ _]] (unify env e e'))))

              [true false true] (->> (from-idx db 0 2 e' v')
                                     (map (fn [[_ a _]] (unify env a a'))))

              [true true false] (->> (from-idx db 0 1 e' a')
                                     (map (fn [[_ _ v]] (unify env v v'))))

              [true false false] (->> (from-idx db 0 1 e')
                                      (map (fn [[_ a v]] (-> env (unify a a') (unify v v')))))

              [false true false] (->> (from-idx db 1 2 a')
                                      (map (fn [[e _ v]] (-> env (unify e e') (unify v v')))))

              [false false true] (->> (from-idx db 2 1 v')
                                      (map (fn [[e a _]] (-> env (unify e e') (unify a a')))))

              [true true true] (->> (from-idx db 0 1 e' a')
                                    (map (fn [[_ _ v]] (unify env v v'))))))

          (remove nil?)))))

(transduce
 (q db 'e :name "x")
 conj [{}])




(comment

  (require '[lhrb.parse :as parse])

  (def db
    ( ->> (parse/parse [{:name "x" :child "y"} {:name "y" :child "z"} {:name "z" :child "a"} {:name "x"} {:name "x"}])
          (map (fn [{:keys [e a v]}] [e a v]))))

  (for [[e] (-> (cache-index db 1 2) (get-from-idx :name "x"))]
     (unify {} e 'e))

(->> (-> (cache-index db 1 2) (get-from-idx :name "x"))
     (map (fn [[e]] )))

  ;; eav
  (create-index db 0 1)
  ;; ave 1 2
  ;; vea 2 0

  (get-from-idx (cache-index db 1 2) :name "x")

  (vals (get (cache-index db 1 2) :name))



  'rule ['((ancestor ?a ?b) [?a :child ?b])
         '((ancestor ?a ?c) [?a :child ?b]
                            [?b :child ?c])]

  (let [[e? a? v?] (parse-query [?e :name "x"])]
    (->> db
         (filter (fn [{:keys [e a v]}] (and (e? e) (a? a) (v? v))))))


  ,
  )
