"use client";

import Link from "next/link";
import { 
  RiToolsLine,
  RiArrowRightSLine,
} from "@remixicon/react";
import { services } from "@/data/services/services";
import { SiteConfig } from "@/config/siteconfig";
import { ServiceCard } from "@/components/shared/card/ServiceCard";

// Define featured services - using actual service slugs from your data
const FEATURED_SERVICE_SLUGS = [
  "battery-replacement", // Make sure this matches your actual slug
  "jump-start",
  "computer-diagnostic",
  "alternator-repair",
  "fuel-pump-repair",
  "starter-motor-repair",
  "ac-repair",
  "brake-pad-repair"
];


const getFeaturesFromService = (service: any): string[] => {
  return service.features || [];
};

interface FeaturedServicesProps {
  title?: string;
  subtitle?: string;
  limit?: number;
  showAll?: boolean; // 👈 Added missing showAll prop
}

export function FeaturedServices({ 
  title = "Featured Services",
  subtitle = "Our most popular mobile repair services with transparent pricing",
  limit = 8,
  showAll = false // 👈 Default value
}: FeaturedServicesProps) {
  const { responseTime } = SiteConfig;
  
  // Get featured services - filter by matching slugs
  const featuredServices = services.filter(service => {
    return FEATURED_SERVICE_SLUGS.some(slug => 
      service.slug === slug || 
      service.slug.includes(slug) || 
      slug.includes(service.slug)
    );
  });

  // If showAll is true, don't limit the list
  const baseServices = featuredServices.length > 0 ? featuredServices : services;
  const displayServices = showAll ? baseServices : baseServices.slice(0, limit);

  return (
    <section className="relative w-full overflow-hidden ">

   

      <div className="container relative mx-auto px-4 py-8 md:py-10 lg:py-12">
        {/* Section Header */}
        <div className="mb-8 md:mb-10">
          <div className="flex items-center gap-3">
            <span className="text-sm  font-medium uppercase tracking-[0.2em] ">
              Featured
            </span>
            <div className="h-px w-[80%] flex-1 bg-primary" />
          </div>
          <div className="mt-3 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl  font-bold tracking-tight md:text-3xl lg:text-4xl">
                {title}
              </h2>
              <p className="mt-1 text-sm ">{subtitle}</p>
            </div>
            <div className="flex items-center gap-3 text-sm ">
              <span className="inline-flex items-center gap-1">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                {responseTime} response
              </span>
              <span className="h-4 w-px bg-border" />
              <span className="inline-flex items-center gap-1">
                <RiToolsLine className="h-4 w-4 text-primary" />
                {displayServices.length} featured
              </span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayServices.map((service) => (
            <ServiceCard
              key={service.slug}
              name={service.name}
              slug={service.slug}
              features={getFeaturesFromService(service)}
              variant="default"
              showFeatures={true}
              showArrow={true}
              defaultExpanded={false}
            />
          ))}
        </div>

        {/* View All Services Button (Hidden if showAll is true) */}
        {!showAll && (
          <div className="mt-10 flex justify-center">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded border border-primary/30 bg-primary  px-8 py-3.5 text-sm font-medium text-black transition-all hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/10"
            >
              View All Services
              <RiArrowRightSLine className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}