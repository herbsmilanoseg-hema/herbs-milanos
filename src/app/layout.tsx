import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Providers } from "./providers";
import { RouteProgressBar } from "@/components/site/animations";
import { Chatbot } from "@/components/site/chatbot";

// Premium botanical typography (mirrors herbs-eg.com identity)
// DM Sans for body (clean, readable) — minimal weights for speed
const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  preload: false,
});

// Playfair Display for headings (classic, premium) — minimal weights
const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://herbsmilanos.space-z.ai"),
  title: {
    default: "Herbs Milanos — Premium Egyptian Herbs & Spices for Global B2B Buyers",
    template: "%s · Herbs Milanos",
  },
  description:
    "Buy bulk Egyptian herbs, spices, seeds and flowers direct from our farms in Beni Suef. ISO 22000 + HACCP certified, 99.9% purity, magnetic-sorted. Chamomile, hibiscus, peppermint, cumin, fennel + 42 more. MOQ 1 MT, FOB/CIF Alexandria. Get a quote in 24 hours.",
  keywords: [
    "Egyptian herbs exporter",
    "bulk herbs wholesale",
    "chamomile Egypt",
    "hibiscus Egypt",
    "peppermint Egypt",
    "cumin Egypt",
    "fennel Egypt",
    "dried herbs supplier",
    "spices exporter Egypt",
    "botanical ingredients B2B",
    "ISO 22000 herbs",
    "HACCP certified herbs",
    "private label herbs Egypt",
    "herbs FOB Alexandria",
    "organic herbs Egypt",
    "Herbs Milanos",
    "herbsmilanos",
    "medicinal plants Egypt",
    "aromatic seeds Egypt",
    "tea cut herbs Egypt",
  ],
  authors: [{ name: "Herbs Milanos" }],
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Herbs Milanos — Premium Egyptian Herbs & Spices for Global B2B Buyers",
    description:
      "Source chamomile, hibiscus, peppermint, cumin, fennel and 45+ botanicals direct from our farms. ISO 22000 + HACCP certified. MOQ 1 MT. Get a quote in 24 hours.",
    siteName: "Herbs Milanos",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/hero-welcome.jpg",
        width: 1280,
        height: 515,
        alt: "Herbs Milanos — Egyptian botanical ingredients for global B2B buyers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Herbs Milanos — Egyptian Herbs & Spices for Global B2B Buyers",
    description:
      "Buy bulk Egyptian herbs, spices and seeds direct from our farms. ISO 22000 + HACCP certified. MOQ 1 MT. Quote in 24 hours.",
    images: ["/hero-welcome.jpg"],
  },
  alternates: {
    canonical: "https://herbsmilanos.space-z.ai",
    languages: {
      "en": "https://herbsmilanos.space-z.ai",
      "ar": "https://herbsmilanos.space-z.ai",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#174c35",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

// Organization JSON-LD for SEO
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Herbs Milanos",
  url: "https://herbsmilanos.space-z.ai",
  logo: "https://herbsmilanos.space-z.ai/logo.svg",
  description:
    "Egyptian manufacturer and bulk exporter of aromatic plants, herbs, flowers, seeds and spices.",
  foundingDate: "2000",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Beni Suef",
    addressCountry: "EG",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "export sales",
    email: "herbs.milanos.eg@gmail.com",
    telephone: "+201226211624",
  },
  sameAs: [
    "https://www.linkedin.com",
    "https://www.facebook.com",
    "https://www.instagram.com",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}
      >
        <Providers>
          <RouteProgressBar />
          {children}
          <Chatbot />
          <Sonner
            position="bottom-right"
            toastOptions={{
              classNames: {
                toast:
                  "bg-background text-foreground border border-border rounded-lg shadow-lg",
              },
            }}
          />
        </Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </body>
    </html>
  );
}
