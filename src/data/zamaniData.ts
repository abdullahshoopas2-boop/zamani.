import type {
  ArabCountry,
  CardOccasionKey,
  CardThemeId,
  IslamicOccasion,
  Language,
  LocalizedText,
} from "../types/zamani";

export interface I18nCopy {
  brandName: string;
  navOccasions: string;
  navAcademic: string;
  navStudio: string;
  headerCta: string;
  heroKicker: string;
  heroTitle: string;
  heroSubtitle: string;
  todayLabel: string;
  islamicEyebrow: string;
  islamicTitle: string;
  islamicDesc: string;
  academicEyebrow: string;
  academicTitle: string;
  academicDesc: string;
  selectCountryLabel: string;
  termCardTitle: string;
  yearEndCardKicker: string;
  yearEndCardTitle: string;
  gregYearKicker: string;
  gregYearTitle: string;
  hijriYearKicker: string;
  hijriYearTitle: string;
  studioEyebrow: string;
  studioTitle: string;
  studioDesc: string;
  cardOccasionLabel: string;
  cardThemeLabel: string;
  recipientLabel: string;
  senderLabel: string;
  messageLabel: string;
  presetsLabel: string;
  previewTitle: string;
  cardStamp: string;
  downloadBtn: string;
  whatsappBtn: string;
  copyBtn: string;
  footerNote: string;
  footerDisclaimer: string;
  units: { days: string; hours: string; mins: string; secs: string };
  miniUnits: { days: string; hours: string; mins: string; secs: string };
  recipientPlaceholder: string;
  senderPlaceholder: string;
  recipientPrefix: string;
  senderPrefix: string;
  defaultRecipient: string;
  defaultSender: string;
  toastCopied: string;
  toastDownloaded: string;
  expectedPrefix: string;
  gregEndLabel: string;
  hijriEndLabel: string;
  arrivedNow: string;
  themeLightLabel: string;
  themeDarkLabel: string;
}

