/**
 * FAQ section structure — 8 categories, 16 Q&A pairs.
 *
 * Only the structural skeleton lives here (category ids + question indices).
 * The translated question/answer text is looked up at runtime via the i18n
 * dictionary, keyed by:
 *   faq.cat.<categoryId>            → category display name
 *   faq.<categoryId>.<index>.q      → question text
 *   faq.<categoryId>.<index>.a      → answer text
 *
 * The `count` per category drives the "N questions" badge. To add/remove a
 * Q&A, update both the matching index range in this file and the
 * corresponding keys in `src/i18n/translations/*.ts`.
 */

export interface FaqCategorySkeleton {
  id: string;
  /** Number of Q&A items in this category (drives the index range 0..count-1) */
  count: number;
}

export const faqSkeleton: FaqCategorySkeleton[] = [
  { id: "company", count: 3 },
  { id: "products", count: 3 },
  { id: "quality", count: 2 },
  { id: "orders", count: 2 },
  { id: "packing", count: 2 },
  { id: "shipping", count: 2 },
  { id: "storage", count: 2 },
  { id: "contact", count: 2 },
];
