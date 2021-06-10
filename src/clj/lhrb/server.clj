(ns lhrb.server
  (:require [io.pedestal.http :as server]
            [io.pedestal.test :as test]
            [reitit.ring :as ring]
            [reitit.http :as http]
            [reitit.dev.pretty :as pretty]
            [reitit.http.interceptors.parameters :as parameters]
            [reitit.http.interceptors.muuntaja :as muuntaja]
            [reitit.http.interceptors.exception :as exception]
            [reitit.http.interceptors.multipart :as multipart]
            ;; Uncomment to use
            ; [reitit.http.interceptors.dev :as dev]
            [reitit.pedestal :as pedestal]
            [muuntaja.core :as m]
            [lhrb.io :refer [disk->edn]]
            [lhrb.engine :refer [q]]))

(defn load-db2 [db db-name path]
  (swap! db (fn [a] (assoc a db-name (disk->edn path)))))

(def sym-table (atom {'q #'lhrb.engine/q
                      'load-db2 #'lhrb.server/load-db2}))

(defmacro load-db [db-name path]
  (let [db (disk->edn path)]
    `(def ~db-name ~db)))

(comment
  (def sym-table nil)
  (load-db2 sym-table 'test-db "resources/got-db.edn")
  (let [m {'+ "hallo"
           'a "a"
           'b "b"}]
    (clojure.walk/postwalk
     (fn [x]
       (if-let [sub (get m x)]
         sub
         x))
     '({+ [[a b] [1 2] [a 3]]}))))

(defn to-transit [form]
    (->> form
         (m/encode "application/transit+json")
         (slurp)))

(defn get-response
  [req-body-params]
  ;; TODO add error handling
  (let [res (eval req-body-params)]
    (if (var? res)
      (:name (meta res))
      res)))

(def dbg-interceptor
  "pprint request context"
  {:name :dbg-interceptor
   :enter (fn [ctx]
            (do
              (clojure.pprint/pprint ctx)
              ctx))
   :leave (fn [ctx]
            (do (println "hallo ich war hier")
                ctx))})

(def sym-table-interceptor
  {:name :sym-table-interceptor
   :enter (fn [ctx]
            (assoc ctx :sym-table @lhrb.server/sym-table))})

(def symbol-injector
  {:name :symbol-injector
   :enter (fn [ctx]
            (let [syms (:symbol-table ctx)]
              (update ctx :body-params
                      (fn [params]
                        (clojure.walk/postwalk
                         (fn [x]
                           (if-let [sub (get syms x)]
                             sub
                             x))
                         params)))))})

(def router
  (pedestal/routing-interceptor
    (http/router
     [["/ping" {:get {:handler (fn [req]
                                 {:status 200 :body "hallo"})}}]
      ["/repl" {:post
                {;:interceptors [dbg-interceptor]
                 :handler (fn [req]
                            (let [res (get-response (:body-params req))]
                              {:status 200
                               :headers {"Content-Type" "application/transit+json"}
                               ;; I thought muuntaja would convert to transit for me but this
                               ;; does not seem to be true?
                               ;; TODO handle conversion with an interceptor
                               :body    (to-transit {:result res})}))}}]
      ["/dbg" {:post
               {:interceptors [sym-table-interceptor
                               symbol-injector
                               dbg-interceptor]
                :handler (fn [req]
                           {:status 200
                            :body "hallo"})}}]]
     {:exception pretty/exception
       :data {:muuntaja m/instance
              :interceptors [(parameters/parameters-interceptor)
                             (muuntaja/format-negotiate-interceptor)
                             (muuntaja/format-response-interceptor)
                             (exception/exception-interceptor)
                             (muuntaja/format-request-interceptor)
                             (multipart/multipart-interceptor)]}})
    (ring/routes
     (ring/create-resource-handler {:path "/"})
     (ring/create-default-handler))))

(def service-map
  {::server/routes []
   ::server/type   :jetty
   ::server/port   8890
   ::server/secure-headers {:content-security-policy-settings
                            {:object-src "'none'"}
                            ;; TODO find out how this actually works
                            #_{:default-src "'self'"
                             :style-src "'self' 'unsafe-inline'"
                             :script-src "'self' 'unsafe-inline' 'data'"
                             :img-src "'self' 'data'"}}})

(defn start []
  (server/start (server/create-server service-map)))

(defonce server (atom nil))

(defn start-dev []
  (reset! server
          (-> service-map ;; start with production configuration
              (merge {:env :dev
                      ::server/join? false
                      ;; all origins are allowed in dev mode
                      ::server/allowed-origins {:creds true :allowed-origins (constantly true)}})
              (server/default-interceptors)
              (pedestal/replace-last-interceptor router)
              (server/dev-interceptors)
              (server/create-server)
              (server/start))))

(defn stop-dev []
  (server/stop @server))

(defn restart []
  (stop-dev)
  (start-dev))

(comment
  (start-dev)
  (restart)

  (defmacro to-transit-m [form]
    (->> form
         (m/encode "application/transit+json")
         (slurp)))

  (test/response-for
   (:io.pedestal.http/service-fn @server)
   :post "/repl"
   :headers {"Content-Type" "application/transit+json"
             "accept" "application/transit+json"}
   :body (to-transit '(+ 1 1)))

  (def db (disk->edn "resources/got-db.edn"))

  (test/response-for
   (:io.pedestal.http/service-fn @lhrb.server/server)
   :post "/repl"
   :headers {"Content-Type" "application/edn"}
   :body "(load-db db \"resources/got-db.edn\")")

  (test/response-for
   (:io.pedestal.http/service-fn @lhrb.server/server)
   :post "/repl"
   :headers {"Content-Type" "application/transit+json"}
   :body (to-transit-m
          (q {:find [?name ?noble]
              :where [[?b :battle/location "Storm's End"]
                      [?b :battle/defender_commander ?name]
                      [?p :char/Name ?name]
                      [?p :char/Nobility ?noble]]}
             db)))

  (->> '(+ 1 1)
       (m/encode "application/transit+json")
       (m/decode "application/transit+json"))

  (test/response-for
   (:io.pedestal.http/service-fn @lhrb.server/server)
   :post "/dbg"
   :headers {"Content-Type" "application/edn"}
   :body "(load-db2 q)")


  (:sym-table r)
    *e)
