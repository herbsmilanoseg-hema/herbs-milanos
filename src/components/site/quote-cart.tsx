"use client";

/**
 * Quote cart — floating button + slide-over Sheet showing the buyer's
 * selected products. The buyer can edit form/grade/quantity per line, remove
 * items, then continue to the contact form (which reads this list).
 *
 * State lives in src/lib/quote-store.ts (Zustand, persisted to localStorage).
 */

import Link from "next/link";
import {
  ClipboardList,
  Trash2,
  X,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useQuoteStore } from "@/lib/quote-store";
import { catalogProducts } from "@/data/catalog";

export function QuoteCart() {
  const items = useQuoteStore((s) => s.items);
  const remove = useQuoteStore((s) => s.remove);
  const update = useQuoteStore((s) => s.update);
  const clear = useQuoteStore((s) => s.clear);
  const count = items.length;

  return (
    <Sheet>
      {/* Floating button (fixed, bottom-right) */}
      <SheetTrigger asChild>
        <button
          aria-label={`Open quote list, ${count} item${count === 1 ? "" : "s"}`}
          className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl active:scale-95 sm:bottom-6 sm:right-6"
        >
          <ShoppingBag className="size-5" />
          <span className="hidden sm:inline">Quote list</span>
          {count > 0 && (
            <span className="flex size-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
              {count}
            </span>
          )}
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="flex w-[420px] max-w-[92vw] flex-col gap-0 p-0"
      >
        <SheetHeader className="border-b border-border px-6 py-5">
          <SheetTitle className="flex items-center gap-2">
            <ClipboardList className="size-5 text-primary" />
            Your quote list
            {count > 0 && (
              <Badge variant="secondary" className="ml-auto">
                {count} item{count === 1 ? "" : "s"}
              </Badge>
            )}
          </SheetTitle>
        </SheetHeader>

        {count === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 py-12 text-center">
            <div className="flex size-14 items-center justify-center rounded-full bg-secondary">
              <ShoppingBag className="size-7 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                Your quote list is empty
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Add products from the catalog to request bulk pricing in one go.
              </p>
            </div>
            <SheetClose asChild>
              <Button asChild variant="outline" size="sm">
                <Link href="#catalog">Browse catalog</Link>
              </Button>
            </SheetClose>
          </div>
        ) : (
          <>
            {/* Items list (scrollable) */}
            <div className="nice-scroll flex-1 overflow-y-auto px-4 py-4">
              <ul className="flex flex-col gap-3">
                {items.map((item) => {
                  const product = catalogProducts.find((p) => p.id === item.id);
                  return (
                    <li
                      key={item.id}
                      className="rounded-xl border border-border bg-card p-3"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-foreground">
                            {item.name}
                          </p>
                          <p className="truncate text-xs italic text-muted-foreground">
                            {item.latinName}
                          </p>
                        </div>
                        <button
                          type="button"
                          aria-label={`Remove ${item.name}`}
                          onClick={() => remove(item.id)}
                          className="flex size-7 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>

                      <div className="mt-2 grid grid-cols-3 gap-2">
                        <Field label="Form">
                          <select
                            value={item.form}
                            onChange={(e) =>
                              update(item.id, { form: e.target.value })
                            }
                            className="h-8 w-full rounded-md border border-input bg-background px-2 text-xs"
                          >
                            {product?.forms.map((f) => (
                              <option key={f} value={f}>
                                {f}
                              </option>
                            ))}
                          </select>
                        </Field>
                        <Field label="Grade">
                          <select
                            value={item.grade}
                            onChange={(e) =>
                              update(item.id, { grade: e.target.value })
                            }
                            className="h-8 w-full rounded-md border border-input bg-background px-2 text-xs"
                          >
                            {product?.grades.map((g) => (
                              <option key={g} value={g}>
                                {g}
                              </option>
                            ))}
                          </select>
                        </Field>
                        <Field label="Quantity">
                          <Input
                            value={item.quantity}
                            onChange={(e) =>
                              update(item.id, { quantity: e.target.value })
                            }
                            placeholder="e.g. 2 MT"
                            className="h-8 px-2 text-xs"
                          />
                        </Field>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Footer actions */}
            <div className="flex flex-col gap-2 border-t border-border px-6 py-4">
              <div className="flex items-center justify-between">
                <SheetClose asChild>
                  <Button asChild size="sm" className="w-full">
                    <Link href="#contact">
                      Request quote for {count} item{count === 1 ? "" : "s"}
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </SheetClose>
              </div>
              <button
                type="button"
                onClick={clear}
                className="flex items-center justify-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-destructive"
              >
                <X className="size-3.5" />
                Clear all
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {children}
    </div>
  );
}
