// components/sections/FAQ.tsx
"use client";

import { useState, useMemo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import {
  RiArrowDownSLine,
  RiQuestionLine,
  RiTimeLine,
  RiMapPinLine,
  RiPriceTag3Line,
  RiShieldCheckFill,
  RiFlashlightFill,
  RiCustomerServiceFill,
  RiPhoneFill,
  RiArrowRightLine,
  RiCheckboxCircleFill,
} from "@remixicon/react";
import { faqData } from "@/data/faq";
import { cn } from "@/lib/utils";
import { SiteConfig } from "@/config/siteconfig";

/* ============ Category mapping (id ranges) ============ */
const CATEGORIES = [
  { id: "all", label: "All Questions", icon: RiQuestionLine },
  { id: "dispatch", label: "Dispatch & Coverage", icon: RiMapPinLine, range: [1, 5] },
  { id: "battery", label: "Battery & Electrical", icon: RiFlashlightFill, range: [6, 10] },
  { id: "mechanical", label: "Mechanical & Diagnostic", icon: RiShieldCheckFill, range: [11, 15] },
  { id: "pricing", label: "Pricing & Warranty", icon: RiPriceTag3Line, range: [16, 20] },
] as const;

/* ============ JSON-LD Schema ============ */
const generateFAQSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
});

