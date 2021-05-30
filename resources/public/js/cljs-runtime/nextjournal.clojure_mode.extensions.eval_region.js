goog.provide('nextjournal.clojure_mode.extensions.eval_region');
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$w3c_keyname$index_cjs=shadow.js.require("module$node_modules$w3c_keyname$index_cjs", {});
/**
 * Returns node or its highest ancestor that starts or ends at the cursor position.
 */
nextjournal.clojure_mode.extensions.eval_region.uppermost_edge_here = (function nextjournal$clojure_mode$extensions$eval_region$uppermost_edge_here(pos,node){
var or__4223__auto__ = cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(nextjournal.clojure_mode.node.top_QMARK_),(function (p1__52725_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(pos,nextjournal.clojure_mode.node.end(p1__52725_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clojure_mode.node.end(node)], 0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(pos,nextjournal.clojure_mode.node.start(p1__52725_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clojure_mode.node.start(node)], 0))));
})),cljs.core.iterate(nextjournal.clojure_mode.node.up,node)));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return node;
}
});
nextjournal.clojure_mode.extensions.eval_region.main_selection = (function nextjournal$clojure_mode$extensions$eval_region$main_selection(state){
var obj52730 = (function (){var obj52728 = (function (){var parent__51019__auto__ = (state["selection"]);
var f__51020__auto__ = (parent__51019__auto__["asSingle"]);
return f__51020__auto__.call(parent__51019__auto__);
})();
var k52729 = "ranges";
if((function (){var obj52733 = obj52728;
return (((!((obj52733 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52729,obj52733)));
})()){
return (obj52728[k52729]);
} else {
return undefined;
}
})();
var k52731 = (0);
if((function (){var obj52736 = obj52730;
return (((!((obj52736 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52731,obj52736)));
})()){
return (obj52730[k52731]);
} else {
return undefined;
}
});
nextjournal.clojure_mode.extensions.eval_region.node_at_cursor = (function nextjournal$clojure_mode$extensions$eval_region$node_at_cursor(var_args){
var G__52745 = arguments.length;
switch (G__52745) {
case 1:
return nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$1 = (function (state){
return nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$2(state,(function (){var obj52749 = nextjournal.clojure_mode.extensions.eval_region.main_selection(state);
var k52750 = "from";
if((function (){var obj52752 = obj52749;
return (((!((obj52752 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52750,obj52752)));
})()){
return (obj52749[k52750]);
} else {
return undefined;
}
})());
}));

(nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$2 = (function (state,from){
var G__52755 = nextjournal.clojure_mode.node.nearest_touching(state,from,(-1));
var G__52755__$1 = (((G__52755 == null))?null:(function (p1__52740_SHARP_){
if(((nextjournal.clojure_mode.node.terminal_type_QMARK_(nextjournal.clojure_mode.node.type(p1__52740_SHARP_))) || ((((nextjournal.clojure_mode.node.start(p1__52740_SHARP_) <= from)) || ((nextjournal.clojure_mode.node.end(p1__52740_SHARP_) <= from)))))){
var G__52762 = p1__52740_SHARP_;
if(((nextjournal.clojure_mode.node.top_QMARK_(p1__52740_SHARP_)) || ((((!(nextjournal.clojure_mode.node.terminal_type_QMARK_(nextjournal.clojure_mode.node.type(p1__52740_SHARP_))))) && ((((nextjournal.clojure_mode.node.start(p1__52740_SHARP_) < from)) && ((from < nextjournal.clojure_mode.node.end(p1__52740_SHARP_))))))))){
return cljs.core.first(nextjournal.clojure_mode.node.children.cljs$core$IFn$_invoke$arity$3(G__52762,from,(-1)));
} else {
return G__52762;
}
} else {
return null;
}
})(G__52755));
var G__52755__$2 = (((G__52755__$1 == null))?null:nextjournal.clojure_mode.extensions.eval_region.uppermost_edge_here(from,G__52755__$1));
if((G__52755__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$2(state,G__52755__$2);
}
}));

(nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$lang$maxFixedArity = 2);

nextjournal.clojure_mode.extensions.eval_region.top_level_node = (function nextjournal$clojure_mode$extensions$eval_region$top_level_node(state){
return cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.complement(nextjournal.clojure_mode.node.top_QMARK_)),cljs.core.iterate(nextjournal.clojure_mode.node.up,nextjournal.clojure_mode.node.nearest_touching(state,(function (){var obj52765 = nextjournal.clojure_mode.extensions.eval_region.main_selection(state);
var k52766 = "from";
if((function (){var obj52767 = obj52765;
return (((!((obj52767 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52766,obj52767)));
})()){
return (obj52765[k52766]);
} else {
return undefined;
}
})(),(-1)))));
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.modifier_effect !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.modifier_effect = module$node_modules$$codemirror$state$dist$index_cjs.StateEffect.define();
}
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.modifier_field !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.modifier_field = module$node_modules$$codemirror$state$dist$index_cjs.StateField.define(({"create":cljs.core.constantly(cljs.core.PersistentArrayMap.EMPTY),"update":(function (value,tr){
var or__4223__auto__ = (function (){var G__52769 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__52768_SHARP_){
return p1__52768_SHARP_.is(nextjournal.clojure_mode.extensions.eval_region.modifier_effect);
}),tr.effects));
if((G__52769 == null)){
return null;
} else {
var obj52770 = G__52769;
var k52771 = "value";
if((function (){var obj52772 = obj52770;
return (((!((obj52772 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52771,obj52772)));
})()){
return (obj52770[k52771]);
} else {
return undefined;
}
}
})();
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return value;
}
})}));
}
nextjournal.clojure_mode.extensions.eval_region.get_modifier_field = (function nextjournal$clojure_mode$extensions$eval_region$get_modifier_field(state){
return state.field(nextjournal.clojure_mode.extensions.eval_region.modifier_field);
});
nextjournal.clojure_mode.extensions.eval_region.set_modifier_field_BANG_ = (function nextjournal$clojure_mode$extensions$eval_region$set_modifier_field_BANG_(p__52773,value){
var map__52774 = p__52773;
var map__52774__$1 = (((((!((map__52774 == null))))?(((((map__52774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52774):map__52774);
var view = map__52774__$1;
var dispatch = (function (){var obj52776 = map__52774__$1;
var k52777 = "dispatch";
if((function (){var obj52778 = obj52776;
return (((!((obj52778 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52777,obj52778)));
})()){
return (obj52776[k52777]);
} else {
return undefined;
}
})();
var state = (function (){var obj52779 = map__52774__$1;
var k52780 = "state";
if((function (){var obj52781 = obj52779;
return (((!((obj52781 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52780,obj52781)));
})()){
return (obj52779[k52780]);
} else {
return undefined;
}
})();
var G__52782 = ({"effects": nextjournal.clojure_mode.extensions.eval_region.modifier_effect.of(value)});
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__52782) : dispatch.call(null,G__52782));
});
nextjournal.clojure_mode.extensions.eval_region.mark = (function nextjournal$clojure_mode$extensions$eval_region$mark(spec,p__52783){
var map__52784 = p__52783;
var map__52784__$1 = (((((!((map__52784 == null))))?(((((map__52784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52784):map__52784);
var from = (function (){var obj52786 = map__52784__$1;
var k52787 = "from";
if((function (){var obj52788 = obj52786;
return (((!((obj52788 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52787,obj52788)));
})()){
return (obj52786[k52787]);
} else {
return undefined;
}
})();
var to = (function (){var obj52789 = map__52784__$1;
var k52790 = "to";
if((function (){var obj52791 = obj52789;
return (((!((obj52791 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52790,obj52791)));
})()){
return (obj52789[k52790]);
} else {
return undefined;
}
})();
return module$node_modules$$codemirror$view$dist$index_cjs.Decoration.mark(spec).range(from,to);
});
nextjournal.clojure_mode.extensions.eval_region.single_mark = (function nextjournal$clojure_mode$extensions$eval_region$single_mark(spec,range){
return module$node_modules$$codemirror$view$dist$index_cjs.Decoration.set([nextjournal.clojure_mode.extensions.eval_region.mark(spec,range)]);
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.mark_spec !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.mark_spec = ({"attributes":({"style":"background-color: rgba(0, 243, 255, 0.14);"})});
}
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.mark_spec_highlight !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.mark_spec_highlight = ({"attributes":({"style":"background-color: rgba(0, 243, 255, 0.35);"})});
}
nextjournal.clojure_mode.extensions.eval_region.cursor_range = (function nextjournal$clojure_mode$extensions$eval_region$cursor_range(state){
if(cljs.core.truth_(state.selection.main.empty)){
return nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$1(state);
} else {
return state.selection.main;
}
});
if((typeof nextjournal !== 'undefined') && (typeof nextjournal.clojure_mode !== 'undefined') && (typeof nextjournal.clojure_mode.extensions !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region !== 'undefined') && (typeof nextjournal.clojure_mode.extensions.eval_region.region_field !== 'undefined')){
} else {
nextjournal.clojure_mode.extensions.eval_region.region_field = module$node_modules$$codemirror$state$dist$index_cjs.StateField.define(({"create":cljs.core.constantly(module$node_modules$$codemirror$view$dist$index_cjs.Decoration.none),"update":(function (_value,p__52793){
var map__52794 = p__52793;
var map__52794__$1 = (((((!((map__52794 == null))))?(((((map__52794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52794):map__52794);
var state = (function (){var obj52796 = map__52794__$1;
var k52797 = "state";
if((function (){var obj52798 = obj52796;
return (((!((obj52798 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52797,obj52798)));
})()){
return (obj52796[k52797]);
} else {
return undefined;
}
})();
var map__52799 = nextjournal.clojure_mode.extensions.eval_region.get_modifier_field(state);
var map__52799__$1 = cljs.core.__destructure_map(map__52799);
var Alt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52799__$1,"Alt");
var Shift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52799__$1,"Shift");
var Enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52799__$1,"Enter");
var spec = (cljs.core.truth_(Enter)?nextjournal.clojure_mode.extensions.eval_region.mark_spec_highlight:nextjournal.clojure_mode.extensions.eval_region.mark_spec);
var temp__5752__auto__ = (cljs.core.truth_((function (){var and__4221__auto__ = Alt;
if(cljs.core.truth_(and__4221__auto__)){
return Shift;
} else {
return and__4221__auto__;
}
})())?nextjournal.clojure_mode.extensions.eval_region.top_level_node(state):(cljs.core.truth_(Alt)?(function (){var or__4223__auto__ = nextjournal.clojure_mode.util.guard(nextjournal.clojure_mode.extensions.eval_region.main_selection(state),(function (p1__52792_SHARP_){
return cljs.core.not((function (){var obj52800 = p1__52792_SHARP_;
var k52801 = "empty";
if((function (){var obj52802 = obj52800;
return (((!((obj52802 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52801,obj52802)));
})()){
return (obj52800[k52801]);
} else {
return undefined;
}
})());
}));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return nextjournal.clojure_mode.extensions.eval_region.cursor_range(state);
}
})():null));
if(cljs.core.truth_(temp__5752__auto__)){
var range = temp__5752__auto__;
return nextjournal.clojure_mode.extensions.eval_region.single_mark(spec,range);
} else {
return module$node_modules$$codemirror$view$dist$index_cjs.Decoration.none;
}
})}));
}
nextjournal.clojure_mode.extensions.eval_region.get_region_field = (function nextjournal$clojure_mode$extensions$eval_region$get_region_field(state){
return state.field(nextjournal.clojure_mode.extensions.eval_region.region_field);
});
nextjournal.clojure_mode.extensions.eval_region.current_range = (function nextjournal$clojure_mode$extensions$eval_region$current_range(state){
var or__4223__auto__ = (function (){var G__52804 = nextjournal.clojure_mode.extensions.eval_region.get_region_field(state);
var G__52804__$1 = (((G__52804 == null))?null:(function (){var obj__50995__auto__ = G__52804;
var f__50996__auto__ = (obj__50995__auto__["iter"]);
return f__50996__auto__.call(obj__50995__auto__);
})());
if((G__52804__$1 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.guard(G__52804__$1,(function (p1__52803_SHARP_){
var obj52805 = p1__52803_SHARP_;
var k52806 = "value";
if((function (){var obj52807 = obj52805;
return (((!((obj52807 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52806,obj52807)));
})()){
return (obj52805[k52806]);
} else {
return undefined;
}
}));
}
})();
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return state.selection.main;
}
});
/**
 * Maintains modifier-state-field, containing a map of {<modifier> true}, including Enter.
 */
nextjournal.clojure_mode.extensions.eval_region.modifier_extension = (function nextjournal$clojure_mode$extensions$eval_region$modifier_extension(modifier){
var handle_enter = (function nextjournal$clojure_mode$extensions$eval_region$modifier_extension_$_handle_enter(p__52808){
var map__52809 = p__52808;
var map__52809__$1 = (((((!((map__52809 == null))))?(((((map__52809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52809):map__52809);
var view = map__52809__$1;
var state = (function (){var obj52811 = map__52809__$1;
var k52812 = "state";
if((function (){var obj52813 = obj52811;
return (((!((obj52813 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52812,obj52813)));
})()){
return (obj52811[k52812]);
} else {
return undefined;
}
})();
nextjournal.clojure_mode.extensions.eval_region.set_modifier_field_BANG_(view,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nextjournal.clojure_mode.extensions.eval_region.get_modifier_field(state),"Enter",true));

return null;
});
var handle_key_event = (function (p__52814,p__52815){
var map__52816 = p__52814;
var map__52816__$1 = (((((!((map__52816 == null))))?(((((map__52816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52816):map__52816);
var event = map__52816__$1;
var altKey = (function (){var obj52818 = map__52816__$1;
var k52819 = "altKey";
if((function (){var obj52820 = obj52818;
return (((!((obj52820 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52819,obj52820)));
})()){
return (obj52818[k52819]);
} else {
return undefined;
}
})();
var shiftKey = (function (){var obj52821 = map__52816__$1;
var k52822 = "shiftKey";
if((function (){var obj52823 = obj52821;
return (((!((obj52823 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52822,obj52823)));
})()){
return (obj52821[k52822]);
} else {
return undefined;
}
})();
var metaKey = (function (){var obj52824 = map__52816__$1;
var k52825 = "metaKey";
if((function (){var obj52826 = obj52824;
return (((!((obj52826 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52825,obj52826)));
})()){
return (obj52824[k52825]);
} else {
return undefined;
}
})();
var controlKey = (function (){var obj52827 = map__52816__$1;
var k52828 = "controlKey";
if((function (){var obj52829 = obj52827;
return (((!((obj52829 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52828,obj52829)));
})()){
return (obj52827[k52828]);
} else {
return undefined;
}
})();
var type = (function (){var obj52830 = map__52816__$1;
var k52831 = "type";
if((function (){var obj52832 = obj52830;
return (((!((obj52832 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52831,obj52832)));
})()){
return (obj52830[k52831]);
} else {
return undefined;
}
})();
var map__52833 = p__52815;
var map__52833__$1 = (((((!((map__52833 == null))))?(((((map__52833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52833):map__52833);
var view = map__52833__$1;
var state = (function (){var obj52835 = map__52833__$1;
var k52836 = "state";
if((function (){var obj52837 = obj52835;
return (((!((obj52837 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52836,obj52837)));
})()){
return (obj52835[k52836]);
} else {
return undefined;
}
})();
var prev = nextjournal.clojure_mode.extensions.eval_region.get_modifier_field(state);
var next = (function (){var G__52838 = cljs.core.PersistentArrayMap.EMPTY;
var G__52838__$1 = (cljs.core.truth_(altKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52838,"Alt",true):G__52838);
var G__52838__$2 = (cljs.core.truth_(shiftKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52838__$1,"Shift",true):G__52838__$1);
var G__52838__$3 = (cljs.core.truth_(metaKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52838__$2,"Meta",true):G__52838__$2);
var G__52838__$4 = (cljs.core.truth_(controlKey)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52838__$3,"Control",true):G__52838__$3);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("keydown",type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",module$node_modules$w3c_keyname$index_cjs.keyName(event))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52838__$4,"Enter",true);
} else {
return G__52838__$4;
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev,next)){
return nextjournal.clojure_mode.extensions.eval_region.set_modifier_field_BANG_(view,next);
} else {
return null;
}
});
var handle_backspace = (function (p__52839){
var map__52840 = p__52839;
var map__52840__$1 = (((((!((map__52840 == null))))?(((((map__52840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52840):map__52840);
var view = map__52840__$1;
var state = (function (){var obj52842 = map__52840__$1;
var k52843 = "state";
if((function (){var obj52844 = obj52842;
return (((!((obj52844 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52843,obj52844)));
})()){
return (obj52842[k52843]);
} else {
return undefined;
}
})();
var dispatch = (function (){var obj52845 = map__52840__$1;
var k52846 = "dispatch";
if((function (){var obj52847 = obj52845;
return (((!((obj52847 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52846,obj52847)));
})()){
return (obj52845[k52846]);
} else {
return undefined;
}
})();
var map__52848 = nextjournal.clojure_mode.extensions.eval_region.current_range(state);
var map__52848__$1 = (((((!((map__52848 == null))))?(((((map__52848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52848):map__52848);
var from = (function (){var obj52850 = map__52848__$1;
var k52851 = "from";
if((function (){var obj52852 = obj52850;
return (((!((obj52852 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52851,obj52852)));
})()){
return (obj52850[k52851]);
} else {
return undefined;
}
})();
var to = (function (){var obj52853 = map__52848__$1;
var k52854 = "to";
if((function (){var obj52855 = obj52853;
return (((!((obj52855 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52854,obj52855)));
})()){
return (obj52853[k52854]);
} else {
return undefined;
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from,to)){
var G__52856_52865 = ({"changes":({"from":from,"to":to,"insert":""}),"annotations":nextjournal.clojure_mode.util.user_event_annotation("delete")});
(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__52856_52865) : dispatch.call(null,G__52856_52865));
} else {
}

return true;
});
return [nextjournal.clojure_mode.extensions.eval_region.modifier_field,module$node_modules$$codemirror$view$dist$index_cjs.keymap.of([({"key":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(modifier),"-Enter"].join(''),"shift":handle_enter,"run":handle_enter}),({"key":[cljs.core.str.cljs$core$IFn$_invoke$arity$1(modifier),"-Backspace"].join(''),"run":handle_backspace,"shift":handle_backspace})]),module$node_modules$$codemirror$view$dist$index_cjs.EditorView.domEventHandlers(({"keydown": handle_key_event, "keyup": handle_key_event}))];
});
nextjournal.clojure_mode.extensions.eval_region.extension = (function nextjournal$clojure_mode$extensions$eval_region$extension(p__52857){
var map__52858 = p__52857;
var map__52858__$1 = cljs.core.__destructure_map(map__52858);
var modifier = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52858__$1,new cljs.core.Keyword(null,"modifier","modifier",1634442788),"Alt");
return [nextjournal.clojure_mode.extensions.eval_region.modifier_extension(modifier),nextjournal.clojure_mode.extensions.eval_region.region_field,module$node_modules$$codemirror$view$dist$index_cjs.EditorView.decorations.from(nextjournal.clojure_mode.extensions.eval_region.region_field)];
});
nextjournal.clojure_mode.extensions.eval_region.cursor_node_string = (function nextjournal$clojure_mode$extensions$eval_region$cursor_node_string(state){
return nextjournal.clojure_mode.util.guard((function (){var G__52859 = nextjournal.clojure_mode.extensions.eval_region.node_at_cursor.cljs$core$IFn$_invoke$arity$1(state);
if((G__52859 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.range_str(state,G__52859);
}
})(),cljs.core.complement(clojure.string.blank_QMARK_));
});
nextjournal.clojure_mode.extensions.eval_region.top_level_string = (function nextjournal$clojure_mode$extensions$eval_region$top_level_string(state){
return nextjournal.clojure_mode.util.guard((function (){var G__52860 = nextjournal.clojure_mode.extensions.eval_region.top_level_node(state);
if((G__52860 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.range_str(state,G__52860);
}
})(),cljs.core.complement(clojure.string.blank_QMARK_));
});

//# sourceMappingURL=nextjournal.clojure_mode.extensions.eval_region.js.map
