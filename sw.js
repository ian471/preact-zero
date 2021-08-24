self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).then(
      response => caches.open('preact-zero')
        .then(cache => e.request.method === 'GET' && cache.put(e.request, response.clone()))
        .then(() => response),
      err => caches.match(e.request) || err
    )
  )
})
