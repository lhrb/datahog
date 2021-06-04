(ns lhrb.app
  (:require ["@codemirror/closebrackets" :refer [closeBrackets]]
            ["@codemirror/fold" :as fold]
            ["@codemirror/gutter" :refer [lineNumbers]]
            ["@codemirror/highlight" :as highlight]
            ["@codemirror/history" :refer [history historyKeymap]]
            ["@codemirror/state" :refer [EditorState]]
            ["@codemirror/view" :as view :refer [EditorView]]
            ["lezer" :as lezer]
            ["lezer-generator" :as lg]
            ["lezer-tree" :as lz-tree]
            [applied-science.js-interop :as j]
            [clojure.string :as str]
            [nextjournal.clojure-mode :as cm-clj]
            [nextjournal.clojure-mode.extensions.close-brackets :as close-brackets]
            [nextjournal.clojure-mode.extensions.formatting :as format]
            [nextjournal.clojure-mode.extensions.selection-history :as sel-history]
            [nextjournal.clojure-mode.keymap :as keymap]
            [nextjournal.clojure-mode.live-grammar :as live-grammar]
            [nextjournal.clojure-mode.node :as n]
            [nextjournal.clojure-mode.selections :as sel]
            [nextjournal.clojure-mode.test-utils :as test-utils]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            [re-frame.db :as rdb]
            [re-frame.core :as rf]
            [ajax.core :as ajax]
            ;; cause :http-xhrio effect handler to register with re-frame
            [day8.re-frame.http-fx]
            [cognitect.transit :as t]))

(rf/reg-event-db
 :initialize
 (fn [_ _]
   {:cells {0 {:id 0
               :code "(load-db db \"resources/got-db.edn\")"}}
    :order [0]
    :active 0
    :results {:code ";; => eval output gets displayed here"}
    :last []}))

(rf/reg-fx
 :println
 (fn [d]
   (def daa d)
   (js/console.log d)
   (println d)))

(rf/reg-event-fx
 :success
 (fn [_ [_ data]]
   {:println {:data data}}))

(rf/reg-event-fx
 :eval
 (fn [_ [_ data]]
   (println data)
   {:http-xhrio {:method            :post
                 :uri               "http://localhost:8890/repl"
                 :params            data
                 :format            (ajax/transit-request-format {:type :json})
                 :response-format   (ajax/transit-response-format {:type :json})
                 :on-success        [:success]
                 :on-failure        [:success]}}))

(rf/reg-event-db
 :new-result
 (fn [db [_ res]]
   (assoc-in db [:results :code] res)))

(rf/reg-sub
 :results
 (fn [db _]
   (get-in db [:results :code] '(nothing to see yet))))


(comment
  (rf/dispatch [:new-result '(+ 1 1)])
  (rf/dispatch [:eval "hallo"])

  (rf/dispatch [:eval '(+ 1 1 1)])
  (def data '(+ 1 1 1))

  (ajax/POST "http://localhost:8890/repl"
             {:params           {:a "b"}
              :format           (ajax/transit-request-format {:type :json})
              :response-format  (ajax/transit-response-format {:type :json})})

  @rdb/app-db
  ,)

(j/defn eval-cell [^:js {:keys [state]}]
  (-> (str "(do " (.-doc state) " )"))
  true)

(defn keymap* [modifier]
  {:eval-cell
   [{:key "Mod-Enter"
     :doc "Evaluate cell"}]
   :eval-at-cursor
   [{:key (str modifier "-Enter")
     :doc "Evaluates form at cursor"}]
   :eval-top-level
   [{:key (str modifier "-Shift-Enter")
     :doc "Evaluates top-level form at cursor"}]})

(defn extension [{:keys [modifier]}]
  (.of view/keymap
       (j/lit
        [{:key "Mod-Enter"
          :run (partial eval-cell)}])))

(def theme
  (.theme EditorView
          (j/lit {".cm-content" {:white-space "pre-wrap"
                                 :padding "10px 0"}
                  "&.cm-focused" {:outline "none"}
                  ".cm-line" {:padding "0 9px"
                              :line-height "1.6"
                              :font-size "16px"
                              :font-family "var(--code-font)"}
                  ".cm-matchingBracket" {:border-bottom "1px solid #ff0000"
                                         :color "inherit"}
                  ".cm-gutters" {:background "transparent"
                                 :border "none"}
                  ".cm-gutterElement" {:margin-left "5px"}
                  ;; only show cursor when focused
                  ".cm-cursor" {:visibility "hidden"}
                  "&.cm-focused .cm-cursor" {:visibility "visible"}})))

(defonce ^:private extensions #js[theme
                        (history)
                        highlight/defaultHighlightStyle
                        (view/drawSelection)
                        ;(lineNumbers)
                        (fold/foldGutter)
                        (.. EditorState -allowMultipleSelections (of true))
                        cm-clj/default-extensions
                        (.of view/keymap cm-clj/complete-keymap)
                        (.of view/keymap historyKeymap)])

(def extensions-read-only
  #js[theme
      highlight/defaultHighlightStyle
      (view/drawSelection)
      (.. EditorState -allowMultipleSelections (of true))
      cm-clj/default-extensions
      (.. EditorView -editable (of false))])

(defn editor []
  (let [!view (atom nil)
        !mount (fn [el]
                   (reset!
                    !view
                    (EditorView.
                     #js {:state
                          (.create
                           EditorState
                           #js {:doc (str '(load-db db-name "resources"))
                                :extensions extensions})
                          :parent el})))]
    [:div
     [:div {:ref !mount}]]))

(defn result-view [source]
  (let [!view (r/atom nil)
        !mount (fn [el]
                   (reset!
                    !view
                    (EditorView.
                     #js {:state
                          (.create
                           EditorState
                           #js {:doc (str source)
                                :extensions extensions})
                          :parent el})))]
    (r/create-class
     {:display-name "result-view"
      :component-did-update
      (fn [this old-argv] ;; somewhat wired according to the reagent docs
                         ;; this is due to the object oriented react api
        (let [;; arg-list from reagent
              new-argv (first (rest (r/argv this)))
              v @!view
              state (. v -state)
              ;; replaces the whole document, maybe there is a better way?
              transaction (. state
                             update
                             #js {:changes #js {:from 0
                                                :to (.. state -doc -length)
                                                :insert (str new-argv)}})]
          (. v dispatch transaction)))
      :reagent-render
      (fn [source]
        [:div {:ref !mount}])})))

