"use client";

import Link from "next/link";
import Image from "next/image";
import {
  RiArrowRightUpLine,
  RiArrowRightSLine,
  RiCheckLine,
  RiFlashlightFill,
} from "@remixicon/react";
import { cn } from "@/lib/utils";
import { ServiceCardProps } from "@/types/card";



export function ServiceCard({
  name,
  slug,
  features = [],
  image,
  intro,
  className,
  index = 0,
}: ServiceCardProps) {
  const displayFeatures = features.slice(0, 4);
  const description =
    intro?.content?.split(".")[0]?.slice(0, 110) + "..." || "";

  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500",
        "hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/10",
        "hover:-translate-y-1",
        className
      )}
    >
      {/* ===== Image Section ===== */}
      <div className="relative aspect-16/10 w-full overflow-hidden bg-muted">
        {image ? (
          <Image
            src={image}
            alt={`${name} in Dubai`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-primary/5 to-background" />
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

        {/* Live Badge */}
        <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 backdrop-blur-md">
          <RiFlashlightFill className="size-3 text-primary" />
          <span className="text-[10px] font-semibold uppercase tracking-wider text-white">
            Same Day
          </span>
        </div>

        {/* Title on image */}
        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="text-lg font-bold leading-tight text-white drop-shadow-lg sm:text-xl">
            {name}
          </h3>
        </div>
      </div>

      {/* ===== Content Section ===== */}
      <div className="flex flex-1 flex-col p-5">
        {/* Features */}
        {displayFeatures.length > 0 && (
          <ul className="mb-5 space-y-2">
            {displayFeatures.map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm text-foreground/80"
              >
                <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-primary/15">
                  <RiCheckLine className="size-3 text-primary" />
                </span>
                <span className="line-clamp-1 text-xs">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* CTA Row */}
        <div className="flex items-center justify-between border-t border-border pt-4">
          <Link
            href={`/services/${slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary"
          >
            Learn More
            <RiArrowRightSLine className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href={`/services/${slug}`}
            aria-label={`Book ${name}`}
            className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/30"
          >
            <RiArrowRightUpLine className="size-4" />
          </Link>
        </div>
      </div>

      {/* Decorative corner accent */}
      <div className="pointer-events-none absolute right-0 top-0 h-16 w-16 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute right-0 top-0 h-px w-8 bg-primary" />
        <div className="absolute right-0 top-0 h-8 w-px bg-primary" />
      </div>
    </article>
  );
}