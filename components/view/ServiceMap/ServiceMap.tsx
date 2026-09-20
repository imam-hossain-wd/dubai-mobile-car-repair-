"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  RiMapPinLine,
  RiNavigationLine,
  RiTimeLine,
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiPhoneFill,
  RiMailFill,
  RiMap2Line,
  RiBuilding2Fill,
  RiStore2Fill,
  RiHome4Fill,
  RiRoadMapFill,
  RiShieldCheckFill,
  RiCheckboxCircleFill,
} from "@remixicon/react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo/autodrop-logo.png";
import { SiteConfig } from "@/config/siteconfig";

/* ============ Icon mapping by area name ============ */
const areaIconMap: Record<string, React.ElementType> = {
  Dubailand: RiMap2Line,
  "Arabian Ranches": RiHome4Fill,
  "Dubai Silicon Oasis": RiBuilding2Fill,
  "Dubai Motor City": RiNavigationLine,
  "Jumeirah Village Circle": RiHome4Fill,
  "Dubai Hills Estate": RiHome4Fill,
  "Business Bay": RiStore2Fill,
  "Al Barsha": RiBuilding2Fill,
  "Al Quoz": RiStore2Fill,
  "Downtown Dubai": RiBuilding2Fill,
};

export function ServiceMap() {
  const {
    GMB,
    serviceAreas,
    brandName,
    city,
    responseTime,
    location,
    displayNumber,
  } = SiteConfig;

  const [isMapLoaded, setIsMapLoaded] = useState(false);

  return (
    <section className="relative w-full overflow-hidden bg-foreground py-16 sm:py-20 lg:py-24">
      {/* ============ Background decorative layer ============ */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,oklch(1_0_0/0.05)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ============ Section Header ============ */}
        <div className="mb-12 lg:mb-16">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5">
              <span className="size-1.5 rounded-full bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                Service Coverage
              </span>
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/40 via-background/10 to-transparent" />
          </div>

          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-background sm:text-4xl lg:text-5xl">
                Where We{" "}
                <span className="text-primary">Serve in Dubai</span>
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-background/60 sm:text-base">
                Mobile mechanics strategically positioned across every major
                district — with guaranteed {responseTime} response, 24/7.
              </p>
            </div>

            {/* Trust chips */}
            <div className="flex flex-wrap items-center gap-3">
              <StatChip
                icon={<RiTimeLine className="size-3.5" />}
                label={`${responseTime} Response`}
              />
              <StatChip
                icon={<RiMapPinLine className="size-3.5" />}
                label={`${serviceAreas.length}+ Areas`}
              />
              <StatChip
                icon={<RiShieldCheckFill className="size-3.5" />}
                label="Full Coverage"
              />
            </div>
          </div>
        </div>

        {/* ============ Bento Grid ============ */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
          {/* ===== Left: Map (7 cols) ===== */}
          <div className="lg:col-span-7">
            <div className="relative h-full overflow-hidden rounded-2xl border border-background/10 bg-background/[0.03]">
              {/* Corner hairlines */}
              <div className="pointer-events-none absolute right-0 top-0 z-20 size-14">
                <div className="absolute right-0 top-0 h-px w-8 bg-primary" />
                <div className="absolute right-0 top-0 h-8 w-px bg-primary" />
              </div>

              {/* Top bar */}
              <div className="relative z-10 flex items-center justify-between border-b border-background/10 bg-background/[0.02] px-5 py-3.5 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-primary/60" />
                    <span className="relative inline-flex size-2 rounded-full bg-primary" />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-background/70">
                    Live Location
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-background/60">
                  <RiNavigationLine className="size-3.5 text-primary" />
                  <span className="font-mono">{GMB.latitude}, {GMB.longitude}</span>
                </div>
              </div>

              {/* Map iframe */}
              <div className="relative aspect-4/3 w-full bg-neutral-900 lg:aspect-16/11">
                {!isMapLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-neutral-900">
                    <div className="flex flex-col items-center gap-2">
                      <RiRoadMapFill className="size-8 text-primary/60" />
                      <span className="text-xs text-background/40">
                        Loading map...
                      </span>
                    </div>
                  </div>
                )}

                <iframe
                  title={`${brandName} Location Map`}
                  src={GMB.embedMap}
                  width="100%"
                  height="100%"
                  className={cn(
                    "size-full transition-opacity duration-500",
                    isMapLoaded ? "opacity-100" : "opacity-0"
                  )}
                  style={{ border: 0, filter: "grayscale(0.15) contrast(1.05)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  onLoad={() => setIsMapLoaded(true)}
                />
              </div>

              {/* Bottom info strip */}
              <div className="relative z-10 border-t border-background/10 bg-background/[0.02] px-5 py-3.5 backdrop-blur-md">
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-background/70">
                  <span className="inline-flex items-center gap-1.5">
                    <RiMapPinLine className="size-3.5 text-primary" />
                    {location}, {city}
                  </span>
                  <span className="hidden size-1 rounded-full bg-background/30 sm:inline-block" />
                  <span className="inline-flex items-center gap-1.5">
                    <RiTimeLine className="size-3.5 text-primary" />
                    24/7 Available
                  </span>
                  <span className="hidden size-1 rounded-full bg-background/30 sm:inline-block" />
                  <span className="inline-flex items-center gap-1.5">
                    <RiShieldCheckFill className="size-3.5 text-primary" />
                    GPS Verified
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ===== Right: Brand + Areas (5 cols) ===== */}
          <div className="flex flex-col gap-5 lg:col-span-5 lg:gap-6">
            {/* ---------- Brand Business Card ---------- */}
            <div className="relative overflow-hidden rounded-2xl border border-primary bg-primary p-6">
              {/* Dot pattern */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,oklch(0_0_0/0.08)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40" />

              {/* Corner accent */}
              <div className="pointer-events-none absolute right-0 top-0 size-12">
                <div className="absolute right-0 top-0 h-px w-6 bg-primary-foreground/60" />
                <div className="absolute right-0 top-0 h-6 w-px bg-primary-foreground/60" />
              </div>

              <div className="relative flex items-start gap-4">
                {/* Logo tile */}
                <div className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-primary-foreground p-2 shadow-lg">
                  <Image
                    src={logo}
                    width={56}
                    height={56}
                    alt={brandName}
                    className="size-full rounded-md object-contain"
                  />
                </div>

                {/* Info */}
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-base font-bold leading-tight tracking-tight text-primary-foreground">
                    {brandName}
                  </h3>

                  <div className="mt-2 space-y-1.5 text-xs text-primary-foreground/80">
                    <div className="flex items-start gap-2">
                      <RiMapPinLine className="mt-0.5 size-3.5 shrink-0 text-primary-foreground" />
                      <span className="line-clamp-2 leading-relaxed">
                        {location}, {city}, UAE
                      </span>
                    </div>
                    <a
                      href={SiteConfig.numberCallLink}
                      className="inline-flex items-center gap-2 font-semibold text-primary-foreground transition-opacity hover:opacity-80"
                    >
                      <RiPhoneFill className="size-3.5" />
                      {displayNumber}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ---------- Service Areas List ---------- */}
            <div className="relative flex-1 overflow-hidden rounded-2xl border border-background/10 bg-background/[0.03]">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-background/10 px-5 py-4">
                <div className="flex items-center gap-2.5">
                  <RiMap2Line className="size-4 text-primary" />
                  <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-background">
                    Service Areas
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1">
                  <span className="size-1.5 rounded-full bg-primary" />
                  <span className="font-mono text-[10px] font-bold text-primary">
                    {serviceAreas.length}
                  </span>
                </span>
              </div>

              {/* Areas grid */}
              <div className="max-h-100 overflow-y-auto p-3">
                <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                  {serviceAreas.map((area) => {
                    const Icon = areaIconMap[area.name] || RiMapPinLine;
                    return (
                      <Link
                        key={area.slug}
                        href={`/area-we-serve/${area.slug}`}
                        className="group flex items-center gap-2.5 rounded-lg border border-transparent px-3 py-2.5 transition-colors hover:border-primary/30 hover:bg-primary/5"
                      >
                        <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-primary/10">
                          <Icon className="size-3 text-primary" />
                        </span>
                        <span className="flex-1 truncate text-xs font-medium text-background/80 transition-colors group-hover:text-background">
                          {area.name}
                        </span>
                        <RiArrowRightUpLine className="size-3.5 shrink-0 text-background/20 transition-colors group-hover:text-primary" />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Footer CTA */}
              <div className="border-t border-background/10 bg-background/[0.02] px-5 py-3.5">
                <Link
                  href="/area-we-serve"
                  className="group inline-flex w-full items-center justify-between text-xs font-semibold text-background/80 transition-colors hover:text-primary"
                >
                  <span>View all service areas</span>
                  <RiArrowRightLine className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ============ Bottom Stat Strip ============ */}
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-8 lg:grid-cols-4">
          <MiniStat
            icon={<RiTimeLine className="size-4" />}
            value={responseTime}
            label="Response Time"
          />
          <MiniStat
            icon={<RiShieldCheckFill className="size-4" />}
            value="24/7"
            label="Availability"
          />
          <MiniStat
            icon={<RiMapPinLine className="size-4" />}
            value={`${serviceAreas.length}+`}
            label="Districts Covered"
          />
          <MiniStat
            icon={<RiCheckboxCircleFill className="size-4" />}
            value="100%"
            label="Dubai Coverage"
          />
        </div>
      </div>
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
    <div className="inline-flex items-center gap-2 rounded-full border border-background/10 bg-background/[0.03] px-3.5 py-2 backdrop-blur-sm">
      <span className="flex size-5 items-center justify-center rounded-full bg-primary/15 text-primary">
        {icon}
      </span>
      <span className="text-xs font-semibold text-background sm:text-sm">
        {label}
      </span>
    </div>
  );
}

function MiniStat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-background/10 bg-background/[0.03] px-4 py-3.5">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-lg font-bold leading-none text-background sm:text-xl">
          {value}
        </p>
        <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-background/50">
          {label}
        </p>
      </div>
    </div>
  );
}