export const I18N: Record<Language, I18nCopy> = {
  ar: {
    brandName: "زماني | Zamani",
    navOccasions: "المناسبات الإسلامية",
    navAcademic: "التقويم الدراسي",
    navStudio: "استوديو البطاقات",
    headerCta: "صمّم بطاقة",
    heroKicker: "رفيقك للمواقيت والتقويم الدراسي",
    heroTitle: "وقتك بين المناسبات المباركة والرحلة الدراسية",
    heroSubtitle:
      "تابع العد التنازلي المباشر لشهر رمضان والعيدين، واستعرض التقويم الدراسي ونهاية العام لجميع الدول العربية الـ ٢٢، وصمّم بطاقات تهنئة أنيقة في لحظات.",
    todayLabel: "التاريخ اليوم",
    islamicEyebrow: "المواقيت الهجرية",
    islamicTitle: "العد التنازلي للمناسبات الإسلامية",
    islamicDesc:
      "مواعيد فلكية تقديرية وفق تقويم أم القرى، وقد تختلف بيوم واحد حسب ثبوت رؤية الهلال.",
    academicEyebrow: "التقويم الأكاديمي والسنوي",
    academicTitle: "التقويم الدراسي ونهاية السنة للدول العربية",
    academicDesc:
      "اختر أي دولة من الدول العربية الـ ٢٢ لمتابعة العد التنازلي لنهاية الفصل الدراسي والسنة الدراسية ونهاية العام.",
    selectCountryLabel: "اختر الدولة العربية (٢٢ دولة)",
    termCardTitle: "نهاية الفصل الدراسي",
    yearEndCardKicker: "العام الدراسي",
    yearEndCardTitle: "نهاية السنة الدراسية",
    gregYearKicker: "التقويم الميلادي",
    gregYearTitle: "نهاية السنة الميلادية",
    hijriYearKicker: "التقويم الهجري",
    hijriYearTitle: "نهاية السنة الهجرية",
    studioEyebrow: "شارك الفرحة",
    studioTitle: "صانع رسائل وبطاقات التهنئة",
    studioDesc:
      "اختر المناسبة والتصميم، واكتب رسالتك أو اختر عبارة جاهزة، ثم نزّل البطاقة كصورة PNG أو شاركها مباشرة.",
    cardOccasionLabel: "المناسبة",
    cardThemeLabel: "تصميم البطاقة",
    recipientLabel: "اسم المستلم",
    senderLabel: "اسم المرسل",
    messageLabel: "نص التهنئة",
    presetsLabel: "عبارات جاهزة سريعة",
    previewTitle: "معاينة البطاقة المباشرة",
    cardStamp: "زماني • Zamani",
    downloadBtn: "تنزيل البطاقة PNG",
    whatsappBtn: "مشاركة عبر واتساب",
    copyBtn: "نسخ النص",
    footerNote: "زماني | Zamani — مواقيت وتقويمات العالم العربي والمناسبات الإسلامية",
    footerDisclaimer:
      "تعتمد المواعيد الهجرية على الحسابات الفلكية وقد تتغير بيوم واحد تبعاً للرؤية المحلية.",
    units: { days: "يوم", hours: "ساعة", mins: "دقيقة", secs: "ثانية" },
    miniUnits: { days: "ي", hours: "س", mins: "د", secs: "ث" },
    recipientPlaceholder: "عائلتي وأصدقائي الأعزاء",
    senderPlaceholder: "أحمد",
    recipientPrefix: "إلى: ",
    senderPrefix: "من: ",
    defaultRecipient: "عائلتي وأحبائي",
    defaultSender: "محبّكم",
    toastCopied: "تم نسخ رسالة التهنئة بنجاح",
    toastDownloaded: "تم تنزيل بطاقة التهنئة بنجاح",
    expectedPrefix: "المتوقع: ",
    gregEndLabel: "31 ديسمبر ",
    hijriEndLabel: "نهاية عام ",
    arrivedNow: "حلّت المناسبة المباركة",
    themeLightLabel: "الوضع النهاري",
    themeDarkLabel: "الوضع الليلي",
  },
  en: {
    brandName: "Zamani | زماني",
    navOccasions: "Islamic Occasions",
    navAcademic: "Academic Calendar",
    navStudio: "Card Studio",
    headerCta: "Create Card",
    heroKicker: "Occasions & Academic Companion",
    heroTitle: "Your time across blessed occasions and the academic year",
    heroSubtitle:
      "Track live countdowns for Ramadan and both Eids, explore academic term and year-end timers for all 22 Arab countries, and craft personalized greeting cards in moments.",
    todayLabel: "Today's Date",
    islamicEyebrow: "Hijri Milestones",
    islamicTitle: "Islamic Occasions Live Countdowns",
    islamicDesc:
      "Astronomical planning estimates based on the Umm al-Qura calendar; actual dates may shift by a day with moon sighting.",
    academicEyebrow: "Academic & Annual Timelines",
    academicTitle: "Academic Calendar & Year-End Countdowns",
    academicDesc:
      "Select any of the 22 Arab countries to view live countdowns for the current term, academic year, and calendar year-end.",
    selectCountryLabel: "Select Arab Country (22 Countries)",
    termCardTitle: "End of Current Term",
    yearEndCardKicker: "School & University Cycle",
    yearEndCardTitle: "End of Academic Year",
    gregYearKicker: "Gregorian Calendar",
    gregYearTitle: "End of Gregorian Year",
    hijriYearKicker: "Hijri Calendar",
    hijriYearTitle: "End of Hijri Year",
    studioEyebrow: "Share the Joy",
    studioTitle: "Greeting Card & Message Studio",
    studioDesc:
      "Choose an occasion and card style, customize your greeting or pick a quick preset, then download as PNG or share directly.",
    cardOccasionLabel: "Occasion",
    cardThemeLabel: "Card Theme",
    recipientLabel: "Recipient Name",
    senderLabel: "Sender Name",
    messageLabel: "Greeting Message",
    presetsLabel: "Quick Preset Phrases",
    previewTitle: "Live Card Preview",
    cardStamp: "Zamani • زماني",
    downloadBtn: "Download PNG",
    whatsappBtn: "Share on WhatsApp",
    copyBtn: "Copy Text",
    footerNote: "Zamani | زماني — Arab World Academic Calendars & Islamic Occasions",
    footerDisclaimer:
      "Hijri dates reflect astronomical estimates and may vary by one day based on local moon sighting.",
    units: { days: "Days", hours: "Hours", mins: "Mins", secs: "Secs" },
    miniUnits: { days: "D", hours: "H", mins: "M", secs: "S" },
    recipientPlaceholder: "Dear Family & Friends",
    senderPlaceholder: "Ahmad",
    recipientPrefix: "To: ",
    senderPrefix: "From: ",
    defaultRecipient: "Dear Loved Ones",
    defaultSender: "Warm Wishes",
    toastCopied: "Greeting message copied to clipboard",
    toastDownloaded: "Greeting card PNG downloaded",
    expectedPrefix: "Expected: ",
    gregEndLabel: "December 31, ",
    hijriEndLabel: "End of ",
    arrivedNow: "Occasion has arrived",
    themeLightLabel: "Light",
    themeDarkLabel: "Dark",
  },
  hi: {
    brandName: "ज़मानी | Zamani",
    navOccasions: "इस्लामी अवसर",
    navAcademic: "शैक्षणिक कैलेंडर",
    navStudio: "कार्ड स्टूडियो",
    headerCta: "कार्ड बनाएं",
    heroKicker: "इस्लामी अवसर और शैक्षणिक कैलेंडर",
    heroTitle: "मुबारक अवसरों और शैक्षणिक वर्ष के साथ आपका समय",
    heroSubtitle:
      "रमज़ान और दोनों ईदों का लाइव काउंटडाउन देखें, सभी 22 अरब देशों के शैक्षणिक सत्र और वर्ष-अंत टाइमर ट्रैक करें, और सुंदर शुभकामना कार्ड बनाएं।",
    todayLabel: "आज की तारीख",
    islamicEyebrow: "हिजरी कैलेंडर",
    islamicTitle: "इस्लामी अवसरों का लाइव काउंटडाउन",
    islamicDesc:
      "उम्म अल-क़ुरा कैलेंडर पर आधारित अनुमानित खगोलीय तिथियां; चांद दिखने के अनुसार तिथि में एक दिन का अंतर हो सकता है।",
    academicEyebrow: "शैक्षणिक और वार्षिक समयरेखा",
    academicTitle: "अरब देशों का शैक्षणिक और वर्ष-अंत कैलेंडर",
    academicDesc:
      "वर्तमान सत्र, शैक्षणिक वर्ष और वर्ष के अंत का लाइव काउंटडाउन देखने के लिए 22 अरब देशों में से कोई भी देश चुनें।",
    selectCountryLabel: "अरब देश चुनें (22 देश)",
    termCardTitle: "वर्तमान सत्र की समाप्ति",
    yearEndCardKicker: "स्कूल और विश्वविद्यालय चक्र",
    yearEndCardTitle: "शैक्षणिक वर्ष की समाप्ति",
    gregYearKicker: "ग्रेगोरियन कैलेंडर",
    gregYearTitle: "ग्रेगोरियन वर्ष की समाप्ति",
    hijriYearKicker: "हिजरी कैलेंडर",
    hijriYearTitle: "हिजरी वर्ष की समाप्ति",
    studioEyebrow: "खुशियाँ बाँटें",
    studioTitle: "शुभकामना कार्ड और संदेश स्टूडियो",
    studioDesc:
      "अवसर और कार्ड डिज़ाइन चुनें, अपना संदेश लिखें या त्वरित संदेश चुनें, फिर PNG डाउनलोड करें या सीधे साझा करें।",
    cardOccasionLabel: "अवसर",
    cardThemeLabel: "कार्ड डिज़ाइन",
    recipientLabel: "प्राप्तकर्ता का नाम",
    senderLabel: "प्रेषक का नाम",
    messageLabel: "शुभकामना संदेश",
    presetsLabel: "त्वरित संदेश चुनें",
    previewTitle: "लाइव कार्ड पूर्वावलोकन",
    cardStamp: "ज़मानी • Zamani",
    downloadBtn: "PNG डाउनलोड करें",
    whatsappBtn: "व्हाट्सऐप पर साझा करें",
    copyBtn: "संदेश कॉपी करें",
    footerNote: "ज़मानी | Zamani — अरब विश्व शैक्षणिक कैलेंडर और इस्लामी अवसर",
    footerDisclaimer:
      "हिजरी तिथियां खगोलीय अनुमान पर आधारित हैं और स्थानीय चांद दिखने पर एक दिन बदल सकती हैं।",
    units: { days: "दिन", hours: "घंटे", mins: "मिनट", secs: "सेकंड" },
    miniUnits: { days: "दि", hours: "घं", mins: "मि", secs: "से" },
    recipientPlaceholder: "प्रिय परिवार और मित्र",
    senderPlaceholder: "अहमद",
    recipientPrefix: "प्रति: ",
    senderPrefix: "प्रेषक: ",
    defaultRecipient: "प्रियजन",
    defaultSender: "शुभेच्छु",
    toastCopied: "शुभकामना संदेश क्लिपबोर्ड पर कॉपी हो गया",
    toastDownloaded: "शुभकामना कार्ड PNG डाउनलोड हो गया",
    expectedPrefix: "अनुमानित: ",
    gregEndLabel: "31 दिसंबर ",
    hijriEndLabel: "वर्ष समाप्ति ",
    arrivedNow: "मुबारक अवसर आ गया है",
    themeLightLabel: "लाइट",
    themeDarkLabel: "डार्क",
  },
};

