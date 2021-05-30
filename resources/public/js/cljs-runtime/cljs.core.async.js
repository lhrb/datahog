goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__43583 = arguments.length;
switch (G__43583) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43584 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43584 = (function (f,blockable,meta43585){
this.f = f;
this.blockable = blockable;
this.meta43585 = meta43585;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43586,meta43585__$1){
var self__ = this;
var _43586__$1 = this;
return (new cljs.core.async.t_cljs$core$async43584(self__.f,self__.blockable,meta43585__$1));
}));

(cljs.core.async.t_cljs$core$async43584.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43586){
var self__ = this;
var _43586__$1 = this;
return self__.meta43585;
}));

(cljs.core.async.t_cljs$core$async43584.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43584.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43584.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async43584.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async43584.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta43585","meta43585",-1387595787,null)], null);
}));

(cljs.core.async.t_cljs$core$async43584.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43584.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43584");

(cljs.core.async.t_cljs$core$async43584.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async43584");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43584.
 */
cljs.core.async.__GT_t_cljs$core$async43584 = (function cljs$core$async$__GT_t_cljs$core$async43584(f__$1,blockable__$1,meta43585){
return (new cljs.core.async.t_cljs$core$async43584(f__$1,blockable__$1,meta43585));
});

}

return (new cljs.core.async.t_cljs$core$async43584(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__43605 = arguments.length;
switch (G__43605) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__43621 = arguments.length;
switch (G__43621) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__43630 = arguments.length;
switch (G__43630) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_46971 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46971) : fn1.call(null,val_46971));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46971) : fn1.call(null,val_46971));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__43642 = arguments.length;
switch (G__43642) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5752__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5752__auto__)){
var ret = temp__5752__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5752__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5752__auto__)){
var retb = temp__5752__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4706__auto___46989 = n;
var x_46991 = (0);
while(true){
if((x_46991 < n__4706__auto___46989)){
(a[x_46991] = x_46991);

var G__46992 = (x_46991 + (1));
x_46991 = G__46992;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43660 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43660 = (function (flag,meta43661){
this.flag = flag;
this.meta43661 = meta43661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43662,meta43661__$1){
var self__ = this;
var _43662__$1 = this;
return (new cljs.core.async.t_cljs$core$async43660(self__.flag,meta43661__$1));
}));

(cljs.core.async.t_cljs$core$async43660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43662){
var self__ = this;
var _43662__$1 = this;
return self__.meta43661;
}));

(cljs.core.async.t_cljs$core$async43660.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43660.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43660.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43660.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async43660.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta43661","meta43661",1051332534,null)], null);
}));

(cljs.core.async.t_cljs$core$async43660.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43660.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43660");

(cljs.core.async.t_cljs$core$async43660.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async43660");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43660.
 */
cljs.core.async.__GT_t_cljs$core$async43660 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async43660(flag__$1,meta43661){
return (new cljs.core.async.t_cljs$core$async43660(flag__$1,meta43661));
});

}

return (new cljs.core.async.t_cljs$core$async43660(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43695 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43695 = (function (flag,cb,meta43696){
this.flag = flag;
this.cb = cb;
this.meta43696 = meta43696;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43697,meta43696__$1){
var self__ = this;
var _43697__$1 = this;
return (new cljs.core.async.t_cljs$core$async43695(self__.flag,self__.cb,meta43696__$1));
}));

(cljs.core.async.t_cljs$core$async43695.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43697){
var self__ = this;
var _43697__$1 = this;
return self__.meta43696;
}));

(cljs.core.async.t_cljs$core$async43695.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43695.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async43695.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43695.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async43695.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta43696","meta43696",-927532601,null)], null);
}));

(cljs.core.async.t_cljs$core$async43695.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43695.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43695");

(cljs.core.async.t_cljs$core$async43695.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async43695");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43695.
 */
cljs.core.async.__GT_t_cljs$core$async43695 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async43695(flag__$1,cb__$1,meta43696){
return (new cljs.core.async.t_cljs$core$async43695(flag__$1,cb__$1,meta43696));
});

}

