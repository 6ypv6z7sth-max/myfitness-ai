/* MyFitness AI – resilient PWA update worker; application data is never touched. */
const CACHE = 'myfitness-ai-shell-163';
const APP_ROOT = new URL('./', self.registration.scope);
const APP_HTML = new URL('index.html', APP_ROOT).href;
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    // No addAll(): missing icons must never prevent installation.
    try {
      const response = await fetch(new Request(APP_HTML, {cache:'reload'}));
      if (response.ok) {
        const cache = await caches.open(CACHE);
        await cache.put(APP_HTML, response);
      }
    } catch (error) { /* Existing offline content remains available. */ }
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    await self.clients.claim();
    // Delete ONLY old app-shell Cache API entries; never localStorage or IndexedDB.
    const names = await caches.keys();
    await Promise.all(names.filter(n => (n.startsWith('myfitness-ai-') || n.startsWith('myfitness-ai-shell-')) && n !== CACHE).map(n => caches.delete(n)));
  })());
});
self.addEventListener('message', event => {
  if(event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});
self.addEventListener('fetch', event => {
  const req=event.request, url=new URL(req.url);
  if(req.method!=='GET' || url.origin!==self.location.origin || !url.pathname.startsWith(APP_ROOT.pathname)) return;
  event.respondWith((async()=>{
    try {
      const fresh=await fetch(req, {cache:'no-store'});
      if(fresh.ok && (req.mode==='navigate' || url.pathname.endsWith('/index.html'))) {
        const cache=await caches.open(CACHE);
        await cache.put(APP_HTML,fresh.clone());
      }
      return fresh;
    } catch(error) {
      if(req.mode==='navigate') {
        const saved=await caches.match(APP_HTML);
        if(saved)return saved;
      }
      const saved=await caches.match(req);
      return saved || Response.error();
    }
  })());
});
