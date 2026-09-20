import {
  RiCellphoneLine,
  RiCarWashingLine,
  RiSettings3Line,
  RiArrowRightLine,
} from "@remixicon/react";

const steps = [
  {
    id: 1,
    stepNumber: "01",
    icon: RiCellphoneLine,
    title: "Call or Book Online",
    description:
      "Reach us 24/7 via phone, WhatsApp, or our website. Tell us your issue and location.",
    meta: "24/7 Available",
  },
  {
    id: 2,
    stepNumber: "02",
    icon: RiCarWashingLine,
    title: "We Come to You",
    description:
      "Our mobile unit arrives at your spot within 5-15 minutes, fully equipped to fix your car.",
    meta: "5–15 Min Arrival",
  },
  {
    id: 3,
    stepNumber: "03",
    icon: RiSettings3Line,
    title: "Fix On-Site",
    description:
      "Certified mechanics diagnose and repair your vehicle right there—no towing, no waiting.",
    meta: "90% Onsite Fix Rate",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-background py-10">
      {/* Background Decorative Layer */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-100 w-200 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.922_0_0/0.35)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.922_0_0/0.35)_1px,transparent_1px)] bg-size-[56px_56px] mask-[radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ============ Section Header ============ */}
        <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-20">
          {/* Eyebrow */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5">
            <span className="size-1.5 rounded-full bg-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
              Simple Process
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Repairs in{" "}
            <span className="text-primary">Three Simple Steps</span>
          </h2>

          {/* Subtitle */}
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Your car repair journey made effortless. Fast, transparent, and
            without the workshop hassle.
          </p>
        </div>

        {/* ============ Steps Grid ============ */}
        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {/* Desktop Connector — dashed line through icon centers */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-22 hidden md:block"
          >
            <div className="mx-auto h-px w-[calc(100%-16rem)] bg-[repeating-linear-gradient(to_right,var(--border)_0_6px,transparent_6px_12px)]" />
          </div>

          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;

            return (
              <article
                key={step.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card"
              >
                {/* Top gradient accent bar */}
                <div className="h-1 w-full bg-linear-to-r from-primary/40 via-primary to-primary/40" />

                {/* Giant background number */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 -top-4 select-none text-[8rem] font-black leading-none text-primary/6 sm:text-[10rem]"
                >
                  {step.stepNumber}
                </span>

                {/* Corner accent */}
                <div className="pointer-events-none absolute right-0 top-1 size-12">
                  <div className="absolute right-0 top-0 h-px w-6 bg-primary/40" />
                  <div className="absolute right-0 top-0 h-6 w-px bg-primary/40" />
                </div>

                <div className="relative flex flex-1 flex-col p-6 sm:p-7">
                  {/* Icon + Step Label Row */}
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div className="relative shrink-0">
                      <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-md" />
                      <div className="relative flex size-14 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/25">
                        <Icon className="size-6 text-primary-foreground" />
                      </div>
                    </div>

                    {/* Step label */}
                    <div className="flex flex-col">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                        Step
                      </span>
                      <span className="text-lg font-bold leading-none text-foreground">
                        {step.stepNumber}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-lg font-bold leading-tight tracking-tight text-foreground sm:text-xl">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>

                  {/* Meta footer */}
                  <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                    <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-primary">
                      <span className="size-1.5 rounded-full bg-primary" />
                      {step.meta}
                    </span>

                    {!isLast && (
                      <span className="hidden items-center text-muted-foreground md:inline-flex">
                        <RiArrowRightLine className="size-4" />
                      </span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ============ Bottom Trust Strip ============ */}
        <div className="mt-12 lg:mt-16">
          <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center text-xs text-muted-foreground sm:text-sm">
            <span className="inline-flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-primary" />
              No towing required
            </span>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <span className="inline-flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-primary" />
              Transparent upfront pricing
            </span>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <span className="inline-flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-primary" />
              Workmanship guaranteed
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}