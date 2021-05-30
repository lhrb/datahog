goog.provide('nextjournal.clojure_mode.extensions.selection_history');
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
nextjournal.clojure_mode.extensions.selection_history.event_annotation = nextjournal.clojure_mode.util.user_event_annotation("selectionhistory");
nextjournal.clojure_mode.extensions.selection_history.second_last = (function nextjournal$clojure_mode$extensions$selection_history$second_last(arr){
if((arr.length > (1))){
return (arr[(arr.length - (1))]);
} else {
return null;
}
});
nextjournal.clojure_mode.extensions.selection_history.ser = (function nextjournal$clojure_mode$extensions$selection_history$ser(selection){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"head","head",-771383919)),new cljs.core.Keyword(null,"ranges","ranges",1887686682).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(selection.toJSON(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))));
});
nextjournal.clojure_mode.extensions.selection_history.something_selected_QMARK_ = (function nextjournal$clojure_mode$extensions$selection_history$something_selected_QMARK_(selection){
return cljs.core.some((function (p1__52137_SHARP_){
return cljs.core.not(p1__52137_SHARP_.empty);
}),selection.ranges);
});
/**
 * Stores selection history
 */
nextjournal.clojure_mode.extensions.selection_history.selection_history_field = module$node_modules$$codemirror$state$dist$index_cjs.StateField.define(({"create": (function (state){
return (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selection","selection",975998651),state.selection], null),null,(1),null));
}), "update": (function (stack,p__52146){
var map__52149 = p__52146;
var map__52149__$1 = (((((!((map__52149 == null))))?(((((map__52149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52149):map__52149);
var tr = map__52149__$1;
var map__52150 = (function (){var obj52155 = map__52149__$1;
var k52156 = "state";
if((function (){var obj52158 = obj52155;
return (((!((obj52158 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52156,obj52158)));
})()){
return (obj52155[k52156]);
} else {
return undefined;
}
})();
var map__52150__$1 = (((((!((map__52150 == null))))?(((((map__52150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52150):map__52150);
var selection = (function (){var obj52164 = map__52150__$1;
var k52165 = "selection";
if((function (){var obj52166 = obj52164;
return (((!((obj52166 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52165,obj52166)));
})()){
return (obj52164[k52165]);
} else {
return undefined;
}
})();
var docChanged = (function (){var obj52168 = map__52149__$1;
var k52169 = "docChanged";
if((function (){var obj52172 = obj52168;
return (((!((obj52172 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52169,obj52172)));
})()){
return (obj52168[k52169]);
} else {
return undefined;
}
})();
var previous_position = cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
if(cljs.core.truth_(nextjournal.clojure_mode.selections.eq_QMARK_(new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(x),selection))){
return i;
} else {
return null;
}
}),stack));
if(cljs.core.truth_(docChanged)){
return (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",975998651),selection,new cljs.core.Keyword(null,"event","event",301435442),nextjournal.clojure_mode.util.get_user_event_annotation(tr)], null),null,(1),null));
} else {
if(cljs.core.not(nextjournal.clojure_mode.extensions.selection_history.something_selected_QMARK_(selection))){
return (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",975998651),selection,new cljs.core.Keyword(null,"event","event",301435442),nextjournal.clojure_mode.util.get_user_event_annotation(tr)], null),null,(1),null));
} else {
if(cljs.core.truth_(previous_position)){
var vec__52177 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(previous_position,stack);
var seq__52178 = cljs.core.seq(vec__52177);
var first__52179 = cljs.core.first(seq__52178);
var seq__52178__$1 = cljs.core.next(seq__52178);
var f = first__52179;
var more = seq__52178__$1;
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"prev-event","prev-event",-88694225),new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(cljs.core.first(stack))),more);
} else {
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",975998651),selection,new cljs.core.Keyword(null,"event","event",301435442),nextjournal.clojure_mode.util.get_user_event_annotation(tr)], null),stack);

}
}
}
})}));
nextjournal.clojure_mode.extensions.selection_history.extension = (function nextjournal$clojure_mode$extensions$selection_history$extension(){
return nextjournal.clojure_mode.extensions.selection_history.selection_history_field;
});
nextjournal.clojure_mode.extensions.selection_history.stack = (function nextjournal$clojure_mode$extensions$selection_history$stack(state){
return state.field(nextjournal.clojure_mode.extensions.selection_history.selection_history_field);
});
nextjournal.clojure_mode.extensions.selection_history.grow_1 = (function nextjournal$clojure_mode$extensions$selection_history$grow_1(state,start,end){
var node = nextjournal.clojure_mode.node.nearest_touching(state,end,(-1));
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__52182){
var map__52183 = p__52182;
var map__52183__$1 = (((((!((map__52183 == null))))?(((((map__52183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52183):map__52183);
var a_start = (function (){var obj52186 = map__52183__$1;
var k52187 = "from";
if((function (){var obj52188 = obj52186;
return (((!((obj52188 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52187,obj52188)));
})()){
return (obj52186[k52187]);
} else {
return undefined;
}
})();
var a_end = (function (){var obj52191 = map__52183__$1;
var k52192 = "to";
if((function (){var obj52193 = obj52191;
return (((!((obj52193 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52192,obj52193)));
})()){
return (obj52191[k52192]);
} else {
return undefined;
}
})();
return (((a_start <= start)) && ((((a_end >= end)) && ((!((((a_start === start)) && ((a_end === end)))))))));
}),cljs.core.cons(node,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.inner_span,cljs.core.identity),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clojure_mode.node.ancestors(node)], 0)))));
});
nextjournal.clojure_mode.extensions.selection_history.selection_grow_STAR_ = (function nextjournal$clojure_mode$extensions$selection_history$selection_grow_STAR_(state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3(state,({"annotations": nextjournal.clojure_mode.extensions.selection_history.event_annotation}),(function (p__52197){
var map__52199 = p__52197;
var map__52199__$1 = (((((!((map__52199 == null))))?(((((map__52199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52199):map__52199);
var range = map__52199__$1;
var from = (function (){var obj52202 = map__52199__$1;
var k52203 = "from";
if((function (){var obj52204 = obj52202;
return (((!((obj52204 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52203,obj52204)));
})()){
return (obj52202[k52203]);
} else {
return undefined;
}
})();
var to = (function (){var obj52205 = map__52199__$1;
var k52206 = "to";
if((function (){var obj52207 = obj52205;
return (((!((obj52207 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52206,obj52207)));
})()){
return (obj52205[k52206]);
} else {
return undefined;
}
})();
var empty = (function (){var obj52208 = map__52199__$1;
var k52209 = "empty";
if((function (){var obj52211 = obj52208;
return (((!((obj52211 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52209,obj52211)));
})()){
return (obj52208[k52209]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),(function (){var or__4223__auto__ = (function (){var G__52213 = nextjournal.clojure_mode.node.nearest_touching(state,from,(-1));
if((G__52213 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$2(state,G__52213);
}
})();
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return range;
}
})()], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),(function (){var or__4223__auto__ = (function (){var G__52218 = nextjournal.clojure_mode.extensions.selection_history.grow_1(state,from,to);
if((G__52218 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.range(G__52218);
}
})();
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return range;
}
})()], null);
}
}));
});
nextjournal.clojure_mode.extensions.selection_history.selection_return_STAR_ = (function nextjournal$clojure_mode$extensions$selection_history$selection_return_STAR_(state){
var temp__5752__auto__ = new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.second(nextjournal.clojure_mode.extensions.selection_history.stack(state)));
if(cljs.core.truth_(temp__5752__auto__)){
var selection = temp__5752__auto__;
return state.update(({"selection": selection, "annotations": nextjournal.clojure_mode.extensions.selection_history.event_annotation}));
} else {
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3(state,({"annotations": nextjournal.clojure_mode.extensions.selection_history.event_annotation}),(function (range){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),range.from], null);
}));
}
});

//# sourceMappingURL=nextjournal.clojure_mode.extensions.selection_history.js.map
