/* home.js — الرئيسية: الكلمة المتبدلة، التاريخ الهجري، ذكر اليوم */
const W=['كل صلاة','كل ذكر','كل ختمة','كل يوم'];let wi=0;setInterval(()=>{wi=(wi+1)%W.length;const r=$('#rw');r.textContent=W[wi];r.style.animation='none';r.offsetWidth;r.style.animation=''},2600);
try{$('#hj').textContent='النهاردة '+new Intl.DateTimeFormat('ar-EG-u-ca-islamic-umalqura',{day:'numeric',month:'long',year:'numeric'}).format(new Date())}catch(e){$('#hj').textContent='السلام عليكم ورحمة الله'}
$('#td').innerHTML=`<span class="ib" style="margin:0 auto 14px">${ic('beads')}</span><small style="color:var(--g);font-weight:600">ذكر اليوم</small><p class="tq">${AZ[Math.floor(Date.now()/864e5)%AZ.length]}</p><a class="btn o sm" href="try.html">جرّب السبحة${ic('ar','ar')}</a>`;
