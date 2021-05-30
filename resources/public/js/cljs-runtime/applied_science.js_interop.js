goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__4835__auto__ = [];
var len__4829__auto___51362 = arguments.length;
var i__4830__auto___51363 = (0);
while(true){
if((i__4830__auto___51363 < len__4829__auto___51362)){
args__4835__auto__.push((arguments[i__4830__auto___51363]));

var G__51364 = (i__4830__auto___51363 + (1));
i__4830__auto___51363 = G__51364;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__51178_51365 = keyvals;
var vec__51181_51366 = G__51178_51365;
var seq__51182_51367 = cljs.core.seq(vec__51181_51366);
var first__51183_51368 = cljs.core.first(seq__51182_51367);
var seq__51182_51369__$1 = cljs.core.next(seq__51182_51367);
var k_51370 = first__51183_51368;
var first__51183_51371__$1 = cljs.core.first(seq__51182_51369__$1);
var seq__51182_51372__$2 = cljs.core.next(seq__51182_51369__$1);
var v_51373 = first__51183_51371__$1;
var keyvals_51374__$1 = seq__51182_51372__$2;
var G__51178_51375__$1 = G__51178_51365;
while(true){
var vec__51184_51376 = G__51178_51375__$1;
var seq__51185_51377 = cljs.core.seq(vec__51184_51376);
var first__51186_51378 = cljs.core.first(seq__51185_51377);
var seq__51185_51379__$1 = cljs.core.next(seq__51185_51377);
var k_51380__$1 = first__51186_51378;
var first__51186_51381__$1 = cljs.core.first(seq__51185_51379__$1);
var seq__51185_51382__$2 = cljs.core.next(seq__51185_51379__$1);
var v_51383__$1 = first__51186_51381__$1;
var keyvals_51384__$2 = seq__51185_51382__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_51380__$1)] = v_51383__$1);

if(keyvals_51384__$2){
var G__51385 = keyvals_51384__$2;
G__51178_51375__$1 = G__51385;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq51173){
var G__51174 = cljs.core.first(seq51173);
var seq51173__$1 = cljs.core.next(seq51173);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51174,seq51173__$1);
}));

applied_science.js_interop.unchecked_get = (function applied_science$js_interop$unchecked_get(obj,k){
return (obj[applied_science.js_interop.impl.wrap_key(k)]);
});
/**
 * Returns the value mapped to key, not-found or nil if key not present.
 * 
 *   ```
 *   (j/get o :k)
 *   (j/get o .-k)
 *   ```
 */
applied_science.js_interop.get = (function applied_science$js_interop$get(var_args){
var G__51197 = arguments.length;
switch (G__51197) {
case 2:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj51200 = obj;
var k51201 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj51202 = obj51200;
return (((!((obj51202 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k51201,obj51202)));
})()){
return (obj51200[k51201]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var obj51204 = obj;
var k51205 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj51206 = obj51204;
return (((!((obj51206 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k51205,obj51206)));
})()){
return (obj51204[k51205]);
} else {
return not_found;
}
}));

(applied_science.js_interop.get.cljs$lang$maxFixedArity = 3);

/**
 * Returns the value in a nested object structure, where ks is
 * a sequence of keys. Returns nil if the key is not present,
 * or the not-found value if supplied.
 * 
 * ```
 * (j/get-in o [:x :y] :fallback-value)
 * (j/get-in o [.-x .-y] :fallback-value)
 * ```
 */
