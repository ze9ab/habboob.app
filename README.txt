موقع حَبّوب — كل صفحة ملف HTML لوحده، ولها ملف CSS لوحده، والسكريبتات والصور في فولدراتها.

الصفحات (HTML):
  index.html (الرئيسية)  app.html (التطبيق)  app-<ميزة>.html (9 صفحات للمميزات)
  try.html (جرّب)  meet.html (قابل حَبّوب)  why.html (ليه حَبّوب)  faq.html (أسئلة)
  contact.html (تواصل)  privacy.html (سياسة الخصوصية — ده لينك Google Play)

css/   base.css = الأساسي المشترك، وكل صفحة لها ملف: home, try, meet, faq, contact, privacy, feature
js/    main.js (مشترك) · config.js (إعداداتك) · data.js (أذكار) · pages.js (قايمة البحث) · home/try/meet/contact.js · embers.js · lit.js
assets/img/  الصور والشخصية والأيقونة   |   assets/favicon.png

التعديل:
  js/config.js    روابط التواصل ولينك Google Play (الفاضي بيختفي)
  js/data.js      أذكار "ذكر اليوم"
  *.html          النصوص مكتوبة مباشرة في كل صفحة

الاستضافة: ارفع الفولدر كله زي ما هو على أي استضافة ثابتة (GitHub Pages أو Netlify أو Firebase Hosting).
للتجربة المحلية يفضّل تشغيله بسيرفر بسيط (python -m http.server) عشان النقش واللوجو يظهروا صح.
