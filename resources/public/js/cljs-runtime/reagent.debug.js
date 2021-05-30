goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__49753__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__49753 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49756__i = 0, G__49756__a = new Array(arguments.length -  0);
while (G__49756__i < G__49756__a.length) {G__49756__a[G__49756__i] = arguments[G__49756__i + 0]; ++G__49756__i;}
  args = new cljs.core.IndexedSeq(G__49756__a,0,null);
} 
return G__49753__delegate.call(this,args);};
G__49753.cljs$lang$maxFixedArity = 0;
G__49753.cljs$lang$applyTo = (function (arglist__49757){
var args = cljs.core.seq(arglist__49757);
return G__49753__delegate(args);
});
G__49753.cljs$core$IFn$_invoke$arity$variadic = G__49753__delegate;
return G__49753;
})()
);

(o.error = (function() { 
var G__49758__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__49758 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49759__i = 0, G__49759__a = new Array(arguments.length -  0);
while (G__49759__i < G__49759__a.length) {G__49759__a[G__49759__i] = arguments[G__49759__i + 0]; ++G__49759__i;}
  args = new cljs.core.IndexedSeq(G__49759__a,0,null);
} 
return G__49758__delegate.call(this,args);};
G__49758.cljs$lang$maxFixedArity = 0;
G__49758.cljs$lang$applyTo = (function (arglist__49760){
var args = cljs.core.seq(arglist__49760);
return G__49758__delegate(args);
});
G__49758.cljs$core$IFn$_invoke$arity$variadic = G__49758__delegate;
return G__49758;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
