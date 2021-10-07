(ns lhrb.test
    (:require [clojure.test :as t]))
;; test macro
(defmacro is=
  ;; TODO add msg parameter
  ([expr1 expr2]
   `(t/is (= ~expr1 ~expr2)))
  ([msg expr1 expr2]
   `(t/is (= ~expr1 ~expr2) ~msg)))
