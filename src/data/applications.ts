/**
 * Application areas — the 4 main industries Herbs Milanos serves.
 * Each entry maps to a Lucide icon name (must exist in lucide-react).
 */

import type { LucideIcon } from "lucide-react";
import {
  UtensilsCrossed,
  Coffee,
  Flower2,
  Truck,
} from "lucide-react";

export interface Application {
  id: string;
  title: string;
  description: string;
  /** Rendered icon component */
  icon: LucideIcon;
  bullets: string[];
}

export const applications: Application[] = [
  {
    id: "food-beverage",
    title: "Food & Beverage",
    description:
      "Aromatic herbs, seeds and spices for seasoning blends, ready meals, bakery, beverages and condiments.",
    icon: UtensilsCrossed,
    bullets: [
      "Spice blends & seasoning bases",
      "Culinary herb toppings for RTE meals",
      "Bakery inclusions & seeds",
      "Natural color & flavor for beverages",
    ],
  },
  {
    id: "herbal-infusions",
    title: "Herbal Infusions",
    description:
      "Tea-cut and infusion-grade botanicals for tea bags, loose-leaf blends, and functional infusions.",
    icon: Coffee,
    bullets: [
      "Tea-bag cut (TBC) and rubbed herbs",
      "Standardized screen & bulk density",
      "Calyces, flowers and petals",
      "Caffeine-free functional blends",
    ],
  },
  {
    id: "natural-cosmetics",
    title: "Natural Cosmetics",
    description:
      "Botanical oils, butters, extracts and floral ingredients for skin, hair, and personal care formulations.",
    icon: Flower2,
    bullets: [
      "Cold-pressed carrier oils",
      "Plant butters for balms & creams",
      "Essential oils & absolutes",
      "Botanical extracts & infusions",
    ],
  },
  {
    id: "ingredient-distribution",
    title: "Ingredient Distribution",
    description:
      "Mixed-container orders, third-party inspection and private-label packing for distributors worldwide.",
    icon: Truck,
    bullets: [
      "Mixed-container & consolidated orders",
      "Private-label & retail packing",
      "Third-party inspection arrangements",
      "Full export documentation (COA, phytosanitary)",
    ],
  },
];