export function FAQ() {
  const { city, responseTime, serviceAreas } = SiteConfig;
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openItem, setOpenItem] = useState<string>("faq-1");

  /* Filter FAQs by category */
  const filteredFAQs = useMemo(() => {
    if (activeCategory === "all") return faqData;

    const category = CATEGORIES.find((c) => c.id === activeCategory);
    if (!category || !("range" in category)) return faqData;

    const [min, max] = category.range;
    return faqData.filter((faq) => {
      const num = parseInt(faq.id.replace("faq-", ""), 10);
      return num >= min && num <= max;
    });
  }, [activeCategory]);

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* ============ Background decorative layer ============ */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,oklch(0_0_0/0.04)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ============ Section Header ============ */}
        <div className="mb-12 lg:mb-16">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5">
              <span className="size-1.5 rounded-full bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                Help Center
              </span>
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/40 via-neutral-200 to-transparent" />
          </div>

          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
                Frequently Asked{" "}
                <span className="text-primary">Questions</span>
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-500 sm:text-base">
                Everything you need to know about our mobile car repair service
                across {city}. Can&apos;t find your answer?{" "}
                <Link
                  href="/contact"
                  className="font-semibold text-primary underline-offset-4 hover:underline"
                >
                  Contact us
                </Link>
                .
              </p>
            </div>

            {/* Trust chips */}
            <div className="flex flex-wrap items-center gap-3">
              <StatChip
                icon={<RiQuestionLine className="size-3.5" />}
                label={`${faqData.length} Questions`}
              />
              <StatChip
                icon={<RiTimeLine className="size-3.5" />}
                label="Quick Answers"
              />
            </div>
          </div>
        </div>

        {/* ============ Category Filter ============ */}
        <div className="mb-8 overflow-x-auto scrollbar-hide">
          <div className="flex min-w-max items-center gap-2">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-colors",
                    isActive
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-neutral-200 bg-white text-neutral-700 hover:border-primary/40 hover:text-primary"
                  )}
                >
                  <Icon className="size-3.5" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ============ Main Grid: FAQ List + Sidebar ============ */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* ---------- LEFT: FAQ Accordion (8 cols) ---------- */}
          <div className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white">
              {/* Top accent bar */}
              <div className="h-1 w-full bg-gradient-to-r from-primary/40 via-primary to-primary/40" />

              {/* Corner hairlines */}
              <div className="pointer-events-none absolute right-0 top-1 size-14">
                <div className="absolute right-0 top-0 h-px w-8 bg-primary/30" />
                <div className="absolute right-0 top-0 h-8 w-px bg-primary/30" />
              </div>

              <div className="p-2 sm:p-3">
                <Accordion
                  value={openItem}
                  onValueChange={setOpenItem}
                  className="space-y-1.5"
                >
                  {filteredFAQs.slice(0,10).map((faq, index) => (
                    <AccordionItem
                      key={faq.id}
                      value={faq.id}
                      className={cn(
                        "border border-transparent transition-colors",
                        "data-[state=open]:border-primary/30 data-[state=open]:bg-primary/[0.03]",
                        "rounded-xl"
                      )}
                    >
                      <AccordionTrigger className="group flex w-full items-center gap-3 px-4 py-4 text-left hover:no-underline sm:px-5 sm:py-5">
                        {/* Folio number */}
                        <span
                          className={cn(
                            "flex size-8 shrink-0 items-center justify-center rounded-lg font-mono text-[11px] font-bold transition-colors",
                            "bg-neutral-100 text-neutral-500",
                            "group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground"
                          )}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {/* Question */}
                        <span className="flex-1 pr-2 text-left text-sm font-semibold leading-snug text-neutral-900 transition-colors group-hover:text-primary sm:text-base">
                          {faq.question}
                        </span>

                        {/* Chevron */}
                        <RiArrowDownSLine
                          className={cn(
                            "size-5 shrink-0 text-neutral-400 transition-transform duration-200",
                            "group-data-[state=open]:rotate-180 group-data-[state=open]:text-primary"
                          )}
                        />
                      </AccordionTrigger>

                      <AccordionContent className="px-4 pb-5 pt-0 sm:px-5">
                        <div className="relative ml-4 pl-6 sm:ml-5 sm:pl-7">
                          {/* Decorative vertical line */}
                          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

                          <p className="text-sm leading-relaxed text-neutral-600">
                            {faq.answer}
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                {/* Empty state (safety net) */}
                {filteredFAQs.length === 0 && (
                  <div className="p-10 text-center">
                    <RiQuestionLine className="mx-auto size-10 text-neutral-300" />
                    <p className="mt-3 text-sm text-neutral-500">
                      No questions in this category yet.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ---------- RIGHT: Sticky Sidebar (4 cols) ---------- */}
          <div className="lg:col-span-4">
            <div className="space-y-5 lg:sticky lg:top-8">
              {/* ===== Quick Facts Card ===== */}
              <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
                  <div className="flex items-center gap-2.5">
                    <RiFlashlightFill className="size-4 text-primary" />
                    <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-neutral-900">
                      Quick Facts
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1">
                    <span className="size-1.5 rounded-full bg-primary" />
                    <span className="font-mono text-[10px] font-bold text-primary">
                      LIVE
                    </span>
                  </span>
                </div>

                {/* Facts list */}
                <div className="divide-y divide-neutral-200">
                  <FactRow
                    icon={<RiTimeLine className="size-4" />}
                    value={responseTime}
                    label="Average Response Time"
                  />
                  <FactRow
                    icon={<RiMapPinLine className="size-4" />}
                    value={`${serviceAreas.length}+`}
                    label={`Areas Across ${city}`}
                  />
                  <FactRow
                    icon={<RiPriceTag3Line className="size-4" />}
                    value="100%"
                    label="Transparent Pricing"
                  />
                  <FactRow
                    icon={<RiShieldCheckFill className="size-4" />}
                    value="12-24"
                    label="Month Warranty"
                  />
                </div>
              </div>

              {/* ===== 24/7 Emergency Card (Primary) ===== */}
              <div className="relative overflow-hidden rounded-2xl border border-primary bg-primary p-5">
                {/* Dot pattern */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,oklch(0_0_0/0.08)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40" />

                {/* Corner hairlines */}
                <div className="pointer-events-none absolute right-0 top-0 size-12">
                  <div className="absolute right-0 top-0 h-px w-6 bg-primary-foreground/60" />
                  <div className="absolute right-0 top-0 h-6 w-px bg-primary-foreground/60" />
                </div>

                <div className="relative">
                  <div className="flex items-center gap-2">
                    <RiCustomerServiceFill className="size-4 text-primary-foreground" />
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-primary-foreground/80">
                      24/7 Support
                    </span>
                  </div>

                  <p className="mt-4 text-3xl font-black leading-none tracking-tight text-primary-foreground">
                    24/7
                  </p>
                  <p className="mt-1.5 text-sm font-semibold text-primary-foreground">
                    Emergency Car Repair
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-primary-foreground/70">
                    Available every day of the year — nights, weekends, and
                    holidays.
                  </p>

                  <div className="mt-5 flex flex-col gap-2">
                    <Link
                      href={SiteConfig.numberCallLink}
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary-foreground px-4 text-sm font-semibold text-primary transition-colors hover:bg-primary-foreground/90"
                    >
                      <RiPhoneFill className="size-4" />
                      Call Now
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border-2 border-primary-foreground/25 px-4 text-sm font-semibold text-primary-foreground transition-colors hover:border-primary-foreground/60"
                    >
                      Book Online
                      <RiArrowRightLine className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* ===== Still have questions card ===== */}
              <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5">
                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <RiQuestionLine className="size-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold tracking-tight text-neutral-900">
                      Still have questions?
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-neutral-500">
                      Our team responds within minutes — day or night.
                    </p>
                    <Link
                      href="/contact"
                      className="group mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary"
                    >
                      Get in touch
                      <RiArrowRightLine className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ JSON-LD Schema ============ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema()) }}
      />
    </section>
  );
}

/* ============ Sub-components ============ */

function StatChip({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3.5 py-2 shadow-sm">
      <span className="flex size-5 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </span>
      <span className="text-xs font-semibold text-neutral-900 sm:text-sm">
        {label}
      </span>
    </div>
  );
}

function FactRow({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3.5 px-5 py-3.5">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-bold leading-none tracking-tight text-neutral-900">
          {value}
        </p>
        <p className="mt-1 truncate text-[11px] font-medium uppercase tracking-wider text-neutral-500">
          {label}
        </p>
      </div>
    </div>
  );
}

function TrustItem({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-4 p-5 sm:p-6">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-bold tracking-tight text-neutral-900">
          {title}
        </p>
        <p className="mt-0.5 text-xs text-neutral-500">{subtitle}</p>
      </div>
    </div>
  );
}