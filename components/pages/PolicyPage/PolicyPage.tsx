// app/privacy/page.tsx
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
  RiDatabaseFill,
  RiShareFill,
  RiGlobalFill,
  RiMailFill,
  RiCheckboxCircleFill,
  RiArrowUpLine,
  RiArrowRightUpLine,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteconfig";
import { cn } from "@/lib/utils";

/* ============ Policy sections data ============ */
const POLICY_SECTIONS = [
  {
    id: "introduction",
    number: "01",
    icon: RiFileTextFill,
    title: "Introduction",
    content: [
      `Welcome to ${SiteConfig.brandName} ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our mobile car repair services across ${SiteConfig.city}, ${SiteConfig.country}.`,
      `By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree, please do not use our services.`,
    ],
  },
  {
    id: "information",
    number: "02",
    icon: RiDatabaseFill,
    title: "Information We Collect",
    content: [
      `We collect information that you voluntarily provide when you contact us, book a service, or interact with our website. This may include your name, phone number, email address, vehicle details, location, and description of your service needs.`,
      `We may also automatically collect certain technical information — such as your IP address, browser type, device information, and usage data — when you browse our website. This helps us improve our services and user experience.`,
    ],
    list: [
      "Full name and contact details",
      "Vehicle make, model, and registration number",
      "Service location and address",
      "Issue description or diagnostic details",
      "Payment information (processed securely)",
    ],
  },
  {
    id: "usage",
    number: "03",
    icon: RiUserFill,
    title: "How We Use Your Information",
    content: [
      `We use your information to provide, maintain, and improve our mobile car repair services. This includes dispatching technicians, processing payments, responding to inquiries, and sending service confirmations.`,
      `We may also use your contact information to send you updates, promotional offers, and service reminders — only if you have opted in to receive them. You can opt out at any time.`,
    ],
    list: [
      "Dispatch mobile mechanics to your location",
      "Process bookings and payments",
      "Respond to customer inquiries and complaints",
      "Improve our services and website experience",
      "Comply with legal and regulatory requirements",
    ],
  },
  {
    id: "sharing",
    number: "04",
    icon: RiShareFill,
    title: "Information Sharing & Disclosure",
    content: [
      `We do not sell, trade, or rent your personal information to third parties. We may share your information only with trusted service providers who assist us in operating our business — such as payment processors, diagnostic platforms, and communication tools.`,
      `We may also disclose your information when required by law, to protect our rights, or to ensure the safety of our customers and technicians.`,
    ],
  },
  {
    id: "security",
    number: "05",
    icon: RiLockFill,
    title: "Data Security",
    content: [
      `We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, and access controls.`,
      `However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee absolute security.`,
    ],
  },
  {
    id: "cookies",
    number: "06",
    icon: RiGlobalFill,
    title: "Cookies & Tracking Technologies",
    content: [
      `Our website uses cookies and similar tracking technologies to enhance user experience, analyze website traffic, and understand where our visitors come from. Cookies are small data files stored on your device.`,
      `You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of our website may not function properly without cookies.`,
    ],
  },
  {
    id: "rights",
    number: "07",
    icon: RiShieldCheckFill,
    title: "Your Rights",
    content: [
      `Depending on your location, you may have certain rights regarding your personal information. These may include the right to access, correct, delete, or restrict the use of your data.`,
      `To exercise any of these rights, please contact us using the details provided below. We will respond to your request within a reasonable timeframe.`,
    ],
    list: [
      "Right to access your personal data",
      "Right to correct inaccurate information",
      "Right to request deletion of your data",
      "Right to opt out of marketing communications",
      "Right to data portability",
    ],
  },
  {
    id: "contact",
    number: "08",
    icon: RiMailFill,
    title: "Contact Us",
    content: [
      `If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us using the details below.`,
    ],
  },
];

const HERO_TRUST = [
  { icon: RiShieldCheckFill, label: "Data Protected" },
  { icon: RiLockFill, label: "Secure Storage" },
  { icon: RiUserFill, label: "Your Rights" },
];

const TRUST_ITEMS = [
  {
    icon: RiShieldCheckFill,
    title: "100% Secure",
    subtitle: "Encrypted data storage",
  },
  {
    icon: RiTimeFill,
    title: "24/7 Support",
    subtitle: "Questions anytime",
  },
  {
    icon: RiCustomerServiceFill,
    title: "Transparent",
    subtitle: "No hidden practices",
  },
];

export default function PrivacyPolicyPage() {
  const {
    brandName,
    displayNumber,
    numberCallLink,
    whatsappCallLink,
    email,
    city,
    country,
  } = SiteConfig;

  const [activeSection, setActiveSection] = useState("introduction");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  /* ============ Smooth scroll to section (no hash in URL) ============ */
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
        /* Pick the most visible intersecting section */
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

    POLICY_SECTIONS.forEach((section) => {
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
              Privacy Policy
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
              Your Privacy,{" "}
              <span className="text-primary">Our Responsibility</span>
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-background/60 sm:text-lg">
              How {brandName} collects, uses, and protects your personal
              information when you use our mobile car repair services across{" "}
              {city}.
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
          SECTION 2: POLICY CONTENT — WHITE EDITORIAL
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
                      <RiFileTextFill className="size-4 text-primary" />
                      <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-900">
                        Contents
                      </h3>
                    </div>

                    {/* Navigation list — buttons, no hash URLs */}
                    <nav className="space-y-1">
                      {POLICY_SECTIONS.map((section) => {
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
                        Our team is available 24/7 to help with any privacy
                        concerns.
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

            {/* ============ RIGHT: Policy Content (8 cols) ============ */}
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
                {POLICY_SECTIONS.map((section) => {
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
                      this Privacy Policy. If you have any concerns, please
                      contact us before proceeding.
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
                    Questions About Privacy?
                  </span>
                </span>

                <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-4xl">
                  We&apos;re here to answer them
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/70 sm:text-base">
                  Reach out to our team anytime — we&apos;re available 24/7 to
                  discuss how your data is handled and protected.
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
                    label="Secure"
                  />
                  <TrustTile
                    icon={<RiLockFill className="size-4" />}
                    value="SSL"
                    label="Encrypted"
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