applied_science.js_interop.get_in = (function applied_science$js_interop$get_in(var_args){
var G__51209 = arguments.length;
switch (G__51209) {
case 2:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2 = (function (obj,ks){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3 = (function (obj,ks,not_found){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$3(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),not_found);
}));

(applied_science.js_interop.get_in.cljs$lang$maxFixedArity = 3);

/**
 * Returns true if `obj` contains `k`.
 * 
 *   ```
 *   (j/contains? o :k)
 *   (j/contains? o .-k)
 *   ```
 */
applied_science.js_interop.contains_QMARK_ = (function applied_science$js_interop$contains_QMARK_(obj,k){
return applied_science.js_interop.impl.contains_QMARK__STAR_(obj,applied_science.js_interop.impl.wrap_key(k));
});
/**
 * Returns an object containing only those entries in `o` whose key is in `ks`.
 * 
 *   ```
 *   (j/select-keys o [:a :b :c])
 *   (j/select-keys o [.-a .-b .-c])
 *   ```
 */
applied_science.js_interop.select_keys = (function applied_science$js_interop$select_keys(obj,ks){
return applied_science.js_interop.impl.select_keys_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
});

/**
* @constructor
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.ILookup}
*/
applied_science.js_interop.JSLookup = (function (obj){
this.obj = obj;
this.cljs$lang$protocol_mask$partition0$ = 33024;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var obj51217 = self__.obj;
var k51218 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj51220 = obj51217;
return (((!((obj51220 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k51218,obj51220)));
})()){
return (obj51217[k51218]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var obj51221 = self__.obj;
var k51222 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj51223 = obj51221;
return (((!((obj51223 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k51222,obj51223)));
})()){
return (obj51221[k51222]);
} else {
return not_found;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.obj;
}));

(applied_science.js_interop.JSLookup.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(applied_science.js_interop.JSLookup.cljs$lang$type = true);

(applied_science.js_interop.JSLookup.cljs$lang$ctorStr = "applied-science.js-interop/JSLookup");

(applied_science.js_interop.JSLookup.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"applied-science.js-interop/JSLookup");
}));

/**
 * Positional factory function for applied-science.js-interop/JSLookup.
 */
applied_science.js_interop.__GT_JSLookup = (function applied_science$js_interop$__GT_JSLookup(obj){
return (new applied_science.js_interop.JSLookup(obj));
});

/**
 * Wraps `obj` with an ILookup implementation, to support reading/destructuring. Does not support renamable keys.
 * 
 *   ```
 *   (let [{:keys [a b c]} (j/lookup o)]
 * ...)
 *   ```
 */
applied_science.js_interop.lookup = (function applied_science$js_interop$lookup(obj){
if(cljs.core.truth_(obj)){
return (new applied_science.js_interop.JSLookup(obj));
} else {
return null;
}
});
/**
 * Sets key-value pairs on `obj`, returns `obj`.
 * 
 *   ```
 *   (j/assoc! o :x 10)
 *   (j/assoc! o .-x 10)
 *   ```
 */
applied_science.js_interop.assoc_BANG_ = (function applied_science$js_interop$assoc_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___51399 = arguments.length;
var i__4830__auto___51400 = (0);
while(true){
if((i__4830__auto___51400 < len__4829__auto___51399)){
args__4835__auto__.push((arguments[i__4830__auto___51400]));

var G__51401 = (i__4830__auto___51400 + (1));
i__4830__auto___51400 = G__51401;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var obj__$1 = (((!((obj == null))))?obj:({}));
var G__51231 = keyvals;
var vec__51232 = G__51231;
var seq__51233 = cljs.core.seq(vec__51232);
var first__51234 = cljs.core.first(seq__51233);
var seq__51233__$1 = cljs.core.next(seq__51233);
var k = first__51234;
var first__51234__$1 = cljs.core.first(seq__51233__$1);
var seq__51233__$2 = cljs.core.next(seq__51233__$1);
var v = first__51234__$1;
var kvs = seq__51233__$2;
var G__51231__$1 = G__51231;
while(true){
var vec__51235 = G__51231__$1;
var seq__51236 = cljs.core.seq(vec__51235);
var first__51237 = cljs.core.first(seq__51236);
var seq__51236__$1 = cljs.core.next(seq__51236);
var k__$1 = first__51237;
var first__51237__$1 = cljs.core.first(seq__51236__$1);
var seq__51236__$2 = cljs.core.next(seq__51236__$1);
var v__$1 = first__51237__$1;
var kvs__$1 = seq__51236__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__51404 = kvs__$1;
G__51231__$1 = G__51404;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq51226){
var G__51227 = cljs.core.first(seq51226);
var seq51226__$1 = cljs.core.next(seq51226);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51227,seq51226__$1);
}));

/**
 * Mutates the value in a nested object structure, where ks is a
 *   sequence of keys and v is the new value. If any levels do not
 *   exist, objects will be created.
 * 
 *   ```
 *   (j/assoc-in! o [:x :y] 10)
 *   (j/assoc-in! o [.-x .-y] 10)
 *   ```
 */
applied_science.js_interop.assoc_in_BANG_ = (function applied_science$js_interop$assoc_in_BANG_(obj,ks,v){
return applied_science.js_interop.impl.assoc_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),v);
});
/**
 * 'Updates' a value in a JavaScript object, where k is a key and
 *   f is a function that will take the old value and any supplied
 *   args and return the new value, which replaces the old value.
 *   If the key does not exist, nil is passed as the old value.
 * 
 *   ```
 *   (j/update! o :a + 10)
 *   (j/update! o .-a + 10)
 *   ```
 */
