/* PediCode Service Worker — v3.8 · modular build · auto-update */

const CACHE = 'pedicode-v3.8';

const HTML_FILES = [
  './index.html',
  './',
];

const STATIC_ASSETS = [
  './manifest.json',
  './pedicode_icon_192.png',
  './pedicode_icon_512.png',
  './pedicode_icon_180.png',
  './pedicode_icon_1024.png',
];

const JS_MODULES = [
  './app.js',
  './style.css',
  './data/i18n.js',
  './data/drugs.js',
  './data/infusions.js',
  './data/rcp.js',
  './data/protocols.js',
  './data/misc.js',
];

/* ── INSTALL: pre-cache all files ───────────────────────────────────── */
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache =>
      cache.addAll([...HTML_FILES, ...STATIC_ASSETS, ...JS_MODULES])
    )
  );
  /* Activa inmediatamente sin esperar a que cierren las pestañas */
  self.skipWaiting();
});

/* ── ACTIVATE: eliminar caches viejas + tomar control inmediato ─────── */
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE)
          .map(k => {
            console.log('[SW] Borrando cache antigua:', k);
            return caches.delete(k);
          })
      )
    ).then(() => {
      /* Toma control de todas las pestañas abiertas inmediatamente */
      return self.clients.claim();
    }).then(() => {
      /* Avisa a todas las pestañas para que recarguen */
      return self.clients.matchAll({ type: 'window' }).then(clients => {
        clients.forEach(client => {
          client.postMessage({ type: 'SW_UPDATED' });
        });
      });
    })
  );
});

/* ── FETCH ────────────────────────────────────────────────────────── */
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  if (e.request.method !== 'GET' || url.origin !== self.location.origin) {
    return;
  }

  /* NAVEGACIÓN (HTML): network-first */
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request)
        .then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE).then(cache => cache.put(e.request, clone));
          }
          return response;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  /* JS MODULES + CSS: network-first con fallback a cache */
  const isModule = JS_MODULES.some(m => url.pathname.endsWith(m.replace('./', '/')));
  const isCss = url.pathname.endsWith('style.css');

  if (isModule || isCss) {
    e.respondWith(
      fetch(e.request)
        .then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE).then(cache => cache.put(e.request, clone));
          }
          return response;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  /* ASSETS ESTÁTICOS: cache-first */
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(response => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE).then(cache => cache.put(e.request, clone));
        }
        return response;
      });
    })
  );
});

/* ── MESSAGE: forzar actualización manual desde la página ───────────── */
self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
