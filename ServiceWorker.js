self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('ffxtracker-static').then(function(cache) {
      return cache.addAll([
        './index.html',
        './favicon.png',
        'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css',
        './style.css',
        './img/Rikku_Avatar.webp',
        './img/Lulu_Avatar.webp',
        './img/Auron_Avatar.webp',
        './img/Kimahri_Avatar.webp',
        './img/Wakka_Avatar.webp',
        './img/Tidus_Avatar.webp',
        './img/Yuna_Avatar.webp'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    // Try cache
    caches.match(event.request).then(function(response) {
      // Fallback to network
      return response || fetch(event.request);
    }).catch(function() {
      return caches.match('./index.html');
    })
  );
});
