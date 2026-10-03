// app/terms/page.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  RiPhoneFill,
  RiWhatsappFill,
  RiArrowRightLine,
  RiShieldCheckFill,
  RiTimeFill,
  RiStarFill,
  RiCustomerServiceFill,
  RiFileTextFill,
  RiLockFill,
  RiUserFill,
  RiCheckboxCircleFill,
  RiArrowUpLine,
  RiArrowRightUpLine,
  RiScalesFill,
  RiBookReadFill,
  RiHandCoinFill,
  RiTruckFill,
  RiAlertFill,
  RiForbidFill,
  RiCopyrightFill,
  RiRefreshFill,
  RiMailFill,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteconfig";
import { cn } from "@/lib/utils";

/* ============ Terms sections data ============ */
const TERMS_SECTIONS = [
  {
    id: "acceptance",
    number: "01",
    icon: RiBookReadFill,
    title: "Acceptance of Terms",
    content: [
      `Welcome to ${SiteConfig.brandName} ("we," "our," or "us"). These Terms of Service ("Terms") govern your access to and use of our website and mobile car repair services across ${SiteConfig.city}, ${SiteConfig.country}.`,
      `By booking a service, requesting a quote, or using our website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our services.`,
    ],
  },
  {
    id: "services",
    number: "02",
    icon: RiTruckFill,
    title: "Our Services",
    content: [
      `${SiteConfig.brandName} provides 24/7 mobile car repair and roadside assistance services. Our certified technicians are dispatched to your location — including homes, offices, parking lots, and roadsides — to perform on-site diagnostics and repairs.`,
      `While we resolve the majority of vehicle issues on-site, certain complex repairs may require towing to our partner workshop. In such cases, we will inform you before proceeding and provide a clear estimate.`,
    ],
    list: [
      "Mobile battery replacement and jump starts",
      "Computer diagnostics and electrical repairs",
      "AC repair, gas refill, and climate services",
      "Brake, ABS, and mechanical repairs",
      "Routine maintenance and oil changes",
      "24/7 emergency roadside assistance",
    ],
  },
  {
    id: "booking",
    number: "03",
    icon: RiCheckboxCircleFill,
    title: "Booking & Confirmation",
    content: [
      `You may book our services via phone, WhatsApp, or through our website. When you place a booking, you are responsible for providing accurate information — including your name, contact details, vehicle make and model, location, and a description of the issue.`,
      `All bookings are subject to technician availability and confirmation. We will confirm your booking via call or message before dispatching a mobile unit. Response times stated (5–30 minutes) are estimates and may vary based on traffic, weather, and demand.`,
    ],
  },
  {
    id: "pricing",
    number: "04",
    icon: RiHandCoinFill,
    title: "Pricing & Payment",
    content: [
      `We provide transparent, upfront pricing. A full itemized quote will be shared with you before any repair work begins. No work will be carried out without your explicit approval.`,
      `Payment is due upon completion of the service. We accept cash, credit/debit cards, Apple Pay, Google Pay, and bank transfers. All prices are quoted in AED and are inclusive of applicable VAT unless stated otherwise.`,
    ],
    list: [
      "Free onsite diagnostic with any confirmed repair",
      "Itemized quotes before work begins",
      "No hidden call-out or service fees",
      "Payment accepted via cash, card, or transfer",
      "Digital invoice provided after every service",
    ],
  },
  {
    id: "warranty",
    number: "05",
    icon: RiShieldCheckFill,
    title: "Warranty & Guarantee",
    content: [
      `All repairs performed by our certified technicians are backed by our workmanship guarantee. New parts supplied by us carry a 12 to 24-month warranty, depending on the part and manufacturer specifications.`,
      `Warranty coverage does not apply to damage caused by accidents, misuse, third-party repairs, or normal wear and tear. If a warranted part fails, we will repair or replace it free of charge at your location.`,
    ],
  },
  {
    id: "responsibilities",
    number: "06",
    icon: RiUserFill,
    title: "Customer Responsibilities",
    content: [
      `To ensure a safe and efficient service, you agree to provide a safe working environment for our technicians, disclose any known vehicle faults, and provide accurate location and access details.`,
      `You are responsible for ensuring your vehicle is legally parked, accessible, and safe to work on. If our technician arrives and the vehicle cannot be safely serviced, a call-out fee may apply.`,
    ],
    list: [
      "Provide accurate vehicle and contact information",
      "Ensure a safe and accessible work environment",
      "Disclose any known pre-existing faults",
      "Be present or reachable during the service",
      "Approve the final quote before work begins",
    ],
  },
  {
    id: "cancellation",
    number: "07",
    icon: RiRefreshFill,
    title: "Cancellation & Refunds",
    content: [
      `You may cancel a booking free of charge up to 30 minutes before the scheduled arrival. If our technician has already been dispatched and arrives on-site, a call-out fee may apply to cover travel and diagnostic time.`,
      `Refunds for completed repairs are not provided unless the repair is covered under our warranty policy. Parts purchased separately are non-refundable once installed.`,
    ],
  },
  {
    id: "liability",
    number: "08",
    icon: RiAlertFill,
    title: "Limitation of Liability",
    content: [
      `While we take every precaution to protect your vehicle during service, ${SiteConfig.brandName} is not liable for indirect, incidental, or consequential damages arising from the use of our services, to the maximum extent permitted by law.`,
      `Our total liability for any claim is limited to the amount paid for the specific service in question. Nothing in these Terms excludes liability that cannot be excluded under applicable UAE law.`,
    ],
  },
  {
    id: "prohibited",
    number: "09",
    icon: RiForbidFill,
    title: "Prohibited Uses",
    content: [
      `You agree not to misuse our website or services. Prohibited uses include providing false information, attempting to defraud, harassing our technicians, or using our services for illegal purposes.`,
      `We reserve the right to refuse service, cancel bookings, or take legal action against any user who violates these Terms.`,
    ],
  },
  {
    id: "intellectual",
    number: "10",
    icon: RiCopyrightFill,
    title: "Intellectual Property",
    content: [
      `All content on our website — including text, images, logos, graphics, and design — is the property of ${SiteConfig.brandName} or its licensors and is protected by UAE and international copyright laws.`,
      `You may not copy, reproduce, distribute, or use any content from our website without written permission. All trademarks and brand names remain the property of their respective owners.`,
    ],
  },
  {
    id: "changes",
    number: "11",
    icon: RiFileTextFill,
    title: "Changes to These Terms",
    content: [
      `We reserve the right to update or modify these Terms at any time. When we make significant changes, we will update the "Last Updated" date at the top of this page and may notify you via email or SMS.`,
      `Your continued use of our services after changes are posted constitutes acceptance of the revised Terms. We encourage you to review this page periodically.`,
    ],
  },
  {
    id: "contact",
    number: "12",
    icon: RiMailFill,
    title: "Contact Us",
    content: [
      `If you have any questions, concerns, or requests regarding these Terms of Service, please contact us using the details below.`,
    ],
  },
];

