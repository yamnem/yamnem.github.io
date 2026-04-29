const CACHE_NAME = 'travel-buddy-v0.3.0';

const PRECACHE_URLS = [
  './',
  './index.html',
  './assets/img/cover.jpeg',
  './assets/files/Confirmation_KTResNo185936_20260428_111015.pdf',
  './assets/files/Ethiopian_JEDJXX.pdf',
  './assets/files/Gojo-Totsukawa-Hongu-to-Shingu-bus.pdf',
  './assets/files/Hongu-map.pdf',
  './assets/files/Katsuura-map.pdf',
  './assets/files/Kii%20Matsuura%20-%20Shin%20Osaka%201.png',
  './assets/files/Kii%20Matsuura%20-%20Shin%20Osaka%202.png',
  './assets/files/Kii-Katsuura-station-area-map.pdf',
  './assets/files/Kumano-Kodo-Nakahechi-Route-Maps-Hongu.pdf',
  './assets/files/Kumano-Kodo-Nakahechi-Route-Maps-Takahara-Tsugizakura.pdf',
  './assets/files/Kumano-Kodo-Nakahechi-Route-Maps-Takijiri-Takahara.pdf',
  './assets/files/Melu_365assist.pdf',
  './assets/files/Melu_passport.png',
  './assets/files/Nachi-map.pdf',
  './assets/files/Outline_KTResNo185936_20260428_111025.pdf',
  './assets/files/Shin%20Osaka%20-%20KII%20Tanabe%202.png',
  './assets/files/Shin%20Osaka%20-%20Kii%20Tanabe%201.png',
  './assets/files/Shin%20Osaka%20-%20Tokyo%201.pdf',
  './assets/files/Shin%20Osaka%20-%20Tokyo%202.pdf',
  './assets/files/Shingu-map.pdf',
  './assets/files/Tanabe-map.pdf',
  './assets/files/Tokyo%20-%20Kyoto%201.pdf',
  './assets/files/Tokyo%20-%20Kyoto%202.pdf',
  './assets/files/Yam_365assist.pdf',
  './assets/files/Yam_passport.png',
  './assets/files/Yunomine-Onsen-map.pdf',
  './assets/files/asakusa-sumo-club-receipt.pdf',
  './assets/files/chazuna-uji-receipt.pdf',
  './assets/files/ethiopian_details.pdf',
  './assets/files/ethiopian_receipt_melu.pdf',
  './assets/files/ethiopian_receipt_yamil.pdf',
  './assets/files/kk_boat_tour.jpg',
  './assets/files/kk_bond_bento.jpg',
  './assets/files/kk_chikatsuyu.jpg',
  './assets/files/kk_kamenoi.jpg',
  './assets/files/kk_takahara_lodge.jpg',
  './assets/files/kk_takiyoshi.jpg',
  './assets/files/nakahechi-map.pdf',
  './assets/files/nikko_map_full.gif',
  './assets/files/nikko_map_town.gif',
  './assets/files/nikko_tobu_bus.jpg',
  './assets/files/nikko_transport_map.gif',
  './assets/files/osaka_blutheon_receipt.pdf',
];

// Pre-cache everything on install, then take over immediately
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// Delete old caches and claim all open tabs on activation
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

// Cache-first: serve from cache, fall back to network; skip cross-origin requests
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const toCache = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, toCache));
        return response;
      });
    })
  );
});
