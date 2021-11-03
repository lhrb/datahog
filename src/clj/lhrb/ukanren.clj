(ns lhrb.ukanren
  (:refer-clojure :exclude [==]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Implementation of cons cells.
;; I tried to use clj lazy sequences but I figured that the implenentation
;; with cons cells is 'easier' and more concise.
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defprotocol cons-cell
  (car [this])
  (cdr [this]))

(deftype Cons [l r]
  cons-cell
  (car [this] (.l this))
  (cdr [this] (.r this)))

(defn cons?
  "test if t is a cons cell"
  [t]
  (instance? Cons t))

(defn cons'
  [car cdr]
  (Cons. car cdr))

(defn consl
  "creates a clj list from cons cells.
  TODO lazy seq"
  [c]
  (if (cons? c)
    (cons (car c) (consl (cdr c)))
    (if (nil? c)
      '()
      (list c))))

;; NOTE nil symbolize the end of the stream. The representation
;; yielded by lcons and $ is expected by mplus and bind.

(defn lcons
  "creates cons-cells from clj list"
  [l]
  (if (empty? l)
    nil
    (cons' (first l) (lcons (rest l)))))

(defmacro $
  "rewrite to cons cells"
  ([a] `(cons' ~a nil))
  ([a & r] `(cons' ~a ($ ~@r))))

(defmethod print-method Cons [c ^java.io.Writer w]
  (.write w (str (consl c))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; The microKanren language uses a monadic structure to process the streams.
;; mplus also contains a scheduling mechanism
;;
;; Monad
;; a monad implements the operations 'unit' and 'bind' (flatMap)
;; unit: is the 'type-constructor' a -> m a
;; bind: m a -> (a -> m b) -> m b
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn unit [env] (cons' env nil))

(defn mplus
  "merge two streams. for examples see test class"
  [stream1 stream2]
  (cond
    (nil? stream1) stream2
    ;; interleave streams: this is the schedueling mechanism
    (fn? stream1) (fn [] (mplus stream2 (stream1)))
    :else (cons' (car stream1) (mplus (cdr stream1) stream2))))

; (consl (mplus ($ {:a 1} {:b 2}) ($ {:c 3})))

(defn bind [stream goal]
  (cond
    (nil? stream) nil
    (fn? stream) (fn [] (bind (stream) goal))
    :else (mplus (goal (car stream)) (bind (cdr stream) goal))))

;; (bind (cons' {'a 1} (cons' {'a 2} nil)) (== 'b

;; NOTE we currently just use clojure symbols as logic variables (lvar)

(defn lvar?
  "wrapper around symbol? introduces to make a switch away from clojure symbols
  easier"
  [x]
  (symbol? x))

(defn lvar [x]
  (symbol x))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; what is an environment (env)?
;; a set of substitutions/bindings, that satify the "relation"
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn walk
  "walks the environment as long as it finds a new association value"
  [env val]
  (if-let [val' (get env val)]
    (recur env val')
    val))

(defn unify
  "returns nil if unification is not possible,
   else extends the given env with zero or more associations"
  [env x y]
  (when env
   (let [x (walk env x)
         y (walk env y)]
     (cond
       (and (lvar? x)
            (lvar? y))   (assoc env x y)
       (lvar? x)         (assoc env x y)
       (lvar? y)         (assoc env y x)
       :else               (when (= x y) env)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; micro kanren defines four goals as basic model for computation
;; call-fresh, ==, disj and conj
;; in my current understanding call-fresh is not needed since we are
;; using cljs symbols
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn == [x y]
  (fn [env]
    (let [s (unify env x y)]
      (if s
        (unit s) nil))))

;; ((== 'a 1) {})

(defn disj' [g1 g2]
  (fn [env]
    (mplus (g1 env) (g2 env))))

(defn conj' [g1 g2]
  (fn [env]
    (bind (g1 env) g2)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; user level functionality
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defmacro zzz
  "Snooze delays the evaluation of a given goal by binding it inside a
  function which than has to get evaluated.

  A name that fits better with my mental model would be
  something like delay or delay-goal. But since the original authors took this
  name we will stick with it."
  [goal]
  `(fn [env#]
     (fn []
       (~goal env#))))

;; (macroexpand '(zzz (== 'x 1)))

(defmacro conj+
  ([g] `(zzz ~g))
  ([g0 g1 & gn]
   `(conj' (zzz ~g0) (conj+ ~g1 ~@gn))))

(defmacro disj+
  ([g] `(zzz ~g))
  ([g0 g1 & gn]
   `(disj' (zzz ~g0) (disj+ ~g1 ~@gn))))

(defn pull
  "like trampoline but checks first if stream is a fn"
  [stream]
  (if (fn? stream)
    (recur (stream))
    stream))

(defn take-all'
  "realizes the stream"
  [stream]
  (let [stream (pull stream)]
    (if (nil? stream)
      nil
      (if-let [head (car stream)]
        (cons' head (take-all' (cdr stream)))
        ;; remove nil TODO verify correctness
        (take-all' (cdr stream))))))

(defn take-n'
  [n stream]
  (if (= n 0)
    nil
    (let [stream (pull stream)]
      (if (nil? stream)
        nil
        (if-let [head (car stream)]
          (cons' head (take-n' (- n 1) (cdr stream)))
          ;; remove nil TODO verify correctness
          (take-n' (- n 1) (cdr stream)))))))

(defn take-all
  "realizes the stream and returns a clj-list"
  [stream]
  (consl (take-all' stream)))

(defn take-n
  "realizes the first n elements of the stream and returns
  a clj-list"
  [n stream]
  (consl (take-n' n stream)))

(comment
  ;; test infinity
  (defn fives [x]
    (disj+
     (== x 5)
     (fives x)))

  (take-n 15 ((fives 'x) {}))
 ,)
