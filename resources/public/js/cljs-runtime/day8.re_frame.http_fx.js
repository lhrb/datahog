goog.provide('day8.re_frame.http_fx');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__47823){
var vec__47824 = p__47823;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47824,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47824,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__47829){
var map__47830 = p__47829;
var map__47830__$1 = cljs.core.__destructure_map(map__47830);
var request = map__47830__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47830__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47830__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,new cljs.core.Keyword(null,"api","api",-899839580),api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,(function (p1__47827_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__47827_SHARP_));
}),(function (p1__47828_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__47828_SHARP_));
}),api)], 0)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.Keyword(null,"on-request","on-request",972531605)], 0));
});
day8.re_frame.http_fx.dispatch_on_request = (function day8$re_frame$http_fx$dispatch_on_request(request,xhrio){
var temp__5752__auto__ = new cljs.core.Keyword(null,"on-request","on-request",972531605).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5752__auto__)){
var on_request = temp__5752__auto__;
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_request,xhrio));
} else {
return null;
}
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__47831 = cljs.core.seq(seq_request_maps);
var chunk__47832 = null;
var count__47833 = (0);
var i__47834 = (0);
while(true){
if((i__47834 < count__47833)){
var request__$1 = chunk__47832.cljs$core$IIndexed$_nth$arity$2(null,i__47834);
var xhrio_47835 = ajax.simple.ajax_request(day8.re_frame.http_fx.request__GT_xhrio_options(request__$1));
day8.re_frame.http_fx.dispatch_on_request(request__$1,xhrio_47835);


var G__47836 = seq__47831;
var G__47837 = chunk__47832;
var G__47838 = count__47833;
var G__47839 = (i__47834 + (1));
seq__47831 = G__47836;
chunk__47832 = G__47837;
count__47833 = G__47838;
i__47834 = G__47839;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__47831);
if(temp__5754__auto__){
var seq__47831__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47831__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__47831__$1);
var G__47840 = cljs.core.chunk_rest(seq__47831__$1);
var G__47841 = c__4649__auto__;
var G__47842 = cljs.core.count(c__4649__auto__);
var G__47843 = (0);
seq__47831 = G__47840;
chunk__47832 = G__47841;
count__47833 = G__47842;
i__47834 = G__47843;
continue;
} else {
var request__$1 = cljs.core.first(seq__47831__$1);
var xhrio_47844 = ajax.simple.ajax_request(day8.re_frame.http_fx.request__GT_xhrio_options(request__$1));
day8.re_frame.http_fx.dispatch_on_request(request__$1,xhrio_47844);


var G__47845 = cljs.core.next(seq__47831__$1);
var G__47846 = null;
var G__47847 = (0);
var G__47848 = (0);
seq__47831 = G__47845;
chunk__47832 = G__47846;
count__47833 = G__47847;
i__47834 = G__47848;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect);

//# sourceMappingURL=day8.re_frame.http_fx.js.map
