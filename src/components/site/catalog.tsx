"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Search,
  SlidersHorizontal,
  X,
  Package,
  CalendarDays,
  MapPin,
  Leaf,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import {
  catalogProducts,
  allForms,
  allGrades,
  allIndustries,
  type CatalogProduct,
} from "@/data/catalog";
import { productFamilies } from "@/data/products";
import { useLanguage } from "@/i18n/use-language";

const familyName = (id: string) =>
  productFamilies.find((f) => f.id === id)?.name ?? id;
const familyImage = (id: string) =>
  productFamilies.find((f) => f.id === id)?.image ?? "";

export function Catalog({ compact = false }: { compact?: boolean }) {
  const { t } = useLanguage();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState("");
  // Initialize family filter from ?family= query param (lazy initializer —
  // avoids set-state-in-effect anti-pattern).
  const [familyFilter, setFamilyFilter] = useState<string[]>(() => {
    const fam = searchParams.get("family");
    if (fam && productFamilies.some((f) => f.id === fam)) return [fam];
    return [];
  });
  const [formFilter, setFormFilter] = useState<string[]>([]);
  const [gradeFilter, setGradeFilter] = useState<string[]>([]);
  const [industryFilter, setIndustryFilter] = useState<string[]>([]);

  const toggle =
    (setter: typeof setFamilyFilter) => (val: string) =>
      setter((prev) =>
        prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]
      );

  const clearFilters = () => {
    setFamilyFilter([]);
    setFormFilter([]);
    setGradeFilter([]);
    setIndustryFilter([]);
    setQuery("");
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return catalogProducts.filter((p) => {
      if (q) {
        const hay = `${p.name} ${p.latinName} ${p.brief} ${p.origin}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (familyFilter.length && !familyFilter.includes(p.family)) return false;
      if (formFilter.length && !formFilter.some((f) => p.forms.includes(f)))
        return false;
      if (gradeFilter.length && !gradeFilter.some((g) => p.grades.includes(g)))
        return false;
      if (
        industryFilter.length &&
        !industryFilter.some((i) => p.industries.includes(i))
      )
        return false;
      return true;
    });
  }, [query, familyFilter, formFilter, gradeFilter, industryFilter]);

  const activeCount =
    familyFilter.length + formFilter.length + gradeFilter.length + industryFilter.length;
  const list = compact ? filtered.slice(0, 6) : filtered;

  return (
    <section
      id="catalog"
      className="scroll-mt-24 bg-background py-16 md:py-24"
      aria-labelledby="catalog-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {compact && (
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
              {t.products.eyebrow}
            </p>
            <h2
              id="catalog-heading"
              className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              {t.products.heading}
            </h2>
            <div className="mx-auto mt-3 botanical-divider" aria-hidden />
            <p className="mt-5 text-base text-muted-foreground">
              {t.products.intro}
            </p>
          </div>
        )}

        {!compact && (
          <div className="mt-12 grid gap-8 lg:grid-cols-[260px_1fr]">
            <aside className="hidden lg:block">
              <FilterPanel
                t={t}
                query={query}
                setQuery={setQuery}
                familyFilter={familyFilter}
                toggleFamily={toggle(setFamilyFilter)}
                formFilter={formFilter}
                toggleForm={toggle(setFormFilter)}
                gradeFilter={gradeFilter}
                toggleGrade={toggle(setGradeFilter)}
                industryFilter={industryFilter}
                toggleIndustry={toggle(setIndustryFilter)}
                clearFilters={clearFilters}
                activeCount={activeCount}
                resultCount={filtered.length}
              />
            </aside>

            {/* Mobile filter trigger */}
            <div className="flex items-center justify-between gap-3 lg:hidden">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t.products.searchPlaceholder}
                  className="pl-9"
                />
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="shrink-0">
                    <SlidersHorizontal className="size-4" />
                    {activeCount > 0 && (
                      <span className="ml-1 rounded-full bg-primary px-1.5 py-0.5 text-[10px] font-bold text-primary-foreground">
                        {activeCount}
                      </span>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80 max-w-[85vw] overflow-y-auto">
                  <SheetHeader className="px-6 pt-6">
                    <SheetTitle>{t.products.eyebrow}</SheetTitle>
                  </SheetHeader>
                  <div className="px-4 py-4">
                    <FilterPanel
                      t={t}
                      query={query}
                      setQuery={setQuery}
                      familyFilter={familyFilter}
                      toggleFamily={toggle(setFamilyFilter)}
                      formFilter={formFilter}
                      toggleForm={toggle(setFormFilter)}
                      gradeFilter={gradeFilter}
                      toggleGrade={toggle(setGradeFilter)}
                      industryFilter={industryFilter}
                      toggleIndustry={toggle(setIndustryFilter)}
                      clearFilters={clearFilters}
                      activeCount={activeCount}
                      resultCount={filtered.length}
                    />
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            <div>
              <p className="mb-4 hidden text-sm text-muted-foreground lg:block">
                {t.products.showing(filtered.length, catalogProducts.length)}
              </p>
              {filtered.length === 0 ? (
                <EmptyState t={t} clearFilters={clearFilters} />
              ) : (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {list.map((p, i) => (
                    <CatalogCard key={p.id} product={p} t={t} index={i} />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {compact && (
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {list.map((p, i) => (
                <CatalogCard key={p.id} product={p} t={t} index={i} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button asChild variant="outline" size="lg">
                <Link href="/products">
                  {t.products.viewDetails}
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── Filter panel ─── */
function FilterPanel({
  t,
  query,
  setQuery,
  familyFilter,
  toggleFamily,
  formFilter,
  toggleForm,
  gradeFilter,
  toggleGrade,
  industryFilter,
  toggleIndustry,
  clearFilters,
  activeCount,
  resultCount,
}: {
  t: ReturnType<typeof useLanguage>["t"];
  query: string;
  setQuery: (v: string) => void;
  familyFilter: string[];
  toggleFamily: (v: string) => void;
  formFilter: string[];
  toggleForm: (v: string) => void;
  gradeFilter: string[];
  toggleGrade: (v: string) => void;
  industryFilter: string[];
  toggleIndustry: (v: string) => void;
  clearFilters: () => void;
  activeCount: number;
  resultCount: number;
}) {
  return (
    <div className="flex flex-col gap-6">
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.products.searchPlaceholder}
          className="pl-9"
        />
      </div>

      {activeCount > 0 && (
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-medium text-muted-foreground">
            {resultCount} ·
          </span>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 px-2 text-xs"
            onClick={clearFilters}
          >
            <X className="size-3" />
            {t.products.clear}
          </Button>
        </div>
      )}

      <FilterGroup title={t.products.familyLabel}>
        {productFamilies.map((f) => (
          <FilterCheck
            key={f.id}
            label={f.name}
            checked={familyFilter.includes(f.id)}
            onChange={() => toggleFamily(f.id)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title={t.products.industryLabel}>
        {allIndustries.map((g) => (
          <FilterCheck
            key={g}
            label={g}
            checked={industryFilter.includes(g)}
            onChange={() => toggleIndustry(g)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title={t.products.gradeLabel}>
        {allGrades.map((g) => (
          <FilterCheck
            key={g}
            label={g}
            checked={gradeFilter.includes(g)}
            onChange={() => toggleGrade(g)}
          />
        ))}
      </FilterGroup>

      <FilterGroup title={t.products.formLabel}>
        {allForms.map((f) => (
          <FilterCheck
            key={f}
            label={f}
            checked={formFilter.includes(f)}
            onChange={() => toggleForm(f)}
          />
        ))}
      </FilterGroup>
    </div>
  );
}

function FilterGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 border-t border-border pt-4 first:border-t-0 first:pt-0">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </h3>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}

function FilterCheck({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <Label className="flex cursor-pointer items-center gap-2 text-sm text-foreground/90">
      <Checkbox checked={checked} onCheckedChange={onChange} />
      {label}
    </Label>
  );
}

function EmptyState({
  t,
  clearFilters,
}: {
  t: ReturnType<typeof useLanguage>["t"];
  clearFilters: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border py-16 text-center">
      <Leaf className="size-8 text-muted-foreground" />
      <p className="text-sm text-muted-foreground">{t.products.noMatch}</p>
      <Button variant="outline" size="sm" onClick={clearFilters}>
        {t.products.clearFilters}
      </Button>
    </div>
  );
}

/* ─── Catalog card (display only — links to detail page) ─── */
function CatalogCard({
  product,
  t,
  index = 0,
}: {
  product: CatalogProduct;
  t: ReturnType<typeof useLanguage>["t"];
  index?: number;
}) {
  const img = product.image || familyImage(product.family);
  const brief =
    t.productBriefs[product.id] ?? product.brief;
  const [loaded, setLoaded] = useState(false);

  // Oils use a placeholder image — hide the image frame entirely
  // and show a clean text-only card instead.
  const isOilPlaceholder = img === "/products/oil-symbolic.jpg";

  return (
    <Link
      href={`/products/${product.id}`}
      className="card-hover animate-fade-up group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
      style={{ animationDelay: `${Math.min(index * 40, 400)}ms` }}
    >
      {!isOilPlaceholder && (
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          {!loaded && <div className="img-skeleton absolute inset-0" aria-hidden />}
          <Image
            src={img}
            alt={`${product.name} — ${product.latinName}`}
            fill
            loading="lazy"
            sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="img-zoom object-contain p-2"
            onLoad={() => setLoaded(true)}
          />
          <div className="absolute left-2 top-2">
            <Badge variant="secondary" className="bg-white/95 text-foreground shadow-sm">
              {familyName(product.family)}
            </Badge>
          </div>
          <div className="absolute right-2 top-2">
            <Badge className="bg-primary text-primary-foreground shadow-sm">
              MOQ {product.moq}
            </Badge>
          </div>
        </div>
      )}

      <div className={`flex flex-1 flex-col gap-2.5 ${isOilPlaceholder ? "p-5" : "p-4"}`}>
        {isOilPlaceholder && (
          <div className="mb-1 flex items-center justify-between">
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              {familyName(product.family)}
            </Badge>
            <Badge className="bg-primary text-primary-foreground">
              MOQ {product.moq}
            </Badge>
          </div>
        )}
        <div>
          <h3 className="text-base font-semibold text-foreground">
            {product.name}
          </h3>
          <p className="text-xs italic text-muted-foreground">
            {product.latinName}
          </p>
        </div>
        <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">
          {brief}
        </p>

        <div className="flex flex-wrap gap-1">
          {product.forms.slice(0, 4).map((form) => (
            <Badge
              key={form}
              variant="outline"
              className="border-primary/25 bg-primary/5 px-1.5 py-0 text-[10px] font-medium text-primary"
            >
              {form}
            </Badge>
          ))}
        </div>

        <dl className="mt-auto grid grid-cols-2 gap-x-2 gap-y-1.5 border-t border-border pt-3 text-xs">
          <SpecRow icon={<Package className="size-3.5" />} label={t.products.familyLabel} value={product.purity} />
          <SpecRow icon={<CalendarDays className="size-3.5" />} label={t.productDetail.purity} value={product.moq} />
        </dl>

        <span className="btn-shine mt-2 inline-flex items-center justify-center rounded-md border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          {t.products.viewDetails}
        </span>
      </div>
    </Link>
  );
}

function SpecRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-primary" aria-hidden>
        {icon}
      </span>
      <dt className="sr-only">{label}</dt>
      <dd className="font-medium text-foreground/80">
        <span className="text-muted-foreground">{label}: </span>
        {value}
      </dd>
    </div>
  );
}
