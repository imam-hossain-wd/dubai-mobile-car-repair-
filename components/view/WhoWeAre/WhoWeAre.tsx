import Link from "next/link";
import Image from "next/image";
import {
  RiArrowRightLine,
  RiShieldCheckFill,
  RiTimeFill,
  RiUserStarFill,
  RiMapPinFill,
  RiCheckLine,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteconfig";
import { aboutUs } from "@/data/businessInfo";
import { heroBanner } from "@/config/imageConfig";


const HIGHLIGHTS = [
  {
    icon: RiTimeFill,
    value: "5–30",
    unit: "min",
    label: "Response Time",
  },
  {
    icon: RiUserStarFill,
    value: "500+",
    unit: "",
    label: "Happy Drivers",
  },
  {
    icon: RiMapPinFill,
    value: "10+",
    unit: "",
    label: "Service Areas",
  },
  {
    icon: RiShieldCheckFill,
    value: "100%",
    unit: "",
    label: "Guaranteed Work",
  },
];

const CORE_VALUES = [
  "Certified multi-brand technicians",
  "Dealer-grade diagnostic equipment",
  "Transparent upfront pricing",
  "24/7 emergency availability",
];

export function WhoWeAre() {
  const { foundedYear } = SiteConfig;

  return (
    <section className="relative overflow-hidden bg-background py-10">
      {/* Background decorative layer */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ============ LEFT: Image Column ============ */}
          <div className="relative lg:col-span-5">
            <div className="relative">
              {/* Main image */}
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl bg-muted">
                <Image
                  src={heroBanner?.hero}
                  alt="Certified mobile car mechanic team in Dubai"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Floating stat card - bottom left */}
              <div className="absolute -bottom-6 -left-4 w-[calc(100%+2rem)] max-w-xs rounded-2xl border border-border bg-card p-5 shadow-2xl shadow-black/5 sm:-left-6 sm:w-auto">
                <div className="flex items-center gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary">
                    <RiShieldCheckFill className="size-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                      Trusted Since
                    </p>
                    <p className="text-xl font-bold leading-tight text-foreground">
                      {foundedYear}
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience badge - top right */}
              <div className="absolute -right-3 -top-3 flex size-24 flex-col items-center justify-center rounded-full border-4 border-background bg-foreground text-center shadow-xl sm:-right-5 sm:-top-5">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-background/70">
                  Serving
                </span>
                <span className="text-2xl font-black leading-none text-background">
                  Dubai
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-background/70">
                  24/7
                </span>
              </div>
            </div>
          </div>

          {/* ============ RIGHT: Content Column ============ */}
          <div className="flex flex-col justify-center lg:col-span-7">
            {/* Eyebrow */}
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5">
              <span className="size-1.5 rounded-full bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                Who We Are
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Dubai&apos;s Most Trusted{" "}
              <span className="text-primary">Mobile Car Repair</span> Team
            </h2>

            {/* Lead paragraph */}
            <p className="mt-6 text-sm md:text-md leading-relaxed text-muted-foreground">
              {aboutUs.para1}
            </p>

            {/* Secondary paragraph */}
            <p className="mt-4 text-sm md:text-md leading-relaxed text-muted-foreground">
              {aboutUs.para2}
            </p>

            {/* Core values checklist */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {CORE_VALUES.map((value, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3"
                >
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <RiCheckLine className="size-3.5 text-primary" />
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="/about"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90"
              >
                More About Us
                <RiArrowRightLine className="size-4" />
              </Link>
              <Link
                href={SiteConfig.numberCallLink}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-foreground/10 bg-background px-7 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <RiMapPinFill className="size-4" />
                Visit Our Workshop
              </Link>
            </div>
          </div>
        </div>

        {/* ============ Bottom Stats Bar ============ */}
        <div className="mt-16 lg:mt-20">
          <div className="overflow-hidden rounded-2xl border border-border bg-foreground">
            <div className="grid grid-cols-2 divide-x divide-background/10 lg:grid-cols-4">
              {HIGHLIGHTS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-5 sm:p-6 lg:p-7"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-2xl font-bold leading-none text-background sm:text-3xl">
                        {item.value}
                        {item.unit && (
                          <span className="ml-0.5 text-base font-semibold text-background/60">
                            {item.unit}
                          </span>
                        )}
                      </p>
                      <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-wider text-background/60 sm:text-xs">
                        {item.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}