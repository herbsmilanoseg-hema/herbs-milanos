"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { toast } from "sonner";
import {
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  Loader2,
  Paperclip,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { useLanguage } from "@/i18n/use-language";
import { site } from "@/data/site";

interface FormState {
  name: string;
  company: string;
  country: string;
  email: string;
  phone: string;
  category: string;
  product: string;
  quantity: string;
  form: string;
  packing: string;
  port: string;
  incoterm: string;
  notes: string;
}

const initial: FormState = {
  name: "",
  company: "",
  country: "",
  email: "",
  phone: "",
  category: "",
  product: "",
  quantity: "",
  form: "",
  packing: "",
  port: "",
  incoterm: "",
  notes: "",
};

function ContactForm() {
  const { t, lang } = useLanguage();
  const params = useSearchParams();
  const [form, setForm] = useState<FormState>({
    ...initial,
    product: params.get("product") ?? "",
  });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.company || !form.country) {
      toast.error(
        lang === "ar" ? "يرجى ملء الحقول المطلوبة" : "Please fill required fields"
      );
      return;
    }
    setSubmitting(true);
    try {
      // Send to the backend RFQ route which emails the working address
      // (herbs.milanos.eg@gmail.com via site.contact.email).
      const res = await fetch("/api/rfq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setForm({ ...initial, product: "" });
      toast.success(t.contact.form.success, { duration: 8000 });
    } catch {
      // Genuine failure — do NOT show success toast (would mislead the user).
      // Keep the form populated so they can retry or contact us via WhatsApp.
      toast.error(
        lang === "ar"
          ? "تعذّر إرسال الطلب. حاول مرة أخرى أو راسلنا على واتساب."
          : "Failed to send. Please try again or contact us on WhatsApp.",
        { duration: 10000 }
      );
    } finally {
      setSubmitting(false);
    }
  };

  const update =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
      aria-label="RFQ form"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={`${t.contact.form.name} *`}>
          <Input required value={form.name} onChange={update("name")} placeholder="" />
        </Field>
        <Field label={`${t.contact.form.company} *`}>
          <Input required value={form.company} onChange={update("company")} />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={`${t.contact.form.country} *`}>
          <Input required value={form.country} onChange={update("country")} />
        </Field>
        <Field label={`${t.contact.form.email} *`}>
          <Input required type="email" value={form.email} onChange={update("email")} />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t.contact.form.phone}>
          <Input value={form.phone} onChange={update("phone")} />
        </Field>
        <Field label={t.contact.form.category}>
          <Select
            value={form.category}
            onChange={update("category")}
            options={["Herbs", "Spices", "Seeds", "Essential Oils", "Vegetable Oils"]}
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t.contact.form.product}>
          <Input value={form.product} onChange={update("product")} />
        </Field>
        <Field label={t.contact.form.quantity}>
          <Input value={form.quantity} onChange={update("quantity")} placeholder="e.g. 5 MT" />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t.contact.form.form}>
          <Select
            value={form.form}
            onChange={update("form")}
            options={["Whole", "Cut", "TBC", "Rubbed", "Powder", "Ground", "Oil"]}
          />
        </Field>
        <Field label={t.contact.form.packing}>
          <Select
            value={form.packing}
            onChange={update("packing")}
            options={["25 kg bags", "Cartons", "Private Label", "Other"]}
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={`${t.contact.form.port} *`}>
          <Input value={form.port} onChange={update("port")} placeholder="e.g. Hamburg" />
        </Field>
        <Field label={t.contact.form.incoterm}>
          <Select
            value={form.incoterm}
            onChange={update("incoterm")}
            options={[...site.incoterms, "Other"]}
          />
        </Field>
      </div>

      <Field label={t.contact.form.notes}>
        <Textarea
          value={form.notes}
          onChange={update("notes")}
          rows={4}
        />
      </Field>

      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Paperclip className="size-3.5" />
        {t.contact.form.attachment}
      </div>

      <Button type="submit" disabled={submitting} className="w-full sm:w-auto">
        {submitting ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            {t.contact.form.sending}
          </>
        ) : (
          <>
            <Send className="size-4" />
            {t.contact.form.submit}
          </>
        )}
      </Button>
    </form>
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
    <div className="flex flex-col gap-1.5">
      <Label className="text-sm font-medium text-foreground">{label}</Label>
      {children}
    </div>
  );
}

function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="flex h-9 w-full rounded-md border border-input bg-background px-3 text-sm"
    >
      <option value="">—</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}

export default function ContactPage() {
  const { t } = useLanguage();

  const contactCards = [
    {
      icon: <MapPin className="size-5" />,
      title: t.contact.info.hq.split(",")[0],
      value: t.contact.info.hq,
    },
    {
      icon: <MessageCircle className="size-5" />,
      title: "WhatsApp",
      value: site.contact.whatsapp,
      href: site.contact.whatsappLink,
      external: true,
    },
    {
      icon: <Mail className="size-5" />,
      title: "Email",
      value: site.contact.email,
      href: `mailto:${site.contact.email}`,
    },
    {
      icon: <Clock className="size-5" />,
      title: "Hours",
      value: t.contact.info.hours,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
          <Image
            src="/contact-hero.jpg"
            alt="Rustic herbal spice garden — fresh herbs, spices and botanical ingredients"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-wider text-white/80">
                {t.contact.eyebrow}
              </p>
              <h1 className="banner-text text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl font-serif">
                {t.contact.heading}
              </h1>
              <div className="mt-6 botanical-divider" aria-hidden />
              <p className="banner-text mt-6 text-base text-white sm:text-lg">
                {t.contact.intro}
              </p>
            </div>
          </div>
        </section>

        <section className="scroll-mt-24 bg-background py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
              {/* Contact details */}
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {contactCards.map((card, i) => {
                  const content = (
                    <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40 hover:bg-primary/5">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        {card.icon}
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          {card.title}
                        </p>
                        <p className="truncate text-sm font-medium text-foreground">
                          {card.value}
                        </p>
                      </div>
                    </div>
                  );
                  return card.href ? (
                    <a
                      key={i}
                      href={card.href}
                      target={card.external ? "_blank" : undefined}
                      rel={card.external ? "noopener noreferrer" : undefined}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={i}>{content}</div>
                  );
                })}
              </div>

              {/* Form */}
              <Suspense fallback={null}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
