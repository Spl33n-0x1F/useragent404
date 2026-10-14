/* shared: theme toggle, active nav highlight, hero typer */
(function(){
  "use strict";
  var root=document.documentElement;

  // theme (per-viewer convenience)
  try{var s=localStorage.getItem('ua404-theme');if(s)root.setAttribute('data-theme',s);}catch(e){}
  var tb=document.getElementById('theme');
  if(tb)tb.addEventListener('click',function(){
    var cur=root.getAttribute('data-theme');
    var dark=cur?cur==='dark':!matchMedia('(prefers-color-scheme: light)').matches;
    var next=dark?'light':'dark';root.setAttribute('data-theme',next);
    try{localStorage.setItem('ua404-theme',next);}catch(e){}
  });

  // active nav based on current file
  var page=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  if(page==='')page='index.html';
  document.querySelectorAll('[data-nav]').forEach(function(a){
    if(a.dataset.nav===page)a.classList.add('on');
  });
  var brand=document.querySelector('.brand');
  if(brand&&(page==='index.html'))brand.classList.add('on');

  // hero typer (only where a .tagline[data-type] exists)
  var tl=document.querySelector('.tagline[data-type]');
  if(tl){
    var full=tl.getAttribute('data-type'),i=0;
    var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
    tl.innerHTML='<span class="txt"></span><span class="cur">_</span>';
    var txt=tl.querySelector('.txt');
    if(reduce){txt.textContent=full;}
    else{(function tick(){if(i<=full.length){txt.textContent=full.slice(0,i++);setTimeout(tick,26);}})();}
  }
})();