(defn result-box []
  (let [source (rf/subscribe [:results])]
    (fn []
      [:div {:class "code-box"}
       [result-view @source]])))

(defn page []
  [:div
   [:section {:class "header"}
    [:h2 {:class "title"} "Datahog"]]
   [:div {:class "row bg-grey"}
    [:div {:class "six columns padding-10"}
     [:div {:class "code-wrapper"}
      [:div {:class "code-box"}
       [editor]]]
      [:div {:class "code-wrapper"}
      [:div {:class "code-box"}
       [editor]]]]
    [:div {:class "six columns padding-10"}
     [result-box]
     ]]])

;; nextjournal/clojure-mode/demo
(defn linux? []
  (some? (re-find #"(Linux)|(X11)" js/navigator.userAgent)))

(defn mac? []
  (and (not (linux?))
       (some? (re-find #"(Mac)|(iPhone)|(iPad)|(iPod)" js/navigator.platform))))

(defn key-mapping []
  (cond-> {"ArrowUp" "↑"
           "ArrowDown" "↓"
           "ArrowRight" "→"
           "ArrowLeft" "←"
           "Mod" "Ctrl"}
    (mac?)
    (merge {"Alt" "⌥"
            "Shift" "⇧"
            "Enter" "⏎"
            "Ctrl" "⌃"
            "Mod" "⌘"})))

(defn render-key [key]
  (let [keys (into [] (map #(get ((memoize key-mapping)) % %) (str/split key #"-")))]
    (into [:span]
          (map-indexed (fn [i k]
                         [:<>
                          (when-not (zero? i) [:span " + "])
                          [:kbd.kbd k]]) keys))))

(defn key-bindings-table []
  [:table.w-full.text-sm
   [:thead
    [:tr.border-t
     [:th.px-3.py-1.align-top.text-left.text-xs.uppercase.font-normal.black-50 "Command"]
     [:th.px-3.py-1.align-top.text-left.text-xs.uppercase.font-normal.black-50 "Keybinding"]
     [:th.px-3.py-1.align-top.text-left.text-xs.uppercase.font-normal.black-50 "Alternate Binding"]
     [:th.px-3.py-1.align-top.text-left.text-xs.uppercase.font-normal.black-50 {:style {:min-width 290}} "Description"]]]
   (into [:tbody]
         (->> keymap/paredit-keymap*
              (merge (keymap* "Alt"))
              (sort-by first)
              (map (fn [[command [{:keys [key shift doc]} & [{alternate-key :key}]]]]
                     [:<>
                      [:tr.border-t.hover:bg-gray-100
                       [:td.px-3.py-1.align-top.monospace.whitespace-nowrap [:b (name command)]]
                       [:td.px-3.py-1.align-top.text-right.text-sm.whitespace-nowrap (render-key key)]
                       [:td.px-3.py-1.align-top.text-right.text-sm.whitespace-nowrap (some-> alternate-key render-key)]
                       [:td.px-3.py-1.align-top doc]]
                      (when shift
                        [:tr.border-t.hover:bg-gray-100
                         [:td.px-3.py-1.align-top [:b (name shift)]]
                         [:td.px-3.py-1.align-top.text-sm.whitespace-nowrap.text-right
                          (render-key (str "Shift-" key))]
                         [:td.px-3.py-1.align-top.text-sm]
                         [:td.px-3.py-1.align-top]])]))))])


(defn ^:dev/after-load render []
  (rdom/render [page] (js/document.getElementById "app"))

  #_(let [mapping (key-mapping)]
    (.. (js/document.querySelectorAll ".mod,.alt,.ctrl")
        (forEach #(when-let [k (get mapping (.-innerHTML %))]
                    (set! (.-innerHTML %) k))))))

(defn init []
  (rf/dispatch-sync [:initialize])
  (rdom/render [page] (js/document.getElementById "app")))