return (new cljs.core.async.t_cljs$core$async43695(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43728_SHARP_){
var G__43740 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43728_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43740) : fret.call(null,G__43740));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43729_SHARP_){
var G__43741 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43729_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__43741) : fret.call(null,G__43741));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4223__auto__ = wport;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return port;
}
})()], null));
} else {
var G__47031 = (i + (1));
i = G__47031;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4223__auto__ = ret;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5754__auto__ = (function (){var and__4221__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4221__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5754__auto__)){
var got = temp__5754__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___47044 = arguments.length;
var i__4830__auto___47045 = (0);
while(true){
if((i__4830__auto___47045 < len__4829__auto___47044)){
args__4835__auto__.push((arguments[i__4830__auto___47045]));

var G__47049 = (i__4830__auto___47045 + (1));
i__4830__auto___47045 = G__47049;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43761){
var map__43762 = p__43761;
var map__43762__$1 = cljs.core.__destructure_map(map__43762);
var opts = map__43762__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43748){
var G__43749 = cljs.core.first(seq43748);
var seq43748__$1 = cljs.core.next(seq43748);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43749,seq43748__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__43790 = arguments.length;
switch (G__43790) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__43519__auto___47065 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43520__auto__ = (function (){var switch__42921__auto__ = (function (state_43846){
var state_val_43847 = (state_43846[(1)]);
if((state_val_43847 === (7))){
var inst_43842 = (state_43846[(2)]);
var state_43846__$1 = state_43846;
var statearr_43849_47067 = state_43846__$1;
(statearr_43849_47067[(2)] = inst_43842);

(statearr_43849_47067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43847 === (1))){
var state_43846__$1 = state_43846;
var statearr_43850_47068 = state_43846__$1;
(statearr_43850_47068[(2)] = null);

(statearr_43850_47068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43847 === (4))){
var inst_43813 = (state_43846[(7)]);
var inst_43813__$1 = (state_43846[(2)]);
var inst_43814 = (inst_43813__$1 == null);
var state_43846__$1 = (function (){var statearr_43859 = state_43846;
(statearr_43859[(7)] = inst_43813__$1);

return statearr_43859;
})();
if(cljs.core.truth_(inst_43814)){
var statearr_43860_47069 = state_43846__$1;
(statearr_43860_47069[(1)] = (5));

} else {
var statearr_43861_47070 = state_43846__$1;
(statearr_43861_47070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43847 === (13))){
var state_43846__$1 = state_43846;
var statearr_43862_47071 = state_43846__$1;
(statearr_43862_47071[(2)] = null);

(statearr_43862_47071[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43847 === (6))){
var inst_43813 = (state_43846[(7)]);
var state_43846__$1 = state_43846;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43846__$1,(11),to,inst_43813);
} else {
if((state_val_43847 === (3))){
var inst_43844 = (state_43846[(2)]);
var state_43846__$1 = state_43846;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43846__$1,inst_43844);
} else {
if((state_val_43847 === (12))){
var state_43846__$1 = state_43846;
var statearr_43870_47072 = state_43846__$1;
(statearr_43870_47072[(2)] = null);

(statearr_43870_47072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43847 === (2))){
var state_43846__$1 = state_43846;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43846__$1,(4),from);
} else {
if((state_val_43847 === (11))){
var inst_43823 = (state_43846[(2)]);
var state_43846__$1 = state_43846;
if(cljs.core.truth_(inst_43823)){
var statearr_43880_47075 = state_43846__$1;
(statearr_43880_47075[(1)] = (12));

} else {
var statearr_43884_47076 = state_43846__$1;
(statearr_43884_47076[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43847 === (9))){
var state_43846__$1 = state_43846;
var statearr_43889_47078 = state_43846__$1;
(statearr_43889_47078[(2)] = null);

(statearr_43889_47078[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43847 === (5))){
var state_43846__$1 = state_43846;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43893_47080 = state_43846__$1;
(statearr_43893_47080[(1)] = (8));

} else {
var statearr_43896_47081 = state_43846__$1;
(statearr_43896_47081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43847 === (14))){
var inst_43840 = (state_43846[(2)]);
var state_43846__$1 = state_43846;
var statearr_43898_47082 = state_43846__$1;
(statearr_43898_47082[(2)] = inst_43840);

(statearr_43898_47082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43847 === (10))){
var inst_43820 = (state_43846[(2)]);
var state_43846__$1 = state_43846;
var statearr_43902_47083 = state_43846__$1;
(statearr_43902_47083[(2)] = inst_43820);

(statearr_43902_47083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43847 === (8))){
var inst_43817 = cljs.core.async.close_BANG_(to);
var state_43846__$1 = state_43846;
var statearr_43903_47084 = state_43846__$1;
(statearr_43903_47084[(2)] = inst_43817);

(statearr_43903_47084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42922__auto__ = null;
var cljs$core$async$state_machine__42922__auto____0 = (function (){
var statearr_43904 = [null,null,null,null,null,null,null,null];
(statearr_43904[(0)] = cljs$core$async$state_machine__42922__auto__);

(statearr_43904[(1)] = (1));

return statearr_43904;
});
var cljs$core$async$state_machine__42922__auto____1 = (function (state_43846){
while(true){
var ret_value__42923__auto__ = (function (){try{while(true){
var result__42924__auto__ = switch__42921__auto__(state_43846);
if(cljs.core.keyword_identical_QMARK_(result__42924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42924__auto__;
}
break;
}
}catch (e43906){var ex__42925__auto__ = e43906;
var statearr_43908_47088 = state_43846;
(statearr_43908_47088[(2)] = ex__42925__auto__);


if(cljs.core.seq((state_43846[(4)]))){
var statearr_43911_47089 = state_43846;
(statearr_43911_47089[(1)] = cljs.core.first((state_43846[(4)])));

} else {
throw ex__42925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47091 = state_43846;
state_43846 = G__47091;
continue;
} else {
return ret_value__42923__auto__;
}
break;
}
});
cljs$core$async$state_machine__42922__auto__ = function(state_43846){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42922__auto____1.call(this,state_43846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42922__auto____0;
cljs$core$async$state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42922__auto____1;
return cljs$core$async$state_machine__42922__auto__;
})()
})();
var state__43521__auto__ = (function (){var statearr_43923 = f__43520__auto__();
(statearr_43923[(6)] = c__43519__auto___47065);

return statearr_43923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43521__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__43944){
var vec__43945 = p__43944;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43945,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43945,(1),null);
var job = vec__43945;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__43519__auto___47097 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43520__auto__ = (function (){var switch__42921__auto__ = (function (state_43955){
var state_val_43957 = (state_43955[(1)]);
if((state_val_43957 === (1))){
var state_43955__$1 = state_43955;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43955__$1,(2),res,v);
} else {
if((state_val_43957 === (2))){
var inst_43952 = (state_43955[(2)]);
var inst_43953 = cljs.core.async.close_BANG_(res);
var state_43955__$1 = (function (){var statearr_43962 = state_43955;
(statearr_43962[(7)] = inst_43952);

return statearr_43962;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43955__$1,inst_43953);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42922__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42922__auto____0 = (function (){
var statearr_43963 = [null,null,null,null,null,null,null,null];
(statearr_43963[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42922__auto__);

(statearr_43963[(1)] = (1));

return statearr_43963;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42922__auto____1 = (function (state_43955){
while(true){
var ret_value__42923__auto__ = (function (){try{while(true){
var result__42924__auto__ = switch__42921__auto__(state_43955);
if(cljs.core.keyword_identical_QMARK_(result__42924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42924__auto__;
}
break;
}
}catch (e43964){var ex__42925__auto__ = e43964;
var statearr_43965_47106 = state_43955;
(statearr_43965_47106[(2)] = ex__42925__auto__);


if(cljs.core.seq((state_43955[(4)]))){
var statearr_43968_47108 = state_43955;
(statearr_43968_47108[(1)] = cljs.core.first((state_43955[(4)])));

} else {
throw ex__42925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47109 = state_43955;
state_43955 = G__47109;
continue;
} else {
return ret_value__42923__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42922__auto__ = function(state_43955){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42922__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42922__auto____1.call(this,state_43955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42922__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42922__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42922__auto__;
})()
})();
var state__43521__auto__ = (function (){var statearr_43980 = f__43520__auto__();
(statearr_43980[(6)] = c__43519__auto___47097);

return statearr_43980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43521__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__43981){
var vec__43982 = p__43981;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43982,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43982,(1),null);
var job = vec__43982;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4706__auto___47129 = n;
var __47130 = (0);
while(true){
if((__47130 < n__4706__auto___47129)){
var G__43988_47132 = type;
var G__43988_47133__$1 = (((G__43988_47132 instanceof cljs.core.Keyword))?G__43988_47132.fqn:null);
switch (G__43988_47133__$1) {
case "compute":
var c__43519__auto___47138 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47130,c__43519__auto___47138,G__43988_47132,G__43988_47133__$1,n__4706__auto___47129,jobs,results,process,async){
return (function (){
var f__43520__auto__ = (function (){var switch__42921__auto__ = ((function (__47130,c__43519__auto___47138,G__43988_47132,G__43988_47133__$1,n__4706__auto___47129,jobs,results,process,async){
return (function (state_44001){
var state_val_44002 = (state_44001[(1)]);
if((state_val_44002 === (1))){
var state_44001__$1 = state_44001;
var statearr_44018_47140 = state_44001__$1;
(statearr_44018_47140[(2)] = null);

(statearr_44018_47140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44002 === (2))){
var state_44001__$1 = state_44001;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44001__$1,(4),jobs);
} else {
if((state_val_44002 === (3))){
var inst_43999 = (state_44001[(2)]);
var state_44001__$1 = state_44001;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44001__$1,inst_43999);
} else {
if((state_val_44002 === (4))){
var inst_43991 = (state_44001[(2)]);
var inst_43992 = process(inst_43991);
var state_44001__$1 = state_44001;
if(cljs.core.truth_(inst_43992)){
var statearr_44025_47141 = state_44001__$1;
(statearr_44025_47141[(1)] = (5));

} else {
var statearr_44026_47142 = state_44001__$1;
(statearr_44026_47142[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44002 === (5))){
var state_44001__$1 = state_44001;
var statearr_44027_47143 = state_44001__$1;
(statearr_44027_47143[(2)] = null);

(statearr_44027_47143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44002 === (6))){
var state_44001__$1 = state_44001;
var statearr_44028_47146 = state_44001__$1;
(statearr_44028_47146[(2)] = null);

(statearr_44028_47146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44002 === (7))){
var inst_43997 = (state_44001[(2)]);
var state_44001__$1 = state_44001;
var statearr_44029_47147 = state_44001__$1;
(statearr_44029_47147[(2)] = inst_43997);

(statearr_44029_47147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47130,c__43519__auto___47138,G__43988_47132,G__43988_47133__$1,n__4706__auto___47129,jobs,results,process,async))
;
return ((function (__47130,switch__42921__auto__,c__43519__auto___47138,G__43988_47132,G__43988_47133__$1,n__4706__auto___47129,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42922__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42922__auto____0 = (function (){
var statearr_44030 = [null,null,null,null,null,null,null];
(statearr_44030[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42922__auto__);

(statearr_44030[(1)] = (1));

return statearr_44030;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42922__auto____1 = (function (state_44001){
while(true){
var ret_value__42923__auto__ = (function (){try{while(true){
var result__42924__auto__ = switch__42921__auto__(state_44001);
if(cljs.core.keyword_identical_QMARK_(result__42924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42924__auto__;
}
break;
}
}catch (e44031){var ex__42925__auto__ = e44031;
var statearr_44032_47150 = state_44001;
(statearr_44032_47150[(2)] = ex__42925__auto__);


if(cljs.core.seq((state_44001[(4)]))){
var statearr_44033_47151 = state_44001;
(statearr_44033_47151[(1)] = cljs.core.first((state_44001[(4)])));

} else {
throw ex__42925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47152 = state_44001;
state_44001 = G__47152;
continue;
} else {
return ret_value__42923__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42922__auto__ = function(state_44001){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42922__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42922__auto____1.call(this,state_44001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42922__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42922__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42922__auto__;
})()
;})(__47130,switch__42921__auto__,c__43519__auto___47138,G__43988_47132,G__43988_47133__$1,n__4706__auto___47129,jobs,results,process,async))
})();
var state__43521__auto__ = (function (){var statearr_44037 = f__43520__auto__();
(statearr_44037[(6)] = c__43519__auto___47138);

return statearr_44037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43521__auto__);
});})(__47130,c__43519__auto___47138,G__43988_47132,G__43988_47133__$1,n__4706__auto___47129,jobs,results,process,async))
);


break;
case "async":
var c__43519__auto___47153 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47130,c__43519__auto___47153,G__43988_47132,G__43988_47133__$1,n__4706__auto___47129,jobs,results,process,async){
return (function (){
var f__43520__auto__ = (function (){var switch__42921__auto__ = ((function (__47130,c__43519__auto___47153,G__43988_47132,G__43988_47133__$1,n__4706__auto___47129,jobs,results,process,async){
return (function (state_44050){
var state_val_44051 = (state_44050[(1)]);
if((state_val_44051 === (1))){
var state_44050__$1 = state_44050;
var statearr_44055_47159 = state_44050__$1;
(statearr_44055_47159[(2)] = null);

(statearr_44055_47159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44051 === (2))){
var state_44050__$1 = state_44050;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44050__$1,(4),jobs);
} else {
if((state_val_44051 === (3))){
var inst_44048 = (state_44050[(2)]);
var state_44050__$1 = state_44050;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44050__$1,inst_44048);
} else {
if((state_val_44051 === (4))){
var inst_44040 = (state_44050[(2)]);
var inst_44041 = async(inst_44040);
var state_44050__$1 = state_44050;
if(cljs.core.truth_(inst_44041)){
var statearr_44056_47174 = state_44050__$1;
(statearr_44056_47174[(1)] = (5));

} else {
var statearr_44060_47176 = state_44050__$1;
(statearr_44060_47176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44051 === (5))){
var state_44050__$1 = state_44050;
var statearr_44062_47178 = state_44050__$1;
(statearr_44062_47178[(2)] = null);

(statearr_44062_47178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44051 === (6))){
var state_44050__$1 = state_44050;
var statearr_44063_47179 = state_44050__$1;
(statearr_44063_47179[(2)] = null);

(statearr_44063_47179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44051 === (7))){
var inst_44046 = (state_44050[(2)]);
var state_44050__$1 = state_44050;
var statearr_44067_47185 = state_44050__$1;
(statearr_44067_47185[(2)] = inst_44046);

(statearr_44067_47185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47130,c__43519__auto___47153,G__43988_47132,G__43988_47133__$1,n__4706__auto___47129,jobs,results,process,async))
;
return ((function (__47130,switch__42921__auto__,c__43519__auto___47153,G__43988_47132,G__43988_47133__$1,n__4706__auto___47129,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42922__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42922__auto____0 = (function (){
var statearr_44069 = [null,null,null,null,null,null,null];
(statearr_44069[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42922__auto__);

(statearr_44069[(1)] = (1));

return statearr_44069;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42922__auto____1 = (function (state_44050){
while(true){
var ret_value__42923__auto__ = (function (){try{while(true){
var result__42924__auto__ = switch__42921__auto__(state_44050);
if(cljs.core.keyword_identical_QMARK_(result__42924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42924__auto__;
}
break;
}
}catch (e44071){var ex__42925__auto__ = e44071;
var statearr_44072_47187 = state_44050;
(statearr_44072_47187[(2)] = ex__42925__auto__);


if(cljs.core.seq((state_44050[(4)]))){
var statearr_44073_47188 = state_44050;
(statearr_44073_47188[(1)] = cljs.core.first((state_44050[(4)])));

} else {
throw ex__42925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47189 = state_44050;
state_44050 = G__47189;
continue;
} else {
return ret_value__42923__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42922__auto__ = function(state_44050){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42922__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42922__auto____1.call(this,state_44050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42922__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42922__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42922__auto__;
})()
;})(__47130,switch__42921__auto__,c__43519__auto___47153,G__43988_47132,G__43988_47133__$1,n__4706__auto___47129,jobs,results,process,async))
})();
var state__43521__auto__ = (function (){var statearr_44080 = f__43520__auto__();
(statearr_44080[(6)] = c__43519__auto___47153);

return statearr_44080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43521__auto__);
});})(__47130,c__43519__auto___47153,G__43988_47132,G__43988_47133__$1,n__4706__auto___47129,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43988_47133__$1)].join('')));

}

var G__47190 = (__47130 + (1));
__47130 = G__47190;
continue;
} else {
}
break;
}

var c__43519__auto___47191 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43520__auto__ = (function (){var switch__42921__auto__ = (function (state_44112){
var state_val_44114 = (state_44112[(1)]);
if((state_val_44114 === (7))){
var inst_44108 = (state_44112[(2)]);
var state_44112__$1 = state_44112;
var statearr_44120_47193 = state_44112__$1;
(statearr_44120_47193[(2)] = inst_44108);

(statearr_44120_47193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44114 === (1))){
var state_44112__$1 = state_44112;
var statearr_44124_47196 = state_44112__$1;
(statearr_44124_47196[(2)] = null);

(statearr_44124_47196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44114 === (4))){
var inst_44091 = (state_44112[(7)]);
var inst_44091__$1 = (state_44112[(2)]);
var inst_44092 = (inst_44091__$1 == null);
var state_44112__$1 = (function (){var statearr_44133 = state_44112;
(statearr_44133[(7)] = inst_44091__$1);

return statearr_44133;
})();
if(cljs.core.truth_(inst_44092)){
var statearr_44141_47199 = state_44112__$1;
(statearr_44141_47199[(1)] = (5));

} else {
var statearr_44145_47200 = state_44112__$1;
(statearr_44145_47200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44114 === (6))){
var inst_44096 = (state_44112[(8)]);
var inst_44091 = (state_44112[(7)]);
var inst_44096__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_44099 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44100 = [inst_44091,inst_44096__$1];
var inst_44101 = (new cljs.core.PersistentVector(null,2,(5),inst_44099,inst_44100,null));
var state_44112__$1 = (function (){var statearr_44157 = state_44112;
(statearr_44157[(8)] = inst_44096__$1);

return statearr_44157;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44112__$1,(8),jobs,inst_44101);
} else {
if((state_val_44114 === (3))){
var inst_44110 = (state_44112[(2)]);
var state_44112__$1 = state_44112;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44112__$1,inst_44110);
} else {
if((state_val_44114 === (2))){
var state_44112__$1 = state_44112;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44112__$1,(4),from);
} else {
if((state_val_44114 === (9))){
var inst_44105 = (state_44112[(2)]);
var state_44112__$1 = (function (){var statearr_44160 = state_44112;
(statearr_44160[(9)] = inst_44105);

return statearr_44160;
})();
var statearr_44162_47211 = state_44112__$1;
(statearr_44162_47211[(2)] = null);

(statearr_44162_47211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44114 === (5))){
var inst_44094 = cljs.core.async.close_BANG_(jobs);
var state_44112__$1 = state_44112;
var statearr_44165_47214 = state_44112__$1;
(statearr_44165_47214[(2)] = inst_44094);

(statearr_44165_47214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44114 === (8))){
var inst_44096 = (state_44112[(8)]);
var inst_44103 = (state_44112[(2)]);
var state_44112__$1 = (function (){var statearr_44167 = state_44112;
(statearr_44167[(10)] = inst_44103);

return statearr_44167;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44112__$1,(9),results,inst_44096);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42922__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42922__auto____0 = (function (){
var statearr_44169 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44169[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42922__auto__);

(statearr_44169[(1)] = (1));

return statearr_44169;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42922__auto____1 = (function (state_44112){
while(true){
var ret_value__42923__auto__ = (function (){try{while(true){
var result__42924__auto__ = switch__42921__auto__(state_44112);
if(cljs.core.keyword_identical_QMARK_(result__42924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42924__auto__;
}
break;
}
}catch (e44172){var ex__42925__auto__ = e44172;
var statearr_44173_47219 = state_44112;
(statearr_44173_47219[(2)] = ex__42925__auto__);


if(cljs.core.seq((state_44112[(4)]))){
var statearr_44175_47220 = state_44112;
(statearr_44175_47220[(1)] = cljs.core.first((state_44112[(4)])));

} else {
throw ex__42925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47222 = state_44112;
state_44112 = G__47222;
continue;
} else {
return ret_value__42923__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42922__auto__ = function(state_44112){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42922__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42922__auto____1.call(this,state_44112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42922__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42922__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42922__auto__;
})()
})();
var state__43521__auto__ = (function (){var statearr_44187 = f__43520__auto__();
(statearr_44187[(6)] = c__43519__auto___47191);

return statearr_44187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43521__auto__);
}));


var c__43519__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43520__auto__ = (function (){var switch__42921__auto__ = (function (state_44235){
var state_val_44236 = (state_44235[(1)]);
if((state_val_44236 === (7))){
var inst_44230 = (state_44235[(2)]);
var state_44235__$1 = state_44235;
var statearr_44255_47231 = state_44235__$1;
(statearr_44255_47231[(2)] = inst_44230);

(statearr_44255_47231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44236 === (20))){
var state_44235__$1 = state_44235;
var statearr_44262_47232 = state_44235__$1;
(statearr_44262_47232[(2)] = null);

(statearr_44262_47232[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44236 === (1))){
var state_44235__$1 = state_44235;
var statearr_44265_47233 = state_44235__$1;
(statearr_44265_47233[(2)] = null);

(statearr_44265_47233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44236 === (4))){
var inst_44195 = (state_44235[(7)]);
var inst_44195__$1 = (state_44235[(2)]);
var inst_44196 = (inst_44195__$1 == null);
var state_44235__$1 = (function (){var statearr_44272 = state_44235;
(statearr_44272[(7)] = inst_44195__$1);

return statearr_44272;
})();
if(cljs.core.truth_(inst_44196)){
var statearr_44273_47235 = state_44235__$1;
(statearr_44273_47235[(1)] = (5));

} else {
var statearr_44274_47236 = state_44235__$1;
(statearr_44274_47236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44236 === (15))){
var inst_44209 = (state_44235[(8)]);
var state_44235__$1 = state_44235;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44235__$1,(18),to,inst_44209);
} else {
if((state_val_44236 === (21))){
var inst_44223 = (state_44235[(2)]);
var state_44235__$1 = state_44235;
var statearr_44276_47239 = state_44235__$1;
(statearr_44276_47239[(2)] = inst_44223);

(statearr_44276_47239[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44236 === (13))){
var inst_44225 = (state_44235[(2)]);
var state_44235__$1 = (function (){var statearr_44283 = state_44235;
(statearr_44283[(9)] = inst_44225);

return statearr_44283;
})();
var statearr_44287_47240 = state_44235__$1;
(statearr_44287_47240[(2)] = null);

(statearr_44287_47240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44236 === (6))){
var inst_44195 = (state_44235[(7)]);
var state_44235__$1 = state_44235;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44235__$1,(11),inst_44195);
} else {
if((state_val_44236 === (17))){
var inst_44217 = (state_44235[(2)]);
var state_44235__$1 = state_44235;
if(cljs.core.truth_(inst_44217)){
var statearr_44301_47245 = state_44235__$1;
(statearr_44301_47245[(1)] = (19));

} else {
var statearr_44306_47246 = state_44235__$1;
(statearr_44306_47246[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44236 === (3))){
var inst_44232 = (state_44235[(2)]);
var state_44235__$1 = state_44235;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44235__$1,inst_44232);
} else {
if((state_val_44236 === (12))){
var inst_44205 = (state_44235[(10)]);
var state_44235__$1 = state_44235;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44235__$1,(14),inst_44205);
} else {
if((state_val_44236 === (2))){
var state_44235__$1 = state_44235;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44235__$1,(4),results);
} else {
if((state_val_44236 === (19))){
var state_44235__$1 = state_44235;
var statearr_44316_47262 = state_44235__$1;
(statearr_44316_47262[(2)] = null);

(statearr_44316_47262[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44236 === (11))){
var inst_44205 = (state_44235[(2)]);
var state_44235__$1 = (function (){var statearr_44323 = state_44235;
(statearr_44323[(10)] = inst_44205);

return statearr_44323;
})();
var statearr_44327_47264 = state_44235__$1;
(statearr_44327_47264[(2)] = null);

(statearr_44327_47264[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44236 === (9))){
var state_44235__$1 = state_44235;
var statearr_44334_47265 = state_44235__$1;
(statearr_44334_47265[(2)] = null);

(statearr_44334_47265[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44236 === (5))){
var state_44235__$1 = state_44235;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44340_47266 = state_44235__$1;
(statearr_44340_47266[(1)] = (8));

} else {
var statearr_44342_47267 = state_44235__$1;
(statearr_44342_47267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44236 === (14))){
var inst_44211 = (state_44235[(11)]);
var inst_44209 = (state_44235[(8)]);
var inst_44209__$1 = (state_44235[(2)]);
var inst_44210 = (inst_44209__$1 == null);
var inst_44211__$1 = cljs.core.not(inst_44210);
var state_44235__$1 = (function (){var statearr_44346 = state_44235;
(statearr_44346[(11)] = inst_44211__$1);

(statearr_44346[(8)] = inst_44209__$1);

return statearr_44346;
})();
if(inst_44211__$1){
var statearr_44348_47268 = state_44235__$1;
(statearr_44348_47268[(1)] = (15));

} else {
var statearr_44349_47270 = state_44235__$1;
(statearr_44349_47270[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44236 === (16))){
var inst_44211 = (state_44235[(11)]);
var state_44235__$1 = state_44235;
var statearr_44351_47275 = state_44235__$1;
(statearr_44351_47275[(2)] = inst_44211);

(statearr_44351_47275[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44236 === (10))){
var inst_44202 = (state_44235[(2)]);
var state_44235__$1 = state_44235;
var statearr_44357_47280 = state_44235__$1;
(statearr_44357_47280[(2)] = inst_44202);

(statearr_44357_47280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44236 === (18))){
var inst_44214 = (state_44235[(2)]);
var state_44235__$1 = state_44235;
var statearr_44360_47281 = state_44235__$1;
(statearr_44360_47281[(2)] = inst_44214);

(statearr_44360_47281[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44236 === (8))){
var inst_44199 = cljs.core.async.close_BANG_(to);
var state_44235__$1 = state_44235;
var statearr_44365_47282 = state_44235__$1;
(statearr_44365_47282[(2)] = inst_44199);

(statearr_44365_47282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42922__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42922__auto____0 = (function (){
var statearr_44372 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44372[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42922__auto__);

(statearr_44372[(1)] = (1));

return statearr_44372;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42922__auto____1 = (function (state_44235){
while(true){
var ret_value__42923__auto__ = (function (){try{while(true){
var result__42924__auto__ = switch__42921__auto__(state_44235);
if(cljs.core.keyword_identical_QMARK_(result__42924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42924__auto__;
}
break;
}
}catch (e44375){var ex__42925__auto__ = e44375;
var statearr_44377_47284 = state_44235;
(statearr_44377_47284[(2)] = ex__42925__auto__);


if(cljs.core.seq((state_44235[(4)]))){
var statearr_44378_47285 = state_44235;
(statearr_44378_47285[(1)] = cljs.core.first((state_44235[(4)])));

} else {
throw ex__42925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47286 = state_44235;
state_44235 = G__47286;
continue;
} else {
return ret_value__42923__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42922__auto__ = function(state_44235){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42922__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42922__auto____1.call(this,state_44235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42922__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42922__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42922__auto__;
})()
})();
var state__43521__auto__ = (function (){var statearr_44382 = f__43520__auto__();
(statearr_44382[(6)] = c__43519__auto__);

return statearr_44382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43521__auto__);
}));

return c__43519__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__44391 = arguments.length;
switch (G__44391) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__44419 = arguments.length;
switch (G__44419) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__44442 = arguments.length;
switch (G__44442) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__43519__auto___47307 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43520__auto__ = (function (){var switch__42921__auto__ = (function (state_44473){
var state_val_44474 = (state_44473[(1)]);
if((state_val_44474 === (7))){
var inst_44469 = (state_44473[(2)]);
var state_44473__$1 = state_44473;
var statearr_44477_47310 = state_44473__$1;
(statearr_44477_47310[(2)] = inst_44469);

(statearr_44477_47310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44474 === (1))){
var state_44473__$1 = state_44473;
var statearr_44478_47311 = state_44473__$1;
(statearr_44478_47311[(2)] = null);

(statearr_44478_47311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44474 === (4))){
var inst_44449 = (state_44473[(7)]);
var inst_44449__$1 = (state_44473[(2)]);
var inst_44451 = (inst_44449__$1 == null);
var state_44473__$1 = (function (){var statearr_44479 = state_44473;
(statearr_44479[(7)] = inst_44449__$1);

return statearr_44479;
})();
if(cljs.core.truth_(inst_44451)){
var statearr_44480_47313 = state_44473__$1;
(statearr_44480_47313[(1)] = (5));

} else {
var statearr_44481_47315 = state_44473__$1;
(statearr_44481_47315[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44474 === (13))){
var state_44473__$1 = state_44473;
var statearr_44482_47316 = state_44473__$1;
(statearr_44482_47316[(2)] = null);

(statearr_44482_47316[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44474 === (6))){
var inst_44449 = (state_44473[(7)]);
var inst_44456 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44449) : p.call(null,inst_44449));
var state_44473__$1 = state_44473;
if(cljs.core.truth_(inst_44456)){
var statearr_44488_47320 = state_44473__$1;
(statearr_44488_47320[(1)] = (9));

} else {
var statearr_44489_47321 = state_44473__$1;
(statearr_44489_47321[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44474 === (3))){
var inst_44471 = (state_44473[(2)]);
var state_44473__$1 = state_44473;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44473__$1,inst_44471);
} else {
if((state_val_44474 === (12))){
var state_44473__$1 = state_44473;
var statearr_44496_47323 = state_44473__$1;
(statearr_44496_47323[(2)] = null);

(statearr_44496_47323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44474 === (2))){
var state_44473__$1 = state_44473;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44473__$1,(4),ch);
} else {
if((state_val_44474 === (11))){
var inst_44449 = (state_44473[(7)]);
var inst_44460 = (state_44473[(2)]);
var state_44473__$1 = state_44473;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44473__$1,(8),inst_44460,inst_44449);
} else {
if((state_val_44474 === (9))){
var state_44473__$1 = state_44473;
var statearr_44502_47325 = state_44473__$1;
(statearr_44502_47325[(2)] = tc);

(statearr_44502_47325[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44474 === (5))){
var inst_44453 = cljs.core.async.close_BANG_(tc);
var inst_44454 = cljs.core.async.close_BANG_(fc);
var state_44473__$1 = (function (){var statearr_44503 = state_44473;
(statearr_44503[(8)] = inst_44453);

return statearr_44503;
})();
var statearr_44504_47326 = state_44473__$1;
(statearr_44504_47326[(2)] = inst_44454);

(statearr_44504_47326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44474 === (14))){
var inst_44467 = (state_44473[(2)]);
var state_44473__$1 = state_44473;
var statearr_44505_47333 = state_44473__$1;
(statearr_44505_47333[(2)] = inst_44467);

(statearr_44505_47333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44474 === (10))){
var state_44473__$1 = state_44473;
var statearr_44509_47334 = state_44473__$1;
(statearr_44509_47334[(2)] = fc);

(statearr_44509_47334[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44474 === (8))){
var inst_44462 = (state_44473[(2)]);
var state_44473__$1 = state_44473;
if(cljs.core.truth_(inst_44462)){
var statearr_44513_47340 = state_44473__$1;
(statearr_44513_47340[(1)] = (12));

} else {
var statearr_44515_47341 = state_44473__$1;
(statearr_44515_47341[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42922__auto__ = null;
var cljs$core$async$state_machine__42922__auto____0 = (function (){
var statearr_44516 = [null,null,null,null,null,null,null,null,null];
(statearr_44516[(0)] = cljs$core$async$state_machine__42922__auto__);

(statearr_44516[(1)] = (1));

return statearr_44516;
});
var cljs$core$async$state_machine__42922__auto____1 = (function (state_44473){
while(true){
var ret_value__42923__auto__ = (function (){try{while(true){
var result__42924__auto__ = switch__42921__auto__(state_44473);
if(cljs.core.keyword_identical_QMARK_(result__42924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42924__auto__;
}
break;
}
}catch (e44517){var ex__42925__auto__ = e44517;
var statearr_44518_47343 = state_44473;
(statearr_44518_47343[(2)] = ex__42925__auto__);


if(cljs.core.seq((state_44473[(4)]))){
var statearr_44522_47347 = state_44473;
(statearr_44522_47347[(1)] = cljs.core.first((state_44473[(4)])));

} else {
throw ex__42925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47351 = state_44473;
state_44473 = G__47351;
continue;
} else {
return ret_value__42923__auto__;
}
break;
}
});
cljs$core$async$state_machine__42922__auto__ = function(state_44473){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42922__auto____1.call(this,state_44473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42922__auto____0;
cljs$core$async$state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42922__auto____1;
return cljs$core$async$state_machine__42922__auto__;
})()
})();
var state__43521__auto__ = (function (){var statearr_44523 = f__43520__auto__();
(statearr_44523[(6)] = c__43519__auto___47307);

return statearr_44523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43521__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__43519__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43520__auto__ = (function (){var switch__42921__auto__ = (function (state_44552){
var state_val_44553 = (state_44552[(1)]);
if((state_val_44553 === (7))){
var inst_44548 = (state_44552[(2)]);
var state_44552__$1 = state_44552;
var statearr_44558_47359 = state_44552__$1;
(statearr_44558_47359[(2)] = inst_44548);

(statearr_44558_47359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44553 === (1))){
var inst_44530 = init;
var inst_44532 = inst_44530;
var state_44552__$1 = (function (){var statearr_44559 = state_44552;
(statearr_44559[(7)] = inst_44532);

return statearr_44559;
})();
var statearr_44560_47360 = state_44552__$1;
(statearr_44560_47360[(2)] = null);

(statearr_44560_47360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44553 === (4))){
var inst_44535 = (state_44552[(8)]);
var inst_44535__$1 = (state_44552[(2)]);
var inst_44536 = (inst_44535__$1 == null);
var state_44552__$1 = (function (){var statearr_44562 = state_44552;
(statearr_44562[(8)] = inst_44535__$1);

return statearr_44562;
})();
if(cljs.core.truth_(inst_44536)){
var statearr_44566_47362 = state_44552__$1;
(statearr_44566_47362[(1)] = (5));

} else {
var statearr_44567_47366 = state_44552__$1;
(statearr_44567_47366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44553 === (6))){
var inst_44535 = (state_44552[(8)]);
var inst_44532 = (state_44552[(7)]);
var inst_44539 = (state_44552[(9)]);
var inst_44539__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_44532,inst_44535) : f.call(null,inst_44532,inst_44535));
var inst_44540 = cljs.core.reduced_QMARK_(inst_44539__$1);
var state_44552__$1 = (function (){var statearr_44570 = state_44552;
(statearr_44570[(9)] = inst_44539__$1);

return statearr_44570;
})();
if(inst_44540){
var statearr_44572_47370 = state_44552__$1;
(statearr_44572_47370[(1)] = (8));

} else {
var statearr_44575_47371 = state_44552__$1;
(statearr_44575_47371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44553 === (3))){
var inst_44550 = (state_44552[(2)]);
var state_44552__$1 = state_44552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44552__$1,inst_44550);
} else {
if((state_val_44553 === (2))){
var state_44552__$1 = state_44552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44552__$1,(4),ch);
} else {
if((state_val_44553 === (9))){
var inst_44539 = (state_44552[(9)]);
var inst_44532 = inst_44539;
var state_44552__$1 = (function (){var statearr_44578 = state_44552;
(statearr_44578[(7)] = inst_44532);

return statearr_44578;
})();
var statearr_44580_47372 = state_44552__$1;
(statearr_44580_47372[(2)] = null);

(statearr_44580_47372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44553 === (5))){
var inst_44532 = (state_44552[(7)]);
var state_44552__$1 = state_44552;
var statearr_44581_47377 = state_44552__$1;
(statearr_44581_47377[(2)] = inst_44532);

(statearr_44581_47377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44553 === (10))){
var inst_44546 = (state_44552[(2)]);
var state_44552__$1 = state_44552;
var statearr_44582_47381 = state_44552__$1;
(statearr_44582_47381[(2)] = inst_44546);

(statearr_44582_47381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44553 === (8))){
var inst_44539 = (state_44552[(9)]);
var inst_44542 = cljs.core.deref(inst_44539);
var state_44552__$1 = state_44552;
var statearr_44583_47382 = state_44552__$1;
(statearr_44583_47382[(2)] = inst_44542);

(statearr_44583_47382[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__42922__auto__ = null;
var cljs$core$async$reduce_$_state_machine__42922__auto____0 = (function (){
var statearr_44586 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44586[(0)] = cljs$core$async$reduce_$_state_machine__42922__auto__);

(statearr_44586[(1)] = (1));

return statearr_44586;
});
var cljs$core$async$reduce_$_state_machine__42922__auto____1 = (function (state_44552){
while(true){
var ret_value__42923__auto__ = (function (){try{while(true){
var result__42924__auto__ = switch__42921__auto__(state_44552);
if(cljs.core.keyword_identical_QMARK_(result__42924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42924__auto__;
}
break;
}
}catch (e44588){var ex__42925__auto__ = e44588;
var statearr_44589_47384 = state_44552;
(statearr_44589_47384[(2)] = ex__42925__auto__);


if(cljs.core.seq((state_44552[(4)]))){
var statearr_44590_47389 = state_44552;
(statearr_44590_47389[(1)] = cljs.core.first((state_44552[(4)])));

} else {
throw ex__42925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47390 = state_44552;
state_44552 = G__47390;
continue;
} else {
return ret_value__42923__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__42922__auto__ = function(state_44552){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__42922__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__42922__auto____1.call(this,state_44552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__42922__auto____0;
cljs$core$async$reduce_$_state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__42922__auto____1;
return cljs$core$async$reduce_$_state_machine__42922__auto__;
})()
})();
var state__43521__auto__ = (function (){var statearr_44591 = f__43520__auto__();
(statearr_44591[(6)] = c__43519__auto__);

return statearr_44591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43521__auto__);
}));

return c__43519__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__43519__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43520__auto__ = (function (){var switch__42921__auto__ = (function (state_44603){
var state_val_44604 = (state_44603[(1)]);
if((state_val_44604 === (1))){
var inst_44598 = cljs.core.async.reduce(f__$1,init,ch);
var state_44603__$1 = state_44603;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44603__$1,(2),inst_44598);
} else {
if((state_val_44604 === (2))){
var inst_44600 = (state_44603[(2)]);
var inst_44601 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_44600) : f__$1.call(null,inst_44600));
var state_44603__$1 = state_44603;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44603__$1,inst_44601);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__42922__auto__ = null;
var cljs$core$async$transduce_$_state_machine__42922__auto____0 = (function (){
var statearr_44609 = [null,null,null,null,null,null,null];
(statearr_44609[(0)] = cljs$core$async$transduce_$_state_machine__42922__auto__);

(statearr_44609[(1)] = (1));

return statearr_44609;
});
var cljs$core$async$transduce_$_state_machine__42922__auto____1 = (function (state_44603){
while(true){
var ret_value__42923__auto__ = (function (){try{while(true){
var result__42924__auto__ = switch__42921__auto__(state_44603);
if(cljs.core.keyword_identical_QMARK_(result__42924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42924__auto__;
}
break;
}
}catch (e44610){var ex__42925__auto__ = e44610;
var statearr_44613_47402 = state_44603;
(statearr_44613_47402[(2)] = ex__42925__auto__);


if(cljs.core.seq((state_44603[(4)]))){
var statearr_44616_47406 = state_44603;
(statearr_44616_47406[(1)] = cljs.core.first((state_44603[(4)])));

} else {
throw ex__42925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47407 = state_44603;
state_44603 = G__47407;
continue;
} else {
return ret_value__42923__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__42922__auto__ = function(state_44603){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__42922__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__42922__auto____1.call(this,state_44603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__42922__auto____0;
cljs$core$async$transduce_$_state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__42922__auto____1;
return cljs$core$async$transduce_$_state_machine__42922__auto__;
})()
})();
var state__43521__auto__ = (function (){var statearr_44618 = f__43520__auto__();
(statearr_44618[(6)] = c__43519__auto__);

return statearr_44618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43521__auto__);
}));

return c__43519__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__44621 = arguments.length;
switch (G__44621) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__43519__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43520__auto__ = (function (){var switch__42921__auto__ = (function (state_44652){
var state_val_44653 = (state_44652[(1)]);
if((state_val_44653 === (7))){
var inst_44632 = (state_44652[(2)]);
var state_44652__$1 = state_44652;
var statearr_44660_47410 = state_44652__$1;
(statearr_44660_47410[(2)] = inst_44632);

(statearr_44660_47410[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44653 === (1))){
var inst_44625 = cljs.core.seq(coll);
var inst_44626 = inst_44625;
var state_44652__$1 = (function (){var statearr_44661 = state_44652;
(statearr_44661[(7)] = inst_44626);

return statearr_44661;
})();
var statearr_44662_47412 = state_44652__$1;
(statearr_44662_47412[(2)] = null);

(statearr_44662_47412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44653 === (4))){
var inst_44626 = (state_44652[(7)]);
var inst_44630 = cljs.core.first(inst_44626);
var state_44652__$1 = state_44652;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44652__$1,(7),ch,inst_44630);
} else {
if((state_val_44653 === (13))){
var inst_44644 = (state_44652[(2)]);
var state_44652__$1 = state_44652;
var statearr_44667_47417 = state_44652__$1;
(statearr_44667_47417[(2)] = inst_44644);

(statearr_44667_47417[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44653 === (6))){
var inst_44635 = (state_44652[(2)]);
var state_44652__$1 = state_44652;
if(cljs.core.truth_(inst_44635)){
var statearr_44669_47421 = state_44652__$1;
(statearr_44669_47421[(1)] = (8));

} else {
var statearr_44670_47424 = state_44652__$1;
(statearr_44670_47424[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44653 === (3))){
var inst_44648 = (state_44652[(2)]);
var state_44652__$1 = state_44652;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44652__$1,inst_44648);
} else {
if((state_val_44653 === (12))){
var state_44652__$1 = state_44652;
var statearr_44672_47425 = state_44652__$1;
(statearr_44672_47425[(2)] = null);

(statearr_44672_47425[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44653 === (2))){
var inst_44626 = (state_44652[(7)]);
var state_44652__$1 = state_44652;
if(cljs.core.truth_(inst_44626)){
var statearr_44673_47426 = state_44652__$1;
(statearr_44673_47426[(1)] = (4));

} else {
var statearr_44675_47427 = state_44652__$1;
(statearr_44675_47427[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44653 === (11))){
var inst_44641 = cljs.core.async.close_BANG_(ch);
var state_44652__$1 = state_44652;
var statearr_44679_47428 = state_44652__$1;
(statearr_44679_47428[(2)] = inst_44641);

(statearr_44679_47428[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44653 === (9))){
var state_44652__$1 = state_44652;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44683_47429 = state_44652__$1;
(statearr_44683_47429[(1)] = (11));

} else {
var statearr_44684_47430 = state_44652__$1;
(statearr_44684_47430[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44653 === (5))){
var inst_44626 = (state_44652[(7)]);
var state_44652__$1 = state_44652;
var statearr_44685_47432 = state_44652__$1;
(statearr_44685_47432[(2)] = inst_44626);

(statearr_44685_47432[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44653 === (10))){
var inst_44646 = (state_44652[(2)]);
var state_44652__$1 = state_44652;
var statearr_44689_47435 = state_44652__$1;
(statearr_44689_47435[(2)] = inst_44646);

(statearr_44689_47435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44653 === (8))){
var inst_44626 = (state_44652[(7)]);
var inst_44637 = cljs.core.next(inst_44626);
var inst_44626__$1 = inst_44637;
var state_44652__$1 = (function (){var statearr_44690 = state_44652;
(statearr_44690[(7)] = inst_44626__$1);

return statearr_44690;
})();
var statearr_44691_47439 = state_44652__$1;
(statearr_44691_47439[(2)] = null);

(statearr_44691_47439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42922__auto__ = null;
var cljs$core$async$state_machine__42922__auto____0 = (function (){
var statearr_44694 = [null,null,null,null,null,null,null,null];
(statearr_44694[(0)] = cljs$core$async$state_machine__42922__auto__);

(statearr_44694[(1)] = (1));

return statearr_44694;
});
var cljs$core$async$state_machine__42922__auto____1 = (function (state_44652){
while(true){
var ret_value__42923__auto__ = (function (){try{while(true){
var result__42924__auto__ = switch__42921__auto__(state_44652);
if(cljs.core.keyword_identical_QMARK_(result__42924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42924__auto__;
}
break;
}
}catch (e44695){var ex__42925__auto__ = e44695;
var statearr_44696_47443 = state_44652;
(statearr_44696_47443[(2)] = ex__42925__auto__);


if(cljs.core.seq((state_44652[(4)]))){
var statearr_44699_47444 = state_44652;
(statearr_44699_47444[(1)] = cljs.core.first((state_44652[(4)])));

} else {
throw ex__42925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47445 = state_44652;
state_44652 = G__47445;
continue;
} else {
return ret_value__42923__auto__;
}
break;
}
});
cljs$core$async$state_machine__42922__auto__ = function(state_44652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42922__auto____1.call(this,state_44652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42922__auto____0;
cljs$core$async$state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42922__auto____1;
return cljs$core$async$state_machine__42922__auto__;
})()
})();
var state__43521__auto__ = (function (){var statearr_44701 = f__43520__auto__();
(statearr_44701[(6)] = c__43519__auto__);

return statearr_44701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43521__auto__);
}));

return c__43519__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__44708 = arguments.length;
switch (G__44708) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_47460 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_47460(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_47461 = (function (m,ch,close_QMARK_){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4522__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4519__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_47461(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_47464 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_47464(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_47470 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_47470(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44793 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44793 = (function (ch,cs,meta44794){
this.ch = ch;
this.cs = cs;
this.meta44794 = meta44794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44795,meta44794__$1){
var self__ = this;
var _44795__$1 = this;
return (new cljs.core.async.t_cljs$core$async44793(self__.ch,self__.cs,meta44794__$1));
}));

(cljs.core.async.t_cljs$core$async44793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44795){
var self__ = this;
var _44795__$1 = this;
return self__.meta44794;
}));

(cljs.core.async.t_cljs$core$async44793.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44793.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44793.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44793.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async44793.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async44793.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async44793.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44794","meta44794",-398853776,null)], null);
}));

(cljs.core.async.t_cljs$core$async44793.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44793.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44793");

(cljs.core.async.t_cljs$core$async44793.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async44793");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44793.
 */
cljs.core.async.__GT_t_cljs$core$async44793 = (function cljs$core$async$mult_$___GT_t_cljs$core$async44793(ch__$1,cs__$1,meta44794){
return (new cljs.core.async.t_cljs$core$async44793(ch__$1,cs__$1,meta44794));
});

}

return (new cljs.core.async.t_cljs$core$async44793(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__43519__auto___47483 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43520__auto__ = (function (){var switch__42921__auto__ = (function (state_44961){
var state_val_44962 = (state_44961[(1)]);
if((state_val_44962 === (7))){
var inst_44955 = (state_44961[(2)]);
var state_44961__$1 = state_44961;
var statearr_44964_47484 = state_44961__$1;
(statearr_44964_47484[(2)] = inst_44955);

(statearr_44964_47484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (20))){
var inst_44850 = (state_44961[(7)]);
var inst_44865 = cljs.core.first(inst_44850);
var inst_44867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44865,(0),null);
var inst_44868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44865,(1),null);
var state_44961__$1 = (function (){var statearr_44969 = state_44961;
(statearr_44969[(8)] = inst_44867);

return statearr_44969;
})();
if(cljs.core.truth_(inst_44868)){
var statearr_44971_47487 = state_44961__$1;
(statearr_44971_47487[(1)] = (22));

} else {
var statearr_44972_47488 = state_44961__$1;
(statearr_44972_47488[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (27))){
var inst_44898 = (state_44961[(9)]);
var inst_44818 = (state_44961[(10)]);
var inst_44896 = (state_44961[(11)]);
var inst_44903 = (state_44961[(12)]);
var inst_44903__$1 = cljs.core._nth(inst_44896,inst_44898);
var inst_44904 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44903__$1,inst_44818,done);
var state_44961__$1 = (function (){var statearr_44973 = state_44961;
(statearr_44973[(12)] = inst_44903__$1);

return statearr_44973;
})();
if(cljs.core.truth_(inst_44904)){
var statearr_44976_47489 = state_44961__$1;
(statearr_44976_47489[(1)] = (30));

} else {
var statearr_44978_47490 = state_44961__$1;
(statearr_44978_47490[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (1))){
var state_44961__$1 = state_44961;
var statearr_44980_47491 = state_44961__$1;
(statearr_44980_47491[(2)] = null);

(statearr_44980_47491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (24))){
var inst_44850 = (state_44961[(7)]);
var inst_44873 = (state_44961[(2)]);
var inst_44874 = cljs.core.next(inst_44850);
var inst_44828 = inst_44874;
var inst_44829 = null;
var inst_44830 = (0);
var inst_44831 = (0);
var state_44961__$1 = (function (){var statearr_44982 = state_44961;
(statearr_44982[(13)] = inst_44831);

(statearr_44982[(14)] = inst_44829);

(statearr_44982[(15)] = inst_44873);

(statearr_44982[(16)] = inst_44828);

(statearr_44982[(17)] = inst_44830);

return statearr_44982;
})();
var statearr_44983_47496 = state_44961__$1;
(statearr_44983_47496[(2)] = null);

(statearr_44983_47496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (39))){
var state_44961__$1 = state_44961;
var statearr_44993_47499 = state_44961__$1;
(statearr_44993_47499[(2)] = null);

(statearr_44993_47499[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (4))){
var inst_44818 = (state_44961[(10)]);
var inst_44818__$1 = (state_44961[(2)]);
var inst_44819 = (inst_44818__$1 == null);
var state_44961__$1 = (function (){var statearr_44996 = state_44961;
(statearr_44996[(10)] = inst_44818__$1);

return statearr_44996;
})();
if(cljs.core.truth_(inst_44819)){
var statearr_44997_47507 = state_44961__$1;
(statearr_44997_47507[(1)] = (5));

} else {
var statearr_45001_47508 = state_44961__$1;
(statearr_45001_47508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (15))){
var inst_44831 = (state_44961[(13)]);
var inst_44829 = (state_44961[(14)]);
var inst_44828 = (state_44961[(16)]);
var inst_44830 = (state_44961[(17)]);
var inst_44846 = (state_44961[(2)]);
var inst_44847 = (inst_44831 + (1));
var tmp44986 = inst_44829;
var tmp44987 = inst_44828;
var tmp44988 = inst_44830;
var inst_44828__$1 = tmp44987;
var inst_44829__$1 = tmp44986;
var inst_44830__$1 = tmp44988;
var inst_44831__$1 = inst_44847;
var state_44961__$1 = (function (){var statearr_45009 = state_44961;
(statearr_45009[(13)] = inst_44831__$1);

(statearr_45009[(14)] = inst_44829__$1);

(statearr_45009[(16)] = inst_44828__$1);

(statearr_45009[(17)] = inst_44830__$1);

(statearr_45009[(18)] = inst_44846);

return statearr_45009;
})();
var statearr_45010_47515 = state_44961__$1;
(statearr_45010_47515[(2)] = null);

(statearr_45010_47515[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (21))){
var inst_44877 = (state_44961[(2)]);
var state_44961__$1 = state_44961;
var statearr_45016_47539 = state_44961__$1;
(statearr_45016_47539[(2)] = inst_44877);

(statearr_45016_47539[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (31))){
var inst_44903 = (state_44961[(12)]);
var inst_44907 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44903);
var state_44961__$1 = state_44961;
var statearr_45019_47563 = state_44961__$1;
(statearr_45019_47563[(2)] = inst_44907);

(statearr_45019_47563[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (32))){
var inst_44897 = (state_44961[(19)]);
var inst_44895 = (state_44961[(20)]);
var inst_44898 = (state_44961[(9)]);
var inst_44896 = (state_44961[(11)]);
var inst_44910 = (state_44961[(2)]);
var inst_44911 = (inst_44898 + (1));
var tmp45013 = inst_44897;
var tmp45014 = inst_44895;
var tmp45015 = inst_44896;
var inst_44895__$1 = tmp45014;
var inst_44896__$1 = tmp45015;
var inst_44897__$1 = tmp45013;
var inst_44898__$1 = inst_44911;
var state_44961__$1 = (function (){var statearr_45020 = state_44961;
(statearr_45020[(19)] = inst_44897__$1);

(statearr_45020[(20)] = inst_44895__$1);

(statearr_45020[(9)] = inst_44898__$1);

(statearr_45020[(11)] = inst_44896__$1);

(statearr_45020[(21)] = inst_44910);

return statearr_45020;
})();
var statearr_45021_47576 = state_44961__$1;
(statearr_45021_47576[(2)] = null);

(statearr_45021_47576[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (40))){
var inst_44928 = (state_44961[(22)]);
var inst_44932 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44928);
var state_44961__$1 = state_44961;
var statearr_45022_47577 = state_44961__$1;
(statearr_45022_47577[(2)] = inst_44932);

(statearr_45022_47577[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (33))){
var inst_44914 = (state_44961[(23)]);
var inst_44919 = cljs.core.chunked_seq_QMARK_(inst_44914);
var state_44961__$1 = state_44961;
if(inst_44919){
var statearr_45024_47583 = state_44961__$1;
(statearr_45024_47583[(1)] = (36));

} else {
var statearr_45025_47584 = state_44961__$1;
(statearr_45025_47584[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (13))){
var inst_44840 = (state_44961[(24)]);
var inst_44843 = cljs.core.async.close_BANG_(inst_44840);
var state_44961__$1 = state_44961;
var statearr_45028_47585 = state_44961__$1;
(statearr_45028_47585[(2)] = inst_44843);

(statearr_45028_47585[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (22))){
var inst_44867 = (state_44961[(8)]);
var inst_44870 = cljs.core.async.close_BANG_(inst_44867);
var state_44961__$1 = state_44961;
var statearr_45029_47586 = state_44961__$1;
(statearr_45029_47586[(2)] = inst_44870);

(statearr_45029_47586[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (36))){
var inst_44914 = (state_44961[(23)]);
var inst_44923 = cljs.core.chunk_first(inst_44914);
var inst_44924 = cljs.core.chunk_rest(inst_44914);
var inst_44925 = cljs.core.count(inst_44923);
var inst_44895 = inst_44924;
var inst_44896 = inst_44923;
var inst_44897 = inst_44925;
var inst_44898 = (0);
var state_44961__$1 = (function (){var statearr_45031 = state_44961;
(statearr_45031[(19)] = inst_44897);

(statearr_45031[(20)] = inst_44895);

(statearr_45031[(9)] = inst_44898);

(statearr_45031[(11)] = inst_44896);

return statearr_45031;
})();
var statearr_45033_47604 = state_44961__$1;
(statearr_45033_47604[(2)] = null);

(statearr_45033_47604[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (41))){
var inst_44914 = (state_44961[(23)]);
var inst_44934 = (state_44961[(2)]);
var inst_44935 = cljs.core.next(inst_44914);
var inst_44895 = inst_44935;
var inst_44896 = null;
var inst_44897 = (0);
var inst_44898 = (0);
var state_44961__$1 = (function (){var statearr_45037 = state_44961;
(statearr_45037[(19)] = inst_44897);

(statearr_45037[(20)] = inst_44895);

(statearr_45037[(9)] = inst_44898);

(statearr_45037[(11)] = inst_44896);

(statearr_45037[(25)] = inst_44934);

return statearr_45037;
})();
var statearr_45040_47611 = state_44961__$1;
(statearr_45040_47611[(2)] = null);

(statearr_45040_47611[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (43))){
var state_44961__$1 = state_44961;
var statearr_45043_47612 = state_44961__$1;
(statearr_45043_47612[(2)] = null);

(statearr_45043_47612[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (29))){
var inst_44943 = (state_44961[(2)]);
var state_44961__$1 = state_44961;
var statearr_45044_47613 = state_44961__$1;
(statearr_45044_47613[(2)] = inst_44943);

(statearr_45044_47613[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (44))){
var inst_44952 = (state_44961[(2)]);
var state_44961__$1 = (function (){var statearr_45045 = state_44961;
(statearr_45045[(26)] = inst_44952);

return statearr_45045;
})();
var statearr_45046_47615 = state_44961__$1;
(statearr_45046_47615[(2)] = null);

(statearr_45046_47615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (6))){
var inst_44887 = (state_44961[(27)]);
var inst_44886 = cljs.core.deref(cs);
var inst_44887__$1 = cljs.core.keys(inst_44886);
var inst_44888 = cljs.core.count(inst_44887__$1);
var inst_44889 = cljs.core.reset_BANG_(dctr,inst_44888);
var inst_44894 = cljs.core.seq(inst_44887__$1);
var inst_44895 = inst_44894;
var inst_44896 = null;
var inst_44897 = (0);
var inst_44898 = (0);
var state_44961__$1 = (function (){var statearr_45048 = state_44961;
(statearr_45048[(19)] = inst_44897);

(statearr_45048[(20)] = inst_44895);

(statearr_45048[(9)] = inst_44898);

(statearr_45048[(11)] = inst_44896);

(statearr_45048[(28)] = inst_44889);

(statearr_45048[(27)] = inst_44887__$1);

return statearr_45048;
})();
var statearr_45054_47625 = state_44961__$1;
(statearr_45054_47625[(2)] = null);

(statearr_45054_47625[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (28))){
var inst_44895 = (state_44961[(20)]);
var inst_44914 = (state_44961[(23)]);
var inst_44914__$1 = cljs.core.seq(inst_44895);
var state_44961__$1 = (function (){var statearr_45059 = state_44961;
(statearr_45059[(23)] = inst_44914__$1);

return statearr_45059;
})();
if(inst_44914__$1){
var statearr_45060_47626 = state_44961__$1;
(statearr_45060_47626[(1)] = (33));

} else {
var statearr_45061_47627 = state_44961__$1;
(statearr_45061_47627[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (25))){
var inst_44897 = (state_44961[(19)]);
var inst_44898 = (state_44961[(9)]);
var inst_44900 = (inst_44898 < inst_44897);
var inst_44901 = inst_44900;
var state_44961__$1 = state_44961;
if(cljs.core.truth_(inst_44901)){
var statearr_45062_47629 = state_44961__$1;
(statearr_45062_47629[(1)] = (27));

} else {
var statearr_45063_47630 = state_44961__$1;
(statearr_45063_47630[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (34))){
var state_44961__$1 = state_44961;
var statearr_45067_47631 = state_44961__$1;
(statearr_45067_47631[(2)] = null);

(statearr_45067_47631[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (17))){
var state_44961__$1 = state_44961;
var statearr_45070_47632 = state_44961__$1;
(statearr_45070_47632[(2)] = null);

(statearr_45070_47632[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (3))){
var inst_44957 = (state_44961[(2)]);
var state_44961__$1 = state_44961;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44961__$1,inst_44957);
} else {
if((state_val_44962 === (12))){
var inst_44882 = (state_44961[(2)]);
var state_44961__$1 = state_44961;
var statearr_45072_47633 = state_44961__$1;
(statearr_45072_47633[(2)] = inst_44882);

(statearr_45072_47633[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (2))){
var state_44961__$1 = state_44961;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44961__$1,(4),ch);
} else {
if((state_val_44962 === (23))){
var state_44961__$1 = state_44961;
var statearr_45078_47635 = state_44961__$1;
(statearr_45078_47635[(2)] = null);

(statearr_45078_47635[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (35))){
var inst_44941 = (state_44961[(2)]);
var state_44961__$1 = state_44961;
var statearr_45082_47636 = state_44961__$1;
(statearr_45082_47636[(2)] = inst_44941);

(statearr_45082_47636[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (19))){
var inst_44850 = (state_44961[(7)]);
var inst_44857 = cljs.core.chunk_first(inst_44850);
var inst_44858 = cljs.core.chunk_rest(inst_44850);
var inst_44859 = cljs.core.count(inst_44857);
var inst_44828 = inst_44858;
var inst_44829 = inst_44857;
var inst_44830 = inst_44859;
var inst_44831 = (0);
var state_44961__$1 = (function (){var statearr_45085 = state_44961;
(statearr_45085[(13)] = inst_44831);

(statearr_45085[(14)] = inst_44829);

(statearr_45085[(16)] = inst_44828);

(statearr_45085[(17)] = inst_44830);

return statearr_45085;
})();
var statearr_45086_47643 = state_44961__$1;
(statearr_45086_47643[(2)] = null);

(statearr_45086_47643[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (11))){
var inst_44850 = (state_44961[(7)]);
var inst_44828 = (state_44961[(16)]);
var inst_44850__$1 = cljs.core.seq(inst_44828);
var state_44961__$1 = (function (){var statearr_45088 = state_44961;
(statearr_45088[(7)] = inst_44850__$1);

return statearr_45088;
})();
if(inst_44850__$1){
var statearr_45093_47653 = state_44961__$1;
(statearr_45093_47653[(1)] = (16));

} else {
var statearr_45094_47655 = state_44961__$1;
(statearr_45094_47655[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (9))){
var inst_44884 = (state_44961[(2)]);
var state_44961__$1 = state_44961;
var statearr_45096_47659 = state_44961__$1;
(statearr_45096_47659[(2)] = inst_44884);

(statearr_45096_47659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (5))){
var inst_44826 = cljs.core.deref(cs);
var inst_44827 = cljs.core.seq(inst_44826);
var inst_44828 = inst_44827;
var inst_44829 = null;
var inst_44830 = (0);
var inst_44831 = (0);
var state_44961__$1 = (function (){var statearr_45097 = state_44961;
(statearr_45097[(13)] = inst_44831);

(statearr_45097[(14)] = inst_44829);

(statearr_45097[(16)] = inst_44828);

(statearr_45097[(17)] = inst_44830);

return statearr_45097;
})();
var statearr_45098_47660 = state_44961__$1;
(statearr_45098_47660[(2)] = null);

(statearr_45098_47660[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (14))){
var state_44961__$1 = state_44961;
var statearr_45100_47662 = state_44961__$1;
(statearr_45100_47662[(2)] = null);

(statearr_45100_47662[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (45))){
var inst_44949 = (state_44961[(2)]);
var state_44961__$1 = state_44961;
var statearr_45108_47668 = state_44961__$1;
(statearr_45108_47668[(2)] = inst_44949);

(statearr_45108_47668[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (26))){
var inst_44887 = (state_44961[(27)]);
var inst_44945 = (state_44961[(2)]);
var inst_44946 = cljs.core.seq(inst_44887);
var state_44961__$1 = (function (){var statearr_45110 = state_44961;
(statearr_45110[(29)] = inst_44945);

return statearr_45110;
})();
if(inst_44946){
var statearr_45111_47672 = state_44961__$1;
(statearr_45111_47672[(1)] = (42));

} else {
var statearr_45113_47673 = state_44961__$1;
(statearr_45113_47673[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (16))){
var inst_44850 = (state_44961[(7)]);
var inst_44855 = cljs.core.chunked_seq_QMARK_(inst_44850);
var state_44961__$1 = state_44961;
if(inst_44855){
var statearr_45114_47674 = state_44961__$1;
(statearr_45114_47674[(1)] = (19));

} else {
var statearr_45115_47675 = state_44961__$1;
(statearr_45115_47675[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (38))){
var inst_44938 = (state_44961[(2)]);
var state_44961__$1 = state_44961;
var statearr_45119_47679 = state_44961__$1;
(statearr_45119_47679[(2)] = inst_44938);

(statearr_45119_47679[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (30))){
var state_44961__$1 = state_44961;
var statearr_45121_47681 = state_44961__$1;
(statearr_45121_47681[(2)] = null);

(statearr_45121_47681[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (10))){
var inst_44831 = (state_44961[(13)]);
var inst_44829 = (state_44961[(14)]);
var inst_44839 = cljs.core._nth(inst_44829,inst_44831);
var inst_44840 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44839,(0),null);
var inst_44841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44839,(1),null);
var state_44961__$1 = (function (){var statearr_45123 = state_44961;
(statearr_45123[(24)] = inst_44840);

return statearr_45123;
})();
if(cljs.core.truth_(inst_44841)){
var statearr_45124_47686 = state_44961__$1;
(statearr_45124_47686[(1)] = (13));

} else {
var statearr_45125_47690 = state_44961__$1;
(statearr_45125_47690[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (18))){
var inst_44880 = (state_44961[(2)]);
var state_44961__$1 = state_44961;
var statearr_45126_47691 = state_44961__$1;
(statearr_45126_47691[(2)] = inst_44880);

(statearr_45126_47691[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (42))){
var state_44961__$1 = state_44961;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44961__$1,(45),dchan);
} else {
if((state_val_44962 === (37))){
var inst_44928 = (state_44961[(22)]);
var inst_44818 = (state_44961[(10)]);
var inst_44914 = (state_44961[(23)]);
var inst_44928__$1 = cljs.core.first(inst_44914);
var inst_44929 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44928__$1,inst_44818,done);
var state_44961__$1 = (function (){var statearr_45128 = state_44961;
(statearr_45128[(22)] = inst_44928__$1);

return statearr_45128;
})();
if(cljs.core.truth_(inst_44929)){
var statearr_45131_47699 = state_44961__$1;
(statearr_45131_47699[(1)] = (39));

} else {
var statearr_45132_47700 = state_44961__$1;
(statearr_45132_47700[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44962 === (8))){
var inst_44831 = (state_44961[(13)]);
var inst_44830 = (state_44961[(17)]);
var inst_44833 = (inst_44831 < inst_44830);
var inst_44834 = inst_44833;
var state_44961__$1 = state_44961;
if(cljs.core.truth_(inst_44834)){
var statearr_45136_47703 = state_44961__$1;
(statearr_45136_47703[(1)] = (10));

} else {
var statearr_45137_47704 = state_44961__$1;
(statearr_45137_47704[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__42922__auto__ = null;
var cljs$core$async$mult_$_state_machine__42922__auto____0 = (function (){
var statearr_45142 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45142[(0)] = cljs$core$async$mult_$_state_machine__42922__auto__);

(statearr_45142[(1)] = (1));

return statearr_45142;
});
var cljs$core$async$mult_$_state_machine__42922__auto____1 = (function (state_44961){
while(true){
var ret_value__42923__auto__ = (function (){try{while(true){
var result__42924__auto__ = switch__42921__auto__(state_44961);
if(cljs.core.keyword_identical_QMARK_(result__42924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42924__auto__;
}
break;
}
}catch (e45143){var ex__42925__auto__ = e45143;
var statearr_45144_47712 = state_44961;
(statearr_45144_47712[(2)] = ex__42925__auto__);


if(cljs.core.seq((state_44961[(4)]))){
var statearr_45146_47713 = state_44961;
(statearr_45146_47713[(1)] = cljs.core.first((state_44961[(4)])));

} else {
throw ex__42925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47715 = state_44961;
state_44961 = G__47715;
continue;
} else {
return ret_value__42923__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__42922__auto__ = function(state_44961){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__42922__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__42922__auto____1.call(this,state_44961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__42922__auto____0;
cljs$core$async$mult_$_state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__42922__auto____1;
return cljs$core$async$mult_$_state_machine__42922__auto__;
})()
})();
var state__43521__auto__ = (function (){var statearr_45147 = f__43520__auto__();
(statearr_45147[(6)] = c__43519__auto___47483);

return statearr_45147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43521__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__45150 = arguments.length;
switch (G__45150) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_47727 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_47727(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_47731 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_47731(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_47732 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_47732(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_47733 = (function (m,state_map){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4522__auto__.call(null,m,state_map));
} else {
var m__4519__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4519__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_47733(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_47734 = (function (m,mode){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4522__auto__.call(null,m,mode));
} else {
var m__4519__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4519__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_47734(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___47743 = arguments.length;
var i__4830__auto___47744 = (0);
while(true){
if((i__4830__auto___47744 < len__4829__auto___47743)){
args__4835__auto__.push((arguments[i__4830__auto___47744]));

var G__47747 = (i__4830__auto___47744 + (1));
i__4830__auto___47744 = G__47747;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45200){
var map__45201 = p__45200;
var map__45201__$1 = cljs.core.__destructure_map(map__45201);
var opts = map__45201__$1;
var statearr_45202_47752 = state;
(statearr_45202_47752[(1)] = cont_block);


var temp__5754__auto__ = cljs.core.async.do_alts((function (val){
var statearr_45203_47759 = state;
(statearr_45203_47759[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5754__auto__)){
var cb = temp__5754__auto__;
var statearr_45206_47766 = state;
(statearr_45206_47766[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45194){
var G__45195 = cljs.core.first(seq45194);
var seq45194__$1 = cljs.core.next(seq45194);
var G__45196 = cljs.core.first(seq45194__$1);
var seq45194__$2 = cljs.core.next(seq45194__$1);
var G__45197 = cljs.core.first(seq45194__$2);
var seq45194__$3 = cljs.core.next(seq45194__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45195,G__45196,G__45197,seq45194__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45215 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45215 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45216){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta45216 = meta45216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45217,meta45216__$1){
var self__ = this;
var _45217__$1 = this;
return (new cljs.core.async.t_cljs$core$async45215(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta45216__$1));
}));

(cljs.core.async.t_cljs$core$async45215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45217){
var self__ = this;
var _45217__$1 = this;
return self__.meta45216;
}));

(cljs.core.async.t_cljs$core$async45215.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45215.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async45215.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45215.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45215.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45215.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45215.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45215.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45215.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta45216","meta45216",-1774668432,null)], null);
}));

(cljs.core.async.t_cljs$core$async45215.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45215.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45215");

(cljs.core.async.t_cljs$core$async45215.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async45215");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45215.
 */
cljs.core.async.__GT_t_cljs$core$async45215 = (function cljs$core$async$mix_$___GT_t_cljs$core$async45215(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45216){
return (new cljs.core.async.t_cljs$core$async45215(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45216));
});

}

return (new cljs.core.async.t_cljs$core$async45215(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43519__auto___47803 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43520__auto__ = (function (){var switch__42921__auto__ = (function (state_45316){
var state_val_45317 = (state_45316[(1)]);
if((state_val_45317 === (7))){
var inst_45268 = (state_45316[(2)]);
var state_45316__$1 = state_45316;
if(cljs.core.truth_(inst_45268)){
var statearr_45318_47804 = state_45316__$1;
(statearr_45318_47804[(1)] = (8));

} else {
var statearr_45321_47805 = state_45316__$1;
(statearr_45321_47805[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45317 === (20))){
var inst_45260 = (state_45316[(7)]);
var state_45316__$1 = state_45316;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45316__$1,(23),out,inst_45260);
} else {
if((state_val_45317 === (1))){
var inst_45241 = calc_state();
var inst_45242 = cljs.core.__destructure_map(inst_45241);
var inst_45243 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45242,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45242,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45245 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45242,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45246 = inst_45241;
var state_45316__$1 = (function (){var statearr_45325 = state_45316;
(statearr_45325[(8)] = inst_45244);

(statearr_45325[(9)] = inst_45246);

(statearr_45325[(10)] = inst_45245);

(statearr_45325[(11)] = inst_45243);

return statearr_45325;
})();
var statearr_45326_47818 = state_45316__$1;
(statearr_45326_47818[(2)] = null);

(statearr_45326_47818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45317 === (24))){
var inst_45249 = (state_45316[(12)]);
var inst_45246 = inst_45249;
var state_45316__$1 = (function (){var statearr_45327 = state_45316;
(statearr_45327[(9)] = inst_45246);

return statearr_45327;
})();
var statearr_45328_47819 = state_45316__$1;
(statearr_45328_47819[(2)] = null);

(statearr_45328_47819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45317 === (4))){
var inst_45262 = (state_45316[(13)]);
var inst_45260 = (state_45316[(7)]);
var inst_45259 = (state_45316[(2)]);
var inst_45260__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45259,(0),null);
var inst_45261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45259,(1),null);
var inst_45262__$1 = (inst_45260__$1 == null);
var state_45316__$1 = (function (){var statearr_45331 = state_45316;
(statearr_45331[(13)] = inst_45262__$1);

(statearr_45331[(7)] = inst_45260__$1);

(statearr_45331[(14)] = inst_45261);

return statearr_45331;
})();
if(cljs.core.truth_(inst_45262__$1)){
var statearr_45334_47821 = state_45316__$1;
(statearr_45334_47821[(1)] = (5));

} else {
var statearr_45335_47822 = state_45316__$1;
(statearr_45335_47822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45317 === (15))){
var inst_45286 = (state_45316[(15)]);
var inst_45250 = (state_45316[(16)]);
var inst_45286__$1 = cljs.core.empty_QMARK_(inst_45250);
var state_45316__$1 = (function (){var statearr_45336 = state_45316;
(statearr_45336[(15)] = inst_45286__$1);

return statearr_45336;
})();
if(inst_45286__$1){
var statearr_45338_47826 = state_45316__$1;
(statearr_45338_47826[(1)] = (17));

} else {
var statearr_45340_47827 = state_45316__$1;
(statearr_45340_47827[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45317 === (21))){
var inst_45249 = (state_45316[(12)]);
var inst_45246 = inst_45249;
var state_45316__$1 = (function (){var statearr_45343 = state_45316;
(statearr_45343[(9)] = inst_45246);

return statearr_45343;
})();
var statearr_45344_47831 = state_45316__$1;
(statearr_45344_47831[(2)] = null);

(statearr_45344_47831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45317 === (13))){
var inst_45275 = (state_45316[(2)]);
var inst_45276 = calc_state();
var inst_45246 = inst_45276;
var state_45316__$1 = (function (){var statearr_45347 = state_45316;
(statearr_45347[(9)] = inst_45246);

(statearr_45347[(17)] = inst_45275);

return statearr_45347;
})();
var statearr_45349_47834 = state_45316__$1;
(statearr_45349_47834[(2)] = null);

(statearr_45349_47834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45317 === (22))){
var inst_45308 = (state_45316[(2)]);
var state_45316__$1 = state_45316;
var statearr_45351_47839 = state_45316__$1;
(statearr_45351_47839[(2)] = inst_45308);

(statearr_45351_47839[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45317 === (6))){
var inst_45261 = (state_45316[(14)]);
var inst_45266 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45261,change);
var state_45316__$1 = state_45316;
var statearr_45352_47843 = state_45316__$1;
(statearr_45352_47843[(2)] = inst_45266);

(statearr_45352_47843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45317 === (25))){
var state_45316__$1 = state_45316;
var statearr_45353_47844 = state_45316__$1;
(statearr_45353_47844[(2)] = null);

(statearr_45353_47844[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45317 === (17))){
var inst_45261 = (state_45316[(14)]);
var inst_45251 = (state_45316[(18)]);
var inst_45288 = (inst_45251.cljs$core$IFn$_invoke$arity$1 ? inst_45251.cljs$core$IFn$_invoke$arity$1(inst_45261) : inst_45251.call(null,inst_45261));
var inst_45289 = cljs.core.not(inst_45288);
var state_45316__$1 = state_45316;
var statearr_45360_47851 = state_45316__$1;
(statearr_45360_47851[(2)] = inst_45289);

(statearr_45360_47851[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45317 === (3))){
var inst_45312 = (state_45316[(2)]);
var state_45316__$1 = state_45316;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45316__$1,inst_45312);
} else {
if((state_val_45317 === (12))){
var state_45316__$1 = state_45316;
var statearr_45362_47857 = state_45316__$1;
(statearr_45362_47857[(2)] = null);

(statearr_45362_47857[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45317 === (2))){
var inst_45246 = (state_45316[(9)]);
var inst_45249 = (state_45316[(12)]);
var inst_45249__$1 = cljs.core.__destructure_map(inst_45246);
var inst_45250 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45249__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45251 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45249__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45252 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45249__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45316__$1 = (function (){var statearr_45363 = state_45316;
(statearr_45363[(16)] = inst_45250);

(statearr_45363[(12)] = inst_45249__$1);

(statearr_45363[(18)] = inst_45251);

return statearr_45363;
})();
return cljs.core.async.ioc_alts_BANG_(state_45316__$1,(4),inst_45252);
} else {
if((state_val_45317 === (23))){
var inst_45297 = (state_45316[(2)]);
var state_45316__$1 = state_45316;
if(cljs.core.truth_(inst_45297)){
var statearr_45364_47868 = state_45316__$1;
(statearr_45364_47868[(1)] = (24));

} else {
var statearr_45365_47870 = state_45316__$1;
(statearr_45365_47870[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45317 === (19))){
var inst_45292 = (state_45316[(2)]);
var state_45316__$1 = state_45316;
var statearr_45366_47873 = state_45316__$1;
(statearr_45366_47873[(2)] = inst_45292);

(statearr_45366_47873[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45317 === (11))){
var inst_45261 = (state_45316[(14)]);
var inst_45272 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_45261);
var state_45316__$1 = state_45316;
var statearr_45367_47875 = state_45316__$1;
(statearr_45367_47875[(2)] = inst_45272);

(statearr_45367_47875[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45317 === (9))){
var inst_45280 = (state_45316[(19)]);
var inst_45250 = (state_45316[(16)]);
var inst_45261 = (state_45316[(14)]);
var inst_45280__$1 = (inst_45250.cljs$core$IFn$_invoke$arity$1 ? inst_45250.cljs$core$IFn$_invoke$arity$1(inst_45261) : inst_45250.call(null,inst_45261));
var state_45316__$1 = (function (){var statearr_45370 = state_45316;
(statearr_45370[(19)] = inst_45280__$1);

return statearr_45370;
})();
if(cljs.core.truth_(inst_45280__$1)){
var statearr_45371_47879 = state_45316__$1;
(statearr_45371_47879[(1)] = (14));

} else {
var statearr_45372_47880 = state_45316__$1;
(statearr_45372_47880[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45317 === (5))){
var inst_45262 = (state_45316[(13)]);
var state_45316__$1 = state_45316;
var statearr_45373_47881 = state_45316__$1;
(statearr_45373_47881[(2)] = inst_45262);

(statearr_45373_47881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45317 === (14))){
var inst_45280 = (state_45316[(19)]);
var state_45316__$1 = state_45316;
var statearr_45375_47882 = state_45316__$1;
(statearr_45375_47882[(2)] = inst_45280);

(statearr_45375_47882[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45317 === (26))){
var inst_45302 = (state_45316[(2)]);
var state_45316__$1 = state_45316;
var statearr_45376_47883 = state_45316__$1;
(statearr_45376_47883[(2)] = inst_45302);

(statearr_45376_47883[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45317 === (16))){
var inst_45294 = (state_45316[(2)]);
var state_45316__$1 = state_45316;
if(cljs.core.truth_(inst_45294)){
var statearr_45381_47884 = state_45316__$1;
(statearr_45381_47884[(1)] = (20));

} else {
var statearr_45383_47885 = state_45316__$1;
(statearr_45383_47885[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45317 === (10))){
var inst_45310 = (state_45316[(2)]);
var state_45316__$1 = state_45316;
var statearr_45385_47889 = state_45316__$1;
(statearr_45385_47889[(2)] = inst_45310);

(statearr_45385_47889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45317 === (18))){
var inst_45286 = (state_45316[(15)]);
var state_45316__$1 = state_45316;
var statearr_45387_47893 = state_45316__$1;
(statearr_45387_47893[(2)] = inst_45286);

(statearr_45387_47893[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45317 === (8))){
var inst_45260 = (state_45316[(7)]);
var inst_45270 = (inst_45260 == null);
var state_45316__$1 = state_45316;
if(cljs.core.truth_(inst_45270)){
var statearr_45388_47898 = state_45316__$1;
(statearr_45388_47898[(1)] = (11));

} else {
var statearr_45389_47899 = state_45316__$1;
(statearr_45389_47899[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__42922__auto__ = null;
var cljs$core$async$mix_$_state_machine__42922__auto____0 = (function (){
var statearr_45393 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45393[(0)] = cljs$core$async$mix_$_state_machine__42922__auto__);

(statearr_45393[(1)] = (1));

return statearr_45393;
});
var cljs$core$async$mix_$_state_machine__42922__auto____1 = (function (state_45316){
while(true){
var ret_value__42923__auto__ = (function (){try{while(true){
var result__42924__auto__ = switch__42921__auto__(state_45316);
if(cljs.core.keyword_identical_QMARK_(result__42924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42924__auto__;
}
break;
}
}catch (e45394){var ex__42925__auto__ = e45394;
var statearr_45395_47900 = state_45316;
(statearr_45395_47900[(2)] = ex__42925__auto__);


if(cljs.core.seq((state_45316[(4)]))){
var statearr_45397_47901 = state_45316;
(statearr_45397_47901[(1)] = cljs.core.first((state_45316[(4)])));

} else {
throw ex__42925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47902 = state_45316;
state_45316 = G__47902;
continue;
} else {
return ret_value__42923__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__42922__auto__ = function(state_45316){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__42922__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__42922__auto____1.call(this,state_45316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__42922__auto____0;
cljs$core$async$mix_$_state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__42922__auto____1;
return cljs$core$async$mix_$_state_machine__42922__auto__;
})()
})();
var state__43521__auto__ = (function (){var statearr_45398 = f__43520__auto__();
(statearr_45398[(6)] = c__43519__auto___47803);

return statearr_45398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43521__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_47907 = (function (p,v,ch,close_QMARK_){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4522__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4519__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_47907(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_47908 = (function (p,v,ch){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4522__auto__.call(null,p,v,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4519__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_47908(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_47912 = (function() {
var G__47913 = null;
var G__47913__1 = (function (p){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4522__auto__.call(null,p));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4519__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__47913__2 = (function (p,v){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4522__auto__.call(null,p,v));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4519__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__47913 = function(p,v){
switch(arguments.length){
case 1:
return G__47913__1.call(this,p);
case 2:
return G__47913__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47913.cljs$core$IFn$_invoke$arity$1 = G__47913__1;
G__47913.cljs$core$IFn$_invoke$arity$2 = G__47913__2;
return G__47913;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__45422 = arguments.length;
switch (G__45422) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47912(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47912(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__45433 = arguments.length;
switch (G__45433) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__45431_SHARP_){
if(cljs.core.truth_((p1__45431_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45431_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__45431_SHARP_.call(null,topic)))){
return p1__45431_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__45431_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45435 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45435 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45436){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45436 = meta45436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45437,meta45436__$1){
var self__ = this;
var _45437__$1 = this;
return (new cljs.core.async.t_cljs$core$async45435(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45436__$1));
}));

(cljs.core.async.t_cljs$core$async45435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45437){
var self__ = this;
var _45437__$1 = this;
return self__.meta45436;
}));

(cljs.core.async.t_cljs$core$async45435.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45435.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45435.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45435.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async45435.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5754__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5754__auto__)){
var m = temp__5754__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async45435.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async45435.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async45435.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45436","meta45436",-1754647046,null)], null);
}));

(cljs.core.async.t_cljs$core$async45435.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45435.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45435");

(cljs.core.async.t_cljs$core$async45435.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async45435");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45435.
 */
cljs.core.async.__GT_t_cljs$core$async45435 = (function cljs$core$async$__GT_t_cljs$core$async45435(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45436){
return (new cljs.core.async.t_cljs$core$async45435(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45436));
});

}

return (new cljs.core.async.t_cljs$core$async45435(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43519__auto___47952 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43520__auto__ = (function (){var switch__42921__auto__ = (function (state_45523){
var state_val_45524 = (state_45523[(1)]);
if((state_val_45524 === (7))){
var inst_45518 = (state_45523[(2)]);
var state_45523__$1 = state_45523;
var statearr_45526_47956 = state_45523__$1;
(statearr_45526_47956[(2)] = inst_45518);

(statearr_45526_47956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (20))){
var state_45523__$1 = state_45523;
var statearr_45527_47957 = state_45523__$1;
(statearr_45527_47957[(2)] = null);

(statearr_45527_47957[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (1))){
var state_45523__$1 = state_45523;
var statearr_45536_47959 = state_45523__$1;
(statearr_45536_47959[(2)] = null);

(statearr_45536_47959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (24))){
var inst_45501 = (state_45523[(7)]);
var inst_45510 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_45501);
var state_45523__$1 = state_45523;
var statearr_45540_47963 = state_45523__$1;
(statearr_45540_47963[(2)] = inst_45510);

(statearr_45540_47963[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (4))){
var inst_45451 = (state_45523[(8)]);
var inst_45451__$1 = (state_45523[(2)]);
var inst_45452 = (inst_45451__$1 == null);
var state_45523__$1 = (function (){var statearr_45542 = state_45523;
(statearr_45542[(8)] = inst_45451__$1);

return statearr_45542;
})();
if(cljs.core.truth_(inst_45452)){
var statearr_45543_47965 = state_45523__$1;
(statearr_45543_47965[(1)] = (5));

} else {
var statearr_45544_47966 = state_45523__$1;
(statearr_45544_47966[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (15))){
var inst_45495 = (state_45523[(2)]);
var state_45523__$1 = state_45523;
var statearr_45545_47967 = state_45523__$1;
(statearr_45545_47967[(2)] = inst_45495);

(statearr_45545_47967[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (21))){
var inst_45515 = (state_45523[(2)]);
var state_45523__$1 = (function (){var statearr_45546 = state_45523;
(statearr_45546[(9)] = inst_45515);

return statearr_45546;
})();
var statearr_45547_47971 = state_45523__$1;
(statearr_45547_47971[(2)] = null);

(statearr_45547_47971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (13))){
var inst_45476 = (state_45523[(10)]);
var inst_45479 = cljs.core.chunked_seq_QMARK_(inst_45476);
var state_45523__$1 = state_45523;
if(inst_45479){
var statearr_45548_47979 = state_45523__$1;
(statearr_45548_47979[(1)] = (16));

} else {
var statearr_45549_47980 = state_45523__$1;
(statearr_45549_47980[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (22))){
var inst_45507 = (state_45523[(2)]);
var state_45523__$1 = state_45523;
if(cljs.core.truth_(inst_45507)){
var statearr_45553_47981 = state_45523__$1;
(statearr_45553_47981[(1)] = (23));

} else {
var statearr_45554_47985 = state_45523__$1;
(statearr_45554_47985[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (6))){
var inst_45451 = (state_45523[(8)]);
var inst_45503 = (state_45523[(11)]);
var inst_45501 = (state_45523[(7)]);
var inst_45501__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_45451) : topic_fn.call(null,inst_45451));
var inst_45502 = cljs.core.deref(mults);
var inst_45503__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45502,inst_45501__$1);
var state_45523__$1 = (function (){var statearr_45559 = state_45523;
(statearr_45559[(11)] = inst_45503__$1);

(statearr_45559[(7)] = inst_45501__$1);

return statearr_45559;
})();
if(cljs.core.truth_(inst_45503__$1)){
var statearr_45560_47990 = state_45523__$1;
(statearr_45560_47990[(1)] = (19));

} else {
var statearr_45561_47991 = state_45523__$1;
(statearr_45561_47991[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (25))){
var inst_45512 = (state_45523[(2)]);
var state_45523__$1 = state_45523;
var statearr_45565_47992 = state_45523__$1;
(statearr_45565_47992[(2)] = inst_45512);

(statearr_45565_47992[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (17))){
var inst_45476 = (state_45523[(10)]);
var inst_45486 = cljs.core.first(inst_45476);
var inst_45487 = cljs.core.async.muxch_STAR_(inst_45486);
var inst_45488 = cljs.core.async.close_BANG_(inst_45487);
var inst_45489 = cljs.core.next(inst_45476);
var inst_45462 = inst_45489;
var inst_45463 = null;
var inst_45464 = (0);
var inst_45465 = (0);
var state_45523__$1 = (function (){var statearr_45566 = state_45523;
(statearr_45566[(12)] = inst_45488);

(statearr_45566[(13)] = inst_45463);

(statearr_45566[(14)] = inst_45465);

(statearr_45566[(15)] = inst_45462);

(statearr_45566[(16)] = inst_45464);

return statearr_45566;
})();
var statearr_45567_47997 = state_45523__$1;
(statearr_45567_47997[(2)] = null);

(statearr_45567_47997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (3))){
var inst_45520 = (state_45523[(2)]);
var state_45523__$1 = state_45523;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45523__$1,inst_45520);
} else {
if((state_val_45524 === (12))){
var inst_45497 = (state_45523[(2)]);
var state_45523__$1 = state_45523;
var statearr_45569_47998 = state_45523__$1;
(statearr_45569_47998[(2)] = inst_45497);

(statearr_45569_47998[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (2))){
var state_45523__$1 = state_45523;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45523__$1,(4),ch);
} else {
if((state_val_45524 === (23))){
var state_45523__$1 = state_45523;
var statearr_45572_47999 = state_45523__$1;
(statearr_45572_47999[(2)] = null);

(statearr_45572_47999[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (19))){
var inst_45451 = (state_45523[(8)]);
var inst_45503 = (state_45523[(11)]);
var inst_45505 = cljs.core.async.muxch_STAR_(inst_45503);
var state_45523__$1 = state_45523;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45523__$1,(22),inst_45505,inst_45451);
} else {
if((state_val_45524 === (11))){
var inst_45476 = (state_45523[(10)]);
var inst_45462 = (state_45523[(15)]);
var inst_45476__$1 = cljs.core.seq(inst_45462);
var state_45523__$1 = (function (){var statearr_45576 = state_45523;
(statearr_45576[(10)] = inst_45476__$1);

return statearr_45576;
})();
if(inst_45476__$1){
var statearr_45577_48000 = state_45523__$1;
(statearr_45577_48000[(1)] = (13));

} else {
var statearr_45578_48001 = state_45523__$1;
(statearr_45578_48001[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (9))){
var inst_45499 = (state_45523[(2)]);
var state_45523__$1 = state_45523;
var statearr_45579_48002 = state_45523__$1;
(statearr_45579_48002[(2)] = inst_45499);

(statearr_45579_48002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (5))){
var inst_45459 = cljs.core.deref(mults);
var inst_45460 = cljs.core.vals(inst_45459);
var inst_45461 = cljs.core.seq(inst_45460);
var inst_45462 = inst_45461;
var inst_45463 = null;
var inst_45464 = (0);
var inst_45465 = (0);
var state_45523__$1 = (function (){var statearr_45582 = state_45523;
(statearr_45582[(13)] = inst_45463);

(statearr_45582[(14)] = inst_45465);

(statearr_45582[(15)] = inst_45462);

(statearr_45582[(16)] = inst_45464);

return statearr_45582;
})();
var statearr_45585_48003 = state_45523__$1;
(statearr_45585_48003[(2)] = null);

(statearr_45585_48003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (14))){
var state_45523__$1 = state_45523;
var statearr_45589_48006 = state_45523__$1;
(statearr_45589_48006[(2)] = null);

(statearr_45589_48006[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (16))){
var inst_45476 = (state_45523[(10)]);
var inst_45481 = cljs.core.chunk_first(inst_45476);
var inst_45482 = cljs.core.chunk_rest(inst_45476);
var inst_45483 = cljs.core.count(inst_45481);
var inst_45462 = inst_45482;
var inst_45463 = inst_45481;
var inst_45464 = inst_45483;
var inst_45465 = (0);
var state_45523__$1 = (function (){var statearr_45599 = state_45523;
(statearr_45599[(13)] = inst_45463);

(statearr_45599[(14)] = inst_45465);

(statearr_45599[(15)] = inst_45462);

(statearr_45599[(16)] = inst_45464);

return statearr_45599;
})();
var statearr_45600_48008 = state_45523__$1;
(statearr_45600_48008[(2)] = null);

(statearr_45600_48008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (10))){
var inst_45463 = (state_45523[(13)]);
var inst_45465 = (state_45523[(14)]);
var inst_45462 = (state_45523[(15)]);
var inst_45464 = (state_45523[(16)]);
var inst_45470 = cljs.core._nth(inst_45463,inst_45465);
var inst_45471 = cljs.core.async.muxch_STAR_(inst_45470);
var inst_45472 = cljs.core.async.close_BANG_(inst_45471);
var inst_45473 = (inst_45465 + (1));
var tmp45586 = inst_45463;
var tmp45587 = inst_45462;
var tmp45588 = inst_45464;
var inst_45462__$1 = tmp45587;
var inst_45463__$1 = tmp45586;
var inst_45464__$1 = tmp45588;
var inst_45465__$1 = inst_45473;
var state_45523__$1 = (function (){var statearr_45605 = state_45523;
(statearr_45605[(13)] = inst_45463__$1);

(statearr_45605[(14)] = inst_45465__$1);

(statearr_45605[(17)] = inst_45472);

(statearr_45605[(15)] = inst_45462__$1);

(statearr_45605[(16)] = inst_45464__$1);

return statearr_45605;
})();
var statearr_45606_48010 = state_45523__$1;
(statearr_45606_48010[(2)] = null);

(statearr_45606_48010[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (18))){
var inst_45492 = (state_45523[(2)]);
var state_45523__$1 = state_45523;
var statearr_45607_48011 = state_45523__$1;
(statearr_45607_48011[(2)] = inst_45492);

(statearr_45607_48011[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45524 === (8))){
var inst_45465 = (state_45523[(14)]);
var inst_45464 = (state_45523[(16)]);
var inst_45467 = (inst_45465 < inst_45464);
var inst_45468 = inst_45467;
var state_45523__$1 = state_45523;
if(cljs.core.truth_(inst_45468)){
var statearr_45608_48012 = state_45523__$1;
(statearr_45608_48012[(1)] = (10));

} else {
var statearr_45609_48013 = state_45523__$1;
(statearr_45609_48013[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42922__auto__ = null;
var cljs$core$async$state_machine__42922__auto____0 = (function (){
var statearr_45611 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45611[(0)] = cljs$core$async$state_machine__42922__auto__);

(statearr_45611[(1)] = (1));

return statearr_45611;
});
var cljs$core$async$state_machine__42922__auto____1 = (function (state_45523){
while(true){
var ret_value__42923__auto__ = (function (){try{while(true){
var result__42924__auto__ = switch__42921__auto__(state_45523);
if(cljs.core.keyword_identical_QMARK_(result__42924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42924__auto__;
}
break;
}
}catch (e45612){var ex__42925__auto__ = e45612;
var statearr_45613_48020 = state_45523;
(statearr_45613_48020[(2)] = ex__42925__auto__);


if(cljs.core.seq((state_45523[(4)]))){
var statearr_45614_48021 = state_45523;
(statearr_45614_48021[(1)] = cljs.core.first((state_45523[(4)])));

} else {
throw ex__42925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48022 = state_45523;
state_45523 = G__48022;
continue;
} else {
return ret_value__42923__auto__;
}
break;
}
});
cljs$core$async$state_machine__42922__auto__ = function(state_45523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42922__auto____1.call(this,state_45523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42922__auto____0;
cljs$core$async$state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42922__auto____1;
return cljs$core$async$state_machine__42922__auto__;
})()
})();
var state__43521__auto__ = (function (){var statearr_45615 = f__43520__auto__();
(statearr_45615[(6)] = c__43519__auto___47952);

return statearr_45615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43521__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__45617 = arguments.length;
switch (G__45617) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__45629 = arguments.length;
switch (G__45629) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__45635 = arguments.length;
switch (G__45635) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__43519__auto___48053 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43520__auto__ = (function (){var switch__42921__auto__ = (function (state_45709){
var state_val_45710 = (state_45709[(1)]);
if((state_val_45710 === (7))){
var state_45709__$1 = state_45709;
var statearr_45715_48055 = state_45709__$1;
(statearr_45715_48055[(2)] = null);

(statearr_45715_48055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (1))){
var state_45709__$1 = state_45709;
var statearr_45717_48058 = state_45709__$1;
(statearr_45717_48058[(2)] = null);

(statearr_45717_48058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (4))){
var inst_45661 = (state_45709[(7)]);
var inst_45660 = (state_45709[(8)]);
var inst_45663 = (inst_45661 < inst_45660);
var state_45709__$1 = state_45709;
if(cljs.core.truth_(inst_45663)){
var statearr_45720_48063 = state_45709__$1;
(statearr_45720_48063[(1)] = (6));

} else {
var statearr_45722_48064 = state_45709__$1;
(statearr_45722_48064[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (15))){
var inst_45694 = (state_45709[(9)]);
var inst_45700 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_45694);
var state_45709__$1 = state_45709;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45709__$1,(17),out,inst_45700);
} else {
if((state_val_45710 === (13))){
var inst_45694 = (state_45709[(9)]);
var inst_45694__$1 = (state_45709[(2)]);
var inst_45695 = cljs.core.some(cljs.core.nil_QMARK_,inst_45694__$1);
var state_45709__$1 = (function (){var statearr_45726 = state_45709;
(statearr_45726[(9)] = inst_45694__$1);

return statearr_45726;
})();
if(cljs.core.truth_(inst_45695)){
var statearr_45731_48072 = state_45709__$1;
(statearr_45731_48072[(1)] = (14));

} else {
var statearr_45732_48077 = state_45709__$1;
(statearr_45732_48077[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (6))){
var state_45709__$1 = state_45709;
var statearr_45735_48078 = state_45709__$1;
(statearr_45735_48078[(2)] = null);

(statearr_45735_48078[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (17))){
var inst_45702 = (state_45709[(2)]);
var state_45709__$1 = (function (){var statearr_45747 = state_45709;
(statearr_45747[(10)] = inst_45702);

return statearr_45747;
})();
var statearr_45748_48081 = state_45709__$1;
(statearr_45748_48081[(2)] = null);

(statearr_45748_48081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (3))){
var inst_45707 = (state_45709[(2)]);
var state_45709__$1 = state_45709;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45709__$1,inst_45707);
} else {
if((state_val_45710 === (12))){
var _ = (function (){var statearr_45750 = state_45709;
(statearr_45750[(4)] = cljs.core.rest((state_45709[(4)])));

return statearr_45750;
})();
var state_45709__$1 = state_45709;
var ex45743 = (state_45709__$1[(2)]);
var statearr_45751_48103 = state_45709__$1;
(statearr_45751_48103[(5)] = ex45743);


if((ex45743 instanceof Object)){
var statearr_45754_48104 = state_45709__$1;
(statearr_45754_48104[(1)] = (11));

(statearr_45754_48104[(5)] = null);

} else {
throw ex45743;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (2))){
var inst_45659 = cljs.core.reset_BANG_(dctr,cnt);
var inst_45660 = cnt;
var inst_45661 = (0);
var state_45709__$1 = (function (){var statearr_45761 = state_45709;
(statearr_45761[(7)] = inst_45661);

(statearr_45761[(8)] = inst_45660);

(statearr_45761[(11)] = inst_45659);

return statearr_45761;
})();
var statearr_45762_48110 = state_45709__$1;
(statearr_45762_48110[(2)] = null);

(statearr_45762_48110[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (11))){
var inst_45672 = (state_45709[(2)]);
var inst_45673 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_45709__$1 = (function (){var statearr_45766 = state_45709;
(statearr_45766[(12)] = inst_45672);

return statearr_45766;
})();
var statearr_45767_48111 = state_45709__$1;
(statearr_45767_48111[(2)] = inst_45673);

(statearr_45767_48111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (9))){
var inst_45661 = (state_45709[(7)]);
var _ = (function (){var statearr_45768 = state_45709;
(statearr_45768[(4)] = cljs.core.cons((12),(state_45709[(4)])));

return statearr_45768;
})();
var inst_45680 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_45661) : chs__$1.call(null,inst_45661));
var inst_45681 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_45661) : done.call(null,inst_45661));
var inst_45682 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_45680,inst_45681);
var ___$1 = (function (){var statearr_45770 = state_45709;
(statearr_45770[(4)] = cljs.core.rest((state_45709[(4)])));

return statearr_45770;
})();
var state_45709__$1 = state_45709;
var statearr_45771_48117 = state_45709__$1;
(statearr_45771_48117[(2)] = inst_45682);

(statearr_45771_48117[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (5))){
var inst_45692 = (state_45709[(2)]);
var state_45709__$1 = (function (){var statearr_45775 = state_45709;
(statearr_45775[(13)] = inst_45692);

return statearr_45775;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45709__$1,(13),dchan);
} else {
if((state_val_45710 === (14))){
var inst_45697 = cljs.core.async.close_BANG_(out);
var state_45709__$1 = state_45709;
var statearr_45776_48120 = state_45709__$1;
(statearr_45776_48120[(2)] = inst_45697);

(statearr_45776_48120[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (16))){
var inst_45705 = (state_45709[(2)]);
var state_45709__$1 = state_45709;
var statearr_45782_48121 = state_45709__$1;
(statearr_45782_48121[(2)] = inst_45705);

(statearr_45782_48121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (10))){
var inst_45661 = (state_45709[(7)]);
var inst_45685 = (state_45709[(2)]);
var inst_45686 = (inst_45661 + (1));
var inst_45661__$1 = inst_45686;
var state_45709__$1 = (function (){var statearr_45789 = state_45709;
(statearr_45789[(14)] = inst_45685);

(statearr_45789[(7)] = inst_45661__$1);

return statearr_45789;
})();
var statearr_45796_48122 = state_45709__$1;
(statearr_45796_48122[(2)] = null);

(statearr_45796_48122[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45710 === (8))){
var inst_45690 = (state_45709[(2)]);
var state_45709__$1 = state_45709;
var statearr_45805_48125 = state_45709__$1;
(statearr_45805_48125[(2)] = inst_45690);

(statearr_45805_48125[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42922__auto__ = null;
var cljs$core$async$state_machine__42922__auto____0 = (function (){
var statearr_45807 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45807[(0)] = cljs$core$async$state_machine__42922__auto__);

(statearr_45807[(1)] = (1));

return statearr_45807;
});
var cljs$core$async$state_machine__42922__auto____1 = (function (state_45709){
while(true){
var ret_value__42923__auto__ = (function (){try{while(true){
var result__42924__auto__ = switch__42921__auto__(state_45709);
if(cljs.core.keyword_identical_QMARK_(result__42924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42924__auto__;
}
break;
}
}catch (e45811){var ex__42925__auto__ = e45811;
var statearr_45812_48131 = state_45709;
(statearr_45812_48131[(2)] = ex__42925__auto__);


if(cljs.core.seq((state_45709[(4)]))){
var statearr_45813_48133 = state_45709;
(statearr_45813_48133[(1)] = cljs.core.first((state_45709[(4)])));

} else {
throw ex__42925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48141 = state_45709;
state_45709 = G__48141;
continue;
} else {
return ret_value__42923__auto__;
}
break;
}
});
cljs$core$async$state_machine__42922__auto__ = function(state_45709){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42922__auto____1.call(this,state_45709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42922__auto____0;
cljs$core$async$state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42922__auto____1;
return cljs$core$async$state_machine__42922__auto__;
})()
})();
var state__43521__auto__ = (function (){var statearr_45817 = f__43520__auto__();
(statearr_45817[(6)] = c__43519__auto___48053);

return statearr_45817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43521__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__45824 = arguments.length;
switch (G__45824) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43519__auto___48171 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43520__auto__ = (function (){var switch__42921__auto__ = (function (state_45877){
var state_val_45879 = (state_45877[(1)]);
if((state_val_45879 === (7))){
var inst_45844 = (state_45877[(7)]);
var inst_45845 = (state_45877[(8)]);
var inst_45844__$1 = (state_45877[(2)]);
var inst_45845__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45844__$1,(0),null);
var inst_45847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45844__$1,(1),null);
var inst_45850 = (inst_45845__$1 == null);
var state_45877__$1 = (function (){var statearr_45883 = state_45877;
(statearr_45883[(7)] = inst_45844__$1);

(statearr_45883[(9)] = inst_45847);

(statearr_45883[(8)] = inst_45845__$1);

return statearr_45883;
})();
if(cljs.core.truth_(inst_45850)){
var statearr_45884_48199 = state_45877__$1;
(statearr_45884_48199[(1)] = (8));

} else {
var statearr_45885_48201 = state_45877__$1;
(statearr_45885_48201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45879 === (1))){
var inst_45833 = cljs.core.vec(chs);
var inst_45834 = inst_45833;
var state_45877__$1 = (function (){var statearr_45887 = state_45877;
(statearr_45887[(10)] = inst_45834);

return statearr_45887;
})();
var statearr_45888_48208 = state_45877__$1;
(statearr_45888_48208[(2)] = null);

(statearr_45888_48208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45879 === (4))){
var inst_45834 = (state_45877[(10)]);
var state_45877__$1 = state_45877;
return cljs.core.async.ioc_alts_BANG_(state_45877__$1,(7),inst_45834);
} else {
if((state_val_45879 === (6))){
var inst_45869 = (state_45877[(2)]);
var state_45877__$1 = state_45877;
var statearr_45893_48213 = state_45877__$1;
(statearr_45893_48213[(2)] = inst_45869);

(statearr_45893_48213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45879 === (3))){
var inst_45873 = (state_45877[(2)]);
var state_45877__$1 = state_45877;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45877__$1,inst_45873);
} else {
if((state_val_45879 === (2))){
var inst_45834 = (state_45877[(10)]);
var inst_45837 = cljs.core.count(inst_45834);
var inst_45838 = (inst_45837 > (0));
var state_45877__$1 = state_45877;
if(cljs.core.truth_(inst_45838)){
var statearr_45901_48222 = state_45877__$1;
(statearr_45901_48222[(1)] = (4));

} else {
var statearr_45903_48226 = state_45877__$1;
(statearr_45903_48226[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45879 === (11))){
var inst_45834 = (state_45877[(10)]);
var inst_45862 = (state_45877[(2)]);
var tmp45897 = inst_45834;
var inst_45834__$1 = tmp45897;
var state_45877__$1 = (function (){var statearr_45908 = state_45877;
(statearr_45908[(10)] = inst_45834__$1);

(statearr_45908[(11)] = inst_45862);

return statearr_45908;
})();
var statearr_45909_48231 = state_45877__$1;
(statearr_45909_48231[(2)] = null);

(statearr_45909_48231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45879 === (9))){
var inst_45845 = (state_45877[(8)]);
var state_45877__$1 = state_45877;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45877__$1,(11),out,inst_45845);
} else {
if((state_val_45879 === (5))){
var inst_45867 = cljs.core.async.close_BANG_(out);
var state_45877__$1 = state_45877;
var statearr_45918_48233 = state_45877__$1;
(statearr_45918_48233[(2)] = inst_45867);

(statearr_45918_48233[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45879 === (10))){
var inst_45865 = (state_45877[(2)]);
var state_45877__$1 = state_45877;
var statearr_45922_48234 = state_45877__$1;
(statearr_45922_48234[(2)] = inst_45865);

(statearr_45922_48234[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45879 === (8))){
var inst_45844 = (state_45877[(7)]);
var inst_45834 = (state_45877[(10)]);
var inst_45847 = (state_45877[(9)]);
var inst_45845 = (state_45877[(8)]);
var inst_45854 = (function (){var cs = inst_45834;
var vec__45840 = inst_45844;
var v = inst_45845;
var c = inst_45847;
return (function (p1__45821_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__45821_SHARP_);
});
})();
var inst_45858 = cljs.core.filterv(inst_45854,inst_45834);
var inst_45834__$1 = inst_45858;
var state_45877__$1 = (function (){var statearr_45930 = state_45877;
(statearr_45930[(10)] = inst_45834__$1);

return statearr_45930;
})();
var statearr_45931_48244 = state_45877__$1;
(statearr_45931_48244[(2)] = null);

(statearr_45931_48244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42922__auto__ = null;
var cljs$core$async$state_machine__42922__auto____0 = (function (){
var statearr_45939 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45939[(0)] = cljs$core$async$state_machine__42922__auto__);

(statearr_45939[(1)] = (1));

return statearr_45939;
});
var cljs$core$async$state_machine__42922__auto____1 = (function (state_45877){
while(true){
var ret_value__42923__auto__ = (function (){try{while(true){
var result__42924__auto__ = switch__42921__auto__(state_45877);
if(cljs.core.keyword_identical_QMARK_(result__42924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42924__auto__;
}
break;
}
}catch (e45942){var ex__42925__auto__ = e45942;
var statearr_45947_48252 = state_45877;
(statearr_45947_48252[(2)] = ex__42925__auto__);


if(cljs.core.seq((state_45877[(4)]))){
var statearr_45948_48258 = state_45877;
(statearr_45948_48258[(1)] = cljs.core.first((state_45877[(4)])));

} else {
throw ex__42925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48264 = state_45877;
state_45877 = G__48264;
continue;
} else {
return ret_value__42923__auto__;
}
break;
}
});
cljs$core$async$state_machine__42922__auto__ = function(state_45877){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42922__auto____1.call(this,state_45877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42922__auto____0;
cljs$core$async$state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42922__auto____1;
return cljs$core$async$state_machine__42922__auto__;
})()
})();
var state__43521__auto__ = (function (){var statearr_45954 = f__43520__auto__();
(statearr_45954[(6)] = c__43519__auto___48171);

return statearr_45954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43521__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__45964 = arguments.length;
switch (G__45964) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43519__auto___48276 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43520__auto__ = (function (){var switch__42921__auto__ = (function (state_46000){
var state_val_46001 = (state_46000[(1)]);
if((state_val_46001 === (7))){
var inst_45977 = (state_46000[(7)]);
var inst_45977__$1 = (state_46000[(2)]);
var inst_45979 = (inst_45977__$1 == null);
var inst_45980 = cljs.core.not(inst_45979);
var state_46000__$1 = (function (){var statearr_46008 = state_46000;
(statearr_46008[(7)] = inst_45977__$1);

return statearr_46008;
})();
if(inst_45980){
var statearr_46009_48283 = state_46000__$1;
(statearr_46009_48283[(1)] = (8));

} else {
var statearr_46011_48284 = state_46000__$1;
(statearr_46011_48284[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46001 === (1))){
var inst_45972 = (0);
var state_46000__$1 = (function (){var statearr_46014 = state_46000;
(statearr_46014[(8)] = inst_45972);

return statearr_46014;
})();
var statearr_46015_48297 = state_46000__$1;
(statearr_46015_48297[(2)] = null);

(statearr_46015_48297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46001 === (4))){
var state_46000__$1 = state_46000;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46000__$1,(7),ch);
} else {
if((state_val_46001 === (6))){
var inst_45994 = (state_46000[(2)]);
var state_46000__$1 = state_46000;
var statearr_46020_48300 = state_46000__$1;
(statearr_46020_48300[(2)] = inst_45994);

(statearr_46020_48300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46001 === (3))){
var inst_45996 = (state_46000[(2)]);
var inst_45997 = cljs.core.async.close_BANG_(out);
var state_46000__$1 = (function (){var statearr_46023 = state_46000;
(statearr_46023[(9)] = inst_45996);

return statearr_46023;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46000__$1,inst_45997);
} else {
if((state_val_46001 === (2))){
var inst_45972 = (state_46000[(8)]);
var inst_45974 = (inst_45972 < n);
var state_46000__$1 = state_46000;
if(cljs.core.truth_(inst_45974)){
var statearr_46027_48306 = state_46000__$1;
(statearr_46027_48306[(1)] = (4));

} else {
var statearr_46028_48308 = state_46000__$1;
(statearr_46028_48308[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46001 === (11))){
var inst_45972 = (state_46000[(8)]);
var inst_45983 = (state_46000[(2)]);
var inst_45987 = (inst_45972 + (1));
var inst_45972__$1 = inst_45987;
var state_46000__$1 = (function (){var statearr_46030 = state_46000;
(statearr_46030[(10)] = inst_45983);

(statearr_46030[(8)] = inst_45972__$1);

return statearr_46030;
})();
var statearr_46031_48315 = state_46000__$1;
(statearr_46031_48315[(2)] = null);

(statearr_46031_48315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46001 === (9))){
var state_46000__$1 = state_46000;
var statearr_46033_48318 = state_46000__$1;
(statearr_46033_48318[(2)] = null);

(statearr_46033_48318[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46001 === (5))){
var state_46000__$1 = state_46000;
var statearr_46038_48325 = state_46000__$1;
(statearr_46038_48325[(2)] = null);

(statearr_46038_48325[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46001 === (10))){
var inst_45991 = (state_46000[(2)]);
var state_46000__$1 = state_46000;
var statearr_46039_48328 = state_46000__$1;
(statearr_46039_48328[(2)] = inst_45991);

(statearr_46039_48328[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46001 === (8))){
var inst_45977 = (state_46000[(7)]);
var state_46000__$1 = state_46000;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46000__$1,(11),out,inst_45977);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42922__auto__ = null;
var cljs$core$async$state_machine__42922__auto____0 = (function (){
var statearr_46042 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46042[(0)] = cljs$core$async$state_machine__42922__auto__);

(statearr_46042[(1)] = (1));

return statearr_46042;
});
var cljs$core$async$state_machine__42922__auto____1 = (function (state_46000){
while(true){
var ret_value__42923__auto__ = (function (){try{while(true){
var result__42924__auto__ = switch__42921__auto__(state_46000);
if(cljs.core.keyword_identical_QMARK_(result__42924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42924__auto__;
}
break;
}
}catch (e46045){var ex__42925__auto__ = e46045;
var statearr_46046_48341 = state_46000;
(statearr_46046_48341[(2)] = ex__42925__auto__);


if(cljs.core.seq((state_46000[(4)]))){
var statearr_46047_48343 = state_46000;
(statearr_46047_48343[(1)] = cljs.core.first((state_46000[(4)])));

} else {
throw ex__42925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48346 = state_46000;
state_46000 = G__48346;
continue;
} else {
return ret_value__42923__auto__;
}
break;
}
});
cljs$core$async$state_machine__42922__auto__ = function(state_46000){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42922__auto____1.call(this,state_46000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42922__auto____0;
cljs$core$async$state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42922__auto____1;
return cljs$core$async$state_machine__42922__auto__;
})()
})();
var state__43521__auto__ = (function (){var statearr_46052 = f__43520__auto__();
(statearr_46052[(6)] = c__43519__auto___48276);

return statearr_46052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43521__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46060 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46060 = (function (f,ch,meta46061){
this.f = f;
this.ch = ch;
this.meta46061 = meta46061;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46062,meta46061__$1){
var self__ = this;
var _46062__$1 = this;
return (new cljs.core.async.t_cljs$core$async46060(self__.f,self__.ch,meta46061__$1));
}));

(cljs.core.async.t_cljs$core$async46060.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46062){
var self__ = this;
var _46062__$1 = this;
return self__.meta46061;
}));

(cljs.core.async.t_cljs$core$async46060.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46060.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46060.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46060.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46060.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46076 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46076 = (function (f,ch,meta46061,_,fn1,meta46077){
this.f = f;
this.ch = ch;
this.meta46061 = meta46061;
this._ = _;
this.fn1 = fn1;
this.meta46077 = meta46077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46078,meta46077__$1){
var self__ = this;
var _46078__$1 = this;
return (new cljs.core.async.t_cljs$core$async46076(self__.f,self__.ch,self__.meta46061,self__._,self__.fn1,meta46077__$1));
}));

(cljs.core.async.t_cljs$core$async46076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46078){
var self__ = this;
var _46078__$1 = this;
return self__.meta46077;
}));

(cljs.core.async.t_cljs$core$async46076.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46076.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async46076.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46076.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__46056_SHARP_){
var G__46093 = (((p1__46056_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__46056_SHARP_) : self__.f.call(null,p1__46056_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__46093) : f1.call(null,G__46093));
});
}));

(cljs.core.async.t_cljs$core$async46076.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46061","meta46061",-1095530562,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46060","cljs.core.async/t_cljs$core$async46060",-289778210,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46077","meta46077",292293383,null)], null);
}));

(cljs.core.async.t_cljs$core$async46076.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46076.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46076");

(cljs.core.async.t_cljs$core$async46076.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async46076");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46076.
 */
cljs.core.async.__GT_t_cljs$core$async46076 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46076(f__$1,ch__$1,meta46061__$1,___$2,fn1__$1,meta46077){
return (new cljs.core.async.t_cljs$core$async46076(f__$1,ch__$1,meta46061__$1,___$2,fn1__$1,meta46077));
});

}

return (new cljs.core.async.t_cljs$core$async46076(self__.f,self__.ch,self__.meta46061,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__46109 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__46109) : self__.f.call(null,G__46109));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async46060.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46060.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async46060.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46061","meta46061",-1095530562,null)], null);
}));

(cljs.core.async.t_cljs$core$async46060.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46060.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46060");

(cljs.core.async.t_cljs$core$async46060.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async46060");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46060.
 */
cljs.core.async.__GT_t_cljs$core$async46060 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46060(f__$1,ch__$1,meta46061){
return (new cljs.core.async.t_cljs$core$async46060(f__$1,ch__$1,meta46061));
});

}

return (new cljs.core.async.t_cljs$core$async46060(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46127 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46127 = (function (f,ch,meta46128){
this.f = f;
this.ch = ch;
this.meta46128 = meta46128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46129,meta46128__$1){
var self__ = this;
var _46129__$1 = this;
return (new cljs.core.async.t_cljs$core$async46127(self__.f,self__.ch,meta46128__$1));
}));

(cljs.core.async.t_cljs$core$async46127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46129){
var self__ = this;
var _46129__$1 = this;
return self__.meta46128;
}));

(cljs.core.async.t_cljs$core$async46127.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46127.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46127.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46127.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46127.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46127.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async46127.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46128","meta46128",-209354188,null)], null);
}));

(cljs.core.async.t_cljs$core$async46127.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46127");

(cljs.core.async.t_cljs$core$async46127.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async46127");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46127.
 */
cljs.core.async.__GT_t_cljs$core$async46127 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46127(f__$1,ch__$1,meta46128){
return (new cljs.core.async.t_cljs$core$async46127(f__$1,ch__$1,meta46128));
});

}

return (new cljs.core.async.t_cljs$core$async46127(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46152 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46152 = (function (p,ch,meta46153){
this.p = p;
this.ch = ch;
this.meta46153 = meta46153;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46154,meta46153__$1){
var self__ = this;
var _46154__$1 = this;
return (new cljs.core.async.t_cljs$core$async46152(self__.p,self__.ch,meta46153__$1));
}));

(cljs.core.async.t_cljs$core$async46152.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46154){
var self__ = this;
var _46154__$1 = this;
return self__.meta46153;
}));

(cljs.core.async.t_cljs$core$async46152.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46152.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46152.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46152.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46152.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46152.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46152.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async46152.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46153","meta46153",133417866,null)], null);
}));

(cljs.core.async.t_cljs$core$async46152.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46152.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46152");

(cljs.core.async.t_cljs$core$async46152.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async46152");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46152.
 */
cljs.core.async.__GT_t_cljs$core$async46152 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46152(p__$1,ch__$1,meta46153){
return (new cljs.core.async.t_cljs$core$async46152(p__$1,ch__$1,meta46153));
});

}

return (new cljs.core.async.t_cljs$core$async46152(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__46168 = arguments.length;
switch (G__46168) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43519__auto___48425 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43520__auto__ = (function (){var switch__42921__auto__ = (function (state_46197){
var state_val_46198 = (state_46197[(1)]);
if((state_val_46198 === (7))){
var inst_46193 = (state_46197[(2)]);
var state_46197__$1 = state_46197;
var statearr_46199_48430 = state_46197__$1;
(statearr_46199_48430[(2)] = inst_46193);

(statearr_46199_48430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46198 === (1))){
var state_46197__$1 = state_46197;
var statearr_46204_48431 = state_46197__$1;
(statearr_46204_48431[(2)] = null);

(statearr_46204_48431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46198 === (4))){
var inst_46179 = (state_46197[(7)]);
var inst_46179__$1 = (state_46197[(2)]);
var inst_46180 = (inst_46179__$1 == null);
var state_46197__$1 = (function (){var statearr_46205 = state_46197;
(statearr_46205[(7)] = inst_46179__$1);

return statearr_46205;
})();
if(cljs.core.truth_(inst_46180)){
var statearr_46210_48442 = state_46197__$1;
(statearr_46210_48442[(1)] = (5));

} else {
var statearr_46212_48443 = state_46197__$1;
(statearr_46212_48443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46198 === (6))){
var inst_46179 = (state_46197[(7)]);
var inst_46184 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46179) : p.call(null,inst_46179));
var state_46197__$1 = state_46197;
if(cljs.core.truth_(inst_46184)){
var statearr_46217_48445 = state_46197__$1;
(statearr_46217_48445[(1)] = (8));

} else {
var statearr_46220_48446 = state_46197__$1;
(statearr_46220_48446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46198 === (3))){
var inst_46195 = (state_46197[(2)]);
var state_46197__$1 = state_46197;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46197__$1,inst_46195);
} else {
if((state_val_46198 === (2))){
var state_46197__$1 = state_46197;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46197__$1,(4),ch);
} else {
if((state_val_46198 === (11))){
var inst_46187 = (state_46197[(2)]);
var state_46197__$1 = state_46197;
var statearr_46222_48451 = state_46197__$1;
(statearr_46222_48451[(2)] = inst_46187);

(statearr_46222_48451[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46198 === (9))){
var state_46197__$1 = state_46197;
var statearr_46223_48454 = state_46197__$1;
(statearr_46223_48454[(2)] = null);

(statearr_46223_48454[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46198 === (5))){
var inst_46182 = cljs.core.async.close_BANG_(out);
var state_46197__$1 = state_46197;
var statearr_46224_48455 = state_46197__$1;
(statearr_46224_48455[(2)] = inst_46182);

(statearr_46224_48455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46198 === (10))){
var inst_46190 = (state_46197[(2)]);
var state_46197__$1 = (function (){var statearr_46230 = state_46197;
(statearr_46230[(8)] = inst_46190);

return statearr_46230;
})();
var statearr_46232_48457 = state_46197__$1;
(statearr_46232_48457[(2)] = null);

(statearr_46232_48457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46198 === (8))){
var inst_46179 = (state_46197[(7)]);
var state_46197__$1 = state_46197;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46197__$1,(11),out,inst_46179);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42922__auto__ = null;
var cljs$core$async$state_machine__42922__auto____0 = (function (){
var statearr_46237 = [null,null,null,null,null,null,null,null,null];
(statearr_46237[(0)] = cljs$core$async$state_machine__42922__auto__);

(statearr_46237[(1)] = (1));

return statearr_46237;
});
var cljs$core$async$state_machine__42922__auto____1 = (function (state_46197){
while(true){
var ret_value__42923__auto__ = (function (){try{while(true){
var result__42924__auto__ = switch__42921__auto__(state_46197);
if(cljs.core.keyword_identical_QMARK_(result__42924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42924__auto__;
}
break;
}
}catch (e46238){var ex__42925__auto__ = e46238;
var statearr_46239_48467 = state_46197;
(statearr_46239_48467[(2)] = ex__42925__auto__);


if(cljs.core.seq((state_46197[(4)]))){
var statearr_46240_48469 = state_46197;
(statearr_46240_48469[(1)] = cljs.core.first((state_46197[(4)])));

} else {
throw ex__42925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48471 = state_46197;
state_46197 = G__48471;
continue;
} else {
return ret_value__42923__auto__;
}
break;
}
});
cljs$core$async$state_machine__42922__auto__ = function(state_46197){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42922__auto____1.call(this,state_46197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42922__auto____0;
cljs$core$async$state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42922__auto____1;
return cljs$core$async$state_machine__42922__auto__;
})()
})();
var state__43521__auto__ = (function (){var statearr_46246 = f__43520__auto__();
(statearr_46246[(6)] = c__43519__auto___48425);

return statearr_46246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43521__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__46252 = arguments.length;
switch (G__46252) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__43519__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43520__auto__ = (function (){var switch__42921__auto__ = (function (state_46343){
var state_val_46344 = (state_46343[(1)]);
if((state_val_46344 === (7))){
var inst_46339 = (state_46343[(2)]);
var state_46343__$1 = state_46343;
var statearr_46348_48489 = state_46343__$1;
(statearr_46348_48489[(2)] = inst_46339);

(statearr_46348_48489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (20))){
var inst_46305 = (state_46343[(7)]);
var inst_46320 = (state_46343[(2)]);
var inst_46321 = cljs.core.next(inst_46305);
var inst_46291 = inst_46321;
var inst_46292 = null;
var inst_46293 = (0);
var inst_46294 = (0);
var state_46343__$1 = (function (){var statearr_46356 = state_46343;
(statearr_46356[(8)] = inst_46294);

(statearr_46356[(9)] = inst_46291);

(statearr_46356[(10)] = inst_46292);

(statearr_46356[(11)] = inst_46293);

(statearr_46356[(12)] = inst_46320);

return statearr_46356;
})();
var statearr_46357_48495 = state_46343__$1;
(statearr_46357_48495[(2)] = null);

(statearr_46357_48495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (1))){
var state_46343__$1 = state_46343;
var statearr_46362_48496 = state_46343__$1;
(statearr_46362_48496[(2)] = null);

(statearr_46362_48496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (4))){
var inst_46271 = (state_46343[(13)]);
var inst_46271__$1 = (state_46343[(2)]);
var inst_46273 = (inst_46271__$1 == null);
var state_46343__$1 = (function (){var statearr_46363 = state_46343;
(statearr_46363[(13)] = inst_46271__$1);

return statearr_46363;
})();
if(cljs.core.truth_(inst_46273)){
var statearr_46366_48497 = state_46343__$1;
(statearr_46366_48497[(1)] = (5));

} else {
var statearr_46367_48498 = state_46343__$1;
(statearr_46367_48498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (15))){
var state_46343__$1 = state_46343;
var statearr_46376_48499 = state_46343__$1;
(statearr_46376_48499[(2)] = null);

(statearr_46376_48499[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (21))){
var state_46343__$1 = state_46343;
var statearr_46379_48500 = state_46343__$1;
(statearr_46379_48500[(2)] = null);

(statearr_46379_48500[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (13))){
var inst_46294 = (state_46343[(8)]);
var inst_46291 = (state_46343[(9)]);
var inst_46292 = (state_46343[(10)]);
var inst_46293 = (state_46343[(11)]);
var inst_46301 = (state_46343[(2)]);
var inst_46302 = (inst_46294 + (1));
var tmp46368 = inst_46291;
var tmp46369 = inst_46292;
var tmp46370 = inst_46293;
var inst_46291__$1 = tmp46368;
var inst_46292__$1 = tmp46369;
var inst_46293__$1 = tmp46370;
var inst_46294__$1 = inst_46302;
var state_46343__$1 = (function (){var statearr_46381 = state_46343;
(statearr_46381[(8)] = inst_46294__$1);

(statearr_46381[(9)] = inst_46291__$1);

(statearr_46381[(14)] = inst_46301);

(statearr_46381[(10)] = inst_46292__$1);

(statearr_46381[(11)] = inst_46293__$1);

return statearr_46381;
})();
var statearr_46389_48505 = state_46343__$1;
(statearr_46389_48505[(2)] = null);

(statearr_46389_48505[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (22))){
var state_46343__$1 = state_46343;
var statearr_46399_48506 = state_46343__$1;
(statearr_46399_48506[(2)] = null);

(statearr_46399_48506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (6))){
var inst_46271 = (state_46343[(13)]);
var inst_46289 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46271) : f.call(null,inst_46271));
var inst_46290 = cljs.core.seq(inst_46289);
var inst_46291 = inst_46290;
var inst_46292 = null;
var inst_46293 = (0);
var inst_46294 = (0);
var state_46343__$1 = (function (){var statearr_46401 = state_46343;
(statearr_46401[(8)] = inst_46294);

(statearr_46401[(9)] = inst_46291);

(statearr_46401[(10)] = inst_46292);

(statearr_46401[(11)] = inst_46293);

return statearr_46401;
})();
var statearr_46402_48508 = state_46343__$1;
(statearr_46402_48508[(2)] = null);

(statearr_46402_48508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (17))){
var inst_46305 = (state_46343[(7)]);
var inst_46309 = cljs.core.chunk_first(inst_46305);
var inst_46311 = cljs.core.chunk_rest(inst_46305);
var inst_46313 = cljs.core.count(inst_46309);
var inst_46291 = inst_46311;
var inst_46292 = inst_46309;
var inst_46293 = inst_46313;
var inst_46294 = (0);
var state_46343__$1 = (function (){var statearr_46409 = state_46343;
(statearr_46409[(8)] = inst_46294);

(statearr_46409[(9)] = inst_46291);

(statearr_46409[(10)] = inst_46292);

(statearr_46409[(11)] = inst_46293);

return statearr_46409;
})();
var statearr_46410_48509 = state_46343__$1;
(statearr_46410_48509[(2)] = null);

(statearr_46410_48509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (3))){
var inst_46341 = (state_46343[(2)]);
var state_46343__$1 = state_46343;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46343__$1,inst_46341);
} else {
if((state_val_46344 === (12))){
var inst_46329 = (state_46343[(2)]);
var state_46343__$1 = state_46343;
var statearr_46414_48514 = state_46343__$1;
(statearr_46414_48514[(2)] = inst_46329);

(statearr_46414_48514[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (2))){
var state_46343__$1 = state_46343;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46343__$1,(4),in$);
} else {
if((state_val_46344 === (23))){
var inst_46337 = (state_46343[(2)]);
var state_46343__$1 = state_46343;
var statearr_46417_48516 = state_46343__$1;
(statearr_46417_48516[(2)] = inst_46337);

(statearr_46417_48516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (19))){
var inst_46324 = (state_46343[(2)]);
var state_46343__$1 = state_46343;
var statearr_46419_48517 = state_46343__$1;
(statearr_46419_48517[(2)] = inst_46324);

(statearr_46419_48517[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (11))){
var inst_46291 = (state_46343[(9)]);
var inst_46305 = (state_46343[(7)]);
var inst_46305__$1 = cljs.core.seq(inst_46291);
var state_46343__$1 = (function (){var statearr_46421 = state_46343;
(statearr_46421[(7)] = inst_46305__$1);

return statearr_46421;
})();
if(inst_46305__$1){
var statearr_46423_48529 = state_46343__$1;
(statearr_46423_48529[(1)] = (14));

} else {
var statearr_46424_48530 = state_46343__$1;
(statearr_46424_48530[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (9))){
var inst_46331 = (state_46343[(2)]);
var inst_46332 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_46343__$1 = (function (){var statearr_46425 = state_46343;
(statearr_46425[(15)] = inst_46331);

return statearr_46425;
})();
if(cljs.core.truth_(inst_46332)){
var statearr_46427_48531 = state_46343__$1;
(statearr_46427_48531[(1)] = (21));

} else {
var statearr_46428_48532 = state_46343__$1;
(statearr_46428_48532[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (5))){
var inst_46275 = cljs.core.async.close_BANG_(out);
var state_46343__$1 = state_46343;
var statearr_46436_48534 = state_46343__$1;
(statearr_46436_48534[(2)] = inst_46275);

(statearr_46436_48534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (14))){
var inst_46305 = (state_46343[(7)]);
var inst_46307 = cljs.core.chunked_seq_QMARK_(inst_46305);
var state_46343__$1 = state_46343;
if(inst_46307){
var statearr_46439_48537 = state_46343__$1;
(statearr_46439_48537[(1)] = (17));

} else {
var statearr_46440_48538 = state_46343__$1;
(statearr_46440_48538[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (16))){
var inst_46327 = (state_46343[(2)]);
var state_46343__$1 = state_46343;
var statearr_46443_48539 = state_46343__$1;
(statearr_46443_48539[(2)] = inst_46327);

(statearr_46443_48539[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46344 === (10))){
var inst_46294 = (state_46343[(8)]);
var inst_46292 = (state_46343[(10)]);
var inst_46299 = cljs.core._nth(inst_46292,inst_46294);
var state_46343__$1 = state_46343;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46343__$1,(13),out,inst_46299);
} else {
if((state_val_46344 === (18))){
var inst_46305 = (state_46343[(7)]);
var inst_46316 = cljs.core.first(inst_46305);
var state_46343__$1 = state_46343;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46343__$1,(20),out,inst_46316);
} else {
if((state_val_46344 === (8))){
var inst_46294 = (state_46343[(8)]);
var inst_46293 = (state_46343[(11)]);
var inst_46296 = (inst_46294 < inst_46293);
var inst_46297 = inst_46296;
var state_46343__$1 = state_46343;
if(cljs.core.truth_(inst_46297)){
var statearr_46453_48540 = state_46343__$1;
(statearr_46453_48540[(1)] = (10));

} else {
var statearr_46457_48541 = state_46343__$1;
(statearr_46457_48541[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__42922__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__42922__auto____0 = (function (){
var statearr_46460 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46460[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__42922__auto__);

(statearr_46460[(1)] = (1));

return statearr_46460;
});
var cljs$core$async$mapcat_STAR__$_state_machine__42922__auto____1 = (function (state_46343){
while(true){
var ret_value__42923__auto__ = (function (){try{while(true){
var result__42924__auto__ = switch__42921__auto__(state_46343);
if(cljs.core.keyword_identical_QMARK_(result__42924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42924__auto__;
}
break;
}
}catch (e46464){var ex__42925__auto__ = e46464;
var statearr_46467_48544 = state_46343;
(statearr_46467_48544[(2)] = ex__42925__auto__);


if(cljs.core.seq((state_46343[(4)]))){
var statearr_46469_48547 = state_46343;
(statearr_46469_48547[(1)] = cljs.core.first((state_46343[(4)])));

} else {
throw ex__42925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48548 = state_46343;
state_46343 = G__48548;
continue;
} else {
return ret_value__42923__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__42922__auto__ = function(state_46343){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__42922__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__42922__auto____1.call(this,state_46343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__42922__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__42922__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__42922__auto__;
})()
})();
var state__43521__auto__ = (function (){var statearr_46472 = f__43520__auto__();
(statearr_46472[(6)] = c__43519__auto__);

return statearr_46472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43521__auto__);
}));

return c__43519__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__46483 = arguments.length;
switch (G__46483) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__46498 = arguments.length;
switch (G__46498) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__46510 = arguments.length;
switch (G__46510) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43519__auto___48554 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43520__auto__ = (function (){var switch__42921__auto__ = (function (state_46548){
var state_val_46549 = (state_46548[(1)]);
if((state_val_46549 === (7))){
var inst_46543 = (state_46548[(2)]);
var state_46548__$1 = state_46548;
var statearr_46555_48555 = state_46548__$1;
(statearr_46555_48555[(2)] = inst_46543);

(statearr_46555_48555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46549 === (1))){
var inst_46520 = null;
var state_46548__$1 = (function (){var statearr_46557 = state_46548;
(statearr_46557[(7)] = inst_46520);

return statearr_46557;
})();
var statearr_46564_48556 = state_46548__$1;
(statearr_46564_48556[(2)] = null);

(statearr_46564_48556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46549 === (4))){
var inst_46524 = (state_46548[(8)]);
var inst_46524__$1 = (state_46548[(2)]);
var inst_46528 = (inst_46524__$1 == null);
var inst_46529 = cljs.core.not(inst_46528);
var state_46548__$1 = (function (){var statearr_46575 = state_46548;
(statearr_46575[(8)] = inst_46524__$1);

return statearr_46575;
})();
if(inst_46529){
var statearr_46576_48557 = state_46548__$1;
(statearr_46576_48557[(1)] = (5));

} else {
var statearr_46577_48558 = state_46548__$1;
(statearr_46577_48558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46549 === (6))){
var state_46548__$1 = state_46548;
var statearr_46585_48559 = state_46548__$1;
(statearr_46585_48559[(2)] = null);

(statearr_46585_48559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46549 === (3))){
var inst_46545 = (state_46548[(2)]);
var inst_46546 = cljs.core.async.close_BANG_(out);
var state_46548__$1 = (function (){var statearr_46587 = state_46548;
(statearr_46587[(9)] = inst_46545);

return statearr_46587;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46548__$1,inst_46546);
} else {
if((state_val_46549 === (2))){
var state_46548__$1 = state_46548;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46548__$1,(4),ch);
} else {
if((state_val_46549 === (11))){
var inst_46524 = (state_46548[(8)]);
var inst_46536 = (state_46548[(2)]);
var inst_46520 = inst_46524;
var state_46548__$1 = (function (){var statearr_46588 = state_46548;
(statearr_46588[(7)] = inst_46520);

(statearr_46588[(10)] = inst_46536);

return statearr_46588;
})();
var statearr_46589_48560 = state_46548__$1;
(statearr_46589_48560[(2)] = null);

(statearr_46589_48560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46549 === (9))){
var inst_46524 = (state_46548[(8)]);
var state_46548__$1 = state_46548;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46548__$1,(11),out,inst_46524);
} else {
if((state_val_46549 === (5))){
var inst_46524 = (state_46548[(8)]);
var inst_46520 = (state_46548[(7)]);
var inst_46531 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46524,inst_46520);
var state_46548__$1 = state_46548;
if(inst_46531){
var statearr_46598_48565 = state_46548__$1;
(statearr_46598_48565[(1)] = (8));

} else {
var statearr_46599_48566 = state_46548__$1;
(statearr_46599_48566[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46549 === (10))){
var inst_46540 = (state_46548[(2)]);
var state_46548__$1 = state_46548;
var statearr_46601_48567 = state_46548__$1;
(statearr_46601_48567[(2)] = inst_46540);

(statearr_46601_48567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46549 === (8))){
var inst_46520 = (state_46548[(7)]);
var tmp46591 = inst_46520;
var inst_46520__$1 = tmp46591;
var state_46548__$1 = (function (){var statearr_46602 = state_46548;
(statearr_46602[(7)] = inst_46520__$1);

return statearr_46602;
})();
var statearr_46603_48568 = state_46548__$1;
(statearr_46603_48568[(2)] = null);

(statearr_46603_48568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42922__auto__ = null;
var cljs$core$async$state_machine__42922__auto____0 = (function (){
var statearr_46605 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46605[(0)] = cljs$core$async$state_machine__42922__auto__);

(statearr_46605[(1)] = (1));

return statearr_46605;
});
var cljs$core$async$state_machine__42922__auto____1 = (function (state_46548){
while(true){
var ret_value__42923__auto__ = (function (){try{while(true){
var result__42924__auto__ = switch__42921__auto__(state_46548);
if(cljs.core.keyword_identical_QMARK_(result__42924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42924__auto__;
}
break;
}
}catch (e46612){var ex__42925__auto__ = e46612;
var statearr_46613_48570 = state_46548;
(statearr_46613_48570[(2)] = ex__42925__auto__);


if(cljs.core.seq((state_46548[(4)]))){
var statearr_46614_48574 = state_46548;
(statearr_46614_48574[(1)] = cljs.core.first((state_46548[(4)])));

} else {
throw ex__42925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48575 = state_46548;
state_46548 = G__48575;
continue;
} else {
return ret_value__42923__auto__;
}
break;
}
});
cljs$core$async$state_machine__42922__auto__ = function(state_46548){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42922__auto____1.call(this,state_46548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42922__auto____0;
cljs$core$async$state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42922__auto____1;
return cljs$core$async$state_machine__42922__auto__;
})()
})();
var state__43521__auto__ = (function (){var statearr_46615 = f__43520__auto__();
(statearr_46615[(6)] = c__43519__auto___48554);

return statearr_46615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43521__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__46621 = arguments.length;
switch (G__46621) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43519__auto___48593 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43520__auto__ = (function (){var switch__42921__auto__ = (function (state_46668){
var state_val_46669 = (state_46668[(1)]);
if((state_val_46669 === (7))){
var inst_46663 = (state_46668[(2)]);
var state_46668__$1 = state_46668;
var statearr_46676_48594 = state_46668__$1;
(statearr_46676_48594[(2)] = inst_46663);

(statearr_46676_48594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46669 === (1))){
var inst_46628 = (new Array(n));
var inst_46629 = inst_46628;
var inst_46630 = (0);
var state_46668__$1 = (function (){var statearr_46680 = state_46668;
(statearr_46680[(7)] = inst_46629);

(statearr_46680[(8)] = inst_46630);

return statearr_46680;
})();
var statearr_46681_48599 = state_46668__$1;
(statearr_46681_48599[(2)] = null);

(statearr_46681_48599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46669 === (4))){
var inst_46633 = (state_46668[(9)]);
var inst_46633__$1 = (state_46668[(2)]);
var inst_46634 = (inst_46633__$1 == null);
var inst_46635 = cljs.core.not(inst_46634);
var state_46668__$1 = (function (){var statearr_46683 = state_46668;
(statearr_46683[(9)] = inst_46633__$1);

return statearr_46683;
})();
if(inst_46635){
var statearr_46685_48603 = state_46668__$1;
(statearr_46685_48603[(1)] = (5));

} else {
var statearr_46687_48604 = state_46668__$1;
(statearr_46687_48604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46669 === (15))){
var inst_46657 = (state_46668[(2)]);
var state_46668__$1 = state_46668;
var statearr_46692_48605 = state_46668__$1;
(statearr_46692_48605[(2)] = inst_46657);

(statearr_46692_48605[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46669 === (13))){
var state_46668__$1 = state_46668;
var statearr_46698_48606 = state_46668__$1;
(statearr_46698_48606[(2)] = null);

(statearr_46698_48606[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46669 === (6))){
var inst_46630 = (state_46668[(8)]);
var inst_46653 = (inst_46630 > (0));
var state_46668__$1 = state_46668;
if(cljs.core.truth_(inst_46653)){
var statearr_46702_48616 = state_46668__$1;
(statearr_46702_48616[(1)] = (12));

} else {
var statearr_46703_48617 = state_46668__$1;
(statearr_46703_48617[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46669 === (3))){
var inst_46665 = (state_46668[(2)]);
var state_46668__$1 = state_46668;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46668__$1,inst_46665);
} else {
if((state_val_46669 === (12))){
var inst_46629 = (state_46668[(7)]);
var inst_46655 = cljs.core.vec(inst_46629);
var state_46668__$1 = state_46668;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46668__$1,(15),out,inst_46655);
} else {
if((state_val_46669 === (2))){
var state_46668__$1 = state_46668;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46668__$1,(4),ch);
} else {
if((state_val_46669 === (11))){
var inst_46647 = (state_46668[(2)]);
var inst_46648 = (new Array(n));
var inst_46629 = inst_46648;
var inst_46630 = (0);
var state_46668__$1 = (function (){var statearr_46726 = state_46668;
(statearr_46726[(7)] = inst_46629);

(statearr_46726[(8)] = inst_46630);

(statearr_46726[(10)] = inst_46647);

return statearr_46726;
})();
var statearr_46731_48624 = state_46668__$1;
(statearr_46731_48624[(2)] = null);

(statearr_46731_48624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46669 === (9))){
var inst_46629 = (state_46668[(7)]);
var inst_46645 = cljs.core.vec(inst_46629);
var state_46668__$1 = state_46668;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46668__$1,(11),out,inst_46645);
} else {
if((state_val_46669 === (5))){
var inst_46629 = (state_46668[(7)]);
var inst_46630 = (state_46668[(8)]);
var inst_46639 = (state_46668[(11)]);
var inst_46633 = (state_46668[(9)]);
var inst_46637 = (inst_46629[inst_46630] = inst_46633);
var inst_46639__$1 = (inst_46630 + (1));
var inst_46640 = (inst_46639__$1 < n);
var state_46668__$1 = (function (){var statearr_46732 = state_46668;
(statearr_46732[(12)] = inst_46637);

(statearr_46732[(11)] = inst_46639__$1);

return statearr_46732;
})();
if(cljs.core.truth_(inst_46640)){
var statearr_46733_48628 = state_46668__$1;
(statearr_46733_48628[(1)] = (8));

} else {
var statearr_46734_48629 = state_46668__$1;
(statearr_46734_48629[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46669 === (14))){
var inst_46660 = (state_46668[(2)]);
var inst_46661 = cljs.core.async.close_BANG_(out);
var state_46668__$1 = (function (){var statearr_46739 = state_46668;
(statearr_46739[(13)] = inst_46660);

return statearr_46739;
})();
var statearr_46740_48630 = state_46668__$1;
(statearr_46740_48630[(2)] = inst_46661);

(statearr_46740_48630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46669 === (10))){
var inst_46651 = (state_46668[(2)]);
var state_46668__$1 = state_46668;
var statearr_46743_48633 = state_46668__$1;
(statearr_46743_48633[(2)] = inst_46651);

(statearr_46743_48633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46669 === (8))){
var inst_46629 = (state_46668[(7)]);
var inst_46639 = (state_46668[(11)]);
var tmp46738 = inst_46629;
var inst_46629__$1 = tmp46738;
var inst_46630 = inst_46639;
var state_46668__$1 = (function (){var statearr_46744 = state_46668;
(statearr_46744[(7)] = inst_46629__$1);

(statearr_46744[(8)] = inst_46630);

return statearr_46744;
})();
var statearr_46745_48634 = state_46668__$1;
(statearr_46745_48634[(2)] = null);

(statearr_46745_48634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42922__auto__ = null;
var cljs$core$async$state_machine__42922__auto____0 = (function (){
var statearr_46747 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46747[(0)] = cljs$core$async$state_machine__42922__auto__);

(statearr_46747[(1)] = (1));

return statearr_46747;
});
var cljs$core$async$state_machine__42922__auto____1 = (function (state_46668){
while(true){
var ret_value__42923__auto__ = (function (){try{while(true){
var result__42924__auto__ = switch__42921__auto__(state_46668);
if(cljs.core.keyword_identical_QMARK_(result__42924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42924__auto__;
}
break;
}
}catch (e46748){var ex__42925__auto__ = e46748;
var statearr_46749_48639 = state_46668;
(statearr_46749_48639[(2)] = ex__42925__auto__);


if(cljs.core.seq((state_46668[(4)]))){
var statearr_46750_48640 = state_46668;
(statearr_46750_48640[(1)] = cljs.core.first((state_46668[(4)])));

} else {
throw ex__42925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48647 = state_46668;
state_46668 = G__48647;
continue;
} else {
return ret_value__42923__auto__;
}
break;
}
});
cljs$core$async$state_machine__42922__auto__ = function(state_46668){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42922__auto____1.call(this,state_46668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42922__auto____0;
cljs$core$async$state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42922__auto____1;
return cljs$core$async$state_machine__42922__auto__;
})()
})();
var state__43521__auto__ = (function (){var statearr_46751 = f__43520__auto__();
(statearr_46751[(6)] = c__43519__auto___48593);

return statearr_46751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43521__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__46755 = arguments.length;
switch (G__46755) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__43519__auto___48660 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__43520__auto__ = (function (){var switch__42921__auto__ = (function (state_46805){
var state_val_46806 = (state_46805[(1)]);
if((state_val_46806 === (7))){
var inst_46801 = (state_46805[(2)]);
var state_46805__$1 = state_46805;
var statearr_46807_48661 = state_46805__$1;
(statearr_46807_48661[(2)] = inst_46801);

(statearr_46807_48661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (1))){
var inst_46759 = [];
var inst_46760 = inst_46759;
var inst_46761 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46805__$1 = (function (){var statearr_46816 = state_46805;
(statearr_46816[(7)] = inst_46761);

(statearr_46816[(8)] = inst_46760);

return statearr_46816;
})();
var statearr_46817_48667 = state_46805__$1;
(statearr_46817_48667[(2)] = null);

(statearr_46817_48667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (4))){
var inst_46764 = (state_46805[(9)]);
var inst_46764__$1 = (state_46805[(2)]);
var inst_46765 = (inst_46764__$1 == null);
var inst_46766 = cljs.core.not(inst_46765);
var state_46805__$1 = (function (){var statearr_46822 = state_46805;
(statearr_46822[(9)] = inst_46764__$1);

return statearr_46822;
})();
if(inst_46766){
var statearr_46827_48668 = state_46805__$1;
(statearr_46827_48668[(1)] = (5));

} else {
var statearr_46832_48669 = state_46805__$1;
(statearr_46832_48669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (15))){
var inst_46760 = (state_46805[(8)]);
var inst_46793 = cljs.core.vec(inst_46760);
var state_46805__$1 = state_46805;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46805__$1,(18),out,inst_46793);
} else {
if((state_val_46806 === (13))){
var inst_46788 = (state_46805[(2)]);
var state_46805__$1 = state_46805;
var statearr_46835_48671 = state_46805__$1;
(statearr_46835_48671[(2)] = inst_46788);

(statearr_46835_48671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (6))){
var inst_46760 = (state_46805[(8)]);
var inst_46790 = inst_46760.length;
var inst_46791 = (inst_46790 > (0));
var state_46805__$1 = state_46805;
if(cljs.core.truth_(inst_46791)){
var statearr_46836_48672 = state_46805__$1;
(statearr_46836_48672[(1)] = (15));

} else {
var statearr_46837_48673 = state_46805__$1;
(statearr_46837_48673[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (17))){
var inst_46798 = (state_46805[(2)]);
var inst_46799 = cljs.core.async.close_BANG_(out);
var state_46805__$1 = (function (){var statearr_46839 = state_46805;
(statearr_46839[(10)] = inst_46798);

return statearr_46839;
})();
var statearr_46840_48675 = state_46805__$1;
(statearr_46840_48675[(2)] = inst_46799);

(statearr_46840_48675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (3))){
var inst_46803 = (state_46805[(2)]);
var state_46805__$1 = state_46805;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46805__$1,inst_46803);
} else {
if((state_val_46806 === (12))){
var inst_46760 = (state_46805[(8)]);
var inst_46781 = cljs.core.vec(inst_46760);
var state_46805__$1 = state_46805;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46805__$1,(14),out,inst_46781);
} else {
if((state_val_46806 === (2))){
var state_46805__$1 = state_46805;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46805__$1,(4),ch);
} else {
if((state_val_46806 === (11))){
var inst_46764 = (state_46805[(9)]);
var inst_46769 = (state_46805[(11)]);
var inst_46760 = (state_46805[(8)]);
var inst_46778 = inst_46760.push(inst_46764);
var tmp46841 = inst_46760;
var inst_46760__$1 = tmp46841;
var inst_46761 = inst_46769;
var state_46805__$1 = (function (){var statearr_46842 = state_46805;
(statearr_46842[(7)] = inst_46761);

(statearr_46842[(12)] = inst_46778);

(statearr_46842[(8)] = inst_46760__$1);

return statearr_46842;
})();
var statearr_46843_48677 = state_46805__$1;
(statearr_46843_48677[(2)] = null);

(statearr_46843_48677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (9))){
var inst_46761 = (state_46805[(7)]);
var inst_46773 = cljs.core.keyword_identical_QMARK_(inst_46761,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_46805__$1 = state_46805;
var statearr_46845_48689 = state_46805__$1;
(statearr_46845_48689[(2)] = inst_46773);

(statearr_46845_48689[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (5))){
var inst_46761 = (state_46805[(7)]);
var inst_46764 = (state_46805[(9)]);
var inst_46769 = (state_46805[(11)]);
var inst_46770 = (state_46805[(13)]);
var inst_46769__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46764) : f.call(null,inst_46764));
var inst_46770__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46769__$1,inst_46761);
var state_46805__$1 = (function (){var statearr_46848 = state_46805;
(statearr_46848[(11)] = inst_46769__$1);

(statearr_46848[(13)] = inst_46770__$1);

return statearr_46848;
})();
if(inst_46770__$1){
var statearr_46850_48691 = state_46805__$1;
(statearr_46850_48691[(1)] = (8));

} else {
var statearr_46852_48692 = state_46805__$1;
(statearr_46852_48692[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (14))){
var inst_46764 = (state_46805[(9)]);
var inst_46769 = (state_46805[(11)]);
var inst_46783 = (state_46805[(2)]);
var inst_46784 = [];
var inst_46785 = inst_46784.push(inst_46764);
var inst_46760 = inst_46784;
var inst_46761 = inst_46769;
var state_46805__$1 = (function (){var statearr_46856 = state_46805;
(statearr_46856[(7)] = inst_46761);

(statearr_46856[(14)] = inst_46785);

(statearr_46856[(15)] = inst_46783);

(statearr_46856[(8)] = inst_46760);

return statearr_46856;
})();
var statearr_46857_48693 = state_46805__$1;
(statearr_46857_48693[(2)] = null);

(statearr_46857_48693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (16))){
var state_46805__$1 = state_46805;
var statearr_46858_48694 = state_46805__$1;
(statearr_46858_48694[(2)] = null);

(statearr_46858_48694[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (10))){
var inst_46775 = (state_46805[(2)]);
var state_46805__$1 = state_46805;
if(cljs.core.truth_(inst_46775)){
var statearr_46859_48695 = state_46805__$1;
(statearr_46859_48695[(1)] = (11));

} else {
var statearr_46860_48696 = state_46805__$1;
(statearr_46860_48696[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (18))){
var inst_46795 = (state_46805[(2)]);
var state_46805__$1 = state_46805;
var statearr_46861_48699 = state_46805__$1;
(statearr_46861_48699[(2)] = inst_46795);

(statearr_46861_48699[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46806 === (8))){
var inst_46770 = (state_46805[(13)]);
var state_46805__$1 = state_46805;
var statearr_46862_48703 = state_46805__$1;
(statearr_46862_48703[(2)] = inst_46770);

(statearr_46862_48703[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42922__auto__ = null;
var cljs$core$async$state_machine__42922__auto____0 = (function (){
var statearr_46864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46864[(0)] = cljs$core$async$state_machine__42922__auto__);

(statearr_46864[(1)] = (1));

return statearr_46864;
});
var cljs$core$async$state_machine__42922__auto____1 = (function (state_46805){
while(true){
var ret_value__42923__auto__ = (function (){try{while(true){
var result__42924__auto__ = switch__42921__auto__(state_46805);
if(cljs.core.keyword_identical_QMARK_(result__42924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42924__auto__;
}
break;
}
}catch (e46865){var ex__42925__auto__ = e46865;
var statearr_46866_48709 = state_46805;
(statearr_46866_48709[(2)] = ex__42925__auto__);


if(cljs.core.seq((state_46805[(4)]))){
var statearr_46867_48710 = state_46805;
(statearr_46867_48710[(1)] = cljs.core.first((state_46805[(4)])));

} else {
throw ex__42925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48713 = state_46805;
state_46805 = G__48713;
continue;
} else {
return ret_value__42923__auto__;
}
break;
}
});
cljs$core$async$state_machine__42922__auto__ = function(state_46805){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42922__auto____1.call(this,state_46805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42922__auto____0;
cljs$core$async$state_machine__42922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42922__auto____1;
return cljs$core$async$state_machine__42922__auto__;
})()
})();
var state__43521__auto__ = (function (){var statearr_46868 = f__43520__auto__();
(statearr_46868[(6)] = c__43519__auto___48660);

return statearr_46868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__43521__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
