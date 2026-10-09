(function(){
  "use strict";
  var d=document;
  var yr=d.getElementById('yr'); if(yr) yr.textContent=new Date().getFullYear();

  // mobile nav
  var burger=d.getElementById('burger'), nav=d.getElementById('nav'), bd=d.getElementById('navBackdrop');
  function closeNav(){ if(!nav) return; nav.classList.remove('open'); if(bd) bd.classList.remove('open'); d.body.style.overflow=''; if(burger){burger.setAttribute('aria-expanded','false');burger.setAttribute('aria-label','Ouvrir le menu');} }
  if(burger&&nav){
    burger.addEventListener('click',function(){
      var o=nav.classList.toggle('open');
      if(bd) bd.classList.toggle('open',o);
      d.body.style.overflow=o?'hidden':'';
      burger.setAttribute('aria-expanded',o?'true':'false');
      burger.setAttribute('aria-label',o?'Fermer le menu':'Ouvrir le menu');
    });
    if(bd) bd.addEventListener('click',closeNav);
    nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',closeNav);});
  }

  // header scrolled state
  var hdr=d.getElementById('hdr');
  if(hdr){ var onScroll=function(){hdr.classList.toggle('scrolled',window.scrollY>24);}; onScroll(); window.addEventListener('scroll',onScroll,{passive:true}); }

  // smooth anchor scroll (same-page anchors only)
  d.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click',function(e){
      var id=a.getAttribute('href'); if(id.length<2) return;
      var t=d.querySelector(id); if(!t) return;
      e.preventDefault();
      var y=t.getBoundingClientRect().top+window.scrollY-64;
      window.scrollTo({top:y,behavior:'smooth'});
    });
  });

  // highlight today's hours + hero chip
  var row=d.querySelector('#hrsTable tr[data-d="'+new Date().getDay()+'"]');
  if(row){ row.classList.add('today'); var chip=d.getElementById('todayHrs'); if(chip&&row.children[1]) chip.textContent=row.children[1].textContent; }

  // copy phone
  var cp=d.getElementById('copyPhone'), ph=d.getElementById('phone');
  if(cp&&ph){cp.addEventListener('click',function(){
    var txt=ph.textContent.trim();
    function done(){var o=cp.textContent;cp.textContent='Copié ✓';setTimeout(function(){cp.textContent=o;},1600);}
    function select(){var r=d.createRange();r.selectNodeContents(ph);var s=window.getSelection();s.removeAllRanges();s.addRange(r);done();}
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(txt).then(done).catch(select);} else select();
  });}

  // book button -> scroll to contact section if present, else go to contact page
  var bb=d.getElementById('bookBtn');
  if(bb){bb.addEventListener('click',function(e){
    var c=d.getElementById('contact');
    if(c){e.preventDefault();var y=c.getBoundingClientRect().top+window.scrollY-64;window.scrollTo({top:y,behavior:'smooth'});}
  });}

  // lightbox (only if gallery present)
  var gal=d.getElementById('gal'), lb=d.getElementById('lb'), lbimg=d.getElementById('lbimg'), lbx=d.getElementById('lbx');
  if(gal&&lb&&lbimg){
    gal.addEventListener('click',function(e){
      var b=e.target.closest('button[data-full]'); if(!b) return;
      lbimg.src=b.getAttribute('data-full'); var im=b.querySelector('img'); lbimg.alt=im?im.alt:'';
      lb.classList.add('open'); lb.setAttribute('aria-hidden','false');
    });
    var closeLb=function(){lb.classList.remove('open');lb.setAttribute('aria-hidden','true');lbimg.src='';};
    lb.addEventListener('click',function(e){if(e.target===lb||e.target===lbx)closeLb();});
    d.addEventListener('keydown',function(e){if(e.key==='Escape')closeLb();});
  }

  // reveal on scroll
  var rv=[].slice.call(d.querySelectorAll('.rv'));
  if('IntersectionObserver' in window && matchMedia('(prefers-reduced-motion: no-preference)').matches){
    var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}});},{threshold:.12,rootMargin:'0px 0px -8% 0px'});
    rv.forEach(function(el){io.observe(el);});
    setTimeout(function(){rv.forEach(function(el){if(el.getBoundingClientRect().top<window.innerHeight)el.classList.add('in');});},250);
  } else { rv.forEach(function(el){el.classList.add('in');}); }
})();
