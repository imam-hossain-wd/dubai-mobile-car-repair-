import {
  RiCarWashingLine, 
  RiSettings3Line,
  RiCellphoneLine
} from "@remixicon/react";

const steps = [
  {
    id: 1,
    stepNumber: "01",
    icon: RiCellphoneLine,
    title: "Call or Book Online",
    description: "Reach us 24/7 via phone, WhatsApp, or our website. Tell us your issue and location.",
  },
  {
    id: 2,
    stepNumber: "02",
    icon: RiCarWashingLine,
    title: "We Come to You",
    description: "Our mobile unit arrives at your spot within 5-15 minutes, fully equipped to fix your car.",
  },
  {
    id: 3,
    stepNumber: "03",
    icon: RiSettings3Line,
    title: "Fix On-Site",
    description: "Certified mechanics diagnose and repair your vehicle right there—no towing, no waiting.",
  },

];

export default function HowItWorks() {
  return (
    <section className="relative py-8 overflow-hidden bg-background">

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-10">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl font-serif">
            How It Works
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg leading-relaxed">
            Your car repair journey in four simple steps. Fast, transparent, and without the workshop hassle.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">

          {/* Desktop Connector Line (Hidden on mobile/tablet) */}
          <div className="hidden lg:block absolute top-16 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-border to-transparent z-0" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="group relative flex flex-col items-center text-center p-6 border  bg-white "
              >
                <span className="absolute top-4 right-4 text-7xl font-black text-primary/30  transition-colors duration-500 select-none pointer-events-none">
                  {step.stepNumber}
                </span>

                {/* Icon Container */}
                <div className={`relative z-10 flex h-18 w-18 rounded-full items-center justify-center bg-primary`}>
                  <Icon className={`h-9 w-9 text-white`} />
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-3 mt-4">
                  {/* 3. Step Number Text Label */}
                  <span className="flex text-white justify-center items-center mx-auto w-24 h-5 rounded-full bg-primary text-[11px] font-bold tracking-widest uppercase">
                    Step {step.stepNumber}
                  </span>
                  <h3 className="text-lg font-semibold transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-xs  leading-relaxed px-2">
                    {step.description}
                  </p>
                </div>

                {/* Bottom accent line animation on hover */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-primary rounded-t-full w-2/3 transition-all duration-500" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {/* <div className="mt-16 text-center">
          <a
            href="/contact"
            className="group inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
          >
            Get Started Now
            <svg
              className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div> */}
      </div>
    </section>
  );
}