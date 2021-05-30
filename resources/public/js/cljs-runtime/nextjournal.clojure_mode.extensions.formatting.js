goog.provide('nextjournal.clojure_mode.extensions.formatting');
var module$node_modules$$codemirror$language$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$language$dist$index_cjs", {});
var module$node_modules$$codemirror$state$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$state$dist$index_cjs", {});
var module$node_modules$$codemirror$view$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$view$dist$index_cjs", {});
var module$node_modules$$codemirror$commands$dist$index_cjs=shadow.js.require("module$node_modules$$codemirror$commands$dist$index_cjs", {});
nextjournal.clojure_mode.extensions.formatting.spaces = (function nextjournal$clojure_mode$extensions$formatting$spaces(state,n){
return module$node_modules$$codemirror$language$dist$index_cjs.indentString(state,n);
});
nextjournal.clojure_mode.extensions.formatting.indent_node_props = (function nextjournal$clojure_mode$extensions$formatting$indent_node_props(p__52127){
var map__52128 = p__52127;
var map__52128__$1 = (((((!((map__52128 == null))))?(((((map__52128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52128):map__52128);
var type = map__52128__$1;
var type_name = (function (){var obj52133 = map__52128__$1;
var k52134 = "name";
if((function (){var obj52135 = obj52133;
return (((!((obj52135 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52134,obj52135)));
})()){
return (obj52133[k52134]);
} else {
return undefined;
}
})();
return (function (p__52140){
var map__52141 = p__52140;
var map__52141__$1 = (((((!((map__52141 == null))))?(((((map__52141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52141):map__52141);
var context = map__52141__$1;
var pos = (function (){var obj52143 = map__52141__$1;
var k52144 = "pos";
if((function (){var obj52145 = obj52143;
return (((!((obj52145 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52144,obj52145)));
})()){
return (obj52143[k52144]);
} else {
return undefined;
}
})();
var unit = (function (){var obj52147 = map__52141__$1;
var k52148 = "unit";
if((function (){var obj52151 = obj52147;
return (((!((obj52151 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52148,obj52151)));
})()){
return (obj52147[k52148]);
} else {
return undefined;
}
})();
var node = (function (){var obj52153 = map__52141__$1;
var k52154 = "node";
if((function (){var obj52157 = obj52153;
return (((!((obj52157 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52154,obj52157)));
})()){
return (obj52153[k52154]);
} else {
return undefined;
}
})();
var state = (function (){var obj52160 = map__52141__$1;
var k52161 = "state";
if((function (){var obj52162 = obj52160;
return (((!((obj52162 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52161,obj52162)));
})()){
return (obj52160[k52161]);
} else {
return undefined;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Program",type_name)){
return (0);
} else {
if(cljs.core.truth_(nextjournal.clojure_mode.node.coll_type_QMARK_(type))){
var G__52170 = context.column(nextjournal.clojure_mode.node.end(nextjournal.clojure_mode.node.down(node)));
if(cljs.core.truth_((function (){var and__4221__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("List",type_name);
if(and__4221__auto__){
var G__52174 = (function (){var G__52175 = node;
var G__52175__$1 = (((G__52175 == null))?null:nextjournal.clojure_mode.node.down(G__52175));
var G__52175__$2 = (((G__52175__$1 == null))?null:nextjournal.clojure_mode.node.right(G__52175__$1));
if((G__52175__$2 == null)){
return null;
} else {
return nextjournal.clojure_mode.node.name(G__52175__$2);
}
})();
var fexpr__52173 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["DefLike",null,"Operator",null], null), null);
return (fexpr__52173.cljs$core$IFn$_invoke$arity$1 ? fexpr__52173.cljs$core$IFn$_invoke$arity$1(G__52174) : fexpr__52173.call(null,G__52174));
} else {
return and__4221__auto__;
}
})())){
return (G__52170 + (1));
} else {
return G__52170;
}
} else {
return (-1);

}
}
});
});
nextjournal.clojure_mode.extensions.formatting.props = module$node_modules$$codemirror$language$dist$index_cjs.indentNodeProp.add(nextjournal.clojure_mode.extensions.formatting.indent_node_props);
nextjournal.clojure_mode.extensions.formatting.get_indentation = (function nextjournal$clojure_mode$extensions$formatting$get_indentation(context,pos){
return module$node_modules$$codemirror$language$dist$index_cjs.getIndentation(context.state,pos);
});
nextjournal.clojure_mode.extensions.formatting.make_indent_context = (function nextjournal$clojure_mode$extensions$formatting$make_indent_context(state){
return (new module$node_modules$$codemirror$language$dist$index_cjs.IndentContext(state));
});
nextjournal.clojure_mode.extensions.formatting.indent_all = (function nextjournal$clojure_mode$extensions$formatting$indent_all(state){
var context = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.update_lines(state,(function (from,content,line_num){
var current_indent = (/^\s*/.exec(content)[(0)]).length;
var indent = nextjournal.clojure_mode.util.guard(nextjournal.clojure_mode.extensions.formatting.get_indentation(context,from),cljs.core.complement(cljs.core.neg_QMARK_));
if(cljs.core.truth_(indent)){
var G__52189 = cljs.core.compare(indent,current_indent);
switch (G__52189) {
case (0):
return null;

break;
case (1):
return ({"from": (from + current_indent), "insert": nextjournal.clojure_mode.extensions.formatting.spaces(state,(indent - current_indent))});

break;
case (-1):
return ({"from": (from + indent), "to": (from + current_indent)});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52189)].join('')));

}
} else {
return null;
}
}));
});
nextjournal.clojure_mode.extensions.formatting.expected_space = (function nextjournal$clojure_mode$extensions$formatting$expected_space(n1,n2){
if(((nextjournal.clojure_mode.node.start_edge_type_QMARK_(n1)) || (((nextjournal.clojure_mode.node.prefix_edge_type_QMARK_(n1)) || (((nextjournal.clojure_mode.node.end_edge_type_QMARK_(n2)) || (nextjournal.clojure_mode.node.same_edge_type_QMARK_(n2)))))))){
return (0);
} else {
return (1);
}
});
nextjournal.clojure_mode.extensions.formatting.space_changes = (function nextjournal$clojure_mode$extensions$formatting$space_changes(state,from,to){
var nodes = cljs.core.reverse(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__52200_SHARP_){
return (((((from <= nextjournal.clojure_mode.node.start(p1__52200_SHARP_))) && ((nextjournal.clojure_mode.node.start(p1__52200_SHARP_) <= to)))) || ((((from <= nextjournal.clojure_mode.node.end(p1__52200_SHARP_))) && ((nextjournal.clojure_mode.node.end(p1__52200_SHARP_) <= to)))));
}),nextjournal.clojure_mode.node.terminal_nodes(nextjournal.clojure_mode.node.tree.cljs$core$IFn$_invoke$arity$1(state),from,to)));
var trim_QMARK_ = (function (){var G__52210 = cljs.core.first(nodes);
var G__52210__$1 = (((G__52210 == null))?null:nextjournal.clojure_mode.node.end(G__52210));
if((G__52210__$1 == null)){
return null;
} else {
return (G__52210__$1 < to);
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out,p__52212){
var vec__52214 = p__52212;
var map__52219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52214,(0),null);
var map__52219__$1 = (((((!((map__52219 == null))))?(((((map__52219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52219):map__52219);
var n2 = (function (){var obj52222 = map__52219__$1;
var k52223 = "type";
if((function (){var obj52224 = obj52222;
return (((!((obj52224 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52223,obj52224)));
})()){
return (obj52222[k52223]);
} else {
return undefined;
}
})();
var start2 = (function (){var obj52225 = map__52219__$1;
var k52226 = "from";
if((function (){var obj52227 = obj52225;
return (((!((obj52227 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52226,obj52227)));
})()){
return (obj52225[k52226]);
} else {
return undefined;
}
})();
var end2 = (function (){var obj52228 = map__52219__$1;
var k52229 = "to";
if((function (){var obj52230 = obj52228;
return (((!((obj52230 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52229,obj52230)));
})()){
return (obj52228[k52229]);
} else {
return undefined;
}
})();
var map__52220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52214,(1),null);
var map__52220__$1 = (((((!((map__52220 == null))))?(((((map__52220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52220):map__52220);
var n1 = (function (){var obj52232 = map__52220__$1;
var k52233 = "type";
if((function (){var obj52234 = obj52232;
return (((!((obj52234 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52233,obj52234)));
})()){
return (obj52232[k52233]);
} else {
return undefined;
}
})();
var start1 = (function (){var obj52235 = map__52220__$1;
var k52236 = "from";
if((function (){var obj52237 = obj52235;
return (((!((obj52237 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52236,obj52237)));
})()){
return (obj52235[k52236]);
} else {
return undefined;
}
})();
var end1 = (function (){var obj52239 = map__52220__$1;
var k52240 = "to";
if((function (){var obj52241 = obj52239;
return (((!((obj52241 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52240,obj52241)));
})()){
return (obj52239[k52240]);
} else {
return undefined;
}
})();
var expected = nextjournal.clojure_mode.extensions.formatting.expected_space(n1,n2);
var actual = (start2 - end1);
var G__52242 = cljs.core.compare(actual,expected);
switch (G__52242) {
case (0):
return out;

break;
case (1):
var array52243 = out;
array52243.push(({"from": (((expected === (0)))?end1:(end1 + (1))), "to": start2}));

return array52243;

break;
case (-1):
var array52244 = out;
array52244.push(({"from": end1, "insert": " "}));

return array52244;

break;
default:
return out;

}
}),(cljs.core.truth_(trim_QMARK_)?[({"from":nextjournal.clojure_mode.node.end(cljs.core.first(nodes)),"to":to})]:[]),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),nodes));
});
nextjournal.clojure_mode.extensions.formatting.into_arr = (function nextjournal$clojure_mode$extensions$formatting$into_arr(arr,items){
var seq__52245_52308 = cljs.core.seq(items);
var chunk__52246_52309 = null;
var count__52247_52310 = (0);
var i__52248_52311 = (0);
while(true){
if((i__52248_52311 < count__52247_52310)){
var i_52312 = chunk__52246_52309.cljs$core$IIndexed$_nth$arity$2(null,i__52248_52311);
arr.push(i_52312);


var G__52313 = seq__52245_52308;
var G__52314 = chunk__52246_52309;
var G__52315 = count__52247_52310;
var G__52316 = (i__52248_52311 + (1));
seq__52245_52308 = G__52313;
chunk__52246_52309 = G__52314;
count__52247_52310 = G__52315;
i__52248_52311 = G__52316;
continue;
} else {
var temp__5754__auto___52317 = cljs.core.seq(seq__52245_52308);
if(temp__5754__auto___52317){
var seq__52245_52321__$1 = temp__5754__auto___52317;
if(cljs.core.chunked_seq_QMARK_(seq__52245_52321__$1)){
var c__4649__auto___52322 = cljs.core.chunk_first(seq__52245_52321__$1);
var G__52324 = cljs.core.chunk_rest(seq__52245_52321__$1);
var G__52325 = c__4649__auto___52322;
var G__52326 = cljs.core.count(c__4649__auto___52322);
var G__52327 = (0);
seq__52245_52308 = G__52324;
chunk__52246_52309 = G__52325;
count__52247_52310 = G__52326;
i__52248_52311 = G__52327;
continue;
} else {
var i_52328 = cljs.core.first(seq__52245_52321__$1);
arr.push(i_52328);


var G__52329 = cljs.core.next(seq__52245_52321__$1);
var G__52330 = null;
var G__52331 = (0);
var G__52332 = (0);
seq__52245_52308 = G__52329;
chunk__52246_52309 = G__52330;
count__52247_52310 = G__52331;
i__52248_52311 = G__52332;
continue;
}
} else {
}
}
break;
}

return arr;
});
/**
 * Returns mutated `changes` array
 */
nextjournal.clojure_mode.extensions.formatting.format_line = (function nextjournal$clojure_mode$extensions$formatting$format_line(state,indent_context,from,text,line_num,changes,format_spaces_QMARK_){
if((!((text == null)))){
} else {
throw (new Error("Assert failed: (some? text)"));
}

var current_indent = (/^\s*/.exec(text)[(0)]).length;
var indent = nextjournal.clojure_mode.util.guard(nextjournal.clojure_mode.extensions.formatting.get_indentation(indent_context,from),cljs.core.complement(cljs.core.neg_QMARK_));
var indentation_change = (cljs.core.truth_(indent)?(function (){var G__52249 = cljs.core.compare(indent,current_indent);
switch (G__52249) {
case (0):
return null;

break;
case (1):
return ({"from": (from + current_indent), "insert": nextjournal.clojure_mode.extensions.formatting.spaces(state,(indent - current_indent))});

break;
case (-1):
return ({"from": (from + indent), "to": (from + current_indent)});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52249)].join('')));

}
})():null);
var space_changes = (cljs.core.truth_(format_spaces_QMARK_)?nextjournal.clojure_mode.extensions.formatting.space_changes(state,(from + current_indent),(from + cljs.core.count(text))):null);
var G__52250 = changes;
var G__52250__$1 = (cljs.core.truth_(space_changes)?nextjournal.clojure_mode.extensions.formatting.into_arr(G__52250,space_changes):G__52250);
if(cljs.core.truth_(indentation_change)){
var array52251 = G__52250__$1;
array52251.push(indentation_change);

return array52251;
} else {
return G__52250__$1;
}
});
nextjournal.clojure_mode.extensions.formatting.format_selection = (function nextjournal$clojure_mode$extensions$formatting$format_selection(state){
var context = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.update_selected_lines(state,(function (p__52252,changes,range){
var map__52253 = p__52252;
var map__52253__$1 = (((((!((map__52253 == null))))?(((((map__52253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52253):map__52253);
var line = map__52253__$1;
var from = (function (){var obj52255 = map__52253__$1;
var k52256 = "from";
if((function (){var obj52257 = obj52255;
return (((!((obj52257 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52256,obj52257)));
})()){
return (obj52255[k52256]);
} else {
return undefined;
}
})();
var text = (function (){var obj52258 = map__52253__$1;
var k52259 = "text";
if((function (){var obj52260 = obj52258;
return (((!((obj52260 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52259,obj52260)));
})()){
return (obj52258[k52259]);
} else {
return undefined;
}
})();
var number = (function (){var obj52261 = map__52253__$1;
var k52262 = "number";
if((function (){var obj52263 = obj52261;
return (((!((obj52263 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k52262,obj52263)));
})()){
return (obj52261[k52262]);
} else {
return undefined;
}
})();
return nextjournal.clojure_mode.extensions.formatting.format_line(state,context,from,text,number,changes,true);
}));
});
nextjournal.clojure_mode.extensions.formatting.format_all = (function nextjournal$clojure_mode$extensions$formatting$format_all(state){
var context = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.update_lines(state,(function (from,text,line_num){
return nextjournal.clojure_mode.extensions.formatting.format_line(state,context,from,text,line_num,[],true);
}));
});
nextjournal.clojure_mode.extensions.formatting.format_transaction = (function nextjournal$clojure_mode$extensions$formatting$format_transaction(tr){
var origin = nextjournal.clojure_mode.util.get_user_event_annotation(tr);
var temp__5752__auto__ = (function (){var G__52264 = origin;
switch (G__52264) {
case "input":
case "delete":
case "keyboardselection":
case "pointerselection":
case "cut":
case "noformat":
case "evalregion":
return null;

break;
case "format-selections":
return nextjournal.clojure_mode.extensions.formatting.format_selection(tr.state);

break;
default:
var state = tr.state;
var context = nextjournal.clojure_mode.extensions.formatting.make_indent_context(state);
return nextjournal.clojure_mode.util.iter_changed_lines(tr,(function (line,changes){
return nextjournal.clojure_mode.extensions.formatting.format_line(state,context,line.from,line.text,line.number,changes,true);
}));

}
})();
if(cljs.core.truth_(temp__5752__auto__)){
var changes = temp__5752__auto__;
return tr.startState.update((function (){var obj52265 = changes;
var obj52266 = (((!((obj52265 == null))))?obj52265:({}));
(obj52266["filter"] = false);

return obj52266;
})());
} else {
return tr;
}
});
nextjournal.clojure_mode.extensions.formatting.format = (function nextjournal$clojure_mode$extensions$formatting$format(state){
if(nextjournal.clojure_mode.util.something_selected_QMARK_(state)){
return state.update(nextjournal.clojure_mode.extensions.formatting.format_selection(state));
} else {
return nextjournal.clojure_mode.extensions.formatting.format_all(state);
}
});
nextjournal.clojure_mode.extensions.formatting.prefix_all = (function nextjournal$clojure_mode$extensions$formatting$prefix_all(prefix,state){
return nextjournal.clojure_mode.util.update_lines(state,(function (from,_,___$1){
return ({"from": from, "insert": prefix});
}));
});
nextjournal.clojure_mode.extensions.formatting.ext_format_changed_lines = (function nextjournal$clojure_mode$extensions$formatting$ext_format_changed_lines(){
return module$node_modules$$codemirror$state$dist$index_cjs.EditorState.transactionFilter.of(nextjournal.clojure_mode.extensions.formatting.format_transaction);
});

//# sourceMappingURL=nextjournal.clojure_mode.extensions.formatting.js.map
