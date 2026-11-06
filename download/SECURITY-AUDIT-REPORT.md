# Herbs Milanos — تقرير المراجعة الأمنية والبرمجية
**التاريخ:** 2026-11-06
**النطاق:** كود الموقع الكامل (src/, .env, next.config.ts, package.json)

---

## ملخص تنفيذي

تم فحص الموقع بشكل منهجي ووجدت **5 أخطاء برمجية حرجة** + **3 ثغرات أمنية متوسطة/عالية** + **32 ثغرة في الـ dependencies** (منها 2 critical، 19 high). معظم الأخطاء البرمجية ناتجة عن نظام الترجمة المزدوج (translations.ts و translations/ folder) وعن أكواد قديمة لم تُحذف.

---

## 🔴 أخطاء برمجية حرجة (Critical Programming Bugs)

### 1. `t.lang` غير موجود في الـ Dictionary — خطأ runtime في نموذج Contact

**الملف:** `src/app/contact/page.tsx:71`
```ts
const { t } = useLanguage();
// …
toast.error(t.lang === "ar" ? "يرجى ملء الحقول المطلوبة" : "Please fill required fields");
```

**المشكلة:**
- `useLanguage()` يُرجع `{ lang, setLang, t, dir }`
- لكن الكود يستدعي `t.lang` — وهذا غير موجود على `t` (الـ Dictionary)
- النتيجة: `t.lang === "ar"` دائمًا `false` → الرسالة دائمًا بالإنجليزية حتى لو المستخدم اختار العربية

**الإصلاح:**
```ts
const { t, lang } = useLanguage();
// …
toast.error(lang === "ar" ? "يرجى ملء الحقول المطلوبة" : "Please fill required fields");
```

---

### 2. استدعاء `t("key")` كـ function بينما `t` هو object — 30 استدعاء مكسور

**الملف:** `src/components/site/contact-cta.tsx` (30 استدعاء)

**المشكلة:**
- في `LanguageContext`, `t` هو dictionary object (مش function)
- لكن `contact-cta.tsx` بيستخدم `t("contact.chip")`, `t("contact.heading")`, `t("contact.form.error")`, ... إلخ
- النتيجة: كل القيم تُرجع `undefined` → لا يظهر أي نص في الـ component

**لماذا لم يظهر خطأ في الـ build؟**
لأن `typescript.ignoreBuildErrors: true` في `next.config.ts` — يقمع كل أخطاء TypeScript.

**الإصلاح:**
- إما تعديل `contact-cta.tsx` ليستخدم `t.contact.chip`, `t.contact.heading` (nested)
- أو إضافة دالة `t()` في `LanguageContext` تبحث بالـ dot notation
- **ملاحظة:** `ContactCta` مش مستخدم في أي صفحة حالياً (لا يوجد import له), فالمشكلة **كامنة** بس مش ظاهرة للمستخدم

---

### 3. كود مكسور/ميت في `catalog.tsx` — `import("next/router")` بدون فائدة

**الملف:** `src/components/site/catalog.tsx:415`
```ts
onMouseEnter={(e) => {
  const el = e.currentTarget;
  import("next/router").then(() => void el).catch(() => {});
}}
```

**المشكلة:**
- `next/router` هو App Router Pages Router API — **لا يعمل** في App Router
- حتى لو اشتغل، الـ `.then(() => void el)` لا يفعل أي شيء (يطبق `void` على عنصر DOM)
- هذا الكود **مكسور بصمت**: لا يحدث prefetch، ويعرض خطأ في console عند كل hover

**الإصلاح:**
```ts
import { useRouter } from "next/navigation";
// …
const router = useRouter();
onMouseEnter={() => router.prefetch(`/products/${product.id}`)}
```

أو ببساطة احذف الـ `onMouseEnter` بالكامل — Next.js App Router بيعمل prefetch تلقائيًا للـ `<Link>` لما تظهر في viewport.

---

### 4. `try/catch` بيخفي الأخطاء ويعرض "نجاح" كاذب

**الملف:** `src/app/contact/page.tsx:86-93`
```ts
try {
  const res = await fetch("/api/rfq", { ... });
  if (!res.ok) throw new Error("Request failed");
  setForm({ ...initial, product: "" });
  toast.success(t.contact.form.success, { duration: 8000 });
} catch {
  // Fall back gracefully — still confirm to the user
  setForm({ ...initial, product: "" });
  toast.success(t.contact.form.success, { duration: 8000 });  // ⚠️ رسالة نجاح كاذبة!
}
```