applied_science.js_interop.update_BANG_ = (function applied_science$js_interop$update_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___51406 = arguments.length;
var i__4830__auto___51407 = (0);
while(true){
if((i__4830__auto___51407 < len__4829__auto___51406)){
args__4835__auto__.push((arguments[i__4830__auto___51407]));

var G__51409 = (i__4830__auto___51407 + (1));
i__4830__auto___51407 = G__51409;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,f,args){
var obj__$1 = (((!((obj == null))))?obj:({}));
var k_STAR_ = applied_science.js_interop.impl.wrap_key(k);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,(obj__$1[k_STAR_]),args);
(obj__$1[k_STAR_] = v);

return obj__$1;
}));

(applied_science.js_interop.update_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq51246){
var G__51247 = cljs.core.first(seq51246);
var seq51246__$1 = cljs.core.next(seq51246);
var G__51248 = cljs.core.first(seq51246__$1);
var seq51246__$2 = cljs.core.next(seq51246__$1);
var G__51249 = cljs.core.first(seq51246__$2);
var seq51246__$3 = cljs.core.next(seq51246__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51247,G__51248,G__51249,seq51246__$3);
}));

/**
 * 'Updates' a value in a nested object structure, where ks is a
 *   sequence of keys and f is a function that will take the old value
 *   and any supplied args and return the new value, mutating the
 *   nested structure.  If any levels do not exist, objects will be
 *   created.
 * 
 *   ```
 *   (j/update-in! o [:x :y] + 10)
 *   (j/update-in! o [.-x .-y] + 10)
 *   ```
 */
applied_science.js_interop.update_in_BANG_ = (function applied_science$js_interop$update_in_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___51412 = arguments.length;
var i__4830__auto___51413 = (0);
while(true){
if((i__4830__auto___51413 < len__4829__auto___51412)){
args__4835__auto__.push((arguments[i__4830__auto___51413]));

var G__51414 = (i__4830__auto___51413 + (1));
i__4830__auto___51413 = G__51414;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,f,args){
return applied_science.js_interop.impl.update_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),f,args);
}));

(applied_science.js_interop.update_in_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq51261){
var G__51262 = cljs.core.first(seq51261);
var seq51261__$1 = cljs.core.next(seq51261);
var G__51263 = cljs.core.first(seq51261__$1);
var seq51261__$2 = cljs.core.next(seq51261__$1);
var G__51264 = cljs.core.first(seq51261__$2);
var seq51261__$3 = cljs.core.next(seq51261__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51262,G__51263,G__51264,seq51261__$3);
}));

/**
 * Extends `obj` with the properties of one or more objects, overwriting
 * existing properties, moving left to right. Returns `obj`.
 * An empty starting object is provided if `obj` is nil.
 *   ```
 *   (j/extend o other)
 *   (j/extend o other #js{:x 1})
 *   ```
 *   Not IE6-friendly
 */
