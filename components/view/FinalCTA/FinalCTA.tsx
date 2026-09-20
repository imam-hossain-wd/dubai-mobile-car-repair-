
import Link from "next/link";
import {
  RiPhoneFill,
  RiWhatsappFill,
  RiMailFill,
  RiMapPinFill,
  RiTimeFill,
  RiShieldCheckFill,
  RiStarFill,
  RiArrowRightLine,
  RiCustomerServiceFill,
  RiCheckDoubleFill,
  RiFlashlightFill,
  RiWhatsappLine,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteconfig";




const CONTACT_ITEMS = [
  {
    icon: RiMapPinFill,
    label: "Location",
    value: "Al Jadaf, Dubai",
  },
  {
    icon: RiTimeFill,
    label: "Response",
    value: "5–30 Minutes",
  },
];

export default function FinalCTA() {
  const {
    brandName,
    displayNumber,
    numberCallLink,
    whatsappCallLink,
    email,
    city,
    responseTime,
  } = SiteConfig;

  return (
    <section className="relative w-full overflow-hidden bg-foreground py-10">
      {/* ============ Background decorative layer ============ */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,oklch(1_0_0/0.05)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* ============ Top Eyebrow + Headline ============ */}
          <div className="text-center">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5">
              <span className="size-1.5 rounded-full bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                Get Started Today
              </span>
            </div>

            {/* Headline */}
            <h2 className="mx-auto max-w-4xl text-3xl font-bold leading-[1.05] tracking-tight text-background sm:text-4xl md:text-5xl lg:text-6xl">
              Car Trouble?{" "}
              <span className="text-primary">We&apos;re On The Way</span>
              <br className="hidden sm:block" />
              <span className="text-background"> — Anywhere in {city}</span>
            </h2>

            {/* Subtitle */}
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-background/60 sm:text-base lg:text-lg">
              Skip the workshop. Certified mechanics arrive at your doorstep in{" "}
              <span className="font-semibold text-background">
                {responseTime}
              </span>{" "}
              — fully equipped to diagnose and repair your vehicle on-site.
            </p>
          </div>

          {/* ============ Primary CTA Panel ============ */}
          <div className="mt-12 lg:mt-16">
            <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-primary p-6 sm:p-8 lg:p-10">
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

              {/* Faded background icon */}
              <RiFlashlightFill className="pointer-events-none absolute -right-10 -top-10 size-56 text-primary-foreground/[0.04]" />

              <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
                {/* ===== Left: Action Content ===== */}
                <div className="lg:col-span-7">
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-1 backdrop-blur-sm">
                    <span className="size-1.5 rounded-full bg-primary-foreground" />
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                      Available Now
                    </span>
                  </span>

                  <h3 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-3xl lg:text-4xl">
                    Book your mobile mechanic in under 60 seconds
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70 sm:text-base">
                    Call, WhatsApp, or book online — our team is standing by
                    24/7 to dispatch the nearest mobile unit to your location.
                  </p>

                  {/* CTA buttons */}
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={numberCallLink}
                      className="group inline-flex h-14 items-center justify-center gap-3 rounded-xl bg-primary-foreground px-6 font-semibold text-primary shadow-lg shadow-black/10 transition-colors hover:bg-primary-foreground/95 sm:px-7"
                    >
                      <RiPhoneFill className="size-5" />
                      <span className="text-base">{displayNumber}</span>
                      <RiArrowRightLine className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>

                    <Link
                      href={whatsappCallLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex h-14 items-center justify-center gap-3 rounded-xl border-2 border-primary-foreground/30 bg-primary-foreground/5 px-6 font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:border-primary-foreground/60 hover:bg-primary-foreground/10 sm:px-7"
                    >
                      <RiWhatsappFill className="size-5" />
                      <span className="text-base">WhatsApp Us</span>
                    </Link>
                  </div>
                </div>

                {/* ===== Right: Trust Metrics ===== */}
                <div className="lg:col-span-5">
                  <div className="grid grid-cols-2 gap-3">
                    {CONTACT_ITEMS.map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={i}
                          className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/[0.06] p-4 backdrop-blur-sm"
                        >
                          <div className="flex size-9 items-center justify-center rounded-lg bg-primary-foreground/15">
                            <Icon className="size-4 text-primary-foreground" />
                          </div>
                          <p className="mt-3 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground/60">
                            {item.label}
                          </p>
                          <p className="mt-1 text-sm font-bold leading-tight text-primary-foreground">
                            {item.value}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Verified badge row */}
                  <div className="mt-3 flex items-center justify-between rounded-2xl border border-primary-foreground/15 bg-primary-foreground/[0.06] p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex size-9 items-center justify-center rounded-lg bg-primary-foreground/15">
                        <RiStarFill className="size-4 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-bold leading-none text-primary-foreground">
                          5.0 Rating
                        </p>
                        <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-primary-foreground/60">
                          500+ Reviews
                        </p>
                      </div>
                    </div>
                    <div className="flex -space-x-1.5">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="flex size-6 items-center justify-center rounded-full border-2 border-primary bg-primary-foreground"
                        >
                          <RiStarFill className="size-2.5 text-primary" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
