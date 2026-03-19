/* PediCode Service Worker — v3.8 · modular build */
/* Estrategia: network-first para HTML, cache-first para assets estáticos y módulos JS */

const CACHE = 'pedicode-v3.8';

const HTML_FILES = [
  './index.html',
  './',
];

const STATIC_ASSETS = [
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-180.png',
  './icon-1024.png',
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
  self.skipWaiting();
});

/* ── ACTIVATE: eliminar caches viejas ──────────────────────────────── */
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
    )
  );
  self.clients.claim();
});

/* ── FETCH ────────────────────────────────────────────────────────── */
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  if (e.request.method !== 'GET' || url.origin !== self.location.origin) {
    return;
  }

  /* NAVEGACIÓN (HTML): network-first
     Siempre intenta red primero → el usuario recibe la última versión.
     Solo usa cache si está offline. */
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

  /* JS MODULES + CSS: network-first con fallback a cache
     Permite recibir actualizaciones cuando hay red, y funcionar offline. */
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

  /* ASSETS ESTÁTICOS (iconos, manifest): cache-first */
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
