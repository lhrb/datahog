
shadow.cljs.devtools.client.env.module_loaded('main');

try { lhrb.app.init(); } catch (e) { console.error("An error occurred when calling (lhrb.app/init)"); throw(e); }