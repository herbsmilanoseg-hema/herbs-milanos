"use client";

/**
 * Language switcher — REAL i18n. Clicking a language calls setLang() from the
 * LanguageContext, which updates <html lang>/<html dir> and triggers the whole
 * page to re-render in the selected language via the t() dictionary.
 */

import { Globe, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { languages } from "@/i18n/locales";
import { useLanguage } from "@/i18n/use-language";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage();
  const active = languages.find((l) => l.code === lang) ?? languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={cn("gap-1.5 px-2 text-sm", className)}
          aria-label="Select language"
        >
          <Globe className="size-4" />
          <span className="hidden sm:inline">{active.label}</span>
          <span className="sm:hidden">{active.code.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-52">
        <DropdownMenuLabel className="text-xs text-muted-foreground">
          {active.code === "ar" ? "لغة العرض" : "Display language"}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {languages.map((l) => {
          const isActive = l.code === lang;
          return (
            <DropdownMenuItem
              key={l.code}
              onSelect={() => setLang(l.code)}
              className="flex cursor-pointer items-center justify-between gap-2"
              dir={l.dir}
            >
              <span className="flex items-center gap-2">
                <span className="w-8 text-xs font-semibold text-primary">
                  {l.label}
                </span>
                <span className="text-xs text-muted-foreground uppercase">
                  {l.code}
                </span>
              </span>
              {isActive && <Check className="size-4 text-primary" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
