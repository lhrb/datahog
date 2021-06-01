(ns lhrb.server
  (:require [io.pedestal.http :as server]
            [io.pedestal.http.route :as route]
            [io.pedestal.test :as test]
            [io.pedestal.http.body-params :as params]
            [lhrb.io :refer [disk->edn]]
            [lhrb.engine :refer [q]]))

(defmacro load-db [db-name path]
  (let [db (disk->edn path)]
   `(def ~db-name ~db)))

(defn response [status body & {:as headers}]
  {:status status :body body :headers headers})

(def ok (partial response 200))

(def echo
  {:name :echo
   :enter
   (fn [context]
     (let [request (:request context)
           response (ok context)]
       (def ctx context)
       (assoc context :response (ok response))))})

(def home
  {:name :home
   :enter
   (fn [context]
     (let [response (ok (slurp "resources/public/index.html")
                        "Content-Type" "text/html")]
       (assoc context :response response)))})

(def repl
  {:name :repl
   :enter
   (fn [context]
     (let [query (get-in context [:request :edn-params])]
       (assoc context :response
              (ok (pr-str (eval query))
                  ;; TODO use transit instead
                  "Content-Type" "application/edn"))))})

(def routes
  (route/expand-routes
   #{["/" :get home :route-name :home]
     ["/repl" :post [(params/body-params) repl] :route-name :repl]}))

(def service-map
  {::server/routes routes
   ::server/type   :jetty
   ::server/port   8890
   ::server/resource-path "/public"
   ::server/secure-headers {:content-security-policy-settings {:object-src "none"}}})

(defn start []
  (server/start (server/create-server service-map)))

(defonce server (atom nil))

(defn start-dev []
  (reset! server
          (-> service-map ;; start with production configuration
              (merge {:env :dev
                      ;; do not block thread that starts web server
                      ::server/join? false
                      ;; Routes can be a function that resolve routes,
                      ;;  we can use this to set the routes to be reloadable
                      ::server/routes #(deref #'routes)
                      ;; all origins are allowed in dev mode
                      ::server/allowed-origins {:creds true :allowed-origins (constantly true)}})
              ;; Wire up interceptor chains
              server/default-interceptors
              server/dev-interceptors
              server/create-server
              server/start)))

(defn stop-dev []
  (server/stop @server))

(defn restart []
  (stop-dev)
  (start-dev))

(comment
  (start-dev)
  (restart)

  (def db (disk->edn "resources/got-db.edn"))
  (test/response-for (:io.pedestal.http/service-fn @lhrb.server/server)
                     :post "/repl"
                     :headers {"Content-Type" "application/edn"}
                     :body "(load-db db \"resources/got-db.edn\")")

  (test/response-for (:io.pedestal.http/service-fn @lhrb.server/server)
                     :post "/repl"
                     :headers {"Content-Type" "application/edn"}
                     :body "(q {:find [?name ?noble]
      :where [[?b :battle/location \"Storm's End\"]
              [?b :battle/defender_commander ?name]
              [?p :char/Name ?name]
              [?p :char/Nobility ?noble]]}
     db)")

  (eval '(load-db db2 "resources/got-db.edn"))


  (get-in ctx [:request :edn-params])

  ,)
