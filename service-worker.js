// Service Worker de BrazzoNav
// Assure le fonctionnement 100% hors-ligne et l'installation PWA

const CACHE_NAME = 'brazzonav-cache-v1';

const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './css/style.css',
  './data/transport.json',
  './data/transport_data.js',
  './js/app.js',
  './js/search.js',
  './js/map.js',
  './js/chat.js',
  './icons/icon.svg'
];

// 1. Installation du Service Worker et mise en cache des fichiers statiques
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Mise en cache des fichiers de base...');
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// 2. Nettoyage des anciens caches lors de la mise à jour
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Suppression de l\'ancien cache :', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. Stratégie de récupération : Cache en priorité, puis Réseau (Idéal pour réseau 2G/3G lent)
self.addEventListener('fetch', (event) => {
  // Ignorer les requêtes d'API serverless pour ne pas bloquer les appels IA en ligne
  if (event.request.url.includes('/api/')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Retourner immédiatement la version en cache
        return cachedResponse;
      }
      // Sinon, tenter de télécharger depuis le réseau
      return fetch(event.request).then((networkResponse) => {
        // Si la réponse est valide, on peut la mettre en cache pour la prochaine fois
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        // En cas d'échec total (déconnecté), renvoyer index.html si c'est une navigation
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
