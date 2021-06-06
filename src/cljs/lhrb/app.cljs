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

  (rf/dispatch [:eval '(+ 1 1 1 1)])
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
                                :extensions extensions-read-only})
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
      [result-view @source])))

(def longtxt "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi ipsa vero, nesciunt sunt dolorum distinctio corporis quis totam, dicta, rem maiores possimus impedit deleniti odio a. Quidem similique temporibus, odit vero illo cupiditate excepturi earum tenetur porro ea. Enim ea pariatur animi eius quo earum corporis adipisci, nesciunt at eum neque alias quibusdam dolor vel expedita. Expedita dolorem cumque minima, quas, maiores officiis beatae pariatur quis suscipit! Consequatur iusto porro odio laborum minima, reiciendis quam quos dolores ipsam dignissimos laboriosam ex quasi possimus impedit provident eveniet cumque blanditiis doloremque a voluptatum assumenda optio! Dolorem, quas consectetur quidem! Itaque magni officia magnam impedit qui nam unde sint veniam, quis animi earum officiis perferendis repellendus porro reiciendis quaerat cumque numquam tempora corporis rerum tenetur autem necessitatibus ab minus consectetur. Magni eligendi ducimus, porro cumque a odit omnis neque rerum unde. Dolores sequi aliquid voluptatibus odit odio facilis quis et temporibus nobis ipsa sit laudantium libero, corporis consequatur. Nisi saepe provident id veniam tempore aliquam libero hic error sint, tenetur alias earum, quam est nobis eaque, eius odio eum. Nam dolor deleniti eos tempore sunt sapiente accusantium non hic, quod eligendi sequi dolore quos molestiae voluptas labore eius temporibus enim similique odio, quis quisquam! Impedit, iure aspernatur id praesentium minima, culpa alias veniam. Sapiente maiores architecto placeat, et harum eligendi doloribus vel reiciendis eveniet est beatae sit necessitatibus hic eius, corporis deleniti praesentium velit similique, quaerat unde odit. Repellat magni, nihil, quibusdam doloremque maiores tenetur obcaecati tempora, veniam officia, doloribus ratione reprehenderit. Porro eum iste minima corrupti fuga expedita quo dolore explicabo ea eius vero, magnam illum dolorem ullam hic enim sapiente, odio eaque! Similique tempore laboriosam explicabo fuga eum ipsum, doloribus animi, repudiandae laudantium. Dignissimos, accusamus quasi sit atque nam quidem autem at maxime, soluta, eveniet excepturi quisquam ratione perspiciatis ipsum consectetur facilis odio ad possimus officiis odit molestiae. Exercitationem facere magnam mollitia assumenda odio est doloribus accusamus animi dignissimos veritatis ut excepturi, quia maiores, ipsum sint ex sed a minus quidem temporibus. Ipsum, quod quidem nam quisquam, quaerat accusantium in iusto inventore, fugiat sint mollitia magnam totam distinctio, vel deleniti sit voluptas quibusdam sequi! Officiis quo, facere atque similique a blanditiis, nostrum recusandae aut. Nemo voluptas, nesciunt totam fugit omnis. Laborum qui laudantium quos, inventore minima ipsum ut velit quam nobis eligendi, expedita quo necessitatibus, ea nemo odit sapiente commodi atque! Expedita facere quae modi iste sed, placeat sint eligendi, sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi ipsa vero, nesciunt sunt dolorum distinctio corporis quis totam, dicta, rem maiores possimus impedit deleniti odio a. Quidem similique temporibus, odit vero illo cupiditate excepturi earum tenetur porro ea. Enim ea pariatur animi eius quo earum corporis adipisci, nesciunt at eum neque alias quibusdam dolor vel expedita. Expedita dolorem cumque minima, quas, maiores officiis beatae pariatur quis suscipit! Consequatur iusto porro odio laborum minima, reiciendis quam quos dolores ipsam dignissimos laboriosam ex quasi possimus impedit provident eveniet cumque blanditiis doloremque a voluptatum assumenda optio! Dolorem, quas consectetur quidem! Itaque magni officia magnam impedit qui nam unde sint veniam, quis animi earum officiis perferendis repellendus porro reiciendis quaerat cumque numquam tempora corporis rerum tenetur autem necessitatibus ab minus consectetur. Magni eligendi ducimus, porro cumque a odit omnis neque rerum unde. Dolores sequi aliquid voluptatibus odit odio facilis quis et temporibus nobis ipsa sit laudantium libero, corporis consequatur. Nisi saepe provident id veniam tempore aliquam libero hic error sint, tenetur alias earum, quam est nobis eaque, eius odio eum. Nam dolor deleniti eos tempore sunt sapiente accusantium non hic, quod eligendi sequi dolore quos molestiae voluptas labore eius temporibus enim similique odio, quis quisquam! Impedit, iure aspernatur id praesentium minima, culpa alias veniam. Sapiente maiores architecto placeat, et harum eligendi doloribus vel reiciendis eveniet est beatae sit necessitatibus hic eius, corporis deleniti praesentium velit similique, quaerat unde odit. Repellat magni, nihil, quibusdam doloremque maiores tenetur obcaecati tempora, veniam officia, doloribus ratione reprehenderit. Porro eum iste minima corrupti fuga expedita quo dolore explicabo ea eius vero, magnam illum dolorem ullam hic enim sapiente, odio eaque! Similique tempore laboriosam explicabo fuga eum ipsum, doloribus animi, repudiandae laudantium. Dignissimos, accusamus quasi sit atque nam quidem autem at maxime, soluta, eveniet excepturi quisquam ratione perspiciatis ipsum consectetur facilis odio ad possimus officiis odit molestiae. Exercitationem facere magnam mollitia assumenda odio est doloribus accusamus animi dignissimos veritatis ut excepturi, quia maiores, ipsum sint ex sed a minus quidem temporibus. Ipsum, quod quidem nam quisquam, quaerat accusantium in iusto inventore, fugiat sint mollitia magnam totam distinctio, vel deleniti sit voluptas quibusdam sequi! Officiis quo, facere atque similique a blanditiis, nostrum recusandae aut. Nemo voluptas, nesciunt totam fugit omnis. Laborum qui laudantium quos, inventore minima ipsum ut velit quam nobis eligendi, expedita quo necessitatibus, ea nemo odit sapiente commodi atque! Expedita facere quae modi iste sed, placeat sint eligendi, sapiente. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi ipsa vero, nesciunt sunt dolorum distinctio corporis quis totam, dicta, rem maiores possimus impedit deleniti odio a. Quidem similique temporibus, odit vero illo cupiditate excepturi earum tenetur porro ea. Enim ea pariatur animi eius quo earum corporis adipisci, nesciunt at eum neque alias quibusdam dolor vel expedita. Expedita dolorem cumque minima, quas, maiores officiis beatae pariatur quis suscipit! Consequatur iusto porro odio laborum minima, reiciendis quam quos dolores ipsam dignissimos laboriosam ex quasi possimus impedit provident eveniet cumque blanditiis doloremque a voluptatum assumenda optio! Dolorem, quas consectetur quidem! Itaque magni officia magnam impedit qui nam unde sint veniam, quis animi earum officiis perferendis repellendus porro reiciendis quaerat cumque numquam tempora corporis rerum tenetur autem necessitatibus ab minus consectetur. Magni eligendi ducimus, porro cumque a odit omnis neque rerum unde. Dolores sequi aliquid voluptatibus odit odio facilis quis et temporibus nobis ipsa sit laudantium libero, corporis consequatur. Nisi saepe provident id veniam tempore aliquam libero hic error sint, tenetur alias earum, quam est nobis eaque, eius odio eum. Nam dolor deleniti eos tempore sunt sapiente accusantium non hic, quod eligendi sequi dolore quos molestiae voluptas labore eius temporibus enim similique odio, quis quisquam! Impedit, iure aspernatur id praesentium minima, culpa alias veniam. Sapiente maiores architecto placeat, et harum eligendi doloribus vel reiciendis eveniet est beatae sit necessitatibus hic eius, corporis deleniti praesentium velit similique, quaerat unde odit. Repellat magni, nihil, quibusdam doloremque maiores tenetur obcaecati tempora, veniam officia, doloribus ratione reprehenderit. Porro eum iste minima corrupti fuga expedita quo dolore explicabo ea eius vero, magnam illum dolorem ullam hic enim sapiente, odio eaque! Similique tempore laboriosam explicabo fuga eum ipsum, doloribus animi, repudiandae laudantium. Dignissimos, accusamus quasi sit atque nam quidem autem at maxime, soluta, eveniet excepturi quisquam ratione perspiciatis ipsum consectetur facilis odio ad possimus officiis odit molestiae. Exercitationem facere magnam mollitia assumenda odio est doloribus accusamus animi dignissimos veritatis ut excepturi, quia maiores, ipsum sint ex sed a minus quidem temporibus. Ipsum, quod quidem nam quisquam, quaerat accusantium in iusto inventore, fugiat sint mollitia magnam totam distinctio, vel deleniti sit voluptas quibusdam sequi! Officiis quo, facere atque similique a blanditiis, nostrum recusandae aut. Nemo voluptas, nesciunt totam fugit omnis. Laborum qui laudantium quos, inventore minima ipsum ut velit quam nobis eligendi, expedita quo necessitatibus, ea nemo odit sapiente commodi atque! Expedita facere quae modi iste sed, placeat sint eligendi, sapiente. ")

(defn page []
  [:div {:class "wrap"}
   [:nav
    [:p {:class "nav-title"} "Datahog"]]
   [:main
    [:input-view {:class "bg-grey"}
     [:h1 "Input"]
      [:div {:class "code-wrapper"}
      [:div {:class "code-box"}
       [editor]]]
     [:div {:class "code-wrapper"}
      [:div {:class "code-box"}
       [editor]]]]
    [:result-view
     [:h1 "Result"]
     [result-box]]]

   #_[:div {:class "content row bg-grey"}
    [:div {:class "six columns padding-10"}
     [:div {:class "code-wrapper"}
      [:div {:class "code-box"}
       [editor]]]
      [:div {:class "code-wrapper"}
      [:div {:class "code-box"}
       [editor]]]]
    [:div {:class "six columns v-padding-10"}
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
