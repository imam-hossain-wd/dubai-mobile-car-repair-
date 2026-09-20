// components/layout/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  RiMenuLine,
  RiCloseLine,
  RiMapPinLine,
  RiPhoneFill,
  RiWhatsappFill,
  RiArrowDownSLine,
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiToolsFill,
  RiFlashlightFill,
  RiCustomerServiceFill,
  RiTimeFill,
  RiShieldCheckFill,
  RiStarFill,
  RiCheckboxCircleFill,
} from "@remixicon/react";
import { services } from "@/data/services/services";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo/autodrop-logo.png";
import { SiteConfig } from "@/config/siteconfig";

/* ============ Mega menu categories ============ */
const serviceCategories = [
  {
    name: "Emergency Services",
    icon: RiFlashlightFill,
    range: [0, 4] as const,
  },
  {
    name: "Repair Services",
    icon: RiToolsFill,
    range: [4, 8] as const,
  },
  {
    name: "Maintenance",
    icon: RiCustomerServiceFill,
    range: [8, 12] as const,
  },
];

/* ============ Nav items ============ */
interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Service Area", href: "/service-area" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  /* ============ Scroll detection ============ */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ============ Close menus on route change ============ */
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  /* ============ Lock body scroll when mobile menu is open ============ */
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300 border-b border-white/10 bg-black backdrop-blur-xl"
        //   isScrolled
        //     ? "border-b border-white/10 bg-neutral-950/90 backdrop-blur-xl"
        //     : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
            {/* ============ Logo ============ */}
            <Link
              href="/"
              aria-label={SiteConfig.brandName}
              className="relative flex shrink-0 items-center gap-2.5"
            >
              <div className="relative flex size-10 items-center justify-center overflow-hidden rounded-xl border border-primary/30 bg-primary/10">
                <Image
                  src={logo}
                  width={32}
                  height={32}
                  alt={SiteConfig.brandName}
                  className="size-7 object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <span className="block text-sm font-bold leading-tight tracking-tight text-white">
                  AutoDrop
                </span>
                <span className="block text-[9px] font-semibold uppercase tracking-[0.15em] text-primary">
                  Mobile Mechanic
                </span>
              </div>
            </Link>

            {/* ============ Desktop Navigation ============ */}
            <nav className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() =>
                      item.hasDropdown && setIsMegaMenuOpen(true)
                    }
                    onMouseLeave={() =>
                      item.hasDropdown && setIsMegaMenuOpen(false)
                    }
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "group relative flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                        isActive
                          ? "text-primary"
                          : "text-white/70 hover:text-white"
                      )}
                    >
                      {item.name}
                      {item.hasDropdown && (
                        <RiArrowDownSLine
                          className={cn(
                            "size-3.5 transition-transform duration-200",
                            isMegaMenuOpen && "rotate-180"
                          )}
                        />
                      )}

                      {/* Active underline */}
                      {isActive && (
                        <span className="absolute inset-x-3.5 -bottom-px h-0.5 rounded-full bg-primary" />
                      )}
                    </Link>

                    {/* ============ Mega Menu ============ */}
                    {item.hasDropdown && (
                      <div
                        className={cn(
                          "absolute left-0 top-full pt-3 transition-opacity duration-200",
                          isMegaMenuOpen
                            ? "pointer-events-auto opacity-100"
                            : "pointer-events-none opacity-0"
                        )}
                      >
                        <div className="relative w-[820px] overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 shadow-2xl shadow-black/40">
                          {/* Top accent bar */}
                          <div className="h-1 w-full bg-gradient-to-r from-primary/30 via-primary to-primary/30" />

                          {/* Corner hairlines */}
                          <div className="pointer-events-none absolute right-0 top-1 size-14">
                            <div className="absolute right-0 top-0 h-px w-8 bg-primary/40" />
                            <div className="absolute right-0 top-0 h-8 w-px bg-primary/40" />
                          </div>

                          {/* Categories grid */}
                          <div className="grid grid-cols-3 gap-8 p-7">
                            {serviceCategories.map((cat) => {
                              const Icon = cat.icon;
                              const [start, end] = cat.range;
                              const catServices = services.slice(start, end);

                              return (
                                <div key={cat.name}>
                                  {/* Category header */}
                                  <div className="mb-4 flex items-center gap-2.5">
                                    <span className="flex size-7 items-center justify-center rounded-lg bg-primary/15">
                                      <Icon className="size-3.5 text-primary" />
                                    </span>
                                    <h4 className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/70">
                                      {cat.name}
                                    </h4>
                                  </div>

                                  {/* Services list */}
                                  <ul className="space-y-1">
                                    {catServices.map((service) => (
                                      <li key={service.slug}>
                                        <Link
                                          href={`/services/${service.slug}`}
                                          className="group flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs text-white/60 transition-colors hover:bg-primary/10 hover:text-white"
                                        >
                                          <RiArrowRightUpLine className="size-3 shrink-0 text-primary/40 transition-colors group-hover:text-primary" />
                                          <span className="truncate">
                                            {service.name}
                                          </span>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              );
                            })}
                          </div>

                          {/* Footer strip */}
                          <div className="flex items-center justify-between gap-4 border-t border-white/10 bg-white/[0.02] px-7 py-3.5">
                            <div className="flex items-center gap-4 text-[11px] font-semibold text-white/50">
                              <span className="inline-flex items-center gap-1.5">
                                <RiTimeFill className="size-3 text-primary" />
                                24/7 Available
                              </span>
                              <span className="inline-flex items-center gap-1.5">
                                <RiShieldCheckFill className="size-3 text-primary" />
                                Guaranteed
                              </span>
                            </div>
                            <Link
                              href="/services"
                              className="group inline-flex items-center gap-1.5 text-xs font-semibold text-primary"
                            >
                              View all services
                              <RiArrowRightLine className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* ============ Right: CTA + Mobile Toggle ============ */}
            <div className="flex items-center gap-2">
              {/* Desktop CTA cluster */}
              <Link
                href={SiteConfig.numberCallLink}
                aria-label={`Call ${SiteConfig.displayNumber}`}
                className="group hidden items-center gap-2.5 rounded-xl border border-primary/30 bg-primary/10 px-4 py-2.5 transition-colors hover:border-primary/60 hover:bg-primary/15 md:inline-flex"
              >
                <span className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <RiPhoneFill className="size-3.5" />
                </span>
                <div className="hidden flex-col leading-none xl:flex">
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-primary">
                    Call 24/7
                  </span>
                  <span className="mt-0.5 text-xs font-bold text-white">
                    {SiteConfig.displayNumber}
                  </span>
                </div>
                <span className="text-xs font-bold text-white xl:hidden">
                  Call Now
                </span>
              </Link>

              {/* WhatsApp — desktop */}
              <Link
                href={SiteConfig.whatsappCallLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hidden size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary sm:inline-flex"
              >
                <RiWhatsappFill className="size-4" />
              </Link>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                className="relative flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white transition-colors hover:border-primary/40 hover:text-primary lg:hidden"
              >
                {isMobileMenuOpen ? (
                  <RiCloseLine className="size-5" />
                ) : (
                  <RiMenuLine className="size-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ============ Mobile Menu Overlay ============ */}
      <div
        className={cn(
          "fixed inset-x-0 top-16 z-40 bottom-0 overflow-y-auto bg-neutral-950 transition-opacity duration-200 lg:hidden",
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        {/* Subtle background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,oklch(1_0_0/0.04)_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
        </div>

        <div className="relative container mx-auto px-4 py-6 sm:px-6">
          {/* Nav links */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      {/* Services toggle row */}
                      <button
                        type="button"
                        onClick={() =>
                          setIsMobileServicesOpen((v) => !v)
                        }
                        className={cn(
                          "flex w-full items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-left transition-colors",
                          isMobileServicesOpen
                            ? "border-primary/40 bg-primary/10"
                            : ""
                        )}
                      >
                        <span
                          className={cn(
                            "text-sm font-semibold",
                            isMobileServicesOpen
                              ? "text-primary"
                              : "text-white"
                          )}
                        >
                          {item.name}
                        </span>
                        <RiArrowDownSLine
                          className={cn(
                            "size-4 text-primary transition-transform duration-200",
                            isMobileServicesOpen && "rotate-180"
                          )}
                        />
                      </button>

                      {/* Services list */}
                      <div
                        className={cn(
                          "grid overflow-hidden transition-[grid-template-rows,opacity] duration-200",
                          isMobileServicesOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        )}
                      >
                        <div className="min-h-0">
                          <div className="mt-2 space-y-2 rounded-xl border border-white/10 bg-white/[0.02] p-3">
                            {serviceCategories.map((cat) => {
                              const Icon = cat.icon;
                              const [start, end] = cat.range;
                              const catServices = services.slice(
                                start,
                                end
                              );

                              return (
                                <div key={cat.name}>
                                  <div className="mb-2 flex items-center gap-2 px-2 pt-1">
                                    <Icon className="size-3 text-primary" />
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/50">
                                      {cat.name}
                                    </span>
                                  </div>
                                  <ul className="space-y-0.5">
                                    {catServices.map((service) => (
                                      <li key={service.slug}>
                                        <Link
                                          href={`/services/${service.slug}`}
                                          className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs text-white/70 transition-colors hover:bg-primary/10 hover:text-white"
                                          onClick={() =>
                                            setIsMobileMenuOpen(false)
                                          }
                                        >
                                          <RiArrowRightUpLine className="size-3 shrink-0 text-primary/50" />
                                          <span className="truncate">
                                            {service.name}
                                          </span>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              );
                            })}

                            <Link
                              href="/services"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="mt-1 flex items-center justify-between rounded-lg border border-primary/30 bg-primary/10 px-3 py-2.5 text-xs font-semibold text-primary"
                            >
                              View All Services
                              <RiArrowRightLine className="size-3.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center justify-between rounded-xl border px-4 py-3.5 text-sm font-semibold transition-colors",
                        isActive
                          ? "border-primary/40 bg-primary/10 text-primary"
                          : "border-white/10 bg-white/[0.03] text-white hover:border-primary/30 hover:text-primary"
                      )}
                    >
                      {item.name}
                      <RiArrowRightUpLine
                        className={cn(
                          "size-4",
                          isActive ? "text-primary" : "text-white/40"
                        )}
                      />
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Divider */}
          <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Trust chip row */}
          <div className="mb-6 flex flex-wrap gap-2">
            <MiniChip
              icon={<RiTimeFill className="size-3" />}
              label="24/7 Available"
            />
            <MiniChip
              icon={<RiShieldCheckFill className="size-3" />}
              label="Guaranteed"
            />
            <MiniChip
              icon={<RiStarFill className="size-3" />}
              label="5.0 Rated"
            />
          </div>

          {/* Location info */}
          <div className="mb-4 flex items-center gap-2 text-xs text-white/60">
            <RiMapPinLine className="size-3.5 text-primary" />
            <span>Al Jadaf, Dubai — Serving all of {SiteConfig.city}</span>
          </div>

          {/* Dual CTA */}
          <div className="grid grid-cols-2 gap-3">
            <Link
              href={SiteConfig.numberCallLink}
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/10 text-sm font-semibold text-primary transition-colors hover:bg-primary/15"
            >
              <RiPhoneFill className="size-4" />
              Call Now
            </Link>
            <Link
              href={SiteConfig.whatsappCallLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <RiWhatsappFill className="size-4" />
              WhatsApp
            </Link>
          </div>

          {/* Footer note */}
          <p className="mt-6 text-center text-[11px] text-white/40">
            Mobile Car Repair Service · Dubai, UAE
          </p>
        </div>
      </div>
    </>
  );
}

/* ============ Sub-component ============ */
function MiniChip({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-semibold text-white/70">
      <span className="text-primary">{icon}</span>
      {label}
    </span>
  );
}