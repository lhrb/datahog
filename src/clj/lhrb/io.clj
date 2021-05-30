(ns ^{:doc "read and write edn to disk"}
    lhrb.io)

(defn edn->disk [path edn-ds]
 (with-open [w (clojure.java.io/writer path)]
   (binding [*print-length* false
             *out* w]
     (pr edn-ds))))

(defn disk->edn [path]
  (with-open [r (clojure.java.io/reader path)]
   (clojure.edn/read (java.io.PushbackReader. r))))

(comment
  (require '[lhrb.readcsv :refer [create-got-db]])

  (def db (create-got-db))
  (def fname "resources/got-db.edn")
  (edn->disk fname db)
  (disk->edn "resources/got-db.edn")

  ,)
