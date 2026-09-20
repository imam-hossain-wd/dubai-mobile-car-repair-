

import { useState } from "react";
import Image from "next/image";
import {
  RiMapPinLine,
  RiToolsLine,
  RiCloseLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "@remixicon/react";
import { Project } from "@/types/project";
import { cn } from "@/lib/utils";

export default function ProjectModal({
  project,
  currentIndex,
  totalProjects,
  onClose,
  onNavigate,
}: {
  project: Project;
  currentIndex: number;
  totalProjects: number;
  onClose: () => void;
  onNavigate: (direction: "next" | "prev") => void;
}) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in zoom-in-95 duration-300"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <div className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-zinc-700/50 bg-zinc-900 shadow-2xl">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-3 top-3 z-20 rounded-full bg-black/50 p-2 text-zinc-400 transition-colors hover:bg-black/70 hover:text-white"
            aria-label="Close modal"
          >
            <RiCloseLine className="h-5 w-5" />
          </button>

          {/* Navigation */}
          <button
            onClick={() => onNavigate("prev")}
            disabled={currentIndex === 0}
            className={cn(
              "absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70",
              currentIndex === 0 ? "opacity-30 cursor-not-allowed" : ""
            )}
            aria-label="Previous project"
          >
            <RiArrowLeftSLine className="h-5 w-5" />
          </button>

          <button
            onClick={() => onNavigate("next")}
            disabled={currentIndex === totalProjects - 1}
            className={cn(
              "absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70",
              currentIndex === totalProjects - 1 ? "opacity-30 cursor-not-allowed" : ""
            )}
            aria-label="Next project"
          >
            <RiArrowRightSLine className="h-5 w-5" />
          </button>

          {/* Image */}
          <div className="relative aspect-video  w-full bg-zinc-800">
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary/30 border-t-primary" />
              </div>
            )}
            <Image
              src={project.image}
              alt={project.title}
              fill
              className={cn(
                "object-cover transition-opacity duration-500",
                imageLoaded ? "opacity-100" : "opacity-0"
              )}
              onLoad={() => setImageLoaded(true)}
            //   sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-zinc-900/80 via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="px-5 py-2">
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-md font-bold text-white md:text-lg">
                  {project.title}
                </h2>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-zinc-400">
                  <span className="inline-flex items-center gap-1.5">
                    <RiMapPinLine className="h-4 w-4 text-primary" />
                    {project.area}
                  </span>
                  <span className="h-4 w-px bg-zinc-700" />
                  <span className="inline-flex items-center gap-1.5">
                    <RiToolsLine className="h-4 w-4 text-primary" />
                    {project.service}
                  </span>
                </div>
              </div>

                     <div className="rounded-lg border border-zinc-800 bg-zinc-800/30 p-2">
                <p className="text-xs text-zinc-500">Status</p>
                <p className="mt-0.5 inline-flex items-center gap-1.5 text-xs font-medium text-green-400">
                  Completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}