// app/services/page.tsx
"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  RiPhoneFill,
  RiWhatsappFill,
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiFlashlightFill,
  RiTimeFill,
  RiShieldCheckFill,
  RiCustomerServiceFill,
  RiToolsFill,
  RiCarFill,
  RiBatteryFill,
  RiSnowflakeFill,
  RiSettingsFill,
  RiRoadsterFill,
  RiStarFill,
  RiCheckboxCircleFill,
  RiSearchLine,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteconfig";
import { services } from "@/data/services/services";
import { cn } from "@/lib/utils";
import { ServiceCard } from "@/components/shared/card/ServiceCard";

/* ============ Category definitions ============ */
const CATEGORIES = [
  {
    id: "all",
    label: "All Services",
    icon: RiToolsFill,
    match: () => true,
  },
  {
    id: "emergency",
    label: "Emergency",
    icon: RiFlashlightFill,
    match: (slug: string) =>
      [
        "jump-start",
        "battery-replacement",
        "emergancy-car-repair",
        "fuel-pump-repair",
      ].some((s) => slug.includes(s)),
  },
  {
    id: "electrical",
    label: "Electrical & Battery",
    icon: RiBatteryFill,
    match: (slug: string) =>
      [
        "battery",
        "alternator",
        "starter",
        "computer-diagnostic",
        "window-motor",
      ].some((s) => slug.includes(s)),
  },
  {
    id: "climate",
    label: "AC & Climate",
    icon: RiSnowflakeFill,
    match: (slug: string) => slug.includes("ac-"),
  },
  {
    id: "mechanical",
    label: "Mechanical",
    icon: RiSettingsFill,
    match: (slug: string) =>
      [
        "brake",
        "abs",
        "raditor",
        "radiator",
        "transmission",
        "mechanic",
      ].some((s) => slug.includes(s)),
  },
  {
    id: "maintenance",
    label: "Maintenance",
    icon: RiCarFill,
    match: (slug: string) =>
      ["oil-change", "car-service", "car-repair", "car-detailing"].some((s) =>
        slug.includes(s)
      ),
  },
] as const;

/* ============ Process steps ============ */
const PROCESS_STEPS = [
  {
    number: "01",
    title: "Call or Book",
    description:
      "Reach us 24/7 via phone, WhatsApp, or online. Tell us your issue and location.",
  },
  {
    number: "02",
    title: "Unit Dispatched",
    description:
      "The nearest mobile mechanic is routed to you — arriving in 5–30 minutes.",
  },
  {
    number: "03",
    title: "Onsite Diagnosis",
    description:
      "Dealer-grade scanners identify the exact fault before any work begins.",
  },
  {
    number: "04",
    title: "Repair & Test",
    description:
      "Fix performed on-site with OEM-grade parts and verified for full function.",
  },
];

/* ============ Trust items for hero ============ */
const HERO_TRUST = [
  { icon: RiFlashlightFill, label: "5–30 Min Response" },
  { icon: RiShieldCheckFill, label: "Certified Technicians" },
  { icon: RiCustomerServiceFill, label: "24/7 Availability" },
];

