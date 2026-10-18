# PixelTeam — موقع الفريق

موقع **PixelTeam** بأسلوب بكسل: الصفحة الرئيسية، قائمة المشاريع، وصفحة كاملة لكل مشروع (صور + وصف + مواصفات + تحميل).

هذه نسخة **ثابتة (Static)** من الموقع تُخدَّم مباشرة عبر **GitHub Pages** بدون خادم — البيانات تُقرأ من ملفات JSON داخل `api/`.

🔗 الموقع: https://mahrouzmohamed89-wq.github.io

© 2026 **PixelTeam** — جميع الحقوق محفوظة.

## تحديث v2 — PixelApp 2.0.0

الإصدار **2.0.0** من PixelApp تحديث كبير يشمل:

- إشعارات داخلية مع مركز إشعارات وشارة غير المقروء لكل حدث.
- بطاقة «يُشغّل الآن» تعرض اللعبة التي تعمل مع مؤقّت الجلسة.
- المجموعات (Collections) ورفّ «اكتشف» لتنظيم المكتبة.
- موسيقى محيطة تُولَّد داخل التطبيق بلا ملفات صوتية.
- ثيمان جديدان: **زجاج** و**قرمزي** — ليصبح المجموع 8 ثيمات.
- إعادة تصميم كاملة لقسم الإعدادات وصفحة معلومات اللعبة.
- أوفرلاي الأداء PixelHUD (FPS / حرارة / معالج / كرت الشاشة).
- الأوسمة ومعاينة الفيديو وتتبّع وقت اللعب مع صفحة الإحصائيات.

المثبّت: [PixelApp-Setup-2.0.0.exe](https://github.com/mahrouzmohamed89-wq/pixelapp/releases/download/v2.0.0/PixelApp-Setup-2.0.0.exe)

## الصفحات

| المسار | الوصف |
| --- | --- |
| `/` | الرئيسية: الفريق + المشاريع المميزة + الدعم |
| `/projects/` | قائمة كل المشاريع |
| `/projects/pixelapp/` | صفحة PixelApp: الصور، الوصف، الميزات، المتطلبات، التحميل |

## بنية المشروع

```
.
├─ index.html               الرئيسية (عربي/إنجليزي)
├─ projects.html            قائمة المشاريع
├─ project.html             قالب صفحة المشروع
├─ 404.html
├─ projects/
│  └─ pixelapp/index.html   صفحة PixelApp (البيانات مضمّنة داخلها)
├─ api/
│  ├─ projects.json         كتالوج المشاريع
│  ├─ projects/pixelapp.json بيانات PixelApp الكاملة
│  ├─ latest.json           أحدث إصدار: الرقم والحجم وبصمة SHA-256 ورابط التحميل
│  └─ stats.json            عدّاد التحميلات
├─ css/style.css            التنسيق البكسلي
├─ js/main.js               الترجمة + البطاقات + صفحة المشروع + المعرض
├─ img/                      الشعار والصور + img/app لقطات التطبيق
├─ scripts/
│  └─ sync-project-data.mjs  تضمين بيانات المشروع في صفحته
└─ vendor/nes.css           مكتبة التصميم البكسلي (NES.css)
```

## تحديث إصدار PixelApp

1. ارفع المثبّت الجديد كإصدار (Release) في ريبو **[pixelapp](https://github.com/mahrouzmohamed89-wq/pixelapp)**.
2. حدّث ملفات البيانات:
   - `api/latest.json` (الرقم، الحجم، بصمة SHA-256، `url` و`download`).
   - `api/projects.json` (حقل `version`).
   - `api/projects/pixelapp.json` (البيانات الكاملة + رابط التحميل + الميزات + المواصفات).
3. أعد تضمين بيانات المشروع داخل `projects/pixelapp/index.html`:

   ```bash
   node scripts/sync-project-data.mjs
   ```

   يأخذ قيمة `project` من `api/projects/pixelapp.json` ويضعها داخل وسم
   `<script id="project-data" type="application/json">…</script>` في صفحة المشروع.

## النشر

الموقع ثابت بالكامل — أي دفعة (push) إلى الفرع `main` تُنشر تلقائيًا عبر **GitHub Pages**.

---

PixelApp غير تابع لـ Sony أو Microsoft أو Valve. جميع الأسماء التجارية مملوكة لأصحابها.
