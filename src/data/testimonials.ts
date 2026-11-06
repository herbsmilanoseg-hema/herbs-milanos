/**
 * Buyer testimonials shown in the home page + About page.
 * Edit names, companies and quotes here.
 *
 * Keep testimonials realistic and specific — mention a product, a pain
 * point that was solved, and the buyer's industry. Anonymous role +
 * country is acceptable for B2B buyers who prefer discretion.
 */

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  /** Role + country, shown beneath the author name */
  role: string;
  /** Optional: which product family the buyer purchased */
  product?: string;
  /** Optional star rating (1–5) */
  rating?: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "tea-blender-germany",
    quote:
      "Herbs Milanos's chamomile is consistently clean and on-spec. They handle our mixed-container orders across three product families without fuss — exactly what a busy tea operation needs.",
    author: "Head of Procurement",
    role: "Herbal tea blender, Germany",
    product: "Chamomile flowers",
    rating: 5,
  },
  {
    id: "cosmetics-formulator-france",
    quote:
      "Their Egyptian geranium oil and jojoba are reliable batch to batch, with full COA and traceability. Documentation is always export-ready — no surprises at customs.",
    author: "R&D Manager",
    role: "Natural cosmetics brand, France",
    product: "Geranium Essential Oil",
    rating: 5,
  },
  {
    id: "distributor-uae",
    quote:
      "We've worked with Herbs Milanos for four years on private-label packing. Their communication, sample turnaround and consistency make them a low-maintenance supplier.",
    author: "Import Director",
    role: "Ingredient distributor, UAE",
    product: "Hibiscus + Marjoram (private label)",
    rating: 5,
  },
  {
    id: "spice-processor-italy",
    quote:
      "The cumin and coriander from Herbs Milanos are the cleanest Egyptian seeds we've sourced in 12 years. Magnetic sorting works — foreign matter is virtually zero.",
    author: "Quality Manager",
    role: "Spice processor, Italy",
    product: "Cumin Seeds, Coriander",
    rating: 5,
  },
  {
    id: "supplement-brand-usa",
    quote:
      "Olive leaf extract from Herbs Milanos tests at 18% oleuropein, exactly as promised. Lead times are predictable and the COA ships with every lot. We've never had a rejected shipment.",
    author: "Director of Sourcing",
    role: "Dietary supplement brand, USA",
    product: "Olive Leaf Extract",
    rating: 5,
  },
  {
    id: "perfumery-switzerland",
    quote:
      "Their jasmine concrete and orange blossom absolute are genuine Egyptian quality — rich, true to type, and consistently extracted. A reliable partner for fine perfumery ingredients.",
    author: "Master Perfumer",
    role: "Niche perfumery house, Switzerland",
    product: "Jasmine Concrete, Orange Blossom",
    rating: 5,
  },
];

/** Company-wide stats shown on home page + About page. */
export const companyStats: { value: string; label: string; icon?: string }[] = [
  { value: "25+", label: "Years of export expertise", icon: "calendar" },
  { value: "30+", label: "Countries served", icon: "globe" },
  { value: "89+", label: "Botanical SKUs in catalog", icon: "leaf" },
  { value: "99.9%", label: "Purity, magnetic-sorted", icon: "shield" },
];
