/**
 * Product family data — 9 families per user spec.
 */

export interface SubCategory {
  name: string;
  examples: string[];
}

export interface ProductFamily {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  subCategories: SubCategory[];
}

export const productFamilies: ProductFamily[] = [
  {
    id: "culinary-herbs",
    name: "Culinary Herbs",
    shortDescription:
      "Aromatic culinary herbs — bulk whole, cut, TBC, rubbed or powdered.",
    longDescription:
      "12 culinary herbs including peppermint, spearmint, basil, marjoram, thyme, rosemary, sage, oregano, parsley, bay laurel, dill and molokhia. Available whole, cut, rubbed, or powdered.",
    image:
      "https://images.unsplash.com/photo-1515443961218-a51367888e4b?auto=format&fit=crop&w=1200&q=80",
    subCategories: [
      { name: "Culinary Herbs", examples: ["Basil", "Parsley", "Dill", "Marjoram", "Oregano", "Molokhia"] },
    ],
  },
  {
    id: "tea-herbs",
    name: "Herbal Tea & Infusion Herbs",
    shortDescription:
      "Herbal tea and infusion botanicals — for tea blends and natural infusions.",
    longDescription:
      "9 herbs for tea and infusion including lemongrass, lemon balm, lemon verbena, olive leaves, moringa, guava leaves, tilio, stevia and jojoba leaves.",
    image:
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80",
    subCategories: [
      { name: "Herbal Tea & Infusion", examples: ["Lemongrass", "Lemon Balm", "Olive Leaves", "Moringa", "Tilio"] },
    ],
  },
  {
    id: "medicinal-herbs",
    name: "Medicinal & Specialty Botanicals",
    shortDescription:
      "Medicinal herbs and specialty botanicals — for extracts and traditional medicine.",
    longDescription:
      "3 medicinal botanicals: senna, licorice and henna. Available whole, cut or powdered for extract applications.",
    image:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&q=80",
    subCategories: [
      { name: "Medicinal Botanicals", examples: ["Senna", "Licorice", "Henna"] },
    ],
  },
  {
    id: "flowers",
    name: "Dried Flowers",
    shortDescription:
      "Dried aromatic flowers — bulk whole, petals or calyces for infusions, cosmetics and extracts.",
    longDescription:
      "7 dried flowers: chamomile, hibiscus, calendula, mullein, jasmine, safflower and rose petals.",
    image:
      "https://images.unsplash.com/photo-1597848212624-a19ec353c935?auto=format&fit=crop&w=1200&q=80",
    subCategories: [
      { name: "Dried Flowers", examples: ["Chamomile", "Hibiscus", "Calendula", "Jasmine", "Safflower", "Rose Petals"] },
    ],
  },
  {
    id: "aromatic-seeds",
    name: "Aromatic Seeds & Spices",
    shortDescription:
      "Aromatic seeds and spices — bulk whole, ground or crushed.",
    longDescription:
      "9 aromatic seeds and spices: fennel, anise, caraway, coriander, cumin, dill seeds, celery seeds, chili and dried lime.",
    image:
      "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=1200&q=80",
    subCategories: [
      { name: "Aromatic Seeds & Spices", examples: ["Cumin", "Coriander", "Fennel", "Anise", "Chili"] },
    ],
  },
  {
    id: "functional-seeds",
    name: "Functional & Oil Seeds",
    shortDescription:
      "Functional and oil seeds — for crushing, food and supplements.",
    longDescription:
      "5 functional seeds: fenugreek, black seed, basil seeds, flax/linseed and sesame.",
    image:
      "https://images.unsplash.com/photo-1574943320219-553eb213f72b?auto=format&fit=crop&w=1200&q=80",
    subCategories: [
      { name: "Functional Seeds", examples: ["Fenugreek", "Black Seed", "Flax Seeds", "Sesame"] },
    ],
  },
  {
    id: "vegetables-others",
    name: "Dried Vegetables & Others",
    shortDescription:
      "Dried vegetables, botanicals and natural gums — bulk for food industry.",
    longDescription:
      "Dried vegetables (onion, garlic, beetroot, cabbage) and Arabic gum.",
    image:
      "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=1200&q=80",
    subCategories: [
      { name: "Dried Vegetables", examples: ["Onion", "Garlic", "Beetroot", "Cabbage"] },
      { name: "Others", examples: ["Arabic Gum"] },
    ],
  },
  {
    id: "essential-oils",
    name: "Essential Oils",
    shortDescription:
      "Steam-distilled essential oils — bulk with GC/MS reporting.",
    longDescription:
      "26 essential oils including rose, geranium, chamomile, peppermint, lavender, frankincense, myrrh and more.",
    image:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=80",
    subCategories: [
      { name: "Essential Oils", examples: ["Rose Oil", "Geranium Oil", "Peppermint Oil", "Lavender Oil"] },
    ],
  },
  {
    id: "vegetable-oils",
    name: "Carrier Oils, Butters & Extracts",
    shortDescription:
      "Cold-pressed carrier oils, butters and botanical extracts — bulk for cosmetics.",
    longDescription:
      "7 carrier oils, butters and extracts: jojoba, shea butter, olive leaf extract, black seed oil, sweet almond, castor and argan.",
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1200&q=80",
    subCategories: [
      { name: "Carrier Oils", examples: ["Jojoba Oil", "Argan Oil", "Castor Oil"] },
      { name: "Butters & Extracts", examples: ["Shea Butter", "Olive Leaf Extract"] },
    ],
  },
];

/** Total SKU count shown in the catalog heading & footer */
export const totalProductCount = 89;
