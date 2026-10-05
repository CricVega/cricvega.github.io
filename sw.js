/* CricVega service worker: app shell cache + network-first pages + live-data resilience cache.
   Live data is always network-first; cached copies are ONLY used as a fallback when the
   upstream feed (ESPN / BBC / rss2json) is unreachable, so the site degrades gracefully. */
const V='cv-775ce7cd';
const LIVE='cv-live-v1';
const LIVE_HOSTS=['site.api.espn.com','site.web.api.espn.com','a.espncdn.com','api.rss2json.com','feeds.bbci.co.uk','ichef.bbci.co.uk'];
const SCOPE=self.registration.scope;
const SHELL=['','app.css','app.js','404.html','favicon.svg','icon-192.png','manifest.webmanifest'].map(p=>SCOPE+p);

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(V).then(c=>Promise.allSettled(SHELL.map(u=>c.add(u)))).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V&&k!==LIVE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});

self.addEventListener('fetch',e=>{
  const r=e.request; if(r.method!=='GET') return;
  const u=new URL(r.url);
  /* Third-party data feeds & images: network-first with cache fallback (resilience). */
  if(LIVE_HOSTS.includes(u.hostname)){
    e.respondWith(fetch(r).then(res=>{
      if(res&&res.ok){ const c=res.clone(); caches.open(LIVE).then(x=>x.put(r,c)); }
      return res;
    }).catch(()=>caches.match(r).then(h=>h||Response.error())));
    return;
  }
  if(u.origin!==location.origin) return;
  if(r.mode==='navigate'){
    e.respondWith(fetch(r).then(res=>{ if(res.ok){ const c=res.clone(); caches.open(V).then(x=>x.put(r,c)); } return res; })
      .catch(()=>caches.match(r).then(h=>h||caches.match(SCOPE+'404.html'))));
    return;
  }
  e.respondWith(caches.match(r).then(hit=>{
    const net=fetch(r).then(res=>{ if(res.ok){ const c=res.clone(); caches.open(V).then(x=>x.put(r,c)); } return res; }).catch(()=>hit);
    return hit||net;
  }));
});
