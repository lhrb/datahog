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

(defn sym-table-interceptor [sym-table]
  "enter: add the sym-table to the request
   leave:  updates sym-table if transaction data is available"
  {:name :sym-table-interceptor
   :enter (fn [ctx]
            (assoc ctx :sym-table @sym-table))
   :leave (fn [ctx]
            (if-let [[sym ref] (:tx-data ctx)]
              (do
                (swap! sym-table (fn [x] (assoc x sym ref)))
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
                           (filter match-load-db-form))]))})

(comment
  (def ctx {:body-params
            '(do
               (load-db db0 "resources/got-db.edn")
               (load-db db1 "resources/got-db.edn"))})
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
     replace-symbols]}
   :handler eval-body})


(comment

  (def path "resources/got-db.edn")
  (def db-name 'test-db)

  ;; pretty messy I should checkout zippers ...
  (defn remove-forms [pred ast]
    (let [rmv-from-ast
          (fn rmv-from-ast
            [pred ast]
            (loop [result '()
                   [head & rst] ast]
              (let [result' (if (pred head)
                        result
                        (conj result
                              (if (list? head)
                                (rmv-from-ast pred head)
                                head)))]
                (if rst
                  (recur result' rst)
                  result'))))]
      (w/postwalk
       #(if (seq? %) (reverse %) %)
       (rmv-from-ast pred ast))))


  (remove-forms
      (fn [x]  (and (list? x) (= '+ (first x))))
      '(-
        (- 1 1 (+ 1 1))
        3
        (+ 1 2)
        (- 2 3 (- 1 1))))

  ,)
