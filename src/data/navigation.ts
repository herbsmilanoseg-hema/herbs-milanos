/**
 * Main navigation items.
 *
 * Labels are translated at runtime via the i18n dictionary (keys `nav.*`).
 * The `label` field here is the English source-of-truth used as a fallback
 * and for SEO/screen-reader use before hydration.
 *
 * In-page anchors must match the `id` of the corresponding section component.
 */

export interface NavItem {
  /** English label — translated via i18n at runtime (key `nav.<id>`) */
  label: string;
  /** i18n key suffix used to look up the translated label */
  key: string;
  /** In-page anchor (used by both desktop nav and mobile sheet) */
  href: string;
}

export const navigation: NavItem[] = [
  { label: "About", key: "about", href: "#about" },
  { label: "Products", key: "products", href: "#products" },
  { label: "Why Herbs Milanos", key: "why", href: "#advantages" },
  { label: "Crop Calendar", key: "cropCalendar", href: "#crop-calendar" },
  { label: "FAQ", key: "faq", href: "#faq" },
  { label: "Contact", key: "contact", href: "#contact" },
];
