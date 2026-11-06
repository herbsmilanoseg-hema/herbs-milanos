# 🌿 Herbs Milanos — Premium Egyptian Herbs & Spices B2B Export

> B2B marketing website for an Egyptian herbs, spices, and botanicals exporter. Built with Next.js 16, fully bilingual (Arabic + English), with a floating WhatsApp FAQ chatbot and an RFQ (Request for Quote) email pipeline.

**Production URL:** `https://herbsmilanos.space-z.ai` (when deployed)

---

## 📋 Table of Contents

1. [Overview](#-overview)
2. [Features](#-features)
3. [Tech Stack](#-tech-stack)
4. [Getting Started](#-getting-started)
5. [Project Structure](#-project-structure)
6. [Environment Variables](#-environment-variables)
7. [Available Scripts](#-available-scripts)
8. [Deployment](#-deployment)
9. [Documentation](#-documentation)
10. [License](#-license)

---

## 🎯 Overview

Herbs Milanos is a B2B marketing website for a bulk Egyptian botanicals exporter based in Beni Suef, Egypt. The site showcases 89 products across 9 product families, with technical specifications, certifications (ISO 9001, ISO 22000, HACCP), and a Request-for-Quote form that emails the export team.

### Key facts

| | |
|---|---|
| **Founded** | 2000 |
| **Location** | Beni Suef, Egypt |
| **Products** | 89 SKUs across 9 families |
| **Languages** | Arabic (RTL) + English (LTR) |
| **Certifications** | ISO 9001:2015 · ISO 22000:2018 · HACCP |
| **MOQ** | 1 metric ton (MT) per item |
| **Ports** | Alexandria, Port Said, Damietta |

---

## ✨ Features

### Customer-facing

- 🏠 **6 main pages** — Home, About, Products, Resources, FAQ, Contact
- 🛍️ **89 product pages** — Each with full spec sheet, microbiological criteria, and COA download
- ❓ **FAQ page** — 7 categories, 16 Q&A pairs, bilingual
- 📧 **RFQ form** — 13 fields (Name, Company, Country, Email, Phone, Category, Product, Quantity, Form, Packing, Port, Incoterm, Notes)
- 🤖 **Floating WhatsApp chatbot** — Auto-answers from FAQ, falls back to human agent on WhatsApp
- 🌍 **Bilingual i18n** — Arabic (RTL) + English (LTR) with persistent language switcher
- 🛡️ **Certifications showcase** — Real ISO/HACCP certificate images with download buttons

### Technical

- ⚡ **Next.js 16 App Router** with `output: "standalone"` for production deployment
- 🎨 **Tailwind CSS 4** + 10 shadcn/ui components (New York style)
- 🔤 **Self-hosted fonts** — DM Sans + Playfair Display via `next/font`
- 🖼️ **Image optimization** — WebP/AVIF conversion, responsive srcsets
- 🗺️ **Auto-generated SEO** — `sitemap.xml` + `robots.txt` + JSON-LD schemas (Organization, Product, Breadcrumb, FAQPage)
- 🔒 **Security headers** — CSP, HSTS, X-Frame-Options, COOP, CORP (production profile)
- 🛡️ **API protection** — CSRF origin validation, body size cap (16 KB), rate limit (5/IP/hour), email format validation
- 📧 **Email pipeline** — Resend SDK for RFQ notifications + buyer auto-confirmation
- 🚦 **Rate limiter** — Hybrid Upstash Ratelimit + in-memory fallback

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16.4.5 |
| **Language** | TypeScript 5 (strict mode) |
| **Runtime** | Node.js 20+ |
| **Styling** | Tailwind CSS 4 + shadcn/ui (10 components) |
| **Animations** | Pure CSS (no framer-motion) |
| **Fonts** | DM Sans + Playfair Display (self-hosted) |
| **Email** | Resend SDK |
| **Rate limit** | @upstash/ratelimit + @upstash/redis (hybrid with in-memory fallback) |
| **Image optimization** | Next.js Image (sharp 0.35.5) |
| **i18n** | Custom useSyncExternalStore-based system |

### Dependencies count

- **22 production dependencies** + **9 dev dependencies** = **31 total**

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ (recommended: 22 LTS)
- npm 10+

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/USERNAME/herbs-milanos.git
cd herbs-milanos

# 2. Install dependencies
npm install

# 3. Create .env file (see Environment Variables below)
cp .env.example .env
# Edit .env with your values

# 4. Run development server
npm run dev
# → http://localhost:3000

# 5. Build for production
npm run build

# 6. Start production server
npm start
# → http://localhost:3000
```

---

## 📁 Project Structure

```
herbs-milanos/
├── src/
│   ├── app/                          # Next.js App Router pages
│   │   ├── layout.tsx                # Root layout + fonts + JSON-LD
│   │   ├── page.tsx                  # Home page
│   │   ├── about/page.tsx
│   │   ├── products/
│   │   │   ├── page.tsx              # Catalog archive
│   │   │   └── [id]/page.tsx         # Product detail (89 static pages)
│   │   ├── resources/page.tsx
│   │   ├── faq/page.tsx
│   │   ├── contact/page.tsx          # RFQ form
│   │   ├── api/
│   │   │   ├── route.ts              # Health check
│   │   │   └── rfq/route.ts         # RFQ submission + email
│   │   ├── sitemap.ts                # Auto-generated sitemap
│   │   ├── robots.ts                 # Auto-generated robots.txt
│   │   └── providers.tsx             # LanguageProvider wrapper
│   │
│   ├── components/
│   │   ├── site/                     # Site-specific components (21 files)
│   │   │   ├── chatbot.tsx           # Floating WhatsApp FAQ chatbot
│   │   │   ├── site-header.tsx       # Header + nav + language switcher
│   │   │   ├── site-footer.tsx
│   │   │   ├── hero.tsx
│   │   │   ├── catalog.tsx          # Filterable product grid
│   │   │   ├── certifications.tsx
│   │   │   └── ... (15 more)
│   │   └── ui/                       # shadcn/ui components (10 files)
│   │
│   ├── data/                         # Static data
│   │   ├── catalog.ts                # 89 products
│   │   ├── products.ts               # 9 product families
│   │   ├── site.ts                   # Site config + contact info
│   │   ├── company.ts                # Certifications
│   │   ├── faq.ts                    # FAQ skeleton
│   │   └── ... (more)
│   │
│   ├── i18n/                          # Bilingual system
│   │   ├── translations.ts           # AR + EN dictionaries (~1000 lines)
│   │   ├── LanguageContext.tsx       # useSyncExternalStore provider
│   │   ├── locales.ts                # Lang codes + dir mapping
│   │   └── use-language.ts           # Hook re-export
│   │
│   ├── hooks/                        # Custom hooks
│   └── lib/                          # Utils
│
├── public/                           # Static assets
│   ├── gallery/                      # Farm & facility photos (4)
│   ├── certificates/                 # ISO 9001, 22000, HACCP (3)
│   ├── products/                     # Product images (75)
│   ├── *.jpg                         # Hero/banner images (6)
│   └── favicon.svg
│
├── scripts/                          # Maintenance scripts
│   ├── health-check.sh               # Production verification
│   ├── check-ratelimit.sh            # Rate limiter test
│   ├── check-resend-domain.sh        # Resend API check
│   └── render-rfq-preview.mjs        # Email template preview
│
├── .env.example                      # Environment template
├── .gitignore
├── next.config.ts                    # Next.js config + security headers
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
├── components.json                   # shadcn/ui config
└── README.md                         # This file
```

---

## 🔐 Environment Variables

Create a `.env` file in the root with the following variables:

```bash
# Resend (required for RFQ email notifications)
RESEND_API_KEY=re_your_resend_api_key_here
RESEND_FROM_EMAIL=onboarding@resend.dev          # or noreply@yourdomain.com
RFQ_TO_EMAIL=herbs.milanos.eg@gmail.com

# Upstash Redis (optional — for distributed rate limiting)
# When not set, falls back to in-memory rate limiter
UPSTASH_REDIS_REST_URL=https://your-db.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_token_here

# Security profile (optional)
# Set to "true" to enable strict CSP + X-Frame-Options: DENY + COOP/CORP
# Leave unset for preview profile (permissive CSP, allows iframe embedding)
STRICT_SECURITY=true
```

> ⚠️ **NEVER commit your `.env` file to git.** It's already in `.gitignore`.

Get your Resend API key at [resend.com/api-keys](https://resend.com/api-keys).

---

## 📜 Available Scripts

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build (also copies static/ to standalone/)
npm start        # Start production server (Node, not bun)
npm run lint     # Run ESLint
```

---

## 🚢 Deployment

### Vercel (recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import the GitHub repo
4. Vercel auto-detects Next.js — no config needed
5. Add the Environment Variables (see above)
6. Click **Deploy**

The site will be live at `https://herbs-milanos.vercel.app`.

### Other platforms

- **Netlify** — Uses `@netlify/plugin-nextjs`
- **Cloudflare Pages** — Uses `@cloudflare/next-on-pages`
- **Self-hosted (VPS/Docker)** — Use `npm run build` + `node .next/standalone/server.js`

---

## 📚 Documentation

For in-depth docs, see the `download/` folder (kept local, not in repo):

- `SECURITY-AUDIT-REPORT.md` — Full security audit results
- `PHASE-6-FINAL-REPORT.md` — Final project report
- `DEPLOYMENT-CHECKLIST.md` — Pre/post-deploy checklist
- `RESEND-DOMAIN-SETUP.md` — How to verify a custom domain in Resend
- `UPSTASH-SETUP.md` — How to enable distributed rate limiting
- `SECURITY-HEADERS.md` — Security headers strategy (preview vs production)
- `COMPARISON-herbs-eg.md` — Comparison with benchmark site

---

## 🌍 Bilingual Support

The site supports two languages:

| Language | Code | Direction | Locale |
|---|---|---|---|
| English (default) | `en` | LTR | `en_US` |
| العربية | `ar` | RTL | `ar_EG` |

Language choice is persisted in `localStorage` (key: `herbs-milanos-lang`) and reflected on `<html lang dir>`.

---

## 🛡️ Security

- ✅ **0 npm vulnerabilities** (`npm audit` clean)
- ✅ **HSTS** — 1 year, includeSubDomains, preload
- ✅ **CSP** — strict Content Security Policy
- ✅ **CSRF protection** — Origin validation on all API POSTs
- ✅ **Body size limit** — 16 KB max on RFQ endpoint
- ✅ **Rate limit** — 5 submissions / IP / hour
- ✅ **Email format validation** — Regex check before processing
- ✅ **HTML escape** — All user input escaped in email templates

---

## 📞 Contact

- **Company:** Herbs Milanos
- **Email:** `herbs.milanos.eg@gmail.com`
- **Phone/WhatsApp:** `+20 122 621 1624`
- **Location:** Beni Suef, Egypt
- **Hours:** Mon–Sat, 9:00–17:00 (EET)

---

## 📄 License

This project is proprietary. All rights reserved by Herbs Milanos.

---

**Built with ❤️ for Egyptian botanicals.** 🌿
