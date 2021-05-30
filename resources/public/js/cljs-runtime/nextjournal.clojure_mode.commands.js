goog.provide('nextjournal.clojure_mode.commands');
var module$node_modules$$codemirror$commands$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$commands$dist$index_cjs", {});
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
nextjournal.clojure_mode.commands.view_command = (function nextjournal$clojure_mode$commands$view_command(f){
return (function (p__52276){
var map__52277 = p__52276;
var map__52277__$1 = (((((!((map__52277 == null))))?(((((map__52277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52277):map__52277);
var state = (function (){var obj52280 = map__52277__$1;
var k52281 = "state";
if((function (){var obj52283 = obj52280;
return (((!((obj52283 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52281,obj52283)));
})()){
return (obj52280[k52281]);
} else {
return undefined;
}
})();
var dispatch = (function (){var obj52285 = map__52277__$1;
var k52286 = "dispatch";
if((function (){var obj52287 = obj52285;
return (((!((obj52287 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52286,obj52287)));
})()){
return (obj52285[k52286]);
} else {
return undefined;
}
})();
var G__52289_52479 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(state) : f.call(null,state));
if((G__52289_52479 == null)){
} else {
(dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__52289_52479) : dispatch.call(null,G__52289_52479));
}

return true;
});
});
nextjournal.clojure_mode.commands.unwrap_STAR_ = (function nextjournal$clojure_mode$commands$unwrap_STAR_(state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__52297){
var map__52299 = p__52297;
var map__52299__$1 = (((((!((map__52299 == null))))?(((((map__52299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52299):map__52299);
var range = map__52299__$1;
var from = (function (){var obj52305 = map__52299__$1;
var k52306 = "from";
if((function (){var obj52307 = obj52305;
return (((!((obj52307 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52306,obj52307)));
})()){
return (obj52305[k52306]);
} else {
return undefined;
}
})();
var to = (function (){var obj52319 = map__52299__$1;
var k52320 = "to";
if((function (){var obj52323 = obj52319;
return (((!((obj52323 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52320,obj52323)));
})()){
return (obj52319[k52320]);
} else {
return undefined;
}
})();
var empty = (function (){var obj52334 = map__52299__$1;
var k52335 = "empty";
if((function (){var obj52336 = obj52334;
return (((!((obj52336 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52335,obj52336)));
})()){
return (obj52334[k52335]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
var temp__5754__auto__ = (function (){var G__52341 = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$3(state,from,(-1));
var G__52341__$1 = (((G__52341 == null))?null:nextjournal.clojure_mode.node.closest(G__52341,nextjournal.clojure_mode.node.coll_QMARK_));
if((G__52341__$1 == null)){
return null;
} else {
return nextjournal.clojure_mode.util.guard(G__52341__$1,nextjournal.clojure_mode.node.balanced_QMARK_);
}
})();
if(cljs.core.truth_(temp__5754__auto__)){
var nearest_balanced_coll = temp__5754__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(from - (1)),new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nextjournal.clojure_mode.node.from_to.cljs$core$IFn$_invoke$arity$1(nextjournal.clojure_mode.node.down(nearest_balanced_coll)),nextjournal.clojure_mode.node.from_to.cljs$core$IFn$_invoke$arity$1(nextjournal.clojure_mode.node.down_last(nearest_balanced_coll))], null)], null);
} else {
return null;
}
} else {
return null;
}
}));
});
nextjournal.clojure_mode.commands.copy_to_clipboard_BANG_ = (function nextjournal$clojure_mode$commands$copy_to_clipboard_BANG_(text){
var focus_el = (function (){var obj52342 = document;
var k52343 = "activeElement";
if((function (){var obj52345 = obj52342;
return (((!((obj52345 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52343,obj52345)));
})()){
return (obj52342[k52343]);
} else {
return undefined;
}
})();
var input_el = document.createElement("textarea");
input_el.setAttribute("class","clipboard-input");

var obj52346_52480 = input_el;
var obj52347_52481 = (((!((obj52346_52480 == null))))?obj52346_52480:({}));
(obj52347_52481["innerHTML"] = text);


document.body.appendChild(input_el);

input_el.focus();

input_el.select();

document.execCommand("copy");

focus_el.focus(({"preventScroll": true}));

return document.body.removeChild(input_el);
});
nextjournal.clojure_mode.commands.kill_STAR_ = (function nextjournal$clojure_mode$commands$kill_STAR_(state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__52352){
var map__52353 = p__52352;
var map__52353__$1 = (((((!((map__52353 == null))))?(((((map__52353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52353):map__52353);
var range = map__52353__$1;
var from = (function (){var obj52355 = map__52353__$1;
var k52356 = "from";
if((function (){var obj52357 = obj52355;
return (((!((obj52357 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52356,obj52357)));
})()){
return (obj52355[k52356]);
} else {
return undefined;
}
})();
var to = (function (){var obj52358 = map__52353__$1;
var k52359 = "to";
if((function (){var obj52360 = obj52358;
return (((!((obj52360 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52359,obj52360)));
})()){
return (obj52358[k52359]);
} else {
return undefined;
}
})();
var empty = (function (){var obj52361 = map__52353__$1;
var k52362 = "empty";
if((function (){var obj52363 = obj52361;
return (((!((obj52363 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52362,obj52363)));
})()){
return (obj52361[k52362]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
var node = nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,from);
var parent = nextjournal.clojure_mode.node.closest(node,(function (p1__52350_SHARP_){
var or__4223__auto__ = nextjournal.clojure_mode.node.coll_QMARK_(p1__52350_SHARP_);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return ((nextjournal.clojure_mode.node.string_QMARK_(p1__52350_SHARP_)) || (nextjournal.clojure_mode.node.top_QMARK_(p1__52350_SHARP_)));
}
}));
var line_end = state.doc.lineAt(from).to;
var next_children = (cljs.core.truth_(parent)?nextjournal.clojure_mode.node.children.cljs$core$IFn$_invoke$arity$3(parent,from,(1)):null);
var last_child_on_line = (cljs.core.truth_(parent)?(function (){var G__52364 = next_children;
var G__52364__$1 = (((G__52364 == null))?null:cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$1((function (p1__52351_SHARP_){
return (nextjournal.clojure_mode.node.start(p1__52351_SHARP_) <= line_end);
})),G__52364));
if((G__52364__$1 == null)){
return null;
} else {
return cljs.core.last(G__52364__$1);
}
})():null);
var to__$1 = ((nextjournal.clojure_mode.node.string_QMARK_(parent))?(function (){var content = cljs.core.str.cljs$core$IFn$_invoke$arity$1(nextjournal.clojure_mode.node.string.cljs$core$IFn$_invoke$arity$2(state,parent));
var content_from = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(content,(from - nextjournal.clojure_mode.node.start(parent)));
var next_newline = content_from.indexOf("\n");
if((next_newline < (0))){
return (nextjournal.clojure_mode.node.end(parent) - (1));
} else {
return ((from + next_newline) + (1));
}
})():(cljs.core.truth_(last_child_on_line)?((nextjournal.clojure_mode.node.end_edge_QMARK_(last_child_on_line))?nextjournal.clojure_mode.node.start(last_child_on_line):nextjournal.clojure_mode.node.end(last_child_on_line)):(cljs.core.truth_((function (){var G__52365 = cljs.core.first(next_children);
var G__52365__$1 = (((G__52365 == null))?null:nextjournal.clojure_mode.node.start(G__52365));
if((G__52365__$1 == null)){
return null;
} else {
return (G__52365__$1 > line_end);
}
})())?nextjournal.clojure_mode.node.start(cljs.core.first(next_children)):null)));
nextjournal.clojure_mode.commands.copy_to_clipboard_BANG_(nextjournal.clojure_mode.node.string.cljs$core$IFn$_invoke$arity$3(state,from,to__$1));

if(cljs.core.truth_(to__$1)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),from,new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to__$1], null)], null);
} else {
return null;
}
} else {
nextjournal.clojure_mode.commands.copy_to_clipboard_BANG_(nextjournal.clojure_mode.node.string.cljs$core$IFn$_invoke$arity$3(state,from,to));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),from,new cljs.core.Keyword(null,"changes","changes",1492088),nextjournal.clojure_mode.util.from_to(from,to)], null);
}
}));
});
nextjournal.clojure_mode.commands.enter_and_indent_STAR_ = (function nextjournal$clojure_mode$commands$enter_and_indent_STAR_(state){
var ctx = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__52366){
var map__52367 = p__52366;
var map__52367__$1 = (((((!((map__52367 == null))))?(((((map__52367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52367):map__52367);
var range = map__52367__$1;
var from = (function (){var obj52369 = map__52367__$1;
var k52370 = "from";
if((function (){var obj52371 = obj52369;
return (((!((obj52371 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52370,obj52371)));
})()){
return (obj52369[k52370]);
} else {
return undefined;
}
})();
var to = (function (){var obj52372 = map__52367__$1;
var k52373 = "to";
if((function (){var obj52374 = obj52372;
return (((!((obj52374 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52373,obj52374)));
})()){
return (obj52372[k52373]);
} else {
return undefined;
}
})();
var empty = (function (){var obj52375 = map__52367__$1;
var k52376 = "empty";
if((function (){var obj52377 = obj52375;
return (((!((obj52377 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52376,obj52377)));
})()){
return (obj52375[k52376]);
} else {
return undefined;
}
})();
var indent_at = nextjournal.clojure_mode.node.start(nextjournal.clojure_mode.node.inner_span(nextjournal.clojure_mode.node.closest(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,from),cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.coll_QMARK_,nextjournal.clojure_mode.node.top_QMARK_))));
var indent = nextjournal.clojure_mode.extensions.formatting.get_indentation(ctx,indent_at);
var insertion = ["\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nextjournal.clojure_mode.extensions.formatting.spaces(state,indent))].join('');
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(from + ((insertion).length)),new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),from,new cljs.core.Keyword(null,"to","to",192099007),to,new cljs.core.Keyword(null,"insert","insert",1286475395),insertion], null)], null)], null);
}));
});
nextjournal.clojure_mode.commands.nav_position = (function nextjournal$clojure_mode$commands$nav_position(state,from,dir){
var or__4223__auto__ = (function (){var G__52379 = nextjournal.clojure_mode.node.closest(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,from),(function (p1__52378_SHARP_){
var or__4223__auto__ = nextjournal.clojure_mode.node.coll_QMARK_(p1__52378_SHARP_);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return ((nextjournal.clojure_mode.node.string_QMARK_(p1__52378_SHARP_)) || (nextjournal.clojure_mode.node.top_QMARK_(p1__52378_SHARP_)));
}
}));
var G__52379__$1 = (((G__52379 == null))?null:nextjournal.clojure_mode.node.children.cljs$core$IFn$_invoke$arity$3(G__52379,from,dir));
var G__52379__$2 = (((G__52379__$1 == null))?null:cljs.core.first(G__52379__$1));
if((G__52379__$2 == null)){
return null;
} else {
var obj52380 = G__52379__$2;
var k52381 = applied_science.js_interop.impl.wrap_key((function (){var G__52383 = dir;
switch (G__52383) {
case (-1):
return new cljs.core.Keyword(null,"from","from",1815293044);

break;
case (1):
return new cljs.core.Keyword(null,"to","to",192099007);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52383)].join('')));

}
})());
if((function (){var obj52384 = obj52380;
return (((!((obj52384 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52381,obj52384)));
})()){
return (obj52380[k52381]);
} else {
return undefined;
}
}
})();
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return nextjournal.clojure_mode.selections.constrain(state,(from + dir));
}
});
nextjournal.clojure_mode.commands.nav = (function nextjournal$clojure_mode$commands$nav(dir){
return (function (state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__52385){
var map__52386 = p__52385;
var map__52386__$1 = (((((!((map__52386 == null))))?(((((map__52386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52386):map__52386);
var range = map__52386__$1;
var from = (function (){var obj52388 = map__52386__$1;
var k52389 = "from";
if((function (){var obj52390 = obj52388;
return (((!((obj52390 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52389,obj52390)));
})()){
return (obj52388[k52389]);
} else {
return undefined;
}
})();
var to = (function (){var obj52391 = map__52386__$1;
var k52392 = "to";
if((function (){var obj52393 = obj52391;
return (((!((obj52393 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52392,obj52393)));
})()){
return (obj52391[k52392]);
} else {
return undefined;
}
})();
var empty = (function (){var obj52394 = map__52386__$1;
var k52395 = "empty";
if((function (){var obj52396 = obj52394;
return (((!((obj52396 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52395,obj52396)));
})()){
return (obj52394[k52395]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),nextjournal.clojure_mode.commands.nav_position(state,from,dir)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(function (){var obj52397 = nextjournal.clojure_mode.util.from_to(from,to);
var k52398 = applied_science.js_interop.impl.wrap_key((function (){var G__52400 = dir;
switch (G__52400) {
case (-1):
return new cljs.core.Keyword(null,"from","from",1815293044);

break;
case (1):
return new cljs.core.Keyword(null,"to","to",192099007);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52400)].join('')));

}
})());
if((function (){var obj52401 = obj52397;
return (((!((obj52401 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52398,obj52401)));
})()){
return (obj52397[k52398]);
} else {
return undefined;
}
})()], null);
}
}));
});
});
nextjournal.clojure_mode.commands.nav_select = (function nextjournal$clojure_mode$commands$nav_select(dir){
return (function (state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__52402){
var map__52403 = p__52402;
var map__52403__$1 = (((((!((map__52403 == null))))?(((((map__52403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52403):map__52403);
var range = map__52403__$1;
var from = (function (){var obj52405 = map__52403__$1;
var k52406 = "from";
if((function (){var obj52407 = obj52405;
return (((!((obj52407 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52406,obj52407)));
})()){
return (obj52405[k52406]);
} else {
return undefined;
}
})();
var to = (function (){var obj52408 = map__52403__$1;
var k52409 = "to";
if((function (){var obj52410 = obj52408;
return (((!((obj52410 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52409,obj52410)));
})()){
return (obj52408[k52409]);
} else {
return undefined;
}
})();
var empty = (function (){var obj52411 = map__52403__$1;
var k52412 = "empty";
if((function (){var obj52413 = obj52411;
return (((!((obj52413 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52412,obj52413)));
})()){
return (obj52411[k52412]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$3(state,from,nextjournal.clojure_mode.commands.nav_position(state,from,dir))], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),(function (){var map__52414 = nextjournal.clojure_mode.util.from_to(from,to);
var map__52414__$1 = (((((!((map__52414 == null))))?(((((map__52414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52414):map__52414);
var from__$1 = (function (){var obj52416 = map__52414__$1;
var k52417 = "from";
if((function (){var obj52418 = obj52416;
return (((!((obj52418 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52417,obj52418)));
})()){
return (obj52416[k52417]);
} else {
return undefined;
}
})();
var to__$1 = (function (){var obj52419 = map__52414__$1;
var k52420 = "to";
if((function (){var obj52421 = obj52419;
return (((!((obj52421 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52420,obj52421)));
})()){
return (obj52419[k52420]);
} else {
return undefined;
}
})();
var G__52422 = dir;
switch (G__52422) {
case (1):
return nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$3(state,from__$1,nextjournal.clojure_mode.commands.nav_position(state,to__$1,dir));

break;
case (-1):
return nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$3(state,nextjournal.clojure_mode.commands.nav_position(state,from__$1,dir),to__$1);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52422)].join('')));

}
})()], null);
}
}));
});
});
nextjournal.clojure_mode.commands.balance_ranges = (function nextjournal$clojure_mode$commands$balance_ranges(state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__52423){
var map__52424 = p__52423;
var map__52424__$1 = (((((!((map__52424 == null))))?(((((map__52424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52424):map__52424);
var from = (function (){var obj52426 = map__52424__$1;
var k52427 = "from";
if((function (){var obj52428 = obj52426;
return (((!((obj52428 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52427,obj52428)));
})()){
return (obj52426[k52427]);
} else {
return undefined;
}
})();
var to = (function (){var obj52429 = map__52424__$1;
var k52430 = "to";
if((function (){var obj52431 = obj52429;
return (((!((obj52431 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52430,obj52431)));
})()){
return (obj52429[k52430]);
} else {
return undefined;
}
})();
var empty = (function (){var obj52432 = map__52424__$1;
var k52433 = "empty";
if((function (){var obj52434 = obj52432;
return (((!((obj52434 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52433,obj52434)));
})()){
return (obj52432[k52433]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),nextjournal.clojure_mode.node.balanced_range.cljs$core$IFn$_invoke$arity$3(state,from,to)], null);
}
}));
});
nextjournal.clojure_mode.commands.log = console.log;
nextjournal.clojure_mode.commands.slurp = (function nextjournal$clojure_mode$commands$slurp(direction){
return (function (state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__52436){
var map__52437 = p__52436;
var map__52437__$1 = (((((!((map__52437 == null))))?(((((map__52437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52437):map__52437);
var range = map__52437__$1;
var from = (function (){var obj52439 = map__52437__$1;
var k52440 = "from";
if((function (){var obj52441 = obj52439;
return (((!((obj52441 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52440,obj52441)));
})()){
return (obj52439[k52440]);
} else {
return undefined;
}
})();
var to = (function (){var obj52442 = map__52437__$1;
var k52443 = "to";
if((function (){var obj52444 = obj52442;
return (((!((obj52444 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52443,obj52444)));
})()){
return (obj52442[k52443]);
} else {
return undefined;
}
})();
var empty = (function (){var obj52445 = map__52437__$1;
var k52446 = "empty";
if((function (){var obj52447 = obj52445;
return (((!((obj52447 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52446,obj52447)));
})()){
return (obj52445[k52446]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
var temp__5754__auto__ = nextjournal.clojure_mode.node.closest(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,from),cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.coll_QMARK_,(function (p1__52435_SHARP_){
return cljs.core.not((function (){var G__52448 = direction;
switch (G__52448) {
case (1):
var G__52449 = p1__52435_SHARP_;
var G__52449__$1 = (((G__52449 == null))?null:nextjournal.clojure_mode.node.with_prefix(G__52449));
var G__52449__$2 = (((G__52449__$1 == null))?null:nextjournal.clojure_mode.node.right(G__52449__$1));
if((G__52449__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.end_edge_QMARK_(G__52449__$2);
}

break;
case (-1):
var G__52450 = p1__52435_SHARP_;
var G__52450__$1 = (((G__52450 == null))?null:nextjournal.clojure_mode.node.with_prefix(G__52450));
var G__52450__$2 = (((G__52450__$1 == null))?null:nextjournal.clojure_mode.node.left(G__52450__$1));
if((G__52450__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.start_edge_QMARK_(G__52450__$2);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52448)].join('')));

}
})());
})));
if(cljs.core.truth_(temp__5754__auto__)){
var parent = temp__5754__auto__;
var temp__5754__auto____$1 = (function (){var G__52451 = direction;
switch (G__52451) {
case (1):
return cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.line_comment_QMARK_,nextjournal.clojure_mode.node.rights(nextjournal.clojure_mode.node.with_prefix(parent))));

break;
case (-1):
return cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.line_comment_QMARK_,nextjournal.clojure_mode.node.lefts(nextjournal.clojure_mode.node.with_prefix(parent))));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52451)].join('')));

}
})();
if(cljs.core.truth_(temp__5754__auto____$1)){
var target = temp__5754__auto____$1;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cursor","mapped","cursor/mapped",1625530272),from,new cljs.core.Keyword(null,"changes","changes",1492088),(function (){var G__52452 = direction;
switch (G__52452) {
case (1):
var edge = nextjournal.clojure_mode.node.down_last(parent);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),nextjournal.clojure_mode.node.end(target),new cljs.core.Keyword(null,"insert","insert",1286475395),nextjournal.clojure_mode.node.name(edge)], null),(function (){var obj52453 = nextjournal.clojure_mode.node.from_to.cljs$core$IFn$_invoke$arity$1(edge);
var obj52454 = (((!((obj52453 == null))))?obj52453:({}));
(obj52454["insert"] = " ");

return obj52454;
})()], null);

break;
case (-1):
var edge = nextjournal.clojure_mode.node.left_edge_with_prefix(state,parent);
var start = nextjournal.clojure_mode.node.start(nextjournal.clojure_mode.node.with_prefix(parent));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),start,new cljs.core.Keyword(null,"to","to",192099007),(start + ((edge).length)),new cljs.core.Keyword(null,"insert","insert",1286475395)," "], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),nextjournal.clojure_mode.node.start(target),new cljs.core.Keyword(null,"insert","insert",1286475395),edge], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52452)].join('')));

}
})()], null);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}));
});
});
nextjournal.clojure_mode.commands.barf = (function nextjournal$clojure_mode$commands$barf(direction){
return (function (state){
return nextjournal.clojure_mode.util.update_ranges.cljs$core$IFn$_invoke$arity$2(state,(function (p__52457){
var map__52458 = p__52457;
var map__52458__$1 = (((((!((map__52458 == null))))?(((((map__52458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52458):map__52458);
var range = map__52458__$1;
var from = (function (){var obj52460 = map__52458__$1;
var k52461 = "from";
if((function (){var obj52462 = obj52460;
return (((!((obj52462 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52461,obj52462)));
})()){
return (obj52460[k52461]);
} else {
return undefined;
}
})();
var to = (function (){var obj52463 = map__52458__$1;
var k52464 = "to";
if((function (){var obj52465 = obj52463;
return (((!((obj52465 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52464,obj52465)));
})()){
return (obj52463[k52464]);
} else {
return undefined;
}
})();
var empty = (function (){var obj52466 = map__52458__$1;
var k52467 = "empty";
if((function (){var obj52468 = obj52466;
return (((!((obj52468 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52467,obj52468)));
})()){
return (obj52466[k52467]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
var temp__5754__auto__ = nextjournal.clojure_mode.node.closest(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$2(state,from),nextjournal.clojure_mode.node.coll_QMARK_);
if(cljs.core.truth_(temp__5754__auto__)){
var parent = temp__5754__auto__;
var G__52469 = direction;
switch (G__52469) {
case (1):
var temp__5754__auto____$1 = (function (){var G__52470 = nextjournal.clojure_mode.node.down_last(parent);
var G__52470__$1 = (((G__52470 == null))?null:nextjournal.clojure_mode.node.lefts(G__52470));
var G__52470__$2 = (((G__52470__$1 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.line_comment_QMARK_,G__52470__$1));
var G__52470__$3 = (((G__52470__$2 == null))?null:cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),G__52470__$2));
if((G__52470__$3 == null)){
return null;
} else {
return cljs.core.first(G__52470__$3);
}
})();
if(cljs.core.truth_(temp__5754__auto____$1)){
var target = temp__5754__auto____$1;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(function (){var x__4309__auto__ = nextjournal.clojure_mode.node.end(target);
var y__4310__auto__ = from;
return ((x__4309__auto__ < y__4310__auto__) ? x__4309__auto__ : y__4310__auto__);
})(),new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),nextjournal.clojure_mode.node.end(target),new cljs.core.Keyword(null,"insert","insert",1286475395),nextjournal.clojure_mode.node.name(nextjournal.clojure_mode.node.down_last(parent))], null),(function (){var obj52471 = nextjournal.clojure_mode.node.from_to.cljs$core$IFn$_invoke$arity$1(nextjournal.clojure_mode.node.down_last(parent));
var obj52472 = (((!((obj52471 == null))))?obj52471:({}));
(obj52472["insert"] = " ");

return obj52472;
})()], null)], null);
} else {
return null;
}

break;
case (-1):
var temp__5754__auto____$1 = (function (){var G__52475 = nextjournal.clojure_mode.node.down(parent);
var G__52475__$1 = (((G__52475 == null))?null:nextjournal.clojure_mode.node.rights(G__52475));
var G__52475__$2 = (((G__52475__$1 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(nextjournal.clojure_mode.node.line_comment_QMARK_,G__52475__$1));
var G__52475__$3 = (((G__52475__$2 == null))?null:cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),G__52475__$2));
if((G__52475__$3 == null)){
return null;
} else {
return cljs.core.first(G__52475__$3);
}
})();
if(cljs.core.truth_(temp__5754__auto____$1)){
var next_first_child = temp__5754__auto____$1;
var left_edge = nextjournal.clojure_mode.node.left_edge_with_prefix(state,parent);
var left_start = nextjournal.clojure_mode.node.start(nextjournal.clojure_mode.node.with_prefix(parent));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(function (){var x__4306__auto__ = from;
var y__4307__auto__ = (nextjournal.clojure_mode.node.start(next_first_child) + (((left_edge).length) + (1)));
return ((x__4306__auto__ > y__4307__auto__) ? x__4306__auto__ : y__4307__auto__);
})(),new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),nextjournal.clojure_mode.node.start(next_first_child),new cljs.core.Keyword(null,"insert","insert",1286475395),[" ",left_edge].join('')], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"from","from",1815293044),left_start,new cljs.core.Keyword(null,"to","to",192099007),(left_start + ((left_edge).length)),new cljs.core.Keyword(null,"insert","insert",1286475395),nextjournal.clojure_mode.extensions.formatting.spaces(state,((left_edge).length))], null)], null)], null);
} else {
return null;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52469)].join('')));

}
} else {
return null;
}
} else {
return null;
}
}));
});
});
/**
 * Subset of builtin commands that compliment paredit
 */
nextjournal.clojure_mode.commands.builtin_index = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"cursorLineStart","cursorLineStart",-1505072960),new cljs.core.Keyword(null,"cursorLineDown","cursorLineDown",180576864),new cljs.core.Keyword(null,"selectAll","selectAll",869127842),new cljs.core.Keyword(null,"selectLineUp","selectLineUp",-255594686),new cljs.core.Keyword(null,"cursorLineBoundaryForward","cursorLineBoundaryForward",-1283359997),new cljs.core.Keyword(null,"selectLineBoundaryBackward","selectLineBoundaryBackward",-1443564123),new cljs.core.Keyword(null,"deleteCharBackward","deleteCharBackward",-618312025),new cljs.core.Keyword(null,"insertNewlineAndIndent","insertNewlineAndIndent",-542382007),new cljs.core.Keyword(null,"cursorLineBoundaryBackward","cursorLineBoundaryBackward",1373049802),new cljs.core.Keyword(null,"selectCharRight","selectCharRight",1049825195),new cljs.core.Keyword(null,"selectPageUp","selectPageUp",152840428),new cljs.core.Keyword(null,"deleteCharForward","deleteCharForward",823474956),new cljs.core.Keyword(null,"cursorCharLeft","cursorCharLeft",-1572589780),new cljs.core.Keyword(null,"cursorGroupBackward","cursorGroupBackward",-1004717331),new cljs.core.Keyword(null,"selectDocStart","selectDocStart",-217268371),new cljs.core.Keyword(null,"selectGroupBackward","selectGroupBackward",1569543117),new cljs.core.Keyword(null,"cursorDocEnd","cursorDocEnd",-1298653903),new cljs.core.Keyword(null,"deleteGroupBackward","deleteGroupBackward",616768113),new cljs.core.Keyword(null,"selectLineStart","selectLineStart",1211557745),new cljs.core.Keyword(null,"deleteGroupForward","deleteGroupForward",596007091),new cljs.core.Keyword(null,"selectDocEnd","selectDocEnd",496449813),new cljs.core.Keyword(null,"selectPageDown","selectPageDown",226562613),new cljs.core.Keyword(null,"cursorPageDown","cursorPageDown",-1143253131),new cljs.core.Keyword(null,"cursorPageUp","cursorPageUp",-716828715),new cljs.core.Keyword(null,"selectLineBoundaryForward","selectLineBoundaryForward",904508598),new cljs.core.Keyword(null,"cursorLineEnd","cursorLineEnd",-234219178),new cljs.core.Keyword(null,"cursorGroupForward","cursorGroupForward",1231480632),new cljs.core.Keyword(null,"cursorCharRight","cursorCharRight",-739900583),new cljs.core.Keyword(null,"selectGroupForward","selectGroupForward",1344873433),new cljs.core.Keyword(null,"selectLineEnd","selectLineEnd",-1578526086),new cljs.core.Keyword(null,"selectCharLeft","selectCharLeft",1894248154),new cljs.core.Keyword(null,"splitLine","splitLine",-1338533189),new cljs.core.Keyword(null,"selectLineDown","selectLineDown",1741100604),new cljs.core.Keyword(null,"transposeChars","transposeChars",1566260285),new cljs.core.Keyword(null,"cursorLineUp","cursorLineUp",-1375841219),new cljs.core.Keyword(null,"cursorDocStart","cursorDocStart",2008312830)],[module$node_modules$$codemirror$commands$dist$index_cjs.cursorLineStart,module$node_modules$$codemirror$commands$dist$index_cjs.cursorLineDown,module$node_modules$$codemirror$commands$dist$index_cjs.selectAll,module$node_modules$$codemirror$commands$dist$index_cjs.selectLineUp,module$node_modules$$codemirror$commands$dist$index_cjs.cursorLineBoundaryForward,module$node_modules$$codemirror$commands$dist$index_cjs.selectLineBoundaryBackward,module$node_modules$$codemirror$commands$dist$index_cjs.deleteCharBackward,module$node_modules$$codemirror$commands$dist$index_cjs.insertNewlineAndIndent,module$node_modules$$codemirror$commands$dist$index_cjs.cursorLineBoundaryBackward,module$node_modules$$codemirror$commands$dist$index_cjs.selectCharRight,module$node_modules$$codemirror$commands$dist$index_cjs.selectPageUp,module$node_modules$$codemirror$commands$dist$index_cjs.deleteCharForward,module$node_modules$$codemirror$commands$dist$index_cjs.cursorCharLeft,module$node_modules$$codemirror$commands$dist$index_cjs.cursorGroupBackward,module$node_modules$$codemirror$commands$dist$index_cjs.selectDocStart,module$node_modules$$codemirror$commands$dist$index_cjs.selectGroupBackward,module$node_modules$$codemirror$commands$dist$index_cjs.cursorDocEnd,module$node_modules$$codemirror$commands$dist$index_cjs.deleteGroupBackward,module$node_modules$$codemirror$commands$dist$index_cjs.selectLineStart,module$node_modules$$codemirror$commands$dist$index_cjs.deleteGroupForward,module$node_modules$$codemirror$commands$dist$index_cjs.selectDocEnd,module$node_modules$$codemirror$commands$dist$index_cjs.selectPageDown,module$node_modules$$codemirror$commands$dist$index_cjs.cursorPageDown,module$node_modules$$codemirror$commands$dist$index_cjs.cursorPageUp,module$node_modules$$codemirror$commands$dist$index_cjs.selectLineBoundaryForward,module$node_modules$$codemirror$commands$dist$index_cjs.cursorLineEnd,module$node_modules$$codemirror$commands$dist$index_cjs.cursorGroupForward,module$node_modules$$codemirror$commands$dist$index_cjs.cursorCharRight,module$node_modules$$codemirror$commands$dist$index_cjs.selectGroupForward,module$node_modules$$codemirror$commands$dist$index_cjs.selectLineEnd,module$node_modules$$codemirror$commands$dist$index_cjs.selectCharLeft,module$node_modules$$codemirror$commands$dist$index_cjs.splitLine,module$node_modules$$codemirror$commands$dist$index_cjs.selectLineDown,module$node_modules$$codemirror$commands$dist$index_cjs.transposeChars,module$node_modules$$codemirror$commands$dist$index_cjs.cursorLineUp,module$node_modules$$codemirror$commands$dist$index_cjs.cursorDocStart]);
nextjournal.clojure_mode.commands.indent = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.extensions.formatting.format);
nextjournal.clojure_mode.commands.unwrap = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.unwrap_STAR_);
nextjournal.clojure_mode.commands.kill = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.kill_STAR_);
nextjournal.clojure_mode.commands.nav_right = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.nav((1)));
nextjournal.clojure_mode.commands.nav_left = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.nav((-1)));
nextjournal.clojure_mode.commands.nav_select_right = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.nav_select((1)));
nextjournal.clojure_mode.commands.nav_select_left = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.nav_select((-1)));
nextjournal.clojure_mode.commands.slurp_forward = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.slurp((1)));
nextjournal.clojure_mode.commands.slurp_backward = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.slurp((-1)));
nextjournal.clojure_mode.commands.barf_forward = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.barf((1)));
nextjournal.clojure_mode.commands.barf_backward = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.barf((-1)));
nextjournal.clojure_mode.commands.selection_grow = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.extensions.selection_history.selection_grow_STAR_);
nextjournal.clojure_mode.commands.selection_return = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.extensions.selection_history.selection_return_STAR_);
nextjournal.clojure_mode.commands.enter_and_indent = nextjournal.clojure_mode.commands.view_command(nextjournal.clojure_mode.commands.enter_and_indent_STAR_);
nextjournal.clojure_mode.commands.paredit_index = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"nav-left","nav-left",845947876),new cljs.core.Keyword(null,"enter-and-indent","enter-and-indent",-1825406873),new cljs.core.Keyword(null,"selection-grow","selection-grow",1627169352),new cljs.core.Keyword(null,"kill","kill",-12335575),new cljs.core.Keyword(null,"slurp-forward","slurp-forward",-866284566),new cljs.core.Keyword(null,"nav-select-right","nav-select-right",-455278613),new cljs.core.Keyword(null,"nav-select-left","nav-select-left",-1033285138),new cljs.core.Keyword(null,"barf-forward","barf-forward",1278612337),new cljs.core.Keyword(null,"barf-backward","barf-backward",434854195),new cljs.core.Keyword(null,"nav-right","nav-right",591041267),new cljs.core.Keyword(null,"slurp-backward","slurp-backward",-1615745159),new cljs.core.Keyword(null,"unwrap","unwrap",-1399175462),new cljs.core.Keyword(null,"selection-return","selection-return",267226206)],[nextjournal.clojure_mode.commands.indent,nextjournal.clojure_mode.commands.nav_left,nextjournal.clojure_mode.commands.enter_and_indent,nextjournal.clojure_mode.commands.selection_grow,nextjournal.clojure_mode.commands.kill,nextjournal.clojure_mode.commands.slurp_forward,nextjournal.clojure_mode.commands.nav_select_right,nextjournal.clojure_mode.commands.nav_select_left,nextjournal.clojure_mode.commands.barf_forward,nextjournal.clojure_mode.commands.barf_backward,nextjournal.clojure_mode.commands.nav_right,nextjournal.clojure_mode.commands.slurp_backward,nextjournal.clojure_mode.commands.unwrap,nextjournal.clojure_mode.commands.selection_return]);
/**
 * Mapping of keyword-id to command functions
 */
nextjournal.clojure_mode.commands.index = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nextjournal.clojure_mode.commands.builtin_index,nextjournal.clojure_mode.commands.paredit_index], 0));
/**
 * Lookup keyword-id by function
 */
nextjournal.clojure_mode.commands.reverse_index = cljs.core.reduce_kv((function (p1__52476_SHARP_,p2__52478_SHARP_,p3__52477_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__52476_SHARP_,p3__52477_SHARP_,p2__52478_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,nextjournal.clojure_mode.commands.index);

//# sourceMappingURL=nextjournal.clojure_mode.commands.js.map
