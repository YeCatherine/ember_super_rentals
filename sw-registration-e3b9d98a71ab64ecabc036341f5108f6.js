!function(){"use strict"
let e=[],r=[]
"serviceWorker"in navigator&&navigator.serviceWorker.register("/ember_super_rentals/sw.js",{scope:"/ember_super_rentals/"}).then((function(r){let t=Promise.resolve()
for(let n=0,o=e.length;n<o;n++)t=t.then((function(){return e[n](r)}))
return t.then((function(){console.log("Service Worker registration succeeded. Scope is "+r.scope)}))})).catch((function(e){let t=Promise.resolve()
for(let n=0,o=r.length;n<o;n++)t=t.then((function(){return r[n](e)}))
return t.then((function(){console.log("Service Worker registration failed with "+e)}))}))}()
