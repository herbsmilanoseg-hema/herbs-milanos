/**
 * Company "About" content: blurb, key facts, certifications.
 * Note: the long-form text (story, vision, mission, process steps) now lives
 * in src/i18n/translations.ts so it can be translated. This file holds the
 * structural data (facts, locations, certifications) shared across languages.
 */

export interface KeyFact {
  value: string;
  label: string;
}

export const company = {
  /** Highlighted facts shown as stat tiles (labels translated via t.about.facts) */
  facts: [
    { value: "2011", label: "established" },
    { value: "+100", label: "skus" },
    { value: "+15", label: "countries" },
    { value: "Beni Suef", label: "moq" },
  ] satisfies KeyFact[],

  /** Locations / governorates we source from */
  locations: ["Beni Suef", "Fayoum", "Minya", "Assiut"],

  /** Processing facility location */
  facilityLocation: "Beni Suef, Egypt — owned organic farm and processing facility",

  /** Certifications array — used as badges across the site */
  certifications: [
    {
      name: "ISO 9001:2015",
      description: "Quality Management System.",
      pdf: "/certificates/iso-9001.jpg",
    },
    {
      name: "ISO 22000:2018",
      description: "Food Safety Management System.",
      pdf: "/certificates/iso-22000.jpg",
    },
    {
      name: "HACCP",
      description: "Hazard Analysis & Critical Control Points.",
      pdf: "/certificates/haccp.jpg",
    },
  ],
} as const;

export type Company = typeof company;