applied_science.js_interop.extend_BANG_ = (function applied_science$js_interop$extend_BANG_(var_args){
var G__51271 = arguments.length;
switch (G__51271) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4850__auto__ = [];
var len__4829__auto___51422 = arguments.length;
var i__4830__auto___51423 = (0);
while(true){
if((i__4830__auto___51423 < len__4829__auto___51422)){
args_arr__4850__auto__.push((arguments[i__4830__auto___51423]));

var G__51424 = (i__4830__auto___51423 + (1));
i__4830__auto___51423 = G__51424;
continue;
} else {
}
break;
}

var argseq__4851__auto__ = (new cljs.core.IndexedSeq(args_arr__4850__auto__.slice((2)),(0),null));
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4851__auto__);

}
});

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return obj;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (obj,x){
var obj__$1 = (((!((obj == null))))?obj:({}));
if((!((x == null)))){
var seq__51274_51425 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__51275_51426 = null;
var count__51276_51427 = (0);
var i__51277_51428 = (0);
while(true){
if((i__51277_51428 < count__51276_51427)){
var k_51429 = chunk__51275_51426.cljs$core$IIndexed$_nth$arity$2(null,i__51277_51428);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_51429,applied_science.js_interop.unchecked_get(x,k_51429)], 0));


var G__51430 = seq__51274_51425;
var G__51431 = chunk__51275_51426;
var G__51432 = count__51276_51427;
var G__51433 = (i__51277_51428 + (1));
seq__51274_51425 = G__51430;
chunk__51275_51426 = G__51431;
count__51276_51427 = G__51432;
i__51277_51428 = G__51433;
continue;
} else {
var temp__5754__auto___51434 = cljs.core.seq(seq__51274_51425);
if(temp__5754__auto___51434){
var seq__51274_51436__$1 = temp__5754__auto___51434;
if(cljs.core.chunked_seq_QMARK_(seq__51274_51436__$1)){
var c__4649__auto___51437 = cljs.core.chunk_first(seq__51274_51436__$1);
var G__51439 = cljs.core.chunk_rest(seq__51274_51436__$1);
var G__51440 = c__4649__auto___51437;
var G__51441 = cljs.core.count(c__4649__auto___51437);
var G__51442 = (0);
seq__51274_51425 = G__51439;
chunk__51275_51426 = G__51440;
count__51276_51427 = G__51441;
i__51277_51428 = G__51442;
continue;
} else {
var k_51444 = cljs.core.first(seq__51274_51436__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_51444,applied_science.js_interop.unchecked_get(x,k_51444)], 0));


var G__51447 = cljs.core.next(seq__51274_51436__$1);
var G__51448 = null;
var G__51449 = (0);
var G__51450 = (0);
seq__51274_51425 = G__51447;
chunk__51275_51426 = G__51448;
count__51276_51427 = G__51449;
i__51277_51428 = G__51450;
continue;
}
} else {
}
}
break;
}
} else {
}

return obj__$1;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(applied_science.js_interop.extend_BANG_,applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(obj,x),more);
}));

/** @this {Function} */
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq51268){
var G__51269 = cljs.core.first(seq51268);
var seq51268__$1 = cljs.core.next(seq51268);
var G__51270 = cljs.core.first(seq51268__$1);
var seq51268__$2 = cljs.core.next(seq51268__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51269,G__51270,seq51268__$2);
}));

