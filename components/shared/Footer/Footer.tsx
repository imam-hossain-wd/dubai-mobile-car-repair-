// components/layout/Footer.tsx
import Link from "next/link";
import {
  RiMapPinFill,
  RiPhoneFill,
  RiMailFill,
  RiArrowRightLine,
  RiShieldCheckFill,
  RiTimeFill,
  RiStarFill,
  RiArrowUpLine,
  RiWhatsappFill,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteconfig";
import { services } from "@/data/services/services";
import Logo from "../Logo/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const {
    brandName,
    displayNumber,
    email,
    location,
    city,
    country,
    serviceAreas,
    operatingHours,
  } = SiteConfig;

  /* ============ Quick Links (fixed list) ============ */
  const quickLinks = [
    { title: "Services", href: "/services" },
    { title: "Areas We Serve", href: "/area-we-serve" },
    { title: "Projects", href: "/projects" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Sitemap", href: "/sitemap.xml" },
  ];

  return (
    <footer className="relative overflow-hidden bg-white text-neutral-900">
      {/* ============================================================
          Background Decorative Layer
      ============================================================ */}
      <div className="pointer-events-none absolute inset-0">
        {/* Soft primary glow */}
        <div className="absolute left-1/2 top-0 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        {/* Dot grid with radial mask */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,oklch(0_0_0/0.04)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
        {/* Top hairline accent */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ============================================================
            MAIN: Four Column Layout
        ============================================================ */}
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-8">
          {/* ---------- COLUMN 1: Brand + Description + Contact (4 cols) ---------- */}
          <div className="sm:col-span-2 lg:col-span-4">
            {/* Logo */}
            {/* <Link href="/" aria-label={brandName} className="inline-block"> */}
              <div className="w-56">
                <Logo />
              </div>
            {/* </Link> */}

            {/* Description */}
            <p className="max-w-sm text-sm leading-relaxed text-neutral-600">
              Dubai&apos;s most trusted 24/7 mobile car repair service —
              certified mechanics, dealer-grade tools, and transparent pricing
              delivered to your doorstep.
            </p>

            {/* Contact info — compact vertical list */}
            <ul className="mt-5 space-y-2.5">
              <li>
                <Link
                  href={SiteConfig.numberCallLink}
                  className="group inline-flex items-center gap-2.5 text-sm text-neutral-600 transition-colors hover:text-primary"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <RiPhoneFill className="size-3.5 text-primary" />
                  </span>
                  <span className="font-medium">{displayNumber}</span>
                </Link>
              </li>
              <li>
                <Link
                  href={`mailto:${email}`}
                  className="group inline-flex items-center gap-2.5 text-sm text-neutral-600 transition-colors hover:text-primary"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <RiMailFill className="size-3.5 text-primary" />
                  </span>
                  <span className="truncate font-medium">{email}</span>
                </Link>
              </li>
              <li>
                <Link
                  href={SiteConfig.GMB.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-start gap-2.5 text-sm text-neutral-600 transition-colors hover:text-primary"
                >
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <RiMapPinFill className="size-3.5 text-primary" />
                  </span>
                  <span className="font-medium leading-snug">
                    {location}, {city}, {country}
                  </span>
                </Link>
              </li>
            </ul>

            {/* Social row */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {SiteConfig.socialLinks.map((social) => {
                const Icon = social.icon;
                if (!social.href) return null;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex size-9 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-500 transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                  >
                    <Icon className="size-4" />
                  </Link>
                );
              })}
              <Link
                href={SiteConfig.whatsappCallLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex size-9 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-500 transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
              >
                <RiWhatsappFill className="size-4" />
              </Link>
            </div>
          </div>

          {/* ---------- COLUMN 2: Our Services (3 cols) ---------- */}
          <div className="lg:col-span-3">
            <ColumnHeader title="Our Services" />
            <ul className="space-y-0.5">
              {services.map((service) => (
                <FooterLink
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  label={service.name}
                />
              ))}
            </ul>
          </div>

          {/* ---------- COLUMN 3: Service Areas (3 cols) ---------- */}
          <div className="lg:col-span-2">
            <ColumnHeader title="Service Areas" />
            <ul className="space-y-2.5">
              {serviceAreas.map((area) => (
                <FooterLink
                  key={area.slug}
                  href={`/area-we-serve/${area.slug}`}
                  label={area.name}
                />
              ))}
            </ul>
          </div>

          {/* ---------- COLUMN 4: Quick Links + Hours (3 cols) ---------- */}
          <div className="sm:col-span-2 lg:col-span-3">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1 lg:gap-8">
              {/* Quick Links */}
              <div>
                <ColumnHeader title="Quick Links" />
                <ul className="space-y-2.5">
                  {quickLinks.map((item) => (
                    <FooterLink
                      key={item.title}
                      href={item.href}
                      label={item.title}
                    />
                  ))}
                </ul>
              </div>

              {/* Operating Hours */}
              <div>
                <ColumnHeader title="Operating Hours" />

                {/* Open 24/7 Badge */}
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1">
                  <span className="size-1.5 rounded-full bg-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                    Open 24/7
                  </span>
                </div>

                <ul className="space-y-1.5">
                  {operatingHours.map((day) => (
                    <li
                      key={day.day}
                      className="flex items-center justify-between gap-3 text-xs"
                    >
                      <span className="text-neutral-500">{day.day}</span>
                      <span className="font-mono font-semibold text-neutral-900">
                        {day.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            BOTTOM BAR — Copyright + Trust + Back to Top
        ============================================================ */}
        <div className="flex flex-col items-center gap-5 border-t border-neutral-200 py-6 lg:flex-row lg:justify-between">
          {/* Copyright */}
          <div className="flex flex-col items-center gap-1 text-center lg:items-start lg:text-left">
            <p className="text-xs text-neutral-500">
              © {currentYear}{" "}
              <span className="font-semibold text-neutral-900">
                {brandName}
              </span>
              . All rights reserved.
            </p>
            <p className="text-[11px] text-neutral-400">
              Mobile Car Repair Service · {city}, {country}
            </p>
          </div>

          {/* Trust chips */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <TrustChip
              icon={<RiShieldCheckFill className="size-3.5" />}
              label="Licensed & Insured"
            />
            <TrustChip
              icon={<RiTimeFill className="size-3.5" />}
              label="24/7 Dispatch"
            />
            <TrustChip
              icon={<RiStarFill className="size-3.5" />}
              label="Top Rated"
            />
          </div>

          {/* Back to top */}
          <Link
            href="#top"
            aria-label="Back to top"
            className="group inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-xs font-semibold text-neutral-600 transition-colors hover:border-primary/40 hover:text-primary"
          >
            Back to Top
            <RiArrowUpLine className="size-3.5 transition-transform group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      {/* ============================================================
          Giant Brand Watermark
      ============================================================ */}
      <div className="pointer-events-none relative select-none overflow-hidden border-t border-neutral-100">
        <p className="translate-y-[30%] whitespace-nowrap text-center text-[clamp(3rem,14vw,10rem)] font-black leading-none tracking-tighter text-neutral-900/[0.04]">
          {brandName}
        </p>
      </div>
    </footer>
  );
}

/* ============================================================
   Sub-components
   ============================================================ */

function ColumnHeader({ title }: { title: string }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-900">
        {title}
      </h3>
      <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
    </div>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="group inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-900"
      >
        <span className="size-1 shrink-0 rounded-full bg-primary/40 transition-colors group-hover:bg-primary" />
        <span className="truncate">{label}</span>
      </Link>
    </li>
  );
}

function TrustChip({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-neutral-500">
      <span className="text-primary">{icon}</span>
      {label}
    </span>
  );
}