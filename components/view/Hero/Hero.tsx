import Link from "next/link";
import Image from "next/image";
import {
  RiArrowRightLine,
  RiPhoneFill,
  RiWhatsappFill,
  RiShieldCheckFill,
  RiTimeFill,
  RiToolsFill,
  RiMapPinFill,
  RiStarFill,
  RiFlashlightFill,
  RiCheckboxCircleFill,
  RiArrowRightUpLine,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteconfig";
import { heroBanner } from "@/config/imageConfig";

const STATS = [
  {
    icon: RiTimeFill,
    value: "5–30",
    unit: "min",
    label: "Response Time",
  },
  {
    icon: RiShieldCheckFill,
    value: "100%",
    unit: "",
    label: "Certified Pros",
  },
  {
    icon: RiToolsFill,
    value: "90%",
    unit: "",
    label: "Onsite Fix Rate",
  },
];

const TRUST_POINTS = [
  "Available 24/7 across Dubai",
  "No towing required",
  "Transparent upfront pricing",
];

export function Hero() {
  const { displayNumber, numberCallLink, whatsappCallLink, responseTime, city } =
    SiteConfig;

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-foreground lg:min-h-screen">
      {/* ============ Background decorative layer ============ */}
      <div className="pointer-events-none absolute inset-0">
        {/* Primary glow */}
        <div className="absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-1/4 right-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />

        {/* Radial dot grid with mask */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,oklch(1_0_0/0.05)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />

        {/* Top + bottom hairline accents */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="relative container mx-auto flex items-center px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ============ LEFT: Content (6 cols) ============ */}
          <div className="lg:col-span-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full rounded-full bg-primary/60" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                24/7 Emergency · {city}
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-background sm:text-5xl lg:text-6xl">
              Car Breakdown?{" "}
              <span className="text-primary">We Come To You</span>
              <br className="hidden sm:block" />
              <span className="text-background/90">
                {" "}in {responseTime}
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-background/60 md:text-base">
              Dubai&apos;s most trusted mobile car repair service. Certified
              mechanics, transparent pricing, and complete onsite repairs 
              wherever your car is parked.
            </p>

            {/* Trust points */}
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {TRUST_POINTS.map((point, i) => (
                <li
                  key={i}
                  className="inline-flex items-center gap-2 text-xs font-medium text-background/70 sm:text-sm"
                >
                  <RiCheckboxCircleFill className="size-3.5 text-primary" />
                  {point}
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

            {/* Stats row */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-background/10 pt-8">
              {STATS.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                      <Icon className="size-4 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold leading-none text-background sm:text-base">
                        {stat.value}
                        {stat.unit && (
                          <span className="ml-0.5 text-xs font-semibold text-background/60">
                            {stat.unit}
                          </span>
                        )}
                      </p>
                      <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-background/50 sm:text-[11px]">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ============ RIGHT: Image Composition (6 cols) ============ */}
          <div className="relative lg:col-span-6 lg:pl-8">
            <div className="relative">
              {/* Main image */}
              <div className="relative aspect-3/5 w-full overflow-hidden rounded-3xl border border-background/10 bg-neutral-900 sm:aspect-4/3 lg:aspect-5/4">
                <Image
                  src={heroBanner?.hero}
                  alt="Certified mobile car mechanic repairing a vehicle on-site in Dubai"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Corner hairlines on image */}
                <div className="pointer-events-none absolute right-0 top-0 size-16">
                  <div className="absolute right-0 top-0 h-px w-10 bg-primary/60" />
                  <div className="absolute right-0 top-0 h-10 w-px bg-primary/60" />
                </div>
              </div>

              {/* ---------- Floating Card: Live Availability (bottom-left) ---------- */}
              <div className="absolute -bottom-6 -left-4 w-[calc(100%+2rem)] max-w-xs rounded-2xl border border-background/10 bg-neutral-950/90 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl sm:-left-6 sm:w-auto">
                <div className="flex items-center gap-3.5">
                  {/* Live indicator */}
                  <div className="relative flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary">
                    <RiFlashlightFill className="size-5 text-primary-foreground" />
                    {/* Pulse dot */}
                    <span className="absolute -right-0.5 -top-0.5 flex size-3">
                      <span className="absolute inline-flex size-full rounded-full bg-primary/60" />
                      <span className="relative inline-flex size-3 rounded-full bg-primary" />
                    </span>
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-green-500" />
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-background/50">
                        Live Now
                      </p>
                    </div>
                    <p className="mt-0.5 text-sm font-bold leading-tight text-background">
                      Mechanics Available
                    </p>
                    <p className="mt-0.5 text-[11px] text-background/50">
                      {responseTime} response nearby
                    </p>
                  </div>
                </div>
              </div>

              {/* ---------- Floating Card: Rating (top-right) ---------- */}
              <div className="absolute -top-4 -right-3 rounded-2xl border border-background/10 bg-neutral-950/90 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl sm:-right-5">
                <div className="flex items-center gap-2.5">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <RiStarFill key={i} className="size-4 text-primary" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-background">5.0</span>
                </div>
                <p className="mt-1.5 text-[11px] font-medium text-background/50">
                  500+ Happy Customers
                </p>
              </div>

              {/* ---------- Floating Chip: Location (top-left) ---------- */}
              <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-background/15 bg-black/60 px-3 py-1.5 backdrop-blur-md">
                <RiMapPinFill className="size-3 text-primary" />
                <span className="text-[10px] font-semibold uppercase tracking-wider text-background/90">
                  {city}, UAE
                </span>
              </div>

              {/* ---------- Floating CTA: Browse Services (bottom-right) ---------- */}
              <Link
                href="/services"
                className="group absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full border border-background/15 bg-black/60 px-3 py-1.5 backdrop-blur-md transition-colors hover:border-primary/50"
              >
                <span className="text-[10px] font-semibold uppercase tracking-wider text-background/90 group-hover:text-primary">
                  19+ Services
                </span>
                <RiArrowRightUpLine className="size-3 text-primary" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}