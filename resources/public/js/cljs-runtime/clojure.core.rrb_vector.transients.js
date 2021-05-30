goog.provide('clojure.core.rrb_vector.transients');
clojure.core.rrb_vector.transients.ensure_editable = (function clojure$core$rrb_vector$transients$ensure_editable(edit,node){
if((node.edit === edit)){
return node;
} else {
var new_arr = cljs.core.aclone(node.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(edit,new_arr));
}
});
clojure.core.rrb_vector.transients.editable_root = (function clojure$core$rrb_vector$transients$editable_root(root){
var new_arr = cljs.core.aclone(root.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(({}),new_arr));
});
clojure.core.rrb_vector.transients.editable_tail = (function clojure$core$rrb_vector$transients$editable_tail(tail){
var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
cljs.core.array_copy(tail,(0),ret,(0),tail.length);

return ret;
});
clojure.core.rrb_vector.transients.push_tail_BANG_ = (function clojure$core$rrb_vector$transients$push_tail_BANG_(shift,cnt,root_edit,current_node,tail_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var n_41673 = ret;
var shift_41674__$1 = shift;
while(true){
var arr_41675 = n_41673.arr;
var subidx_41676 = (((cnt - (1)) >> shift_41674__$1) & (31));
if((shift_41674__$1 === (5))){
(arr_41675[subidx_41676] = tail_node);
} else {
var child_41678 = (arr_41675[subidx_41676]);
if((child_41678 == null)){
(arr_41675[subidx_41676] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_41674__$1 - (5)),tail_node));
} else {
var editable_child_41680 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,child_41678);
(arr_41675[subidx_41676] = editable_child_41680);

var G__41682 = editable_child_41680;
var G__41683 = (shift_41674__$1 - (5));
n_41673 = G__41682;
shift_41674__$1 = G__41683;
continue;
}
}
break;
}

return ret;
} else {
var arr = ret.arr;
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var li = ((rngs[(32)]) - (1));
var cret = (((shift === (5)))?null:(function (){var child = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr[li]));
var ccnt = ((((li > (0)))?((rngs[li]) - (rngs[(li - (1))])):(rngs[(0)])) + (32));
if((!(clojure.core.rrb_vector.nodes.overflow_QMARK_(child,(shift - (5)),ccnt)))){
var G__41649 = (shift - (5));
var G__41650 = ccnt;
var G__41651 = root_edit;
var G__41652 = child;
var G__41653 = tail_node;
return (clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5(G__41649,G__41650,G__41651,G__41652,G__41653) : clojure.core.rrb_vector.transients.push_tail_BANG_.call(null,G__41649,G__41650,G__41651,G__41652,G__41653));
} else {
return null;
}
})());
if(cljs.core.truth_(cret)){
(arr[li] = cret);

(rngs[li] = ((rngs[li]) + (32)));

return ret;
} else {
if((li >= (31))){
var msg_41691 = ["Assigning index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((li + (1)))," of vector"," object array to become a node, when that"," index should only be used for storing"," range arrays."].join('');
var data_41692 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"shift","shift",997140064),shift,new cljs.core.Keyword(null,"cnd","cnd",-521882032),cnt,new cljs.core.Keyword(null,"current-node","current-node",-814308842),current_node,new cljs.core.Keyword(null,"tail-node","tail-node",-1373693221),tail_node,new cljs.core.Keyword(null,"rngs","rngs",-8039697),rngs,new cljs.core.Keyword(null,"li","li",723558921),li,new cljs.core.Keyword(null,"cret","cret",2090504467),cret], null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg_41691,data_41692);
} else {
}

(arr[(li + (1))] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift - (5)),tail_node));

(rngs[(li + (1))] = ((rngs[li]) + (32)));

(rngs[(32)] = ((rngs[(32)]) + (1)));

return ret;
}
}
});
clojure.core.rrb_vector.transients.pop_tail_BANG_ = (function clojure$core$rrb_vector$transients$pop_tail_BANG_(shift,cnt,root_edit,current_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var subidx = (((cnt - (2)) >> shift) & (31));
if((shift > (5))){
var child = (function (){var G__41654 = (shift - (5));
var G__41655 = cnt;
var G__41656 = root_edit;
var G__41657 = (ret.arr[subidx]);
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__41654,G__41655,G__41656,G__41657) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__41654,G__41655,G__41656,G__41657));
})();
if((((child == null)) && ((subidx === (0))))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = child);

return ret;
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = null);

return ret;

}
}
} else {
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx = ((rngs[(32)]) - (1));
if((shift > (5))){
var child = (ret.arr[subidx]);
var child_cnt = (((subidx === (0)))?(rngs[(0)]):((rngs[subidx]) - (rngs[(subidx - (1))])));
var new_child = (function (){var G__41658 = (shift - (5));
var G__41659 = child_cnt;
var G__41660 = root_edit;
var G__41661 = child;
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__41658,G__41659,G__41660,G__41661) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__41658,G__41659,G__41660,G__41661));
})();
if((((new_child == null)) && ((subidx === (0))))){
return null;
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_(child)){
var arr = ret.arr;
(rngs[subidx] = ((rngs[subidx]) - (32)));

(arr[subidx] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;
} else {
var rng = clojure.core.rrb_vector.nodes.last_range(child);
var diff = (rng - (cljs.core.truth_(new_child)?clojure.core.rrb_vector.nodes.last_range(new_child):(0)));
var arr = ret.arr;
(rngs[subidx] = ((rngs[subidx]) - diff));

(arr[subidx] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;

}
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
var child = (arr[subidx]);
(arr[subidx] = null);

(rngs[subidx] = (0));

(rngs[(32)] = ((rngs[(32)]) - (1)));

return ret;

}
}
}
});
clojure.core.rrb_vector.transients.do_assoc_BANG_ = (function clojure$core$rrb_vector$transients$do_assoc_BANG_(shift,root_edit,current_node,i,val){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var shift_41722__$1 = shift;
var node_41723 = ret;
while(true){
if((shift_41722__$1 === (0))){
var arr_41724 = node_41723.arr;
(arr_41724[(i & (31))] = val);
} else {
var arr_41725 = node_41723.arr;
var subidx_41726 = ((i >> shift_41722__$1) & (31));
var child_41727 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr_41725[subidx_41726]));
(arr_41725[subidx_41726] = child_41727);

var G__41728 = (shift_41722__$1 - (5));
var G__41729 = child_41727;
shift_41722__$1 = G__41728;
node_41723 = G__41729;
continue;
}
break;
}
} else {
var arr_41730 = ret.arr;
var rngs_41731 = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx_41732 = ((i >> shift) & (31));
var subidx_41733__$1 = (function (){var subidx_41733__$1 = subidx_41732;
while(true){
if((i < ((rngs_41731[subidx_41733__$1]) | (0)))){
return subidx_41733__$1;
} else {
var G__41736 = (subidx_41733__$1 + (1));
subidx_41733__$1 = G__41736;
continue;
}
break;
}
})();
var i_41734__$1 = (((subidx_41733__$1 === (0)))?i:(i - (rngs_41731[(subidx_41733__$1 - (1))])));
(arr_41730[subidx_41733__$1] = (function (){var G__41664 = (shift - (5));
var G__41665 = root_edit;
var G__41666 = (arr_41730[subidx_41733__$1]);
var G__41667 = i_41734__$1;
var G__41668 = val;
return (clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5(G__41664,G__41665,G__41666,G__41667,G__41668) : clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null,G__41664,G__41665,G__41666,G__41667,G__41668));
})());
}

return ret;
});

//# sourceMappingURL=clojure.core.rrb_vector.transients.js.map
