// components/sections/Reviews.tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import {
  RiStarFill,
  RiShieldCheckFill,
  RiArrowLeftLine,
  RiArrowRightLine,
  RiVerifiedBadgeFill,
  RiTimeLine,
} from "@remixicon/react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";


import { Review, ReviewsProps } from "@/types/review";
import ReviewCard from "@/components/shared/card/ReviewCard";

/* ============ Placeholder reviews ============ */
const generatePlaceholderReviews = (): Review[] => {
  return [
    {
      name: "Ahmed Al Maktoum",
      area: "Downtown Dubai",
      rating: 5,
      text: "Incredible service! My car battery died at 2 AM and they arrived within 15 minutes. Fixed it on the spot with zero hassle.",
    },
    {
      name: "Sarah Johnson",
      area: "Jumeirah Village Circle",
      rating: 5,
      text: "Professional, punctual, and transparent pricing. The mechanic diagnosed my AC issue quickly and had it fixed in under an hour.",
    },
    {
      name: "Mohammed Al Rashid",
      area: "Business Bay",
      rating: 5,
      text: "They came to my office parking and replaced my starter motor. Very convenient and reasonably priced. Saved me from towing costs.",
    },
    {
      name: "Emma Thompson",
      area: "Dubai Marina",
      rating: 5,
      text: "Fantastic experience! The mobile mechanic arrived on time, diagnosed the problem, and fixed it quickly. No hidden charges.",
    },
    {
      name: "Khalid Al Suwaidi",
      area: "Al Barsha",
      rating: 5,
      text: "Best mobile mechanic in Dubai! They fixed my car's electrical issue on-site. Very knowledgeable and friendly team.",
    },
    {
      name: "Lisa Chen",
      area: "Dubai Silicon Oasis",
      rating: 4,
      text: "Reliable and efficient service. They came to my location within 20 minutes and got my car running again.",
    },
    {
      name: "Omar Al Falasi",
      area: "Arabian Ranches",
      rating: 5,
      text: "Excellent service! The mechanic explained everything clearly and fixed my brake pads on the spot. Highly recommended!",
    },
    {
      name: "Natalie Williams",
      area: "Dubai Hills Estate",
      rating: 5,
      text: "My car wouldn't start and they were there within 10 minutes. Very professional and reasonably priced.",
    },
    {
      name: "Saeed Al Marri",
      area: "Al Quoz",
      rating: 4,
      text: "They diagnosed my transmission issue and fixed it quickly. Transparent pricing and no surprises.",
    },
  ];
};