**المشكلة:**
- لو الـ fetch فشل (شبكة، server down, API أرجع 500)، الـ catch بيعرض toast.success!
- المستخدم بيفكر إن الـ RFQ اتبعت، لكن في الحقيقة ما اتبعش
- ده مش بس bug في الـ UX، ده **مشكلة أمنية**: بيانات العميل ضاعت بدون notification

**الإصلاح:**
```ts
} catch {
  setSubmitting(false);
  toast.error(lang === "ar" ? "تعذّر إرسال الطلب، حاول مرة أخرى أو راسلنا على واتساب" : "Failed to send. Please try again or contact us on WhatsApp.");
  return; // لا تمسح النموذج!
}
```

---

### 5. نظام ترجمة مزدوج (تكرار + فقدان بيانات)

**المشكلة:**
- `src/i18n/translations.ts` (1019 سطر) — النظام الفعلي المستخدم (nested dictionary)
- `src/i18n/translations/` (مجلد، ~1800 سطر عبر 4 ملفات) — نظام آخر غير مستخدم خالص

**التأثير:**
- 2,830 سطر من كود الترجمة (1,811 سطر غير مستخدم)
- صيانة مستحيلة: لو حد عدّل في `translations/`، التغيير مش هيظهر
- في جلسات سابقة ضيعت وقت في تعديل المجلد الخطأ

**الإصلاح:** احذف `src/i18n/translations/` بالكامل.

---

## 🟠 ثغرات أمنية (Security Vulnerabilities)

### 6. CSRF — لا يوجد Origin validation على `/api/rfq`

**الملف:** `src/app/api/rfq/route.ts`
```ts
export async function POST(req: Request) {
  const data = (await req.json()) as RfqPayload;
  // ← لا يوجد فحص لـ Origin أو CSRF token
  // ← أي site ممكن يبعت POST ويسبب إرسال إيميلات spam
```

**الاختبار:**
```bash
curl -X POST http://localhost:3000/api/rfq \
  -H "Origin: https://evil.com" \
  -H "Content-Type: application/json" \
  -d '{"name":"Spam","email":"victim@x.com", ...}'
# → HTTP 200 (مقبول!) + اتبعت إيميل
```

**التأثير:** مهاجم ممكن يعمل spam attack على `herbs.milanos.eg@gmail.com` (يغرق الإيميل بالـ RFQs الوهمية) أو يستخدم الموقع لإرسال إيميلات لـ arbitrary addresses (لو الـ sender domain اتوثق).

**الإصلاح:**
```ts
const ALLOWED_ORIGINS = ["https://herbsmilanos.space-z.ai", "http://localhost:3000"];

export async function POST(req: Request) {
  const origin = req.headers.get("origin") ?? req.headers.get("referer") ?? "";
  if (!ALLOWED_ORIGINS.some(o => origin.startsWith(o))) {
    return NextResponse.json({ ok: false, error: "Forbidden origin" }, { status: 403 });
  }
  // …
}
```

---

### 7. DoS — لا يوجد حد لحجم الـ payload

**الملف:** `src/app/api/rfq/route.ts`
```ts
const data = (await req.json()) as RfqPayload;  // ⚠️ لا حد للحجم
```

**الاختبار:**
```bash
curl -X POST http://localhost:3000/api/rfq \
  -d '{"name":"'"$(python3 -c 'print("A"*100000)')"'", ...}'
# → HTTP 500 (الـ server عجز عن معالجة الـ payload الضخم)
```

**التأثير:** مهاجم ممكن يبعث payload بحجم 100MB ويستهلك ذاكرة الـ server أو يعمل crash.

**الإصلاح:**
```ts
// Next.js App Router: استخدام NextRequest بدل Request
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  // رفض payloads أكبر من 16KB
  const contentLength = parseInt(req.headers.get("content-length") ?? "0");
  if (contentLength > 16 * 1024) {
    return NextResponse.json({ ok: false, error: "Payload too large" }, { status: 413 });
  }
  // …
}
```

---

### 8. **لا يوجد rate limiting** على `/api/rfq`

**الملف:** `src/app/api/rfq/route.ts:15-17`
```ts
 * Auth: anonymous POST (the form is public). We don't rate-limit here
 * (the front-end already validates required fields); deploy an edge
 * rate-limiter if abuse appears.
```

**المشكلة:** الكود يعترف بنفسه إن مفيش rate limit. أي مهاجم ممكن يعمل آلاف الـ requests/d ويغرق inbox herbs.milanos.eg@gmail.com بإيميلات spam وهمية.

