goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___51586 = arguments.length;
var i__4830__auto___51587 = (0);
while(true){
if((i__4830__auto___51587 < len__4829__auto___51586)){
args__4835__auto__.push((arguments[i__4830__auto___51587]));

var G__51588 = (i__4830__auto___51587 + (1));
i__4830__auto___51587 = G__51588;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq51140){
var G__51141 = cljs.core.first(seq51140);
var seq51140__$1 = cljs.core.next(seq51140);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51141,seq51140__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__51144 = cljs.core.seq(sources);
var chunk__51145 = null;
var count__51146 = (0);
var i__51147 = (0);
while(true){
if((i__51147 < count__51146)){
var map__51157 = chunk__51145.cljs$core$IIndexed$_nth$arity$2(null,i__51147);
var map__51157__$1 = cljs.core.__destructure_map(map__51157);
var src = map__51157__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51157__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51157__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51157__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51157__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e51158){var e_51589 = e51158;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51589);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51589.message)].join('')));
}

var G__51590 = seq__51144;
var G__51591 = chunk__51145;
var G__51592 = count__51146;
var G__51593 = (i__51147 + (1));
seq__51144 = G__51590;
chunk__51145 = G__51591;
count__51146 = G__51592;
i__51147 = G__51593;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__51144);
if(temp__5754__auto__){
var seq__51144__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51144__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__51144__$1);
var G__51595 = cljs.core.chunk_rest(seq__51144__$1);
var G__51596 = c__4649__auto__;
var G__51597 = cljs.core.count(c__4649__auto__);
var G__51598 = (0);
seq__51144 = G__51595;
chunk__51145 = G__51596;
count__51146 = G__51597;
i__51147 = G__51598;
continue;
} else {
var map__51161 = cljs.core.first(seq__51144__$1);
var map__51161__$1 = cljs.core.__destructure_map(map__51161);
var src = map__51161__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51161__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51161__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51161__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51161__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e51162){var e_51600 = e51162;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51600);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51600.message)].join('')));
}

var G__51603 = cljs.core.next(seq__51144__$1);
var G__51604 = null;
var G__51605 = (0);
var G__51606 = (0);
seq__51144 = G__51603;
chunk__51145 = G__51604;
count__51146 = G__51605;
i__51147 = G__51606;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__51164 = cljs.core.seq(js_requires);
var chunk__51165 = null;
var count__51166 = (0);
var i__51167 = (0);
while(true){
if((i__51167 < count__51166)){
var js_ns = chunk__51165.cljs$core$IIndexed$_nth$arity$2(null,i__51167);
var require_str_51611 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51611);


var G__51612 = seq__51164;
var G__51613 = chunk__51165;
var G__51614 = count__51166;
var G__51615 = (i__51167 + (1));
seq__51164 = G__51612;
chunk__51165 = G__51613;
count__51166 = G__51614;
i__51167 = G__51615;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__51164);
if(temp__5754__auto__){
var seq__51164__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51164__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__51164__$1);
var G__51616 = cljs.core.chunk_rest(seq__51164__$1);
var G__51617 = c__4649__auto__;
var G__51618 = cljs.core.count(c__4649__auto__);
var G__51619 = (0);
seq__51164 = G__51616;
chunk__51165 = G__51617;
count__51166 = G__51618;
i__51167 = G__51619;
continue;
} else {
var js_ns = cljs.core.first(seq__51164__$1);
var require_str_51620 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51620);


