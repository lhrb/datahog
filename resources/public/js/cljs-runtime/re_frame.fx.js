goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__42381 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__42382 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__42382);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5754__auto___42464 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5754__auto___42464)){
var new_db_42465 = temp__5754__auto___42464;
var fexpr__42384_42466 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__42384_42466.cljs$core$IFn$_invoke$arity$1 ? fexpr__42384_42466.cljs$core$IFn$_invoke$arity$1(new_db_42465) : fexpr__42384_42466.call(null,new_db_42465));
} else {
}

var seq__42385 = cljs.core.seq(effects_without_db);
var chunk__42386 = null;
var count__42387 = (0);
var i__42388 = (0);
while(true){
if((i__42388 < count__42387)){
var vec__42398 = chunk__42386.cljs$core$IIndexed$_nth$arity$2(null,i__42388);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42398,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42398,(1),null);
var temp__5752__auto___42467 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5752__auto___42467)){
var effect_fn_42468 = temp__5752__auto___42467;
(effect_fn_42468.cljs$core$IFn$_invoke$arity$1 ? effect_fn_42468.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_42468.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__42469 = seq__42385;
var G__42470 = chunk__42386;
var G__42471 = count__42387;
var G__42472 = (i__42388 + (1));
seq__42385 = G__42469;
chunk__42386 = G__42470;
count__42387 = G__42471;
i__42388 = G__42472;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__42385);
if(temp__5754__auto__){
var seq__42385__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42385__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__42385__$1);
var G__42473 = cljs.core.chunk_rest(seq__42385__$1);
var G__42474 = c__4649__auto__;
var G__42475 = cljs.core.count(c__4649__auto__);
var G__42476 = (0);
seq__42385 = G__42473;
chunk__42386 = G__42474;
count__42387 = G__42475;
i__42388 = G__42476;
continue;
} else {
var vec__42402 = cljs.core.first(seq__42385__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42402,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42402,(1),null);
var temp__5752__auto___42477 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5752__auto___42477)){
var effect_fn_42478 = temp__5752__auto___42477;
(effect_fn_42478.cljs$core$IFn$_invoke$arity$1 ? effect_fn_42478.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_42478.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__42479 = cljs.core.next(seq__42385__$1);
var G__42480 = null;
var G__42481 = (0);
var G__42482 = (0);
seq__42385 = G__42479;
chunk__42386 = G__42480;
count__42387 = G__42481;
i__42388 = G__42482;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__42055__auto___42483 = re_frame.interop.now();
var duration__42056__auto___42484 = (end__42055__auto___42483 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__42056__auto___42484,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__42055__auto___42483);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__42381);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5754__auto___42485 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5754__auto___42485)){
var new_db_42487 = temp__5754__auto___42485;
var fexpr__42417_42488 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__42417_42488.cljs$core$IFn$_invoke$arity$1 ? fexpr__42417_42488.cljs$core$IFn$_invoke$arity$1(new_db_42487) : fexpr__42417_42488.call(null,new_db_42487));
} else {
}

