/**
 * Translation dictionaries for all supported languages.
 *
 * Arabic (ar) and English (en) are the fully-populated primary languages.
 * Other languages (fr, de, es, it, pt, ru, zh, tr) carry the core UI strings
 * (nav, hero, section eyebrows, form labels, footer). Deep content (FAQ
 * answers, About story body, resource articles) falls back to English via
 * the `merge()` helper when a key is missing — so the site never shows a
 * blank string, and you can extend translations language by language by
 * simply adding keys.
 *
 * To add a full translation for a language, fill in every key in the
 * language's object below.
 */

import type { LangCode } from "./locales";

/* ───────────────────────── Dictionary shape ───────────────────────── */

export interface Dictionary {
  nav: {
    home: string;
    about: string;
    products: string;
    resources: string;
    faq: string;
    contact: string;
    requestQuote: string;
  };
  hero: {
    badge: string;
    headline: string;
    subhead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trust1: string;
    trust2: string;
    trust3: string;
    trust4: string;
  };
  why: {
    eyebrow: string;
    heading: string;
    cards: { title: string; body: string }[];
  };
  certs: {
    eyebrow: string;
    body: string;
    items: { name: string; desc: string }[];
    download: string;
  };
  about: {
    heroTitle: string;
    storyHeading: string;
    storyP1: string;
    storyP2: string;
    processHeading: string;
    process: { title: string; body: string }[];
    visionHeading: string;
    vision: string;
    missionHeading: string;
    mission: string;
    galleryHeading: string;
  };
  products: {
    eyebrow: string;
    heading: string;
    intro: string;
    searchPlaceholder: string;
    familyLabel: string;
    industryLabel: string;
    gradeLabel: string;
    formLabel: string;
    clear: string;
    showing: (n: number, total: number) => string;
    noMatch: string;
    clearFilters: string;
    viewDetails: string;
    downloadCatalogue: string;
    requestQuote: string;
  };
  productDetail: {
    origin: string;
    harvest: string;
    brief: string;
    specs: string;
    micro: string;
    forms: string;
    packing: string;
    storage: string;
    shelfLife: string;
    certifications: string;
    purity: string;
    moisture: string;
    volatileOil: string;
    foreignOrganic: string;
    foreignInorganic: string;
    appearance: string;
    color: string;
    totalPlate: string;
    yeastMold: string;
    ecoli: string;
    salmonella: string;
    downloadSpec: string;
    requestSample: string;
    requestQuote: string;
    availableOnRequest: string;
    back: string;
  };
  resources: {
    eyebrow: string;
    heading: string;
    rfqTitle: string;
    rfqIntro: string;
    rfqPoints: string[];
    harvestTitle: string;
    harvestIntro: string;
    harvestRows: { crop: string; season: string }[];
    harvestNote: string;
    qualityTitle: string;
    qualityBody: string;
  };
  faq: {
    eyebrow: string;
    heading: string;
    intro: string;
    categories: { id: string; title: string; items: { q: string; a: string }[] }[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    intro: string;
    form: {
      name: string;
      company: string;
      country: string;
      email: string;
      phone: string;
      category: string;
      product: string;
      quantity: string;
      form: string;
      packing: string;
      port: string;
      incoterm: string;
      notes: string;
      attachment: string;
      submit: string;
      sending: string;
      success: string;
    };
    info: {
      hq: string;
      phone: string;
      email: string;
      hours: string;
    };
    preferEmail: string;
  };
  footer: {
    about: string;
    qualityTitle: string;
    categoriesTitle: string;
    exploreTitle: string;
    contactTitle: string;
    rights: string;
    links: {
      about: string;
      products: string;
      resources: string;
      faq: string;
      contact: string;
      quality: string;
      coa: string;
      phytosanitary: string;
      inspection: string;
    };
  };
  /** Product brief overrides keyed by product id. Missing = use catalog English. */
  productBriefs: Record<string, string>;
  /** Floating WhatsApp chatbot strings. */
  chatbot: {
    title: string;
    status: string;
    greeting: string;
    placeholder: string;
    send: string;
    categories: string;
    questions: string;
    back: string;
    human: string;
    noResults: string;
    matched: string;
    ariaOpen: string;
    ariaClose: string;
    /** Auto-handoff message shown when no FAQ match found. */
    handoffTitle: string;
    handoffBody: string;
    /** Shown as a hint chip when user opens the chatbot. */
    suggestedQuestions: string;
    /** Typing indicator shown while bot is "thinking". */
    typing: string;
  };
}

/* ───────────────────────── Helper: merge fallback ───────────────────────── */
/* Deep-merge a partial dictionary over the English base so any missing key
   transparently falls back to English. */

/* ───────────────────────── Arabic (primary) ───────────────────────── */

const ar: Dictionary = {
  nav: {
    home: "الرئيسية",
    about: "من نحن",
    products: "المنتجات",
    resources: "دليل المصدرين",
    faq: "الأسئلة الشائعة",
    contact: "اتصل بنا",
    requestQuote: "اطلب عرض سعر",
  },
  hero: {
    badge: "هيربز ميلانو · تصدير الأعشاب المصرية منذ 2000",
    headline: "من مزارع مصر العضوية إلى أسواق العالم.. جودة لا تُقاوم",
    subhead:
      "شريكك الموثوق في زراعة ومعالجة وتصدير الأعشاب والتوابل والبذور المصرية بأعلى معايير الجودة العالمية وشهادات ISO و HACCP.",
    ctaPrimary: "اطلب عرض سعر الآن",
    ctaSecondary: "حمّل كتالوج المنتجات",
    trust1: "حد أدنى للطلب من 1 طن",
    trust2: "FOB · CIF · CFR",
    trust3: "ISO 22000 · HACCP",
    trust4: "+89 منتج",
  },
  why: {
    eyebrow: "لماذا تختار هيربز ميلانو؟",
    heading: "شريك تصدير مبني على الثقة والجودة.",
    cards: [
      {
        title: "تحكم كامل في سلسلة الإمداد",
        body: "نمتلك مزارعنا الخاصة في بني سويف، مما يضمن لنا السيطرة على الجودة من مرحلة الزراعة وحتى التغليف.",
      },
      {
        title: "معايير جودة عالمية",
        body: "منتجاتنا تخضع لفرز مغناطيسي متقدم، وفحوصات مخبرية دقيقة لضمان نقاء المنتج وخلوه من الشوائب.",
      },
      {
        title: "شراكات عالمية موثوقة",
        body: "نفخر بتوريد منتجاتنا لشركات كبرى في الاتحاد الأوروبي والولايات المتحدة وروسيا ودول الخليج منذ أكثر من 15 عاماً.",
      },
    ],
  },
  certs: {
    eyebrow: "شهاداتنا واعتماداتنا",
    body: "نلتزم بأعلى معايير سلامة الغذاء والصحة العالمية في كل شحنة نصدّرها.",
    items: [
      { name: "ISO 9001:2015", desc: "نظام إدارة الجودة" },
      { name: "ISO 22000:2018", desc: "نظام إدارة سلامة الغذاء" },
      { name: "HACCP", desc: "تحليل المخاطر ونقاط التحكم الحرجة" },
    ],
    download: "تحميل الشهادة",
  },
  about: {
    heroTitle: "جذورنا في الأرض المصرية.. ورؤيتنا في كل أنحاء العالم",
    storyHeading: "قصتنا وتطورنا",
    storyP1:
      "بدأت رحلتنا كمورّد موثوق في السوق المحلي لأكثر من عشر سنوات، حيث اكتسبنا خبرة عميقة في معالجة وتنظيف المواد الخام. ثم جاءت بداية التصدير، تحت اسم «هيربز ميلانو».",
    storyP2:
      "اليوم، نحن نعد واحدة من أكبر شركات تصدير الأعشاب والتوابل في مصر، مدفوعين بهدف واحد: رضا العميل من خلال الجودة، والسعر التنافسي، والالتزام الصارم بمواعيد التسليم.",
    processHeading: "مزارعنا وعمليات الإنتاج",
    process: [
      {
        title: "الزراعة والحصاد",
        body: "باستخدام ممارسات زراعية مستدامة واختيار أفضل البذور.",
      },
      {
        title: "التجفيف والمعالجة",
        body: "بتقنيات تحافظ على الألوان الطبيعية ومحتوى الزيوت الطيارة العالي.",
      },
      {
        title: "الفرز والتنظيف",
        body: "تقنيات متطورة بما في ذلك أجهزة الفرز المغناطيسي (Iron Picking Magnets) لإزالة أي شوائب معدنية.",
      },
      {
        title: "التغليف والتصدير",
        body: "تعبئة آمنة تحافظ على طزاجة المنتج حتى وصوله لوجهته النهائية.",
      },
    ],
    visionHeading: "رؤيتنا",
    vision: "أن نكون الشريك الأول والأكثر موثوقية في سوق الأعشاب والتوابل عالمياً.",
    missionHeading: "رسالتنا",
    mission:
      "تقديم منتجات زراعية مصرية استثنائية، مدعومة بشفافية كاملة، وتحاليل جودة دقيقة، وخدمة ما بعد البيع تلبي أعلى التوقعات.",
    galleryHeading: "معرض الصور",
  },
  products: {
    eyebrow: "منتجاتنا",
    heading: "انعكاس لجودة الأرض المصرية ودقة المعايير العالمية",
    intro:
      "نقدم مجموعة شاملة من الأعشاب المجففة والتوابل والبذور، المزروعة بعناية ومعالجة بأحدث التقنيات. جميع منتجاتنا متاحة بتحاليل مخبرية (COA) ومواصفات فنية دقيقة.",
    searchPlaceholder: "ابحث عن منتج…",
    familyLabel: "فئة المنتج",
    industryLabel: "التطبيق",
    gradeLabel: "الدرجة",
    formLabel: "الشكل المتاح",
    clear: "مسح",
    showing: (n, total) => `عرض ${n} من ${total} منتج`,
    noMatch: "لا توجد منتجات مطابقة لفلترك.",
    clearFilters: "مسح الفلاتر",
    viewDetails: "عرض التفاصيل",
    downloadCatalogue: "حمّل كتالوج المنتجات",
    requestQuote: "اطلب عرض سعر",
  },
  productDetail: {
    origin: "بلد المنشأ",
    harvest: "طريقة الحصاد",
    brief: "الوصف المختصر",
    specs: "المواصفات الفنية والتحليلية",
    micro: "المعايير الميكروبيولوجية",
    forms: "أشكال التقطيع المتاحة",
    packing: "خيارات التعبئة والتغليف",
    storage: "التخزين وعمر الافتراضي",
    shelfLife: "العمر الافتراضي",
    certifications: "الاعتمادات والمستندات المتوفرة",
    purity: "النقاء",
    moisture: "نسبة الرطوبة",
    volatileOil: "الزيوت الطيارة",
    foreignOrganic: "الشوائب العضوية",
    foreignInorganic: "الشوائب غير العضوية",
    appearance: "الشكل والمظهر",
    color: "اللون",
    totalPlate: "إجمالي عدد البكتيريا",
    yeastMold: "الخمائر والعفن",
    ecoli: "بكتيريا الإشريكية القولونية",
    salmonella: "السالمونيلا",
    downloadSpec: "تحميل ورقة المواصفات PDF",
    requestSample: "طلب عينة من هذه الدفعة",
    requestQuote: "طلب عرض سعر مخصص",
    availableOnRequest: "متاح عند الطلب",
    back: "العودة إلى المنتجات",
  },
  resources: {
    eyebrow: "دليل المصدرين والمشتري الدولي",
    heading: "موارد عملية لخطط التصدير والشراء",
    rfqTitle: "كيف تطلب عرض سعر احترافي (RFQ)",
    rfqIntro:
      "لتسريع عملية الحصول على عرض سعر دقيق، يرجى تزويدنا بالتفاصيل التالية:",
    rfqPoints: [
      "اسم المنتج المطلوب ودرجة الجودة (Grade)",
      "الشكل المطلوب (كامل، محطم، مطحون، أو مقطع لشاي TBC)",
      "الكمية المتوقعة (بالطن أو عدد الحاويات)",
      "نوع التعبئة المفضل (أكياس خيش، أكياس بولي بروبيلين، أو تعبئة خاصة)",
      "ميناء الوصول وشروط التسليم المفضلة (مثل: FOB Alexandria، CIF Hamburg)",
    ],
    harvestTitle: "مواسم الحصاد الرئيسية في مصر",
    harvestIntro:
      "تختلف نوافذ الحصاد حسب المحصول والمنطقة. خطّط طلباتك حول هذه المواعيد للحصول على أفضل الأسعار والتوفر.",
    harvestRows: [
      { crop: "البابونج واليانسون", season: "الربيع (أبريل – مايو)" },
      { crop: "الكركديه", season: "الخريف (أكتوبر – نوفمبر)" },
      { crop: "الكمون والكزبرة", season: "أواخر الربيع وأوائل الصيف" },
    ],
    harvestNote:
      "تتوفّر مخزونات مدوّرة على مدار العام بفضل مرافق التخزين الحديثة لدينا في بني سويف.",
    qualityTitle: "ضمان الجودة والمعالجة",
    qualityBody:
      "تخضع جميع منتجاتنا لعمليات تنظيف متقدمة، بما في ذلك الفرز المغناطيسي (Iron Picking Magnets) لإزالة أي شوائب معدنية دقيقة، وضمان نقاء بنسبة تصل إلى 99.9% قبل التعبئة.",
  },
  faq: {
    eyebrow: "الأسئلة الشائعة للشركات (B2B)",
    heading: "كل ما يسأل عنه المشترون الدوليون",
    intro:
      "إجابات واضحة وشاملة على أكثر الأسئلة شيوعاً حول شركتنا، منتجاتنا، الجودة، الطلبات، التعبئة، الشحن، التخزين والتواصل.",
    categories: [
      {
        id: "about",
        title: "حول هيربز ميلانو",
        items: [
          {
            q: "من أنتم؟",
            a: "نحن «هيربز ميلانو» — مُصدِّر مصري للأعشاب والتوابل والبذور والنباتات العطرية منذ عام 2000. نعمل كمصنّع وتاجر معاً، نمتلك مزارع خاصة في بني سويف ومرافق معالجة وفق ISO 22000 و HACCP.",
          },
          {
            q: "هل أنتم مُصنّع أم تاجر؟",
            a: "كلاهما. نُعالج ونُعبّئ المنتجات في مرافقنا الخاصة، كما نُصدّر الأعشاب من المزارع في مناطق الفيوم وبني سويف والمنيا وأسيوط، حسب المنتج والموسم.",
          },
          {
            q: "لماذا تستوردون الأعشاب من مصر؟",
            a: "مصر منشأ مهم للبابونج والريحان والبردقوش والنعناع والكمون والكزبرة واليانسون والكركديه وغيرها. المناخ وظروف الزراعة والحصاد تدعم نكهة ولون وكميات إنتاج مميزة، وتعتمد المعايير النوعية على المحصول والدفعة.",
          },
        ],
      },
      {
        id: "products",
        title: "المنتجات والمواصفات",
        items: [
          {
            q: "ما المنتجات التي تصدّرونها؟",
            a: "نُصدّر الأعشاب المجففة، الأزهار، البذور والتوابل، النباتات الطبية والعطرية. استكشف كتالوج منتجاتنا الكامل للاطلاع على الأصناف المتاحة.",
          },
          {
            q: "ما أشكال القطع والتجهيزات المتاحة؟",
            a: "حسب المنتج: كامل، مطحون، مقطّع، مقطّع لأكياس الشاي (TBC)، منخول، مفروك، أو بودرة. يمكن مناقشة أحجام قطع وشاشات مخصصة عند الطلب.",
          },
          {
            q: "هل توفرون مواصفات المنتجات؟",
            a: "المواصفات متاحة لمنتجات مختارة. اطلب من فريق التصدير ورقة البيانات الفنية المناسبة وشهادة تحليل الدفعة (COA) المتاحة. يختلف نطاق الاختبار حسب المنتج والدفعة ومتطلبات العميل.",
          },
          {
            q: "هل منتجاتكم عضوية؟",
            a: "تتوفر المنتجات التقليدية. إذا كنت تحتاج مواد عضوية معتمدة، يرجى التأكيد معنا على توفر المنتج والشهادة الصالحة قبل الطلب.",
          },
          {
            q: "هل يمكنكم تلبية متطلبات الاتحاد الأوروبي لمتبقيات المبيدات (EU MRL)؟",
            a: "نعم. نلتزم بمعايير سلامة الغذاء العالمية. يمكن إجراء اختبارات متبقيات المبيدات وفقاً لمتطلبات سوقك المستهدف، ويُؤكَّد الامتثال من خلال نتائج التحاليل المعتمدة للمنتج والدفعة قبل الشحن.",
          },
          {
            q: "هل تُعقَّم الأعشاب أو تُعالَج؟",
            a: "خيارات المعالجة والتحكم الميكروبي، بما في ذلك التعقيم بالبخار حيثما كان ذلك ممكناً، يمكن مناقشتها حسب المنتج. يرجى تحديد متطلباتك لنؤكد العملية والتوثيق المتاح.",
          },
        ],
      },
      {
        id: "quality",
        title: "الجودة والشهادات",
        items: [
          {
            q: "ما الشهادات التي تملكونها؟",
            a: "نحن معتمدون بـ ISO 9001:2015 و ISO 22000:2018 ونلتزم بمبادئ HACCP لسلامة الغذاء. يمكن توفير نسخة من شهاداتنا الصالحة عند الطلب.",
          },
          {
            q: "كيف تتحكمون في الجودة؟",
            a: "تتم معاينة المواد الخام ومعالجتها حسب متطلبات المنتج، مع خطوات تنظيف وفرز وتعبئة. يمكن الاتفاق على أخذ العينات، معايير الاختبار وحدود القبول لكل طلب.",
          },
          {
            q: "هل يمكنني الحصول على عينة قبل الطلب؟",
            a: "نعم، تتوفر عينات حسب المنتج والمخزون. سيؤكد فريقنا كمية العينة، التكلفة، رسوم البريد السريع، وما إذا كان يمكن أخذها من نفس دفعة الشحن المخطط لها.",
          },
          {
            q: "هل يمكنني إرسال مفتش خاص أو استخدام جهة تفتيش خارجية؟",
            a: "نعم، يمكن ترتيب الفحص من طرف ثالث بالاتفاق. يرجى إبلاغنا بوكالة الفحص المفضلة، نطاق الفحص، والتوقيت قبل تأكيد الطلب.",
          },
        ],
      },
      {
        id: "orders",
        title: "الطلبات والتسعير",
        items: [
          {
            q: "ما الحد الأدنى لكمية الطلب (MOQ)؟",
            a: "عادةً 1 طن متري لكل منتج، ونقبل تحميل الحاويات المختلطة (Mixed 20ft Container) لتسهيل التنوع في طلبك. يمكن مناقشة طلبات التجربة الأصغر حسب المنتج وتوفر المخزون.",
          },
          {
            q: "هل يمكنني خلط عدة منتجات في حاوية واحدة؟",
            a: "نعم، يمكن ترتيب تحميل الحاويات المختلطة حيثما تسمح توافق المنتج، التعبئة، والظروف اللوجستية. أرسل لنا قائمة المنتجات والكميات المطلوبة.",
          },
          {
            q: "كيف تسعّرون منتجاتكم؟",
            a: "يعتمد التسعير على المنتج، الدرجة، الكمية، الموسم، التعبئة، وشروط التسليم. اطلب عرض سعر محدّث مع ذكر ميناء الوصول وشروط التسليم المفضلة (FOB، CFR، CIF).",
          },
          {
            q: "لماذا تتغير الأسعار خلال العام؟",
            a: "تتأثر الأسعار بتوفر المحصول الزراعي، جودة الحصاد، الطقس، تكاليف المعالجة، والطلب في السوق خلال العام.",
          },
          {
            q: "ما شروط الدفع لديكم؟",
            a: "شروطنا القياسية: 30% دفعة مقدمة عبر التحويل البنكي (T/T) و70% مقابل صورة مستندات الشحن. كما نقبل الاعتمادات المستندية غير القابلة للإلغاء عند النظر (Irrevocable L/C at sight) للطلبات الكبيرة، ويمكن مناقشة شروط مرنة للعملاء الدائمين.",
          },
        ],
      },
      {
        id: "packing",
        title: "التعبئة والعلامة الخاصة",
        items: [
          {
            q: "كيف تُعبَّأ المنتجات؟",
            a: "يمكن تسعير الأعشاب والتوابل بالجملة في أكياس مناسبة أو كراتون مبطّن، حسب المنتج والوجهة. قد تتوفر الزيوت في براميل، جيركنات، أو زجاجات. المواد والأحجام تُؤكَّد في عرض السعر.",
          },
          {
            q: "هل تقدمون العلامة الخاصة أو التعبئة بالتجزئة؟",
            a: "نعم، خيارات التعبئة والتوسيم حسب طلب العميل (Private Label) متاحة وفقاً لحجم الطلب، توفر مواد التعبئة، ومتطلبات الملصقات القانونية للسوق المستهدف.",
          },
          {
            q: "هل يمكن تحميل المنتجات على منصات وتبخيرها؟",
            a: "نعم، يمكن مناقشة التحميل على منصات (Palletization) والمعالجة أو الشهادات الخاصة بالوجهة عند الحاجة والتطبيق.",
          },
        ],
      },
      {
        id: "shipping",
        title: "الشحن والمستندات",
        items: [
          {
            q: "من أي موانئ تشحنون؟",
            a: "نشحن عادةً من موانئ الإسكندرية، بورسعيد، ودمياط. الاختيار يعتمد على الوجهة، توفر الناقل، وشروط التسليم المفضلة.",
          },
          {
            q: "كم يستغرق تجهيز الطلب؟",
            a: "عادةً من 2 إلى 4 أسابيع بعد تأكيد الطلب والدفع، حسب الكمية والمعالجة المطلوبة (التعقيم، التقطيع الخاص، التحاليل المخبرية).",
          },
          {
            q: "ما المستندات التي توفرونها؟",
            a: "نوفر حزمة مستندات شحن كاملة: الفاتورة التجارية (Commercial Invoice)، قائمة التعبئة (Packing List)، شهادة المنشأ (Certificate of Origin)، الشهادة الصحية النباتية (Phytosanitary Certificate)، وشهادة تحليل الدفعة (COA).",
          },
          {
            q: "هل يمكنني الحصول على رسوم جمركية مخففة؟",
            a: "قد ينطبق المعاملة التفضيلية للرسوم بموجب اتفاقيات التجارة حسب تصنيف المنتج، قواعد المنشأ، والبلد المستورد. يرجى التحقق من وكلاء الجمارك لديك؛ ويمكننا مناقشة وثائق المنشأ المطبقة.",
          },
          {
            q: "هل يمكنكم الشحن إلى بلدي؟",
            a: "أرسل لنا اسم بلدك وميناء الوصول لنتحقق من إمكانيات الشحن، قيود المنتج، والمستندات المطلوبة.",
          },
        ],
      },
      {
        id: "storage",
        title: "التخزين ومدة الصلاحية",
        items: [
          {
            q: "ما مدة صلاحية أعشابكم؟",
            a: "تختلف مدة الصلاحية حسب النبات، المعالجة، التعبئة، والظروف. توفر ورقة المواصفات أو ملصق الدفعة الفترة المطبقة. يُحفظ في مكان بارد جاف بعيداً عن أشعة الشمس المباشرة ما لم يُذكر خلاف ذلك.",
          },
          {
            q: "متى موسم الحصاد؟",
            a: "تختلف مواسم الحصاد حسب المحصول والمنطقة. البابونج محصول ربيعي شائع، بينما لبعض الأعشاب كالريحان والبردقوش والنعناع عدة قطعات. تواصل معنا لمعرفة توفر المحصول الحالي.",
          },
        ],
      },
      {
        id: "contact",
        title: "التواصل",
        items: [
          {
            q: "كيف يمكنني طلب عرض سعر؟",
            a: "أرسل اسم المنتج، المواصفة أو الشكل، الكمية، تفضيل التعبئة، وميناء الوصول عبر نموذج التواصل، البريد herbs.milanos.eg@gmail.com، أو واتساب +20 122 621 1624. سنردّ بالخيارات والأسعار المتاحة.",
          },
        ],
      },
    ],
  },
  contact: {
    eyebrow: "اتصل بنا / طلب عرض سعر",
    heading: "نحن هنا لبناء شراكة تجارية ناجحة معك",
    intro:
      "فريق المبيعات والتصدير لدينا جاهز للرد على استفساراتك، وتقديم عينات، وإعداد عروض أسعار مخصصة تلبي احتياجات سوقك.",
    form: {
      name: "الاسم الكامل",
      company: "اسم الشركة",
      country: "الدولة",
      email: "البريد الإلكتروني الرسمي",
      phone: "رقم الهاتف / واتساب",
      category: "فئة المنتج",
      product: "المنتج المحدد",
      quantity: "الكمية المتوقعة",
      form: "شكل المنتج المطلوب",
      packing: "نوع التعبئة",
      port: "ميناء الوصول",
      incoterm: "شروط التسليم المفضلة",
      notes: "ملاحظات إضافية أو مواصفات خاصة",
      attachment: "إرفاق ملف (PDF, JPG, PNG)",
      submit: "إرسال طلب عرض السعر",
      sending: "جارٍ الإرسال…",
      success:
        "شكراً لطلبك. سيقوم فريق التصدير لدينا بمراجعة مواصفاتك والرد عليك خلال 24 ساعة عمل.",
    },
    info: {
      hq: "بني سويف، مصر",
      phone: "+20 122 621 1624",
      email: "herbs.milanos.eg@gmail.com",
      hours: "الاثنين – السبت، 9:00 – 17:00 (ت.م.ص.)",
    },
    preferEmail: "تفضّل البريد؟ تواصل معنا مباشرة عبر",
  },
  footer: {
    about:
      "هيربز ميلانو — مُصدِّر مصري للأعشاب والتوابل والبذور والزيوت الطبيعية منذ 2000. مزارع خاصة في بني سويف، ومعالجة وفق ISO 22000 و HACCP.",
    qualityTitle: "الجودة والتصدير",
    categoriesTitle: "فئات المنتجات",
    exploreTitle: "استكشف",
    contactTitle: "تواصل التصدير",
    rights: "© {year} هيربز ميلانو — جميع الحقوق محفوظة.",
    links: {
      about: "من نحن",
      products: "المنتجات",
      resources: "دليل المصدرين",
      faq: "الأسئلة الشائعة",
      contact: "اطلب عرض سعر",
      quality: "منهج الجودة",
      coa: "شهادة تحليل الدفعة (COA)",
      phytosanitary: "الشهادة الصحية النباتية",
      inspection: "فحص طرف ثالث",
    },
  },
  productBriefs: {},
  chatbot: {
    title: "مساعد هيربز ميلانوس",
    status: "متصل · يردّ خلال دقائق",
    greeting:
      "سلام 👋 أنا مساعد هيربز ميلانوس. اختر موضوعًا بالأسفل أو اكتب كلمة مفتاحية (مثل «الحد الأدنى»، «بابونج»، «الشحن»).",
    placeholder: "اكتب كلمة مفتاحية…",
    send: "إرسال",
    categories: "تصفح حسب الموضوع",
    questions: "الأسئلة",
    back: "العودة إلى الموضوعات",
    human: "تحدّث عبر واتساب",
    noResults:
      "لا توجد نتيجة مطابقة. جرّب كلمة أخرى، أو اضغط بالأسفل للتحدّث مباشرةً مع فريق التصدير عبر واتساب.",
    matched: "إجابات مطابقة",
    ariaOpen: "افتح مساعد الدردشة",
    ariaClose: "إغلاق مساعد الدردشة",
    handoffTitle: "تحويل لمسؤول بشري",
    handoffBody:
      "لم أجد إجابة مناسبة لسؤالك. سأحوّلك لمسؤول بشري على واتساب للرد عليك مباشرةً.",
    suggestedQuestions: "أسئلة شائعة",
    typing: "يكتب…",
  },
};

/* ───────────────────────── English ───────────────────────── */

const en: Dictionary = {
  nav: {
    home: "Home",
    about: "About Us",
    products: "Products",
    resources: "Export Resources",
    faq: "FAQ",
    contact: "Contact",
    requestQuote: "Request a Quote",
  },
  hero: {
    badge: "🌿 Herbs Milanos · Trusted by B2B buyers in 30+ countries since 2000",
    headline:
      "Premium Egyptian Herbs & Spices — Factory-Direct to Your Container",
    subhead:
      "Source chamomile, hibiscus, peppermint, cumin, fennel and 85+ botanicals directly from our owned farms in Beni Suef. ISO 22000 + HACCP certified, magnetic-sorted to 99.9% purity, shipped FOB/CIF from Alexandria. Get a quote in 24 hours.",
    ctaPrimary: "Get a Bulk Quote →",
    ctaSecondary: "Download Catalogue",
    trust1: "MOQ from 1 MT",
    trust2: "FOB · CIF · CFR",
    trust3: "ISO 22000 · HACCP",
    trust4: "89+ SKUs in stock",
  },
  why: {
    eyebrow: "Why B2B buyers choose Herbs Milanos",
    heading: "Three reasons importers return to us — shipment after shipment.",
    cards: [
      {
        title: "Own Farms, Direct Pricing",
        body: "We cultivate on our own organic farms in Beni Suef — no middlemen, no trading markups. You buy at farm-gate + processing cost, with full traceability from seed to container.",
      },
      {
        title: "99.9% Purity, Lab-Verified",
        body: "Every batch passes magnetic Iron-Picking sorting, moisture and volatile-oil testing, and microbial screening. A Certificate of Analysis (COA) accompanies every shipment — no exceptions.",
      },
      {
        title: "15+ Years of Export Reliability",
        body: "We've supplied EU tea brands, US spice distributors, and Gulf food manufacturers since 2000. Mixed-container orders, private-label packing, and third-party inspection — all handled in-house.",
      },
    ],
  },
  certs: {
    eyebrow: "Our certifications",
    body: "We commit to the highest food-safety and health standards on every shipment we export.",
    items: [
      { name: "ISO 9001:2015", desc: "Quality Management System" },
      { name: "ISO 22000:2018", desc: "Food Safety Management System" },
      { name: "HACCP", desc: "Hazard Analysis & Critical Control Points" },
    ],
    download: "Download certificate",
  },
  about: {
    heroTitle: "From Egyptian Soil to Global Shelves — 20+ Years of Botanical Excellence",
    storyHeading: "Our Story",
    storyP1:
      "For over a decade, we served as a trusted domestic supplier, mastering the art of cleaning, sorting, and processing raw botanicals to export-grade purity. In 2000, we launched Herbs Milanos — bringing our farm-to-container expertise directly to international B2B buyers.",
    storyP2:
      "Today, Herbs Milanos is one of Egypt's largest herb and spice exporters. We own 50+ acres of organic farmland in Beni Suef, operate a full-cycle processing facility with magnetic sorting and steam sterilization, and ship to 30+ countries. Our promise is simple: premium quality, competitive pricing, and on-time delivery — every shipment, every time.",
    processHeading: "From Seed to Container — Our 4-Step Process",
    process: [
      {
        title: "1. Cultivation & Harvest",
        body: "We select premium seed varieties and cultivate on our own farms in Beni Suef using sustainable practices. Harvest timing is optimized for peak volatile-oil content and color retention.",
      },
      {
        title: "2. Drying & Processing",
        body: "Sun-dried and mechanically dehydrated using low-temperature tunnels that preserve natural aromas, colors, and active compounds. No chemical additives, ever.",
      },
      {
        title: "3. Magnetic Sorting & Cleaning",
        body: "Advanced mechanical sorting + Iron Picking Magnets remove metallic impurities to achieve 99.9% purity. Optical sorters separate by color and size for a consistent, clean product.",
      },
      {
        title: "4. Packing & Export",
        body: "Packed in 25 kg food-grade bags with PE inner liners, or custom private-label packaging. Shipped FOB/CIF/CFR from Alexandria, Port Said, or Damietta — with full documentation.",
      },
    ],
    visionHeading: "Our Vision",
    vision: "To be the world's most trusted and transparent source for Egyptian botanical ingredients — where every buyer knows exactly what's in their container, and every farmer gets a fair price.",
    missionHeading: "Our Mission",
    mission:
      "To deliver exceptional Egyptian-grown botanicals to global manufacturers, backed by full traceability, rigorous quality analysis, and after-sales service that exceeds expectations — while supporting sustainable agriculture in the communities where we farm.",
    galleryHeading: "Our Farms & Facility",
  },
  products: {
    eyebrow: "Wholesale Catalog",
    heading: "89 Egyptian Botanicals — Sourced, Processed & Ready to Ship",
    intro:
      "Browse our full catalog of dried herbs, flowers, seeds and spices. Each product comes with a Certificate of Analysis (COA), available in whole, cut, TBC, rubbed or powder form. Filter by family or industry to find your exact specification.",
    searchPlaceholder: "Search products…",
    familyLabel: "Product family",
    industryLabel: "Application",
    gradeLabel: "Grade",
    formLabel: "Available form",
    clear: "Clear",
    showing: (n, total) => `Showing ${n} of ${total} products`,
    noMatch: "No products match your filters.",
    clearFilters: "Clear filters",
    viewDetails: "View specs & pricing",
    downloadCatalogue: "Download Catalogue",
    requestQuote: "Get a Bulk Quote",
  },
  productDetail: {
    origin: "Country of origin",
    harvest: "Harvest method",
    brief: "Brief description",
    specs: "Technical & analytical specifications",
    micro: "Microbiological criteria",
    forms: "Available cut forms",
    packing: "Packing options",
    storage: "Storage & shelf life",
    shelfLife: "Shelf life",
    certifications: "Available certifications & documents",
    purity: "Purity",
    moisture: "Moisture",
    volatileOil: "Volatile oil",
    foreignOrganic: "Foreign organic matter",
    foreignInorganic: "Foreign inorganic matter",
    appearance: "Appearance",
    color: "Colour",
    totalPlate: "Total plate count",
    yeastMold: "Yeast & mould",
    ecoli: "E. coli",
    salmonella: "Salmonella",
    downloadSpec: "Download spec sheet (PDF)",
    requestSample: "Request a sample from this lot",
    requestQuote: "Request a custom quote",
    availableOnRequest: "Available on request",
    back: "Back to products",
  },
  resources: {
    eyebrow: "Export Resources & International Buyer Guide",
    heading: "Practical resources to plan your Egyptian botanical sourcing",
    rfqTitle: "How to Request a Professional Quote (RFQ)",
    rfqIntro:
      "To receive an accurate quotation within 24 hours, include these details in your enquiry:",
    rfqPoints: [
      "Product name and quality grade (EU Conventional or Organic EC+NOP)",
      "Required form (whole, cut, TBC, rubbed, powder, or ground)",
      "Expected quantity (in metric tons or number of 20ft containers)",
      "Preferred packing (25 kg PP bags, lined cartons, or custom private-label)",
      "Destination port + preferred incoterm (FOB Alexandria, CIF Hamburg, CFR Rotterdam)",
    ],
    harvestTitle: "Egyptian Harvest Calendar — Plan Your Orders",
    harvestIntro:
      "Harvest windows vary by crop and region. For best pricing and availability, send your RFQ 1–2 months before the harvest season begins.",
    harvestRows: [
      { crop: "Chamomile & Anise", season: "Spring (April – May)" },
      { crop: "Hibiscus", season: "Autumn (October – November)" },
      { crop: "Cumin & Coriander", season: "Late spring / early summer" },
      { crop: "Peppermint & Spearmint", season: "Summer (May – August, multiple cuts)" },
      { crop: "Basil & Marjoram", season: "Summer (June – September)" },
      { crop: "Sesame", season: "Autumn (September – November)" },
    ],
    harvestNote:
      "Year-round stock is available thanks to our modern storage facilities in Beni Suef. Contact us for current crop availability and spot-pricing.",
    qualityTitle: "Quality Assurance & Processing Standards",
    qualityBody:
      "Every product undergoes: 1) Mechanical cleaning and optical sorting, 2) Iron Picking Magnets to remove metallic impurities to 99.9% purity, 3) Moisture and volatile-oil testing, 4) Microbial screening (TPC, yeast/mold, E. coli, Salmonella). Steam sterilization available on request. A batch-specific COA accompanies every shipment.",
  },
  faq: {
    eyebrow: "B2B FAQ",
    heading: "ask us",
    intro:
      "Clear, comprehensive answers to the most common questions about our company, products, quality, orders, packing, shipping, storage and contact.",
    categories: [
      {
        id: "about",
        title: "About Herbs Milanos",
        items: [
          {
            q: "Who are you?",
            a: "We are Herbs Milanos — an Egyptian exporter of herbs, spices, seeds and aromatic plants since 2000. We operate as both manufacturer and trader, with own farms in Beni Suef and processing facilities under ISO 22000 & HACCP.",
          },
          {
            q: "Are you a manufacturer or a trader?",
            a: "Both. We process and pack products in our own facilities, and we source herbs from farms and growing regions across Egypt — including Fayoum, Beni Suef, Minya and Assiut — according to product and season.",
          },
          {
            q: "Why source herbs from Egypt?",
            a: "Egypt is an important origin for chamomile, basil, marjoram, mint, caraway, coriander, fennel, anise, hibiscus and other crops. Climate, cultivation and harvest conditions support desirable aroma, colour and supply volumes; quality parameters depend on the crop and batch.",
          },
        ],
      },
      {
        id: "products",
        title: "Products & Specifications",
        items: [
          {
            q: "What products do you export?",
            a: "We export dried herbs, flowers, seeds and spices, medicinal and aromatic plants. Explore our full product catalogue for available items.",
          },
          {
            q: "What cuts and forms are available?",
            a: "Depending on the product: whole, crushed, cut, tea-bag cut (TBC), sifted, rubbed, or powdered. Custom mesh and cut sizes can be discussed on request.",
          },
          {
            q: "Do you provide product specifications?",
            a: "Specifications are available for selected items. Ask our export team for the relevant technical data sheet and available batch-specific Certificate of Analysis (COA). Test scope depends on product, batch and customer requirements.",
          },
          {
            q: "Are your products organic?",
            a: "Conventional products are available. If you require certified organic material, please confirm product availability and valid certification with us before ordering.",
          },
          {
            q: "Can you meet EU pesticide (MRL) requirements?",
            a: "Yes. We comply with global food-safety standards. Pesticide-residue testing can be carried out against your target market's requirements. Compliance is confirmed through accredited lab results for the product and specific batch before shipment.",
          },
          {
            q: "Are your herbs sterilized or treated?",
            a: "Treatment and microbial-control options, including steam sterilization where feasible, can be discussed by product. Please specify your requirements so we can confirm the available process and documentation.",
          },
        ],
      },
      {
        id: "quality",
        title: "Quality & Certifications",
        items: [
          {
            q: "What certifications do you have?",
            a: "We are ISO 9001:2015 and ISO 22000:2018 certified and follow HACCP food-safety principles. A copy of our valid certificates can be provided on request.",
          },
          {
            q: "How do you control quality?",
            a: "Raw materials are inspected and processed according to product requirements, with cleaning, sorting and packing steps. Sampling, test parameters and acceptance limits can be agreed for each order.",
          },
          {
            q: "Can I get a sample before ordering?",
            a: "Samples may be available depending on the product and stock. Our team will confirm sample quantity, cost, courier charges and whether a sample can be taken from the intended shipment batch.",
          },
          {
            q: "Can I send my own inspector or use a third-party inspection?",
            a: "Yes, third-party inspection can be arranged by agreement. Please advise your preferred inspection agency, scope and timing before confirming the order.",
          },
        ],
      },
      {
        id: "orders",
        title: "Orders & Pricing",
        items: [
          {
            q: "What is your minimum order quantity (MOQ)?",
            a: "Typically 1 metric ton per product, and we accept mixed 20ft container loads so you can diversify your order. Smaller trial orders can be discussed depending on the product and stock availability.",
          },
          {
            q: "Can I mix several products in one container?",
            a: "Yes, mixed-container orders may be possible where product compatibility, packing and logistical conditions allow. Send us your requested product list and quantities.",
          },
          {
            q: "How do you price your products?",
            a: "Pricing depends on product, grade, quantity, season, packing and delivery terms. Ask for an up-to-date quotation with your destination port and preferred incoterm (FOB, CFR, CIF).",
          },
          {
            q: "Why do prices change during the year?",
            a: "Prices are affected by agricultural crop availability, harvest quality, weather, processing costs and market demand throughout the year.",
          },
          {
            q: "What are your payment terms?",
            a: "Our standard terms are 30% advance by T/T and 70% against copy of shipping documents. We also accept irrevocable L/C at sight for large orders, and flexible terms can be discussed for regular customers.",
          },
        ],
      },
      {
        id: "packing",
        title: "Packing & Private Label",
        items: [
          {
            q: "How are products packed?",
            a: "Bulk herbs and spices can be quoted in suitable bags or lined cartons, depending on the item and destination. Oils may be available in drums, jerrycans or bottles. Exact materials and pack sizes are confirmed in the offer.",
          },
          {
            q: "Do you offer private label or retail packing?",
            a: "Private-label and retail packing options can be discussed according to product, order volume, packaging availability and the legal labelling requirements of your target market.",
          },
          {
            q: "Can products be palletized and fumigated?",
            a: "Yes, palletization and destination-specific treatment or certificates can be discussed when required and applicable.",
          },
        ],
      },
      {
        id: "shipping",
        title: "Shipping & Documents",
        items: [
          {
            q: "Which ports do you ship from?",
            a: "We typically ship from Alexandria, Port Said and Damietta. The choice depends on destination, carrier availability and your preferred incoterm.",
          },
          {
            q: "How long does it take to prepare an order?",
            a: "Usually 2–4 weeks after order confirmation and payment, depending on quantity and processing required (sterilization, special cuts, lab tests).",
          },
          {
            q: "What documents do you provide?",
            a: "We provide a full shipping document pack: Commercial Invoice, Packing List, Certificate of Origin, Phytosanitary Certificate, and Certificate of Analysis (COA).",
          },
          {
            q: "Can I get reduced customs duties?",
            a: "Preferential duty treatment may apply under trade agreements depending on product classification, rules of origin and the importing country. Please check with your customs broker; we can discuss applicable origin documentation.",
          },
          {
            q: "Can you ship to my country?",
            a: "Send us your destination country and port so we can check shipping possibilities, product restrictions and required documentation.",
          },
        ],
      },
      {
        id: "storage",
        title: "Storage & Shelf Life",
        items: [
          {
            q: "What is the shelf life of your herbs?",
            a: "Shelf life varies by botanical, processing, packaging and storage conditions. The relevant product specification or batch label provides the applicable period. Store in a cool, dry place away from direct sunlight unless otherwise specified.",
          },
          {
            q: "When is the harvest season?",
            a: "Harvest periods vary by crop and growing region. Chamomile is commonly a spring crop, while some herbs such as basil, marjoram and mint may have several cuts. Contact us for current crop availability.",
          },
        ],
      },
      {
        id: "contact",
        title: "Contact",
        items: [
          {
            q: "How can I request a quotation?",
            a: "Send the product name, specification or cut, quantity, packing preference and destination port via the contact form, email herbs.milanos.eg@gmail.com, or WhatsApp +20 122 621 1624. We will follow up with available options and pricing.",
          },
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Contact / Request a Quote",
    heading: "Get a Bulk Quote in 24 Hours",
    intro:
      "Tell us what you need — product, quantity, destination, and incoterm. Our export team will respond within one business day with pricing, lead time, packing options, and a COA for the relevant batch.",
    form: {
      name: "Full name",
      company: "Company name",
      country: "Country",
      email: "Official email",
      phone: "Phone / WhatsApp",
      category: "Product category",
      product: "Specific product",
      quantity: "Expected quantity",
      form: "Required product form",
      packing: "Packing type",
      port: "Destination port",
      incoterm: "Preferred incoterm",
      notes: "Additional notes or special specifications",
      attachment: "Attach a file (PDF, JPG, PNG)",
      submit: "Send RFQ →",
      sending: "Sending…",
      success:
        "Thank you. Our export team will review your specifications and reply within 24 business hours with pricing and a COA.",
    },
    info: {
      hq: "Beni Suef, Egypt",
      phone: "+20 122 621 1624",
      email: "herbs.milanos.eg@gmail.com",
      hours: "Mon – Sat, 9:00 – 17:00 (EET)",
    },
    preferEmail: "Prefer email? Reach us directly at",
  },
  footer: {
    about:
      "Herbs Milanos — Egyptian exporter of herbs, spices, seeds and natural oils since 2000. Own farms in Beni Suef, processing under ISO 22000 & HACCP.",
    qualityTitle: "Quality & Export",
    categoriesTitle: "Product Categories",
    exploreTitle: "Explore",
    contactTitle: "Export enquiries",
    rights: "© {year} Herbs Milanos — All rights reserved.",
    links: {
      about: "About Us",
      products: "Products",
      resources: "Export Resources",
      faq: "FAQ",
      contact: "Request a quote",
      quality: "Our quality approach",
      coa: "Certificate of Analysis (COA)",
      phytosanitary: "Phytosanitary certificate",
      inspection: "Third-party inspection",
    },
  },
  productBriefs: {},
  chatbot: {
    title: "Herbs Milanos Assistant",
    status: "Online · replies in minutes",
    greeting:
      "Salam 👋 I'm your Herbs Milanos assistant. Pick a topic below or type a keyword (e.g. \"MOQ\", \"chamomile\", \"shipping\").",
    placeholder: "Type a keyword…",
    send: "Send",
    categories: "Browse by topic",
    questions: "Questions",
    back: "Back to topics",
    human: "Chat on WhatsApp",
    noResults:
      "No match found. Try another keyword, or tap below to talk directly with our export team on WhatsApp.",
    matched: "Matched answers",
    ariaOpen: "Open chat assistant",
    ariaClose: "Close chat assistant",
    handoffTitle: "Connecting you to a human agent",
    handoffBody:
      "I couldn't find a matching answer to your question. I'll connect you with a human agent on WhatsApp to help you directly.",
    suggestedQuestions: "Suggested questions",
    typing: "typing…",
  },
};

/* ───────────────────────── Other languages ───────────────────────── */
/* Full translations for each language. Product names and trade terms
   (FOB, CIF, MOQ, etc.) are kept in English across all languages. */
import { fr } from "./dictionaries/fr";
import { de } from "./dictionaries/de";
import { it } from "./dictionaries/it";
import { ru } from "./dictionaries/ru";
import { zh } from "./dictionaries/zh";
import { es } from "./dictionaries/es";
import { pt } from "./dictionaries/pt";
import { tr } from "./dictionaries/tr";

export const translations: Record<LangCode, Dictionary> = {
  en,
  ar,
  fr,
  de,
  it,
  ru,
  zh,
  es,
  pt,
  tr,
};
