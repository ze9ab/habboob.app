/* try.js — السبحة التفاعلية وعدّاد الصلاة التجريبي */
(()=>{const PH=['سبحان الله','الحمد لله','الله أكبر'];let n=0;try{n=+localStorage.tsb||0}catch(e){}
const rn=()=>{const k=n%99,dn=n>0&&k===0,ix=dn?2:Math.floor(k/33),c=dn?33:k%33;$('#tsT').textContent=PH[ix];$('#tsC').textContent=c;$('#tsR').style.setProperty('--p',c/33*100);$('#tsS').textContent='المجموع '+n;$('#tsM').hidden=!dn};rn();
$('#tsB').onclick=()=>{n++;try{localStorage.tsb=n}catch(e){}rn();navigator.vibrate&&navigator.vibrate(12);const b=$('#tsB');b.classList.add('pp');setTimeout(()=>b.classList.remove('pp'),110)};
$('#tsX').onclick=()=>{n=0;try{localStorage.tsb=0}catch(e){}rn()}})();
let sec=2*3600+14*60+9;(function rg(){const p=n=>String(n).padStart(2,'0');$('#cd').textContent=`${p(sec/3600|0)}:${p(sec/60%60|0)}:${p(sec%60)}`;$('#rg').style.setProperty('--p',100-sec/(3*3600)*100);sec=sec<=0?3*3600:sec-1;setTimeout(rg,1000)})();