const HERO_TRUST = [
  { icon: RiShieldCheckFill, label: "Fair Terms" },
  { icon: RiScalesFill, label: "Legal Compliant" },
  { icon: RiCheckboxCircleFill, label: "Transparent" },
];

const TRUST_ITEMS = [
  {
    icon: RiShieldCheckFill,
    title: "100% Guaranteed",
    subtitle: "Workmanship covered",
  },
  {
    icon: RiTimeFill,
    title: "24/7 Support",
    subtitle: "Questions anytime",
  },
  {
    icon: RiCustomerServiceFill,
    title: "Transparent",
    subtitle: "No hidden fees",
  },
];

export default function TermsOfServicePage() {
  const {
    brandName,
    displayNumber,
    numberCallLink,
    whatsappCallLink,
    email,
    city,
    country,
  } = SiteConfig;

  const [activeSection, setActiveSection] = useState("acceptance");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  /* ============ Programmatic smooth scroll (no hash in URL) ============ */
  const scrollToSection = (id: string) => {
    const element = sectionRefs.current[id];
    if (!element) return;

    const top = element.getBoundingClientRect().top + window.scrollY - 112;
    window.scrollTo({ top, behavior: "smooth" });
    setActiveSection(id);
  };

  /* ============ IntersectionObserver for active section tracking ============ */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-120px 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    TERMS_SECTIONS.forEach((section) => {
      const el = sectionRefs.current[section.id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* ============ Scroll-to-top visibility ============ */
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 600);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const lastUpdated = "January 15, 2025";

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
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center justify-center gap-2 text-xs text-background/50">
            <Link href="/" className="transition-colors hover:text-primary">
              Home
            </Link>
            <span className="text-background/30">/</span>
            <span className="font-medium text-background/80">
              Terms of Service
            </span>
          </nav>

          <div className="mx-auto max-w-3xl text-center">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full rounded-full bg-primary/60" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                Legal · Updated {lastUpdated}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-background sm:text-5xl lg:text-6xl">
              Clear Terms,{" "}
              <span className="text-primary">Fair Service</span>
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-background/60 sm:text-lg">
              The terms that govern your use of {brandName}&apos;s mobile car
              repair services across {city} — written to be clear, fair, and
              easy to understand.
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
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2: TERMS CONTENT — WHITE EDITORIAL
      ============================================================ */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,oklch(0_0_0/0.04)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* ============ LEFT: Sticky Table of Contents (4 cols) ============ */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white">
                  {/* Top accent bar */}
                  <div className="h-1 w-full bg-gradient-to-r from-primary/40 via-primary to-primary/40" />

                  {/* Corner hairlines */}
                  <div className="pointer-events-none absolute right-0 top-1 size-14">
                    <div className="absolute right-0 top-0 h-px w-8 bg-primary/40" />
                    <div className="absolute right-0 top-0 h-8 w-px bg-primary/40" />
                  </div>

                  <div className="p-5 sm:p-6">
                    {/* Header */}
                    <div className="mb-5 flex items-center gap-2.5">
                      <RiScalesFill className="size-4 text-primary" />
                      <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-900">
                        Contents
                      </h3>
                    </div>

                    {/* Navigation list */}
                    <nav className="space-y-1">
                      {TERMS_SECTIONS.map((section) => {
                        const Icon = section.icon;
                        const isActive = activeSection === section.id;
                        return (
                          <button
                            key={section.id}
                            type="button"
                            onClick={() => scrollToSection(section.id)}
                            className={cn(
                              "group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors",
                              isActive
                                ? "border border-primary/30 bg-primary/5"
                                : "border border-transparent hover:bg-neutral-50"
                            )}
                          >
                            <span
                              className={cn(
                                "flex size-8 shrink-0 items-center justify-center rounded-lg font-mono text-[10px] font-bold transition-colors",
                                isActive
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-neutral-100 text-neutral-500 group-hover:bg-primary/10 group-hover:text-primary"
                              )}
                            >
                              {section.number}
                            </span>
                            <span
                              className={cn(
                                "flex-1 truncate text-xs font-semibold transition-colors",
                                isActive
                                  ? "text-primary"
                                  : "text-neutral-700 group-hover:text-neutral-900"
                              )}
                            >
                              {section.title}
                            </span>
                            {isActive && (
                              <span className="size-1.5 shrink-0 rounded-full bg-primary" />
                            )}
                          </button>
                        );
                      })}
                    </nav>
                  </div>
                </div>

                {/* Help card */}
                <div className="mt-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <RiCustomerServiceFill className="size-4 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold tracking-tight text-neutral-900">
                        Have questions?
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-neutral-500">
                        Our team can clarify any of these terms 24/7.
                      </p>
                      <Link
                        href={`mailto:${email}`}
                        className="group mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-primary"
                      >
                        {email}
                        <RiArrowRightLine className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* ============ RIGHT: Terms Content (8 cols) ============ */}
            <div className="lg:col-span-8">
              {/* Last updated banner */}
              <div className="mb-8 flex items-center gap-3 rounded-2xl border border-primary/20 bg-primary/5 p-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <RiTimeFill className="size-4 text-primary" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-primary">
                    Last Updated
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-neutral-900">
                    {lastUpdated}
                  </p>
                </div>
              </div>

              {/* Sections */}
              <div className="space-y-8">
                {TERMS_SECTIONS.map((section) => {
                  const Icon = section.icon;
                  return (
                    <article
                      key={section.id}
                      id={section.id}
                      ref={(el) => {
                        sectionRefs.current[section.id] = el;
                      }}
                      className="scroll-mt-28"
                    >
                      {/* Section header */}
                      <div className="mb-4 flex items-start gap-4">
                        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                          <Icon className="size-5 text-primary" />
                        </div>
                        <div className="min-w-0 flex-1 pt-1">
                          <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-primary">
                            Section {section.number}
                          </p>
                          <h2 className="mt-1 text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
                            {section.title}
                          </h2>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="ml-0 space-y-4 sm:ml-15">
                        {section.content.map((paragraph, i) => (
                          <p
                            key={i}
                            className="text-sm leading-relaxed text-neutral-600 sm:text-base"
                          >
                            {paragraph}
                          </p>
                        ))}

                        {/* Optional list */}
                        {section.list && (
                          <ul className="mt-4 grid grid-cols-1 gap-2 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 sm:grid-cols-2">
                            {section.list.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2.5 text-sm"
                              >
                                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                  <RiCheckboxCircleFill className="size-3 text-primary" />
                                </span>
                                <span className="text-neutral-700">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Contact section special handling */}
                        {section.id === "contact" && (
                          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                            <ContactCard
                              icon={<RiPhoneFill className="size-4" />}
                              label="Phone"
                              value={displayNumber}
                              href={numberCallLink}
                            />
                            <ContactCard
                              icon={<RiMailFill className="size-4" />}
                              label="Email"
                              value={email}
                              href={`mailto:${email}`}
                            />
                            <ContactCard
                              icon={<RiWhatsappFill className="size-4" />}
                              label="WhatsApp"
                              value="Chat Now"
                              href={whatsappCallLink}
                              external
                            />
                          </div>
                        )}
                      </div>

                      {/* Divider */}
                      <div className="mt-8 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
                    </article>
                  );
                })}
              </div>

              {/* Bottom acknowledgment */}
              <div className="mt-10 rounded-2xl border border-primary/30 bg-primary/5 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary">
                    <RiCheckboxCircleFill className="size-5 text-primary-foreground" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold tracking-tight text-neutral-900">
                      You&apos;re now informed
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-neutral-600">
                      By continuing to use {brandName}&apos;s services, you
                      acknowledge that you have read, understood, and agreed to
                      these Terms of Service. If you have any concerns, please
                      contact us before booking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3: TRUST STRIP — BLACK EDITORIAL
      ============================================================ */}
      <section className="relative overflow-hidden bg-foreground py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,oklch(1_0_0/0.05)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-background/10 bg-background/[0.03]">
            <div className="grid grid-cols-1 divide-y divide-background/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {TRUST_ITEMS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-5 sm:p-6"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold tracking-tight text-background">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-xs text-background/50">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: FINAL CTA — PRIMARY PANEL
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
                    Ready to Book?
                  </span>
                </span>

                <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-4xl">
                  Any other questions before we get started?
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/70 sm:text-base">
                  Our team is available 24/7 to discuss our terms, answer your
                  questions, and dispatch a certified mechanic to your location.
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
                    icon={<RiShieldCheckFill className="size-4" />}
                    value="100%"
                    label="Guaranteed"
                  />
                  <TrustTile
                    icon={<RiScalesFill className="size-4" />}
                    value="Fair"
                    label="Terms"
                  />
                  <TrustTile
                    icon={<RiStarFill className="size-4" />}
                    value="5.0"
                    label="Rated"
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

      {/* ============================================================
          SCROLL TO TOP BUTTON
      ============================================================ */}
      {showScrollTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl shadow-primary/30 transition-colors hover:bg-primary/90"
        >
          <RiArrowUpLine className="size-5" />
        </button>
      )}
    </main>
  );
}

/* ============================================================
   Sub-components
   ============================================================ */

function ContactCard({
  icon,
  label,
  value,
  href,
  external = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-3.5 transition-colors hover:border-primary/40 hover:bg-primary/[0.02]"
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
          {label}
        </p>
        <p className="mt-0.5 truncate text-xs font-bold tracking-tight text-neutral-900">
          {value}
        </p>
      </div>
      <RiArrowRightUpLine className="size-3.5 shrink-0 text-neutral-300 transition-colors group-hover:text-primary" />
    </Link>
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