export const ISLAMIC_OCCASIONS_DATA: IslamicOccasion[] = [
  {
    id: "ramadan",
    accent: "emerald",
    icon: "moon",
    title: { ar: "شهر رمضان المبارك", en: "Ramadan", hi: "रमज़ान का मुबारक महीना" },
    occurrences: [
      {
        hijri: { ar: "١ رمضان ١٤٤٨ هـ", en: "1 Ramadan 1448 AH", hi: "1 रमज़ान 1448 हिजरी" },
        targetISO: "2027-02-08T00:00:00+03:00",
      },
      {
        hijri: { ar: "١ رمضان ١٤٤٩ هـ", en: "1 Ramadan 1449 AH", hi: "1 रमज़ान 1449 हिजरी" },
        targetISO: "2028-01-28T00:00:00+03:00",
      },
    ],
  },
  {
    id: "fitr",
    accent: "gold",
    icon: "sparkles",
    title: { ar: "عيد الفطر المبارك", en: "Eid al-Fitr", hi: "ईद-उल-फ़ित्र" },
    occurrences: [
      {
        hijri: { ar: "١ شوال ١٤٤٨ هـ", en: "1 Shawwal 1448 AH", hi: "1 शव्वाल 1448 हिजरी" },
        targetISO: "2027-03-09T00:00:00+03:00",
      },
      {
        hijri: { ar: "١ شوال ١٤٤٩ هـ", en: "1 Shawwal 1449 AH", hi: "1 शव्वाल 1449 हिजरी" },
        targetISO: "2028-02-26T00:00:00+03:00",
      },
    ],
  },
  {
    id: "adha",
    accent: "plum",
    icon: "sun",
    title: { ar: "عيد الأضحى المبارك", en: "Eid al-Adha", hi: "ईद-उल-अज़हा" },
    occurrences: [
      {
        hijri: { ar: "١٠ ذو الحجة ١٤٤٨ هـ", en: "10 Dhu al-Hijjah 1448 AH", hi: "10 ज़ुल-हिज्जा 1448 हिजरी" },
        targetISO: "2027-05-16T00:00:00+03:00",
      },
      {
        hijri: { ar: "١٠ ذو الحجة ١٤٤٩ هـ", en: "10 Dhu al-Hijjah 1449 AH", hi: "10 ज़ुल-हिज्जा 1449 हिजरी" },
        targetISO: "2028-05-05T00:00:00+03:00",
      },
    ],
  },
];

