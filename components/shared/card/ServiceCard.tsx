/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// components/shared/Card/ServiceCard.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { 
  RiBattery2Line,
  RiFlashlightLine,
  RiComputerLine,
  RiSettings4Line,
  RiGasStationLine,
  RiCarLine,
  RiSnowflakeLine,
  RiWindowLine,
  RiDashboardLine,
  RiToolsLine,
  RiBankLine,
  RiBarChart2Line,
  RiShieldFlashLine,
  RiOilLine,
  RiArrowRightSLine,
  RiExchangeLine,
  RiWrenchLine,
  RiPianoLine,
  RiCheckLine,
} from "@remixicon/react";
import { cn } from "@/lib/utils";

// Icon mapping
const iconMap: Record<string, any> = {
  "Car Battery Replacement": RiBattery2Line,
  "Jump Start Car": RiFlashlightLine,
  "Car Computer Diagnostic": RiComputerLine,
  "Car Alternator Repair": RiSettings4Line,
  "Car Fuel Pump Repair": RiGasStationLine,
  "Car Starter Motor Repair": RiCarLine,
  "Car AC Repair": RiSnowflakeLine,
  "Car Window Motor Repair": RiWindowLine,
  "Radiator Replacement": RiDashboardLine,
  "ABS System Repair": RiBankLine,
  "Brake Pad Repair": RiBarChart2Line,
  "Car Detailing Service": RiShieldFlashLine,
  "Emergency Car Repair": RiFlashlightLine,
  "Car Mechanic Service": RiToolsLine,
  "Oil Change Service": RiOilLine,
  "Car AC Gas Refill Service": RiSnowflakeLine,
  "Car Transmission Repair": RiExchangeLine,
  "Car Service Dubai": RiWrenchLine,
  "Car Repair Dubai": RiPianoLine,
};





export interface ServiceCardProps {
  name: string;
  slug: string;
  features?: string[];
  className?: string;
  variant?: "default" | "compact" | "featured";
  showFeatures?: boolean;
  showArrow?: boolean;
  defaultExpanded?: boolean;
}

export function ServiceCard({ 
  name, 
  slug, 
  features = [],
  className, 
  variant = "default",
  showFeatures = true,
  showArrow = true,
  defaultExpanded = false
}: ServiceCardProps) {
  
  const Icon = iconMap[name] || RiToolsLine;
  
  

  const cardClasses = cn(
    "group relative block overflow-hidden border bg-white rounded transition-all duration-300 border-primary shadow-xl shadow-primary/5",
    {
      "p-5 md:p-6": variant === "default",
      "p-3 md:p-4": variant === "compact",
      "p-6 md:p-8 border-primary/20 bg-primary/5": variant === "featured",
    },
    className
  );

  const iconWrapperSize = {
    default: "h-14 w-14",
    compact: "h-10 w-10",
    featured: "h-16 w-16",
  };

  const iconInnerSize = {
    default: "h-6 w-6",
    compact: "h-4 w-4",
    featured: "h-7 w-7",
  };

  const textSize = {
    default: "text-sm md:text-base",
    compact: "text-xs md:text-sm",
    featured: "text-base md:text-lg",
  };

  const featuresToShow = features.slice(0, 4);
  const hasMoreFeatures = features.length > 4;

  return (
    <div className={cardClasses}>
      {/* Background gradient on hover */}
      <div className={`absolute inset-0  opacity-100 transition-opacity duration-500  bg-white`} />
      
      {/* Glow effect */}
      {/* <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" /> */}

      {/* Content */}
      <div className="relative ">
        {/* Header with Icon and Name */}
        <div className="flex items-center gap-4">
          {/* Icon with ring */}
          <div className="relative shrink-0">
            <div className={`absolute inset-0 rounded-full border border-black   blur-sm`} />
            <div className={cn(
              "relative flex items-center justify-center rounded-full border-2 border-primary bg-primary backdrop-blur-sm transition-all duration-300  ",
              iconWrapperSize[variant]
            )}>
              <Icon className={cn(iconInnerSize[variant], "transition-transform duration-300 text-black")} />
            </div>
          </div>
          
          {/* Name and Link */}
          <div className="flex min-w-0">
            <Link href={`/services/${slug}`} className="block">
              <h3 className={cn(
                "font-semibold leading-tight tracking-tight text-foreground transition-colors hover:text-primary text-md",
                // textSize[variant]
              )}>
                {name}
              </h3>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        {showFeatures && features.length > 0 && (
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium uppercase tracking-wider text-">
                Key Features
              </span>
              <div className="h-px flex-1 bg-primary" />
            </div>

            <div className="space-y-1.5">
              {featuresToShow.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-2 text-xs  transition-colors "
                >
                  <RiCheckLine className="mt-0.5 h-3.5 w-3.5 shrink-0 text-black" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-4 pt-3 border-t border-primary/5">
          <Link
            href={`/services/${slug}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded border border-primary/20 bg-primary px-4 py-2 text-xs font-medium text-black transition-all hover:bg-primary/10 hover:border-primary/30"
          >
            <span>Get This Service</span>
            <RiArrowRightSLine className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>

      {/* Corner accents */}
      {/* <div className="absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 transition-all duration-300 border-primary/20" />
      <div className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 transition-all duration-300 border-primary/20" /> */}
      
      {/* Subtle shimmer on hover */}
      {/* <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" /> */}
    </div>
  );
}