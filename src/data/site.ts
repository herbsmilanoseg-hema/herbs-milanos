/**
 * Site-wide configuration & contact info.
 * Edit this file to update contact details, social links, or brand identity.
 */

export const site = {
  /** Brand short name shown in header logo */
  name: "Herbs Milanos",
  /** Full tagline shown beneath logo */
  fullName: "Herbs Milanos — Egyptian Botanicals Exporter",

  /** Year company was founded */
  foundedYear: 2005,
  /** Year unified under Herbs Milanos name */
  establishedYear: 2000,

  /** SEO meta description (English) */
  description:
    "Herbs Milanos is an Egyptian manufacturer and bulk exporter of aromatic plants, herbs, flowers, seeds, spices and essential oils. Own farms in Beni Suef, processing under ISO 22000 & HACCP since 2000.",

  /** Public website URL */
  url: "https://herbsmilanos.space-z.ai",

  contact: {
    /** Working inbox — receives RFQ submissions and is shown site-wide. */
    email: "herbs.milanos.eg@gmail.com",
    phone: "+20 122 621 1624",
    phoneLink: "tel:+201226211624",
    whatsapp: "+20 122 621 1624",
    whatsappLink: "https://wa.me/201226211624",
    address: "Beni Suef, Egypt",
    regions: ["Beni Suef", "Fayoum", "Minya", "Assiut"],
  },

  /** Hours shown in footer / contact area */
  hours: "Mon–Sat, 9:00 – 17:00 (EET)",

  /** Export ports used for shipping */
  ports: ["Alexandria", "Port Said", "Damietta"],

  /** Incoterms supported */
  incoterms: ["FOB", "CIF", "CFR", "EXW"],

  /** Payment terms */
  paymentTerms: "30% advance (T/T), 70% against shipping documents",

  /** Typical minimum order quantity */
  moq: "1 metric ton (MT) per item — mixed 20ft container accepted",

  social: {
    linkedin: "https://www.linkedin.com",
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
    youtube: "https://www.youtube.com",
  },

  /** Certifications referenced across the site */
  certifications: ["ISO 9001:2015", "ISO 22000:2018", "HACCP"],

  /** Number of products / SKUs the company sells (marketing number) */
  productCount: 89,

  /** Wholesale buyer categories we serve */
  buyerSegments: [
    "Tea & infusion brands",
    "Food & spice processors",
    "Natural cosmetics manufacturers",
    "Ingredient distributors",
    "Essential oil houses",
    "Private-label brands",
  ],
} as const;

export type Site = typeof site;
