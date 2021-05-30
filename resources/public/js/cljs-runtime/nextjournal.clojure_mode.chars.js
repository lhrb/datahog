goog.provide('nextjournal.clojure_mode.chars');
var module$node_modules$$codemirror$text$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$text$dist$index_cjs", {});
nextjournal.clojure_mode.chars.pair_lookup = (function nextjournal$clojure_mode$chars$pair_lookup(char_pairs,char$){
var end = cljs.core.count(char_pairs);
var ch = module$node_modules$$codemirror$text$dist$index_cjs.codePointAt(char$,(0));
var i = (0);
while(true){
if((i >= end)){
return module$node_modules$$codemirror$text$dist$index_cjs.fromCodePoint((((ch < (128)))?ch:(ch + (1))));
} else {
if((ch === char_pairs.charCodeAt(i))){
return char_pairs.charAt((i + (1)));
} else {
var G__51207 = (i + (2));
i = G__51207;
continue;

}
}
break;
}
});
nextjournal.clojure_mode.chars.backspace_QMARK_ = (function nextjournal$clojure_mode$chars$backspace_QMARK_(code){
return (code === (8));
});
nextjournal.clojure_mode.chars.next_char = (function nextjournal$clojure_mode$chars$next_char(doc,pos){
var next = doc.sliceString(pos,(pos + (2)));
return next.slice((0),module$node_modules$$codemirror$text$dist$index_cjs.codePointSize(module$node_modules$$codemirror$text$dist$index_cjs.codePointAt(next,(0))));
});
nextjournal.clojure_mode.chars.prev_char = (function nextjournal$clojure_mode$chars$prev_char(doc,pos){
if(cljs.core.pos_int_QMARK_(pos)){
return doc.sliceString((pos - (1)),pos);
} else {
return "";
}
});
nextjournal.clojure_mode.chars.whitespace_QMARK_ = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51203_SHARP_){
return p1__51203_SHARP_.charCodeAt((0));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","n","r",","], null)));

//# sourceMappingURL=nextjournal.clojure_mode.chars.js.map
