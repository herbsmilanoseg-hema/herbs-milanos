/**
 * Export resources & buyer guides — short articles previewed on the homepage.
 * Edit titles, excerpts, categories and read times here.
 */

export interface ResourceArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  /** Estimated read time */
  readTime: string;
  /** Optional cover image (Unsplash) */
  image?: string;
}

export const resources: ResourceArticle[] = [
  {
    id: "botanical-sourcing-guide",
    title: "Sourcing Egyptian Botanicals: A Buyer's Guide",
    excerpt:
      "Egypt's climate and soils produce some of the world's cleanest botanicals. Here's what to look for — origin regions, harvest windows, and the difference between rub and cut grades.",
    category: "Sourcing",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "incoterms-for-herb-importers",
    title: "FOB vs. CIF vs. CFR: Choosing the Right Incoterm",
    excerpt:
      "A practical breakdown of FOB, CIF and CFR for first-time herb and spice importers — and how the choice affects your landed cost from Alexandria and Damietta.",
    category: "Logistics",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "understanding-coa",
    title: "Understanding a Certificate of Analysis (COA)",
    excerpt:
      "What a real COA should contain for botanical ingredients — moisture, ash, heavy metals, microbial limits, pesticide residues — and the red flags buyers should never ignore.",
    category: "Quality",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "bulk-vs-retail-packing",
    title: "Bulk vs. Private-Label Packing: What to Choose",
    excerpt:
      "25 kg multi-wall bags, cartons with PE liner, retail-ready sachets — how to choose the right packing for your channel and avoid hidden handling costs.",
    category: "Packing",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=900&q=80",
  },
];