var G__51621 = cljs.core.next(seq__51164__$1);
var G__51622 = null;
var G__51623 = (0);
var G__51624 = (0);
seq__51164 = G__51621;
chunk__51165 = G__51622;
count__51166 = G__51623;
i__51167 = G__51624;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__51188){
var map__51189 = p__51188;
var map__51189__$1 = cljs.core.__destructure_map(map__51189);
var msg = map__51189__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51189__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51189__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51190(s__51191){
return (new cljs.core.LazySeq(null,(function (){
var s__51191__$1 = s__51191;
while(true){
var temp__5754__auto__ = cljs.core.seq(s__51191__$1);
if(temp__5754__auto__){
var xs__6309__auto__ = temp__5754__auto__;
var map__51198 = cljs.core.first(xs__6309__auto__);
var map__51198__$1 = cljs.core.__destructure_map(map__51198);
var src = map__51198__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51198__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51198__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__51191__$1,map__51198,map__51198__$1,src,resource_name,warnings,xs__6309__auto__,temp__5754__auto__,map__51189,map__51189__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51190_$_iter__51192(s__51193){
return (new cljs.core.LazySeq(null,((function (s__51191__$1,map__51198,map__51198__$1,src,resource_name,warnings,xs__6309__auto__,temp__5754__auto__,map__51189,map__51189__$1,msg,info,reload_info){
return (function (){
var s__51193__$1 = s__51193;
while(true){
var temp__5754__auto____$1 = cljs.core.seq(s__51193__$1);
if(temp__5754__auto____$1){
var s__51193__$2 = temp__5754__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51193__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__51193__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__51195 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__51194 = (0);
while(true){
if((i__51194 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__51194);
cljs.core.chunk_append(b__51195,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__51626 = (i__51194 + (1));
i__51194 = G__51626;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51195),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51190_$_iter__51192(cljs.core.chunk_rest(s__51193__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51195),null);
}
} else {
var warning = cljs.core.first(s__51193__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51190_$_iter__51192(cljs.core.rest(s__51193__$2)));
}
} else {
return null;
}
break;
}
});})(s__51191__$1,map__51198,map__51198__$1,src,resource_name,warnings,xs__6309__auto__,temp__5754__auto__,map__51189,map__51189__$1,msg,info,reload_info))
,null,null));
});})(s__51191__$1,map__51198,map__51198__$1,src,resource_name,warnings,xs__6309__auto__,temp__5754__auto__,map__51189,map__51189__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51190(cljs.core.rest(s__51191__$1)));
} else {
var G__51628 = cljs.core.rest(s__51191__$1);
s__51191__$1 = G__51628;
continue;
}
} else {
var G__51629 = cljs.core.rest(s__51191__$1);
s__51191__$1 = G__51629;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__51210_51630 = cljs.core.seq(warnings);
var chunk__51211_51631 = null;
var count__51212_51632 = (0);
var i__51213_51633 = (0);
while(true){
if((i__51213_51633 < count__51212_51632)){
var map__51219_51634 = chunk__51211_51631.cljs$core$IIndexed$_nth$arity$2(null,i__51213_51633);
var map__51219_51635__$1 = cljs.core.__destructure_map(map__51219_51634);
var w_51636 = map__51219_51635__$1;
var msg_51637__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51219_51635__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51638 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51219_51635__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51639 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51219_51635__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51640 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51219_51635__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51640)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51638),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51639),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51637__$1)].join(''));


var G__51641 = seq__51210_51630;
var G__51642 = chunk__51211_51631;
var G__51643 = count__51212_51632;
var G__51644 = (i__51213_51633 + (1));
seq__51210_51630 = G__51641;
chunk__51211_51631 = G__51642;
count__51212_51632 = G__51643;
i__51213_51633 = G__51644;
continue;
} else {
var temp__5754__auto___51645 = cljs.core.seq(seq__51210_51630);
if(temp__5754__auto___51645){
var seq__51210_51646__$1 = temp__5754__auto___51645;
if(cljs.core.chunked_seq_QMARK_(seq__51210_51646__$1)){
var c__4649__auto___51648 = cljs.core.chunk_first(seq__51210_51646__$1);
var G__51650 = cljs.core.chunk_rest(seq__51210_51646__$1);
var G__51651 = c__4649__auto___51648;
var G__51652 = cljs.core.count(c__4649__auto___51648);
var G__51653 = (0);
seq__51210_51630 = G__51650;
chunk__51211_51631 = G__51651;
count__51212_51632 = G__51652;
i__51213_51633 = G__51653;
continue;
} else {
var map__51224_51654 = cljs.core.first(seq__51210_51646__$1);
var map__51224_51655__$1 = cljs.core.__destructure_map(map__51224_51654);
var w_51656 = map__51224_51655__$1;
var msg_51657__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51224_51655__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51224_51655__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51224_51655__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51224_51655__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51660)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51658),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51659),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51657__$1)].join(''));


