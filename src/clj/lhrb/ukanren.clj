(ns lhrb.ukanren
  (:refer-clojure :exclude [==]))

(defn lvar?
  "wrapper around symbol?
  introduces to decouple logic vars from concrete implementation.
  Currently they are still just clj symbols"
  [x]
  (symbol? x))

(defn walk
  "walks the environment as long as it finds a new
  association value"
  [env val]
  (if-let [val' (get env val)]
    (recur env val')
    val))

(defn unify
  "returns nil if unification is not possible,
   else extends the given env with zero or more associations"
  [env x y]
  (let [x (walk env x)
        y (walk env y)]
    (cond
      (nil? env)          nil
      (and (lvar? x)
           (lvar? y))   (assoc env x y)
      (lvar? x)         (assoc env x y)
      (lvar? y)         (assoc env y x)
      :else               (when (= x y) env))))

(defn ==
  "returns a function that takes a stream of environments,
  tries to unify the given x and y in each of them and returns
  all non-nil environments"
  [x y]
  (fn [envs]
    (->> envs
         (map (fn [env] (unify env x y)))
         (remove nil?))))

(def conj*
  "composes functions that take a stream of enviroments"
  comp)

(defn disj*
  "returns a function that takes a stream of enviroments,
  applies each given clause to the stream and concats the results"
  [& clauses]
  (fn [envs]
    (->> clauses
         (mapcat (fn [expr] (expr envs))))))