export const HIJRI_YEAR_ENDS: Array<{ yearLabel: LocalizedText; endISO: string }> = [
  {
    yearLabel: { ar: "١٤٤٨ هـ", en: "1448 AH", hi: "1448 हिजरी" },
    endISO: "2027-06-05T23:59:59+03:00",
  },
  {
    yearLabel: { ar: "١٤٤٩ هـ", en: "1449 AH", hi: "1449 हिजरी" },
    endISO: "2028-05-24T23:59:59+03:00",
  },
];

export const ARAB_COUNTRIES_DATA: ArabCountry[] = [
  {
    code: "SA",
    flag: "🇸🇦",
    quick: true,
    name: { ar: "المملكة العربية السعودية", en: "Saudi Arabia", hi: "सऊदी अरब" },
    system: { ar: "نظام الفصلين الدراسيين (١٤٤٨–١٤٤٩ هـ)", en: "Two-Semester MOE System (2026–2027)", hi: "द्वि-सत्र प्रणाली (2026–2027)" },
    terms: [
      { label: { ar: "الفصل الدراسي الأول", en: "First Semester", hi: "प्रथम सत्र" }, endISO: "2027-01-07T16:00:00+03:00" },
      { label: { ar: "الفصل الدراسي الثاني", en: "Second Semester", hi: "द्वितीय सत्र" }, endISO: "2027-06-24T16:00:00+03:00" },
    ],
    academicYearEndISO: "2027-06-24T16:00:00+03:00",
  },
  {
    code: "AE",
    flag: "🇦🇪",
    quick: true,
    name: { ar: "الإمارات العربية المتحدة", en: "United Arab Emirates", hi: "संयुक्त अरब अमीरात" },
    system: { ar: "نظام الفصول الثلاثة (٢٠٢٦–٢٠٢٧)", en: "Three-Term MOE Calendar (2026–2027)", hi: "त्रि-सत्र प्रणाली (2026–2027)" },
    terms: [
      { label: { ar: "الفصل الدراسي الأول", en: "Term 1", hi: "प्रथम सत्र" }, endISO: "2026-12-11T15:00:00+04:00" },
      { label: { ar: "الفصل الدراسي الثاني", en: "Term 2", hi: "द्वितीय सत्र" }, endISO: "2027-04-02T15:00:00+04:00" },
      { label: { ar: "الفصل الدراسي الثالث", en: "Term 3", hi: "तृतीय सत्र" }, endISO: "2027-07-02T15:00:00+04:00" },
    ],
    academicYearEndISO: "2027-07-02T15:00:00+04:00",
  },
  {
    code: "EG",
    flag: "🇪🇬",
    quick: true,
    name: { ar: "مصر", en: "Egypt", hi: "मिस्र" },
    system: { ar: "نظام الفصلين الدراسيين (٢٠٢٦–٢٠٢٧)", en: "Two-Semester Calendar (2026–2027)", hi: "द्वि-सत्र प्रणाली (2026–2027)" },
    terms: [
      { label: { ar: "الفصل الدراسي الأول", en: "First Semester", hi: "प्रथम सत्र" }, endISO: "2027-01-21T15:00:00+02:00" },
      { label: { ar: "الفصل الدراسي الثاني", en: "Second Semester", hi: "द्वितीय सत्र" }, endISO: "2027-06-10T15:00:00+02:00" },
    ],
    academicYearEndISO: "2027-06-10T15:00:00+02:00",
  },
  {
    code: "JO",
    flag: "🇯🇴",
    quick: true,
    name: { ar: "الأردن", en: "Jordan", hi: "जॉर्डन" },
    system: { ar: "نظام الفصلين الدراسيين (٢٠٢٦–٢٠٢٧)", en: "Two-Semester MOE System (2026–2027)", hi: "द्वि-सत्र प्रणाली (2026–2027)" },
    terms: [
      { label: { ar: "الفصل الدراسي الأول", en: "First Semester", hi: "प्रथम सत्र" }, endISO: "2027-01-04T15:00:00+03:00" },
      { label: { ar: "الفصل الدراسي الثاني", en: "Second Semester", hi: "द्वितीय सत्र" }, endISO: "2027-06-20T15:00:00+03:00" },
    ],
    academicYearEndISO: "2027-06-20T15:00:00+03:00",
  },
  {
    code: "QA",
    flag: "🇶🇦",
    quick: true,
    name: { ar: "قطر", en: "Qatar", hi: "क़तर" },
    system: { ar: "نظام الفصلين الدراسيين (٢٠٢٦–٢٠٢٧)", en: "Two-Semester MOEHE Calendar (2026–2027)", hi: "द्वि-सत्र प्रणाली (2026–2027)" },
    terms: [
      { label: { ar: "الفصل الدراسي الأول", en: "First Semester", hi: "प्रथम सत्र" }, endISO: "2026-12-17T14:30:00+03:00" },
      { label: { ar: "الفصل الدراسي الثاني", en: "Second Semester", hi: "द्वितीय सत्र" }, endISO: "2027-06-17T14:30:00+03:00" },
    ],
    academicYearEndISO: "2027-06-17T14:30:00+03:00",
  },
  {
    code: "KW",
    flag: "🇰🇼",
    quick: false,
    name: { ar: "الكويت", en: "Kuwait", hi: "कुवैत" },
    system: { ar: "نظام الفصلين الدراسيين (٢٠٢٦–٢٠٢٧)", en: "Two-Semester MOE System (2026–2027)", hi: "द्वि-सत्र प्रणाली (2026–2027)" },
    terms: [
      { label: { ar: "الفصل الدراسي الأول", en: "First Semester", hi: "प्रथम सत्र" }, endISO: "2027-01-21T14:30:00+03:00" },
      { label: { ar: "الفصل الدراسي الثاني", en: "Second Semester", hi: "द्वितीय सत्र" }, endISO: "2027-06-17T14:30:00+03:00" },
    ],
    academicYearEndISO: "2027-06-17T14:30:00+03:00",
  },
  {
    code: "BH",
    flag: "🇧🇭",
    quick: false,
    name: { ar: "البحرين", en: "Bahrain", hi: "बहरीन" },
    system: { ar: "نظام الفصلين الدراسيين (٢٠٢٦–٢٠٢٧)", en: "Two-Semester MOE Calendar (2026–2027)", hi: "द्वि-सत्र प्रणाली (2026–2027)" },
    terms: [
      { label: { ar: "الفصل الدراسي الأول", en: "First Semester", hi: "प्रथम सत्र" }, endISO: "2027-01-14T14:30:00+03:00" },
      { label: { ar: "الفصل الدراسي الثاني", en: "Second Semester", hi: "द्वितीय सत्र" }, endISO: "2027-06-24T14:30:00+03:00" },
    ],
    academicYearEndISO: "2027-06-24T14:30:00+03:00",
  },
  {
    code: "OM",
    flag: "🇴🇲",
    quick: false,
    name: { ar: "عُمان", en: "Oman", hi: "ओमान" },
    system: { ar: "نظام الفصلين الدراسيين (٢٠٢٦–٢٠٢٧)", en: "Two-Semester MOE Calendar (2026–2027)", hi: "द्वि-सत्र प्रणाली (2026–2027)" },
    terms: [
      { label: { ar: "الفصل الدراسي الأول", en: "First Semester", hi: "प्रथम सत्र" }, endISO: "2027-01-21T14:30:00+04:00" },
      { label: { ar: "الفصل الدراسي الثاني", en: "Second Semester", hi: "द्वितीय सत्र" }, endISO: "2027-06-24T14:30:00+04:00" },
    ],
    academicYearEndISO: "2027-06-24T14:30:00+04:00",
  },
  {
    code: "MA",
    flag: "🇲🇦",
    quick: true,
    name: { ar: "المغرب", en: "Morocco", hi: "मोरक्को" },
    system: { ar: "الأسدوس الأول والثاني (٢٠٢٦–٢٠٢٧)", en: "Two-Semester System (2026–2027)", hi: "द्वि-सत्र प्रणाली (2026–2027)" },
    terms: [
      { label: { ar: "الأسدوس الأول", en: "First Semester", hi: "प्रथम सत्र" }, endISO: "2027-01-23T17:00:00+01:00" },
      { label: { ar: "الأسدوس الثاني", en: "Second Semester", hi: "द्वितीय सत्र" }, endISO: "2027-06-26T17:00:00+01:00" },
    ],
    academicYearEndISO: "2027-06-26T17:00:00+01:00",
  },
  {
    code: "DZ",
    flag: "🇩🇿",
    quick: false,
    name: { ar: "الجزائر", en: "Algeria", hi: "अल्जीरिया" },
    system: { ar: "نظام الفصول الثلاثة (٢٠٢٦–٢٠٢٧)", en: "Three-Term Calendar (2026–2027)", hi: "त्रि-सत्र प्रणाली (2026–2027)" },
    terms: [
      { label: { ar: "الفصل الدراسي الأول", en: "Term 1", hi: "प्रथम सत्र" }, endISO: "2026-12-17T16:30:00+01:00" },
      { label: { ar: "الفصل الدراسي الثاني", en: "Term 2", hi: "द्वितीय सत्र" }, endISO: "2027-03-18T16:30:00+01:00" },
      { label: { ar: "الفصل الدراسي الثالث", en: "Term 3", hi: "तृतीय सत्र" }, endISO: "2027-06-24T16:30:00+01:00" },
    ],
    academicYearEndISO: "2027-06-24T16:30:00+01:00",
  },
  {
    code: "TN",
    flag: "🇹🇳",
    quick: false,
    name: { ar: "تونس", en: "Tunisia", hi: "ट्यूनीशिया" },
    system: { ar: "نظام الثلاثيات (٢٠٢٦–٢٠٢٧)", en: "Three-Trimester Calendar (2026–2027)", hi: "त्रि-सत्र प्रणाली (2026–2027)" },
    terms: [
      { label: { ar: "الثلاثي الأول", en: "Trimester 1", hi: "प्रथम सत्र" }, endISO: "2026-12-19T16:30:00+01:00" },
      { label: { ar: "الثلاثي الثاني", en: "Trimester 2", hi: "द्वितीय सत्र" }, endISO: "2027-03-20T16:30:00+01:00" },
      { label: { ar: "الثلاثي الثالث", en: "Trimester 3", hi: "तृतीय सत्र" }, endISO: "2027-06-30T16:30:00+01:00" },
    ],
    academicYearEndISO: "2027-06-30T16:30:00+01:00",
  },
  {
    code: "IQ",
    flag: "🇮🇶",
    quick: false,
    name: { ar: "العراق", en: "Iraq", hi: "इराक" },
    system: { ar: "نظام الكورسات / الفصلين (٢٠٢٦–٢٠٢٧)", en: "Two-Semester Calendar (2026–2027)", hi: "द्वि-सत्र प्रणाली (2026–2027)" },
    terms: [
      { label: { ar: "الفصل الدراسي الأول", en: "First Semester", hi: "प्रथम सत्र" }, endISO: "2027-01-28T15:00:00+03:00" },
      { label: { ar: "الفصل الدراسي الثاني", en: "Second Semester", hi: "द्वितीय सत्र" }, endISO: "2027-06-15T15:00:00+03:00" },
    ],
    academicYearEndISO: "2027-06-15T15:00:00+03:00",
  },
  {
    code: "LB",
    flag: "🇱🇧",
    quick: false,
    name: { ar: "لبنان", en: "Lebanon", hi: "लेबनान" },
    system: { ar: "نظام الفصول الثلاثة / الفصلين (٢٠٢٦–٢٠٢٧)", en: "Academic Calendar (2026–2027)", hi: "शैक्षणिक कैलेंडर (2026–2027)" },
    terms: [
      { label: { ar: "الفصل الدراسي الأول", en: "Term 1", hi: "प्रथम सत्र" }, endISO: "2026-12-22T15:00:00+02:00" },
      { label: { ar: "الفصل الدراسي الثاني", en: "Term 2", hi: "द्वितीय सत्र" }, endISO: "2027-03-25T15:00:00+02:00" },
      { label: { ar: "الفصل الدراسي الثالث", en: "Term 3", hi: "तृतीय सत्र" }, endISO: "2027-06-25T15:00:00+03:00" },
    ],
    academicYearEndISO: "2027-06-25T15:00:00+03:00",
  },
  {
    code: "PS",
    flag: "🇵🇸",
    quick: false,
    name: { ar: "فلسطين", en: "Palestine", hi: "फ़िलिस्तीन" },
    system: { ar: "نظام الفصلين الدراسيين (٢٠٢٦–٢٠٢٧)", en: "Two-Semester Calendar (2026–2027)", hi: "द्वि-सत्र प्रणाली (2026–2027)" },
    terms: [
      { label: { ar: "الفصل الدراسي الأول", en: "First Semester", hi: "प्रथम सत्र" }, endISO: "2027-01-12T15:00:00+02:00" },
      { label: { ar: "الفصل الدراسي الثاني", en: "Second Semester", hi: "द्वितीय सत्र" }, endISO: "2027-06-10T15:00:00+03:00" },
    ],
    academicYearEndISO: "2027-06-10T15:00:00+03:00",
  },
  {
    code: "SY",
    flag: "🇸🇾",
    quick: false,
    name: { ar: "سوريا", en: "Syria", hi: "सीरिया" },
    system: { ar: "نظام الفصلين الدراسيين (٢٠٢٦–٢٠٢٧)", en: "Two-Semester Calendar (2026–2027)", hi: "द्वि-सत्र प्रणाली (2026–2027)" },
    terms: [
      { label: { ar: "الفصل الدراسي الأول", en: "First Semester", hi: "प्रथम सत्र" }, endISO: "2027-01-14T15:00:00+03:00" },
      { label: { ar: "الفصل الدراسي الثاني", en: "Second Semester", hi: "द्वितीय सत्र" }, endISO: "2027-06-03T15:00:00+03:00" },
    ],
    academicYearEndISO: "2027-06-03T15:00:00+03:00",
  },
  {
    code: "YE",
    flag: "🇾🇪",
    quick: false,
    name: { ar: "اليمن", en: "Yemen", hi: "यमन" },
    system: { ar: "نظام الفصلين الدراسيين (٢٠٢٦–٢٠٢٧)", en: "Two-Semester Calendar (2026–2027)", hi: "द्वि-सत्र प्रणाली (2026–2027)" },
    terms: [
      { label: { ar: "الفصل الدراسي الأول", en: "First Semester", hi: "प्रथम सत्र" }, endISO: "2027-01-07T14:00:00+03:00" },
      { label: { ar: "الفصل الدراسي الثاني", en: "Second Semester", hi: "द्वितीय सत्र" }, endISO: "2027-05-27T14:00:00+03:00" },
    ],
    academicYearEndISO: "2027-05-27T14:00:00+03:00",
  },
  {
    code: "LY",
    flag: "🇱🇾",
    quick: false,
    name: { ar: "ليبيا", en: "Libya", hi: "लीबिया" },
    system: { ar: "نظام الفصلين الدراسيين (٢٠٢٦–٢٠٢٧)", en: "Two-Semester Calendar (2026–2027)", hi: "द्वि-सत्र प्रणाली (2026–2027)" },
    terms: [
      { label: { ar: "الفصل الدراسي الأول", en: "First Semester", hi: "प्रथम सत्र" }, endISO: "2027-01-21T15:00:00+02:00" },
      { label: { ar: "الفصل الدراسي الثاني", en: "Second Semester", hi: "द्वितीय सत्र" }, endISO: "2027-06-17T15:00:00+02:00" },
    ],
    academicYearEndISO: "2027-06-17T15:00:00+02:00",
  },
  {
    code: "SD",
    flag: "🇸🇩",
    quick: false,
    name: { ar: "السودان", en: "Sudan", hi: "सूडान" },
    system: { ar: "نظام الفترتين الدراسيتين (٢٠٢٦–٢٠٢٧)", en: "Two-Term Calendar (2026–2027)", hi: "द्वि-सत्र प्रणाली (2026–2027)" },
    terms: [
      { label: { ar: "الفترة الدراسية الأولى", en: "First Term", hi: "प्रथम सत्र" }, endISO: "2027-01-28T15:00:00+02:00" },
      { label: { ar: "الفترة الدراسية الثانية", en: "Second Term", hi: "द्वितीय सत्र" }, endISO: "2027-06-20T15:00:00+02:00" },
    ],
    academicYearEndISO: "2027-06-20T15:00:00+02:00",
  },
  {
    code: "MR",
    flag: "🇲🇷",
    quick: false,
    name: { ar: "موريتانيا", en: "Mauritania", hi: "मॉरिटानिया" },
    system: { ar: "نظام الفصول الثلاثة (٢٠٢٦–٢٠٢٧)", en: "Three-Term Calendar (2026–2027)", hi: "त्रि-सत्र प्रणाली (2026–2027)" },
    terms: [
      { label: { ar: "الفصل الدراسي الأول", en: "Term 1", hi: "प्रथम सत्र" }, endISO: "2026-12-24T16:00:00+00:00" },
      { label: { ar: "الفصل الدراسي الثاني", en: "Term 2", hi: "द्वितीय सत्र" }, endISO: "2027-03-26T16:00:00+00:00" },
      { label: { ar: "الفصل الدراسي الثالث", en: "Term 3", hi: "तृतीय सत्र" }, endISO: "2027-06-30T16:00:00+00:00" },
    ],
    academicYearEndISO: "2027-06-30T16:00:00+00:00",
  },
  {
    code: "SO",
    flag: "🇸🇴",
    quick: false,
    name: { ar: "الصومال", en: "Somalia", hi: "सोमालिया" },
    system: { ar: "نظام الفصلين الدراسيين (٢٠٢٦–٢٠٢٧)", en: "Two-Semester Calendar (2026–2027)", hi: "द्वि-सत्र प्रणाली (2026–2027)" },
    terms: [
      { label: { ar: "الفصل الدراسي الأول", en: "First Semester", hi: "प्रथम सत्र" }, endISO: "2027-01-14T15:00:00+03:00" },
      { label: { ar: "الفصل الدراسي الثاني", en: "Second Semester", hi: "द्वितीय सत्र" }, endISO: "2027-06-15T15:00:00+03:00" },
    ],
    academicYearEndISO: "2027-06-15T15:00:00+03:00",
  },
  {
    code: "DJ",
    flag: "🇩🇯",
    quick: false,
    name: { ar: "جيبوتي", en: "Djibouti", hi: "जिबूती" },
    system: { ar: "نظام الثلاثيات (٢٠٢٦–٢٠٢٧)", en: "Three-Trimester Calendar (2026–2027)", hi: "त्रि-सत्र प्रणाली (2026–2027)" },
    terms: [
      { label: { ar: "الثلاثي الأول", en: "Trimester 1", hi: "प्रथम सत्र" }, endISO: "2026-12-17T15:00:00+03:00" },
      { label: { ar: "الثلاثي الثاني", en: "Trimester 2", hi: "द्वितीय सत्र" }, endISO: "2027-03-18T15:00:00+03:00" },
      { label: { ar: "الثلاثي الثالث", en: "Trimester 3", hi: "तृतीय सत्र" }, endISO: "2027-06-24T15:00:00+03:00" },
    ],
    academicYearEndISO: "2027-06-24T15:00:00+03:00",
  },
  {
    code: "KM",
    flag: "🇰🇲",
    quick: false,
    name: { ar: "جزر القمر", en: "Comoros", hi: "कोमोरोस" },
    system: { ar: "نظام الثلاثيات (٢٠٢٦–٢٠٢٧)", en: "Three-Trimester Calendar (2026–2027)", hi: "त्रि-सत्र प्रणाली (2026–2027)" },
    terms: [
      { label: { ar: "الثلاثي الأول", en: "Trimester 1", hi: "प्रथम सत्र" }, endISO: "2026-12-18T15:00:00+03:00" },
      { label: { ar: "الثلاثي الثاني", en: "Trimester 2", hi: "द्वितीय सत्र" }, endISO: "2027-03-26T15:00:00+03:00" },
      { label: { ar: "الثلاثي الثالث", en: "Trimester 3", hi: "तृतीय सत्र" }, endISO: "2027-07-09T15:00:00+03:00" },
    ],
    academicYearEndISO: "2027-07-09T15:00:00+03:00",
  },
];

