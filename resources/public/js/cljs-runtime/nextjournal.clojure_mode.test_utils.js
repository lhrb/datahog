goog.provide('nextjournal.clojure_mode.test_utils');
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
nextjournal.clojure_mode.test_utils.make_state = (function nextjournal$clojure_mode$test_utils$make_state(extensions,doc){
var vec__52269 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__52272,match){
var vec__52273 = p__52272;
var doc__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52273,(0),null);
var ranges = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52273,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(match,"|")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ranges,module$node_modules$$codemirror$state$dist$index_cjs.EditorSelection.cursor(((doc__$1).length)))], null);
} else {
if(clojure.string.starts_with_QMARK_(match,"<")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[doc__$1,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(match,(1),(cljs.core.count(match) - (1)))].join(''),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ranges,module$node_modules$$codemirror$state$dist$index_cjs.EditorSelection.range(((doc__$1).length),(((doc__$1).length) + (cljs.core.count(match) - (2)))))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[doc__$1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join(''),ranges], null);

}
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",cljs.core.PersistentVector.EMPTY], null),cljs.core.re_seq(/\||<[^>]*?>|[^<>|]+/,doc));
var doc__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52269,(0),null);
var ranges = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52269,(1),null);
return module$node_modules$$codemirror$state$dist$index_cjs.EditorState.create(({"doc": doc__$1, "selection": ((cljs.core.seq(ranges))?module$node_modules$$codemirror$state$dist$index_cjs.EditorSelection.create(cljs.core.to_array(ranges)):undefined), "extensions": (function (){var G__52279 = [module$node_modules$$codemirror$state$dist$index_cjs.EditorState.allowMultipleSelections.of(true)];
if(cljs.core.truth_(extensions)){
var array52284 = G__52279;
array52284.push(extensions);

return array52284;
} else {
return G__52279;
}
})()}));
});
nextjournal.clojure_mode.test_utils.state_str = (function nextjournal$clojure_mode$test_utils$state_str(state){
var doc = cljs.core.str.cljs$core$IFn$_invoke$arity$1(state.doc);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (doc__$1,p__52288){
var map__52290 = p__52288;
var map__52290__$1 = (((((!((map__52290 == null))))?(((((map__52290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52290):map__52290);
var empty = (function (){var obj52292 = map__52290__$1;
var k52293 = "empty";
if((function (){var obj52294 = obj52292;
return (((!((obj52294 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52293,obj52294)));
})()){
return (obj52292[k52293]);
} else {
return undefined;
}
})();
var from = (function (){var obj52295 = map__52290__$1;
var k52296 = "from";
if((function (){var obj52298 = obj52295;
return (((!((obj52298 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52296,obj52298)));
})()){
return (obj52295[k52296]);
} else {
return undefined;
}
})();
var to = (function (){var obj52300 = map__52290__$1;
var k52301 = "to";
if((function (){var obj52302 = obj52300;
return (((!((obj52302 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52301,obj52302)));
})()){
return (obj52300[k52301]);
} else {
return undefined;
}
})();
if(cljs.core.truth_(empty)){
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(doc__$1,(0),from),"|",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(doc__$1,from)].join('');
} else {
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(doc__$1,(0),from),"<",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(doc__$1,from,to),">",cljs.core.subs.cljs$core$IFn$_invoke$arity$2(doc__$1,to)].join('');
}
}),doc,cljs.core.reverse(state.selection.ranges));
});
nextjournal.clojure_mode.test_utils.apply_cmd = (function nextjournal$clojure_mode$test_utils$apply_cmd(extensions,cmd,doc){
var state = nextjournal.clojure_mode.test_utils.make_state(extensions,doc);
var _BANG_tr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var _ = (function (){var G__52333 = ({"state": state, "dispatch": (function (p1__52318_SHARP_){
return cljs.core.reset_BANG_(_BANG_tr,p1__52318_SHARP_);
})});
return (cmd.cljs$core$IFn$_invoke$arity$1 ? cmd.cljs$core$IFn$_invoke$arity$1(G__52333) : cmd.call(null,G__52333));
})();
var tr = cljs.core.deref(_BANG_tr);
return nextjournal.clojure_mode.test_utils.state_str((function (){var obj52337 = tr;
var k52338 = "state";
if((function (){var obj52339 = obj52337;
return (((!((obj52339 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52338,obj52339)));
})()){
return (obj52337[k52338]);
} else {
return undefined;
}
})());
});
nextjournal.clojure_mode.test_utils.apply_f = (function nextjournal$clojure_mode$test_utils$apply_f(extensions,cmd,doc){
if(cljs.core.array_QMARK_(extensions)){
} else {
throw (new Error("Assert failed: (array? extensions)"));
}

if(cljs.core.fn_QMARK_(cmd)){
} else {
throw (new Error("Assert failed: (fn? cmd)"));
}

if(typeof doc === 'string'){
} else {
throw (new Error("Assert failed: (string? doc)"));
}

var state = nextjournal.clojure_mode.test_utils.make_state(extensions,doc);
var tr = (cmd.cljs$core$IFn$_invoke$arity$1 ? cmd.cljs$core$IFn$_invoke$arity$1(state) : cmd.call(null,state));
return nextjournal.clojure_mode.test_utils.state_str((cljs.core.truth_(tr)?tr.state:state));
});

//# sourceMappingURL=nextjournal.clojure_mode.test_utils.js.map
