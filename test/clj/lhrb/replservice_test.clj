(ns lhrb.replservice-test
  (:require  [clojure.test :refer :all]
             [lhrb.replservice :refer :all]))

(deftest test-sym-table-interceptor
  (is
   (=
    ((:enter
      (sym-table-interceptor (atom {:a 1})))
     {})

    {:sym-table {:a 1}}))

  (is
   (=
    ((:leave
      (sym-table-interceptor (atom {:a 1})))
     {:tx-data [:b 2]})

    {:tx-data [:b 2], :sym-table {:a 1, :b 2}})))

(deftest test-replace-symbols
  (is
   (=
    ((:enter replace-symbols)
     {:sym-table {:a "a" :b "b"}
      :body-params '(:a {:b [:a]})})

    {:sym-table {:a "a", :b "b"}
     :body-params '("a" {"b" ["a"]})})))

(deftest test-eval-body
  (is
   (=
    (eval-body {:body-params '(+ 1 2)})

    {:status 200
     :headers {"Content-Type" "application/transit+json"}
     :body {:result 3}})))

(deftest test-resp->transit
  (is
   (=
    ((:leave resp->transit)
     {:response {:body '(1 2 3)}})

    {:response {:body "[\"~#list\",[1,2,3]]"}}))

  (is
   (=
    ((:leave resp->transit)
     {:response {:body {:result #'resp->transit}}})

    {:response {:body "[\"^ \",\"~:result\",\"~$resp->transit\"]"}})))
