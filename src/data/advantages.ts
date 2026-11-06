/**
 * "Why Herbs Milanos" advantages — 3 reasons buyers choose us.
 *
 * Only the icon component lives here. The translated title / description /
 * bullets are looked up at runtime via the i18n dictionary, keyed by `id`:
 *   advantages.<id>.title
 *   advantages.<id>.description
 *   advantages.<id>.bullet.<n>
 *
 * Edit `src/i18n/translations/en.ts` (and other language files) to change
 * the displayed text.
 */

import type { LucideIcon } from "lucide-react";
import { Factory, SlidersHorizontal, Ship } from "lucide-react";

export interface Advantage {
  id: string;
  icon: LucideIcon;
}

export const advantages: Advantage[] = [
  { id: "factory-direct", icon: Factory },
  { id: "tailored-specifications", icon: SlidersHorizontal },
  { id: "export-coordination", icon: Ship },
];
