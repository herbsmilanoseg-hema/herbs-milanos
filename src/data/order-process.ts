/**
 * Wholesale buying journey — the 4-step process shown to global B2B buyers.
 *
 * Only the id, step number and icon component live here. The translated
 * title / description / detail bullets are looked up at runtime via the
 * i18n dictionary, keyed by `id`:
 *   process.<id>.title
 *   process.<id>.description
 *   process.<id>.detail.<n>
 *
 * Edit `src/i18n/translations/en.ts` (and other language files) to change
 * the displayed text.
 */

import type { LucideIcon } from "lucide-react";
import { ClipboardList, PackageCheck, Truck, Ship } from "lucide-react";

export interface OrderStep {
  id: string;
  /** Step number, shown as "01" / "02" … */
  number: string;
  icon: LucideIcon;
}

export const orderSteps: OrderStep[] = [
  { id: "request", number: "01", icon: ClipboardList },
  { id: "quote", number: "02", icon: PackageCheck },
  { id: "production", number: "03", icon: Truck },
  { id: "export", number: "04", icon: Ship },
];
