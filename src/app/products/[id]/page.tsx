import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  Download,
  Send,
  FileText,
  MapPin,
  CalendarDays,
  Package,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SiteHeaderClient, SiteFooterClient } from "@/components/site/site-shell-client";
import { catalogProducts, type CatalogProduct } from "@/data/catalog";
import { productFamilies } from "@/data/products";

export function generateStaticParams() {
  return catalogProducts.map((p) => ({ id: p.id }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  return params.then(({ id }) => {
    const product = catalogProducts.find((p) => p.id === id);
    if (!product) return { title: "Product not found" };
    return {
      title: `${product.name} (${product.latinName})`,
      description: product.brief,
    };
  });
}

const familyName = (id: string) =>
  productFamilies.find((f) => f.id === id)?.name ?? id;
const familyImage = (id: string) =>
  productFamilies.find((f) => f.id === id)?.image ?? "";

// English labels (server component; client i18n handled by ClientProductDetail below)
const L = {
  origin: "Country of origin",
  harvest: "Harvest method",
  brief: "Brief description",
  specs: "Technical & analytical specifications",
  micro: "Microbiological criteria",
  forms: "Available cut forms",
  packing: "Packing options",
  storage: "Storage & shelf life",
  shelfLife: "Shelf life",
  certifications: "Available certifications & documents",
  purity: "Purity",
  moisture: "Moisture",
  volatileOil: "Volatile oil",
  foreignOrganic: "Foreign organic matter",
  foreignInorganic: "Foreign inorganic matter",
  appearance: "Appearance",
  color: "Colour",
  totalPlate: "Total plate count",
  yeastMold: "Yeast & mould",
  ecoli: "E. coli",
  salmonella: "Salmonella",
  downloadSpec: "Download spec sheet (PDF)",
  requestSample: "Request a sample",
  requestQuote: "Request a custom quote",
  availableOnRequest: "Available on request",
  back: "Back to products",
};

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = catalogProducts.find((p) => p.id === id);
  if (!product) notFound();

  const img = product.image || familyImage(product.family);
  const isOilPlaceholder = img === "/products/oil-symbolic.jpg";
  const displayImg = isOilPlaceholder ? "/logo/header.png" : img;

  const specRows: { label: string; value: string }[] = [
    { label: L.appearance, value: product.appearance },
    { label: L.color, value: product.color },
    { label: L.purity, value: product.purity },
    { label: L.moisture, value: product.moisture },
    { label: L.volatileOil, value: product.volatileOil },
    { label: L.foreignOrganic, value: product.foreignOrganic },
    { label: L.foreignInorganic, value: product.foreignInorganic },
    { label: L.shelfLife, value: product.shelfLife },
  ];

  const microRows: { label: string; value: string }[] = [
    { label: L.totalPlate, value: product.micro.totalPlate },
    { label: L.yeastMold, value: product.micro.yeastMold },
    { label: L.ecoli, value: product.micro.ecoli },
    { label: L.salmonella, value: product.micro.salmonella },
  ];

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://herbsmilanos.space-z.ai" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://herbsmilanos.space-z.ai/products" },
      { "@type": "ListItem", position: 3, name: product.name },
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.brief,
    category: familyName(product.family),
    brand: { "@type": "Brand", name: "Herbs Milanos" },
    sku: product.id,
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeaderClient />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />

        {/* Breadcrumb */}
        <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4 rtl:hidden" />
            <ArrowRight className="size-4 ltr:hidden" />
            {L.back}
          </Link>
        </div>

        <section className="bg-background py-10 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              {/* Image (uses logo for oils without product photo) */}
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-muted shadow-sm">
                <Image
                  src={displayImg}
                  alt={`${product.name} — ${product.latinName}`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className={`object-contain ${isOilPlaceholder ? "p-12 opacity-80" : "object-cover"}`}
                />
                <div className="absolute left-3 top-3">
                  <Badge variant="secondary" className="bg-white/95 text-foreground shadow-sm">
                    {familyName(product.family)}
                  </Badge>
                </div>
                <div className="absolute right-3 top-3">
                  <Badge className="bg-primary text-primary-foreground shadow-sm">
                    MOQ {product.moq}
                  </Badge>
                </div>
              </div>

              {/* Info */}
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-serif">
                  {product.name}
                </h1>
                <p className="mt-1 text-base italic text-muted-foreground">
                  {product.latinName}
                </p>
                <div className="mt-3 botanical-divider" aria-hidden />

                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  {product.brief}
                </p>

                <dl className="mt-6 grid grid-cols-2 gap-4">
                  <InfoTile icon={<MapPin className="size-4" />} label={L.origin} value={product.origin} />
                  <InfoTile icon={<CalendarDays className="size-4" />} label="Season" value={product.season} />
                  <InfoTile icon={<Package className="size-4" />} label="MOQ" value={product.moq} />
                  <InfoTile icon={<ShieldCheck className="size-4" />} label="Purity" value={product.purity} />
                </dl>

                {/* Action buttons */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary/40 text-primary hover:bg-primary/5"
                  >
                    <a
                      href={product.specSheetUrl ?? "#"}
                      aria-disabled={!product.specSheetUrl}
                      className={!product.specSheetUrl ? "pointer-events-none opacity-60" : ""}
                    >
                      <Download className="size-4" />
                      {product.specSheetUrl ? L.downloadSpec : L.availableOnRequest}
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href={`/contact?product=${product.id}&intent=sample`}>
                      <Send className="size-4" />
                      {L.requestSample}
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link href={`/contact?product=${product.id}&intent=quote`}>
                      <FileText className="size-4" />
                      {L.requestQuote}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Spec table */}
            <div className="mt-16 grid gap-8 lg:grid-cols-2">
              <SpecTable title={L.specs} rows={specRows} />
              <SpecTable title={L.micro} rows={microRows} />
            </div>

            {/* Forms & packing */}
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground">{L.forms}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.forms.map((form) => (
                    <Badge
                      key={form}
                      variant="outline"
                      className="border-primary/30 bg-primary/5 text-primary"
                    >
                      {form}
                    </Badge>
                  ))}
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.grades.map((grade) => (
                    <Badge key={grade} variant="secondary">
                      {grade}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-foreground">{L.packing}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {product.packing}
                </p>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{L.storage}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {L.shelfLife}: {product.shelfLife}
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-12 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">{L.certifications}</h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {[
                  "Certificate of Analysis (COA)",
                  "Phytosanitary Certificate",
                  "Certificate of Origin",
                  "HACCP & ISO 22000 compliant",
                ].map((cert) => (
                  <li key={cert} className="flex items-center gap-2 text-sm text-foreground/80">
                    <ShieldCheck className="size-4 text-primary" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <SiteFooterClient />
    </div>
  );
}

function InfoTile({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <dt className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        <span className="text-primary">{icon}</span>
        {label}
      </dt>
      <dd className="mt-1 text-sm font-semibold text-foreground">{value}</dd>
    </div>
  );
}

function SpecTable({
  title,
  rows,
}: {
  title: string;
  rows: { label: string; value: string }[];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="border-b border-border bg-primary/5 px-5 py-3">
        <h3 className="text-sm font-semibold text-primary">{title}</h3>
      </div>
      <table className="w-full text-sm">
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.label}
              className={i % 2 === 0 ? "bg-card" : "bg-secondary/30"}
            >
              <th className="w-1/2 px-5 py-2.5 text-start font-medium text-muted-foreground">
                {row.label}
              </th>
              <td className="px-5 py-2.5 font-medium text-foreground">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