var G__51662 = cljs.core.next(seq__51210_51646__$1);
var G__51663 = null;
var G__51664 = (0);
var G__51665 = (0);
seq__51210_51630 = G__51662;
chunk__51211_51631 = G__51663;
count__51212_51632 = G__51664;
i__51213_51633 = G__51665;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__51187_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__51187_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4221__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4221__auto__){
var and__4221__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4221__auto____$1){
return new$;
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__51238){
var map__51239 = p__51238;
var map__51239__$1 = cljs.core.__destructure_map(map__51239);
var msg = map__51239__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51239__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__51240 = cljs.core.seq(updates);
var chunk__51242 = null;
var count__51243 = (0);
var i__51244 = (0);
while(true){
if((i__51244 < count__51243)){
var path = chunk__51242.cljs$core$IIndexed$_nth$arity$2(null,i__51244);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51307_51677 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51311_51678 = null;
var count__51312_51679 = (0);
var i__51313_51680 = (0);
while(true){
if((i__51313_51680 < count__51312_51679)){
var node_51681 = chunk__51311_51678.cljs$core$IIndexed$_nth$arity$2(null,i__51313_51680);
if(cljs.core.not(node_51681.shadow$old)){
var path_match_51682 = shadow.cljs.devtools.client.browser.match_paths(node_51681.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51682)){
var new_link_51685 = (function (){var G__51354 = node_51681.cloneNode(true);
G__51354.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51682),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51354;
})();
(node_51681.shadow$old = true);

(new_link_51685.onload = ((function (seq__51307_51677,chunk__51311_51678,count__51312_51679,i__51313_51680,seq__51240,chunk__51242,count__51243,i__51244,new_link_51685,path_match_51682,node_51681,path,map__51239,map__51239__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51681);
});})(seq__51307_51677,chunk__51311_51678,count__51312_51679,i__51313_51680,seq__51240,chunk__51242,count__51243,i__51244,new_link_51685,path_match_51682,node_51681,path,map__51239,map__51239__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51682], 0));

goog.dom.insertSiblingAfter(new_link_51685,node_51681);


var G__51687 = seq__51307_51677;
var G__51688 = chunk__51311_51678;
var G__51690 = count__51312_51679;
var G__51691 = (i__51313_51680 + (1));
seq__51307_51677 = G__51687;
chunk__51311_51678 = G__51688;
count__51312_51679 = G__51690;
i__51313_51680 = G__51691;
continue;
} else {
var G__51694 = seq__51307_51677;
var G__51695 = chunk__51311_51678;
var G__51696 = count__51312_51679;
var G__51697 = (i__51313_51680 + (1));
seq__51307_51677 = G__51694;
chunk__51311_51678 = G__51695;
count__51312_51679 = G__51696;
i__51313_51680 = G__51697;
continue;
}
} else {
var G__51699 = seq__51307_51677;
var G__51700 = chunk__51311_51678;
var G__51701 = count__51312_51679;
var G__51702 = (i__51313_51680 + (1));
seq__51307_51677 = G__51699;
chunk__51311_51678 = G__51700;
count__51312_51679 = G__51701;
i__51313_51680 = G__51702;
continue;
}
} else {
var temp__5754__auto___51703 = cljs.core.seq(seq__51307_51677);
if(temp__5754__auto___51703){
var seq__51307_51704__$1 = temp__5754__auto___51703;
if(cljs.core.chunked_seq_QMARK_(seq__51307_51704__$1)){
var c__4649__auto___51705 = cljs.core.chunk_first(seq__51307_51704__$1);
var G__51706 = cljs.core.chunk_rest(seq__51307_51704__$1);
var G__51707 = c__4649__auto___51705;
var G__51708 = cljs.core.count(c__4649__auto___51705);
var G__51709 = (0);
seq__51307_51677 = G__51706;
chunk__51311_51678 = G__51707;
count__51312_51679 = G__51708;
i__51313_51680 = G__51709;
continue;
} else {
var node_51710 = cljs.core.first(seq__51307_51704__$1);
if(cljs.core.not(node_51710.shadow$old)){
var path_match_51711 = shadow.cljs.devtools.client.browser.match_paths(node_51710.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51711)){
var new_link_51712 = (function (){var G__51361 = node_51710.cloneNode(true);
G__51361.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51711),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51361;
})();
(node_51710.shadow$old = true);

(new_link_51712.onload = ((function (seq__51307_51677,chunk__51311_51678,count__51312_51679,i__51313_51680,seq__51240,chunk__51242,count__51243,i__51244,new_link_51712,path_match_51711,node_51710,seq__51307_51704__$1,temp__5754__auto___51703,path,map__51239,map__51239__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51710);
});})(seq__51307_51677,chunk__51311_51678,count__51312_51679,i__51313_51680,seq__51240,chunk__51242,count__51243,i__51244,new_link_51712,path_match_51711,node_51710,seq__51307_51704__$1,temp__5754__auto___51703,path,map__51239,map__51239__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51711], 0));

