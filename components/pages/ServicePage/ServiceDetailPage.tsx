"use client";

import Link from "next/link";
import Image from "next/image";
import {
  RiPhoneFill,
  RiWhatsappFill,
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiCheckboxCircleFill,
  RiFlashlightFill,
  RiShieldCheckFill,
  RiTimeFill,
  RiCustomerServiceFill,
  RiStarFill,
  RiToolsFill,
  RiAlertFill,
  RiArrowDownSLine,
  RiFileListFill,
  RiRoadsterFill,
  RiQuestionLine,
} from "@remixicon/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { SiteConfig } from "@/config/siteconfig";
import { services } from "@/data/services/services";
import { cn } from "@/lib/utils";

interface ServiceDetailPageProps {
  service: any;
  slug: string;
}

export default function ServiceDetailPage({
  service,
  slug,
}: ServiceDetailPageProps) {
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

  const [openFaq, setOpenFaq] = useState<string[]>(["faq-0"]);

  /* Related services — same category-ish, exclude current */
  const relatedServices = services
    .filter((s) => s.slug !== slug)
    .slice(0, 3);

  const intro = service?.intro || {};
  const whyChooseUs = service?.whyChooseUs || { heading: "", points: [] };
  const problemSigns = service?.problemSignsSection || {
    heading: "",
    description: "",
    signs: [],
  };
  const process = service?.ourProcess || { heading: "", steps: [] };
  const tools = service?.toolsOrProducts || { heading: "", brands: [], note: "" };
  const ctaSection = service?.ctaSection || {
    heading: "",
    description: "",
    buttonText: "Book Now",
  };
  const faq = service?.faq || [];
  const features = service?.features || [];
  const banner = service?.service_banner?.src || service?.service_banner;

  return (
    <main className="bg-white">
      {/* ============================================================
          SECTION 1: HERO — BLACK EDITORIAL
      ============================================================ */}
      <section className="relative overflow-hidden bg-foreground pt-28 pb-5">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,oklch(1_0_0/0.05)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-xs text-background/50">
            <Link href="/" className="transition-colors hover:text-primary">
              Home
            </Link>
            <span className="text-background/30">/</span>
            <Link
              href="/services"
              className="transition-colors hover:text-primary"
            >
              Services
            </Link>
            <span className="text-background/30">/</span>
            <span className="font-medium text-background/80">
              {service?.name}
            </span>
          </nav>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* LEFT: Content */}
            <div className="lg:col-span-7">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full rounded-full bg-primary/60" />
                  <span className="relative inline-flex size-2 rounded-full bg-primary" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                  {intro?.subheading || "Premium Service"} · {city}
                </span>
              </div>

              {/* H1 */}
              <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-background sm:text-5xl lg:text-6xl">
                {service?.name}
                <br />
                <span className="text-primary">in {city}</span>
              </h1>

              {/* Subtitle */}
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/60 sm:text-lg">
                {intro?.heading ||
                  `Professional ${service?.name} delivered to your location in ${city}.`}
              </p>

              {/* Features chips */}
              {features.length > 0 && (
                <ul className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {features.slice(0, 4).map((feature: string, i: number) => (
                    <li
                      key={i}
                      className="inline-flex items-center gap-2.5 text-sm text-background/70"
                    >
                      <RiCheckboxCircleFill className="size-4 shrink-0 text-primary" />
                      <span className="line-clamp-1">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Dual CTA */}
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

            {/* RIGHT: Image */}
            <div className="relative lg:col-span-5">
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-3xl border border-background/10 bg-neutral-900">
                {banner && (
                  <Image
                    src={banner}
                    alt={`${service?.name} in ${city}`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Corner hairlines */}
                <div className="pointer-events-none absolute right-0 top-0 size-16">
                  <div className="absolute right-0 top-0 h-px w-10 bg-primary/60" />
                  <div className="absolute right-0 top-0 h-10 w-px bg-primary/60" />
                </div>

                {/* Bottom info chip */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="rounded-2xl border border-background/15 bg-black/60 p-3.5 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary">
                        <RiFlashlightFill className="size-4 text-primary-foreground" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-background/50">
                          Average Response
                        </p>
                        <p className="mt-0.5 text-sm font-bold text-background">
                          {responseTime} · Onsite
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating rating */}
              <div className="absolute -right-4 top-6 rounded-2xl border border-background/10 bg-neutral-950/90 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl sm:-right-6">
                <div className="flex items-center gap-2">
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
            </div>
          </div>

          {/* Trust strip */}
          <div className="mt-10 grid grid-cols-2 gap-3 lg:mt-16 lg:grid-cols-4">
            <HeroStat
              icon={<RiFlashlightFill className="size-5" />}
              value={responseTime}
              label="Response Time"
            />
            <HeroStat
              icon={<RiShieldCheckFill className="size-5" />}
              value="100%"
              label="Guaranteed Work"
            />
            <HeroStat
              icon={<RiStarFill className="size-5" />}
              value="5.0"
              label="Customer Rating"
            />
            <HeroStat
              icon={<RiCustomerServiceFill className="size-5" />}
              value="24/7"
              label="Availability"
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2: INTRO — WHITE EDITORIAL
      ============================================================ */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,oklch(0_0_0/0.04)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left: Intro content */}
            <div className="lg:col-span-7">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5">
                <span className="size-1.5 rounded-full bg-primary" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                  About This Service
                </span>
              </div>

              <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-neutral-900 sm:text-4xl">
                {intro?.heading || `Professional ${service?.name} in Dubai`}
              </h2>

              {intro?.subheading && (
                <p className="mt-3 text-base font-semibold text-primary">
                  {intro.subheading}
                </p>
              )}

              <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg">
                {intro?.content}
              </p>

              {/* Quick facts */}
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <QuickFact
                  icon={<RiTimeFill className="size-4" />}
                  label="Response"
                  value={responseTime}
                />
                <QuickFact
                  icon={<RiRoadsterFill className="size-4" />}
                  label="Coverage"
                  value={`${serviceAreas.length}+ Areas`}
                />
                <QuickFact
                  icon={<RiShieldCheckFill className="size-4" />}
                  label="Warranty"
                  value="12–24 Months"
                />
              </div>
            </div>

            {/* Right: All features list */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white">
                {/* Top accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-primary/40 via-primary to-primary/40" />

                {/* Corner hairlines */}
                <div className="pointer-events-none absolute right-0 top-1 size-14">
                  <div className="absolute right-0 top-0 h-px w-8 bg-primary/40" />
                  <div className="absolute right-0 top-0 h-8 w-px bg-primary/40" />
                </div>

                <div className="p-6">
                  <div className="mb-5 flex items-center gap-2.5">
                    <RiFileListFill className="size-4 text-primary" />
                    <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-900">
                      What&apos;s Included
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {features.map((feature: string, i: number) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 rounded-xl border border-neutral-100 bg-neutral-50 p-3"
                      >
                        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <RiCheckboxCircleFill className="size-3.5 text-primary" />
                        </span>
                        <span className="text-sm font-medium text-neutral-700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3: PROBLEM SIGNS — BLACK EDITORIAL
      ============================================================ */}
      {problemSigns?.signs?.length > 0 && (
        <section className="relative overflow-hidden bg-foreground py-20 lg:py-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle,oklch(1_0_0/0.05)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5">
                <RiAlertFill className="size-3 text-primary" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                  Warning Signs
                </span>
              </div>
              <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-background sm:text-4xl lg:text-5xl">
                {problemSigns.heading}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-background/60 sm:text-base">
                {problemSigns.description}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {problemSigns.signs.map((sign: string, i: number) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl border border-background/10 bg-background/[0.03] p-5"
                >
                  {/* Corner hairlines */}
                  <div className="pointer-events-none absolute right-0 top-0 size-12">
                    <div className="absolute right-0 top-0 h-px w-6 bg-primary/40" />
                    <div className="absolute right-0 top-0 h-6 w-px bg-primary/40" />
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary">
                      <RiAlertFill className="size-4 text-primary-foreground" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold leading-relaxed text-background">
                        {sign}
                      </p>
                    </div>
                  </div>

                  {/* Faded folio */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-2 -right-1 select-none font-mono text-[4rem] font-black leading-none text-primary/[0.06]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          SECTION 4: PROCESS — WHITE EDITORIAL
      ============================================================ */}
      {process?.steps?.length > 0 && (
        <section className="relative overflow-hidden bg-white py-20 lg:py-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
          </div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5">
                <span className="size-1.5 rounded-full bg-primary" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                  Our Process
                </span>
              </div>
              <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
                {process.heading}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {process.steps.map((step: any, i: number) => (
                <article
                  key={i}
                  className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 transition-colors hover:border-primary/40"
                >
                  {/* Top accent bar */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/30 via-primary to-primary/30" />

                  {/* Corner hairlines */}
                  <div className="pointer-events-none absolute right-0 top-1 size-12">
                    <div className="absolute right-0 top-0 h-px w-6 bg-primary/30" />
                    <div className="absolute right-0 top-0 h-6 w-px bg-primary/30" />
                  </div>

                  {/* Step number */}
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-primary">
                      <span className="font-mono text-xs font-bold text-primary-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                      Step {i + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-sm font-bold leading-tight tracking-tight text-neutral-900">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs leading-relaxed text-neutral-500">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          SECTION 5: WHY CHOOSE US — BLACK EDITORIAL
      ============================================================ */}
      {whyChooseUs?.points?.length > 0 && (
        <section className="relative overflow-hidden bg-foreground py-20 lg:py-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle,oklch(1_0_0/0.05)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          </div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left: Header */}
              <div className="lg:col-span-5">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5">
                  <span className="size-1.5 rounded-full bg-primary" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                    Why Choose Us
                  </span>
                </div>

                <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-background sm:text-4xl">
                  {whyChooseUs.heading}
                </h2>

                <p className="mt-4 text-base leading-relaxed text-background/60">
                  {brandName} combines dealer-grade equipment, certified
                  multi-brand technicians, and transparent pricing — all
                  delivered to your location across {city}.
                </p>

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
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-background/15 bg-background/[0.03] px-6 text-sm font-semibold text-background backdrop-blur-sm transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    Book Online
                    <RiArrowRightUpLine className="size-4" />
                  </Link>
                </div>
              </div>

              {/* Right: Points */}
              <div className="lg:col-span-7">
                <ul className="space-y-3">
                  {whyChooseUs.points.map((point: string, i: number) => (
                    <li
                      key={i}
                      className="group relative flex items-start gap-4 rounded-2xl border border-background/10 bg-background/[0.03] p-4"
                    >
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary">
                        <RiCheckboxCircleFill className="size-4 text-primary-foreground" />
                      </span>
                      <div className="min-w-0 flex-1 pt-1">
                        <p className="text-sm font-medium leading-relaxed text-background/90">
                          {point}
                        </p>
                      </div>
                      <span className="hidden font-mono text-[10px] font-bold text-background/30 sm:block">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          SECTION 6: TOOLS & BRANDS — WHITE EDITORIAL
      ============================================================ */}
      {tools?.brands?.length > 0 && (
        <section className="relative overflow-hidden bg-white py-20 lg:py-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
          </div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5">
                <RiToolsFill className="size-3 text-primary" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                  Trusted Brands
                </span>
              </div>
              <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
                {tools.heading}
              </h2>
              {tools.note && (
                <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-neutral-500 sm:text-base">
                  {tools.note}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {tools.brands.map((brand: string, i: number) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 transition-colors hover:border-primary/40"
                >
                  {/* Top accent bar */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/30 via-primary to-primary/30 opacity-0 transition-opacity group-hover:opacity-100" />

                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
                    <RiShieldCheckFill className="size-5 text-primary" />
                  </span>

                  <p className="mt-4 text-sm font-bold leading-tight tracking-tight text-neutral-900">
                    {brand}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          SECTION 7: FAQ — WHITE EDITORIAL
      ============================================================ */}
      {faq?.length > 0 && (
        <section className="relative overflow-hidden bg-white pb-20 lg:pb-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
          </div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5">
                <RiQuestionLine className="size-3 text-primary" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                  FAQ
                </span>
              </div>
              <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
                Common{" "}
                <span className="text-primary">Questions</span>
              </h2>
            </div>

            <div className="mx-auto max-w-3xl">
              <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white">
                <div className="h-1 w-full bg-gradient-to-r from-primary/40 via-primary to-primary/40" />

                <div className="p-2 sm:p-3">
                  <Accordion
                    value={openFaq}
                    onValueChange={setOpenFaq}
                    className="space-y-1.5"
                  >
                    {faq.map((item: any, i: number) => (
                      <AccordionItem
                        key={i}
                        value={`faq-${i}`}
                        className={cn(
                          "border border-transparent transition-colors",
                          "data-[state=open]:border-primary/30 data-[state=open]:bg-primary/[0.03]",
                          "rounded-xl"
                        )}
                      >
                        <AccordionTrigger className="group flex w-full items-center gap-3 px-4 py-4 text-left hover:no-underline sm:px-5 sm:py-5">
                          <span
                            className={cn(
                              "flex size-8 shrink-0 items-center justify-center rounded-lg font-mono text-[11px] font-bold transition-colors",
                              "bg-neutral-100 text-neutral-500",
                              "group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground"
                            )}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>

                          <span className="flex-1 pr-2 text-left text-sm font-semibold leading-snug text-neutral-900 transition-colors group-hover:text-primary sm:text-base">
                            {item.question}
                          </span>

                          <RiArrowDownSLine
                            className={cn(
                              "size-5 shrink-0 text-neutral-400 transition-transform duration-200",
                              "group-data-[state=open]:rotate-180 group-data-[state=open]:text-primary"
                            )}
                          />
                        </AccordionTrigger>

                        <AccordionContent className="px-4 pb-5 pt-0 sm:px-5">
                          <div className="relative ml-4 pl-6 sm:ml-5 sm:pl-7">
                            <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
                            <p className="text-sm leading-relaxed text-neutral-600">
                              {item.answer}
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          SECTION 8: RELATED SERVICES — WHITE EDITORIAL
      ============================================================ */}
      {relatedServices.length > 0 && (
        <section className="relative overflow-hidden bg-neutral-50 py-20 lg:py-24">
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex flex-col gap-4 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5">
                  <span className="size-1.5 rounded-full bg-primary" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                    Related Services
                  </span>
                </div>
                <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-neutral-900 sm:text-4xl">
                  You might also need
                </h2>
              </div>
              <Link
                href="/services"
                className="group inline-flex h-11 items-center gap-2 rounded-xl border-2 border-neutral-200 bg-white px-5 text-xs font-semibold text-neutral-900 transition-colors hover:border-primary hover:text-primary"
              >
                All Services
                <RiArrowRightLine className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((rel, i) => {
                const relBanner = rel?.service_banner?.src || rel?.service_banner;
                return (
                  <Link
                    key={rel.slug}
                    href={`/services/${rel.slug}`}
                    className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-colors hover:border-primary/40"
                  >
                    {/* Image */}
                    <div className="relative aspect-16/10 w-full overflow-hidden bg-neutral-100">
                      {relBanner && (
                        <Image
                          src={relBanner}
                          alt={rel.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      {/* Same Day badge */}
                      <div className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-2.5 py-1 backdrop-blur-md">
                        <RiFlashlightFill className="size-3 text-primary" />
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-white">
                          Same Day
                        </span>
                      </div>

                      {/* Name */}
                      <div className="absolute inset-x-0 bottom-0 p-4">
                        <h3 className="text-base font-bold leading-tight text-white">
                          {rel.name}
                        </h3>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between border-t border-neutral-100 px-4 py-3">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-primary">
                        <span className="size-1.5 rounded-full bg-primary" />
                        View Service
                      </span>
                      <span className="flex size-7 items-center justify-center rounded-full border border-neutral-200 bg-white transition-colors group-hover:border-primary group-hover:bg-primary">
                        <RiArrowRightUpLine className="size-3 text-neutral-400 transition-colors group-hover:text-primary-foreground" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          SECTION 9: FINAL CTA — PRIMARY PANEL
      ============================================================ */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-24">
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
                    Book This Service
                  </span>
                </span>

                <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-4xl">
                  {ctaSection.heading || `Book ${service?.name} Now`}
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/70 sm:text-base">
                  {ctaSection.description ||
                    `Get fast, professional mobile service anywhere in ${city}.`}
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

function HeroStat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-background/10 bg-background/[0.03] p-5 backdrop-blur-sm">
      <div className="flex size-10 items-center justify-center rounded-xl bg-primary/15">
        <span className="text-primary">{icon}</span>
      </div>
      <p className="mt-4 text-xl font-bold leading-none text-background">
        {value}
      </p>
      <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-wider text-background/50">
        {label}
      </p>
    </div>
  );
}

function QuickFact({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
      <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </span>
      <p className="mt-3 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
        {label}
      </p>
      <p className="mt-0.5 text-sm font-bold text-neutral-900">{value}</p>
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