**الإصلاح:**
- استخدم Upstash Ratelimit (Redis-based, free tier)
- أو Vercel Edge Config + KV
- حد معقول: 5 requests/IP/hour

---

## 🟡 ثغرات متوسطة (Medium)

### 9. ثغرات Critical في dependencies

```
npm audit: 32 ثغرة (2 critical, 19 high, 9 moderate, 2 low)
```

**Critical:**
- **`next@16.1.3`** — 3 ثغرات: DoS via Image Optimizer + HTTP request smuggling + DoS in React Server Components
- **`next-auth@4.24.13`** — 3 ثغرات: Email normalizer bypass + getToken crash + OAuth state cookie not bound

**High:**
- `prisma@6.x`, `lodash@4.x`, `lodash-es`, `js-yaml`, `minimatch`, `browserslist`, `brace-expansion`, `defu`, `flatted`, `js-cookie`, `deepmerge-ts`, `effect`

**ملاحظة مهمة:** `next-auth` و `prisma` **مش مستخدمين فعليًا في كود الموقع** (next-auth: لا import في src/. prisma: مستورد في `src/lib/db.ts` بس مفيش أي component/route بيستخدمه). الحل الأمثل: احذفهم من `package.json` كامل — ده هياخد ~50MB من node_modules ويشيل ~10 ثغرات.

**الإصلاح:**
```bash
npm uninstall next-auth prisma @prisma/client
npm audit fix
```

---

### 10. Resend sender = `onboarding@resend.dev` (sandbox)

**الملف:** `.env`
```
RESEND_FROM_EMAIL=onboarding@resend.dev
```

**المشكلة:** الـ buyer auto-confirmation email بيرفض من Resend لأن الـ sender domain مش متحقق منه. الإيميل التأكيدي بيوصل فقط لـ `herbs.milanos.eg@gmail.com` (account owner).

