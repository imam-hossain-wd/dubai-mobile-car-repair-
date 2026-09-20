// components/sections/hero-section.tsx
import { RiArrowRightLine, RiPhoneLine, RiShieldCheckLine, RiTimeLine, RiToolsLine } from "@remixicon/react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { SiteConfig } from "@/config/siteconfig"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-sm font-medium text-primary">
                24/7 Emergency Service Available
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
              Car Breakdown?{" "}
              <span className="text-primary">We Come To You</span>{" "}
              in 5–30 Minutes
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Dubai's most trusted mobile car repair service. Certified mechanics, 
              transparent pricing, and complete onsite repairs — wherever your car is parked.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group h-14 px-8 text-base font-semibold rounded-xl"
              >
                <Link href={SiteConfig.numberCallLink}>
                  <RiPhoneLine className="mr-2 size-5" />
                  Call Now
                  <RiArrowRightLine className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base font-semibold rounded-xl border-2"
              >
                <Link href={SiteConfig.whatsappCallLink} target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </Link>
              </Button>
            </div>

            {/* Phone Number Display */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <RiPhoneLine className="size-4 text-primary" />
                <span>Call us directly:</span>
              </div>
              <Link
                href={SiteConfig.numberCallLink}
                className="text-lg font-bold text-foreground hover:text-primary transition-colors"
              >
                {SiteConfig.displayNumber}
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <RiTimeLine className="size-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">5–30 Min</p>
                  <p className="text-xs text-muted-foreground">Response Time</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <RiShieldCheckLine className="size-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Certified</p>
                  <p className="text-xs text-muted-foreground">Technicians</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <RiToolsLine className="size-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">90% Onsite</p>
                  <p className="text-xs text-muted-foreground">Repair Rate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image / Visual */}
          <div className="relative lg:pl-8">
            <div className="relative aspect-[4/3] lg:aspect-[3/4] rounded-2xl overflow-hidden bg-muted">
              {/* Replace with your actual image */}
              <Image
                src="/images/hero-mechanic.webp"
                alt="Certified mobile car mechanic repairing vehicle in Dubai"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating Card - Response Time */}
            <div className="absolute -bottom-6 -left-6 lg:-left-12 bg-card border border-border rounded-xl p-4 shadow-xl backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Available Now</p>
                  <p className="text-xs text-muted-foreground">Mechanics nearby</p>
                </div>
              </div>
            </div>

            {/* Floating Card - Rating */}
            <div className="absolute -top-4 -right-4 lg:-right-8 bg-card border border-border rounded-xl p-4 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-yellow-500 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-bold text-foreground">5.0</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">500+ Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}