export function registerServiceWorker(){
    if ('serviceWorker' in navigator){
        navigator.serviceWorker.register('./service-worker.js').
            then(function(reg){
                console.log('success ' + reg.scope);
            }).catch(function(error){
                console.log('failed ' + error);
            })
    }
}