**الإصلاح:** تحقق من نطاق `herbsmilanos.com` في [Resend Dashboard](https://resend.com/domains) وغيّر:
```
RESEND_FROM_EMAIL=noreply@herbsmilanos.com
```

---

### 11. Cookie `sidebar_state` بدون أمان

**الملف:** `src/components/ui/sidebar.tsx:86`
```ts
document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
```

**المشكلة:** Cookie بدون `Secure`، `SameSite=Strict`، `HttpOnly` (رغم إنها client-side cookie من غير بيانات حساسة).

**الإصلاح:**
```ts
document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}; SameSite=Strict; Secure`
```

---

### 12. `next.config.ts` — صور `unoptimized` على كل الصفحات

**الملاحظة:** كل `<Image>` في الموقع بستخدم `unoptimized`:
```
src/app/products/[id]/page.tsx:160
src/app/products/page.tsx:18
src/app/resources/page.tsx:20
src/app/contact/page.tsx:285
src/app/faq/page.tsx:43
```

**التأثير:**
- صور أكبر حجمًا للـ user (موبايل بيحمل نفس صورة الـ desktop)
- أعلى bandwidth consumption
- لا WebP/AVIF conversion
- أداء SEO أضعف (LCP أعلى)

**ملاحظة:** السبب على الأرجح هو إن `next/image` optimized mode بيحتاج `dangerouslyAllowSVG` أو config للـ domains لو الصور من CDN. لكن هنا كل الصور من `/products/*.jpg` (نطاق نفسه) — فمش محتاج `unoptimized`.

**الإصلاح:** احذف `unoptimized` من كل `<Image>` components.

---

## 🟢 أخطاء بسيطة / تحسينات (Low / Improvements)

### 13. console.log لبيانات RFQ في production

**الملف:** `src/app/api/rfq/route.ts:234-243`
```ts
console.log("[RFQ] submission received:", {
  to: TO_INBOX,
  from: data.email,   // ⚠️ PII - buyer email in logs
  name: data.name,    // ⚠️ PII - buyer name in logs
  // …
});
```

**التأثير:** بيانات RFQ (اسم العميل، إيميله، طلباته) بتسجل في server logs. ممكن تستخدم لـ debugging بس لازم تشال في production أو تت anonymized.

**الإصلاح:**
```ts
if (process.env.NODE_ENV !== "production") {
  console.log("[RFQ] submission received:", { ... });
}
// في production: سجّل بس ID بدون PII
console.log(`[RFQ] submission ${submissionId} received`);
```

---

### 14. 38 من 48 shadcn UI components غير مستخدمة

**النتيجة:**
- 38 من 48 ملفات في `src/components/ui/` مش مستخدمة في أي صفحة
- بحجم ~30KB+ من JS غير مستخدم في الـ bundle
- تأثير: build أبطأ، حجم أكبر، صيانة أصعب

**الإصلاح:**
```bash
# احذف الملفات غير المستخدمة (مثال)
rm src/components/ui/{alert-dialog,alert,aspect-ratio,avatar,breadcrumb,calendar,card,carousel,chart,collapsible,command,context-menu,dialog,drawer,form,hover-card,input-otp,menubar,navigation-menu,pagination,popover,progress,radio-group,resizable,scroll-area,select,separator,sidebar,skeleton,slider,switch,table,tabs,toast,toaster,toggle-group,toggle,tooltip}.tsx
```

شيل بس components اللي متأكد إنها مش مستخدمة. الـ 10 المستخدمين هم:
`accordion, badge, button, checkbox, dropdown-menu, input, label, sheet, sonner, textarea`.

---

### 15. سكريبت JSON-LD مكرر في product detail

**الملف:** `src/app/products/[id]/page.tsx:130-137`
```tsx
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
```

**الملاحظة:** استخدام `dangerouslySetInnerHTML` مع `JSON.stringify` آمن هنا (لا يوجد user input), لكن الأفضل استخدام `<script type="application/ld+json">{JSON.stringify(...)}</script>` في React 19 (مدعوم بدون warnings).

---

### 16. `t: ReturnType<typeof useLanguage>["t"]` في `catalog.tsx`

**الملف:** `src/components/site/catalog.tsx:400`

استخدام `ReturnType<typeof useLanguage>` بدل استيراد نوع `Dictionary` مباشرة — يعمل بس غير معياري.

**الإصلاح:**
```ts
import type { Dictionary } from "@/i18n/translations";
// …
t: Dictionary;
```

---

## 📋 ملخص الإصلاحات المطلوبة (حسب الأولوية)

| # | الأولوية | المشكلة | الجهد |
|---|---|---|---|
| 1 | 🔴 حرج | `t.lang` bug في contact page | 2 دقيقة |
| 2 | 🔴 حرج | `t("key")` calls في contact-cta.tsx (30 استدعاء) | 30 دقيقة |
| 3 | 🔴 حرج | كود مكسور في catalog.tsx (next/router) | 2 دقيقة |
| 4 | 🔴 حرج | toast.success كاذب في catch | 5 دقائق |
| 5 | 🔴 حرج | حذف `src/i18n/translations/` المجلد المكرر | 1 دقيقة |
| 6 | 🟠 عالي | CSRF protection على `/api/rfq` | 10 دقائق |
| 7 | 🟠 عالي | Body size limit على `/api/rfq` | 5 دقائق |
| 8 | 🟠 عالي | Rate limiting على `/api/rfq` | 30 دقيقة |
| 9 | 🟠 عالي | تحديث `next` إلى latest (16.4.0+) | 5 دقائق |
| 10 | 🟡 متوسط | حذف `next-auth` و `prisma` (غير مستخدمين) | 2 دقيقة |
| 11 | 🟡 متوسط | تحقق من نطاق Resend | 10 دقائق |
| 12 | 🟡 متوسط | Cookie flags على sidebar | 2 دقيقة |
| 13 | 🟢 منخفض | إزالة `unoptimized` من Image components | 10 دقائق |
| 14 | 🟢 منخفض | حذف shadcn UI غير المستخدمة | 15 دقيقة |
| 15 | 🟢 منخفض | تقليل console.log في production | 5 دقائق |

**إجمالي وقت الإصلاح:** ~2-3 ساعات لكل الإصلاحات.

---

## ✅ ما يعمل بشكل صحيح

- ✅ Headers الأمنية (CSP, HSTS, X-Frame-Options, COOP, CORP) في الإنتاج
- ✅ `<Image>` مش بستخدم `domains` config — فمش معرض لـ SSRF عبر Image optimization
- ✅ `escapeHtml()` في `buildNotificationHtml` يمنع XSS في الإيميل
- ✅ `JSON.stringify` مع `dangerouslySetInnerHTML` آمن (لا user input في الـ JSON-LD)
- ✅ `.env` في `.gitignore`
- ✅ لا توجد SQL injection (لا raw queries)
- ✅ لا توجد credentials hardcoded في الكود
- ✅ `useSyncExternalStore` لتجنب hydration mismatch في i18n
- ✅ `robots.txt` و `sitemap.xml` شغالين صح
- ✅ TypeScript strict mode مفعل (رغم `ignoreBuildErrors`)
