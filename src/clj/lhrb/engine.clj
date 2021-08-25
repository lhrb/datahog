(ns lhrb.engine
  (:refer-clojure :exclude [==])
  (:require [clojure.string :as str]
            [clojure.core.match :refer [match]]
            [lhrb.ukanren :refer [lvar? walk unify == conj* disj*]]))

(defn create-index
  "creates an index from eav data
  (create-index [[e a v] ...] 0 1)
  => {e {a #{[e a v] ...}}}"
  [data idx1 idx2]
  (->> data
       (reduce
        (fn [index elem]
          (update-in
           index [(get elem idx1) (get elem idx2)]
           (fnil conj #{}) elem))
        {})))

(comment
  (create-index [[1 2 3] [1 2 4]] 0 1)
  ,)

(def mem-index (memoize create-index))

(defn for-index
  "retrieves data from memoized index-fn"
  ([db idx1 idx2 e]
   (->> (get-in (mem-index db idx1 idx2) [e])
        (mapcat (fn [[k v]] v))
        ;; remove into?
        (into #{})))
  ([db idx1 idx2 e1 e2]
   (get-in (mem-index db idx1 idx2) [e1 e2])))

(comment
  (for-index [[1 2 3] [1 2 4] [2 3 5]] 0 1 2)

  (get-in [[1] 2 3] [0 0])
  ,)

(defn grounded? [x]
  (not (lvar? x)))

(defn q-db [db e a v]
  (fn [envs]
    (->> envs
         (mapcat
          (fn [env]
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
                                      (unify env v v'))))))
         (remove nil?))))

(comment
  (def db
    [[0 :name "Peter"]
     [0 :age 40]
     [0 :likes "Pizza"]
     [1 :name "Erik"]
     [1 :likes "Pizza"]
     [1 :age 30]])

  (->> '({})
       ((conj*
         (q-db db 'a :likes "Pizza")
         (q-db db 'a :age 40))))

  (def dbt
    [[0 :name "Peter"]
     [0 :ancestor "Hans"]
     [1 :name "Hans"]
     [1 :ancestor "Ruben"]
     [2 :name "Ruben"]])

  (defn ancestor? [db ?from]
    (disj*
     (q-db db 'e :ancestor ?from)
     ))


  (require '[lhrb.readcsv :refer [create-got-db]])

  (def db (create-got-db))

  (count db)

  '(:battle/attacker_commander
   :battle/defender_1
   :battle/attacker_size
   :battle/attacker_4
   :battle/defender_king
   :battle/attacker_2
   :battle/year
   :battle/name
   :battle/attacker_3
   :battle/summer
   :battle/location
   :battle/attacker_king
   :battle/defender_2
   :battle/battle_number
   :battle/region
   :battle/defender_commander
   :battle/attacker_1
   :battle/defender_size
   :battle/major_capture
   :battle/battle_type
   :battle/major_death
   :battle/attacker_outcome
   :battle/note
   :char/Gender
   :char/Name
   :char/Nobility
   :char/Allegiances
   :char/DeathYear)

  (->> '({})
       ((conj*
         (q-db db 'battle :battle/battle_type 'type))))

  (time (->> '({})
        ((conj*
          (q-db db 'battle :battle/battle_type "ambush")
          (q-db db 'battle :battle/attacker_commander 'names)
          (q-db db 'person :char/Name 'names)
          (q-db db 'person :char/Allegiances 'house)))))

  ;; define a rule
  (defn house-attacking-commander [db ?battle]
    (conj*
     (q-db db ?battle :battle/attacker_commander 'names)
     (q-db db 'person :char/Name 'names)
     (q-db db 'person :char/Allegiances 'house)))

  (->> '({})
       ((conj*
         (q-db db 'battle :battle/battle_type "ambush")
         (house-attacking-commander db 'battle))))

  (->> '({})
       ((conj*
         (q-db db 'battle :battle/battle_type "ambush")
         (q-db db 'battle :battle/year 'byear)
         (disj*
          (q-db db 'battle :battle/attacker_commander 'names)
          (q-db db 'battle :battle/defending_commander 'names)))))
  ,)

(defn reify-var [& vars]
    (fn [env-stream] ;; maybe don't return a fn?
      (->> env-stream
           (mapv
            (fn [env]
              (mapv ;; extract and use juxt?
               (fn [var] (walk env var)) vars))))))

(defn run [& clauses]
    (->> [{}]
         ((apply conj* clauses))))

(comment
    "experiment with juxt  ((juxt a b c) x) => [(a x) (b x) (c x)]
    more concise vs readability?"
    (let [extract (fn [var]
                    (fn [env] (walk env var)))]
      (->> [{'a 1 'b 2} {'a 3 'b 4 'c 5} {'a 4 'b 10}]
           (map
            (apply juxt (map extract ['a 'b])))))

    (run
      ;(reify-var 'names 'house)
      (q-db db 'battle :battle/battle_type "ambush")
      (q-db db 'battle :battle/attacker_commander 'names)
      (q-db db 'person :char/Name 'names)
      (q-db db 'person :char/Allegiances 'house))
    ,)

(defn filtero [op ?var c]
  (fn [envs]
    (->> envs
         (filter
          (fn [env] (op (walk env ?var) c))))))

(defn substitutions [clause db]
  (match [clause]
         ;; [?e :age (> ?a 10)]
         [[e a ([(op :guard #{'= '> '>= '< '<=}) var value] :seq)]]
         `[(filtero ~op ~var ~value)
           (q-db ~db ~e ~a ~var)]
         ;; [?e :age (or 10 15)]
         ;; TODO find a good way to make it work on all pos
         [[e a (['or & cases] :seq)]]
         (let [c-cases (map
                        (fn [v] `(q-db ~db ~e ~a ~v))
                        cases)]
           `[(disj* ~@c-cases)])
         ;; [?e :age 10]
         [[e a v]]
         `(q-db ~db ~e ~a ~v)
         :else clause))

(defn compile-where-clauses
  "transforms vector clauses into q-db queries
  e.g. [?a :age 10] => (q-db db ?a :age 10)

  added
  [?e :age (> ?age 10)]
    => ((filtero > ?age 10) (q-db db ?a :age ?age))"
  [clauses db]
  (->> clauses
       (map
        (fn [clause]
          (substitutions clause db)
          #_(if (vector? clause)
            ;; look if object is a filter clause
            ;; add filtero rule
            ;; NOTE this part is pretty messy try to
            ;; make this clearer
            (if (list? (last clause))
              (let [[op var c] (last clause)
                    [subj pred] (butlast clause)]
                [`(filtero ~op ~var ~c)
                 `(q-db ~db ~subj ~pred ~var)])
              `(q-db ~db ~@clause))
            clause)))
       (reduce
        (fn [acc e]
          (if (vector? e)
            (into acc e)
            (conj acc e)))
        [])))

(defn find-lvars
  "finds and returns all unique logic-variables.
  A logic var begins with an '?'"
  [find where] ;; maybe decouple from concrete impl?
  (->> (into find where)
       (flatten)
       (filter
        (fn [s]
          (and
           (lvar? s)
           (str/starts-with? (str s) "?"))))
       (distinct)))

;; TODO add _ as don't care
(defmacro q [{:keys [find where]} db]
  (let [;; test if vars in find clause are also in where clause
        lvars (find-lvars find where)
        where-compiled (compile-where-clauses where db)]
    `(let [~@(interleave
              lvars
              (map
               (fn [sym]
                 `(gensym ~(name sym)))
               lvars))]
       (run
         (reify-var ~@find)
         ~@where-compiled))))

(comment
  (macroexpand
   '(q {:find [?name ?noble]
        :where [[?b :battle/location "Storm's End"]
                [?b :battle/defender_commander ?name]
                [?p :char/Name ?name]
                [?p :char/Nobility ?noble]]}
       db))

  (q {:find [?name ?noble]
      :where [[?b :battle/location "Storm's End"]
              [?b :battle/defender_commander ?name]
              [?p :char/Name ?name]
              [?p :char/Nobility ?noble]]}
     db)

  (macroexpand
   '(q {:find [?num]
        :where [[?b :battle/attacker_size (> ?num 100)]]}
      db))

  (q {:find [?name ?num]
      :where [[?b :battle/name ?name]
              [?b :battle/attacker_size (> ?num 100)]]}
     db)

  *e

  ;; see filtero now
  (defn gr-th [?is count]
  (fn [envs]
    (->> envs
         (filter
          (fn [env] (> (walk env ?is) count))))))

  (->> [{'?is 300} {'?is 150} {'?is 350}]
       ((disj*
         (== '?is 150)
         (gr-th '?is 200))))

  ,)

(defn missing?
  "Keeps envs where the given attribute is missing.
  ?e needs to be ground when walking an enviroment i.e.
  all envs getting thrown away if ?e is not in the env"
  [db ?e attr]
  (fn [envs]
    (->> envs
         (filter
          (fn [env]
            (some? (for-index db 0 1 (walk env ?e) attr)))))))

(comment
  (q {:find [?name]
      :where [(missing? db ?e :char/DeathYear)
              [?e :char/Name ?name]]}
     db)

  (= #{}
   (clojure.set/difference
    (into #{}
          (q {:find [?name]
              :where [[?e :char/Name ?name]
                      [?e :char/DeathYear ?d]]}
             db))
    (into #{}
          (q {:find [?name]
              :where [(missing? db ?e :char/DeathYear)
                      [?e :char/Name ?name]]}
             db))))

  (q {:find [?e]
      :where [[?e :char/Name (or "Randa" "Drogo")]]}
     db)

  (q {:find [?e]
      :where [[?e :char/Name (or (if true "Randa" nil) "Drogo")]]}
     db)


  ;; try recursive rule
  (def db
    [[0 :name "North America"]
     [1 :name "United State"]
     [1 :within 0]
     [2 :name "Idaho"]
     [2 :within 1]])

  (defn within-recursive [db ?location ?name]
    (conj*
     (q-db db )))


  ,)

#_(eval (clojure.edn/read-string "(q {:find [?e]
      :where [[?e :char/Name (or (if true \"Randa\" nil) \"Drogo\")]]}
     db)"))
