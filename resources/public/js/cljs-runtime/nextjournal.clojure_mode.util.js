goog.provide('nextjournal.clojure_mode.util');
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
nextjournal.clojure_mode.util.user_event_annotation = (function nextjournal$clojure_mode$util$user_event_annotation(event_name){
return module$node_modules$$codemirror$state$dist$index_cjs.Transaction.userEvent.of(event_name);
});
nextjournal.clojure_mode.util.get_user_event_annotation = (function nextjournal$clojure_mode$util$get_user_event_annotation(tr){
return tr.annotation(module$node_modules$$codemirror$state$dist$index_cjs.Transaction.userEvent);
});
nextjournal.clojure_mode.util.guard = (function nextjournal$clojure_mode$util$guard(x,f){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)))){
return x;
} else {
return null;
}
});
nextjournal.clojure_mode.util.from_to = (function nextjournal$clojure_mode$util$from_to(p1,p2){
if((p1 > p2)){
return ({"from": p2, "to": p1});
} else {
return ({"from": p1, "to": p2});
}
});
/**
 * If passed a transaction, dispatch to view and return true to stop processing commands.
 */
nextjournal.clojure_mode.util.dispatch_some = (function nextjournal$clojure_mode$util$dispatch_some(view,tr){
if(cljs.core.truth_(tr)){
view.dispatch(tr);

return true;
} else {
return false;
}
});
/**
 * Returns a `change` that inserts string `s` at position `from` and moves cursor to end of insertion.
 */
nextjournal.clojure_mode.util.insertion = (function nextjournal$clojure_mode$util$insertion(var_args){
var G__51403 = arguments.length;
switch (G__51403) {
case 2:
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$2 = (function (from,s){
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3(from,from,s);
}));

(nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3 = (function (from,to,s){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"insert","insert",1286475395),s,new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to], null),new cljs.core.Keyword(null,"cursor","cursor",1011937484),(from + ((s).length))], null);
}));

(nextjournal.clojure_mode.util.insertion.cljs$lang$maxFixedArity = 3);

nextjournal.clojure_mode.util.deletion = (function nextjournal$clojure_mode$util$deletion(var_args){
var G__51410 = arguments.length;
switch (G__51410) {
case 1:
return nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$1 = (function (from){
return nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$2((function (){var x__4306__auto__ = (0);
var y__4307__auto__ = (from - (1));
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})(),from);
}));

(nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
var from__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,to))?(function (){var x__4306__auto__ = (0);
var y__4307__auto__ = (from - (1));
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})():from);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),from__$1,new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),from__$1,new cljs.core.Keyword(null,"to","to",192099007),to], null)], null);
}));

(nextjournal.clojure_mode.util.deletion.cljs$lang$maxFixedArity = 2);

nextjournal.clojure_mode.util.line_content_at = (function nextjournal$clojure_mode$util$line_content_at(state,from){
var obj__50995__auto__ = (function (){var parent__51019__auto__ = (state["doc"]);
var f__51020__auto__ = (parent__51019__auto__["lineAt"]);
return f__51020__auto__.call(parent__51019__auto__,from);
})();
var f__50996__auto__ = (obj__50995__auto__["slice"]);
return f__50996__auto__.call(obj__50995__auto__);
});
nextjournal.clojure_mode.util.map_cursor = (function nextjournal$clojure_mode$util$map_cursor(original_range,state,update_map){
if(cljs.core.map_QMARK_(update_map)){
} else {
throw (new Error("Assert failed: (map? update-map)"));
}

var map__51438 = nextjournal.clojure_mode.util.guard(update_map,cljs.core.map_QMARK_);
var map__51438__$1 = cljs.core.__destructure_map(map__51438);
var mapped = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51438__$1,new cljs.core.Keyword("cursor","mapped","cursor/mapped",1625530272));
var cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51438__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var from_to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51438__$1,new cljs.core.Keyword(null,"from-to","from-to",-640428401));
var range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51438__$1,new cljs.core.Keyword(null,"range","range",1639692286));
var changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51438__$1,new cljs.core.Keyword(null,"changes","changes",1492088));
var change_desc = (cljs.core.truth_(changes)?state.changes(cljs.core.clj__GT_js(changes)):null);
var G__51451 = ({"range": (function (){var or__4223__auto__ = range;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = (cljs.core.truth_(mapped)?nextjournal.clojure_mode.selections.cursor(change_desc.mapPos(mapped)):(cljs.core.truth_(cursor)?nextjournal.clojure_mode.selections.cursor(cursor):(cljs.core.truth_(from_to)?nextjournal.clojure_mode.selections.range.cljs$core$IFn$_invoke$arity$2((from_to.cljs$core$IFn$_invoke$arity$1 ? from_to.cljs$core$IFn$_invoke$arity$1((0)) : from_to.call(null,(0))),(from_to.cljs$core$IFn$_invoke$arity$1 ? from_to.cljs$core$IFn$_invoke$arity$1((1)) : from_to.call(null,(1)))):null)));
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
return original_range;
}
}
})()});
if(cljs.core.truth_(change_desc)){
var obj51455 = G__51451;
(obj51455["changes"] = change_desc);

return obj51455;
} else {
return G__51451;
}
});
/**
 * Applies `f` to each range in `state` (see `changeByRange`)
 */
