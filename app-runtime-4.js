
window.addEventListener('load',function(){
  var splash=document.getElementById('sfSplash');
  if(!splash) return;
  setTimeout(function(){
    splash.classList.add('is-leaving');
    setTimeout(function(){splash.remove();},220);
  },1800);
});
