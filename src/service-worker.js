/* eslint-disable no-restricted-globals */
// self refers to the global scope of the Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("my-cache").then((cache) => {
      // Cache essential files for offline use
      return cache.addAll([
        "/",
        "/index.html",
        "/bundle.js",
        "/styles.css", // Your stylesheets or other assets
        ...self.__WB_MANIFEST,
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  // Intercept network requests and serve from cache if available
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // Return cached file
      }

      // If the request isn't in cache, fetch it from the network
      return fetch(event.request);
    })
  );
});
