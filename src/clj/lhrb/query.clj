(ns lhrb.query
  (:require [lhrb.ukanren :as k :refer :all]
            [clojure.core.match :refer [match]]
            [clojure.string :as str]))

(defn create-index
  "creates an index from eav data
  (create-index [[e a v] ...] 0 1)
  => {e {a #{[e a v] ...}}}"
  [data idx1 idx2]
  (->> data
       (reduce
        (fn [index elem]
          (update-in index
                     [(get elem idx1) (get elem idx2)]
                     (fnil conj #{}) elem))
        {})))

;; building an index is a expensive operation. To speed up querying we
;; memoize the indexes
(def mem-index (memoize create-index))

(defn for-index
  "retrieves data from memoized index-fn
  TODO better naming"
  ([db idx1 idx2 e]
   (->> (get-in (mem-index db idx1 idx2) [e])
        (mapcat (fn [[_ v]] v))
        ;; remove into?
        (into #{})))
  ([db idx1 idx2 e1 e2]
   (get-in (mem-index db idx1 idx2) [e1 e2])))

(defn grounded? [x]
  (not (lvar? x)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; query goals
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn query-goal
  [db e a v]
  (fn [env]
    (k/lcons
     (let [e' (walk env e)
           a' (walk env a)
           v' (walk env v)]
       (case [(grounded? e') (grounded? a') (grounded? v')]
         [false true true]   (for [[e _ _] (for-index db 1 2 a' v')]
                               (unify env e e'))
         [true false true]   (for [[_ a _] (for-index db 0 2 e' v')]
                               (unify env a a'))
         [true true false]   (for [[_ _ v] (for-index db 0 1 e' a')]
                               (unify env v v'))
         [true false false]  (for [[_ a v] (for-index db 0 1 e')]
                               (-> env (unify a a') (unify v v')))
         [false true false]  (for [[e _ v] (for-index db 1 2 a')]
                               (-> env (unify e e') (unify v v')))
         [false false true]  (for [[e a _] (for-index db 2 1 v')]
                               (-> env (unify e e') (unify a a')))
         [true true true]    (for [[_ _ v] (for-index db 0 1 e' a')]
                               (unify env v v')))))))

(defn filtero [op ?var c]
  (fn [env]
    (when (op (walk env ?var) c)
      (unit env))))

(defmacro run [& clauses]
  `(take-all
    ((conj+ ~@clauses) {})))

(defn substitutions [clause db]
  (match [clause]
         ;; [?e :age (> ?a 10)]
         [[e a ([(op :guard #{'= '> '>= '< '<=}) var value] :seq)]]
         `[(query-goal ~db ~e ~a ~var)
           (filtero ~op ~var ~value)]
         ;; [?e :age (or 10 15)]
         ;; TODO find a good way to make it work on all pos
         [[e a (['or & cases] :seq)]]
         (let [c-cases (map (fn [v] `(query-goal ~db ~e ~a ~v)) cases)]
           `[(disj+ ~@c-cases)])
         ;; [?e :age 10]
         [[e a v]]
         `(query-goal ~db ~e ~a ~v)
         :else clause))

(defn compile-where-clauses
  "transforms vector clauses into query-goal queries
  e.g. [?a :age 10] => (query-goal db ?a :age 10)

  added
  [?e :age (> ?age 10)]
    => ((filtero > ?age 10) (query-goal db ?a :age ?age))"
  [clauses db]
  (->> clauses
       (map (fn [clause] (substitutions clause db)))
       (reduce (fn [acc e] (if (vector? e)
                            (into acc e)
                            (conj acc e)))
               [])))

(defn find-lvars
  "finds and returns all unique logic-variables.
  A logic var begins with an '?'"
  [find where] ;; maybe decouple from concrete impl?
  (->> (into find where)
       (flatten)
       (filter  (fn [s] (and (lvar? s)
                            (str/starts-with? (str s) "?"))))
       (distinct)))

(defn reify-v [vars result]
  (->> result
       (mapv (fn [env]
               (mapv (fn [var] (walk env var)) vars)))))

(defmacro q [{:keys [find where]} db]
  (let [;; test if vars in find clause are also in where clause
        lvars (find-lvars find where)
        where-compiled (compile-where-clauses where db)]
    `(let [~@(interleave lvars (map (fn [sym] `(gensym ~(name sym))) lvars))]
       (reify-v ~find (run ~@where-compiled)))))