goog.dom.insertSiblingAfter(new_link_51712,node_51710);


var G__51715 = cljs.core.next(seq__51307_51704__$1);
var G__51716 = null;
var G__51717 = (0);
var G__51718 = (0);
seq__51307_51677 = G__51715;
chunk__51311_51678 = G__51716;
count__51312_51679 = G__51717;
i__51313_51680 = G__51718;
continue;
} else {
var G__51719 = cljs.core.next(seq__51307_51704__$1);
var G__51720 = null;
var G__51721 = (0);
var G__51722 = (0);
seq__51307_51677 = G__51719;
chunk__51311_51678 = G__51720;
count__51312_51679 = G__51721;
i__51313_51680 = G__51722;
continue;
}
} else {
var G__51723 = cljs.core.next(seq__51307_51704__$1);
var G__51724 = null;
var G__51725 = (0);
var G__51726 = (0);
seq__51307_51677 = G__51723;
chunk__51311_51678 = G__51724;
count__51312_51679 = G__51725;
i__51313_51680 = G__51726;
continue;
}
}
} else {
}
}
break;
}


var G__51727 = seq__51240;
var G__51728 = chunk__51242;
var G__51729 = count__51243;
var G__51730 = (i__51244 + (1));
seq__51240 = G__51727;
chunk__51242 = G__51728;
count__51243 = G__51729;
i__51244 = G__51730;
continue;
} else {
var G__51732 = seq__51240;
var G__51733 = chunk__51242;
var G__51734 = count__51243;
var G__51735 = (i__51244 + (1));
seq__51240 = G__51732;
chunk__51242 = G__51733;
count__51243 = G__51734;
i__51244 = G__51735;
continue;
}
} else {
var temp__5754__auto__ = cljs.core.seq(seq__51240);
if(temp__5754__auto__){
var seq__51240__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51240__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__51240__$1);
var G__51738 = cljs.core.chunk_rest(seq__51240__$1);
var G__51739 = c__4649__auto__;
var G__51740 = cljs.core.count(c__4649__auto__);
var G__51741 = (0);
seq__51240 = G__51738;
chunk__51242 = G__51739;
count__51243 = G__51740;
i__51244 = G__51741;
continue;
} else {
var path = cljs.core.first(seq__51240__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51387_51743 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51391_51744 = null;
var count__51392_51745 = (0);
var i__51393_51746 = (0);
while(true){
if((i__51393_51746 < count__51392_51745)){
var node_51747 = chunk__51391_51744.cljs$core$IIndexed$_nth$arity$2(null,i__51393_51746);
if(cljs.core.not(node_51747.shadow$old)){
var path_match_51750 = shadow.cljs.devtools.client.browser.match_paths(node_51747.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51750)){
var new_link_51752 = (function (){var G__51415 = node_51747.cloneNode(true);
G__51415.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51750),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51415;
})();
(node_51747.shadow$old = true);

(new_link_51752.onload = ((function (seq__51387_51743,chunk__51391_51744,count__51392_51745,i__51393_51746,seq__51240,chunk__51242,count__51243,i__51244,new_link_51752,path_match_51750,node_51747,path,seq__51240__$1,temp__5754__auto__,map__51239,map__51239__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51747);
});})(seq__51387_51743,chunk__51391_51744,count__51392_51745,i__51393_51746,seq__51240,chunk__51242,count__51243,i__51244,new_link_51752,path_match_51750,node_51747,path,seq__51240__$1,temp__5754__auto__,map__51239,map__51239__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51750], 0));

goog.dom.insertSiblingAfter(new_link_51752,node_51747);


var G__51754 = seq__51387_51743;
var G__51755 = chunk__51391_51744;
var G__51756 = count__51392_51745;
var G__51757 = (i__51393_51746 + (1));
seq__51387_51743 = G__51754;
chunk__51391_51744 = G__51755;
count__51392_51745 = G__51756;
i__51393_51746 = G__51757;
continue;
} else {
var G__51758 = seq__51387_51743;
var G__51759 = chunk__51391_51744;
var G__51760 = count__51392_51745;
var G__51761 = (i__51393_51746 + (1));
seq__51387_51743 = G__51758;
chunk__51391_51744 = G__51759;
count__51392_51745 = G__51760;
i__51393_51746 = G__51761;
continue;
}
} else {
var G__51762 = seq__51387_51743;
var G__51763 = chunk__51391_51744;
var G__51764 = count__51392_51745;
var G__51765 = (i__51393_51746 + (1));
seq__51387_51743 = G__51762;
chunk__51391_51744 = G__51763;
count__51392_51745 = G__51764;
i__51393_51746 = G__51765;
continue;
}
} else {
var temp__5754__auto___51766__$1 = cljs.core.seq(seq__51387_51743);
if(temp__5754__auto___51766__$1){
var seq__51387_51767__$1 = temp__5754__auto___51766__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51387_51767__$1)){
var c__4649__auto___51768 = cljs.core.chunk_first(seq__51387_51767__$1);
var G__51769 = cljs.core.chunk_rest(seq__51387_51767__$1);
var G__51770 = c__4649__auto___51768;
var G__51771 = cljs.core.count(c__4649__auto___51768);
var G__51772 = (0);
seq__51387_51743 = G__51769;
chunk__51391_51744 = G__51770;
count__51392_51745 = G__51771;
i__51393_51746 = G__51772;
continue;
} else {
var node_51773 = cljs.core.first(seq__51387_51767__$1);
if(cljs.core.not(node_51773.shadow$old)){
var path_match_51774 = shadow.cljs.devtools.client.browser.match_paths(node_51773.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51774)){
var new_link_51775 = (function (){var G__51435 = node_51773.cloneNode(true);
G__51435.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51774),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51435;
})();
(node_51773.shadow$old = true);

(new_link_51775.onload = ((function (seq__51387_51743,chunk__51391_51744,count__51392_51745,i__51393_51746,seq__51240,chunk__51242,count__51243,i__51244,new_link_51775,path_match_51774,node_51773,seq__51387_51767__$1,temp__5754__auto___51766__$1,path,seq__51240__$1,temp__5754__auto__,map__51239,map__51239__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51773);
});})(seq__51387_51743,chunk__51391_51744,count__51392_51745,i__51393_51746,seq__51240,chunk__51242,count__51243,i__51244,new_link_51775,path_match_51774,node_51773,seq__51387_51767__$1,temp__5754__auto___51766__$1,path,seq__51240__$1,temp__5754__auto__,map__51239,map__51239__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51774], 0));