export default function ServicePage() {
  const {
    brandName,
    displayNumber,
    numberCallLink,
    whatsappCallLink,
    city,
    country,
    responseTime,
    serviceAreas,
  } = SiteConfig;

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  /* ============ Filter services ============ */
  const filteredServices = useMemo(() => {
    const category = CATEGORIES.find((c) => c.id === activeCategory);
    return services.filter((service) => {
      const matchesCategory = category ? category.match(service.slug) : true;
      const matchesSearch =
        searchQuery.trim() === "" ||
        service.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <main className="bg-white">
      {/* ============================================================
          SECTION 1: COMPACT HERO — BLACK EDITORIAL
      ============================================================ */}
      <section className="relative overflow-hidden bg-foreground pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,oklch(1_0_0/0.05)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full rounded-full bg-primary/60" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                Our Services · {city}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-background sm:text-5xl lg:text-6xl">
              Complete Mobile Car Repair{" "}
              <span className="text-primary">At Your Doorstep</span>
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-background/60 sm:text-lg">
              From emergency breakdowns to routine maintenance — {services.length}+
              certified services delivered to your location across {city} in{" "}
              {responseTime}.
            </p>

            {/* Trust chips */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {HERO_TRUST.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="inline-flex items-center gap-2 rounded-full border border-background/10 bg-background/[0.03] px-3.5 py-2 backdrop-blur-sm"
                  >
                    <span className="flex size-5 items-center justify-center rounded-full bg-primary/15">
                      <Icon className="size-3 text-primary" />
                    </span>
                    <span className="text-xs font-semibold text-background sm:text-sm">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Dual CTA */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={numberCallLink}
                className="group inline-flex h-13 items-center justify-center gap-2.5 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-colors hover:bg-primary/90"
              >
                <RiPhoneFill className="size-4" />
                Call {displayNumber}
                <RiArrowRightLine className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href={whatsappCallLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-13 items-center justify-center gap-2.5 rounded-xl border-2 border-background/15 bg-background/[0.03] px-6 text-sm font-semibold text-background backdrop-blur-sm transition-colors hover:border-primary/40 hover:text-primary"
              >
                <RiWhatsappFill className="size-4" />
                WhatsApp Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2: SERVICES GRID — WHITE EDITORIAL
      ============================================================ */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,oklch(0_0_0/0.04)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10 lg:mb-12">
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5">
                <span className="size-1.5 rounded-full bg-primary" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                  Browse Services
                </span>
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-primary/40 via-neutral-200 to-transparent" />
            </div>

            <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
                  Choose Your{" "}
                  <span className="text-primary">Repair Service</span>
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-500 sm:text-base">
                  Click any service to see detailed coverage, pricing, and
                  immediate availability in your area.
                </p>
              </div>

              {/* Search */}
              <div className="relative w-full sm:max-w-xs">
                <RiSearchLine className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12 w-full rounded-xl border border-neutral-200 bg-white pl-11 pr-4 text-sm text-neutral-900 placeholder:text-neutral-400 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
          </div>

          {/* Category filter */}
          <div className="mb-8 -mx-4 overflow-x-auto px-4 scrollbar-hide">
            <div className="flex min-w-max items-center gap-2">
              {CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-semibold transition-colors",
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

          {/* Results counter */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              {filteredServices.length}{" "}
              {filteredServices.length === 1 ? "Service" : "Services"}
            </p>
            <p className="text-xs text-neutral-400">
              Same-day availability · {responseTime} response
            </p>
          </div>

          {/* Services grid */}
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredServices.map((service, index) => (
                <ServiceCard
                  key={service.slug}
                  name={service.name}
                  slug={service.slug}
                  features={service.features}
                  image={service.service_banner?.src}
                  intro={service.intro}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 py-16 text-center">
              <RiSearchLine className="mx-auto size-10 text-neutral-300" />
              <p className="mt-4 text-sm font-semibold text-neutral-900">
                No services found
              </p>
              <p className="mt-1 text-xs text-neutral-500">
                Try a different search term or category.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="mt-5 inline-flex h-10 items-center gap-2 rounded-xl border border-primary/30 bg-primary/5 px-5 text-xs font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ============================================================
          SECTION 3: PROCESS — BLACK EDITORIAL
      ============================================================ */}
      <section className="relative overflow-hidden bg-foreground py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,oklch(1_0_0/0.05)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5">
              <span className="size-1.5 rounded-full bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                How It Works
              </span>
            </div>
            <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-background sm:text-4xl lg:text-5xl">
              From Call to{" "}
              <span className="text-primary">Fixed in 4 Steps</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-background/60 sm:text-base">
              Simple, transparent, and mobile-first. No towing, no workshops,
              no waiting rooms.
            </p>
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {PROCESS_STEPS.map((step, i) => {
              const isLast = i === PROCESS_STEPS.length - 1;
              return (
                <article
                  key={i}
                  className="group relative overflow-hidden rounded-2xl border border-background/10 bg-background/[0.03] p-6"
                >
                  {/* Top accent bar */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />

                  {/* Corner hairlines */}
                  <div className="pointer-events-none absolute right-0 top-1 size-12">
                    <div className="absolute right-0 top-0 h-px w-6 bg-primary/40" />
                    <div className="absolute right-0 top-0 h-6 w-px bg-primary/40" />
                  </div>

                  {/* Faded giant number */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-2 -top-4 select-none font-mono text-[6rem] font-black leading-none text-primary/[0.06]"
                  >
                    {step.number}
                  </span>

                  {/* Step label */}
                  <div className="relative flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-xl bg-primary">
                      <span className="font-mono text-xs font-bold text-primary-foreground">
                        {step.number}
                      </span>
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-background/50">
                      Step {i + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="relative mt-5 text-lg font-bold leading-tight tracking-tight text-background">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="relative mt-2.5 text-sm leading-relaxed text-background/60">
                    {step.description}
                  </p>

                  {/* Cue */}
                  <div className="relative mt-5 flex items-center justify-between border-t border-background/10 pt-4">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-primary">
                      <span className="size-1.5 rounded-full bg-primary" />
                      {isLast ? "Completed" : "Next Step"}
                    </span>
                    {isLast ? (
                      <RiCheckboxCircleFill className="size-4 text-primary" />
                    ) : (
                      <RiArrowRightLine className="size-4 text-background/30" />
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: WHY CHOOSE — WHITE EDITORIAL
      ============================================================ */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left: Content */}
            <div className="lg:col-span-5">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5">
                <span className="size-1.5 rounded-full bg-primary" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                  Why Choose Us
                </span>
              </div>

              <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-neutral-900 sm:text-4xl">
                Every Repair Backed by{" "}
                <span className="text-primary">Real Guarantees</span>
              </h2>

              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                {brandName} combines dealer-grade equipment, certified
                multi-brand technicians, and transparent pricing — all
                delivered to your location across {city}.
              </p>

              {/* Trust points */}
              <ul className="mt-6 space-y-3">
                {[
                  "RTA-compliant certified mechanics",
                  "Dealer-grade diagnostic scanners",
                  "OEM-grade parts with warranty",
                  "100% transparent upfront pricing",
                ].map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-white p-4"
                  >
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <RiCheckboxCircleFill className="size-3.5 text-primary" />
                    </span>
                    <span className="text-sm font-medium text-neutral-700">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={numberCallLink}
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90"
                >
                  <RiPhoneFill className="size-4" />
                  Call Now
                  <RiArrowRightLine className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-neutral-200 bg-white px-6 text-sm font-semibold text-neutral-900 transition-colors hover:border-primary hover:text-primary"
                >
                  Book Online
                  <RiArrowRightUpLine className="size-4" />
                </Link>
              </div>
            </div>

            {/* Right: Stats bento */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-4">
                <StatCard
                  icon={<RiFlashlightFill className="size-5" />}
                  value={responseTime}
                  label="Response Time"
                  description="Across every Dubai district"
                />
                <StatCard
                  icon={<RiShieldCheckFill className="size-5" />}
                  value="100%"
                  label="Guaranteed Work"
                  description="12–24 month warranty"
                />
                <StatCard
                  icon={<RiStarFill className="size-5" />}
                  value="5.0"
                  label="Customer Rating"
                  description="500+ verified reviews"
                />
                <StatCard
                  icon={<RiCustomerServiceFill className="size-5" />}
                  value="24/7"
                  label="Availability"
                  description="Nights, weekends, holidays"
                />
              </div>

              {/* Wide stat */}
              <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl border border-primary bg-primary p-5">
                <div className="flex items-center gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/15">
                    <RiRoadsterFill className="size-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-primary-foreground/70">
                      Coverage
                    </p>
                    <p className="text-base font-bold text-primary-foreground">
                      {serviceAreas.length}+ Dubai Districts
                    </p>
                  </div>
                </div>
                <Link
                  href="/area-we-serve"
                  className="group inline-flex items-center gap-1.5 rounded-xl border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-2.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/15"
                >
                  View All
                  <RiArrowRightLine className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5: FINAL CTA — PRIMARY PANEL
      ============================================================ */}
      <section className="relative overflow-hidden bg-white pb-20 lg:pb-24">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-primary bg-primary p-8 sm:p-10 lg:p-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,oklch(0_0_0/0.08)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30" />

            <div className="pointer-events-none absolute left-0 top-0 size-20">
              <div className="absolute left-0 top-0 h-px w-12 bg-primary-foreground/50" />
              <div className="absolute left-0 top-0 h-12 w-px bg-primary-foreground/50" />
            </div>
            <div className="pointer-events-none absolute bottom-0 right-0 size-20">
              <div className="absolute bottom-0 right-0 h-px w-12 bg-primary-foreground/50" />
              <div className="absolute bottom-0 right-0 h-12 w-px bg-primary-foreground/50" />
            </div>

            <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-1">
                  <span className="size-1.5 rounded-full bg-primary-foreground" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                    Not Sure Which Service?
                  </span>
                </span>

                <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-4xl">
                  We&apos;ll diagnose it for you — free
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/70 sm:text-base">
                  Call or WhatsApp with your car issue and location. Our
                  technicians will identify the right service and dispatch
                  immediately.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={numberCallLink}
                    className="group inline-flex h-14 items-center justify-center gap-3 rounded-xl bg-primary-foreground px-7 font-semibold text-primary shadow-lg shadow-black/10 transition-colors hover:bg-primary-foreground/95"
                  >
                    <RiPhoneFill className="size-4" />
                    <span className="text-base">{displayNumber}</span>
                    <RiArrowRightLine className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    href={whatsappCallLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-14 items-center justify-center gap-2.5 rounded-xl border-2 border-primary-foreground/30 bg-primary-foreground/5 px-7 font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:border-primary-foreground/60 hover:bg-primary-foreground/10"
                  >
                    <RiWhatsappFill className="size-4" />
                    WhatsApp Us
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="grid grid-cols-2 gap-3">
                  <TrustTile
                    icon={<RiFlashlightFill className="size-4" />}
                    value={responseTime}
                    label="Response"
                  />
                  <TrustTile
                    icon={<RiShieldCheckFill className="size-4" />}
                    value="100%"
                    label="Guaranteed"
                  />
                  <TrustTile
                    icon={<RiStarFill className="size-4" />}
                    value="5.0"
                    label="Rating"
                  />
                  <TrustTile
                    icon={<RiTimeFill className="size-4" />}
                    value="24/7"
                    label="Support"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ============================================================
   Sub-components
   ============================================================ */

function StatCard({
  icon,
  value,
  label,
  description,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 transition-colors hover:border-primary/40">
      {/* Corner hairlines */}
      <div className="pointer-events-none absolute right-0 top-0 size-12">
        <div className="absolute right-0 top-0 h-px w-6 bg-primary/30" />
        <div className="absolute right-0 top-0 h-6 w-px bg-primary/30" />
      </div>

      <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10">
        <span className="text-primary">{icon}</span>
      </div>

      <p className="mt-4 text-3xl font-black leading-none tracking-tight text-neutral-900">
        {value}
      </p>
      <p className="mt-1.5 text-[11px] font-bold uppercase tracking-wider text-primary">
        {label}
      </p>
      <p className="mt-1 text-xs leading-relaxed text-neutral-500">
        {description}
      </p>
    </div>
  );
}

function TrustTile({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/[0.06] p-4 backdrop-blur-sm">
      <div className="flex size-9 items-center justify-center rounded-lg bg-primary-foreground/15">
        <span className="text-primary-foreground">{icon}</span>
      </div>
      <p className="mt-3 text-base font-bold leading-none text-primary-foreground">
        {value}
      </p>
      <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground/60">
        {label}
      </p>
    </div>
  );
}