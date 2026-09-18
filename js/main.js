/* PixelTeam website - shared UI logic, bilingual copy and page renderers. */
(function () {
  'use strict'

  var I18N = {
    ar: {
      '_title.home': 'PixelTeam - نصنع تطبيقات كاملة',
      '_desc.home':
        'PixelTeam فريق تطوير تطبيقات. نبني منتجاتنا من الفكرة إلى الإصدار، ومنها PixelApp مشغّل الألعاب لويندوز.',
      '_title.projects': 'المشاريع - PixelTeam',
      '_desc.projects': 'كل مشاريع PixelTeam: تطبيقات ويندوز كاملة مع الصور والوصف والتحميل.',
      'nav.home': 'الرئيسية',
      'nav.projects': 'المشاريع',
      'nav.about': 'عن الفريق',
      'nav.cta': 'استعرض المشاريع',
      'nav.menu': 'القائمة',
      'nav.skip': 'تخطَّ إلى المحتوى',
      'home.badge': 'فريق تطوير برمجيات',
      'home.tagline': 'من الفكرة إلى الإصدار.',
      'home.sub':
        'نبني تطبيقات سطح مكتب كاملة — تصميم، برمجة، وواجهات عربية. كل مشروع ننشره تجده موثّقًا بالصور ووصف كامل وزر تحميل مباشر.',
      'home.aboutCta': 'تعرّف علينا',
      'home.metaProjects': 'مشروع منشور',
      'home.metaPlatform': 'لويندوز 10/11',
      'home.stat.projects': 'مشروع منشور',
      'home.stat.themes': 'ثيمات بصرية',
      'home.stat.langs': 'لغات واجهة',
      'home.stat.local': 'بيانات محلية',
      'home.projectsTitle': 'مشاريعنا',
      'home.projectsLead': 'كل مشروع له صفحة كاملة بالصور والوصف والمواصفات والتحميل.',
      'home.allProjects': 'كل المشاريع',
      'home.ctaTitle': 'جاهز تجرّب مشاريعنا؟',
      'home.ctaSub': 'اختر مشروعًا من القائمة، شاهد صوره ووصفه، وحمّله مباشرة.',
      'about.title': 'عن PixelTeam',
      'about.lead': 'فريق صغير يهتم بالتفاصيل: منتجات تعمل بسلاسة، بواجهة عربية أنيقة، وبخصوصية كاملة.',
      'about.quality.title': 'جودة قبل السرعة',
      'about.quality.body':
        'نختبر كل إصدار على أجهزة حقيقية قبل النشر، ونعتمد معايير ثابتة للتصميم والكود.',
      'about.perf.title': 'أداء خفيف',
      'about.perf.body': 'تطبيقات سريعة تفتح فورًا، تستهلك موارد أقل، وتعمل حتى بدون اتصال بالإنترنت.',
      'about.privacy.title': 'خصوصية بالكامل',
      'about.privacy.body':
        'لا نجمع بياناتك ولا نرفعها. كل شيء يبقى على جهازك، وهذا مبدأ ثابت في كل مشاريعنا.',
      'about.arabic.title': 'عربي أولًا',
      'about.arabic.body':
        'واجهات تدعم العربية و RTL بشكل أصلي، مع إمكانية التبديل للإنجليزية والفرنسية والإسبانية.',
      'projects.title': 'المشاريع',
      'projects.lead': 'اختر مشروعًا لعرض الصور والوصف الكامل والمواصفات ثم التحميل.',
      'projects.countLabel': 'مشروع',
      'projects.empty': 'لا توجد مشاريع منشورة بعد.',
      'projects.search': 'ابحث في المشاريع…',
      'projects.all': 'الكل',
      'projects.sort': 'ترتيب',
      'projects.sortFeatured': 'المميّزة أولاً',
      'projects.sortNewest': 'الأحدث',
      'projects.sortName': 'الاسم',
      'projects.viewGrid': 'شبكة',
      'projects.viewList': 'قائمة',
      'projects.none': 'لا يوجد مشروع يطابق البحث.',
      'projects.clear': 'مسح الفلاتر',
      'project.open': 'عرض المشروع',
      'project.download': 'تحميل',
      'project.soon': 'قيد التطوير — سيكون متاحًا للتحميل قريبًا.',
      'project.back': 'الرجوع إلى المشاريع',
      'project.overview': 'نظرة عامة',
      'project.features': 'أبرز الميزات',
      'project.gallery': 'الصور',
      'project.galleryLead': 'اضغط أي صورة لتكبيرها.',
      'project.requirements': 'المتطلبات',
      'project.notFound': 'لم نجد هذا المشروع.',
      'project.featured': 'مميّز',
      'project.share': 'نسخ الرابط',
      'project.copied': 'تم نسخ الرابط',
      'project.others': 'مشاريع أخرى',
      'project.released': 'تاريخ الإصدار',
      'project.platforms': 'المنصات',
      'download.version': 'الإصدار',
      'download.size': 'الحجم',
      'download.downloads': 'مرات التحميل',
      'download.sha': 'بصمة SHA-256',
      'common.loading': 'جارٍ التحميل…',
      'common.error': 'تعذّر تحميل البيانات. حدّث الصفحة.',
      'common.top': 'للأعلى',
      'common.prev': 'السابق',
      'common.next': 'التالي',
      'common.close': 'إغلاق',
      'ticker.1': 'تطبيقات ويندوز كاملة',
      'ticker.2': 'واجهات عربية أصلية',
      'ticker.3': 'بيانات محلية 100%',
      'ticker.4': 'دعم يد التحكم',
      'ticker.5': 'تصميم بكسل',
      'ticker.6': 'تحديثات مستمرة',
      'footer.about':
        'استوديو صغير يبني تطبيقات كاملة — من الفكرة والتصميم إلى الإصدار، بواجهات عربية أصلية.',
      'footer.latest': 'أحدث إصدار',
      'footer.language': 'اللغة',
      'footer.status': 'الخدمة تعمل',
      'footer.downloads': 'تحميل',
      'footer.explore': 'استكشف',
      'footer.product': 'المنتج',
      'footer.pixelapp': 'PixelApp',
      'footer.download': 'التحميل',
      'footer.features': 'الميزات',
      'footer.stay': 'ابقَ على اطلاع',
      'footer.ctaText': 'أحدث مشاريعنا وإصداراتنا في مكان واحد.',
      'footer.made': 'صُنع بشغف — بكسل بكسل.',
      'footer.copy': '© 2026 PixelTeam. جميع الحقوق محفوظة.',
      'footer.note': 'جميع الأسماء التجارية والمحتوى المذكور في صفحات المشاريع مملوكة لأصحابها.',
      'footer.support': 'ادعمنا',
      'support.title': 'ادعم PixelTeam',
      'support.lead':
        'تطبيقاتنا مجانية دائمًا. إذا أعجبك عملنا، ادعمنا بأي وسيلة تناسبك — كل دعم يساعدنا على الاستمرار وإطلاق المزيد.',
      'support.methods': 'طرق الدعم المتاحة',
      'support.soon': 'قريبًا',
      'support.paypal.hint': 'تحويل آمن وسريع',
      'support.redot.hint': 'محفظة دولية سهلة',
      'support.binance.hint': 'عملات رقمية — USDT وغيرها',
      'support.wise.hint': 'تحويلات بنكية دولية',
      'support.perksTitle': 'مميزات الداعمين',
      'support.perksLead': 'تقدير بسيط لكل من يدعمنا',
      'support.perk.early': 'تحديثات مبكرة قبل الجميع — جرّب كل إصدار أول بأول.',
      'support.perk.voice': 'اقترح الميزات وصوّت على ما نطوّره بعد.',
      'support.perk.honor': 'اسمك في قائمة الداعمين هنا في الموقع.',
      'support.perk.support': 'تواصل مباشر لملاحظاتك واقتراحاتك.'
    },
    en: {
      '_title.home': 'PixelTeam - We build complete apps',
      '_desc.home':
        'PixelTeam is an app studio. We take products from idea to release, including PixelApp the Windows game launcher.',
      '_title.projects': 'Projects - PixelTeam',
      '_desc.projects': 'Every PixelTeam project: complete Windows apps with images, description and download.',
      'nav.home': 'Home',
      'nav.projects': 'Projects',
      'nav.about': 'About',
      'nav.cta': 'Browse projects',
      'nav.menu': 'Menu',
      'nav.skip': 'Skip to content',
      'home.badge': 'Software studio',
      'home.tagline': 'From idea to release.',
      'home.sub':
        'We build complete desktop apps - design, engineering and Arabic-first interfaces. Every release ships with images, a full description and a direct download.',
      'home.aboutCta': 'Meet the team',
      'home.metaProjects': 'published projects',
      'home.metaPlatform': 'for Windows 10/11',
      'home.stat.projects': 'published projects',
      'home.stat.themes': 'visual themes',
      'home.stat.langs': 'interface languages',
      'home.stat.local': 'local data',
      'home.projectsTitle': 'Our projects',
      'home.projectsLead': 'Every project has a full page with images, description, specs and download.',
      'home.allProjects': 'All projects',
      'home.ctaTitle': 'Ready to try our work?',
      'home.ctaSub': 'Pick a project, look through its images and description, then download it.',
      'about.title': 'About PixelTeam',
      'about.lead':
        'A small team obsessed with details: smooth products, polished Arabic interfaces and total privacy.',
      'about.quality.title': 'Quality over speed',
      'about.quality.body':
        'Every release is tested on real machines before shipping, against fixed design and code standards.',
      'about.perf.title': 'Lightweight',
      'about.perf.body': 'Fast apps that open instantly, use fewer resources and keep working offline.',
      'about.privacy.title': 'Fully private',
      'about.privacy.body':
        'We never collect or upload your data. Everything stays on your PC across all our projects.',
      'about.arabic.title': 'Arabic first',
      'about.arabic.body':
        'Native Arabic and RTL interfaces, with English, French and Spanish a click away.',
      'projects.title': 'Projects',
      'projects.lead': 'Pick a project to see its images, full description, specs and download.',
      'projects.countLabel': 'projects',
      'projects.empty': 'No projects published yet.',
      'projects.search': 'Search projects…',
      'projects.all': 'All',
      'projects.sort': 'Sort',
      'projects.sortFeatured': 'Featured first',
      'projects.sortNewest': 'Newest',
      'projects.sortName': 'Name',
      'projects.viewGrid': 'Grid',
      'projects.viewList': 'List',
      'projects.none': 'No project matches your search.',
      'projects.clear': 'Clear filters',
      'project.open': 'Open project',
      'project.download': 'Download',
      'project.soon': 'In development - available for download soon.',
      'project.back': 'Back to projects',
      'project.overview': 'Overview',
      'project.features': 'Highlights',
      'project.gallery': 'Images',
      'project.galleryLead': 'Click any image to enlarge it.',
      'project.requirements': 'Requirements',
      'project.notFound': 'We could not find that project.',
      'project.featured': 'Featured',
      'project.share': 'Copy link',
      'project.copied': 'Link copied',
      'project.others': 'More projects',
      'project.released': 'Released',
      'project.platforms': 'Platforms',
      'download.version': 'Version',
      'download.size': 'Size',
      'download.downloads': 'Downloads',
      'download.sha': 'SHA-256 checksum',
      'common.loading': 'Loading…',
      'common.error': 'Could not load the data. Please refresh.',
      'common.top': 'Back to top',
      'common.prev': 'Previous',
      'common.next': 'Next',
      'common.close': 'Close',
      'ticker.1': 'Complete Windows apps',
      'ticker.2': 'Native Arabic UI',
      'ticker.3': '100% local data',
      'ticker.4': 'Gamepad support',
      'ticker.5': 'Pixel design',
      'ticker.6': 'Regular updates',
      'footer.about':
        'A small studio building complete apps - from idea and design to release, with Arabic-first interfaces.',
      'footer.latest': 'Latest release',
      'footer.language': 'Language',
      'footer.status': 'All systems operational',
      'footer.downloads': 'downloads',
      'footer.explore': 'Explore',
      'footer.product': 'Product',
      'footer.pixelapp': 'PixelApp',
      'footer.download': 'Download',
      'footer.features': 'Features',
      'footer.stay': 'Stay in the loop',
      'footer.ctaText': 'Our latest projects and releases in one place.',
      'footer.made': 'Made with care - pixel by pixel.',
      'footer.copy': '© 2026 PixelTeam. All rights reserved.',
      'footer.note': 'All trademarks and content referenced on project pages belong to their owners.',
      'footer.support': 'Support us',
      'support.title': 'Support PixelTeam',
      'support.lead':
        'Our apps are always free. If you enjoy our work, support us through any method that suits you - every bit helps us keep going and ship more.',
      'support.methods': 'Ways to support',
      'support.soon': 'Soon',
      'support.paypal.hint': 'Fast and secure transfer',
      'support.redot.hint': 'Easy global wallet',
      'support.binance.hint': 'Crypto - USDT & more',
      'support.wise.hint': 'International bank transfers',
      'support.perksTitle': 'Supporter perks',
      'support.perksLead': 'A small thank-you for every supporter',
      'support.perk.early': 'Early access to updates before everyone else.',
      'support.perk.voice': 'Suggest features and vote on what we build next.',
      'support.perk.honor': 'Your name in the supporters list right here on the site.',
      'support.perk.support': 'Direct line for your feedback and ideas.'
    }
  }

  var STORAGE_KEY = 'pixelapp.lang'
  var DEFAULT_LANG = 'ar'
  var lang = readLang()
  var currentProject = null
  var pageRefresh = null
  var footerPaint = null

  /* وسائل دعم PixelTeam - املأ روابط الدفع هنا لتفعيل كل بطاقة.
     أي قيمة فارغة تظهر البطاقة بحالة "قريبًا". */
  var SUPPORT_LINKS = {
    paypal: '',
    redot: '',
    binance: '',
    wise: ''
  }

  /* ------------------------------------------------------------------ */
  /* i18n                                                                */
  /* ------------------------------------------------------------------ */

  function readLang() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY)
      if (stored === 'ar' || stored === 'en') return stored
    } catch (error) {
      /* storage blocked */
    }
    return document.documentElement.lang === 'en' ? 'en' : DEFAULT_LANG
  }

  function t(key) {
    var dict = I18N[lang] || I18N[DEFAULT_LANG]
    return dict[key] != null ? dict[key] : I18N[DEFAULT_LANG][key] || key
  }

  /** Project content may be a plain string or an `{ ar, en }` object. */
  function localized(value) {
    if (value == null) return ''
    if (typeof value === 'string') return value
    return value[lang] || value[DEFAULT_LANG] || value.en || ''
  }

  function applyLang() {
    var isAr = lang === 'ar'
    document.documentElement.lang = lang
    document.documentElement.dir = isAr ? 'rtl' : 'ltr'

    document.querySelectorAll('[data-i18n]').forEach(function (node) {
      var value = t(node.getAttribute('data-i18n'))
      if (value) node.textContent = value
    })

    document.querySelectorAll('[data-i18n-aria]').forEach(function (node) {
      var value = t(node.getAttribute('data-i18n-aria'))
      if (value) node.setAttribute('aria-label', value)
    })

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (node) {
      var value = t(node.getAttribute('data-i18n-placeholder'))
      if (value) node.setAttribute('placeholder', value)
    })

    var toggle = document.getElementById('langToggle')
    if (toggle) toggle.textContent = isAr ? 'EN' : 'ع'

    document.querySelectorAll('.footer__lang').forEach(function (button) {
      button.classList.toggle('is-active', button.dataset.lang === lang)
    })

    refreshChrome()
    if (footerPaint) footerPaint()

    var page = document.body.dataset.page
    if (page === 'home' || page === 'projects') {
      document.title = t('_title.' + page)
      var meta = document.querySelector('meta[name="description"]')
      if (meta) meta.setAttribute('content', t('_desc.' + page))
    } else if (page === 'project' && currentProject) {
      applyProjectTitle(currentProject)
      renderProject(currentProject)
    }

    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch (error) {
      /* ignore */
    }
  }

  function onLangChange(callback) {
    lang = lang === 'ar' ? 'en' : 'ar'
    applyLang()
    if (callback) callback()
  }

  /* ------------------------------------------------------------------ */
  /* shared helpers                                                      */
  /* ------------------------------------------------------------------ */

  function formatSize(bytes) {
    if (!bytes) return '—'
    var mb = bytes / 1024 / 1024
    if (mb >= 1024) return (mb / 1024).toFixed(2) + ' GB'
    return mb.toFixed(1) + ' MB'
  }

  function shortHash(hash) {
    return hash ? hash.slice(0, 16) + '…' + hash.slice(-8) : '—'
  }

  function formatDate(value) {
    if (!value) return '—'
    var date = new Date(value)
    if (isNaN(date.getTime())) return value
    try {
      return new Intl.DateTimeFormat(lang === 'ar' ? 'ar' : 'en', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }).format(date)
    } catch (error) {
      return value
    }
  }

  function showToast(message) {
    var toast = document.getElementById('siteToast')
    if (!toast) {
      toast = el('div', 'toast pixel')
      toast.id = 'siteToast'
      toast.setAttribute('role', 'status')
      document.body.appendChild(toast)
    }
    toast.textContent = message
    toast.classList.add('is-visible')
    window.clearTimeout(showToast.timer)
    showToast.timer = window.setTimeout(function () {
      toast.classList.remove('is-visible')
    }, 2200)
  }

  function el(tag, className, text) {
    var node = document.createElement(tag)
    if (className) node.className = className
    if (text != null) node.textContent = text
    return node
  }

  function fill(node, key) {
    if (node) node.textContent = t(key)
  }

  function getJson(url) {
    return fetch(url).then(function (res) {
      if (!res.ok) throw new Error(url + ' -> ' + res.status)
      return res.json()
    })
  }

  /* ------------------------------------------------------------------ */
  /* motion, chrome and micro-interactions                               */
  /* ------------------------------------------------------------------ */

  var TICKER_KEYS = ['ticker.1', 'ticker.2', 'ticker.3', 'ticker.4', 'ticker.5', 'ticker.6']
  var REVEAL_SELECTOR = [
    '.section__title',
    '.section__lead',
    '.stat__num',
    '.card',
    '.cta-band__card',
    '.page-head > *',
    '.project-hero__media',
    '.project-hero__info > *',
    '.feature-list li',
    '.req--stack li',
    '.back-link',
    '.project-card',
    '.shot',
    '.support-card',
    '.perks',
    '.not-found > div'
  ].join(', ')

  var reducedMotion =
    typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  var revealObserver = null

  function ensureRevealObserver() {
    if (revealObserver) return revealObserver
    if (typeof IntersectionObserver !== 'function') return null
    revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return
          var node = entry.target
          if (node.classList.contains('stat__num')) countUp(node)
          node.classList.add('is-visible')
          revealObserver.unobserve(node)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.1 }
    )
    return revealObserver
  }

  /** Adds the `.reveal` hook (and a stagger delay) to freshly rendered content. */
  function tagReveals(scope) {
    var root = scope || document
    root.querySelectorAll(REVEAL_SELECTOR).forEach(function (node) {
      if (node.classList.contains('reveal')) return
      node.classList.add('reveal')
      var parent = node.parentElement
      var order = parent ? Array.prototype.indexOf.call(parent.children, node) : 0
      node.style.setProperty('--reveal-delay', Math.min(order, 5) * 70 + 'ms')
    })
  }

  function observeReveals(scope) {
    var root = scope || document
    var nodes = root.querySelectorAll('.reveal:not(.is-visible)')
    var observer = ensureRevealObserver()
    if (!observer || reducedMotion) {
      nodes.forEach(function (node) {
        if (node.classList.contains('stat__num')) countUp(node)
        node.classList.add('is-visible')
      })
      return
    }
    nodes.forEach(function (node) {
      observer.observe(node)
    })
  }

  /** Animate a number such as `6` or `100%` up to its final value. */
  function countUp(node) {
    if (!node || node.dataset.counted === '1') return
    var match = /^(\d+)(.*)$/.exec(node.textContent.trim())
    if (!match) return
    node.dataset.counted = '1'
    var target = Number(match[1])
    var suffix = match[2] || ''
    if (reducedMotion || !target || target > 9999) {
      node.textContent = String(target) + suffix
      return
    }
    var started = 0
    function frame(now) {
      if (!started) started = now
      var progress = Math.min(1, (now - started) / 900)
      var eased = 1 - Math.pow(1 - progress, 3)
      node.textContent = String(Math.round(target * eased)) + suffix
      if (progress < 1) requestAnimationFrame(frame)
    }
    requestAnimationFrame(frame)
  }

  function mountChrome() {
    if (!document.getElementById('scrollProgress')) {
      var bar = el('div', 'scroll-progress')
      bar.id = 'scrollProgress'
      bar.setAttribute('aria-hidden', 'true')
      document.body.appendChild(bar)
    }
    if (!document.getElementById('toTop')) {
      var top = el('button', 'to-top pixel')
      top.id = 'toTop'
      top.type = 'button'
      top.appendChild(el('span', 'to-top__label'))
      top.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
      })
      document.body.appendChild(top)
    }
  }

  function initScrollUI() {
    var bar = document.getElementById('scrollProgress')
    var top = document.getElementById('toTop')
    var queued = false

    function update() {
      queued = false
      var doc = document.documentElement
      var max = doc.scrollHeight - window.innerHeight
      var progress = max > 0 ? Math.min(1, window.scrollY / max) : 0
      if (bar) bar.style.transform = 'scaleX(' + progress.toFixed(4) + ')'
      if (top) top.classList.toggle('is-visible', window.scrollY > 600)
    }

    window.addEventListener(
      'scroll',
      function () {
        if (queued) return
        queued = true
        requestAnimationFrame(update)
      },
      { passive: true }
    )
    window.addEventListener('resize', update)
    update()

    document.querySelectorAll('.js-to-top').forEach(function (button) {
      button.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
      })
    })
  }

  function renderTicker() {
    var track = document.getElementById('tickerTrack')
    if (!track) return
    track.textContent = ''
    TICKER_KEYS.concat(TICKER_KEYS).forEach(function (key) {
      track.appendChild(el('span', 'ticker__item pixel', t(key)))
    })
  }

  function initNav() {
    var nav = document.querySelector('.nav')
    var toggle = document.getElementById('navToggle')
    if (!nav) return

    var links = Array.prototype.slice.call(nav.querySelectorAll('.nav__links a[data-nav]'))
    var about = document.getElementById('about')

    function setActive(key) {
      links.forEach(function (link) {
        var on = link.dataset.nav === key
        link.classList.toggle('is-active', on)
        if (on) link.setAttribute('aria-current', 'page')
        else link.removeAttribute('aria-current')
      })
    }

    var queued = false
    window.addEventListener(
      'scroll',
      function () {
        if (queued) return
        queued = true
        requestAnimationFrame(function () {
          queued = false
          nav.classList.toggle('is-scrolled', window.scrollY > 8)
          if (!about) return
          var top = about.getBoundingClientRect().top + window.scrollY - 160
          setActive(window.scrollY >= top ? 'about' : 'home')
        })
      },
      { passive: true }
    )
    if (window.scrollY > 8) nav.classList.add('is-scrolled')

    if (!toggle) return

    var backdrop = el('div', 'nav__backdrop')
    backdrop.setAttribute('aria-hidden', 'true')
    nav.appendChild(backdrop)

    function setOpen(open) {
      nav.classList.toggle('is-open', open)
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false')
      document.body.classList.toggle('has-menu', open)
      if (open) {
        var first = nav.querySelector('.nav__links a')
        if (first) first.focus()
      }
    }

    function close() {
      if (!nav.classList.contains('is-open')) return
      setOpen(false)
      toggle.focus()
    }

    toggle.addEventListener('click', function () {
      setOpen(!nav.classList.contains('is-open'))
    })
    nav.querySelectorAll('.nav__links a').forEach(function (link) {
      link.addEventListener('click', function () {
        setOpen(false)
      })
    })
    backdrop.addEventListener('click', close)
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') close()
    })
    window.addEventListener('resize', function () {
      if (window.innerWidth > 1024) setOpen(false)
    })
  }

  function renderSkeletons(containerId, count) {
    var container = document.getElementById(containerId)
    if (!container) return
    container.textContent = ''
    for (var index = 0; index < count; index++) {
      var card = el('div', 'skeleton-card')
      card.appendChild(el('div', 'skeleton-card__cover'))
      var body = el('div', 'skeleton-card__body')
      body.appendChild(el('div', 'skeleton-line skeleton-line--title'))
      body.appendChild(el('div', 'skeleton-line'))
      body.appendChild(el('div', 'skeleton-line skeleton-line--short'))
      card.appendChild(body)
      container.appendChild(card)
    }
  }

  /** Keeps chrome labels (to-top, lightbox, ticker) in the active language. */
  function refreshChrome() {
    var top = document.getElementById('toTop')
    if (top) {
      top.setAttribute('aria-label', t('common.top'))
      var label = top.querySelector('.to-top__label')
      if (label) label.textContent = t('common.top')
    }
    var toggle = document.getElementById('navToggle')
    if (toggle) toggle.setAttribute('aria-label', t('nav.menu'))
    var prev = document.getElementById('lightboxPrev')
    if (prev) prev.setAttribute('aria-label', t('common.prev'))
    var next = document.getElementById('lightboxNext')
    if (next) next.setAttribute('aria-label', t('common.next'))
    var close = document.getElementById('lightboxClose')
    if (close) close.setAttribute('aria-label', t('common.close'))
    var counter = document.getElementById('lightboxCounter')
    if (counter) counter.setAttribute('aria-label', t('project.gallery'))
    renderTicker()
  }

  /* ------------------------------------------------------------------ */
  /* project cards                                                       */
  /* ------------------------------------------------------------------ */

  function projectCard(project) {
    var card = el('a', 'project-card')
    card.href = '/projects/' + project.id
    card.style.setProperty('--card-accent', project.accent || '#e87ab9')

    var cover = el('div', 'project-card__cover')
    var image = el('img')
    image.src = project.cover || '/img/og.png'
    image.alt = localized(project.name)
    image.loading = 'lazy'
    cover.appendChild(image)
    cover.appendChild(el('span', 'project-card__view', t('project.open')))
    if (project.featured) {
      card.classList.add('project-card--featured')
      cover.appendChild(el('span', 'project-card__badge', t('project.featured')))
    }

    var body = el('div', 'project-card__body')

    var pills = el('div', 'pills')
    pills.appendChild(el('span', 'pill pill--category', localized(project.category)))
    pills.appendChild(el('span', 'pill pill--status', localized(project.status)))
    body.appendChild(pills)

    body.appendChild(el('h3', 'project-card__name', project.name))
    body.appendChild(el('p', 'project-card__tagline', localized(project.tagline)))

    var meta = el('div', 'project-card__meta')
    if (project.platforms && project.platforms.length) {
      meta.appendChild(el('span', 'project-card__metaItem', project.platforms[0]))
    }
    if (project.releasedAt) {
      meta.appendChild(el('span', 'project-card__metaItem', formatDate(project.releasedAt)))
    }
    if (project.version) {
      meta.appendChild(el('span', 'project-card__metaItem', 'v' + project.version))
    }
    if (meta.children.length) body.appendChild(meta)

    if (project.tags && project.tags.length) {
      var tags = el('ul', 'tags tags--small')
      project.tags.slice(0, 4).forEach(function (tag) {
        tags.appendChild(el('li', null, tag))
      })
      body.appendChild(tags)
    }

    var more = el('span', 'project-card__more')
    more.appendChild(el('span', null, t('project.open')))
    more.appendChild(el('span', 'project-card__arrow', '→'))
    body.appendChild(more)

    card.appendChild(cover)
    card.appendChild(body)
    return card
  }

  function renderProjectList(containerId, projects) {
    var container = document.getElementById(containerId)
    if (!container) return
    container.textContent = ''
    if (!projects.length) {
      container.appendChild(el('p', 'empty-note', t('projects.empty')))
      return
    }
    projects.forEach(function (project) {
      container.appendChild(projectCard(project))
    })
    tagReveals(container)
    observeReveals(container)
  }

  function setCountText(id, count) {
    var node = document.getElementById(id)
    if (node) node.textContent = String(count)
  }

  function loadProjects() {
    return getJson('/api/projects.json').then(function (data) {
      return data.projects || []
    })
  }

  /* ------------------------------------------------------------------ */
  /* project page                                                        */
  /* ------------------------------------------------------------------ */

  function applyProjectTitle(project) {
    var tagline = localized(project.tagline)
    var title = project.name + (tagline ? ' - ' + tagline : '') + ' | PixelTeam'
    document.title = title
    var meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', localized(project.description).slice(0, 180))

    var ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', title)
    var ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', localized(project.tagline))
  }

  function renderProject(project) {
    var head = document.getElementById('projectHead')
    var cover = document.getElementById('projectCover')
    var name = document.getElementById('projectName')
    var crumb = document.getElementById('crumbName')
    var taglineNode = document.getElementById('projectTagline')
    var category = document.getElementById('projectCategory')
    var status = document.getElementById('projectStatus')
    var tags = document.getElementById('projectTags')
    var specs = document.getElementById('projectSpecs')
    var description = document.getElementById('projectDescription')
    var highlights = document.getElementById('projectHighlights')
    var requirements = document.getElementById('projectRequirements')
    var gallery = document.getElementById('projectGallery')

    if (head) head.hidden = false
    if (cover) {
      cover.src = project.cover || '/img/og.png'
      cover.alt = project.name
    }
    if (name) name.textContent = project.name
    if (crumb) crumb.textContent = project.name
    if (taglineNode) taglineNode.textContent = localized(project.tagline)
    if (category) category.textContent = localized(project.category)
    if (status) {
      status.textContent = localized(project.status)
      status.classList.toggle('pill--soon', project.statusType !== 'stable')
    }

    var featured = document.getElementById('projectFeatured')
    if (featured) featured.hidden = !project.featured

    if (tags) {
      tags.textContent = ''
      ;(project.tags || []).forEach(function (tag) {
        tags.appendChild(el('li', null, tag))
      })
    }

    if (specs) {
      specs.textContent = ''
      ;(project.specs || []).forEach(function (spec) {
        var row = el('div', 'specs__row')
        row.appendChild(el('dt', null, localized(spec.label)))
        row.appendChild(el('dd', null, spec.value))
        specs.appendChild(row)
      })
      if (project.releasedAt) {
        var releasedRow = el('div', 'specs__row')
        releasedRow.appendChild(el('dt', null, t('project.released')))
        releasedRow.appendChild(el('dd', null, formatDate(project.releasedAt)))
        specs.appendChild(releasedRow)
      }
    }

    var overview = document.getElementById('projectOverview')
    if (description && overview) {
      description.textContent = localized(project.description)
      overview.hidden = !description.textContent
    }

    var featuresSection = document.getElementById('projectFeatures')
    if (highlights && featuresSection) {
      highlights.textContent = ''
      ;(project.highlights || []).forEach(function (item) {
        highlights.appendChild(el('li', null, localized(item)))
      })
      featuresSection.hidden = highlights.children.length === 0
    }

    var gallerySection = document.getElementById('projectGallerySection')
    if (gallery && gallerySection) {
      gallery.textContent = ''
      ;(project.screenshots || []).forEach(function (src, index) {
        var button = el('button', 'shot')
        button.type = 'button'
        var image = el('img')
        image.src = src
        image.alt = project.name + ' - ' + (index + 1)
        image.loading = 'lazy'
        button.appendChild(image)
        gallery.appendChild(button)
      })
      gallerySection.hidden = gallery.children.length === 0
      wireLightbox()
    }

    var reqSection = document.getElementById('projectRequirementsSection')
    if (requirements && reqSection) {
      requirements.textContent = ''
      ;(project.requirements || []).forEach(function (item) {
        requirements.appendChild(el('li', null, localized(item)))
      })
      reqSection.hidden = requirements.children.length === 0
    }

    wireDownload(project)
    wireShare()
    renderOthers(project)

    var root = document.getElementById('projectRoot') || document
    tagReveals(root)
    observeReveals(root)
  }

  function wireShare() {
    var button = document.getElementById('projectShare')
    if (!button || button.dataset.wired === '1') return
    button.dataset.wired = '1'
    button.addEventListener('click', function () {
      var url = window.location.href
      var done = function () {
        showToast(t('project.copied'))
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(done, done)
      } else {
        done()
      }
    })
  }

  function renderOthers(project) {
    var section = document.getElementById('projectOthersSection')
    var container = document.getElementById('projectOthers')
    if (!section || !container) return
    loadProjects()
      .then(function (projects) {
        var others = projects.filter(function (item) {
          return item.id !== project.id
        })
        if (!others.length) {
          section.hidden = true
          return
        }
        section.hidden = false
        renderProjectList('projectOthers', others)
      })
      .catch(function () {
        section.hidden = true
      })
  }

  function wireDownload(project) {
    var download = project.download || {}
    var button = document.getElementById('projectDownloadBtn')
    var soon = document.getElementById('projectSoon')
    var metaBox = document.getElementById('projectDownloadMeta')

    if (!download.enabled) {
      if (button) button.hidden = true
      if (metaBox) metaBox.hidden = true
      if (soon) soon.hidden = false
      return
    }

    if (soon) soon.hidden = true
    if (button) {
      button.hidden = false
      button.href = download.url || '#'
      button.setAttribute('download', download.file || '')
    }
    if (metaBox) metaBox.hidden = false

    if (download.api) {
      getJson(download.api)
        .then(function (build) {
          var version = document.getElementById('metaVersion')
          var size = document.getElementById('metaSize')
          var hash = document.getElementById('metaHash')
          if (version) version.textContent = 'v' + build.version
          if (size) size.textContent = formatSize(build.size)
          if (hash) {
            hash.textContent = shortHash(build.sha256)
            hash.setAttribute('title', build.sha256)
          }
          updateSpec('specs', 0, build.version)
          updateSpec('specs', 2, formatSize(build.size))
        })
        .catch(function () {})
    }

    getJson('/api/stats.json')
      .then(function (stats) {
        var node = document.getElementById('metaDownloads')
        if (node) node.textContent = String(stats.downloads || 0)
      })
      .catch(function () {})
  }

  /** Refresh a spec value (by row index) once the real build data arrives. */
  function updateSpec(_name, index, value) {
    var specs = document.getElementById('projectSpecs')
    if (!specs) return
    var row = specs.children[index]
    if (!row) return
    var dd = row.querySelector('dd')
    if (dd && value) dd.textContent = value
  }

  function loadProjectPage() {
    var id = document.body.dataset.project
    var inline = document.getElementById('project-data')

    var data
    if (inline && inline.textContent.trim()) {
      try {
        data = JSON.parse(inline.textContent)
      } catch (error) {
        data = null
      }
    }

    var promise = data ? Promise.resolve(data) : getJson('/api/projects/' + encodeURIComponent(id) + '.json').then(function (res) {
      return res.project
    })

    promise
      .then(function (project) {
        if (!project) throw new Error('not found')
        currentProject = project
        applyProjectTitle(project)
        renderProject(project)
      })
      .catch(function () {
        var head = document.getElementById('projectHead')
        var error = document.getElementById('projectError')
        if (head) head.hidden = true
        if (error) error.hidden = false
      })
  }

  /* ------------------------------------------------------------------ */
  /* lightbox                                                            */
  /* ------------------------------------------------------------------ */

  function wireLightbox() {
    var lightbox = document.getElementById('lightbox')
    var image = document.getElementById('lightboxImg')
    var close = document.getElementById('lightboxClose')
    if (!lightbox || !image || !close) return
    if (lightbox.dataset.wired === '1') return
    lightbox.dataset.wired = '1'

    var shots = []
    var index = 0

    function show(at) {
      if (!shots.length) return
      index = (at + shots.length) % shots.length
      var source = shots[index].querySelector('img')
      if (!source) return
      image.src = source.src
      image.alt = source.alt
      var counter = document.getElementById('lightboxCounter')
      if (counter) counter.textContent = index + 1 + ' / ' + shots.length
    }

    function dismiss() {
      lightbox.hidden = true
      image.removeAttribute('src')
    }

    function open(button) {
      shots = Array.prototype.slice.call(document.querySelectorAll('.shot'))
      show(shots.indexOf(button))
      lightbox.hidden = false
      close.focus()
    }

    close.addEventListener('click', dismiss)

    var prev = document.getElementById('lightboxPrev')
    if (prev) prev.addEventListener('click', function () {
      show(index - 1)
    })
    var next = document.getElementById('lightboxNext')
    if (next) next.addEventListener('click', function () {
      show(index + 1)
    })

    lightbox.addEventListener('click', function (event) {
      if (event.target === lightbox) dismiss()
    })

    document.addEventListener('keydown', function (event) {
      if (lightbox.hidden) return
      var rtl = document.documentElement.dir === 'rtl'
      if (event.key === 'Escape') dismiss()
      else if (event.key === 'ArrowLeft') show(index + (rtl ? 1 : -1))
      else if (event.key === 'ArrowRight') show(index + (rtl ? -1 : 1))
    })

    document.addEventListener('click', function (event) {
      var button = event.target.closest ? event.target.closest('.shot') : null
      if (!button) return
      open(button)
    })
  }

  /* ------------------------------------------------------------------ */
  /* pages                                                               */
  /* ------------------------------------------------------------------ */

  function initHome() {
    wireLightbox()
    renderSkeletons('featuredProjects', 2)

    var loaded = []
    pageRefresh = function () {
      renderProjectList('featuredProjects', loaded)
    }

    loadProjects()
      .then(function (projects) {
        loaded = projects
        renderProjectList('featuredProjects', projects)
        setCountText('heroProjectCount', projects.length)
        setCountText('statProjects', projects.length)
        countUp(document.getElementById('statProjects'))
      })
      .catch(function () {
        renderProjectList('featuredProjects', [])
      })
  }

  var VIEW_KEY = 'pixelteam.view'

  function readView() {
    try {
      var stored = localStorage.getItem(VIEW_KEY)
      if (stored === 'grid' || stored === 'list') return stored
    } catch (error) {
      /* storage blocked */
    }
    return 'grid'
  }

  function projectMatches(project, query, category) {
    if (category && category !== 'all' && (project.categoryKey || project.id) !== category) return false
    if (!query) return true
    var haystack = [
      project.name,
      localized(project.tagline),
      localized(project.category),
      (project.tags || []).join(' ')
    ]
      .join(' ')
      .toLowerCase()
    return haystack.indexOf(query) !== -1
  }

  function sortProjects(projects, sort) {
    var copy = projects.slice()
    if (sort === 'name') {
      copy.sort(function (a, b) {
        return a.name.localeCompare(b.name)
      })
    } else if (sort === 'newest') {
      copy.sort(function (a, b) {
        return String(b.releasedAt || '').localeCompare(String(a.releasedAt || ''))
      })
    } else {
      copy.sort(function (a, b) {
        if (Boolean(a.featured) !== Boolean(b.featured)) return a.featured ? -1 : 1
        return String(b.releasedAt || '').localeCompare(String(a.releasedAt || ''))
      })
    }
    return copy
  }

  function initProjects() {
    renderSkeletons('projectsGrid', 3)

    var grid = document.getElementById('projectsGrid')
    var none = document.getElementById('projectsNone')
    var search = document.getElementById('projectsSearch')
    var sortSelect = document.getElementById('projectsSort')
    var filters = document.getElementById('projectsFilters')
    var viewButtons = Array.prototype.slice.call(
      document.querySelectorAll('#projectsView .view-toggle__btn')
    )

    var params = new URLSearchParams(window.location.search)
    var state = {
      query: (params.get('q') || '').trim().toLowerCase(),
      category: params.get('cat') || 'all',
      sort: params.get('sort') || 'featured',
      view: readView(),
      projects: []
    }

    if (search) search.value = state.query
    if (sortSelect) sortSelect.value = state.sort

    function applyView() {
      if (grid) grid.classList.toggle('is-list', state.view === 'list')
      viewButtons.forEach(function (button) {
        button.classList.toggle('is-active', button.dataset.view === state.view)
      })
    }

    function syncUrl() {
      var next = new URLSearchParams()
      if (state.query) next.set('q', state.query)
      if (state.category !== 'all') next.set('cat', state.category)
      if (state.sort !== 'featured') next.set('sort', state.sort)
      var query = next.toString()
      try {
        window.history.replaceState(
          null,
          '',
          query ? window.location.pathname + '?' + query : window.location.pathname
        )
      } catch (error) {
        /* ignore */
      }
    }

    function renderFilters() {
      if (!filters) return
      filters.textContent = ''

      var categories = []
      state.projects.forEach(function (project) {
        var key = project.categoryKey || project.id
        if (categories.indexOf(key) === -1) categories.push(key)
      })

      var chips = [
        { key: 'all', label: t('projects.all') }
      ].concat(
        categories.map(function (key) {
          var sample = state.projects.find(function (project) {
            return (project.categoryKey || project.id) === key
          })
          return { key: key, label: sample ? localized(sample.category) : key }
        })
      )

      chips.forEach(function (chip) {
        var button = el('button', 'chip pixel', chip.label)
        button.type = 'button'
        button.dataset.category = chip.key
        if (state.category === chip.key) button.classList.add('is-active')
        button.addEventListener('click', function () {
          state.category = chip.key
          renderFilters()
          render()
        })
        filters.appendChild(button)
      })
    }

    function render() {
      var filtered = state.projects.filter(function (project) {
        return projectMatches(project, state.query, state.category)
      })
      filtered = sortProjects(filtered, state.sort)

      if (grid) grid.hidden = filtered.length === 0 && state.projects.length > 0
      renderProjectList('projectsGrid', filtered)
      if (none) none.hidden = filtered.length > 0 || state.projects.length === 0
      setCountText('projectsCount', filtered.length)
      applyView()
      syncUrl()
    }

    pageRefresh = function () {
      renderFilters()
      render()
    }

    if (search) {
      search.addEventListener('input', function () {
        state.query = search.value.trim().toLowerCase()
        render()
      })
    }

    if (sortSelect) {
      sortSelect.addEventListener('change', function () {
        state.sort = sortSelect.value
        render()
      })
    }

    viewButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        state.view = button.dataset.view
        try {
          localStorage.setItem(VIEW_KEY, state.view)
        } catch (error) {
          /* ignore */
        }
        applyView()
      })
    })

    var clear = document.getElementById('projectsClear')
    if (clear) {
      clear.addEventListener('click', function () {
        state.query = ''
        state.category = 'all'
        state.sort = 'featured'
        if (search) search.value = ''
        if (sortSelect) sortSelect.value = 'featured'
        renderFilters()
        render()
      })
    }

    loadProjects()
      .then(function (projects) {
        state.projects = projects
        renderFilters()
        render()
      })
      .catch(function () {
        state.projects = []
        if (grid) {
          grid.hidden = false
          grid.textContent = ''
          grid.appendChild(el('p', 'empty-note', t('common.error')))
        }
      })
  }

  function setLang(next) {
    if (next !== 'ar' && next !== 'en') return
    if (next === lang) return
    lang = next
    applyLang()
    if (pageRefresh) pageRefresh()
  }

  function initFooter() {
    document.querySelectorAll('.footer__lang').forEach(function (button) {
      button.addEventListener('click', function () {
        setLang(button.dataset.lang)
      })
    })

    var card = document.getElementById('footerRelease')
    if (!card) return

    var name = document.getElementById('footerReleaseName')
    var meta = document.getElementById('footerReleaseMeta')
    var link = document.getElementById('footerReleaseLink')
    var info = null

    footerPaint = function () {
      if (!meta || !info) return
      var text = 'v' + info.version + ' · ' + formatSize(info.size)
      if (info.downloads) text += ' · ' + info.downloads + ' ' + t('footer.downloads')
      meta.textContent = text
    }

    Promise.all([
      getJson('/api/latest.json'),
      getJson('/api/stats.json').catch(function () {
        return {}
      })
    ])
      .then(function (results) {
        var build = results[0] || {}
        var stats = results[1] || {}
        info = { version: build.version, size: build.size, downloads: stats.downloads || 0 }
        if (name) name.textContent = build.product || 'PixelApp'
        if (link) link.setAttribute('href', '/projects/pixelapp')
        footerPaint()
        card.hidden = false
      })
      .catch(function () {})
  }

  function initSupport() {
    document.querySelectorAll('[data-support-link]').forEach(function (card) {
      var key = card.getAttribute('data-support-link')
      var url = SUPPORT_LINKS[key]
      var soon = card.querySelector('[data-support-status]')

      if (!url) {
        card.classList.add('support-card--soon')
        if (soon) soon.hidden = false
        card.addEventListener('click', function (event) {
          event.preventDefault()
        })
        return
      }

      var href = /^https?:\/\//i.test(url) ? url : 'https://' + url
      card.setAttribute('href', href)
      card.setAttribute('aria-disabled', 'false')
      card.classList.remove('support-card--soon')
      if (soon) soon.hidden = true
    })
  }

  function init() {
    var page = document.body.dataset.page
    document.documentElement.classList.add('js')

    mountChrome()
    tagReveals()
    initNav()
    initScrollUI()
    observeReveals()
    initFooter()
    initSupport()

    if (page === 'home') initHome()
    else if (page === 'projects') initProjects()
    else if (page === 'project') loadProjectPage()
    else wireLightbox()

    applyLang()

    var toggle = document.getElementById('langToggle')
    if (toggle) {
      toggle.addEventListener('click', function () {
        onLangChange(pageRefresh)
      })
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
  } else {
    init()
  }
})()
