self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open('v1').then(function(cache){
            return cache.addAll([
                './bundle.js',
                './index.html'
            ])
        })
    )
})


self.addEventListener('fetch', function(event){
    event.respondWith(
        fetch(event.request).then(function(response){
            if (!response.ok){
                throw ('response not available');
            }
            else{
                let responseClone = response.clone();
                caches.open('v1').then(function(cache){
                    cache.put(event.request, responseClone);
                })
            }
            return response;
        }).catch(function(err){
            console.log(err);
            return caches.match(event.request).then(function(resp){
                return resp;
            });
        })
    )
})
