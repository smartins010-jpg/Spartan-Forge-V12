
(function(){
  if (!('serviceWorker' in navigator)) return;

  var reloadingForUpdate = false;

  function activateWaitingWorker(registration){
    if (registration && registration.waiting) {
      registration.waiting.postMessage({type:'SKIP_WAITING'});
    }
  }

  window.addEventListener('load', function(){
    navigator.serviceWorker.register('./service-worker.js?v=160000', {
      scope: './',
      updateViaCache: 'none'
    }).then(function(registration){
      registration.update().catch(function(){});
      activateWaitingWorker(registration);

      registration.addEventListener('updatefound', function(){
        var worker = registration.installing;
        if (!worker) return;
        worker.addEventListener('statechange', function(){
          if (worker.state === 'installed' && navigator.serviceWorker.controller) {
            activateWaitingWorker(registration);
          }
        });
      });

      document.addEventListener('visibilitychange', function(){
        if (!document.hidden) registration.update().catch(function(){});
      });

      window.addEventListener('focus', function(){
        registration.update().catch(function(){});
      });

      setInterval(function(){
        registration.update().catch(function(){});
      }, 60 * 60 * 1000);
    }).catch(function(){});
  });

  navigator.serviceWorker.addEventListener('controllerchange', function(){
    if (reloadingForUpdate) return;
    reloadingForUpdate = true;
    window.location.reload();
  });
})();
