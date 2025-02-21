/* eslint-disable no-restricted-globals */

// Precache all the assets generated during the build
self.addEventListener("install", (event) => {
  self.skipWaiting(); // Skip waiting and activate immediately

  event.waitUntil(
    caches.open("my-cache").then((cache) => {
      // The generated assets will be automatically injected here by Workbox
      return cache.addAll([
        "/",
        "/index.html",
        "/favicon.ico",
        ...self.__WB_MANIFEST, // Automatically includes hashed files like main.chunk.js
      ]);
    })
  );
});

// Fetch event: Serve cached assets if available
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // Return cached response if available
      }
      return fetch(event.request); // Otherwise, fetch from network
    })
  );
});
