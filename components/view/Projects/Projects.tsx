
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  RiArrowRightLine,
  RiFlashlightFill,
  RiTimeLine,
  RiCarLine,
  RiMapPinFill,
} from "@remixicon/react";
import { Project } from "@/types/project";
import { projectData } from "@/data/projectData";
import ProjectCard from "@/components/shared/card/ProjectCard";
import { SiteConfig } from "@/config/siteconfig";
import ProjectModal from "@/components/shared/ProjectModal/ProjectModal";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { city, responseTime } = SiteConfig;

  const openProject = (project: Project) => {
    const index = projectData.findIndex((p) => p.title === project.title);
    setCurrentIndex(index >= 0 ? index : 0);
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  const navigateProject = (direction: "next" | "prev") => {
    if (direction === "next" && currentIndex < projectData.length - 1) {
      const next = projectData[currentIndex + 1];
      setCurrentIndex(currentIndex + 1);
      setSelectedProject(next);
    }
    if (direction === "prev" && currentIndex > 0) {
      const prev = projectData[currentIndex - 1];
      setCurrentIndex(currentIndex - 1);
      setSelectedProject(prev);
    }
  };

  /* ---- Data slicing for bento layout ---- */
  const featuredProject = projectData[0];
  const gridProjects = projectData.slice(1, 9); // 8 items → 4×2 grid on desktop

  return (
    <section className="relative w-full overflow-hidden bg-neutral-950 py-8">
      {/* ========== Background decorative layers ========== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,oklch(1_0_0/0.04)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========== Section Header ========== */}
        <div className="mb-12 lg:mb-16">
          {/* Eyebrow row */}
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5">
              <span className="size-1.5 rounded-full bg-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                Recent Work
              </span>
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/40 via-white/10 to-transparent" />
          </div>

          {/* Headline + Stats */}
          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
                Real Cases from{" "}
                <span className="text-primary">Dubai Roads</span>
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
                Click any case to see the full diagnostic, repair steps, and
                outcome — documented work from our mobile units across {city}.
              </p>
            </div>

            {/* Trust chips */}
            <div className="flex flex-wrap items-center gap-3">
              <StatChip
                icon={<RiFlashlightFill className="size-3.5" />}
                label="Real Repairs"
              />
              <StatChip
                icon={<RiTimeLine className="size-3.5" />}
                label={`${responseTime} Response`}
              />
              <StatChip
                icon={<RiMapPinFill className="size-3.5" />}
                label={`${projectData.length} Cases`}
              />
            </div>
          </div>
        </div>

        {/* ========== Bento Grid ========== */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {/* Featured / Hero Project */}
          <div className="lg:col-span-6">
            <ProjectCard
              project={featuredProject}
              index={0}
              variant="featured"
              onClick={() => openProject(featuredProject)}
              className="h-full"
            />
          </div>

          {/* Right side grid — 2×2 mini grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-6">
            {gridProjects.slice(0, 4).map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx + 1}
                onClick={() => openProject(project)}
              />
            ))}
          </div>

          {/* Second row — 4 smaller cards across full width */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-12 lg:grid-cols-4">
            {gridProjects.slice(4, 8).map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx + 5}
                variant="compact"
                onClick={() => openProject(project)}
              />
            ))}
          </div>
        </div>

        {/* ========== Bottom CTA Banner ========== */}
        <div className="mt-14 lg:mt-16">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-primary/10 via-neutral-900 to-neutral-950 p-6 sm:p-8 lg:p-10">
            {/* Corner accents */}
            <div className="absolute left-0 top-0 size-16 border-l-2 border-t-2 border-primary/40" />
            <div className="absolute bottom-0 right-0 size-16 border-b-2 border-r-2 border-primary/40" />

            {/* Faded background icon */}
            <RiCarLine className="pointer-events-none absolute -right-8 -top-8 size-48 text-primary/[0.04]" />

            <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1">
                  <span className="size-1.5 rounded-full bg-primary" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                    Portfolio
                  </span>
                </span>

                <h3 className="mt-4 text-xl font-bold leading-tight tracking-tight text-white sm:text-2xl">
                  See every repair we&apos;ve completed
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60 sm:text-base">
                  {projectData.length}+ documented mobile car repair cases from
                  real drivers across Dubai — with diagnostics, parts, and
                  results.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/projects"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90"
                >
                  View All Projects
                  <RiArrowRightLine className="size-4" />
                </Link>
                <Link
                  href={SiteConfig.numberCallLink}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border-2 border-white/15 bg-transparent px-7 text-sm font-semibold text-white transition-colors hover:border-primary hover:text-primary"
                >
                  Book a Repair
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== Modal ========== */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          currentIndex={currentIndex}
          totalProjects={projectData.length}
          onClose={closeProject}
          onNavigate={navigateProject}
        />
      )}
    </section>
  );
}

/* ========== StatChip sub-component ========== */
function StatChip({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 backdrop-blur-sm">
      <span className="flex size-5 items-center justify-center rounded-full bg-primary/15 text-primary">
        {icon}
      </span>
      <span className="text-xs font-semibold text-white sm:text-sm">{label}</span>
    </div>
  );
}