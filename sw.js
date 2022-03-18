self.addEventListener('install', function(event) {
  console.log('[Service Worker] Installing Service Worker ...', event);
});

self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activating Service Worker ...', event);
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  console.log('[Service Worker] Fetching something ....', event);
  event.respondWith(fetch(event.request));
});


//CACHE geprobeerd maar werkt niet
// var statischeCache = 'mijnPWAcache';
// var bestandenNaarCache = [
//     '/',
//     '/index.html',
//     '/js/app.js',
//     '/css/style.css',
    
// ];

// self.addEventListener('install', function(event){
//     event.waitUntil(
//         caches.open(statischeCache)
//         .them(function(cache){
//         console.log("Precaching van PWA Appshell")
//         cache.addAll(bestandenNaarCache);
//         })
//     )
// });

// self.addEventListener('active', function(event) {
//     var dezeCacheBewaren = [statischeCache];

//     event.waitUntil (
//         caches.keys().then(
//             function(cacheNamen){
//                 return Promise.all(
//                     cacheNamen.map(function(cacheNaam){
//                         if(dezeCacheBewaren.indexOf(cacheNaam) === -1){
//                             return caches.delete(cacheNaam);
//                         }
//                     })
//                 );
//             })
//     );
// });

// self.addEventListener('fetch', function(event) {
//     event.respondWith(
//         caches.match(event.request)
//         .then(function(response){
//             if(response){
//                 return response;
//             } else {
//                 return fetch(event.request);
//             }
//       })
//     );       
// });
