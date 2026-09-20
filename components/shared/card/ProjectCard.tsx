// components/shared/Card/ProjectCard.tsx
"use client";

import Image from "next/image";
import {
  RiMapPinLine,
  RiArrowRightUpLine,
  RiCheckboxCircleFill,
  RiTimeLine,
} from "@remixicon/react";
import { Project } from "@/types/project";
import { cn } from "@/lib/utils";
import { ProjectCardProps } from "@/types/card";

export default function ProjectCard({
  project,
  index,
  onClick,
  variant = "default",
  className,
}: ProjectCardProps) {
  const isFeatured = variant === "featured";
  const isCompact = variant === "compact";

  return (
    <article
      onClick={onClick}
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-neutral-900",
        "hover:border-primary/40",
        className
      )}
    >
      {/* ========== IMAGE LAYER ========== */}
      <div
        className={cn(
          "relative w-full overflow-hidden bg-neutral-800",
          isFeatured ? "aspect-4/5 sm:aspect-16/10" : "aspect-4/3"
        )}
      >
        {/* Fallback gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-900 to-black" />

        {/* Actual image */}
        <Image
          src={project.image}
          alt={`${project.title} — ${project.area}, Dubai`}
          fill
          sizes={
            isFeatured
              ? "(max-width: 1024px) 100vw, 60vw"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
          className="object-cover"
        />

        {/* Dark gradient for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* ========== TOP ROW: Status + Index ========== */}
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
          {/* Completed badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-black/50 px-2.5 py-1 backdrop-blur-md">
            <RiCheckboxCircleFill className="size-3 text-primary" />
            <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
              Completed
            </span>
          </div>

          {/* Folio number */}
          <span className="font-mono text-xs font-semibold tracking-wider text-white/60">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* ========== BOTTOM: Title + Location ========== */}
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          {/* Service category chip */}
          <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-primary" />
            <span className="text-[10px] font-medium uppercase tracking-wider text-white/90">
              {project.service}
            </span>
          </div>

          {/* Title */}
          <h3
            className={cn(
              "font-bold leading-tight tracking-tight text-white",
              isFeatured
                ? "text-lg sm:text-xl lg:text-2xl"
                : "text-sm sm:text-base"
            )}
          >
            {project.title}
          </h3>

          {/* Location row */}
          <div className="mt-2 flex items-center gap-1.5 text-xs text-white/70">
            <RiMapPinLine className="size-3.5 text-primary" />
            <span className="truncate">{project.area}</span>
            <span className="mx-1 size-0.5 rounded-full bg-white/30" />
            <RiTimeLine className="size-3.5 text-primary" />
            <span>{project?.clientOverview?.responseTimeMinutes} min</span>
          </div>
        </div>

        {/* ========== HOVER: Corner CTA ========== */}
        <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 opacity-0 group-hover:opacity-100 sm:block">
          <div className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30">
            <RiArrowRightUpLine className="size-5" />
          </div>
        </div>

        {/* ========== Corner hairlines (always visible on featured) ========== */}
        {(isFeatured || isCompact) && (
          <div className="pointer-events-none absolute right-0 top-0 size-14">
            <div className="absolute right-0 top-0 h-px w-8 bg-primary" />
            <div className="absolute right-0 top-0 h-8 w-px bg-primary" />
          </div>
        )}
      </div>

      {/* ========== BOTTOM META BAR (non-featured only) ========== */}
      {!isFeatured && !isCompact && (
        <div className="flex items-center justify-between border-t border-white/10 bg-neutral-950 px-4 py-3">
          <span className="font-mono text-[10px] uppercase tracking-wider text-white/40">
            {project?.category}
          </span>
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
            View Case
            <RiArrowRightUpLine className="size-3" />
          </span>
        </div>
      )}
    </article>
  );
}