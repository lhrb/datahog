(ns lhrb.replservice
  (:require
   [clojure.walk :as w]
   [muuntaja.core :as m]))

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

(defn eval-body [ctx]
  {:status 200
   :headers {"Content-Type" "application/transit+json"}
   :body {:result (eval (:body-params ctx))}})

(def repl-route
  {:post
   {:interceptors
    [resp->transit
     (sym-table-interceptor #'sym-table)
     symbol-injector]}
   :handler eval-body})