export default function Reviews({
  reviews = generatePlaceholderReviews(),
  title = "What Our Customers Say",
  subtitle = "Real experiences from real customers across Dubai",
  autoplay = true,
  autoplayInterval = 4000,
}: ReviewsProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: false,
    slidesToScroll: 1,
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      if (width >= 1280) setSlidesPerView(4);
      else if (width >= 1024) setSlidesPerView(3);
      else if (width >= 768) setSlidesPerView(2);
      else setSlidesPerView(1);
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || !autoplay) return;
    const interval = setInterval(() => emblaApi.scrollNext(), autoplayInterval);
    return () => clearInterval(interval);
  }, [emblaApi, autoplay, autoplayInterval]);

  /* ============ Stats ============ */
  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  const ratingCounts = reviews.reduce(
    (acc, review) => {
      acc[review.rating] = (acc[review.rating] || 0) + 1;
      return acc;
    },
    {} as Record<number, number>
  );

  const totalSlides = Math.ceil(reviews.length / slidesPerView);

  return (
    <section className="relative w-full overflow-hidden bg-white py-10">
      {/* ============ Background decorative layer ============ */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,oklch(0_0_0/0.04)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ============ Section Header ============ */}
        <div className="mb-12 lg:mb-16">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5">
              <span className="size-1.5 rounded-full bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                Testimonials
              </span>
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/40 via-neutral-200 to-transparent" />
          </div>

          <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            {/* Left: Title block */}
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
                Trusted by{" "}
                <span className="text-primary">Dubai Drivers</span>
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-500 sm:text-base">
                {subtitle}
              </p>
            </div>

            {/* Right: Rating summary */}
            <div className="flex flex-col items-start gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 sm:flex-row sm:items-center sm:gap-6">
              {/* Big rating number */}
              <div className="flex items-center gap-4">
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black leading-none tracking-tight text-neutral-900">
                      {averageRating.toFixed(1)}
                    </span>
                    <span className="text-sm font-semibold text-neutral-400">
                      /5
                    </span>
                  </div>
                  <div className="mt-1.5 flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <RiStarFill
                        key={i}
                        className={cn(
                          "size-3.5",
                          i < Math.round(averageRating)
                            ? "text-primary"
                            : "text-neutral-300"
                        )}
                      />
                    ))}
                  </div>
                  <p className="mt-1.5 text-[11px] font-medium uppercase tracking-wider text-neutral-400">
                    {totalReviews} Reviews
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden h-16 w-px bg-neutral-200 sm:block" />

              {/* Rating distribution */}
              <div className="space-y-1.5">
                {[5, 4].map((rating) => {
                  const pct =
                    ((ratingCounts[rating] || 0) / totalReviews) * 100;
                  return (
                    <div key={rating} className="flex items-center gap-2.5">
                      <span className="w-3 font-mono text-[11px] font-semibold text-neutral-500">
                        {rating}
                      </span>
                      <RiStarFill className="size-2.5 text-primary/70" />
                      <div className="h-1.5 w-24 overflow-hidden rounded-full bg-neutral-200">
                        <div
                          className="h-full rounded-full bg-primary"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="w-8 font-mono text-[10px] text-neutral-400">
                        {Math.round(pct)}%
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ============ Carousel ============ */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="min-w-0 shrink-0 grow-0 basis-full px-2 md:basis-1/2 md:px-3 xl:basis-1/4"
                >
                  <ReviewCard review={review} index={index} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={scrollPrev}
            aria-label="Previous review"
            className={cn(
              "absolute left-0 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:flex",
              "size-11 items-center justify-center rounded-full",
              "border border-neutral-200 bg-white shadow-lg shadow-black/5",
              "text-neutral-700 transition-colors",
              "hover:border-primary hover:bg-primary hover:text-primary-foreground",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
              !prevBtnEnabled && "cursor-not-allowed opacity-40"
            )}
            disabled={!prevBtnEnabled}
          >
            <RiArrowLeftLine className="size-5" />
          </button>

          <button
            onClick={scrollNext}
            aria-label="Next review"
            className={cn(
              "absolute right-0 top-1/2 z-10 hidden translate-x-1/2 -translate-y-1/2 md:flex",
              "size-11 items-center justify-center rounded-full",
              "border border-neutral-200 bg-white shadow-lg shadow-black/5",
              "text-neutral-700 transition-colors",
              "hover:border-primary hover:bg-primary hover:text-primary-foreground",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
              !nextBtnEnabled && "cursor-not-allowed opacity-40"
            )}
            disabled={!nextBtnEnabled}
          >
            <RiArrowRightLine className="size-5" />
          </button>
        </div>

        {/* ============ Dot Indicators ============ */}
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => {
            const isActive =
              selectedIndex >= index * slidesPerView &&
              selectedIndex < (index + 1) * slidesPerView;
            return (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index * slidesPerView)}
                aria-label={`Go to slide ${index + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  isActive
                    ? "w-8 bg-primary"
                    : "w-1.5 bg-neutral-300 hover:bg-neutral-400"
                )}
              />
            );
          })}
        </div>

        {/* ============ Bottom Trust Strip ============ */}
        <div className="mt-12 lg:mt-16">
          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
            <div className="grid grid-cols-1 divide-y divide-neutral-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              <TrustItem
                icon={<RiShieldCheckFill className="size-4" />}
                title="Verified Reviews"
                subtitle="100% authentic customer feedback"
              />
              <TrustItem
                icon={<RiTimeLine className="size-4" />}
                title="Updated Weekly"
                subtitle="Fresh from real Dubai repairs"
              />
              <TrustItem
                icon={<RiVerifiedBadgeFill className="size-4" />}
                title={`${totalReviews} Real Cases`}
                subtitle="Documented customer experiences"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ Sub-component ============ */
function TrustItem({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-4 p-5 sm:p-6">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-bold tracking-tight text-neutral-900">
          {title}
        </p>
        <p className="mt-0.5 text-xs text-neutral-500">{subtitle}</p>
      </div>
    </div>
  );
}