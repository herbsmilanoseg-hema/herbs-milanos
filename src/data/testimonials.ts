/**
 * Optional buyer testimonials shown in the About / Resources area.
 * Edit names, companies and quotes here.
 */

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  /** Role + country, shown beneath the author name */
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "tea-blender-germany",
    quote:
      "Herbs Milanos's chamomile is consistently clean and on-spec. They handle our mixed-container orders across three product families without fuss — exactly what a busy tea operation needs.",
    author: "Head of Procurement",
    role: "Herbal tea blender, Germany",
  },
  {
    id: "cosmetics-formulator-france",
    quote:
      "Their Egyptian geranium oil and jojoba are reliable batch to batch, with full COA and traceability. Documentation is always export-ready — no surprises at customs.",
    author: "R&D Manager",
    role: "Natural cosmetics brand, France",
  },
  {
    id: "distributor-uae",
    quote:
      "We've worked with Herbs Milanos for four years on private-label packing. Their communication, sample turnaround and consistency make them a low-maintenance supplier.",
    author: "Import Director",
    role: "Ingredient distributor, UAE",
  },
];