(applied_science.js_interop.extend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Appends `v` to `array` and returns the mutated array.
 * 
 *   ```
 *   (j/push! arr 10)
 *   ```
 */
applied_science.js_interop.push_BANG_ = (function applied_science$js_interop$push_BANG_(array,x){
var G__51288 = array;
G__51288.push(x);

return G__51288;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__51289 = array;
G__51289.unshift(x);

return G__51289;
});
/**
 * Call function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/call o :someFunction arg1 arg2)
 *   (j/call o .-someFunction arg1 arg2)
 *   ```
 */
applied_science.js_interop.call = (function applied_science$js_interop$call(var_args){
var args__4835__auto__ = [];
var len__4829__auto___51452 = arguments.length;
var i__4830__auto___51453 = (0);
while(true){
if((i__4830__auto___51453 < len__4829__auto___51452)){
args__4835__auto__.push((arguments[i__4830__auto___51453]));

var G__51454 = (i__4830__auto___51453 + (1));
i__4830__auto___51453 = G__51454;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj51294 = obj;
var k51295 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj51296 = obj51294;
return (((!((obj51296 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k51295,obj51296)));
})()){
return (obj51294[k51295]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq51291){
var G__51292 = cljs.core.first(seq51291);
var seq51291__$1 = cljs.core.next(seq51291);
var G__51293 = cljs.core.first(seq51291__$1);
var seq51291__$2 = cljs.core.next(seq51291__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51292,G__51293,seq51291__$2);
}));

/**
 * Apply function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/apply o :someFunction #js [arg1 arg2])
 *   (j/apply o .-someFunction #js [arg1 arg2])
 *   ```
 */
applied_science.js_interop.apply = (function applied_science$js_interop$apply(obj,k,arg_array){
return (function (){var obj51298 = obj;
var k51299 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj51300 = obj51298;
return (((!((obj51300 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k51299,obj51300)));
})()){
return (obj51298[k51299]);
} else {
return undefined;
}
})().apply(obj,arg_array);
});
/**
 * Call function nested at `path` with `args`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/call-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.call_in = (function applied_science$js_interop$call_in(var_args){
var args__4835__auto__ = [];
var len__4829__auto___51462 = arguments.length;
var i__4830__auto___51463 = (0);
while(true){
if((i__4830__auto___51463 < len__4829__auto___51462)){
args__4835__auto__.push((arguments[i__4830__auto___51463]));

var G__51464 = (i__4830__auto___51463 + (1));
i__4830__auto___51463 = G__51464;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,args){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),cljs.core.to_array(args));
}));

(applied_science.js_interop.call_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq51302){
var G__51303 = cljs.core.first(seq51302);
var seq51302__$1 = cljs.core.next(seq51302);
var G__51304 = cljs.core.first(seq51302__$1);
var seq51302__$2 = cljs.core.next(seq51302__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51303,G__51304,seq51302__$2);
}));

/**
 * Apply function nested at `path` with `arg-array`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/apply-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.apply_in = (function applied_science$js_interop$apply_in(obj,ks,arg_array){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),arg_array);
});
/**
 * Create JavaScript object from an even number arguments representing
 * interleaved keys and values.
 * 
 * ```
 * (obj :a 1 :b 2 .-c 3 .-d 4)
 * ```
 */
applied_science.js_interop.obj = (function applied_science$js_interop$obj(var_args){
var args__4835__auto__ = [];
var len__4829__auto___51465 = arguments.length;
var i__4830__auto___51466 = (0);
while(true){
if((i__4830__auto___51466 < len__4829__auto___51465)){
args__4835__auto__.push((arguments[i__4830__auto___51466]));

var G__51467 = (i__4830__auto___51466 + (1));
i__4830__auto___51466 = G__51467;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var obj = ({});
var seq__51319_51471 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__51320_51472 = null;
var count__51321_51473 = (0);
var i__51322_51474 = (0);
while(true){
if((i__51322_51474 < count__51321_51473)){
var vec__51344_51475 = chunk__51320_51472.cljs$core$IIndexed$_nth$arity$2(null,i__51322_51474);
var k_51476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51344_51475,(0),null);
var v_51477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51344_51475,(1),null);
var obj51347_51478 = obj;
var obj51348_51479 = (((!((obj51347_51478 == null))))?obj51347_51478:({}));
(obj51348_51479[applied_science.js_interop.impl.wrap_key(k_51476)] = v_51477);



var G__51480 = seq__51319_51471;
var G__51481 = chunk__51320_51472;
var G__51482 = count__51321_51473;
var G__51483 = (i__51322_51474 + (1));
seq__51319_51471 = G__51480;
chunk__51320_51472 = G__51481;
count__51321_51473 = G__51482;
i__51322_51474 = G__51483;
continue;
} else {
var temp__5754__auto___51485 = cljs.core.seq(seq__51319_51471);
if(temp__5754__auto___51485){
var seq__51319_51488__$1 = temp__5754__auto___51485;
if(cljs.core.chunked_seq_QMARK_(seq__51319_51488__$1)){
var c__4649__auto___51489 = cljs.core.chunk_first(seq__51319_51488__$1);
var G__51490 = cljs.core.chunk_rest(seq__51319_51488__$1);
var G__51491 = c__4649__auto___51489;
var G__51492 = cljs.core.count(c__4649__auto___51489);
var G__51493 = (0);
seq__51319_51471 = G__51490;
chunk__51320_51472 = G__51491;
count__51321_51473 = G__51492;
i__51322_51474 = G__51493;
continue;
} else {
var vec__51351_51495 = cljs.core.first(seq__51319_51488__$1);
var k_51496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51351_51495,(0),null);
var v_51497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51351_51495,(1),null);
var obj51355_51498 = obj;
var obj51357_51499 = (((!((obj51355_51498 == null))))?obj51355_51498:({}));
(obj51357_51499[applied_science.js_interop.impl.wrap_key(k_51496)] = v_51497);



var G__51500 = cljs.core.next(seq__51319_51488__$1);
var G__51501 = null;
var G__51502 = (0);
var G__51503 = (0);
seq__51319_51471 = G__51500;
chunk__51320_51472 = G__51501;
count__51321_51473 = G__51502;
i__51322_51474 = G__51503;
continue;
}
} else {
}
}
break;
}

return obj;
}));

(applied_science.js_interop.obj.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq51306){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51306));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
