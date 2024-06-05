// sw.js

const CACHE_NAME = 'careover-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/blog.css',
  '/css/footer.css',
  '/css/style.css',
  '/css/navbar.css',
  '/script/blogs.js',
  '/script/navbar.js',
  '/script/script.js',
  '/script/service-worker.js',
  '/script/streak.js',
    '/blogs.html',
  '/img/logo.png',
  '/img/bluenavtitle.png',
  '/img/cleanfooter.png',
  '/img/banner/1.png',
  '/img/banner/2.png',
  '/img/banner/3.png',
  '/img/banner/4.png',
  '/blogs/Guide-to-Better-Sleep.html',
  '/blogs/The-Vital-Role-of-Telemedicine-in-Modern-Healthcare.html',
  '/blogs/The-Power-of-Mindfulness.html',
'/img/shots/shot1.png',
'/img/shots/shot2.png',
'/img/shots/shot8.png',
'/img/shots/shot9.png',
'/img/shots/shot11.png',
'/img/shots/shot12.png',

];

// Install a service worker
self.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Cache and return requests
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request).then(
          response => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
  );
});

// Update a service worker
self.addEventListener('activate', event => {
  var cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Push Notification
self.addEventListener('push', event => {
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: 'img/logo.png',
    badge: 'img/logo.png'
  };
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Background Sync
self.addEventListener('sync', event => {
  if (event.tag === 'sync-careover-data') {
    event.waitUntil(syncData());
  }
});

async function syncData() {
  // Perform background sync tasks here
  console.log('Background sync in progress...');
  // Add your background sync code here
}
