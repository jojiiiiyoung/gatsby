self.addEventListener("install", e => {
  console.info("Service Worker Installed")
})

// self.addEventListener("fetch", e => {
//   console.info(e.request.url)
//   e.respondWith(
//     caches.match(e.request).then(response => response || fetch(e.request))
//   )
// })