nextjournal.clojure_mode.util.update_ranges = (function nextjournal$clojure_mode$util$update_ranges(var_args){
var G__51458 = arguments.length;
switch (G__51458) {
case 2:
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2 = (function (state,f){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3(state,null,f);
}));

(nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3 = (function (state,tr_specs,f){
return state.update((function (p1__51456_SHARP_){
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(p1__51456_SHARP_,tr_specs);
})(state.changeByRange((function (range){
var or__4223__auto__ = (function (){var temp__5758__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(range) : f.call(null,range));
if((temp__5758__auto__ == null)){
return null;
} else {
var result = temp__5758__auto__;
return nextjournal.clojure_mode.util.map_cursor(range,state,result);
}
})();
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return ({"range": range});
}
}))));
}));

(nextjournal.clojure_mode.util.update_ranges.cljs$lang$maxFixedArity = 3);

nextjournal.clojure_mode.util.dispatch_changes = (function nextjournal$clojure_mode$util$dispatch_changes(state,dispatch,changes){
if(cljs.core.truth_(changes.empty)){
return null;
} else {
var G__51470 = state.update(({"changes": changes}));
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__51470) : dispatch.call(null,G__51470));
}
});
nextjournal.clojure_mode.util.update_lines = (function nextjournal$clojure_mode$util$update_lines(var_args){
var args__4835__auto__ = [];
var len__4829__auto___51850 = arguments.length;
var i__4830__auto___51851 = (0);
while(true){
if((i__4830__auto___51851 < len__4829__auto___51850)){
args__4835__auto__.push((arguments[i__4830__auto___51851]));

var G__51852 = (i__4830__auto___51851 + (1));
i__4830__auto___51851 = G__51852;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return nextjournal.clojure_mode.util.update_lines.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(nextjournal.clojure_mode.util.update_lines.cljs$core$IFn$_invoke$arity$variadic = (function (state,f,p__51504){
var vec__51505 = p__51504;
var map__51508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51505,(0),null);
var map__51508__$1 = cljs.core.__destructure_map(map__51508);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51508__$1,new cljs.core.Keyword(null,"from","from",1815293044),(0));
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51508__$1,new cljs.core.Keyword(null,"to","to",192099007));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51508__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var iterator = state.doc.iter();
var result = iterator.next();
var changes = [];
var from_pos = from;
var line_num = (1);
while(true){
var map__51532 = result;
var map__51532__$1 = (((((!((map__51532 == null))))?(((((map__51532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51532):map__51532);
var done = (function (){var obj51538 = map__51532__$1;
var k51539 = "done";
if((function (){var obj51540 = obj51538;
return (((!((obj51540 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k51539,obj51540)));
})()){
return (obj51538[k51539]);
} else {
return undefined;
}
})();
var lineBreak = (function (){var obj51541 = map__51532__$1;
var k51542 = "lineBreak";
if((function (){var obj51544 = obj51541;
return (((!((obj51544 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k51542,obj51544)));
})()){
return (obj51541[k51542]);
} else {
return undefined;
}
})();
var value = (function (){var obj51545 = map__51532__$1;
var k51546 = "value";
if((function (){var obj51547 = obj51545;
return (((!((obj51547 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k51546,obj51547)));
})()){
return (obj51545[k51546]);
} else {
return undefined;
}
})();
if(cljs.core.truth_((function (){var or__4223__auto__ = done;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (from > to);
}
})())){
return state.update(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(({"changes": state.changes(changes)}),spec));
} else {
var G__51854 = iterator.next();
var G__51855 = (function (){var temp__5752__auto__ = (function (){var and__4221__auto__ = cljs.core.not(lineBreak);
if(and__4221__auto__){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(from_pos,value,line_num) : f.call(null,from_pos,value,line_num));
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5752__auto__)){
var change = temp__5752__auto__;
var array51551 = changes;
array51551.push(change);

return array51551;
} else {
return changes;
}
})();
var G__51856 = (from_pos + ((value).length));
var G__51857 = (function (){var G__51553 = line_num;
if(cljs.core.truth_(lineBreak)){
return (G__51553 + (1));
} else {
return G__51553;
}
})();
result = G__51854;
changes = G__51855;
from_pos = G__51856;
line_num = G__51857;
continue;
}
break;
}
}));

(nextjournal.clojure_mode.util.update_lines.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(nextjournal.clojure_mode.util.update_lines.cljs$lang$applyTo = (function (seq51484){
var G__51486 = cljs.core.first(seq51484);
var seq51484__$1 = cljs.core.next(seq51484);
var G__51487 = cljs.core.first(seq51484__$1);
var seq51484__$2 = cljs.core.next(seq51484__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51486,G__51487,seq51484__$2);
}));

/**
 * `f` will be called for each selected line with args [line, changes-array, range]
 * and should *mutate* changes-array
 */
nextjournal.clojure_mode.util.update_selected_lines = (function nextjournal$clojure_mode$util$update_selected_lines(state,f){
var at_line = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var doc = state.doc;
return state.changeByRange((function (p__51558){
var map__51560 = p__51558;
var map__51560__$1 = (((((!((map__51560 == null))))?(((((map__51560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51560):map__51560);
var range = map__51560__$1;
var from = (function (){var obj51562 = map__51560__$1;
var k51563 = "from";
if((function (){var obj51564 = obj51562;
return (((!((obj51564 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k51563,obj51564)));
})()){
return (obj51562[k51563]);
} else {
return undefined;
}
})();
var to = (function (){var obj51567 = map__51560__$1;
var k51568 = "to";
if((function (){var obj51569 = obj51567;
return (((!((obj51569 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k51568,obj51569)));
})()){
return (obj51567[k51568]);
} else {
return undefined;
}
})();
var anchor = (function (){var obj51570 = map__51560__$1;
var k51571 = "anchor";
if((function (){var obj51572 = obj51570;
return (((!((obj51572 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k51571,obj51572)));
})()){
return (obj51570[k51571]);
} else {
return undefined;
}
})();
var head = (function (){var obj51575 = map__51560__$1;
var k51576 = "head";
if((function (){var obj51577 = obj51575;
return (((!((obj51577 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k51576,obj51577)));
})()){
return (obj51575[k51576]);
} else {
return undefined;
}
})();
var changes = [];
var line = doc.lineAt(from);
while(true){
var map__51594 = line;
var map__51594__$1 = (((((!((map__51594 == null))))?(((((map__51594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51594):map__51594);
var line_number = (function (){var obj51601 = map__51594__$1;
var k51602 = "number";
if((function (){var obj51607 = obj51601;
return (((!((obj51607 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k51602,obj51607)));
})()){
return (obj51601[k51602]);
} else {
return undefined;
}
})();
var line_to = (function (){var obj51608 = map__51594__$1;
var k51609 = "to";
if((function (){var obj51610 = obj51608;
return (((!((obj51610 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k51609,obj51610)));
})()){
return (obj51608[k51609]);
} else {
return undefined;
}
})();
if((line.number > cljs.core.deref(at_line))){
cljs.core.reset_BANG_(at_line,line_number);

(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(line,changes,range) : f.call(null,line,changes,range));
} else {
}

var temp__5752__auto__ = (function (){var and__4221__auto__ = (to > line_to);
if(and__4221__auto__){
return nextjournal.clojure_mode.util.guard(doc.lineAt((line_to + (1))),((function (line,and__4221__auto__,map__51594,map__51594__$1,line_number,line_to,changes,map__51560,map__51560__$1,range,from,to,anchor,head,at_line,doc){
return (function (p1__51556_SHARP_){
return (p1__51556_SHARP_.number > line_number);
});})(line,and__4221__auto__,map__51594,map__51594__$1,line_number,line_to,changes,map__51560,map__51560__$1,range,from,to,anchor,head,at_line,doc))
);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5752__auto__)){
var next_line = temp__5752__auto__;
var G__51859 = next_line;
line = G__51859;
continue;
} else {
var change_set = state.changes(changes);
return ({"changes": changes, "range": module$node_modules$$codemirror$state$dist$index_cjs.EditorSelection.range(change_set.mapPos(anchor,(1)),change_set.mapPos(head,(1)))});
}
break;
}
}));
});
/**
 * `f` will be called for each changed line with args [line, changes-array]
 * and should *mutate* changes-array. Selections will be mapped through the resulting changeset.
 */
nextjournal.clojure_mode.util.iter_changed_lines = (function nextjournal$clojure_mode$util$iter_changed_lines(p__51627,f){
var map__51647 = p__51627;
var map__51647__$1 = (((((!((map__51647 == null))))?(((((map__51647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51647):map__51647);
var tr = map__51647__$1;
var map__51649 = (function (){var obj51666 = map__51647__$1;
var k51667 = "state";
if((function (){var obj51668 = obj51666;
return (((!((obj51668 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k51667,obj51668)));
})()){
return (obj51666[k51667]);
} else {
return undefined;
}
})();
var map__51649__$1 = (((((!((map__51649 == null))))?(((((map__51649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51649):map__51649);
var state = map__51649__$1;
var doc = (function (){var obj51671 = map__51649__$1;
var k51672 = "doc";
if((function (){var obj51673 = obj51671;
return (((!((obj51673 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k51672,obj51673)));
})()){
return (obj51671[k51672]);
} else {
return undefined;
}
})();
var changes = (function (){var obj51674 = map__51647__$1;
var k51675 = "changes";
if((function (){var obj51676 = obj51674;
return (((!((obj51676 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k51675,obj51676)));
})()){
return (obj51674[k51675]);
} else {
return undefined;
}
})();
var effects = (function (){var obj51683 = map__51647__$1;
var k51684 = "effects";
if((function (){var obj51686 = obj51683;
return (((!((obj51686 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k51684,obj51686)));
})()){
return (obj51683[k51684]);
} else {
return undefined;
}
})();
var selection = (function (){var obj51692 = map__51647__$1;
var k51693 = "selection";
if((function (){var obj51698 = obj51692;
return (((!((obj51698 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k51693,obj51698)));
})()){
return (obj51692[k51693]);
} else {
return undefined;
}
})();
var at_line = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1));
var next_changes = [];
var _ = changes.iterChanges((function (from_a,to_a,from_b,to_b,inserted){
var map__51713 = doc.lineAt(from_b);
var map__51713__$1 = (((((!((map__51713 == null))))?(((((map__51713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51713):map__51713);
var line = map__51713__$1;
var line_number = (function (){var obj51736 = map__51713__$1;
var k51737 = "number";
if((function (){var obj51742 = obj51736;
return (((!((obj51742 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k51737,obj51742)));
})()){
return (obj51736[k51737]);
} else {
return undefined;
}
})();
var line_to = (function (){var obj51748 = map__51713__$1;
var k51749 = "to";
if((function (){var obj51751 = obj51748;
return (((!((obj51751 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k51749,obj51751)));
})()){
return (obj51748[k51749]);
} else {
return undefined;
}
})();
var line__$1 = line;
while(true){
if((line_number > cljs.core.deref(at_line))){
cljs.core.reset_BANG_(at_line,line_number);

(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(line__$1,next_changes) : f.call(null,line__$1,next_changes));
} else {
}

if((to_b <= line_to)){
return null;
} else {
var next_line = doc.lineAt((line_to + (1)));
if(cljs.core.truth_((function (){var and__4221__auto__ = next_line;
if(cljs.core.truth_(and__4221__auto__)){
return (next_line.number > line__$1.number);
} else {
return and__4221__auto__;
}
})())){
var G__51861 = next_line;
line__$1 = G__51861;
continue;
} else {
return null;
}
}
break;
}
}));
var next_changeset = state.changes(next_changes);
if(cljs.core.seq(next_changes)){
var G__51788 = (function (){var obj51793 = (function (){var obj51798 = tr;
if((!((obj51798 == null)))){
var out51799 = ({});
var k__50868__auto___51862 = "annotations";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__50868__auto___51862,obj51798)){
var obj51802_51863 = out51799;
(obj51802_51863[k__50868__auto___51862] = (obj51798[k__50868__auto___51862]));

} else {
}

var k__50868__auto___51864 = "scrollIntoView";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__50868__auto___51864,obj51798)){
var obj51806_51865 = out51799;
(obj51806_51865[k__50868__auto___51864] = (obj51798[k__50868__auto___51864]));

} else {
}

var k__50868__auto___51866 = "reconfigure";
if(applied_science.js_interop.impl.in_QMARK__STAR_(k__50868__auto___51866,obj51798)){
var obj51807_51867 = out51799;
(obj51807_51867[k__50868__auto___51866] = (obj51798[k__50868__auto___51866]));

} else {
}

return out51799;
} else {
return ({});
}
})();
var obj51810 = (((!((obj51793 == null))))?obj51793:({}));
(obj51810["changes"] = changes.compose(next_changeset));

return obj51810;
})();
var G__51788__$1 = (cljs.core.truth_(selection)?(function (){var obj51813 = G__51788;
var obj51814 = (((!((obj51813 == null))))?obj51813:({}));
(obj51814["selection"] = state.selection.map(next_changeset));

return obj51814;
})():G__51788);
if(cljs.core.truth_(effects)){
var obj51817 = G__51788__$1;
var obj51818 = (((!((obj51817 == null))))?obj51817:({}));
(obj51818["effects"] = module$node_modules$$codemirror$state$dist$index_cjs.StateEffect.mapEffects(effects,next_changeset));

return obj51818;
} else {
return G__51788__$1;
}
} else {
return tr;
}
});
nextjournal.clojure_mode.util.something_selected_QMARK_ = (function nextjournal$clojure_mode$util$something_selected_QMARK_(p__51822){
var map__51823 = p__51822;
var map__51823__$1 = (((((!((map__51823 == null))))?(((((map__51823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51823):map__51823);
var map__51824 = (function (){var obj51826 = map__51823__$1;
var k51827 = "selection";
if((function (){var obj51828 = obj51826;
return (((!((obj51828 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k51827,obj51828)));
})()){
return (obj51826[k51827]);
} else {
return undefined;
}
})();
var map__51824__$1 = (((((!((map__51824 == null))))?(((((map__51824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51824):map__51824);
var ranges = (function (){var obj51830 = map__51824__$1;
var k51831 = "ranges";
if((function (){var obj51832 = obj51830;
return (((!((obj51832 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k51831,obj51832)));
})()){
return (obj51830[k51831]);
} else {
return undefined;
}
})();
return (!(cljs.core.every_QMARK_((function (p1__51821_SHARP_){
return p1__51821_SHARP_.empty;
}),ranges)));
});
nextjournal.clojure_mode.util.range_str = (function nextjournal$clojure_mode$util$range_str(state,p__51833){
var map__51834 = p__51833;
var map__51834__$1 = (((((!((map__51834 == null))))?(((((map__51834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51834):map__51834);
var selection = map__51834__$1;
var from = (function (){var obj51836 = map__51834__$1;
var k51837 = "from";
if((function (){var obj51838 = obj51836;
return (((!((obj51838 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k51837,obj51838)));
})()){
return (obj51836[k51837]);
} else {
return undefined;
}
})();
var to = (function (){var obj51839 = map__51834__$1;
var k51840 = "to";
if((function (){var obj51841 = obj51839;
return (((!((obj51841 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k51840,obj51841)));
})()){
return (obj51839[k51840]);
} else {
return undefined;
}
})();
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var parent__51019__auto__ = (state["doc"]);
var f__51020__auto__ = (parent__51019__auto__["slice"]);
return f__51020__auto__.call(parent__51019__auto__,from,to);
})());
});

//# sourceMappingURL=nextjournal.clojure_mode.util.js.map
