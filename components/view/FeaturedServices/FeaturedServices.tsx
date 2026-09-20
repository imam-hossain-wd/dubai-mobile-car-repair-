"use client";

import Link from "next/link";
import {
  RiArrowRightSLine,
  RiFlashlightFill,
  RiShieldCheckFill,
  RiTimeFill,
} from "@remixicon/react";
import { services } from "@/data/services/services";
import { SiteConfig } from "@/config/siteconfig";
import { ServiceCard } from "@/components/shared/card/ServiceCard";

const FEATURED_SERVICE_SLUGS = [
  "battery-replacement",
  "jump-start",
  "computer-diagnostic",
  "alternator-repair",
  "fuel-pump-repair",
  "starter-motor-repair",
  "ac-repair",
  "brake-pad-repair",
];


interface FeaturedServicesProps {
  title?: string;
  subtitle?: string;
  limit?: number;
  showAll?: boolean;
}


export function FeaturedServices({
  title = "Featured Services",
  subtitle = "Our most popular mobile repair services with transparent pricing",
  limit = 8,
  showAll = false,
}: FeaturedServicesProps) {
  const { responseTime } = SiteConfig;

  const featuredServices = services.filter((service) =>
    FEATURED_SERVICE_SLUGS.some(
      (slug) =>
        service.slug === slug ||
        service.slug.includes(slug) ||
        slug.includes(service.slug)
    )
  );

  const baseServices =
    featuredServices.length > 0 ? featuredServices : services;
    
  const displayServices = showAll ? baseServices : baseServices.slice(0, limit);

  return (
    <section className="relative w-full overflow-hidden bg-background">
      {/* Background decorative layer */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-125 w-225 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.922_0_0/0.4)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.922_0_0/0.4)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
      </div>

      <div className="container relative mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-10">
        {/* ============ Section Header ============ */}
        <div className="mb-12 lg:mb-16">
          {/* Top eyebrow row */}
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5">
              <span className="size-1.5 rounded-full bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                Featured
              </span>
            </span>
            <div className="h-px flex-1 bg-linear-to-r from-primary/40 via-border to-transparent" />
          </div>

          {/* Title + Stats Row */}
          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            {/* Left: Title block */}
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {title.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-primary">
                  {title.split(" ").slice(-1)}
                </span>
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {subtitle}
              </p>
            </div>

            {/* Right: Trust stat chips */}
            <div className="flex flex-wrap items-center gap-3">
              <StatChip
                icon={<RiTimeFill className="size-3.5" />}
                label={`${responseTime} Response`}
              />
              <StatChip
                icon={<RiShieldCheckFill className="size-3.5" />}
                label="Certified Pros"
              />
              <StatChip
                icon={<RiFlashlightFill className="size-3.5" />}
                label={`${displayServices.length} Services`}
              />
            </div>
          </div>
        </div>

        {/* ============ Services Grid ============ */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayServices.map((service, index) => (
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

        {/* ============ Bottom CTA ============ */}
        {!showAll && (
          <div className="mt-14 lg:mt-16">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-linear-to-br from-primary/5 via-background to-background p-6 sm:p-8 lg:p-10">
              {/* Corner accents */}
              <div className="absolute left-0 top-0 size-16 border-l-2 border-t-2 border-primary/40" />
              <div className="absolute bottom-0 right-0 size-16 border-b-2 border-r-2 border-primary/40" />

              <div className="relative flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
                <div className="max-w-xl">
                  <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    Need something not listed here?
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground sm:text-base">
                    We handle 19+ mobile car repair services across Dubai.
                    Browse the complete catalog.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href="/services"
                    className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90"
                  >
                    View All Services
                    <RiArrowRightSLine className="size-5" />
                  </Link>
                  <Link
                    href={SiteConfig.numberCallLink}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-primary/30 bg-background px-7 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:bg-primary/5"
                  >
                    Call Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ============ Stat Chip Sub-component ============ */
function StatChip({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 shadow-sm">
      <span className="flex size-5 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </span>
      <span className="text-xs font-semibold text-foreground sm:text-sm">
        {label}
      </span>
    </div>
  );
}