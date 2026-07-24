
(function(){
  var timer;
  function updateV8Date(){
    var el=document.getElementById('v8CurrentDate');
    if(!el)return;
    var now=new Date();
    var text=new Intl.DateTimeFormat('pt-PT',{weekday:'long',day:'numeric',month:'long',year:'numeric'}).format(now);
    el.textContent=text.charAt(0).toUpperCase()+text.slice(1);
    clearTimeout(timer);
    var next=new Date(now.getFullYear(),now.getMonth(),now.getDate()+1,0,0,2);
    timer=setTimeout(updateV8Date,Math.max(1000,next-now));
  }
  updateV8Date();
  window.addEventListener('focus',updateV8Date);
  document.addEventListener('visibilitychange',function(){if(!document.hidden)updateV8Date();});
})();
