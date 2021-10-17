(ns lhrb.loadjson-test
  (:require [lhrb.loadjson :as sut]
            [clojure.test :as t]
            [lhrb.test :refer [is=]]
            [jsonista.core :as json]))

(t/deftest test-create-entities
  (let [m1 (sut/create-triplets {:a 1 :b 2})
        m2 (sut/create-triplets {:a [1 2 3]})
        m3 (sut/create-triplets {:a {:b 2}})
        m4 (sut/create-triplets {:a [{:b 2} {:c 3}]})
        m5 (sut/create-triplets [{:a 1} {:b 2}])
        m6 (sut/create-triplets {:a {:b [{:c 1} {:d 2}]}})
        ;; currently we do not process vectors inside vectors
        m7 (sut/create-triplets {:a [[1 2] [2 4]]})]
    (is= #{[:id/e0 :a 1]
           [:id/e0 :b 2]} m1)
    (is= #{[:id/e0 :a 1]
           [:id/e0 :a 2]
           [:id/e0 :a 3]} m2)
    (is= #{[:id/e0 :a :id/e1]
           [:id/e1 :b 2]} m3)
    (is= #{[:id/e0 :a :id/e1]
           [:id/e0 :a :id/e2]
           [:id/e1 :b 2]
           [:id/e2 :c 3]} m4)
    (is= #{[:id/e0 :a 1]
           [:id/e1 :b 2]} m5)
    (is= #{[:id/e0 :a :id/e1]
           [:id/e1 :b :id/e2]
           [:id/e1 :b :id/e3]
           [:id/e2 :c 1]
           [:id/e3 :d 2]} m6)
    (is= #{[:id/e0 :a [1 2]]
           [:id/e0 :a [2 4]]} m7)))

(t/deftest test-db-from-json
  (let [input (json/write-value-as-string {:hallo [1 2]})
        j1 (sut/db-from-json input)
        j2 (sut/db-from-json input true)]
    (is= #{[:id/e0 "hallo" 1]
           [:id/e0 "hallo" 2]} j1)
    (is= #{[:id/e0 :hallo 1]
           [:id/e0 :hallo 2]} j2)))
