// app/contact/page.tsx
import Link from "next/link";
import {
  RiPhoneFill,
  RiWhatsappFill,
  RiMailFill,
  RiMapPinFill,
  RiTimeFill,
  RiArrowRightLine,
  RiShieldCheckFill,
  RiFlashlightFill,
  RiCustomerServiceFill,
  RiCheckboxCircleFill,
  RiSendPlaneFill,
  RiUserFill,
  RiMessageFill,
  RiCarFill,
  RiArrowRightUpLine,
  RiStarFill,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteconfig";

/* ============ Contact options data ============ */
const CONTACT_OPTIONS = [
  {
    icon: RiPhoneFill,
    label: "Call Us 24/7",
    value: SiteConfig.displayNumber,
    description: "Fastest way to reach us — a mechanic answers immediately.",
    href: SiteConfig.numberCallLink,
    isPrimary: true,
    isExternal: false,
  },
  {
    icon: RiWhatsappFill,
    label: "WhatsApp",
    value: "Chat instantly",
    description: "Send photos, location, or vehicle details for quick diagnosis.",
    href: SiteConfig.whatsappCallLink,
    isPrimary: false,
    isExternal: true,
  },
  {
    icon: RiMailFill,
    label: "Email Us",
    value: SiteConfig.email,
    description: "For non-urgent inquiries, quotes, and fleet service requests.",
    href: `mailto:${SiteConfig.email}`,
    isPrimary: false,
    isExternal: false,
  },
  {
    icon: RiMapPinFill,
    label: "Workshop Location",
    value: `${SiteConfig.location}, ${SiteConfig.city}`,
    description: "Visit us for scheduled services or major mechanical work.",
    href: SiteConfig.GMB.mapsLink,
    isPrimary: false,
    isExternal: true,
  },
];

/* ============ Service options for form dropdown ============ */
const SERVICE_OPTIONS = [
  "Emergency Car Repair",
  "Car Battery Replacement",
  "Jump Start Service",
  "Car AC Repair / Gas Refill",
  "Computer Diagnostics",
  "Brake Pad Repair",
  "Alternator / Starter Repair",
  "Oil Change & Service",
  "Transmission Repair",
  "Other",
];

/* ============ Trust indicators ============ */
const TRUST_ITEMS = [
  {
    icon: RiShieldCheckFill,
    title: "Licensed & Insured",
    subtitle: "RTA-compliant team",
  },
  {
    icon: RiFlashlightFill,
    title: "5–30 Min Response",
    subtitle: "Across all Dubai",
  },
  {
    icon: RiCustomerServiceFill,
    title: "24/7 Support",
    subtitle: "Nights, weekends, holidays",
  },
];

export default function ContactPage() {
  const {
    brandName,
    displayNumber,
    numberCallLink,
    whatsappCallLink,
    email,
    location,
    streetAddress,
    city,
    country,
    responseTime,
    GMB,
  } = SiteConfig;

  return (
    <main className="bg-white">
      {/* ============================================================
          SECTION 1: COMPACT HERO — BLACK EDITORIAL
      ============================================================ */}
      <section className="relative overflow-hidden bg-foreground pt-32 pb-16 lg:pt-40 lg:pb-20">
        {/* Background decorative layer */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,oklch(1_0_0/0.05)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full rounded-full bg-primary/60" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                Contact Us · {city}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-background sm:text-5xl lg:text-6xl">
              Let&apos;s Get Your Car{" "}
              <span className="text-primary">Back on the Road</span>
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-background/60 sm:text-lg">
              Call, WhatsApp, or fill in the form below. Certified mechanics
              dispatched to your location in {responseTime} — anywhere in {city}.
            </p>

            {/* Trust chips row */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {TRUST_ITEMS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="inline-flex items-center gap-2.5 rounded-full border border-background/10 bg-background/[0.03] px-4 py-2 backdrop-blur-sm"
                  >
                    <span className="flex size-7 items-center justify-center rounded-lg bg-primary/15">
                      <Icon className="size-3.5 text-primary" />
                    </span>
                    <div className="text-left">
                      <p className="text-xs font-bold leading-none text-background">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-[10px] text-background/50">
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
          SECTION 2: CONTACT FORM + INFO — WHITE EDITORIAL
      ============================================================ */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,oklch(0_0_0/0.04)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* ============ LEFT: Contact Form (7 cols) ============ */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white">
                {/* Top accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-primary/40 via-primary to-primary/40" />

                {/* Corner hairlines */}
                <div className="pointer-events-none absolute right-0 top-1 size-14">
                  <div className="absolute right-0 top-0 h-px w-8 bg-primary/40" />
                  <div className="absolute right-0 top-0 h-8 w-px bg-primary/40" />
                </div>

                <div className="p-6 sm:p-8 lg:p-10">
                  {/* Header */}
                  <div className="mb-8">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1">
                      <RiSendPlaneFill className="size-3 text-primary" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                        Send a Message
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-3xl">
                      Request a Mobile Mechanic
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                      Fill in your details and we&apos;ll get back to you within
                      minutes. For emergencies, call us directly.
                    </p>
                  </div>

                  {/* Form */}
                  <form className="space-y-5">
                    {/* Row 1: Name + Phone */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <Field
                        label="Full Name"
                        htmlFor="name"
                        required
                        placeholder="John Smith"
                        type="text"
                        icon={<RiUserFill className="size-3.5" />}
                      />
                      <Field
                        label="Phone Number"
                        htmlFor="phone"
                        required
                        placeholder="+971 50 000 0000"
                        type="tel"
                        icon={<RiPhoneFill className="size-3.5" />}
                      />
                    </div>

                    {/* Row 2: Email */}
                    <Field
                      label="Email Address"
                      htmlFor="email"
                      required
                      placeholder="you@example.com"
                      type="email"
                      icon={<RiMailFill className="size-3.5" />}
                    />

                    {/* Row 3: Service type */}
                    <SelectField
                      label="Service Needed"
                      htmlFor="service"
                      required
                      placeholder="Select a service"
                      options={SERVICE_OPTIONS}
                    />

                    {/* Row 4: Message */}
                    <TextAreaField
                      label="Message"
                      htmlFor="message"
                      required
                      placeholder="Describe your car issue, location, and preferred time..."
                    />

                    {/* Submit */}
                    <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-[11px] text-neutral-400">
                        We respond within{" "}
                        <span className="font-semibold text-primary">
                          {responseTime}
                        </span>
                      </p>
                      <button
                        type="submit"
                        className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90"
                      >
                        Send Request
                        <RiArrowRightLine className="size-4 transition-transform group-hover:translate-x-0.5" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* ============ RIGHT: Contact Info (5 cols) ============ */}
            <div className="lg:col-span-5">
              <div className="space-y-4 lg:sticky lg:top-28">
                {/* Header */}
                <div className="mb-2">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1">
                    <RiFlashlightFill className="size-3 text-primary" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                      Direct Contact
                    </span>
                  </div>
                  <h3 className="text-xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-2xl">
                    Or reach us instantly
                  </h3>
                </div>

                {/* Contact options */}
                {CONTACT_OPTIONS.map((option, i) => {
                  const Icon = option.icon;
                  return (
                    <Link
                      key={i}
                      href={option.href}
                      target={option.isExternal ? "_blank" : undefined}
                      rel={option.isExternal
                        ? "noopener noreferrer"
                        : undefined}
                      className={
                        option.isPrimary
                          ? "group block rounded-2xl border border-primary bg-primary p-5 transition-colors hover:bg-primary/95"
                          : "group block rounded-2xl border border-neutral-200 bg-white p-5 transition-colors hover:border-primary/40 hover:bg-primary/[0.02]"
                      }
                    >
                      <div className="flex items-start gap-4">
                        <span
                          className={
                            option.isPrimary
                              ? "flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/15"
                              : "flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10"
                          }
                        >
                          <Icon
                            className={
                              option.isPrimary
                                ? "size-5 text-primary-foreground"
                                : "size-5 text-primary"
                            }
                          />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p
                            className={
                              option.isPrimary
                                ? "text-[10px] font-bold uppercase tracking-wider text-primary-foreground/70"
                                : "text-[10px] font-bold uppercase tracking-wider text-neutral-400"
                            }
                          >
                            {option.label}
                          </p>
                          <p
                            className={
                              option.isPrimary
                                ? "mt-1 truncate text-base font-bold text-primary-foreground"
                                : "mt-1 truncate text-base font-bold text-neutral-900"
                            }
                          >
                            {option.value}
                          </p>
                          <p
                            className={
                              option.isPrimary
                                ? "mt-1.5 text-xs leading-relaxed text-primary-foreground/70"
                                : "mt-1.5 text-xs leading-relaxed text-neutral-500"
                            }
                          >
                            {option.description}
                          </p>
                        </div>
                        <RiArrowRightUpLine
                          className={
                            option.isPrimary
                              ? "size-4 shrink-0 text-primary-foreground/60"
                              : "size-4 shrink-0 text-neutral-300 transition-colors group-hover:text-primary"
                          }
                        />
                      </div>
                    </Link>
                  );
                })}

                {/* Hours card */}
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                  <div className="flex items-center gap-2.5">
                    <RiTimeFill className="size-4 text-primary" />
                    <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-900">
                      Working Hours
                    </h4>
                  </div>
                  <div className="mt-4 space-y-1.5">
                    {SiteConfig.operatingHours.map((day) => (
                      <div
                        key={day.day}
                        className="flex items-center justify-between text-xs"
                      >
                        <span className="text-neutral-500">{day.day}</span>
                        <span className="font-mono font-semibold text-neutral-900">
                          {day.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3: FULL-WIDTH MAP — BLACK FRAME
      ============================================================ */}
      <section className="relative overflow-hidden bg-foreground py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
                <RiMapPinFill className="size-3 text-primary" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                  Find Us
                </span>
              </div>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-background sm:text-4xl">
                Visit Our Workshop in{" "}
                <span className="text-primary">{location}</span>
              </h2>
            </div>

            <div className="flex flex-col justify-end lg:col-span-5">
              <p className="text-sm leading-relaxed text-background/60">
                {streetAddress}, {location}, {city}, {country}. Open 24/7 for
                emergency drop-offs and scheduled major repairs.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href={GMB.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-5 text-xs font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90"
                >
                  <RiMapPinFill className="size-3.5" />
                  Get Directions
                  <RiArrowRightUpLine className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href={numberCallLink}
                  className="inline-flex h-11 items-center gap-2 rounded-xl border-2 border-background/15 bg-background/[0.03] px-5 text-xs font-semibold text-background backdrop-blur-sm transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <RiPhoneFill className="size-3.5" />
                  Call Before Visiting
                </Link>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative overflow-hidden rounded-3xl border border-background/10">
            {/* Corner hairlines */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 size-16">
              <div className="absolute left-0 top-0 h-px w-10 bg-primary/60" />
              <div className="absolute left-0 top-0 h-10 w-px bg-primary/60" />
            </div>
            <div className="pointer-events-none absolute bottom-0 right-0 z-10 size-16">
              <div className="absolute bottom-0 right-0 h-px w-10 bg-primary/60" />
              <div className="absolute bottom-0 right-0 h-10 w-px bg-primary/60" />
            </div>

            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-background/10 bg-background/[0.03] px-5 py-3.5 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full rounded-full bg-primary/60" />
                  <span className="relative inline-flex size-2 rounded-full bg-primary" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-background/70">
                  Live Location
                </span>
              </div>
              <span className="font-mono text-[10px] text-background/50">
                {GMB.latitude}, {GMB.longitude}
              </span>
            </div>

            {/* Map iframe */}
            <div className="relative aspect-4/3 w-full bg-neutral-900 sm:aspect-16/9 lg:aspect-21/9">
              <iframe
                title={`${brandName} — Location Map`}
                src={GMB.embedMap}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "grayscale(0.15) contrast(1.05)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: FINAL CTA — PRIMARY PANEL
      ============================================================ */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-20">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-primary bg-primary p-8 sm:p-10 lg:p-14">
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

            <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
              {/* Left */}
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-1">
                  <span className="size-1.5 rounded-full bg-primary-foreground" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                    Emergency? Call Now
                  </span>
                </span>

                <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-4xl">
                  Stranded? We&apos;re on the way
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/70 sm:text-base">
                  Our mobile units are deployed across Dubai 24/7. One call and
                  a certified mechanic is dispatched immediately to your exact
                  location.
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
                    WhatsApp
                  </Link>
                </div>
              </div>

              {/* Right: Metrics */}
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
                    icon={<RiCustomerServiceFill className="size-4" />}
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
   Form Field Sub-components
   ============================================================ */

function Field({
  label,
  htmlFor,
  required,
  placeholder,
  type,
  icon,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  placeholder: string;
  type: string;
  icon: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-neutral-700"
      >
        {label}
        {required && <span className="text-primary">*</span>}
      </label>
      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 flex size-5 -translate-y-1/2 items-center justify-center text-primary">
          {icon}
        </span>
        <input
          type={type}
          id={htmlFor}
          name={htmlFor}
          required={required}
          placeholder={placeholder}
          className="h-12 w-full rounded-xl border border-neutral-200 bg-white pl-12 pr-4 text-sm text-neutral-900 placeholder:text-neutral-400 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>
    </div>
  );
}

function SelectField({
  label,
  htmlFor,
  required,
  placeholder,
  options,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  placeholder: string;
  options: string[];
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-neutral-700"
      >
        {label}
        {required && <span className="text-primary">*</span>}
      </label>
      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 flex size-5 -translate-y-1/2 items-center justify-center text-primary">
          <RiCarFill className="size-3.5" />
        </span>
        <select
          id={htmlFor}
          name={htmlFor}
          required={required}
          defaultValue=""
          className="h-12 w-full cursor-pointer appearance-none rounded-xl border border-neutral-200 bg-white pl-12 pr-10 text-sm text-neutral-900 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 5L6 8L9 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

function TextAreaField({
  label,
  htmlFor,
  required,
  placeholder,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  placeholder: string;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-neutral-700"
      >
        {label}
        {required && <span className="text-primary">*</span>}
      </label>
      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-4 flex size-5 items-center justify-center text-primary">
          <RiMessageFill className="size-3.5" />
        </span>
        <textarea
          id={htmlFor}
          name={htmlFor}
          required={required}
          rows={5}
          placeholder={placeholder}
          className="w-full resize-none rounded-xl border border-neutral-200 bg-white py-3.5 pl-12 pr-4 text-sm text-neutral-900 placeholder:text-neutral-400 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>
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