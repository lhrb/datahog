(ns lhrb.readcsv
  (:require
   [clojure.java.io :as io]
   [clojure.data.csv :as csv]
   [clojure.string :as str]))

(defn keyword-add-ns [ns k]
  (keyword ns (str/replace (name k) #" " "")))

(defn csv-data->maps
  ([csv-data]
   (csv-data->maps keyword csv-data))
  ([keyword-fn csv-data]
   (map zipmap
        (->> (first csv-data)
             (map keyword-fn)
             repeat)
        (rest csv-data))))

(defn read-csv [filename]
  (with-open [reader (io/reader filename)]
    (doall (->> (csv/read-csv reader)))))

;;; dataset specific data wrangling

(defn parse-names [names]
  (mapv str/trim
       (-> names
           (str/split #","))))

(defn parse-number [number]
  (clojure.edn/read-string number))

(defn parse-bool-str [bool-str]
  (= bool-str "1"))

(defn parse-gender [gender]
  (if (= gender "1")
    "male"
    "female"))

(defn parse-nobility [n]
  (if (= n "1")
    "nobel"
    "commoner"))

(defn parse [k v {:keys [schema parser]}]
  (if-let [parser (parser (schema k))]
    (parser v)
    v))

(defn parse-data [parse-cfg data]
  (->> data
       (map (fn [e]
              (reduce-kv
               (fn [m k v]
                 (if (empty? v)
                   m
                   (assoc m k (parse k v parse-cfg))))
               {}
               e)))))

(defn map->eav
  ([data]
   (let [ids (atom 0)]
     (map->eav data (fn [] (swap! ids inc)))))
  ([data id-gen]
   (->> data
        (mapcat
         (fn [e]
           (let [id (id-gen)]
             (for [[k v] e]
               [id k v]))))
        (reduce
         (fn [acc [e a v]]
           (if (vector? v)
             (into acc (for [n v] [e a n]))
             (conj acc [e a v])))
         []))))

(defn create-got-db []
  (let [battles-file "resources/got/battles.csv"
        chars-file "resources/got/character-deaths.csv"
        parsers {:names       #'parse-names
                 :number      #'parse-number
                 :bool        #'parse-bool-str
                 :nobility    #'parse-nobility
                 :gender      #'parse-gender}

        parse-schema {:battle/attacker_commander :names,
                      :battle/major_capture :bool,
                      :battle/attacker_size :number,
                      :battle/year :number,
                      :battle/summer :bool,
                      :battle/battle_number :number,
                      :battle/major_death :bool,
                      :battle/defender_commander :names,
                      :battle/defender_size :number
                      :char/DeathYear :number
                      :char/Gender :gender
                      :char/Nobility :nobility}

        chars
        (->> (read-csv chars-file)
             (csv-data->maps  #(keyword-add-ns "char" %))
             (map #(select-keys % [:char/DeathYear
                                   :char/Gender
                                   :char/Name
                                   :char/Nobility
                                   :char/Allegiances]))
             (parse-data {:schema parse-schema :parser parsers}))

        battles
        (->> (read-csv battles-file)
             (csv-data->maps #(keyword-add-ns "battle" %))
             (parse-data {:schema parse-schema :parser parsers}))]
    (map->eav (into chars battles))))

(comment
  (map->eav [{:list ["a" "b" "c"]} ])

  (create-got-db)
  ,)
