# datahog

This is a learning project.

## microKanren
`lhrb.ukanren` contains an implementations of the microKanren language as described in this 
[paper]("http://webyrd.net/scheme-2013/papers/HemannMuKanren2013.pdf"). 

To create an (hopefully) easy to understand Clojure implementation I used `cons` cells instead
of the Clojure sequence abstraction. This yielded an implementation much closer to the original
scheme version.

On the official [minikanren]("http://minikanren.org/#implementations") site are only two working
Clojure implementations  and  I'm a bit proud that my implementation joins the club alongside 
[core.logic](https://github.com/clojure/core.logic) and [mullr/micrologic]("https://github.com/mullr/micrologic").

## Query language
`lhrb.query` contains

*  a basic e-a-v-triplet store implementation.
*  a datomic inspired query language which uses the `ukanren` implementation as back-end. (Planned to )

``` clojure
;; basic example

  (def db
    [[0 :name "Bob"]
     [0 :age 40]
     [0 :likes "Pizza"]
     [1 :name "Alice"]
     [1 :likes "Pizza"]
     [1 :age 30]
     [1 :name "Jutta"]
     [2 :age 40]
     [2 :likes "Burger"]])

  (q {:find [?e]
      :where [[?e :likes "Pizza"]
              [?e :age (> ?a 30)]]}
     db)
 => [[0]]
 
 ;; queries against a got db
 
  (require '[lhrb.readcsv :refer [create-got-db]])
  (def db (create-got-db))
 
 ;; names and nobility of the defending commanders in the battle at Storm's End 
  (q {:find [?name ?noble]
      :where [[?b :battle/location "Storm's End"]
              [?b :battle/defender_commander ?name]
              [?p :char/Name ?name]
              [?p :char/Nobility ?noble]]}
   db)
=> [["Renly Baratheon" "nobel"]
    ["Randyll Tarly" "nobel"]
    ["Mathis Rowan" "nobel"]
    ["Cortnay Penrose" "nobel"]
    ["Loras Tyrell" "nobel"]]

 ;; battle names where the attacking army size is bigger than 10000  
 (q {:find [?name ?num]
     :where [[?b :battle/name ?name]
             [?b :battle/attacker_size (> ?num 10000)]]}
     db)
     
=> [["Battle of Riverrun" 15000]
    ["Battle of Castle Black" 100000]
    ["Battle of the Golden Tooth" 15000]
    ["Battle of the Green Fork" 18000]
    ["Battle of the Blackwater" 21000]
    ["Battle of the Fords" 20000]] 
```

Rules are currently only supported by using ukanren syntax. Compilation for rules will be supported as soon as I figured out how to schedule the evaluation of recursive rules (currently paths get repeated).

### Miscellaneous
* `lhrb.readcsv` contains helper to read `csv` files and also parsing of the got db.
* `lhrb.loadjson` contains helper to transform basic json to e a v triplets. 

