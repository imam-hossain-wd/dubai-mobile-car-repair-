// components/shared/Card/ReviewCard.tsx
"use client";

import {
  RiDoubleQuotesL,
  RiMapPinLine,
  RiStarFill,
  RiStarLine,
  RiVerifiedBadgeFill,
} from "@remixicon/react";
// import { Review } from "@/types/card";
import { cn } from "@/lib/utils";
import { Review } from "@/types/review";

interface ReviewCardProps {
  review: Review;
  index?: number;
  variant?: "default" | "featured" | "compact";
  className?: string;
}

export default function ReviewCard({
  review,
  index = 0,
  variant = "default",
  className,
}: ReviewCardProps) {
  const isFeatured = variant === "featured";
  const isCompact = variant === "compact";
  const initial = review.name.charAt(0).toUpperCase();

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white",
        "hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5",
        isFeatured ? "p-6 sm:p-7" : "p-5 sm:p-6",
        className
      )}
    >
      {/* ===== Top accent bar ===== */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/30 via-primary to-primary/30" />

      {/* ===== Corner hairlines ===== */}
      <div className="pointer-events-none absolute right-0 top-1 size-12">
        <div className="absolute right-0 top-0 h-px w-6 bg-primary/30" />
        <div className="absolute right-0 top-0 h-6 w-px bg-primary/30" />
      </div>

      {/* ===== Faded giant quote mark ===== */}
      <RiDoubleQuotesL
        aria-hidden="true"
        className="pointer-events-none absolute -right-2 -top-2 size-24 text-primary/[0.06]"
      />

      <div className="relative flex flex-1 flex-col">
        {/* ===== Rating row ===== */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) =>
              i < review.rating ? (
                <RiStarFill key={i} className="size-4 text-primary" />
              ) : (
                <RiStarLine key={i} className="size-4 text-neutral-300" />
              )
            )}
          </div>
          <span className="ml-1 font-mono text-xs font-semibold text-neutral-500">
            {review.rating}.0
          </span>
        </div>

        {/* ===== Quote text ===== */}
        <p
          className={cn(
            "mt-4 flex-1 leading-relaxed text-neutral-700",
            isFeatured ? "text-base sm:text-lg" : "text-sm"
          )}
        >
          &ldquo;{review.text}&rdquo;
        </p>

        {/* ===== Author footer ===== */}
        <div className="mt-5 flex items-center gap-3 border-t border-neutral-200 pt-4">
          {/* Avatar with initial */}
          <div className="relative shrink-0">
            <div className="flex size-11 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
              <span className="text-sm font-bold text-primary">{initial}</span>
            </div>
            {/* Verified check badge */}
            <span className="absolute -bottom-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-white">
              <RiVerifiedBadgeFill className="size-4 text-primary" />
            </span>
          </div>

          {/* Name + location */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <p className="truncate text-sm font-bold tracking-tight text-neutral-900">
                {review.name}
              </p>
            </div>
            <div className="mt-0.5 flex items-center gap-1 text-xs text-neutral-500">
              <RiMapPinLine className="size-3 shrink-0 text-primary" />
              <span className="truncate">{review.area}</span>
            </div>
          </div>

          {/* Folio index — right side */}
          {!isCompact && (
            <span className="font-mono text-[10px] font-semibold tracking-wider text-neutral-300">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}