export const CARD_THEMES: Array<{ id: CardThemeId; color: string; label: LocalizedText }> = [
  { id: "emerald", color: "#0f6b5b", label: { ar: "زمردي ذهبي", en: "Emerald & Gold", hi: "पन्ना और स्वर्ण" } },
  { id: "ivory", color: "#f3ead8", label: { ar: "عاجي كلاسيكي", en: "Warm Ivory", hi: "हल्का आइवरी" } },
  { id: "midnight", color: "#152036", label: { ar: "ليلي مرصع", en: "Midnight Sky", hi: "मिडनाइट स्काई" } },
  { id: "sand", color: "#d8c9b4", label: { ar: "رملي هادئ", en: "Desert Sand", hi: "रेगिस्तानी रेत" } },
];

export const CARD_OCCASIONS: Record<
  CardOccasionKey,
  { tag: LocalizedText; presets: Record<Language, string[]> }
> = {
  ramadan: {
    tag: { ar: "رمضان مبارك", en: "Ramadan Mubarak", hi: "रमज़ान मुबारक" },
    presets: {
      ar: [
        "مبارك عليكم الشهر الكريم، أعاده الله علينا وعليكم بالخير واليُمن والبركات وتقبل الله طاعاتكم.",
        "نسأل الله أن يبلغنا وإياكم رمضان لا فاقدين ولا مفقودين، وأن يرزقكم فيه القبول والطمأنينة.",
        "رمضان كريم! جعله الله شهر رحمة ومغفرة وعتق من النار لكم ولأحبابكم.",
      ],
      en: [
        "Ramadan Mubarak! May this blessed month bring peace, light, and abundant blessings to your home.",
        "Wishing you and your family a serene and joyful Ramadan filled with gratitude and answered prayers.",
        "May the crescent of Ramadan illuminate your heart with tranquility, faith, and endless grace.",
      ],
      hi: [
        "रमज़ान मुबारक! ईश्वर करे यह पवित्र महीना आपके घर में शांति, खुशियां और बरकत लेकर आए।",
        "आपको और आपके परिवार को रमज़ान की हार्दिक शुभकामनाएं, ईश्वर आपकी सभी दुआएं कुबूल करे।",
        "रमज़ान करीम! यह पाक महीना आपके जीवन को सुकून, रहमत और खुशहाली से भर दे।",
      ],
    },
  },
  fitr: {
    tag: { ar: "عيد فطر سعيد", en: "Eid al-Fitr Mubarak", hi: "ईद-उल-फ़ित्र मुबारक" },
    presets: {
      ar: [
        "تقبّل الله منا ومنكم صالح الأعمال، وكل عام وأنتم بخير وعيدكم مبارك.",
        "عيد فطر سعيد! أدام الله عليكم أعيادكم دهوراً، وأسعد قلوبكم بكل ما تتمنون.",
        "من القلب أهنئكم بعيد الفطر المبارك، جعله الله عيد فرح وسلام لكم ولعائلتكم.",
      ],
      en: [
        "Eid Mubarak! May your days be filled with warmth, gratitude, and joyful moments with loved ones.",
        "Taqabbal Allahu minna wa minkum. Wishing you a blessed Eid al-Fitr and a year of peace and prosperity.",
        "Sending heartfelt wishes on Eid al-Fitr for happiness, good health, and lasting blessings.",
      ],
      hi: [
        "ईद मुबारक! ईश्वर आपकी इबादत कुबूल करे और आपका जीवन खुशियों और शांति से भर दे।",
        "ईद-उल-फ़ित्र की ढेरों शुभकामनाएं! यह त्योहार आपके और आपके अपनों के लिए सुख-समृद्धि लाए।",
        "दिल से ईद मुबारक! खुश रहें, मुस्कुराते रहें और अपनों के साथ इस मुबारक दिन का आनंद लें।",
      ],
    },
  },
  adha: {
    tag: { ar: "عيد أضحى مبارك", en: "Eid al-Adha Mubarak", hi: "ईद-उल-अज़हा मुबारक" },
    presets: {
      ar: [
        "كل عام وأنتم إلى الله أقرب، عيد أضحى مبارك عليكم وعلى أحبابكم بالخير والسعادة.",
        "أهنئكم بحلول عيد الأضحى المبارك، أعاده الله عليكم بالصحة والعافية والبركة.",
        "عيدكم مبارك وعساكم من عواده، تقبّل الله طاعاتكم وملأ أيامكم سعادة.",
      ],
      en: [
        "Eid al-Adha Mubarak! May your devotion and kindness be rewarded with peace and endless joy.",
        "Wishing you and your family a blessed Eid al-Adha filled with unity, faith, and gratitude.",
        "May this sacred Eid bring harmony, good health, and cherished memories to your home.",
      ],
      hi: [
        "ईद-उल-अज़हा मुबारक! यह पावन अवसर आपके जीवन में सद्भाव, शांति और खुशियां लेकर आए।",
        "आपको और आपके पूरे परिवार को बकरीद की हार्दिक शुभकामनाएं, ईश्वर आप पर अपनी कृपा बनाए रखे।",
        "ईद मुबारक! अपार खुशियों, अच्छे स्वास्थ्य और बरकत की कामना के साथ।",
      ],
    },
  },
  newyear: {
    tag: { ar: "عام جديد سعيد", en: "Happy New Year", hi: "नव वर्ष की शुभकामनाएं" },
    presets: {
      ar: [
        "كل عام وأنتم بخير! عام جديد سعيد يحمل لكم النجاح والتوفيق وتحقيق الأمنيات.",
        "مع إشراقة العام الجديد، أتمنى لكم ولعائلتكم أياماً مليئة بالصحة والسكينة والإنجاز.",
        "وداعاً لعام مضى، وأهلاً بعام جديد يزهر فيه الأمل والفرح في حياتكم.",
      ],
      en: [
        "Happy New Year! Wishing you a bright chapter ahead filled with health, clarity, and meaningful success.",
        "As the year turns, may every day ahead bring peace, growth, and joyful moments to you and yours.",
        "Warmest wishes for a wonderful year-end and a flourishing, blessed new year ahead.",
      ],
      hi: [
        "नया साल मुबारक! आने वाला वर्ष आपके लिए सफलता, अच्छा स्वास्थ्य और ढेर सारी खुशियाँ लेकर आए।",
        "नए साल की सुबह आपके जीवन में नई उम्मीदें, शांति और तरक्की के नए अवसर लाए।",
        "वर्ष के इस सुंदर मोड़ पर आपको और आपके परिवार को अनंत शुभकामनाएं!",
      ],
    },
  },
};
