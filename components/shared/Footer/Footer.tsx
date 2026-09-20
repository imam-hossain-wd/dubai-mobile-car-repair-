// components/layout/Footer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  RiMapPinFill,
  RiPhoneFill,
  RiMailFill,
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiShieldCheckFill,
  RiTimeFill,
  RiStarFill,
  RiFlashlightFill,
  RiWhatsappFill,
  RiArrowUpLine,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteconfig";
import { services } from "@/data/services/services";
import Logo from "../Logo/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const {
    brandName,
    description,
    displayNumber,
    email,
    location,
    streetAddress,
    city,
    country,
    navItems,
    footerhrefs,
    socialLinks,
    serviceAreas,
    operatingHours,
    // services,
  } = SiteConfig;

  /* Only show first N services to keep footer tidy */
  const topServices = services.slice(0, 10);
  /* Only show first N areas */
  const topAreas = serviceAreas.slice(0, 6);
  /* Merge nav links */
  const quickLinks = navItems.filter((item) => item.name !== "Home");

  return (
    <footer className="relative overflow-hidden bg-foreground text-background">
      {/* ============ Background decorative layer ============ */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,oklch(1_0_0/0.04)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ============ Top: Brand Hero Row ============ */}
        <div className="grid grid-cols-1 gap-8 border-b border-background/10 py-12 lg:grid-cols-12 lg:gap-10 lg:py-16">
     
     <Logo />

          {/* Right: Contact Tiles */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {/* Phone */}
              <ContactTile
                icon={<RiPhoneFill className="size-4" />}
                label="Call Us 24/7"
                value={displayNumber}
                href={SiteConfig.numberCallLink}
              />
              {/* Email */}
              <ContactTile
                icon={<RiMailFill className="size-4" />}
                label="Email Us"
                value={email}
                href={`mailto:${email}`}
              />
              {/* Address (full width) */}
              <div className="sm:col-span-2">
                <ContactTile
                  icon={<RiMapPinFill className="size-4" />}
                  label="Workshop Location"
                  value={`${streetAddress}, ${location}, ${city}`}
                  href={SiteConfig.GMB.mapsLink}
                  external
                />
              </div>
            </div>

            {/* Trust metrics strip */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              <MetricTile
                icon={<RiFlashlightFill className="size-3.5" />}
                value="5–30"
                unit="min"
                label="Response"
              />
              <MetricTile
                icon={<RiShieldCheckFill className="size-3.5" />}
                value="100%"
                label="Guaranteed"
              />
              <MetricTile
                icon={<RiStarFill className="size-3.5" />}
                value="5.0"
                label="Rating"
              />
            </div>
          </div>
        </div>

        {/* ============ Middle: Link Columns ============ */}
        <div className="grid grid-cols-2 gap-8 border-b border-background/10 py-12 sm:grid-cols-3 lg:grid-cols-4 lg:gap-10 lg:py-16">
          {/* Services */}
          <div>
            <ColumnHeader title="Our Services" />
            <ul className="space-y-2.5">
              {topServices.map((service) => (
                <FooterLink
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  label={service.name}
                />
              ))}
              <li className="pt-1">
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-1.5 text-xs font-semibold text-primary"
                >
                  View all services
                  <RiArrowRightLine className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <ColumnHeader title="Service Areas" />
            <ul className="space-y-2.5">
              {topAreas.map((area) => (
                <FooterLink
                  key={area.slug}
                  href={`/area-we-serve/${area.slug}`}
                  label={area.name}
                />
              ))}
              <li className="pt-1">
                <Link
                  href="/area-we-serve"
                  className="group inline-flex items-center gap-1.5 text-xs font-semibold text-primary"
                >
                  View all areas
                  <RiArrowRightLine className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <ColumnHeader title="Company" />
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <FooterLink
                  key={item.name}
                  href={item.href}
                  label={item.name}
                />
              ))}
              {footerhrefs
                .filter((f) => !quickLinks.some((q) => q.href === f.href))
                .map((item) => (
                  <FooterLink
                    key={item.title}
                    href={item.href}
                    label={item.title}
                  />
                ))}
            </ul>
          </div>

          {/* Operating Hours */}
          <div className="col-span-2 sm:col-span-1">
            <ColumnHeader title="Operating Hours" />

            {/* Today badge */}
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
              <span className="size-1.5 rounded-full bg-primary" />
              <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                Open 24/7
              </span>
            </div>

            <ul className="space-y-2">
              {operatingHours.map((day) => (
                <li
                  key={day.day}
                  className="flex items-center justify-between gap-3 text-xs"
                >
                  <span className="text-background/50">{day.day}</span>
                  <span className="font-mono font-semibold text-background">
                    {day.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ============ Bottom Bar ============ */}
        <div className="flex flex-col items-center gap-6 py-8 lg:flex-row lg:justify-between">
          {/* Copyright */}
          <div className="flex flex-col items-center gap-1 text-center lg:items-start lg:text-left">
            <p className="text-xs text-background/60">
              © {currentYear} <span className="font-semibold text-background">{brandName}</span>. All rights reserved.
            </p>
            <p className="text-[11px] text-background/40">
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
          <a
            href="#top"
            aria-label="Back to top"
            className="group inline-flex items-center gap-2 rounded-xl border border-background/10 bg-background/[0.03] px-4 py-2.5 text-xs font-semibold text-background/70 transition-colors hover:border-primary/40 hover:text-primary"
          >
            Back to Top
            <RiArrowUpLine className="size-3.5 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* ============ Giant Brand Watermark (bottom) ============ */}
      <div className="pointer-events-none relative select-none overflow-hidden border-t border-background/5">
        <p className="translate-y-[30%] whitespace-nowrap text-center text-[clamp(3rem,14vw,10rem)] font-black leading-none tracking-tighter text-background/[0.03]">
          {brandName}
        </p>
      </div>
    </footer>
  );
}

/* ============ Sub-components ============ */

function ColumnHeader({ title }: { title: string }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <h3 className="text-[11px] font-bold uppercase tracking-[0.15em] text-background">
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
        className="group inline-flex items-center gap-2 text-sm text-background/60 transition-colors hover:text-background"
      >
        <span className="size-1 rounded-full bg-primary/40 transition-colors group-hover:bg-primary" />
        <span className="truncate">{label}</span>
      </Link>
    </li>
  );
}

function ContactTile({
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
      className="group flex items-center gap-3.5 rounded-2xl border border-background/10 bg-background/[0.03] p-4 transition-colors hover:border-primary/40 hover:bg-background/[0.06]"
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-background/50">
          {label}
        </p>
        <p className="mt-0.5 truncate text-sm font-bold tracking-tight text-background">
          {value}
        </p>
      </div>
      <RiArrowRightUpLine className="size-4 shrink-0 text-background/30 transition-colors group-hover:text-primary" />
    </Link>
  );
}

function MetricTile({
  icon,
  value,
  unit,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  unit?: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-background/10 bg-background/[0.03] p-3.5">
      <span className="flex size-7 items-center justify-center rounded-lg bg-primary/15 text-primary">
        {icon}
      </span>
      <p className="mt-2.5 text-lg font-bold leading-none text-background">
        {value}
        {unit && (
          <span className="ml-0.5 text-xs font-semibold text-background/50">
            {unit}
          </span>
        )}
      </p>
      <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-background/50">
        {label}
      </p>
    </div>
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
    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-background/60">
      <span className="text-primary">{icon}</span>
      {label}
    </span>
  );
}