var seq__42418 = cljs.core.seq(effects_without_db);
var chunk__42419 = null;
var count__42420 = (0);
var i__42421 = (0);
while(true){
if((i__42421 < count__42420)){
var vec__42428 = chunk__42419.cljs$core$IIndexed$_nth$arity$2(null,i__42421);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42428,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42428,(1),null);
var temp__5752__auto___42490 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5752__auto___42490)){
var effect_fn_42491 = temp__5752__auto___42490;
(effect_fn_42491.cljs$core$IFn$_invoke$arity$1 ? effect_fn_42491.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_42491.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__42492 = seq__42418;
var G__42493 = chunk__42419;
var G__42494 = count__42420;
var G__42495 = (i__42421 + (1));
seq__42418 = G__42492;
chunk__42419 = G__42493;
count__42420 = G__42494;
i__42421 = G__42495;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__42418);
if(temp__5754__auto__){
var seq__42418__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42418__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__42418__$1);
var G__42496 = cljs.core.chunk_rest(seq__42418__$1);
var G__42497 = c__4649__auto__;
var G__42498 = cljs.core.count(c__4649__auto__);
var G__42499 = (0);
seq__42418 = G__42496;
chunk__42419 = G__42497;
count__42420 = G__42498;
i__42421 = G__42499;
continue;
} else {
var vec__42431 = cljs.core.first(seq__42418__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42431,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42431,(1),null);
var temp__5752__auto___42500 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5752__auto___42500)){
var effect_fn_42501 = temp__5752__auto___42500;
(effect_fn_42501.cljs$core$IFn$_invoke$arity$1 ? effect_fn_42501.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_42501.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__42502 = cljs.core.next(seq__42418__$1);
var G__42503 = null;
var G__42504 = (0);
var G__42505 = (0);
seq__42418 = G__42502;
chunk__42419 = G__42503;
count__42420 = G__42504;
i__42421 = G__42505;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__42434){
var map__42435 = p__42434;
var map__42435__$1 = cljs.core.__destructure_map(map__42435);
var effect = map__42435__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42435__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42435__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__42436 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__42437 = null;
var count__42438 = (0);
var i__42439 = (0);
while(true){
if((i__42439 < count__42438)){
var effect = chunk__42437.cljs$core$IIndexed$_nth$arity$2(null,i__42439);
re_frame.fx.dispatch_later(effect);


var G__42508 = seq__42436;
var G__42509 = chunk__42437;
var G__42510 = count__42438;
var G__42511 = (i__42439 + (1));
seq__42436 = G__42508;
chunk__42437 = G__42509;
count__42438 = G__42510;
i__42439 = G__42511;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__42436);
if(temp__5754__auto__){
var seq__42436__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42436__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__42436__$1);
var G__42512 = cljs.core.chunk_rest(seq__42436__$1);
var G__42513 = c__4649__auto__;
var G__42514 = cljs.core.count(c__4649__auto__);
var G__42515 = (0);
seq__42436 = G__42512;
chunk__42437 = G__42513;
count__42438 = G__42514;
i__42439 = G__42515;
continue;
} else {
var effect = cljs.core.first(seq__42436__$1);
re_frame.fx.dispatch_later(effect);


var G__42516 = cljs.core.next(seq__42436__$1);
var G__42517 = null;
var G__42518 = (0);
var G__42519 = (0);
seq__42436 = G__42516;
chunk__42437 = G__42517;
count__42438 = G__42518;
i__42439 = G__42519;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__42440 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__42441 = null;
var count__42442 = (0);
var i__42443 = (0);
while(true){
if((i__42443 < count__42442)){
var vec__42450 = chunk__42441.cljs$core$IIndexed$_nth$arity$2(null,i__42443);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42450,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42450,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5752__auto___42520 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5752__auto___42520)){
var effect_fn_42521 = temp__5752__auto___42520;
(effect_fn_42521.cljs$core$IFn$_invoke$arity$1 ? effect_fn_42521.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_42521.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__42522 = seq__42440;
var G__42523 = chunk__42441;
var G__42524 = count__42442;
var G__42525 = (i__42443 + (1));
seq__42440 = G__42522;
chunk__42441 = G__42523;
count__42442 = G__42524;
i__42443 = G__42525;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__42440);
if(temp__5754__auto__){
var seq__42440__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42440__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__42440__$1);
var G__42526 = cljs.core.chunk_rest(seq__42440__$1);
var G__42527 = c__4649__auto__;
var G__42528 = cljs.core.count(c__4649__auto__);
var G__42529 = (0);
seq__42440 = G__42526;
chunk__42441 = G__42527;
count__42442 = G__42528;
i__42443 = G__42529;
continue;
} else {
var vec__42453 = cljs.core.first(seq__42440__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42453,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42453,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5752__auto___42530 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5752__auto___42530)){
var effect_fn_42531 = temp__5752__auto___42530;
(effect_fn_42531.cljs$core$IFn$_invoke$arity$1 ? effect_fn_42531.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_42531.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__42532 = cljs.core.next(seq__42440__$1);
var G__42533 = null;
var G__42534 = (0);
var G__42535 = (0);
seq__42440 = G__42532;
chunk__42441 = G__42533;
count__42442 = G__42534;
i__42443 = G__42535;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__42456 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__42457 = null;
var count__42458 = (0);
var i__42459 = (0);
while(true){
if((i__42459 < count__42458)){
var event = chunk__42457.cljs$core$IIndexed$_nth$arity$2(null,i__42459);
re_frame.router.dispatch(event);


var G__42538 = seq__42456;
var G__42539 = chunk__42457;
var G__42540 = count__42458;
var G__42541 = (i__42459 + (1));
seq__42456 = G__42538;
chunk__42457 = G__42539;
count__42458 = G__42540;
i__42459 = G__42541;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__42456);
if(temp__5754__auto__){
var seq__42456__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42456__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__42456__$1);
var G__42542 = cljs.core.chunk_rest(seq__42456__$1);
var G__42543 = c__4649__auto__;
var G__42544 = cljs.core.count(c__4649__auto__);
var G__42545 = (0);
seq__42456 = G__42542;
chunk__42457 = G__42543;
count__42458 = G__42544;
i__42459 = G__42545;
continue;
} else {
var event = cljs.core.first(seq__42456__$1);
re_frame.router.dispatch(event);


var G__42546 = cljs.core.next(seq__42456__$1);
var G__42547 = null;
var G__42548 = (0);
var G__42549 = (0);
seq__42456 = G__42546;
chunk__42457 = G__42547;
count__42458 = G__42548;
i__42459 = G__42549;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__42460 = cljs.core.seq(value);
var chunk__42461 = null;
var count__42462 = (0);
var i__42463 = (0);
while(true){
if((i__42463 < count__42462)){
var event = chunk__42461.cljs$core$IIndexed$_nth$arity$2(null,i__42463);
clear_event(event);


var G__42550 = seq__42460;
var G__42551 = chunk__42461;
var G__42552 = count__42462;
var G__42553 = (i__42463 + (1));
seq__42460 = G__42550;
chunk__42461 = G__42551;
count__42462 = G__42552;
i__42463 = G__42553;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__42460);
if(temp__5754__auto__){
var seq__42460__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42460__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__42460__$1);
var G__42554 = cljs.core.chunk_rest(seq__42460__$1);
var G__42555 = c__4649__auto__;
var G__42556 = cljs.core.count(c__4649__auto__);
var G__42557 = (0);
seq__42460 = G__42554;
chunk__42461 = G__42555;
count__42462 = G__42556;
i__42463 = G__42557;
continue;
} else {
var event = cljs.core.first(seq__42460__$1);
clear_event(event);


var G__42558 = cljs.core.next(seq__42460__$1);
var G__42559 = null;
var G__42560 = (0);
var G__42561 = (0);
seq__42460 = G__42558;
chunk__42461 = G__42559;
count__42462 = G__42560;
i__42463 = G__42561;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
