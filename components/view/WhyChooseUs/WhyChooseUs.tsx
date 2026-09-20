import Link from "next/link";
import {
  RiTimeLine,
  RiComputerLine,
  RiMoneyDollarCircleLine,
  Ri24HoursLine,
  RiShieldCheckLine,
  RiArrowRightLine,
  RiPhoneLine,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteconfig";
import { whyChooseUs } from "@/data/businessInfo";


/* Icon mapping — matches the order of whyChooseUs in your data file */
const ICONS = [
  RiTimeLine,
  RiComputerLine,
  RiMoneyDollarCircleLine,
  Ri24HoursLine,
  RiShieldCheckLine,
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-foreground py-10">
      {/* Background decorative layer */}
      <div className="pointer-events-none absolute inset-0">
        {/* Radial glow */}
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        {/* Dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,oklch(1_0_0/0.06)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        {/* Hairline top accent */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ============ Section Header ============ */}
        <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-20">
          {/* Eyebrow */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5">
            <span className="size-1.5 rounded-full bg-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
              Why Choose Us
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-background sm:text-4xl lg:text-5xl">
            Built for{" "}
            <span className="text-primary">Dubai Drivers</span> Who Value Time
          </h2>

          {/* Subtitle */}
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-background/60 sm:text-base">
            Five reasons thousands of Dubai drivers trust us with their
            vehicles — from emergency breakdowns to routine maintenance.
          </p>
        </div>

        {/* ============ Reasons Grid ============ */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {whyChooseUs.map((item, idx) => {
            const Icon = ICONS[idx] || RiShieldCheckLine;
            /* Split the trailing colon from name for cleaner typography */
            const cleanName = item.name.replace(/:$/, "");
            /* Distinguish first card as hero/featured */
            const isFeatured = idx === 0;

            return (
              <article
                key={idx}
                className={[
                  "group relative overflow-hidden rounded-2xl border transition-colors",
                  isFeatured
                    ? "border-primary/40 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent md:col-span-2 lg:col-span-1 lg:row-span-2"
                    : "border-background/10 bg-background/[0.03] hover:border-primary/40 hover:bg-background/[0.05]",
                ].join(" ")}
              >
                {/* Corner hairlines */}
                <div className="pointer-events-none absolute right-0 top-0 size-14">
                  <div className="absolute right-0 top-0 h-px w-8 bg-primary/50" />
                  <div className="absolute right-0 top-0 h-8 w-px bg-primary/50" />
                </div>

                {/* Featured badge */}
                {isFeatured && (
                  <div className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/15 px-2.5 py-1">
                    <span className="size-1.5 rounded-full bg-primary" />
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                      Fastest
                    </span>
                  </div>
                )}

                <div
                  className={[
                    "relative flex h-full flex-col",
                    isFeatured ? "p-7 sm:p-8 lg:p-10" : "p-6 sm:p-7",
                  ].join(" ")}
                >
                  {/* Icon + Number Row */}
                  <div className="flex items-start justify-between">
                    {/* Icon tile */}
                    <div className="relative shrink-0">
                      <div
                        className={[
                          "flex items-center justify-center rounded-2xl",
                          isFeatured
                            ? "size-14 bg-primary shadow-xl shadow-primary/30"
                            : "size-12 bg-primary/15",
                        ].join(" ")}
                      >
                        <Icon
                          className={[
                            isFeatured
                              ? "size-7 text-primary-foreground"
                              : "size-6 text-primary",
                          ].join(" ")}
                        />
                      </div>
                    </div>

                    {/* Number — only on non-featured (featured has badge) */}
                    {!isFeatured && (
                      <span className="text-xs font-bold uppercase tracking-wider text-background/30">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className={[
                      "mt-6 font-bold leading-tight tracking-tight text-background",
                      isFeatured
                        ? "text-xl sm:text-2xl lg:text-3xl"
                        : "text-lg sm:text-xl",
                    ].join(" ")}
                  >
                    {cleanName}
                  </h3>

                  {/* Description */}
                  <p
                    className={[
                      "mt-3 flex-1 leading-relaxed text-background/60",
                      isFeatured ? "text-sm sm:text-base" : "text-sm",
                    ].join(" ")}
                  >
                    {item.description}
                  </p>

                  {/* Divider + mini-metric row */}
                  <div className="mt-6 flex items-center justify-between border-t border-background/10 pt-4">
                    <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-primary">
                      <span className="size-1.5 rounded-full bg-primary" />
                      Verified
                    </span>
                    <RiArrowRightLine className="size-4 text-background/30 transition-colors group-hover:text-primary" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}