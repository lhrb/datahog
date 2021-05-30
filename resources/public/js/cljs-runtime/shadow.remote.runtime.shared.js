goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__46211,res){
var map__46213 = p__46211;
var map__46213__$1 = cljs.core.__destructure_map(map__46213);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46213__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46213__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__46221 = res;
var G__46221__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46221,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__46221);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__46221__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__46221__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__46231 = arguments.length;
switch (G__46231) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__46241,msg,handlers,timeout_after_ms){
var map__46242 = p__46241;
var map__46242__$1 = cljs.core.__destructure_map(map__46242);
var runtime = map__46242__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46242__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___46690 = arguments.length;
var i__4830__auto___46691 = (0);
while(true){
if((i__4830__auto___46691 < len__4829__auto___46690)){
args__4835__auto__.push((arguments[i__4830__auto___46691]));

var G__46693 = (i__4830__auto___46691 + (1));
i__4830__auto___46691 = G__46693;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__46267,ev,args){
var map__46269 = p__46267;
var map__46269__$1 = cljs.core.__destructure_map(map__46269);
var runtime = map__46269__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46269__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__46281 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__46284 = null;
var count__46285 = (0);
var i__46286 = (0);
while(true){
if((i__46286 < count__46285)){
var ext = chunk__46284.cljs$core$IIndexed$_nth$arity$2(null,i__46286);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__46709 = seq__46281;
var G__46710 = chunk__46284;
var G__46711 = count__46285;
var G__46712 = (i__46286 + (1));
seq__46281 = G__46709;
chunk__46284 = G__46710;
count__46285 = G__46711;
i__46286 = G__46712;
continue;
} else {
var G__46713 = seq__46281;
var G__46714 = chunk__46284;
var G__46715 = count__46285;
var G__46716 = (i__46286 + (1));
seq__46281 = G__46713;
chunk__46284 = G__46714;
count__46285 = G__46715;
i__46286 = G__46716;
continue;
}
} else {
var temp__5754__auto__ = cljs.core.seq(seq__46281);
if(temp__5754__auto__){
var seq__46281__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46281__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__46281__$1);
var G__46718 = cljs.core.chunk_rest(seq__46281__$1);
var G__46719 = c__4649__auto__;
var G__46720 = cljs.core.count(c__4649__auto__);
var G__46721 = (0);
seq__46281 = G__46718;
chunk__46284 = G__46719;
count__46285 = G__46720;
i__46286 = G__46721;
continue;
} else {
var ext = cljs.core.first(seq__46281__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__46722 = cljs.core.next(seq__46281__$1);
var G__46723 = null;
var G__46724 = (0);
var G__46725 = (0);
seq__46281 = G__46722;
chunk__46284 = G__46723;
count__46285 = G__46724;
i__46286 = G__46725;
continue;
} else {
var G__46727 = cljs.core.next(seq__46281__$1);
var G__46728 = null;
var G__46729 = (0);
var G__46730 = (0);
seq__46281 = G__46727;
chunk__46284 = G__46728;
count__46285 = G__46729;
i__46286 = G__46730;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq46254){
var G__46255 = cljs.core.first(seq46254);
var seq46254__$1 = cljs.core.next(seq46254);
var G__46259 = cljs.core.first(seq46254__$1);
var seq46254__$2 = cljs.core.next(seq46254__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46255,G__46259,seq46254__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__46383,p__46384){
var map__46390 = p__46383;
var map__46390__$1 = cljs.core.__destructure_map(map__46390);
var runtime = map__46390__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46390__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__46391 = p__46384;
var map__46391__$1 = cljs.core.__destructure_map(map__46391);
var msg = map__46391__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46391__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__46400 = cljs.core.deref(state_ref);
var map__46400__$1 = cljs.core.__destructure_map(map__46400);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46400__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46400__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__46413){
var map__46415 = p__46413;
var map__46415__$1 = cljs.core.__destructure_map(map__46415);
var runtime = map__46415__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46415__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4223__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__46420,msg){
var map__46422 = p__46420;
var map__46422__$1 = cljs.core.__destructure_map(map__46422);
var runtime = map__46422__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46422__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__46448,key,p__46449){
var map__46451 = p__46448;
var map__46451__$1 = cljs.core.__destructure_map(map__46451);
var state = map__46451__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46451__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__46452 = p__46449;
var map__46452__$1 = cljs.core.__destructure_map(map__46452);
var spec = map__46452__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46452__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__46474,key,spec){
var map__46475 = p__46474;
var map__46475__$1 = cljs.core.__destructure_map(map__46475);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46475__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__46482_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__46482_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__46485_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__46485_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__46486_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__46486_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__46487_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__46487_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__46488_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__46488_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__46502,key){
var map__46508 = p__46502;
var map__46508__$1 = cljs.core.__destructure_map(map__46508);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46508__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__46519,msg){
var map__46522 = p__46519;
var map__46522__$1 = cljs.core.__destructure_map(map__46522);
var runtime = map__46522__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46522__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__46562,p__46563){
var map__46565 = p__46562;
var map__46565__$1 = cljs.core.__destructure_map(map__46565);
var runtime = map__46565__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46565__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__46570 = p__46563;
var map__46570__$1 = cljs.core.__destructure_map(map__46570);
var msg = map__46570__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46570__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46570__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__46592 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__46594 = null;
var count__46595 = (0);
var i__46596 = (0);
while(true){
if((i__46596 < count__46595)){
var map__46616 = chunk__46594.cljs$core$IIndexed$_nth$arity$2(null,i__46596);
var map__46616__$1 = cljs.core.__destructure_map(map__46616);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46616__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__46808 = seq__46592;
var G__46809 = chunk__46594;
var G__46810 = count__46595;
var G__46811 = (i__46596 + (1));
seq__46592 = G__46808;
chunk__46594 = G__46809;
count__46595 = G__46810;
i__46596 = G__46811;
continue;
} else {
var G__46812 = seq__46592;
var G__46813 = chunk__46594;
var G__46814 = count__46595;
var G__46815 = (i__46596 + (1));
seq__46592 = G__46812;
chunk__46594 = G__46813;
count__46595 = G__46814;
i__46596 = G__46815;
continue;
}
} else {
var temp__5754__auto__ = cljs.core.seq(seq__46592);
if(temp__5754__auto__){
var seq__46592__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46592__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__46592__$1);
var G__46818 = cljs.core.chunk_rest(seq__46592__$1);
var G__46819 = c__4649__auto__;
var G__46820 = cljs.core.count(c__4649__auto__);
var G__46821 = (0);
seq__46592 = G__46818;
chunk__46594 = G__46819;
count__46595 = G__46820;
i__46596 = G__46821;
continue;
} else {
var map__46622 = cljs.core.first(seq__46592__$1);
var map__46622__$1 = cljs.core.__destructure_map(map__46622);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46622__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__46823 = cljs.core.next(seq__46592__$1);
var G__46824 = null;
var G__46825 = (0);
var G__46826 = (0);
seq__46592 = G__46823;
chunk__46594 = G__46824;
count__46595 = G__46825;
i__46596 = G__46826;
continue;
} else {
var G__46828 = cljs.core.next(seq__46592__$1);
var G__46829 = null;
var G__46830 = (0);
var G__46831 = (0);
seq__46592 = G__46828;
chunk__46594 = G__46829;
count__46595 = G__46830;
i__46596 = G__46831;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
