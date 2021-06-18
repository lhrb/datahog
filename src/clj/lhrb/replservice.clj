(ns lhrb.replservice
  (:require
   [clojure.walk :as w]
   [muuntaja.core :as m]
   [lhrb.io :refer [disk->edn]]))

(def sym-table
  "contains all symbols accessable by the client."
  (atom {}))

(def resp->transit
  {:name :convert-response-to-transit
   :leave
   (fn [ctx]
     (update-in ctx [:response :body]
      (fn [form]
        (->> form
             (w/postwalk
              (fn [x]
                ;; transit cannot encode var-refs
                (if (var? x)
                  (:name (meta x))
                  x)))
             (m/encode "application/transit+json")
             (slurp)))))})

(defn sym-table-interceptor
  "enter: add the sym-table to the request
   leave:  updates sym-table if transaction data is available"
  [sym-table]
  {:name :sym-table-interceptor
   :enter (fn [ctx]
            (assoc ctx :sym-table @sym-table))
   :leave (fn [ctx]
            (if-let [tx-data (:tx-data ctx)]
              (do
                (swap! sym-table
                 (fn [sym]
                   (reduce
                    (fn [m [k v]]
                      (assoc m k v))
                    sym tx-data)))
                (assoc ctx :sym-table @sym-table))
              ctx))})

(def replace-symbols
  "walks the request body params and swaps out
   symbols contained in the symbol table"
  {:name :replace-symbols
   :enter
   (fn [ctx]
     (let [syms (:sym-table ctx)]
       (update ctx :body-params
        (fn [params]
          (w/postwalk
           (fn [x]
             (if-let [sub (get syms x)]
               sub
               x))
           params)))))})


(defn match-load-db-form
  [form]
  (and
   (list? form)
   (= 'load-db (first form))))

(defn rmv-from-ast
  "removes nodes matching the given predicate from a
  lisp abstract syntax tree"
  [pred ast]
    (w/prewalk
     (fn [node]
       (if (list? node)
         (remove pred node)
         node))
     ast))

(def load-db-instructions
  "* extract (load-db ..) forms from :body-params
   * create-dbs
     * optimistic update symbolic table
     * add db to transactions (tx-data) to persist"
  {:name :load-db-instructions
   :enter
   (fn [ctx]
     (let [load-forms (->> (:body-params ctx)
                           (tree-seq list? identity)
                           (filter match-load-db-form)
                           (map
                            (fn [[_ name db]]
                              [name (disk->edn db)])))
           body-params (->> (:body-params ctx)
                            (rmv-from-ast match-load-db-form))]
       (-> ctx
           (update-in [:sym-table]
            (fn [item]
              (->> load-forms
                   (reduce
                    (fn [m [k v]]
                      (assoc m k v))
                    item))))
           (update-in [:tx-data]
            (fnil into []) load-forms)
           (assoc-in [:body-params]
            body-params))))})

(comment
  (def ctx {:body-params
            '(do
               (load-db db0 "resources/test-db.edn")
               (load-db db1 "resources/test-db.edn"))})
  ,)


(defn eval-body [ctx]
  {:status 200
   :headers {"Content-Type" "application/transit+json"}
   :body {:result (eval (:body-params ctx))}})

(def repl-route
  {:post
   {:interceptors
    [resp->transit
     (sym-table-interceptor #'sym-table)
     load-db-instructions
     replace-symbols]}
   :handler eval-body})


(comment

  (def path "resources/got-db.edn")
  (def db-name 'test-db)

  (rmv-from-ast
      (fn [x]  (and (list? x) (= '+ (first x))))
      '(-
        (- 1 1 (+ 1 1))
        3
        (+ 1 2)
        (- 2 3 (- 1 1))))

  (update-in {:sym {:c 4}} [:sym]
   (fn [item]
     (->> [[:a 1] [:b 2]]
          (reduce
           (fn [m [k v]]
             (assoc m k v))
           item))))

  (update-in {:tx-data [[:a 2]]} [:tx-data]
   (fnil into []) [[:b 2]])


  ,)
