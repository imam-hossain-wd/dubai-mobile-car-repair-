// app/about/page.tsx
import Link from "next/link";
import Image from "next/image";
import {
  RiPhoneFill,
  RiWhatsappFill,
  RiArrowRightLine,
  RiShieldCheckFill,
  RiTimeFill,
  RiToolsFill,
  RiMapPinFill,
  RiStarFill,
  RiFlashlightFill,
  RiUserStarFill,
  RiRoadsterFill,
  RiCustomerServiceFill,
  RiCheckboxCircleFill,
  RiArrowRightUpLine,
  RiBuildingFill,
  RiTeamFill,
  RiAwardFill,
  RiGlobalFill,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteconfig";
import { aboutUs } from "@/data/businessInfo";
import { heroBanner } from "@/config/imageConfig";


/* ============ Content data ============ */
const STATS = [
  { value: "5+", label: "Years Experience", icon: RiAwardFill },
  { value: "500+", label: "Happy Customers", icon: RiUserStarFill },
  { value: "10+", label: "Service Areas", icon: RiMapPinFill },
  { value: "24/7", label: "Availability", icon: RiTimeFill },
];

const VALUES = [
  {
    icon: RiShieldCheckFill,
    title: "Certified Expertise",
    description:
      "RTA-compliant, multi-brand trained technicians using dealer-grade diagnostic tools.",
  },
  {
    icon: RiFlashlightFill,
    title: "Rapid Response",
    description:
      "Strategically positioned mobile units delivering 5–30 minute arrival across Dubai.",
  },
  {
    icon: RiCustomerServiceFill,
    title: "Transparent Pricing",
    description:
      "Upfront, itemized quotes before work begins. Zero hidden call-out fees, ever.",
  },
  {
    icon: RiToolsFill,
    title: "Complete Onsite Repairs",
    description:
      "90% of vehicle issues resolved at your location — no towing, no workshop delays.",
  },
];

const MILESTONES = [
  {
    year: "2020",
    title: "Founded in Dubai",
    description:
      "Launched as a mobile-only garage with 2 units covering Business Bay and Downtown.",
  },
  {
    year: "2022",
    title: "Fleet Expansion",
    description:
      "Grew to 8 fully equipped mobile units serving 6 major Dubai districts round-the-clock.",
  },
  {
    year: "2024",
    title: "500+ Customers",
    description:
      "Crossed 500 verified repairs with an average 5.0 rating and same-day completion rate.",
  },
  {
    year: "Today",
    title: "Dubai's Trusted Choice",
    description:
      "Serving all major Dubai communities with 90%+ onsite fix rate and 24/7 availability.",
  },
];

const TEAM_HIGHLIGHTS = [
  "RTA-compliant certified mechanics",
  "Multi-brand trained (European, Asian, American)",
  "Dealer-level diagnostic scanners",
  "Continuous technical training programs",
];

const AREAS_COVERED = [
  "Dubailand",
  "Arabian Ranches",
  "Dubai Silicon Oasis",
  "Dubai Motor City",
  "Jumeirah Village Circle",
  "Dubai Hills Estate",
  "Business Bay",
  "Al Barsha",
  "Al Quoz",
  "Downtown Dubai",
  "Dubai Marina",
  "JLT",
];

export default function AboutPage() {
  const {
    brandName,
    displayNumber,
    numberCallLink,
    whatsappCallLink,
    city,
    country,
    responseTime,
    foundedYear,
  } = SiteConfig;

  return (
    <main className="bg-white">
      {/* ============================================================
          SECTION 1: HERO — BLACK EDITORIAL
      ============================================================ */}
      <section className="relative min-h-[85vh] overflow-hidden bg-foreground pt-32 pb-20 lg:pt-40 lg:pb-28">
        {/* Background decorative layer */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,oklch(1_0_0/0.05)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left: Content */}
            <div className="lg:col-span-7">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full rounded-full bg-primary/60" />
                  <span className="relative inline-flex size-2 rounded-full bg-primary" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                  About Us · Since {foundedYear}
                </span>
              </div>

              {/* Headline */}
              <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-background sm:text-5xl lg:text-6xl">
                Dubai&apos;s Most Trusted{" "}
                <span className="text-primary">Mobile Car Repair</span> Team
              </h1>

              {/* Subtitle */}
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/60 sm:text-lg">
                We built {brandName} to solve a problem every Dubai driver
                knows well — the time, expense, and stress of traditional auto
                workshops. As a fully-equipped mobile garage on wheels, we
                bring certified mechanics directly to your location.
              </p>

              {/* Trust points */}
              <ul className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {[
                  "RTA-compliant certified technicians",
                  "Dealer-grade diagnostic equipment",
                  "Transparent upfront pricing",
                  "24/7 emergency availability",
                ].map((point, i) => (
                  <li
                    key={i}
                    className="inline-flex items-center gap-2.5 text-sm text-background/70"
                  >
                    <RiCheckboxCircleFill className="size-4 shrink-0 text-primary" />
                    {point}
                  </li>
                ))}
              </ul>

              {/* CTA buttons */}
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={numberCallLink}
                  className="group inline-flex h-14 items-center justify-center gap-3 rounded-xl bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-colors hover:bg-primary/90"
                >
                  <RiPhoneFill className="size-4" />
                  <span className="text-base">{displayNumber}</span>
                  <RiArrowRightLine className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>

                <Link
                  href={whatsappCallLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-14 items-center justify-center gap-2.5 rounded-xl border-2 border-background/15 bg-background/[0.03] px-7 text-sm font-semibold text-background backdrop-blur-sm transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <RiWhatsappFill className="size-4" />
                  WhatsApp Us
                </Link>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative lg:col-span-5">
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-3xl border border-background/10 bg-neutral-900">
                <Image
                  src={heroBanner?.hero}
                  alt="Certified mobile car mechanics at work in Dubai"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Corner hairlines */}
                <div className="pointer-events-none absolute right-0 top-0 size-16">
                  <div className="absolute right-0 top-0 h-px w-10 bg-primary/60" />
                  <div className="absolute right-0 top-0 h-10 w-px bg-primary/60" />
                </div>
              </div>

              {/* Floating: Founded badge */}
              <div className="absolute -left-4 top-6 rounded-2xl border border-background/10 bg-neutral-950/90 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl sm:-left-6">
                <div className="flex items-center gap-3">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary">
                    <RiAwardFill className="size-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-background/50">
                      Founded
                    </p>
                    <p className="text-sm font-bold text-background">
                      {foundedYear} · {city}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating: Rating badge */}
              <div className="absolute -bottom-6 -right-4 rounded-2xl border border-background/10 bg-neutral-950/90 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl sm:-right-6">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <RiStarFill key={i} className="size-4 text-primary" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-background">5.0</span>
                </div>
                <p className="mt-1 text-[11px] text-background/50">
                  500+ Verified Reviews
                </p>
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-16 grid grid-cols-2 gap-3 lg:mt-20 lg:grid-cols-4">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-background/10 bg-background/[0.03] p-5"
                >
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/15">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <p className="mt-4 text-3xl font-bold leading-none text-background">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-wider text-background/50">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2: STORY — WHITE EDITORIAL
      ============================================================ */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,oklch(0_0_0/0.04)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5">
              <span className="size-1.5 rounded-full bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                Our Story
              </span>
            </div>
            <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
              Built to Fix{" "}
              <span className="text-primary">Dubai&apos;s Broken</span>{" "}
              Workshop Experience
            </h2>
          </div>

          {/* Two column story */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <p className="text-base leading-relaxed text-neutral-600 sm:text-lg">
                {aboutUs.para1}
              </p>
            </div>
            <div className="lg:col-span-6">
              <p className="text-base leading-relaxed text-neutral-600 sm:text-lg">
                {aboutUs.para2}
              </p>
            </div>
          </div>

          {/* Milestones timeline */}
          <div className="mt-16 lg:mt-20">
            <div className="mb-8 flex items-center gap-4">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-900">
                Our Journey
              </h3>
              <div className="h-px flex-1 bg-gradient-to-r from-primary/40 via-neutral-200 to-transparent" />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {MILESTONES.map((milestone, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 transition-colors hover:border-primary/40"
                >
                  {/* Top accent bar */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/30 via-primary to-primary/30" />

                  {/* Corner hairlines */}
                  <div className="pointer-events-none absolute right-0 top-1 size-12">
                    <div className="absolute right-0 top-0 h-px w-6 bg-primary/30" />
                    <div className="absolute right-0 top-0 h-6 w-px bg-primary/30" />
                  </div>

                  <p className="font-mono text-xs font-bold text-primary">
                    {milestone.year}
                  </p>
                  <p className="mt-3 text-base font-bold tracking-tight text-neutral-900">
                    {milestone.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3: VALUES — BLACK EDITORIAL
      ============================================================ */}
      <section className="relative overflow-hidden bg-foreground py-20 lg:py-28">
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
                What We Stand For
              </span>
            </div>
            <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-background sm:text-4xl lg:text-5xl">
              The Principles Behind{" "}
              <span className="text-primary">Every Repair</span>
            </h2>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {VALUES.map((value, i) => {
              const Icon = value.icon;
              return (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl border border-background/10 bg-background/[0.03] p-6"
                >
                  {/* Corner hairlines */}
                  <div className="pointer-events-none absolute right-0 top-0 size-12">
                    <div className="absolute right-0 top-0 h-px w-6 bg-primary/40" />
                    <div className="absolute right-0 top-0 h-6 w-px bg-primary/40" />
                  </div>

                  {/* Icon tile */}
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/25">
                    <Icon className="size-6 text-primary-foreground" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold tracking-tight text-background">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-background/60">
                    {value.description}
                  </p>

                  {/* Faded giant number */}
                  <span className="pointer-events-none absolute -bottom-4 -right-2 select-none font-mono text-[5rem] font-black leading-none text-primary/[0.06]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: TEAM + COVERAGE — WHITE EDITORIAL
      ============================================================ */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left: Team */}
            <div className="lg:col-span-6">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5">
                <span className="size-1.5 rounded-full bg-primary" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                  Our Team
                </span>
              </div>

              <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-neutral-900 sm:text-4xl">
                Trained for{" "}
                <span className="text-primary">Every Vehicle</span> on Dubai&apos;s Roads
              </h2>

              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                Our team combines RTA-compliant auto electricians and
                diagnostic specialists who work on luxury European, American,
                and Asian vehicles daily — using the same tools dealerships use,
                but delivered to your location.
              </p>

              {/* Team highlights */}
              <ul className="mt-6 space-y-3">
                {TEAM_HIGHLIGHTS.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-white p-4"
                  >
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <RiCheckboxCircleFill className="size-3.5 text-primary" />
                    </span>
                    <span className="text-sm font-medium text-neutral-700">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90"
                >
                  Contact Our Team
                  <RiArrowRightLine className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-neutral-200 bg-white px-6 text-sm font-semibold text-neutral-900 transition-colors hover:border-primary hover:text-primary"
                >
                  Browse Services
                  <RiArrowRightUpLine className="size-4" />
                </Link>
              </div>
            </div>

            {/* Right: Coverage */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white">
                {/* Top accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-primary/40 via-primary to-primary/40" />

                {/* Corner hairlines */}
                <div className="pointer-events-none absolute right-0 top-1 size-14">
                  <div className="absolute right-0 top-0 h-px w-8 bg-primary/30" />
                  <div className="absolute right-0 top-0 h-8 w-px bg-primary/30" />
                </div>

                <div className="p-6 sm:p-7">
                  {/* Header */}
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <RiMapPinFill className="size-4 text-primary" />
                      <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-900">
                        Areas Covered
                      </h3>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1">
                      <span className="size-1.5 rounded-full bg-primary" />
                      <span className="font-mono text-[10px] font-bold text-primary">
                        {AREAS_COVERED.length}+
                      </span>
                    </span>
                  </div>

                  {/* Areas grid */}
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {AREAS_COVERED.map((area, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 rounded-lg border border-neutral-100 bg-neutral-50 px-3 py-2"
                      >
                        <span className="size-1 rounded-full bg-primary" />
                        <span className="truncate text-xs font-medium text-neutral-700">
                          {area}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="my-6 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

                  {/* Contact CTA */}
                  <div className="flex items-center gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary">
                      <RiFlashlightFill className="size-5 text-primary-foreground" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold tracking-tight text-neutral-900">
                        Not sure if we cover your area?
                      </p>
                      <p className="mt-0.5 text-xs text-neutral-500">
                        {responseTime} response across all of {city}
                      </p>
                    </div>
                    <Link
                      href={numberCallLink}
                      className="group inline-flex items-center gap-1.5 rounded-xl border border-primary/30 bg-primary/5 px-3.5 py-2.5 text-xs font-semibold text-primary transition-colors hover:bg-primary/10"
                    >
                      Call Now
                      <RiArrowRightLine className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5: FINAL CTA — PRIMARY PANEL
      ============================================================ */}
      <section className="relative overflow-hidden bg-white pb-20 lg:pb-28">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-primary bg-primary p-8 sm:p-10 lg:p-14">
            {/* Dot pattern */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,oklch(0_0_0/0.08)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30" />

            {/* Corner hairlines */}
            <div className="pointer-events-none absolute left-0 top-0 size-20">
              <div className="absolute left-0 top-0 h-px w-12 bg-primary-foreground/50" />
              <div className="absolute left-0 top-0 h-12 w-px bg-primary-foreground/50" />
            </div>
            <div className="pointer-events-none absolute bottom-0 right-0 size-20">
              <div className="absolute bottom-0 right-0 h-px w-12 bg-primary-foreground/50" />
              <div className="absolute bottom-0 right-0 h-12 w-px bg-primary-foreground/50" />
            </div>

            <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
              {/* Left */}
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-1">
                  <span className="size-1.5 rounded-full bg-primary-foreground" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                    Ready to Get Started?
                  </span>
                </span>

                <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-4xl">
                  Experience the future of mobile car repair
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/70 sm:text-base">
                  Call or WhatsApp us and a certified mechanic will be at your
                  location in {responseTime} — fully equipped to diagnose and
                  repair your vehicle on-site.
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

              {/* Right: Trust tiles */}
              <div className="lg:col-span-5">
                <div className="grid grid-cols-2 gap-3">
                  <TrustTile
                    icon={<RiShieldCheckFill className="size-4" />}
                    value="100%"
                    label="Guaranteed"
                  />
                  <TrustTile
                    icon={<RiTimeFill className="size-4" />}
                    value={responseTime}
                    label="Response"
                  />
                  <TrustTile
                    icon={<RiStarFill className="size-4" />}
                    value="5.0"
                    label="Rating"
                  />
                  <TrustTile
                    icon={<RiCustomerServiceFill className="size-4" />}
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