import type { MetadataRoute } from "next";
import { catalogProducts } from "@/data/catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://herbsmilanos.space-z.ai";
  const staticRoutes = ["", "/about", "/products", "/resources", "/faq", "/contact"];
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${base}${r}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: r === "" ? 1 : 0.8,
  }));

  const productEntries: MetadataRoute.Sitemap = catalogProducts.map((p) => ({
    url: `${base}/products/${p.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...productEntries];
}
