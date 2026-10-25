/* Utilisable hors ligne dès la première visite avec connexion. */
const CACHE='vivant-2026-10-dedoublonnage-v2';
const SHELL=['./','./index.html','./facts.js','./insights.js','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./icons/favicon.svg'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(x=>x!==CACHE).map(x=>caches.delete(x)))),self.clients.claim()]))});
self.addEventListener('fetch',event=>{const req=event.request;if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;
 event.respondWith(fetch(req).then(res=>{if(res.ok&&res.type==='basic'){const cp=res.clone();caches.open(CACHE).then(c=>c.put(req,cp)).catch(()=>{})}return res}).catch(()=>caches.match(req).then(r=>r||caches.match('./index.html'))));
});