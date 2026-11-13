/* meet.js — معرض أوضاع الشخصية */
(()=>{const imgs=[...document.querySelectorAll('#ms img')],th=[...document.querySelectorAll('#mh button')];let i=0,tm;
const sh=k=>{i=k;imgs.forEach((e,j)=>e.classList.toggle('on',j===k));th.forEach((e,j)=>e.classList.toggle('on',j===k));$('#mc').textContent=th[k].dataset.t;$('#mp').textContent=th[k].dataset.p};
const go=()=>{clearInterval(tm);tm=setInterval(()=>sh((i+1)%th.length),4200)};th.forEach((b,k)=>b.onclick=()=>{sh(k);go()});go()})();
