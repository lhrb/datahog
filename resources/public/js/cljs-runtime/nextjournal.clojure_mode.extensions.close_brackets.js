goog.provide('nextjournal.clojure_mode.extensions.close_brackets');
var module$node_modules$w3c_keyname$index_cjs=shadow.js.require("module$node_modules$w3c_keyname$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
var module$node_modules$$codemirror$text$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$text$dist$index_cjs", {});
nextjournal.clojure_mode.extensions.close_brackets.in_string_QMARK_ = (function nextjournal$clojure_mode$extensions$close_brackets$in_string_QMARK_(state,pos){
var G__52483 = nextjournal.clojure_mode.node.name(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,pos));
var fexpr__52482 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["StringContent",null,"String",null], null), null);
return (fexpr__52482.cljs$core$IFn$_invoke$arity$1 ? fexpr__52482.cljs$core$IFn$_invoke$arity$1(G__52483) : fexpr__52482.call(null,G__52483));
});
nextjournal.clojure_mode.extensions.close_brackets.escaped_QMARK_ = (function nextjournal$clojure_mode$extensions$close_brackets$escaped_QMARK_(state,pos){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\\",state.doc.slice((function (){var x__4306__auto__ = (0);
var y__4307__auto__ = (pos - (1));
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})(),pos).toString());
});
nextjournal.clojure_mode.extensions.close_brackets.backspace_backoff = (function nextjournal$clojure_mode$extensions$close_brackets$backspace_backoff(state,from,to){
if(cljs.core.truth_((function (){var and__4221__auto__ = (function (){var G__52487 = nextjournal.clojure_mode.node.node_BAR_(state,(from - (1)));
if((G__52487 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.guard(G__52487,nextjournal.clojure_mode.node.line_comment_QMARK_);
}
})();
if(cljs.core.truth_(and__4221__auto__)){
return (!(clojure.string.blank_QMARK_(nextjournal.clojure_mode.util.line_content_at(state,from))));
} else {
return and__4221__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(from - (1))], null);
} else {
return nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$2(from,to);
}
});
/**
 * - skips over closing brackets
 * - when deleting an opening bracket of an empty list, removes both brackets
 */
nextjournal.clojure_mode.extensions.close_brackets.handle_backspace = (function nextjournal$clojure_mode$extensions$close_brackets$handle_backspace(p__52489){
var map__52492 = p__52489;
var map__52492__$1 = (((((!((map__52492 == null))))?(((((map__52492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52492):map__52492);
var state = map__52492__$1;
var doc = (function (){var obj52494 = map__52492__$1;
var k52495 = "doc";
if((function (){var obj52496 = obj52494;
return (((!((obj52496 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52495,obj52496)));
})()){
return (obj52494[k52495]);
} else {
return undefined;
}
})();
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),state.selection.ranges.length);
if(and__4221__auto__){
var range = (function (){var obj52502 = (function (){var obj52500 = (function (){var obj52498 = state;
var k52499 = "selection";
if((function (){var obj52504 = obj52498;
return (((!((obj52504 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52499,obj52504)));
})()){
return (obj52498[k52499]);
} else {
return undefined;
}
})();
var k52501 = "ranges";
if((function (){var obj52505 = obj52500;
return (((!((obj52505 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52501,obj52505)));
})()){
return (obj52500[k52501]);
} else {
return undefined;
}
})();
var k52503 = (0);
if((function (){var obj52506 = obj52502;
return (((!((obj52506 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52503,obj52506)));
})()){
return (obj52502[k52503]);
} else {
return undefined;
}
})();
var and__4221__auto____$1 = range.empty;
if(cljs.core.truth_(and__4221__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),range.from);
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
})())){
return null;
} else {
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3(state,({"annotations": nextjournal.clojure_mode.util.user_event_annotation("delete")}),(function (p__52507){
var map__52508 = p__52507;
var map__52508__$1 = (((((!((map__52508 == null))))?(((((map__52508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52508):map__52508);
var range = map__52508__$1;
var head = (function (){var obj52511 = map__52508__$1;
var k52512 = "head";
if((function (){var obj52513 = obj52511;
return (((!((obj52513 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52512,obj52513)));
})()){
return (obj52511[k52512]);
} else {
return undefined;
}
})();
var empty = (function (){var obj52515 = map__52508__$1;
var k52516 = "empty";
if((function (){var obj52517 = obj52515;
return (((!((obj52517 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52516,obj52517)));
})()){
return (obj52515[k52516]);
} else {
return undefined;
}
})();
var anchor = (function (){var obj52518 = map__52508__$1;
var k52519 = "anchor";
if((function (){var obj52520 = obj52518;
return (((!((obj52520 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52519,obj52520)));
})()){
return (obj52518[k52519]);
} else {
return undefined;
}
})();
var map__52522 = nextjournal.clojure_mode.util.from_to(head,anchor);
var map__52522__$1 = (((((!((map__52522 == null))))?(((((map__52522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52522):map__52522);
var range__$1 = map__52522__$1;
var from = (function (){var obj52524 = map__52522__$1;
var k52525 = "from";
if((function (){var obj52527 = obj52524;
return (((!((obj52527 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52525,obj52527)));
})()){
return (obj52524[k52525]);
} else {
return undefined;
}
})();
var to = (function (){var obj52528 = map__52522__$1;
var k52529 = "to";
if((function (){var obj52530 = obj52528;
return (((!((obj52530 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52529,obj52530)));
})()){
return (obj52528[k52529]);
} else {
return undefined;
}
})();
var node_BAR_ = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$1(state).resolve(from,(-1));
var parent = node_BAR_.parent;
if(cljs.core.truth_((function (){var or__4223__auto__ = cljs.core.not(empty);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("StringContent",nextjournal.clojure_mode.node.name(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3(state,from,(-1))));
if(or__4223__auto____$1){
return or__4223__auto____$1;
} else {
var and__4221__auto__ = parent;
if(cljs.core.truth_(and__4221__auto__)){
return (((!(nextjournal.clojure_mode.node.balanced_QMARK_(parent)))) && (nextjournal.clojure_mode.node.left_edge_QMARK_(node_BAR_)));
} else {
return and__4221__auto__;
}
}
}
})())){
return nextjournal.clojure_mode.util.deletion.cljs$core$IFn$_invoke$arity$2(from,to);
} else {
if(((nextjournal.clojure_mode.node.right_edge_QMARK_(node_BAR_)) && ((from === nextjournal.clojure_mode.node.end(parent))))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(from - (1))], null);
} else {
if(((((nextjournal.clojure_mode.node.start_edge_QMARK_(node_BAR_)) || (nextjournal.clojure_mode.node.same_edge_QMARK_(node_BAR_)))) && ((nextjournal.clojure_mode.node.start(node_BAR_) === nextjournal.clojure_mode.node.start(parent))))){
if(nextjournal.clojure_mode.node.empty_QMARK_(nextjournal.clojure_mode.node.up(node_BAR_))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),nextjournal.clojure_mode.node.start(parent),new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clojure_mode.util.from_to(nextjournal.clojure_mode.node.start(parent),nextjournal.clojure_mode.node.end(parent))], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),from], null);
}
} else {
return nextjournal.clojure_mode.extensions.close_brackets.backspace_backoff(state,from,to);

}
}
}
}));
}
});
nextjournal.clojure_mode.extensions.close_brackets.coll_pairs = new cljs.core.PersistentArrayMap(null, 4, ["(",")","[","]","{","}","\"","\""], null);
nextjournal.clojure_mode.extensions.close_brackets.handle_open = (function nextjournal$clojure_mode$extensions$close_brackets$handle_open(state,open){
var close = (nextjournal.clojure_mode.extensions.close_brackets.coll_pairs.cljs$core$IFn$_invoke$arity$1 ? nextjournal.clojure_mode.extensions.close_brackets.coll_pairs.cljs$core$IFn$_invoke$arity$1(open) : nextjournal.clojure_mode.extensions.close_brackets.coll_pairs.call(null,open));
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3(state,({"annotations": nextjournal.clojure_mode.util.user_event_annotation("input")}),(function (p__52531){
var map__52532 = p__52531;
var map__52532__$1 = (((((!((map__52532 == null))))?(((((map__52532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52532):map__52532);
var from = (function (){var obj52534 = map__52532__$1;
var k52535 = "from";
if((function (){var obj52536 = obj52534;
return (((!((obj52536 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52535,obj52536)));
})()){
return (obj52534[k52535]);
} else {
return undefined;
}
})();
var to = (function (){var obj52537 = map__52532__$1;
var k52538 = "to";
if((function (){var obj52539 = obj52537;
return (((!((obj52539 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52538,obj52539)));
})()){
return (obj52537[k52538]);
} else {
return undefined;
}
})();
var head = (function (){var obj52540 = map__52532__$1;
var k52541 = "head";
if((function (){var obj52542 = obj52540;
return (((!((obj52542 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52541,obj52542)));
})()){
return (obj52540[k52541]);
} else {
return undefined;
}
})();
var anchor = (function (){var obj52543 = map__52532__$1;
var k52544 = "anchor";
if((function (){var obj52545 = obj52543;
return (((!((obj52545 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52544,obj52545)));
})()){
return (obj52543[k52544]);
} else {
return undefined;
}
})();
var empty = (function (){var obj52546 = map__52532__$1;
var k52547 = "empty";
if((function (){var obj52548 = obj52546;
return (((!((obj52548 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52547,obj52548)));
})()){
return (obj52546[k52547]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(nextjournal.clojure_mode.extensions.close_brackets.in_string_QMARK_(state,from))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(open,"\"")){
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$2(head,"\\\"");
} else {
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3(from,to,open);
}
} else {
if(nextjournal.clojure_mode.extensions.close_brackets.escaped_QMARK_(state,from)){
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3(from,to,open);
} else {
if(cljs.core.truth_(empty)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"insert","insert",1286475395),[open,close].join(''),new cljs.core.Keyword(null,"from","from",1815293044),head], null),new cljs.core.Keyword(null,"cursor","cursor",1011937484),(head + ((open).length))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"insert","insert",1286475395),open,new cljs.core.Keyword(null,"from","from",1815293044),from], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"insert","insert",1286475395),close,new cljs.core.Keyword(null,"from","from",1815293044),to], null)], null),new cljs.core.Keyword(null,"from-to","from-to",-640428401),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(anchor + ((open).length)),(head + ((open).length))], null)], null);
}

}
}
}));
});
nextjournal.clojure_mode.extensions.close_brackets.handle_close = (function nextjournal$clojure_mode$extensions$close_brackets$handle_close(state,key_name){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$3(state,({"annotations": nextjournal.clojure_mode.util.user_event_annotation("input")}),(function (p__52549){
var map__52550 = p__52549;
var map__52550__$1 = (((((!((map__52550 == null))))?(((((map__52550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52550):map__52550);
var range = map__52550__$1;
var empty = (function (){var obj52552 = map__52550__$1;
var k52553 = "empty";
if((function (){var obj52554 = obj52552;
return (((!((obj52554 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52553,obj52554)));
})()){
return (obj52552[k52553]);
} else {
return undefined;
}
})();
var head = (function (){var obj52555 = map__52550__$1;
var k52556 = "head";
if((function (){var obj52557 = obj52555;
return (((!((obj52557 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52556,obj52557)));
})()){
return (obj52555[k52556]);
} else {
return undefined;
}
})();
var from = (function (){var obj52558 = map__52550__$1;
var k52559 = "from";
if((function (){var obj52560 = obj52558;
return (((!((obj52560 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52559,obj52560)));
})()){
return (obj52558[k52559]);
} else {
return undefined;
}
})();
var to = (function (){var obj52561 = map__52550__$1;
var k52562 = "to";
if((function (){var obj52563 = obj52561;
return (((!((obj52563 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52562,obj52563)));
})()){
return (obj52561[k52562]);
} else {
return undefined;
}
})();
if(cljs.core.truth_((function (){var or__4223__auto__ = nextjournal.clojure_mode.extensions.close_brackets.in_string_QMARK_(state,from);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return nextjournal.clojure_mode.extensions.close_brackets.escaped_QMARK_(state,from);
}
})())){
return nextjournal.clojure_mode.util.insertion.cljs$core$IFn$_invoke$arity$3(from,to,key_name);
} else {
if(cljs.core.truth_(empty)){
var or__4223__auto__ = (function (){var unbalanced = (function (){var G__52564 = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3(state,head,(-1));
var G__52564__$1 = (((G__52564 == null))?null:nextjournal.clojure_mode.node.ancestors(G__52564));
var G__52564__$2 = (((G__52564__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.coll_QMARK_,cljs.core.complement(nextjournal.clojure_mode.node.balanced_QMARK_)),G__52564__$1));
if((G__52564__$2 == null)){
return null;
} else {
return cljs.core.first(G__52564__$2);
}
})();
var closing = (function (){var G__52565 = unbalanced;
var G__52565__$1 = (((G__52565 == null))?null:nextjournal.clojure_mode.node.down(G__52565));
if((G__52565__$1 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.closed_by(G__52565__$1);
}
})();
var pos = (function (){var G__52566 = unbalanced;
if((G__52566 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.end(G__52566);
}
})();
if(cljs.core.truth_((function (){var and__4221__auto__ = closing;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(closing,key_name);
} else {
return and__4221__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),pos,new cljs.core.Keyword(null,"insert","insert",1286475395),closing], null),new cljs.core.Keyword(null,"cursor","cursor",1011937484),(pos + (1))], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var or__4223__auto____$1 = (function (){var temp__5754__auto__ = (function (){var temp__5754__auto__ = nextjournal.clojure_mode.node.terminal_cursor(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$1(state),head,(1));
if(cljs.core.truth_(temp__5754__auto__)){
var cursor = temp__5754__auto__;
while(true){
if(nextjournal.clojure_mode.node.right_edge_type_QMARK_(cursor.type)){
return nextjournal.clojure_mode.node.end(cursor);
} else {
if(cljs.core.truth_(cursor.next())){
continue;
} else {
return null;
}
}
break;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5754__auto__)){
var close_node_end = temp__5754__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),close_node_end], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__4223__auto____$1)){
return or__4223__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),head], null);
}
}
} else {
return null;
}
}
}));
});
nextjournal.clojure_mode.extensions.close_brackets.handle_backspace_cmd = (function nextjournal$clojure_mode$extensions$close_brackets$handle_backspace_cmd(p__52567){
var map__52568 = p__52567;
var map__52568__$1 = (((((!((map__52568 == null))))?(((((map__52568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52568):map__52568);
var view = map__52568__$1;
var state = (function (){var obj52570 = map__52568__$1;
var k52571 = "state";
if((function (){var obj52572 = obj52570;
return (((!((obj52572 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52571,obj52572)));
})()){
return (obj52570[k52571]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.util.dispatch_some(view,nextjournal.clojure_mode.extensions.close_brackets.handle_backspace(state));
});
nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd = (function nextjournal$clojure_mode$extensions$close_brackets$handle_open_cmd(key_name){
return (function (p__52573){
var map__52574 = p__52573;
var map__52574__$1 = (((((!((map__52574 == null))))?(((((map__52574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52574):map__52574);
var view = map__52574__$1;
var state = (function (){var obj52576 = map__52574__$1;
var k52577 = "state";
if((function (){var obj52578 = obj52576;
return (((!((obj52578 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52577,obj52578)));
})()){
return (obj52576[k52577]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.util.dispatch_some(view,nextjournal.clojure_mode.extensions.close_brackets.handle_open(state,key_name));
});
});
nextjournal.clojure_mode.extensions.close_brackets.handle_close_cmd = (function nextjournal$clojure_mode$extensions$close_brackets$handle_close_cmd(key_name){
return (function (p__52579){
var map__52580 = p__52579;
var map__52580__$1 = (((((!((map__52580 == null))))?(((((map__52580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52580):map__52580);
var view = map__52580__$1;
var state = (function (){var obj52582 = map__52580__$1;
var k52583 = "state";
if((function (){var obj52584 = obj52582;
return (((!((obj52584 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52583,obj52584)));
})()){
return (obj52582[k52583]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.util.dispatch_some(view,nextjournal.clojure_mode.extensions.close_brackets.handle_close(state,key_name));
});
});
nextjournal.clojure_mode.extensions.close_brackets.extension = (function nextjournal$clojure_mode$extensions$close_brackets$extension(){
return module$node_modules$$codemirror$view$dist$index_cjs.keymap.of([({"key":"Backspace","run":(function (p__52585){
var map__52586 = p__52585;
var map__52586__$1 = (((((!((map__52586 == null))))?(((((map__52586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52586):map__52586);
var view = map__52586__$1;
var state = (function (){var obj52588 = map__52586__$1;
var k52589 = "state";
if((function (){var obj52590 = obj52588;
return (((!((obj52590 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52589,obj52590)));
})()){
return (obj52588[k52589]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.util.dispatch_some(view,nextjournal.clojure_mode.extensions.close_brackets.handle_backspace(state));
})}),({"key":"(","run":nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd("(")}),({"key":"[","run":nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd("[")}),({"key":"{","run":nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd("{")}),({"key":"\"","run":nextjournal.clojure_mode.extensions.close_brackets.handle_open_cmd("\"")}),({"key":")","run":nextjournal.clojure_mode.extensions.close_brackets.handle_close_cmd(")")}),({"key":"]","run":nextjournal.clojure_mode.extensions.close_brackets.handle_close_cmd("]")}),({"key":"}","run":nextjournal.clojure_mode.extensions.close_brackets.handle_close_cmd("}")})]);
});

//# sourceMappingURL=nextjournal.clojure_mode.extensions.close_brackets.js.map
