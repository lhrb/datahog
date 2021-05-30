goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__47173 = e.target.readyState;
var fexpr__47172 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__47172.cljs$core$IFn$_invoke$arity$1 ? fexpr__47172.cljs$core$IFn$_invoke$arity$1(G__47173) : fexpr__47172.call(null,G__47173));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__47202,handler){
var map__47203 = p__47202;
var map__47203__$1 = cljs.core.__destructure_map(map__47203);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47203__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47203__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47203__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47203__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47203__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47203__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47203__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__47188_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__47188_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5754__auto___47243 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5754__auto___47243)){
var response_type_47244 = temp__5754__auto___47243;
(this$__$1.responseType = cljs.core.name(response_type_47244));
} else {
}

var seq__47206_47245 = cljs.core.seq(headers);
var chunk__47207_47246 = null;
var count__47208_47247 = (0);
var i__47209_47248 = (0);
while(true){
if((i__47209_47248 < count__47208_47247)){
var vec__47226_47249 = chunk__47207_47246.cljs$core$IIndexed$_nth$arity$2(null,i__47209_47248);
var k_47250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47226_47249,(0),null);
var v_47251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47226_47249,(1),null);
this$__$1.setRequestHeader(k_47250,v_47251);


var G__47252 = seq__47206_47245;
var G__47253 = chunk__47207_47246;
var G__47254 = count__47208_47247;
var G__47255 = (i__47209_47248 + (1));
seq__47206_47245 = G__47252;
chunk__47207_47246 = G__47253;
count__47208_47247 = G__47254;
i__47209_47248 = G__47255;
continue;
} else {
var temp__5754__auto___47257 = cljs.core.seq(seq__47206_47245);
if(temp__5754__auto___47257){
var seq__47206_47258__$1 = temp__5754__auto___47257;
if(cljs.core.chunked_seq_QMARK_(seq__47206_47258__$1)){
var c__4649__auto___47259 = cljs.core.chunk_first(seq__47206_47258__$1);
var G__47260 = cljs.core.chunk_rest(seq__47206_47258__$1);
var G__47261 = c__4649__auto___47259;
var G__47262 = cljs.core.count(c__4649__auto___47259);
var G__47263 = (0);
seq__47206_47245 = G__47260;
chunk__47207_47246 = G__47261;
count__47208_47247 = G__47262;
i__47209_47248 = G__47263;
continue;
} else {
var vec__47234_47264 = cljs.core.first(seq__47206_47258__$1);
var k_47265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47234_47264,(0),null);
var v_47266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47234_47264,(1),null);
this$__$1.setRequestHeader(k_47265,v_47266);


var G__47267 = cljs.core.next(seq__47206_47258__$1);
var G__47268 = null;
var G__47269 = (0);
var G__47270 = (0);
seq__47206_47245 = G__47267;
chunk__47207_47246 = G__47268;
count__47208_47247 = G__47269;
i__47209_47248 = G__47270;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4223__auto__ = body;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
