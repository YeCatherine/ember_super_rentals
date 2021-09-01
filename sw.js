!function(){"use strict"
self.CACHE_BUSTER="1630510904964|0.21409806174685841",self.addEventListener("install",(function(e){return self.skipWaiting()})),self.addEventListener("activate",(function(e){return self.clients.claim()}))
var e=(e,t)=>caches.keys().then((n=>{n.forEach((n=>{0===n.indexOf(e)&&n!==t&&caches.delete(n)}))}))
const t="esw-asset-cache-1",n=["assets/images/teaching-tomster-756a14cc8225582bf530b5d0c624db4d.png","assets/super-rentals-8005033ca22c96ad7528908a4208e225.css","assets/super-rentals-b2cfaed805eac9dbebf4a194135b173d.js","assets/vendor-d41d8cd98f00b204e9800998ecf8427e.css","assets/vendor-0b94297eb54dd1357a2182e6720d15c4.js"].map((e=>new URL(e,self.location).toString()))
function s(e,t){return!!t.find((t=>t.test(decodeURI(e))))}self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>Promise.all(n.map((t=>{let n=new Request(t,{mode:"cors"})
return fetch(n).then((n=>{if(n.status>=400)throw new Error(`Request for ${t} failed with status ${n.statusText}`)
return e.put(t,n)})).catch((function(e){console.error(`Not caching ${t} due to ${e}`)}))}))))))})),self.addEventListener("activate",(s=>{s.waitUntil(Promise.all([e("esw-asset-cache",t),void caches.open(t).then((e=>e.keys().then((t=>{t.forEach((t=>{-1===n.indexOf(t.url)&&e.delete(t)}))}))))]))})),self.addEventListener("fetch",(e=>{let s="GET"===e.request.method,c=-1!==n.indexOf(e.request.url)
s&&c&&e.respondWith(caches.match(e.request,{cacheName:t}).then((t=>t||fetch(e.request.url,{mode:"cors"}))))}))
const c=[].map((function(e){let t=function(e,t=self.location){return decodeURI(new URL(encodeURI(e),t).toString())}(e)
return new RegExp(`^${t}$`)}))
self.addEventListener("fetch",(e=>{let t=e.request
"GET"===t.method&&/^https?/.test(t.url)&&s(t.url,c)&&e.respondWith(caches.open("esw-cache-fallback-1").then((n=>fetch(t).then((e=>(n.put(t,e.clone()),e))).catch((()=>caches.match(e.request))))))})),self.addEventListener("activate",(t=>{t.waitUntil(e("esw-cache-fallback","esw-cache-fallback-1"))}))
const a=[],i=[]
self.INDEX_FILE_HASH="0f3d16722785d3d11978909e935ec499"
const l=new URL("index.html",self.location).toString()
self.addEventListener("install",(e=>{e.waitUntil(fetch(l,{credentials:"include"}).then((e=>caches.open("esw-index-1").then((t=>t.put(l,e))))))})),self.addEventListener("activate",(t=>{t.waitUntil(e("esw-index","esw-index-1"))})),self.addEventListener("fetch",(e=>{let t=e.request,n=new URL(t.url),c="GET"===t.method,r=null!==t.headers?t.headers.get("accept"):null,d=null===r||-1!==r.indexOf("text/html"),h=n.origin===location.origin,o=s(t.url,a),f=!i.length||s(t.url,i)
if(n.pathname,c&&d&&h&&f&&!o)return function(e){return e.respondWith(caches.match(l,{cacheName:"esw-index-1"}).then((e=>e||fetch(l,{credentials:"include"}).then((e=>(caches.open("esw-index-1").then((t=>t.put(l,e))),e.clone()))))))}(e)}))}()
