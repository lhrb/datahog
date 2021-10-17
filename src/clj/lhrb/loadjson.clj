(ns lhrb.loadjson
  (:require [jsonista.core :as json]))

(defn- gen
  "Returns a id generator function. Ids look like this: :id/e0 :id/e1 ..."
  []
 (let [id (atom -1)]
   (fn []
     (keyword "id" (str "e" (swap! id inc))))))

(defn- create-from-map
  "Creates triplets from given map. Currently doesn't process vectors inside vectors"
  [id id-gen-fn m]
  (->> m
       (reduce
          (fn [acc [k v]]
            (cond
              (map? v) (let [n-id (id-gen-fn)]
                         (-> acc
                             (conj [id k n-id])
                             (into (create-from-map n-id id-gen-fn v))))
              (vector? v) (reduce
                           (fn [acc elem]
                             (if (map? elem)
                               ;;TODO redundant ->refactor
                               (let [n-id (id-gen-fn)]
                                (-> acc
                                    (conj [id k n-id])
                                    (into (create-from-map n-id id-gen-fn elem))))
                               (conj acc [id k elem])))
                           acc v)
              :else (conj acc [id k v])))
          #{})))

(defn create-triplets
  "Generates a triplet-'db' from a nested datastructure.
  E.g: (create-triplets {:a 1 :b 2})
         => #{[:id/e0 :a 1]
              [:id/e0 :b 2]}

       complex:
       (create-triplets {:a {:b [{:c 1} {:d 2}]}}
         => #{[:id/e0 :a :id/e1]
              [:id/e1 :b :id/e2]
              [:id/e1 :b :id/e3]
              [:id/e2 :c 1]
              [:id/e3 :d 2]}
  for more examples see tests"
  [entity]
  (let [id-gen-fn (gen)]
    (cond
      (map? entity) (create-from-map (id-gen-fn) id-gen-fn entity)
      (vector? entity) (->> entity
                            (reduce
                             (fn [acc m]
                               (into acc (create-from-map (id-gen-fn) id-gen-fn m)))
                             #{}))
      :else (throw (IllegalArgumentException. "Allowed input: map or vector")))))

(defn db-from-json
  ([entities] (db-from-json entities false))
  ([entities convert-to-keywords?]
   (-> entities
       (json/read-value (if convert-to-keywords?
                          json/keyword-keys-object-mapper
                          json/default-object-mapper))
       (create-triplets))))

(comment
 (create-triplets {:a 1 :b 2})

 (db-from-json (json/write-value-as-string {:hallo [1 2]}))

 ,)
