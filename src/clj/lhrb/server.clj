(ns lhrb.server
  (:require [io.pedestal.http :as http]
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
  {::http/routes routes
   ::http/type   :jetty
   ::http/port   8890
   ::http/resource-path "/public"
   ::http/secure-headers {:content-security-policy-settings {:object-src "none"}}})

(defn start []
  (http/start (http/create-server service-map)))

(defonce server (atom nil))

(defn start-dev []
  (reset! server
          (-> service-map ;; start with production configuration
              (merge {:env :dev
                      ;; do not block thread that starts web server
                      ::http/join? false
                      ;; Routes can be a function that resolve routes,
                      ;;  we can use this to set the routes to be reloadable
                      ::http/routes #(deref #'routes)
                      ;; all origins are allowed in dev mode
                      ::http/allowed-origins {:creds true :allowed-origins (constantly true)}})
              ;; Wire up interceptor chains
              http/default-interceptors
              http/dev-interceptors
              http/create-server
              http/start)))

(defn stop-dev []
  (http/stop @server))

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
