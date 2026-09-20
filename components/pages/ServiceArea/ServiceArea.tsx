// app/area-we-serve/page.tsx
import Link from "next/link";
import Image from "next/image";
import {
  RiPhoneFill,
  RiWhatsappFill,
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiMapPinFill,
  RiTimeFill,
  RiShieldCheckFill,
  RiFlashlightFill,
  RiStarFill,
  RiCustomerServiceFill,
  RiRoadMapFill,
  RiNavigationFill,
  RiBuildingFill,
  RiHome4Fill,
  RiStore2Fill,
  RiCarFill,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteconfig";

/* ============ Area icon mapping ============ */
const AREA_ICONS: Record<string, React.ElementType> = {
  Dubailand: RiRoadMapFill,
  "Arabian Ranches": RiHome4Fill,
  "Dubai Silicon Oasis": RiBuildingFill,
  "Dubai Motor City": RiCarFill,
  "Jumeirah Village Circle": RiHome4Fill,
  "Dubai Hills Estate": RiHome4Fill,
  "Business Bay": RiStore2Fill,
  "Al Barsha": RiBuildingFill,
  "Al Quoz": RiStore2Fill,
  "Downtown Dubai": RiBuildingFill,
};

/* ============ Coverage stats ============ */
const COVERAGE_STATS = [
  {
    icon: RiMapPinFill,
    value: "10+",
    label: "Districts Covered",
  },
  {
    icon: RiTimeFill,
    value: "5–30",
    label: "Minute Response",
  },
  {
    icon: RiShieldCheckFill,
    value: "100%",
    label: "Dubai Coverage",
  },
  {
    icon: RiCustomerServiceFill,
    value: "24/7",
    label: "Availability",
  },
];

/* ============ How dispatch works ============ */
const DISPATCH_STEPS = [
  {
    number: "01",
    icon: RiNavigationFill,
    title: "Share Your Location",
    description:
      "Call or WhatsApp us with your exact spot — building, parking level, or landmark.",
  },
  {
    number: "02",
    icon: RiRoadMapFill,
    title: "Nearest Unit Dispatched",
    description:
      "Our system routes the closest mobile mechanic to your location in real time.",
  },
  {
    number: "03",
    icon: RiFlashlightFill,
    title: "Arrive in 5–30 Minutes",
    description:
      "Fully equipped mobile unit arrives ready to diagnose and repair on-site.",
  },
];

export default function ServiceAreasPage() {
  const {
    brandName,
    displayNumber,
    numberCallLink,
    whatsappCallLink,
    city,
    country,
    responseTime,
    serviceAreas,
    GMB,
  } = SiteConfig;

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
                Service Areas · {city}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-background sm:text-5xl lg:text-6xl">
              Mobile Car Repair{" "}
              <span className="text-primary">Across All of Dubai</span>
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-background/60 sm:text-lg">
              From Marina to Dubailand, our mobile mechanics are strategically
              positioned across every major district — reaching you in{" "}
              {responseTime}, 24/7.
            </p>

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

          {/* Stats strip */}
          <div className="mt-14 grid grid-cols-2 gap-3 lg:mt-16 lg:grid-cols-4">
            {COVERAGE_STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-background/10 bg-background/[0.03] p-5 backdrop-blur-sm"
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
          SECTION 2: AREA GRID — WHITE EDITORIAL
      ============================================================ */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,oklch(0_0_0/0.04)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 lg:mb-16">
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5">
                <span className="size-1.5 rounded-full bg-primary" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                  Where We Serve
                </span>
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-primary/40 via-neutral-200 to-transparent" />
            </div>

            <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
                  Choose Your{" "}
                  <span className="text-primary">Dubai District</span>
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-500 sm:text-base">
                  Click any area to see detailed coverage, local response times,
                  and available services in your neighbourhood.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3.5 py-2">
                <span className="flex size-5 items-center justify-center rounded-full bg-primary/10">
                  <RiMapPinFill className="size-3 text-primary" />
                </span>
                <span className="text-xs font-semibold text-neutral-900 sm:text-sm">
                  {serviceAreas.length} Districts
                </span>
              </div>
            </div>
          </div>

          {/* Areas Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area, index) => {
              const Icon = AREA_ICONS[area.name] || RiMapPinFill;

              return (
                <Link
                  key={area.slug}
                  href={`/area-we-serve/${area.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-colors hover:border-primary/40"
                >
                  {/* Top accent bar */}
                  <div className="h-1 w-full bg-gradient-to-r from-primary/30 via-primary to-primary/30" />

                  {/* Corner hairlines */}
                  <div className="pointer-events-none absolute right-0 top-1 size-12">
                    <div className="absolute right-0 top-0 h-px w-6 bg-primary/30" />
                    <div className="absolute right-0 top-0 h-6 w-px bg-primary/30" />
                  </div>

                  {/* Faded giant folio number */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-2 -right-1 select-none font-mono text-[5rem] font-black leading-none text-primary/[0.05] sm:text-[6rem]"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative p-5 sm:p-6">
                    {/* Icon tile */}
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>

                    {/* Area name */}
                    <h3 className="mt-5 text-lg font-bold leading-tight tracking-tight text-neutral-900">
                      {area.name}
                    </h3>

                    {/* Meta line */}
                    <div className="mt-2 flex items-center gap-2 text-xs text-neutral-500">
                      <RiTimeFill className="size-3.5 text-primary" />
                      <span>{responseTime} response</span>
                      <span className="size-1 rounded-full bg-neutral-300" />
                      <span>24/7 available</span>
                    </div>

                    {/* Footer row */}
                    <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-primary">
                        <span className="size-1.5 rounded-full bg-primary" />
                        Covered
                      </span>
                      <span className="flex size-8 items-center justify-center rounded-full border border-neutral-200 bg-white transition-colors group-hover:border-primary group-hover:bg-primary">
                        <RiArrowRightUpLine className="size-3.5 text-neutral-400 transition-colors group-hover:text-primary-foreground" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3: DISPATCH PROCESS — BLACK EDITORIAL
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
                How Dispatch Works
              </span>
            </div>
            <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-background sm:text-4xl lg:text-5xl">
              From Your Call to{" "}
              <span className="text-primary">On-Site Repair</span>
            </h2>
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
            {DISPATCH_STEPS.map((step, i) => {
              const Icon = step.icon;
              const isLast = i === DISPATCH_STEPS.length - 1;
              return (
                <article
                  key={i}
                  className="group relative overflow-hidden rounded-2xl border border-background/10 bg-background/[0.03] p-6 sm:p-7"
                >
                  {/* Top accent bar */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />

                  {/* Corner hairlines */}
                  <div className="pointer-events-none absolute right-0 top-1 size-12">
                    <div className="absolute right-0 top-0 h-px w-6 bg-primary/40" />
                    <div className="absolute right-0 top-0 h-6 w-px bg-primary/40" />
                  </div>

                  {/* Icon + Step number row */}
                  <div className="flex items-center gap-4">
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/25">
                      <Icon className="size-6 text-primary-foreground" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-background/50">
                        Step
                      </span>
                      <span className="font-mono text-lg font-bold leading-none text-primary">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-lg font-bold tracking-tight text-background sm:text-xl">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-sm leading-relaxed text-background/60">
                    {step.description}
                  </p>

                  {/* Arrow cue */}
                  {!isLast && (
                    <div className="mt-5 flex items-center justify-between border-t border-background/10 pt-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                        Next
                      </span>
                      <RiArrowRightLine className="size-4 text-primary" />
                    </div>
                  )}
                  {isLast && (
                    <div className="mt-5 flex items-center justify-between border-t border-background/10 pt-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                        Ready
                      </span>
                      <RiShieldCheckFill className="size-4 text-primary" />
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: COVERAGE MAP + CONTACT — WHITE EDITORIAL
      ============================================================ */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left: Header + Info (5 cols) */}
            <div className="lg:col-span-5">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5">
                <span className="size-1.5 rounded-full bg-primary" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                  Coverage Map
                </span>
              </div>

              <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-neutral-900 sm:text-4xl">
                Complete{" "}
                <span className="text-primary">Dubai Coverage</span>
              </h2>

              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                Our mobile units are positioned across every major Dubai
                corridor — from Sheikh Zayed Road to Al Khail Road — ensuring
                the fastest possible response, wherever your car is parked.
              </p>

              {/* Info list */}
              <ul className="mt-8 space-y-3">
                <InfoRow
                  icon={<RiMapPinFill className="size-4" />}
                  label="Headquarters"
                  value={`${SiteConfig.streetAddress}, ${SiteConfig.location}, ${city}`}
                />
                <InfoRow
                  icon={<RiTimeFill className="size-4" />}
                  label="Coverage Hours"
                  value="24/7 · All Year Round"
                />
                <InfoRow
                  icon={<RiFlashlightFill className="size-4" />}
                  label="Response Time"
                  value={`${responseTime} across all Dubai`}
                />
              </ul>

              {/* CTAs */}
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
                  href={GMB.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-neutral-200 bg-white px-6 text-sm font-semibold text-neutral-900 transition-colors hover:border-primary hover:text-primary"
                >
                  <RiMapPinFill className="size-4" />
                  View on Maps
                </Link>
              </div>
            </div>

            {/* Right: Map (7 cols) */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-2xl border border-neutral-200">
                {/* Corner hairlines */}
                <div className="pointer-events-none absolute right-0 top-0 z-10 size-14">
                  <div className="absolute right-0 top-0 h-px w-8 bg-primary/40" />
                  <div className="absolute right-0 top-0 h-8 w-px bg-primary/40" />
                </div>

                {/* Top bar */}
                <div className="flex items-center justify-between border-b border-neutral-200 bg-neutral-50 px-5 py-3.5">
                  <div className="flex items-center gap-2">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex size-full rounded-full bg-primary/60" />
                      <span className="relative inline-flex size-2 rounded-full bg-primary" />
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-neutral-700">
                      Live Coverage Map
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-neutral-500">
                    {GMB.latitude}, {GMB.longitude}
                  </span>
                </div>

                {/* Map iframe */}
                <div className="relative aspect-4/3 w-full bg-neutral-100 sm:aspect-16/10">
                  <iframe
                    title={`${brandName} — Coverage Map`}
                    src={GMB.embedMap}
                    width="100%"
                    height="100%"
                    style={{
                      border: 0,
                      filter: "grayscale(0.15) contrast(1.05)",
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
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
                    Don&apos;t See Your Area?
                  </span>
                </span>

                <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-4xl">
                  We probably still cover you
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/70 sm:text-base">
                  Our mobile units reach every corner of Dubai — even areas not
                  listed above. Call us with your location and we&apos;ll
                  confirm availability in seconds.
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

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <li className="flex items-start gap-3.5 rounded-2xl border border-neutral-200 bg-white p-4">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
          {label}
        </p>
        <p className="mt-0.5 text-sm font-semibold leading-snug text-neutral-900">
          {value}
        </p>
      </div>
    </li>
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