goog.dom.insertSiblingAfter(new_link_51775,node_51773);


var G__51776 = cljs.core.next(seq__51387_51767__$1);
var G__51777 = null;
var G__51778 = (0);
var G__51779 = (0);
seq__51387_51743 = G__51776;
chunk__51391_51744 = G__51777;
count__51392_51745 = G__51778;
i__51393_51746 = G__51779;
continue;
} else {
var G__51780 = cljs.core.next(seq__51387_51767__$1);
var G__51781 = null;
var G__51782 = (0);
var G__51783 = (0);
seq__51387_51743 = G__51780;
chunk__51391_51744 = G__51781;
count__51392_51745 = G__51782;
i__51393_51746 = G__51783;
continue;
}
} else {
var G__51784 = cljs.core.next(seq__51387_51767__$1);
var G__51785 = null;
var G__51786 = (0);
var G__51787 = (0);
seq__51387_51743 = G__51784;
chunk__51391_51744 = G__51785;
count__51392_51745 = G__51786;
i__51393_51746 = G__51787;
continue;
}
}
} else {
}
}
break;
}


var G__51789 = cljs.core.next(seq__51240__$1);
var G__51790 = null;
var G__51791 = (0);
var G__51792 = (0);
seq__51240 = G__51789;
chunk__51242 = G__51790;
count__51243 = G__51791;
i__51244 = G__51792;
continue;
} else {
var G__51794 = cljs.core.next(seq__51240__$1);
var G__51795 = null;
var G__51796 = (0);
var G__51797 = (0);
seq__51240 = G__51794;
chunk__51242 = G__51795;
count__51243 = G__51796;
i__51244 = G__51797;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__51459){
var map__51460 = p__51459;
var map__51460__$1 = cljs.core.__destructure_map(map__51460);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51460__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__51511){
var map__51512 = p__51511;
var map__51512__$1 = cljs.core.__destructure_map(map__51512);
var _ = map__51512__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51512__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__51518,done,error){
var map__51520 = p__51518;
var map__51520__$1 = cljs.core.__destructure_map(map__51520);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51520__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__51525,done,error){
var map__51526 = p__51525;
var map__51526__$1 = cljs.core.__destructure_map(map__51526);
var msg = map__51526__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51526__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51526__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51526__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__51536){
var map__51537 = p__51536;
var map__51537__$1 = cljs.core.__destructure_map(map__51537);
var src = map__51537__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51537__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__51543 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__51543) : done.call(null,G__51543));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__51548){
var map__51549 = p__51548;
var map__51549__$1 = cljs.core.__destructure_map(map__51549);
var msg__$1 = map__51549__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51549__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e51550){var ex = e51550;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__51552){
var map__51554 = p__51552;
var map__51554__$1 = cljs.core.__destructure_map(map__51554);
var env = map__51554__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51554__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__51557){
var map__51559 = p__51557;
var map__51559__$1 = cljs.core.__destructure_map(map__51559);
var msg = map__51559__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51559__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__51565){
var map__51566 = p__51565;
var map__51566__$1 = cljs.core.__destructure_map(map__51566);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51566__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51566__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__51573){
var map__51574 = p__51573;
var map__51574__$1 = cljs.core.__destructure_map(map__51574);
var svc = map__51574__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51574__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
