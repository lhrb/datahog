goog.provide('lhrb.app');
var module$node_modules$$codemirror$closebrackets$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$closebrackets$dist$index_cjs", {});
var module$node_modules$$codemirror$fold$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$fold$dist$index_cjs", {});
var module$node_modules$$codemirror$gutter$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$gutter$dist$index_cjs", {});
var module$node_modules$$codemirror$highlight$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$highlight$dist$index_cjs", {});
var module$node_modules$$codemirror$history$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$history$dist$index_cjs", {});
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$lezer$dist$index_cjs=shadow.js.require("module$node_modules$lezer$dist$index_cjs", {});
var module$node_modules$lezer_generator$dist$index_cjs=shadow.js.require("module$node_modules$lezer_generator$dist$index_cjs", {});
var module$node_modules$lezer_tree$dist$tree_cjs=shadow.js.require("module$node_modules$lezer_tree$dist$tree_cjs", {});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cells","cells",-985166822),new cljs.core.PersistentArrayMap(null, 1, [(0),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"code","code",1586293142),"(load-db db \"resources/got-db.edn\")"], null)], null),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.Keyword(null,"active","active",1895962068),(0),new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),";; => eval output gets displayed here"], null),new cljs.core.Keyword(null,"last","last",1105735132),cljs.core.PersistentVector.EMPTY], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"eval","eval",-1103567905),(function (cofx,p__48519){
var vec__48520 = p__48519;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48520,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48520,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8890/repl",new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(1),(1)),new cljs.core.Keyword(null,"format","format",-1306924766),"application/edn",new cljs.core.Keyword(null,"response-format","response-format",1664465322),"application/edn",new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (p1__48518_SHARP_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__48518_SHARP_], 0));
})], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new-result","new-result",1581708883),(function (db,p__48523){
var vec__48524 = p__48523;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48524,(0),null);
var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48524,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"code","code",1586293142)], null),res);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"results","results",-1134170113),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"code","code",1586293142)], null),cljs.core.list(new cljs.core.Symbol(null,"nothing","nothing",617828231,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"see","see",1788667073,null),new cljs.core.Symbol(null,"yet","yet",-232552810,null)));
})], 0));
lhrb.app.eval_cell = (function lhrb$app$eval_cell(p__48527){
var map__48528 = p__48527;
var map__48528__$1 = (((((!((map__48528 == null))))?(((((map__48528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48528):map__48528);
var state = (function (){var obj48530 = map__48528__$1;
var k48531 = "state";
if((function (){var obj48532 = obj48530;
return (((!((obj48532 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k48531,obj48532)));
})()){
return (obj48530[k48531]);
} else {
return undefined;
}
})();
["(do ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(state.doc)," )"].join('');

return true;
});
lhrb.app.keymap_STAR_ = (function lhrb$app$keymap_STAR_(modifier){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eval-cell","eval-cell",-1239042175),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"Mod-Enter",new cljs.core.Keyword(null,"doc","doc",1913296891),"Evaluate cell"], null)], null),new cljs.core.Keyword(null,"eval-at-cursor","eval-at-cursor",-1422323075),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(modifier),"-Enter"].join(''),new cljs.core.Keyword(null,"doc","doc",1913296891),"Evaluates form at cursor"], null)], null),new cljs.core.Keyword(null,"eval-top-level","eval-top-level",2125288127),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(modifier),"-Shift-Enter"].join(''),new cljs.core.Keyword(null,"doc","doc",1913296891),"Evaluates top-level form at cursor"], null)], null)], null);
});
lhrb.app.extension = (function lhrb$app$extension(p__48533){
var map__48534 = p__48533;
var map__48534__$1 = cljs.core.__destructure_map(map__48534);
var modifier = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48534__$1,new cljs.core.Keyword(null,"modifier","modifier",1634442788));
return module$node_modules$$codemirror$view$dist$index_cjs.keymap.of([({"key":"Mod-Enter","run":cljs.core.partial.cljs$core$IFn$_invoke$arity$1(lhrb.app.eval_cell)})]);
});
lhrb.app.theme = module$node_modules$$codemirror$view$dist$index_cjs.EditorView.theme(({".cm-content":({"white-space":"pre-wrap","padding":"10px 0"}),"&.cm-focused":({"outline":"none"}),".cm-line":({"padding":"0 9px","line-height":"1.6","font-size":"16px","font-family":"var(--code-font)"}),".cm-matchingBracket":({"border-bottom":"1px solid #ff0000","color":"inherit"}),".cm-gutters":({"background":"transparent","border":"none"}),".cm-gutterElement":({"margin-left":"5px"}),".cm-cursor":({"visibility":"hidden"}),"&.cm-focused .cm-cursor":({"visibility":"visible"})}));
if((typeof lhrb !== 'undefined') && (typeof lhrb.app !== 'undefined') && (typeof lhrb.app.extensions !== 'undefined')){
} else {
lhrb.app.extensions = [lhrb.app.theme,module$node_modules$$codemirror$history$dist$index_cjs.history(),module$node_modules$$codemirror$highlight$dist$index_cjs.defaultHighlightStyle,module$node_modules$$codemirror$view$dist$index_cjs.drawSelection(),module$node_modules$$codemirror$fold$dist$index_cjs.foldGutter(),module$node_modules$$codemirror$state$dist$index_cjs.EditorState.allowMultipleSelections.of(true),nextjournal.clojure_mode.default_extensions,module$node_modules$$codemirror$view$dist$index_cjs.keymap.of(nextjournal.clojure_mode.complete_keymap),module$node_modules$$codemirror$view$dist$index_cjs.keymap.of(module$node_modules$$codemirror$history$dist$index_cjs.historyKeymap)];
}
lhrb.app.extensions_read_only = [lhrb.app.theme,module$node_modules$$codemirror$highlight$dist$index_cjs.defaultHighlightStyle,module$node_modules$$codemirror$view$dist$index_cjs.drawSelection(),module$node_modules$$codemirror$state$dist$index_cjs.EditorState.allowMultipleSelections.of(true),nextjournal.clojure_mode.default_extensions,module$node_modules$$codemirror$view$dist$index_cjs.EditorView.editable.of(false)];
lhrb.app.editor = (function lhrb$app$editor(){
var _BANG_view = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var _BANG_mount = (function (el){
return cljs.core.reset_BANG_(_BANG_view,(new module$node_modules$$codemirror$view$dist$index_cjs.EditorView(({"state": module$node_modules$$codemirror$state$dist$index_cjs.EditorState.create(({"doc": cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.list(new cljs.core.Symbol(null,"load-db","load-db",-1873803046,null),new cljs.core.Symbol(null,"db-name","db-name",-1496507024,null),"resources")), "extensions": lhrb.app.extensions})), "parent": el}))));
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),_BANG_mount], null)], null)], null);
});
lhrb.app.result_view = (function lhrb$app$result_view(source){
var _BANG_view = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var _BANG_mount = (function (el){
return cljs.core.reset_BANG_(_BANG_view,(new module$node_modules$$codemirror$view$dist$index_cjs.EditorView(({"state": module$node_modules$$codemirror$state$dist$index_cjs.EditorState.create(({"doc": cljs.core.str.cljs$core$IFn$_invoke$arity$1(source), "extensions": lhrb.app.extensions})), "parent": el}))));
});
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"result-view",new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,old_argv){
var new_argv = cljs.core.first(cljs.core.rest(reagent.core.argv(this$)));
var v = cljs.core.deref(_BANG_view);
var state = v.state;
var transaction = state.update(({"changes": ({"from": (0), "to": state.doc.length, "insert": cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_argv)})}));
return v.dispatch(transaction);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (source__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),_BANG_mount], null)], null);
})], null));
});
lhrb.app.result_box = (function lhrb$app$result_box(){
var source = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"results","results",-1134170113)], null));
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"code-box"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lhrb.app.result_view,cljs.core.deref(source)], null)], null);
});
});
lhrb.app.page = (function lhrb$app$page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"title"], null),"Datahog"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row bg-grey"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"six columns padding-10"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"code-wrapper"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"code-box"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lhrb.app.editor], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"code-wrapper"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"code-box"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lhrb.app.editor], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"six columns padding-10"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lhrb.app.result_box], null)], null)], null)], null);
});
lhrb.app.linux_QMARK_ = (function lhrb$app$linux_QMARK_(){
return (!((cljs.core.re_find(/(Linux)|(X11)/,navigator.userAgent) == null)));
});
lhrb.app.mac_QMARK_ = (function lhrb$app$mac_QMARK_(){
return (((!(lhrb.app.linux_QMARK_()))) && ((!((cljs.core.re_find(/(Mac)|(iPhone)|(iPad)|(iPod)/,navigator.platform) == null)))));
});
lhrb.app.key_mapping = (function lhrb$app$key_mapping(){
var G__48535 = new cljs.core.PersistentArrayMap(null, 5, ["ArrowUp","\u2191","ArrowDown","\u2193","ArrowRight","\u2192","ArrowLeft","\u2190","Mod","Ctrl"], null);
if(lhrb.app.mac_QMARK_()){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__48535,new cljs.core.PersistentArrayMap(null, 5, ["Alt","\u2325","Shift","\u21E7","Enter","\u23CE","Ctrl","\u2303","Mod","\u2318"], null)], 0));
} else {
return G__48535;
}
});
lhrb.app.render_key = (function lhrb$app$render_key(key){
var keys = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48536_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.memoize(lhrb.app.key_mapping)(),p1__48536_SHARP_,p1__48536_SHARP_);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(key,/-/)));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,k){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(((i === (0)))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)," + "], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kbd.kbd","kbd.kbd",1246438318),k], null)], null);
}),keys));
});
lhrb.app.key_bindings_table = (function lhrb$app$key_bindings_table(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.w-full.text-sm","table.w-full.text-sm",1736643136),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.border-t","tr.border-t",595885704),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.px-3.py-1.align-top.text-left.text-xs.uppercase.font-normal.black-50","th.px-3.py-1.align-top.text-left.text-xs.uppercase.font-normal.black-50",1158784321),"Command"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.px-3.py-1.align-top.text-left.text-xs.uppercase.font-normal.black-50","th.px-3.py-1.align-top.text-left.text-xs.uppercase.font-normal.black-50",1158784321),"Keybinding"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.px-3.py-1.align-top.text-left.text-xs.uppercase.font-normal.black-50","th.px-3.py-1.align-top.text-left.text-xs.uppercase.font-normal.black-50",1158784321),"Alternate Binding"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.px-3.py-1.align-top.text-left.text-xs.uppercase.font-normal.black-50","th.px-3.py-1.align-top.text-left.text-xs.uppercase.font-normal.black-50",1158784321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),(290)], null)], null),"Description"], null)], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48537){
var vec__48538 = p__48537;
var command = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48538,(0),null);
var vec__48541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48538,(1),null);
var seq__48542 = cljs.core.seq(vec__48541);
var first__48543 = cljs.core.first(seq__48542);
var seq__48542__$1 = cljs.core.next(seq__48542);
var map__48544 = first__48543;
var map__48544__$1 = cljs.core.__destructure_map(map__48544);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48544__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var shift = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48544__$1,new cljs.core.Keyword(null,"shift","shift",997140064));
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48544__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var vec__48545 = seq__48542__$1;
var map__48548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48545,(0),null);
var map__48548__$1 = cljs.core.__destructure_map(map__48548);
var alternate_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48548__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.border-t.hover:bg-gray-100","tr.border-t.hover:bg-gray-100",346779718),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-3.py-1.align-top.monospace.whitespace-nowrap","td.px-3.py-1.align-top.monospace.whitespace-nowrap",-609745614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.name(command)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-3.py-1.align-top.text-right.text-sm.whitespace-nowrap","td.px-3.py-1.align-top.text-right.text-sm.whitespace-nowrap",-1896369301),lhrb.app.render_key(key)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-3.py-1.align-top.text-right.text-sm.whitespace-nowrap","td.px-3.py-1.align-top.text-right.text-sm.whitespace-nowrap",-1896369301),(function (){var G__48549 = alternate_key;
if((G__48549 == null)){
return null;
} else {
return lhrb.app.render_key(G__48549);
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-3.py-1.align-top","td.px-3.py-1.align-top",-1460808875),doc], null)], null),(cljs.core.truth_(shift)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.border-t.hover:bg-gray-100","tr.border-t.hover:bg-gray-100",346779718),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-3.py-1.align-top","td.px-3.py-1.align-top",-1460808875),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.name(shift)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-3.py-1.align-top.text-sm.whitespace-nowrap.text-right","td.px-3.py-1.align-top.text-sm.whitespace-nowrap.text-right",-971704941),lhrb.app.render_key(["Shift-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join(''))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-3.py-1.align-top.text-sm","td.px-3.py-1.align-top.text-sm",-1488223551)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.px-3.py-1.align-top","td.px-3.py-1.align-top",-1460808875)], null)], null):null)], null);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lhrb.app.keymap_STAR_("Alt"),nextjournal.clojure_mode.keymap.paredit_keymap_STAR_], 0)))))], null);
});
lhrb.app.render = (function lhrb$app$render(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lhrb.app.page], null),document.getElementById("app"));
});
lhrb.app.init = (function lhrb$app$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lhrb.app.page], null),document.getElementById("app"));
});

//# sourceMappingURL=lhrb.app.js.map
