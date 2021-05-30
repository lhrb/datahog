goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_48789 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_48789(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_48790 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_48790(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__47055 = coll;
var G__47056 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47055,G__47056) : shadow.dom.lazy_native_coll_seq.call(null,G__47055,G__47056));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4223__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__47101 = arguments.length;
switch (G__47101) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__47139 = arguments.length;
switch (G__47139) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__47149 = arguments.length;
switch (G__47149) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__47177 = arguments.length;
switch (G__47177) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__47197 = arguments.length;
switch (G__47197) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__47227 = arguments.length;
switch (G__47227) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e47247){if((e47247 instanceof Object)){
var e = e47247;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47247;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__47276 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47277 = null;
var count__47278 = (0);
var i__47279 = (0);
while(true){
if((i__47279 < count__47278)){
var el = chunk__47277.cljs$core$IIndexed$_nth$arity$2(null,i__47279);
var handler_48799__$1 = ((function (seq__47276,chunk__47277,count__47278,i__47279,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47276,chunk__47277,count__47278,i__47279,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48799__$1);


var G__48800 = seq__47276;
var G__48801 = chunk__47277;
var G__48802 = count__47278;
var G__48803 = (i__47279 + (1));
seq__47276 = G__48800;
chunk__47277 = G__48801;
count__47278 = G__48802;
i__47279 = G__48803;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__47276);
if(temp__5754__auto__){
var seq__47276__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47276__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__47276__$1);
var G__48804 = cljs.core.chunk_rest(seq__47276__$1);
var G__48805 = c__4649__auto__;
var G__48806 = cljs.core.count(c__4649__auto__);
var G__48807 = (0);
seq__47276 = G__48804;
chunk__47277 = G__48805;
count__47278 = G__48806;
i__47279 = G__48807;
continue;
} else {
var el = cljs.core.first(seq__47276__$1);
var handler_48808__$1 = ((function (seq__47276,chunk__47277,count__47278,i__47279,el,seq__47276__$1,temp__5754__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47276,chunk__47277,count__47278,i__47279,el,seq__47276__$1,temp__5754__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_48808__$1);


var G__48809 = cljs.core.next(seq__47276__$1);
var G__48810 = null;
var G__48811 = (0);
var G__48812 = (0);
seq__47276 = G__48809;
chunk__47277 = G__48810;
count__47278 = G__48811;
i__47279 = G__48812;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__47306 = arguments.length;
switch (G__47306) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__47327 = cljs.core.seq(events);
var chunk__47328 = null;
var count__47329 = (0);
var i__47330 = (0);
while(true){
if((i__47330 < count__47329)){
var vec__47356 = chunk__47328.cljs$core$IIndexed$_nth$arity$2(null,i__47330);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47356,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47356,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48818 = seq__47327;
var G__48819 = chunk__47328;
var G__48820 = count__47329;
var G__48821 = (i__47330 + (1));
seq__47327 = G__48818;
chunk__47328 = G__48819;
count__47329 = G__48820;
i__47330 = G__48821;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__47327);
if(temp__5754__auto__){
var seq__47327__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47327__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__47327__$1);
var G__48825 = cljs.core.chunk_rest(seq__47327__$1);
var G__48826 = c__4649__auto__;
var G__48827 = cljs.core.count(c__4649__auto__);
var G__48828 = (0);
seq__47327 = G__48825;
chunk__47328 = G__48826;
count__47329 = G__48827;
i__47330 = G__48828;
continue;
} else {
var vec__47363 = cljs.core.first(seq__47327__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47363,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47363,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48829 = cljs.core.next(seq__47327__$1);
var G__48830 = null;
var G__48831 = (0);
var G__48832 = (0);
seq__47327 = G__48829;
chunk__47328 = G__48830;
count__47329 = G__48831;
i__47330 = G__48832;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__47373 = cljs.core.seq(styles);
var chunk__47374 = null;
var count__47375 = (0);
var i__47376 = (0);
while(true){
if((i__47376 < count__47375)){
var vec__47391 = chunk__47374.cljs$core$IIndexed$_nth$arity$2(null,i__47376);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47391,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47391,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48833 = seq__47373;
var G__48834 = chunk__47374;
var G__48835 = count__47375;
var G__48836 = (i__47376 + (1));
seq__47373 = G__48833;
chunk__47374 = G__48834;
count__47375 = G__48835;
i__47376 = G__48836;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__47373);
if(temp__5754__auto__){
var seq__47373__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47373__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__47373__$1);
var G__48837 = cljs.core.chunk_rest(seq__47373__$1);
var G__48838 = c__4649__auto__;
var G__48839 = cljs.core.count(c__4649__auto__);
var G__48840 = (0);
seq__47373 = G__48837;
chunk__47374 = G__48838;
count__47375 = G__48839;
i__47376 = G__48840;
continue;
} else {
var vec__47403 = cljs.core.first(seq__47373__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47403,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47403,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__48841 = cljs.core.next(seq__47373__$1);
var G__48842 = null;
var G__48843 = (0);
var G__48844 = (0);
seq__47373 = G__48841;
chunk__47374 = G__48842;
count__47375 = G__48843;
i__47376 = G__48844;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__47411_48845 = key;
var G__47411_48846__$1 = (((G__47411_48845 instanceof cljs.core.Keyword))?G__47411_48845.fqn:null);
switch (G__47411_48846__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_48848 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_48848,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_48848,"aria-");
}
})())){
el.setAttribute(ks_48848,value);
} else {
(el[ks_48848] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__47467){
var map__47469 = p__47467;
var map__47469__$1 = cljs.core.__destructure_map(map__47469);
var props = map__47469__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47469__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__47474 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47474,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47474,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47474,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__47477 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__47477,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__47477;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__47480 = arguments.length;
switch (G__47480) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5754__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5754__auto__)){
var n = temp__5754__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5754__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5754__auto__)){
var n = temp__5754__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__47492){
var vec__47493 = p__47492;
var seq__47494 = cljs.core.seq(vec__47493);
var first__47495 = cljs.core.first(seq__47494);
var seq__47494__$1 = cljs.core.next(seq__47494);
var nn = first__47495;
var first__47495__$1 = cljs.core.first(seq__47494__$1);
var seq__47494__$2 = cljs.core.next(seq__47494__$1);
var np = first__47495__$1;
var nc = seq__47494__$2;
var node = vec__47493;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47501 = nn;
var G__47505 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47501,G__47505) : create_fn.call(null,G__47501,G__47505));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47509 = nn;
var G__47510 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47509,G__47510) : create_fn.call(null,G__47509,G__47510));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__47528 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47528,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47528,(1),null);
var seq__47558_48856 = cljs.core.seq(node_children);
var chunk__47559_48857 = null;
var count__47560_48858 = (0);
var i__47561_48859 = (0);
while(true){
if((i__47561_48859 < count__47560_48858)){
var child_struct_48860 = chunk__47559_48857.cljs$core$IIndexed$_nth$arity$2(null,i__47561_48859);
var children_48861 = shadow.dom.dom_node(child_struct_48860);
if(cljs.core.seq_QMARK_(children_48861)){
var seq__47645_48862 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48861));
var chunk__47648_48863 = null;
var count__47649_48864 = (0);
var i__47650_48865 = (0);
while(true){
if((i__47650_48865 < count__47649_48864)){
var child_48866 = chunk__47648_48863.cljs$core$IIndexed$_nth$arity$2(null,i__47650_48865);
if(cljs.core.truth_(child_48866)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48866);


var G__48867 = seq__47645_48862;
var G__48868 = chunk__47648_48863;
var G__48869 = count__47649_48864;
var G__48870 = (i__47650_48865 + (1));
seq__47645_48862 = G__48867;
chunk__47648_48863 = G__48868;
count__47649_48864 = G__48869;
i__47650_48865 = G__48870;
continue;
} else {
var G__48871 = seq__47645_48862;
var G__48872 = chunk__47648_48863;
var G__48873 = count__47649_48864;
var G__48874 = (i__47650_48865 + (1));
seq__47645_48862 = G__48871;
chunk__47648_48863 = G__48872;
count__47649_48864 = G__48873;
i__47650_48865 = G__48874;
continue;
}
} else {
var temp__5754__auto___48875 = cljs.core.seq(seq__47645_48862);
if(temp__5754__auto___48875){
var seq__47645_48876__$1 = temp__5754__auto___48875;
if(cljs.core.chunked_seq_QMARK_(seq__47645_48876__$1)){
var c__4649__auto___48877 = cljs.core.chunk_first(seq__47645_48876__$1);
var G__48878 = cljs.core.chunk_rest(seq__47645_48876__$1);
var G__48879 = c__4649__auto___48877;
var G__48880 = cljs.core.count(c__4649__auto___48877);
var G__48881 = (0);
seq__47645_48862 = G__48878;
chunk__47648_48863 = G__48879;
count__47649_48864 = G__48880;
i__47650_48865 = G__48881;
continue;
} else {
var child_48882 = cljs.core.first(seq__47645_48876__$1);
if(cljs.core.truth_(child_48882)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48882);


var G__48883 = cljs.core.next(seq__47645_48876__$1);
var G__48884 = null;
var G__48885 = (0);
var G__48886 = (0);
seq__47645_48862 = G__48883;
chunk__47648_48863 = G__48884;
count__47649_48864 = G__48885;
i__47650_48865 = G__48886;
continue;
} else {
var G__48887 = cljs.core.next(seq__47645_48876__$1);
var G__48888 = null;
var G__48889 = (0);
var G__48890 = (0);
seq__47645_48862 = G__48887;
chunk__47648_48863 = G__48888;
count__47649_48864 = G__48889;
i__47650_48865 = G__48890;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48861);
}


var G__48891 = seq__47558_48856;
var G__48892 = chunk__47559_48857;
var G__48893 = count__47560_48858;
var G__48894 = (i__47561_48859 + (1));
seq__47558_48856 = G__48891;
chunk__47559_48857 = G__48892;
count__47560_48858 = G__48893;
i__47561_48859 = G__48894;
continue;
} else {
var temp__5754__auto___48895 = cljs.core.seq(seq__47558_48856);
if(temp__5754__auto___48895){
var seq__47558_48896__$1 = temp__5754__auto___48895;
if(cljs.core.chunked_seq_QMARK_(seq__47558_48896__$1)){
var c__4649__auto___48897 = cljs.core.chunk_first(seq__47558_48896__$1);
var G__48898 = cljs.core.chunk_rest(seq__47558_48896__$1);
var G__48899 = c__4649__auto___48897;
var G__48900 = cljs.core.count(c__4649__auto___48897);
var G__48901 = (0);
seq__47558_48856 = G__48898;
chunk__47559_48857 = G__48899;
count__47560_48858 = G__48900;
i__47561_48859 = G__48901;
continue;
} else {
var child_struct_48902 = cljs.core.first(seq__47558_48896__$1);
var children_48903 = shadow.dom.dom_node(child_struct_48902);
if(cljs.core.seq_QMARK_(children_48903)){
var seq__47692_48904 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48903));
var chunk__47694_48905 = null;
var count__47695_48906 = (0);
var i__47696_48907 = (0);
while(true){
if((i__47696_48907 < count__47695_48906)){
var child_48908 = chunk__47694_48905.cljs$core$IIndexed$_nth$arity$2(null,i__47696_48907);
if(cljs.core.truth_(child_48908)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48908);


var G__48910 = seq__47692_48904;
var G__48911 = chunk__47694_48905;
var G__48912 = count__47695_48906;
var G__48913 = (i__47696_48907 + (1));
seq__47692_48904 = G__48910;
chunk__47694_48905 = G__48911;
count__47695_48906 = G__48912;
i__47696_48907 = G__48913;
continue;
} else {
var G__48914 = seq__47692_48904;
var G__48915 = chunk__47694_48905;
var G__48916 = count__47695_48906;
var G__48917 = (i__47696_48907 + (1));
seq__47692_48904 = G__48914;
chunk__47694_48905 = G__48915;
count__47695_48906 = G__48916;
i__47696_48907 = G__48917;
continue;
}
} else {
var temp__5754__auto___48918__$1 = cljs.core.seq(seq__47692_48904);
if(temp__5754__auto___48918__$1){
var seq__47692_48919__$1 = temp__5754__auto___48918__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47692_48919__$1)){
var c__4649__auto___48920 = cljs.core.chunk_first(seq__47692_48919__$1);
var G__48921 = cljs.core.chunk_rest(seq__47692_48919__$1);
var G__48922 = c__4649__auto___48920;
var G__48923 = cljs.core.count(c__4649__auto___48920);
var G__48924 = (0);
seq__47692_48904 = G__48921;
chunk__47694_48905 = G__48922;
count__47695_48906 = G__48923;
i__47696_48907 = G__48924;
continue;
} else {
var child_48925 = cljs.core.first(seq__47692_48919__$1);
if(cljs.core.truth_(child_48925)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48925);


var G__48926 = cljs.core.next(seq__47692_48919__$1);
var G__48927 = null;
var G__48928 = (0);
var G__48929 = (0);
seq__47692_48904 = G__48926;
chunk__47694_48905 = G__48927;
count__47695_48906 = G__48928;
i__47696_48907 = G__48929;
continue;
} else {
var G__48930 = cljs.core.next(seq__47692_48919__$1);
var G__48931 = null;
var G__48932 = (0);
var G__48933 = (0);
seq__47692_48904 = G__48930;
chunk__47694_48905 = G__48931;
count__47695_48906 = G__48932;
i__47696_48907 = G__48933;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48903);
}


var G__48934 = cljs.core.next(seq__47558_48896__$1);
var G__48935 = null;
var G__48936 = (0);
var G__48937 = (0);
seq__47558_48856 = G__48934;
chunk__47559_48857 = G__48935;
count__47560_48858 = G__48936;
i__47561_48859 = G__48937;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__47753 = cljs.core.seq(node);
var chunk__47754 = null;
var count__47755 = (0);
var i__47756 = (0);
while(true){
if((i__47756 < count__47755)){
var n = chunk__47754.cljs$core$IIndexed$_nth$arity$2(null,i__47756);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48940 = seq__47753;
var G__48941 = chunk__47754;
var G__48942 = count__47755;
var G__48943 = (i__47756 + (1));
seq__47753 = G__48940;
chunk__47754 = G__48941;
count__47755 = G__48942;
i__47756 = G__48943;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__47753);
if(temp__5754__auto__){
var seq__47753__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47753__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__47753__$1);
var G__48944 = cljs.core.chunk_rest(seq__47753__$1);
var G__48945 = c__4649__auto__;
var G__48946 = cljs.core.count(c__4649__auto__);
var G__48947 = (0);
seq__47753 = G__48944;
chunk__47754 = G__48945;
count__47755 = G__48946;
i__47756 = G__48947;
continue;
} else {
var n = cljs.core.first(seq__47753__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48948 = cljs.core.next(seq__47753__$1);
var G__48949 = null;
var G__48950 = (0);
var G__48951 = (0);
seq__47753 = G__48948;
chunk__47754 = G__48949;
count__47755 = G__48950;
i__47756 = G__48951;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__47799 = arguments.length;
switch (G__47799) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__47802 = arguments.length;
switch (G__47802) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__47840 = arguments.length;
switch (G__47840) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4223__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4835__auto__ = [];
var len__4829__auto___48961 = arguments.length;
var i__4830__auto___48962 = (0);
while(true){
if((i__4830__auto___48962 < len__4829__auto___48961)){
args__4835__auto__.push((arguments[i__4830__auto___48962]));

var G__48963 = (i__4830__auto___48962 + (1));
i__4830__auto___48962 = G__48963;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__47903_48964 = cljs.core.seq(nodes);
var chunk__47904_48965 = null;
var count__47905_48966 = (0);
var i__47906_48967 = (0);
while(true){
if((i__47906_48967 < count__47905_48966)){
var node_48968 = chunk__47904_48965.cljs$core$IIndexed$_nth$arity$2(null,i__47906_48967);
fragment.appendChild(shadow.dom._to_dom(node_48968));


var G__48969 = seq__47903_48964;
var G__48970 = chunk__47904_48965;
var G__48971 = count__47905_48966;
var G__48972 = (i__47906_48967 + (1));
seq__47903_48964 = G__48969;
chunk__47904_48965 = G__48970;
count__47905_48966 = G__48971;
i__47906_48967 = G__48972;
continue;
} else {
var temp__5754__auto___48973 = cljs.core.seq(seq__47903_48964);
if(temp__5754__auto___48973){
var seq__47903_48974__$1 = temp__5754__auto___48973;
if(cljs.core.chunked_seq_QMARK_(seq__47903_48974__$1)){
var c__4649__auto___48975 = cljs.core.chunk_first(seq__47903_48974__$1);
var G__48976 = cljs.core.chunk_rest(seq__47903_48974__$1);
var G__48977 = c__4649__auto___48975;
var G__48978 = cljs.core.count(c__4649__auto___48975);
var G__48979 = (0);
seq__47903_48964 = G__48976;
chunk__47904_48965 = G__48977;
count__47905_48966 = G__48978;
i__47906_48967 = G__48979;
continue;
} else {
var node_48980 = cljs.core.first(seq__47903_48974__$1);
fragment.appendChild(shadow.dom._to_dom(node_48980));


var G__48981 = cljs.core.next(seq__47903_48974__$1);
var G__48982 = null;
var G__48983 = (0);
var G__48984 = (0);
seq__47903_48964 = G__48981;
chunk__47904_48965 = G__48982;
count__47905_48966 = G__48983;
i__47906_48967 = G__48984;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq47894){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47894));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__47916_48986 = cljs.core.seq(scripts);
var chunk__47917_48987 = null;
var count__47918_48988 = (0);
var i__47919_48989 = (0);
while(true){
if((i__47919_48989 < count__47918_48988)){
var vec__47939_48990 = chunk__47917_48987.cljs$core$IIndexed$_nth$arity$2(null,i__47919_48989);
var script_tag_48991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47939_48990,(0),null);
var script_body_48992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47939_48990,(1),null);
eval(script_body_48992);


var G__48993 = seq__47916_48986;
var G__48994 = chunk__47917_48987;
var G__48995 = count__47918_48988;
var G__48996 = (i__47919_48989 + (1));
seq__47916_48986 = G__48993;
chunk__47917_48987 = G__48994;
count__47918_48988 = G__48995;
i__47919_48989 = G__48996;
continue;
} else {
var temp__5754__auto___48997 = cljs.core.seq(seq__47916_48986);
if(temp__5754__auto___48997){
var seq__47916_48998__$1 = temp__5754__auto___48997;
if(cljs.core.chunked_seq_QMARK_(seq__47916_48998__$1)){
var c__4649__auto___48999 = cljs.core.chunk_first(seq__47916_48998__$1);
var G__49000 = cljs.core.chunk_rest(seq__47916_48998__$1);
var G__49001 = c__4649__auto___48999;
var G__49002 = cljs.core.count(c__4649__auto___48999);
var G__49003 = (0);
seq__47916_48986 = G__49000;
chunk__47917_48987 = G__49001;
count__47918_48988 = G__49002;
i__47919_48989 = G__49003;
continue;
} else {
var vec__47949_49004 = cljs.core.first(seq__47916_48998__$1);
var script_tag_49005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47949_49004,(0),null);
var script_body_49006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47949_49004,(1),null);
eval(script_body_49006);


var G__49008 = cljs.core.next(seq__47916_48998__$1);
var G__49009 = null;
var G__49010 = (0);
var G__49011 = (0);
seq__47916_48986 = G__49008;
chunk__47917_48987 = G__49009;
count__47918_48988 = G__49010;
i__47919_48989 = G__49011;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__47958){
var vec__47960 = p__47958;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47960,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47960,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__47994 = arguments.length;
switch (G__47994) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__48016 = cljs.core.seq(style_keys);
var chunk__48017 = null;
var count__48018 = (0);
var i__48019 = (0);
while(true){
if((i__48019 < count__48018)){
var it = chunk__48017.cljs$core$IIndexed$_nth$arity$2(null,i__48019);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__49021 = seq__48016;
var G__49022 = chunk__48017;
var G__49023 = count__48018;
var G__49024 = (i__48019 + (1));
seq__48016 = G__49021;
chunk__48017 = G__49022;
count__48018 = G__49023;
i__48019 = G__49024;
continue;
} else {
var temp__5754__auto__ = cljs.core.seq(seq__48016);
if(temp__5754__auto__){
var seq__48016__$1 = temp__5754__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48016__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__48016__$1);
var G__49025 = cljs.core.chunk_rest(seq__48016__$1);
var G__49026 = c__4649__auto__;
var G__49027 = cljs.core.count(c__4649__auto__);
var G__49028 = (0);
seq__48016 = G__49025;
chunk__48017 = G__49026;
count__48018 = G__49027;
i__48019 = G__49028;
continue;
} else {
var it = cljs.core.first(seq__48016__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__49029 = cljs.core.next(seq__48016__$1);
var G__49030 = null;
var G__49031 = (0);
var G__49032 = (0);
seq__48016 = G__49029;
chunk__48017 = G__49030;
count__48018 = G__49031;
i__48019 = G__49032;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k48039,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__48071 = k48039;
var G__48071__$1 = (((G__48071 instanceof cljs.core.Keyword))?G__48071.fqn:null);
switch (G__48071__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48039,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__48086){
var vec__48089 = p__48086;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48089,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48089,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48038){
var self__ = this;
var G__48038__$1 = this;
return (new cljs.core.RecordIter((0),G__48038__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48040,other48041){
var self__ = this;
var this48040__$1 = this;
return (((!((other48041 == null)))) && ((((this48040__$1.constructor === other48041.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48040__$1.x,other48041.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48040__$1.y,other48041.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48040__$1.__extmap,other48041.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k48039){
var self__ = this;
var this__4479__auto____$1 = this;
var G__48210 = k48039;
var G__48210__$1 = (((G__48210 instanceof cljs.core.Keyword))?G__48210.fqn:null);
switch (G__48210__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k48039);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__48038){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__48218 = cljs.core.keyword_identical_QMARK_;
var expr__48219 = k__4481__auto__;
if(cljs.core.truth_((pred__48218.cljs$core$IFn$_invoke$arity$2 ? pred__48218.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__48219) : pred__48218.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__48219)))){
return (new shadow.dom.Coordinate(G__48038,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48218.cljs$core$IFn$_invoke$arity$2 ? pred__48218.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__48219) : pred__48218.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__48219)))){
return (new shadow.dom.Coordinate(self__.x,G__48038,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__48038),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__48038){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__48038,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__48049){
var extmap__4512__auto__ = (function (){var G__48272 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48049,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__48049)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48272);
} else {
return G__48272;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__48049),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__48049),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k48322,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__48355 = k48322;
var G__48355__$1 = (((G__48355 instanceof cljs.core.Keyword))?G__48355.fqn:null);
switch (G__48355__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48322,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__48367){
var vec__48368 = p__48367;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48368,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48368,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Size{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48321){
var self__ = this;
var G__48321__$1 = this;
return (new cljs.core.RecordIter((0),G__48321__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48323,other48324){
var self__ = this;
var this48323__$1 = this;
return (((!((other48324 == null)))) && ((((this48323__$1.constructor === other48324.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48323__$1.w,other48324.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48323__$1.h,other48324.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48323__$1.__extmap,other48324.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k48322){
var self__ = this;
var this__4479__auto____$1 = this;
var G__48423 = k48322;
var G__48423__$1 = (((G__48423 instanceof cljs.core.Keyword))?G__48423.fqn:null);
switch (G__48423__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k48322);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__48321){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__48427 = cljs.core.keyword_identical_QMARK_;
var expr__48428 = k__4481__auto__;
if(cljs.core.truth_((pred__48427.cljs$core$IFn$_invoke$arity$2 ? pred__48427.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__48428) : pred__48427.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__48428)))){
return (new shadow.dom.Size(G__48321,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__48427.cljs$core$IFn$_invoke$arity$2 ? pred__48427.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__48428) : pred__48427.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__48428)))){
return (new shadow.dom.Size(self__.w,G__48321,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__48321),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__48321){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__48321,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__48333){
var extmap__4512__auto__ = (function (){var G__48472 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48333,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__48333)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48472);
} else {
return G__48472;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__48333),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__48333),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4703__auto__ = opts;
var l__4704__auto__ = a__4703__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4704__auto__)){
var G__49082 = (i + (1));
var G__49083 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__49082;
ret = G__49083;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48518){
var vec__48519 = p__48518;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48519,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48519,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__48535 = arguments.length;
switch (G__48535) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5752__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5752__auto__)){
var child = temp__5752__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__49097 = ps;
var G__49098 = (i + (1));
el__$1 = G__49097;
i = G__49098;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__48571 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48571,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48571,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48571,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__48577_49105 = cljs.core.seq(props);
var chunk__48583_49106 = null;
var count__48584_49107 = (0);
var i__48585_49108 = (0);
while(true){
if((i__48585_49108 < count__48584_49107)){
var vec__48607_49109 = chunk__48583_49106.cljs$core$IIndexed$_nth$arity$2(null,i__48585_49108);
var k_49110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48607_49109,(0),null);
var v_49111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48607_49109,(1),null);
el.setAttributeNS((function (){var temp__5754__auto__ = cljs.core.namespace(k_49110);
if(cljs.core.truth_(temp__5754__auto__)){
var ns = temp__5754__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49110),v_49111);


var G__49113 = seq__48577_49105;
var G__49114 = chunk__48583_49106;
var G__49115 = count__48584_49107;
var G__49116 = (i__48585_49108 + (1));
seq__48577_49105 = G__49113;
chunk__48583_49106 = G__49114;
count__48584_49107 = G__49115;
i__48585_49108 = G__49116;
continue;
} else {
var temp__5754__auto___49117 = cljs.core.seq(seq__48577_49105);
if(temp__5754__auto___49117){
var seq__48577_49118__$1 = temp__5754__auto___49117;
if(cljs.core.chunked_seq_QMARK_(seq__48577_49118__$1)){
var c__4649__auto___49119 = cljs.core.chunk_first(seq__48577_49118__$1);
var G__49120 = cljs.core.chunk_rest(seq__48577_49118__$1);
var G__49121 = c__4649__auto___49119;
var G__49122 = cljs.core.count(c__4649__auto___49119);
var G__49123 = (0);
seq__48577_49105 = G__49120;
chunk__48583_49106 = G__49121;
count__48584_49107 = G__49122;
i__48585_49108 = G__49123;
continue;
} else {
var vec__48625_49124 = cljs.core.first(seq__48577_49118__$1);
var k_49125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48625_49124,(0),null);
var v_49126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48625_49124,(1),null);
el.setAttributeNS((function (){var temp__5754__auto____$1 = cljs.core.namespace(k_49125);
if(cljs.core.truth_(temp__5754__auto____$1)){
var ns = temp__5754__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49125),v_49126);


var G__49127 = cljs.core.next(seq__48577_49118__$1);
var G__49128 = null;
var G__49129 = (0);
var G__49130 = (0);
seq__48577_49105 = G__49127;
chunk__48583_49106 = G__49128;
count__48584_49107 = G__49129;
i__48585_49108 = G__49130;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__48636 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48636,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48636,(1),null);
var seq__48641_49131 = cljs.core.seq(node_children);
var chunk__48643_49132 = null;
var count__48644_49133 = (0);
var i__48645_49134 = (0);
while(true){
if((i__48645_49134 < count__48644_49133)){
var child_struct_49136 = chunk__48643_49132.cljs$core$IIndexed$_nth$arity$2(null,i__48645_49134);
if((!((child_struct_49136 == null)))){
if(typeof child_struct_49136 === 'string'){
var text_49137 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49137),child_struct_49136].join(''));
} else {
var children_49138 = shadow.dom.svg_node(child_struct_49136);
if(cljs.core.seq_QMARK_(children_49138)){
var seq__48714_49139 = cljs.core.seq(children_49138);
var chunk__48716_49140 = null;
var count__48717_49141 = (0);
var i__48718_49142 = (0);
while(true){
if((i__48718_49142 < count__48717_49141)){
var child_49145 = chunk__48716_49140.cljs$core$IIndexed$_nth$arity$2(null,i__48718_49142);
if(cljs.core.truth_(child_49145)){
node.appendChild(child_49145);


var G__49147 = seq__48714_49139;
var G__49148 = chunk__48716_49140;
var G__49149 = count__48717_49141;
var G__49150 = (i__48718_49142 + (1));
seq__48714_49139 = G__49147;
chunk__48716_49140 = G__49148;
count__48717_49141 = G__49149;
i__48718_49142 = G__49150;
continue;
} else {
var G__49151 = seq__48714_49139;
var G__49152 = chunk__48716_49140;
var G__49153 = count__48717_49141;
var G__49154 = (i__48718_49142 + (1));
seq__48714_49139 = G__49151;
chunk__48716_49140 = G__49152;
count__48717_49141 = G__49153;
i__48718_49142 = G__49154;
continue;
}
} else {
var temp__5754__auto___49155 = cljs.core.seq(seq__48714_49139);
if(temp__5754__auto___49155){
var seq__48714_49156__$1 = temp__5754__auto___49155;
if(cljs.core.chunked_seq_QMARK_(seq__48714_49156__$1)){
var c__4649__auto___49157 = cljs.core.chunk_first(seq__48714_49156__$1);
var G__49159 = cljs.core.chunk_rest(seq__48714_49156__$1);
var G__49160 = c__4649__auto___49157;
var G__49161 = cljs.core.count(c__4649__auto___49157);
var G__49162 = (0);
seq__48714_49139 = G__49159;
chunk__48716_49140 = G__49160;
count__48717_49141 = G__49161;
i__48718_49142 = G__49162;
continue;
} else {
var child_49163 = cljs.core.first(seq__48714_49156__$1);
if(cljs.core.truth_(child_49163)){
node.appendChild(child_49163);


var G__49165 = cljs.core.next(seq__48714_49156__$1);
var G__49166 = null;
var G__49167 = (0);
var G__49168 = (0);
seq__48714_49139 = G__49165;
chunk__48716_49140 = G__49166;
count__48717_49141 = G__49167;
i__48718_49142 = G__49168;
continue;
} else {
var G__49169 = cljs.core.next(seq__48714_49156__$1);
var G__49170 = null;
var G__49171 = (0);
var G__49172 = (0);
seq__48714_49139 = G__49169;
chunk__48716_49140 = G__49170;
count__48717_49141 = G__49171;
i__48718_49142 = G__49172;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49138);
}
}


var G__49173 = seq__48641_49131;
var G__49174 = chunk__48643_49132;
var G__49175 = count__48644_49133;
var G__49176 = (i__48645_49134 + (1));
seq__48641_49131 = G__49173;
chunk__48643_49132 = G__49174;
count__48644_49133 = G__49175;
i__48645_49134 = G__49176;
continue;
} else {
var G__49177 = seq__48641_49131;
var G__49178 = chunk__48643_49132;
var G__49179 = count__48644_49133;
var G__49180 = (i__48645_49134 + (1));
seq__48641_49131 = G__49177;
chunk__48643_49132 = G__49178;
count__48644_49133 = G__49179;
i__48645_49134 = G__49180;
continue;
}
} else {
var temp__5754__auto___49181 = cljs.core.seq(seq__48641_49131);
if(temp__5754__auto___49181){
var seq__48641_49182__$1 = temp__5754__auto___49181;
if(cljs.core.chunked_seq_QMARK_(seq__48641_49182__$1)){
var c__4649__auto___49183 = cljs.core.chunk_first(seq__48641_49182__$1);
var G__49184 = cljs.core.chunk_rest(seq__48641_49182__$1);
var G__49185 = c__4649__auto___49183;
var G__49186 = cljs.core.count(c__4649__auto___49183);
var G__49187 = (0);
seq__48641_49131 = G__49184;
chunk__48643_49132 = G__49185;
count__48644_49133 = G__49186;
i__48645_49134 = G__49187;
continue;
} else {
var child_struct_49188 = cljs.core.first(seq__48641_49182__$1);
if((!((child_struct_49188 == null)))){
if(typeof child_struct_49188 === 'string'){
var text_49189 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49189),child_struct_49188].join(''));
} else {
var children_49190 = shadow.dom.svg_node(child_struct_49188);
if(cljs.core.seq_QMARK_(children_49190)){
var seq__48747_49191 = cljs.core.seq(children_49190);
var chunk__48749_49192 = null;
var count__48750_49193 = (0);
var i__48751_49194 = (0);
while(true){
if((i__48751_49194 < count__48750_49193)){
var child_49195 = chunk__48749_49192.cljs$core$IIndexed$_nth$arity$2(null,i__48751_49194);
if(cljs.core.truth_(child_49195)){
node.appendChild(child_49195);


var G__49196 = seq__48747_49191;
var G__49197 = chunk__48749_49192;
var G__49198 = count__48750_49193;
var G__49199 = (i__48751_49194 + (1));
seq__48747_49191 = G__49196;
chunk__48749_49192 = G__49197;
count__48750_49193 = G__49198;
i__48751_49194 = G__49199;
continue;
} else {
var G__49200 = seq__48747_49191;
var G__49201 = chunk__48749_49192;
var G__49202 = count__48750_49193;
var G__49203 = (i__48751_49194 + (1));
seq__48747_49191 = G__49200;
chunk__48749_49192 = G__49201;
count__48750_49193 = G__49202;
i__48751_49194 = G__49203;
continue;
}
} else {
var temp__5754__auto___49204__$1 = cljs.core.seq(seq__48747_49191);
if(temp__5754__auto___49204__$1){
var seq__48747_49205__$1 = temp__5754__auto___49204__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48747_49205__$1)){
var c__4649__auto___49206 = cljs.core.chunk_first(seq__48747_49205__$1);
var G__49207 = cljs.core.chunk_rest(seq__48747_49205__$1);
var G__49208 = c__4649__auto___49206;
var G__49209 = cljs.core.count(c__4649__auto___49206);
var G__49210 = (0);
seq__48747_49191 = G__49207;
chunk__48749_49192 = G__49208;
count__48750_49193 = G__49209;
i__48751_49194 = G__49210;
continue;
} else {
var child_49211 = cljs.core.first(seq__48747_49205__$1);
if(cljs.core.truth_(child_49211)){
node.appendChild(child_49211);


var G__49212 = cljs.core.next(seq__48747_49205__$1);
var G__49213 = null;
var G__49214 = (0);
var G__49215 = (0);
seq__48747_49191 = G__49212;
chunk__48749_49192 = G__49213;
count__48750_49193 = G__49214;
i__48751_49194 = G__49215;
continue;
} else {
var G__49217 = cljs.core.next(seq__48747_49205__$1);
var G__49218 = null;
var G__49219 = (0);
var G__49220 = (0);
seq__48747_49191 = G__49217;
chunk__48749_49192 = G__49218;
count__48750_49193 = G__49219;
i__48751_49194 = G__49220;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49190);
}
}


var G__49224 = cljs.core.next(seq__48641_49182__$1);
var G__49225 = null;
var G__49226 = (0);
var G__49227 = (0);
seq__48641_49131 = G__49224;
chunk__48643_49132 = G__49225;
count__48644_49133 = G__49226;
i__48645_49134 = G__49227;
continue;
} else {
var G__49228 = cljs.core.next(seq__48641_49182__$1);
var G__49229 = null;
var G__49230 = (0);
var G__49231 = (0);
seq__48641_49131 = G__49228;
chunk__48643_49132 = G__49229;
count__48644_49133 = G__49230;
i__48645_49134 = G__49231;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___49254 = arguments.length;
var i__4830__auto___49255 = (0);
while(true){
if((i__4830__auto___49255 < len__4829__auto___49254)){
args__4835__auto__.push((arguments[i__4830__auto___49255]));

var G__49256 = (i__4830__auto___49255 + (1));
i__4830__auto___49255 = G__49256;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq48757){
var G__48758 = cljs.core.first(seq48757);
var seq48757__$1 = cljs.core.next(seq48757);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48758,seq48757__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__48760 = arguments.length;
switch (G__48760) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4221__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4221__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4221__auto__;
}
})())){
var c__43519__auto___49290 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43520__auto__ = (function (){var switch__42921__auto__ = (function (state_48769){
var state_val_48770 = (state_48769[(1)]);
if((state_val_48770 === (1))){
var state_48769__$1 = state_48769;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48769__$1,(2),once_or_cleanup);
} else {
if((state_val_48770 === (2))){
var inst_48766 = (state_48769[(2)]);
var inst_48767 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48769__$1 = (function (){var statearr_48774 = state_48769;
(statearr_48774[(7)] = inst_48766);

return statearr_48774;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48769__$1,inst_48767);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__42922__auto__ = null;
var shadow$dom$state_machine__42922__auto____0 = (function (){
var statearr_48775 = [null,null,null,null,null,null,null,null];
(statearr_48775[(0)] = shadow$dom$state_machine__42922__auto__);

(statearr_48775[(1)] = (1));

return statearr_48775;
});
var shadow$dom$state_machine__42922__auto____1 = (function (state_48769){
while(true){
var ret_value__42923__auto__ = (function (){try{while(true){
var result__42924__auto__ = switch__42921__auto__(state_48769);
if(cljs.core.keyword_identical_QMARK_(result__42924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42924__auto__;
}
break;
}
}catch (e48776){var ex__42925__auto__ = e48776;
var statearr_48777_49320 = state_48769;
(statearr_48777_49320[(2)] = ex__42925__auto__);


if(cljs.core.seq((state_48769[(4)]))){
var statearr_48778_49324 = state_48769;
(statearr_48778_49324[(1)] = cljs.core.first((state_48769[(4)])));

} else {
throw ex__42925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49329 = state_48769;
state_48769 = G__49329;
continue;
} else {
return ret_value__42923__auto__;
}
break;
}
});
shadow$dom$state_machine__42922__auto__ = function(state_48769){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__42922__auto____0.call(this);
case 1:
return shadow$dom$state_machine__42922__auto____1.call(this,state_48769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__42922__auto____0;
shadow$dom$state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__42922__auto____1;
return shadow$dom$state_machine__42922__auto__;
})()
})();
var state__43521__auto__ = (function (){var statearr_48779 = f__43520__auto__();
(statearr_48779[(6)] = c__43519__auto___49290);

return statearr_48779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43521__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
