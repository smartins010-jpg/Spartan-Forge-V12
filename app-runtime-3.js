
(function(){
  function applyDalek(){
    document.querySelectorAll('button').forEach(function(el){
      var t=(el.textContent||'').trim().toLowerCase();
      if(t.indexOf('guardar')===0){el.classList.add('v842-dalek-action');}
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',applyDalek);
  else applyDalek();
  new MutationObserver(applyDalek).observe(document.documentElement,{childList:true,subtree:true});
})();
