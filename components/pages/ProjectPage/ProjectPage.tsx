// app/projects/page.tsx
"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  RiPhoneFill,
  RiWhatsappFill,
  RiArrowRightLine,
  RiFlashlightFill,
  RiTimeFill,
  RiMapPinFill,
  RiCarFill,
  RiShieldCheckFill,
  RiStarFill,
  RiSearchLine,
  RiFilterLine,
  RiLayoutGridFill,
} from "@remixicon/react";
import { SiteConfig } from "@/config/siteconfig";
import { projectData } from "@/data/projectData";
import { Project } from "@/types/project";
import ProjectCard from "@/components/shared/card/ProjectCard";
import ProjectModal from "@/components/shared/ProjectModal/ProjectModal";
import { cn } from "@/lib/utils";

/* ============ Category mapping (derived from data) ============ */
const CATEGORIES = [
  { id: "all", label: "All Cases", icon: RiLayoutGridFill },
  { id: "brake", label: "Brake & Safety", icon: RiShieldCheckFill },
  { id: "electrical", label: "Electrical & Battery", icon: RiFlashlightFill },
  { id: "climate", label: "Climate Control", icon: RiCarFill },
  { id: "engine", label: "Engine & Diagnostics", icon: RiCarFill },
  { id: "maintenance", label: "Maintenance", icon: RiCarFill },
] as const;

/* ============ Match category by project.category string ============ */
function matchCategory(categoryId: string, projectCategory: string): boolean {
  if (categoryId === "all") return true;
  const cat = projectCategory.toLowerCase();
  switch (categoryId) {
    case "brake":
      return cat.includes("brake") || cat.includes("safety");
    case "electrical":
      return cat.includes("electrical") || cat.includes("battery");
    case "climate":
      return cat.includes("climate") || cat.includes("ac");
    case "engine":
      return cat.includes("engine") || cat.includes("diagnostic");
    case "maintenance":
      return cat.includes("maintenance") || cat.includes("preventative");
    default:
      return true;
  }
}

export default function ProjectsPage() {
  const {
    brandName,
    displayNumber,
    numberCallLink,
    whatsappCallLink,
    city,
    country,
    responseTime,
    serviceAreas,
  } = SiteConfig;

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  /* ============ Filter projects ============ */
  const filteredProjects = useMemo(() => {
    return projectData.filter((project) => {
      const matchesCategory = matchCategory(activeCategory, project.category);
      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        q === "" ||
        project.title.toLowerCase().includes(q) ||
        project.area.toLowerCase().includes(q) ||
        project.service.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  /* ============ Modal handlers ============ */
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

  return (
    <main className="bg-white">
      {/* ============================================================
          SECTION 1: COMPACT HERO — BLACK EDITORIAL
      ============================================================ */}
      <section className="relative overflow-hidden bg-foreground pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,oklch(1_0_0/0.05)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full rounded-full bg-primary/60" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                Recent Work · {city}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl font-bold leading-[1.05] tracking-tight text-background md:text-4xl lg:text-5xl">
              Mobile Automotive Field  
              <span className="text-primary"> Repairs & Case Logs</span>
            </h1>

            {/* Subtitle */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-background/60 sm:text-lg">
             Documented real-world emergency callouts, doorstep maintenance projects, and complex mobile diagnostics completed by our team across Dubai.
            </p>

            {/* Trust chips */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <HeroChip
                icon={<RiFlashlightFill className="size-3.5" />}
                label={`${projectData.length} Cases`}
              />
              <HeroChip
                icon={<RiTimeFill className="size-3.5" />}
                label={`${responseTime} Response`}
              />
              <HeroChip
                icon={<RiMapPinFill className="size-3.5" />}
                label={`${serviceAreas.length}+ Areas`}
              />
            </div>

            {/* Dual CTA */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={numberCallLink}
                className="group inline-flex h-13 items-center justify-center gap-2.5 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-colors hover:bg-primary/90"
              >
                <RiPhoneFill className="size-4" />
                Call {displayNumber}
                <RiArrowRightLine className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href={whatsappCallLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-13 items-center justify-center gap-2.5 rounded-xl border-2 border-background/15 bg-background/[0.03] px-6 text-sm font-semibold text-background backdrop-blur-sm transition-colors hover:border-primary/40 hover:text-primary"
              >
                <RiWhatsappFill className="size-4" />
                WhatsApp Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2: PROJECTS GRID — WHITE EDITORIAL
      ============================================================ */}
      <section className="relative overflow-hidden bg-white py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,oklch(0_0_0/0.04)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-10 lg:mb-12">
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5">
                <span className="size-1.5 rounded-full bg-primary" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary">
                  Case Portfolio
                </span>
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-primary/40 via-neutral-200 to-transparent" />
            </div>

            <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
                  Browse{" "}
                  <span className="text-primary">Documented Repairs</span>
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-500 sm:text-base">
                  Click any case to see the full diagnostic process, parts
                  replaced, and verified results.
                </p>
              </div>

              {/* Search */}
              <div className="relative w-full sm:max-w-xs">
                <RiSearchLine className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search cases..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12 w-full rounded-xl border border-neutral-200 bg-white pl-11 pr-4 text-sm text-neutral-900 placeholder:text-neutral-400 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
          </div>

          {/* Category filter */}
          <div className="mb-8 -mx-4 overflow-x-auto px-4 scrollbar-hide">
            <div className="flex min-w-max items-center gap-2">
              {CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-semibold transition-colors",
                      isActive
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-neutral-200 bg-white text-neutral-700 hover:border-primary/40 hover:text-primary"
                    )}
                  >
                    <Icon className="size-3.5" />
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results counter */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              {filteredProjects.length}{" "}
              {filteredProjects.length === 1 ? "Case" : "Cases"}
            </p>
            <p className="hidden text-xs text-neutral-400 sm:block">
              Click any case to view details
            </p>
          </div>

          {/* Projects grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onClick={() => openProject(project)}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 py-16 text-center">
              <RiSearchLine className="mx-auto size-10 text-neutral-300" />
              <p className="mt-4 text-sm font-semibold text-neutral-900">
                No cases found
              </p>
              <p className="mt-1 text-xs text-neutral-500">
                Try a different search term or category.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="mt-5 inline-flex h-10 items-center gap-2 rounded-xl border border-primary/30 bg-primary/5 px-5 text-xs font-semibold text-primary transition-colors hover:bg-primary/10"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ============================================================
          SECTION 3: STATS STRIP — BLACK EDITORIAL
      ============================================================ */}
      <section className="relative overflow-hidden bg-foreground py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle,oklch(1_0_0/0.05)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            <StatCard
              icon={<RiFlashlightFill className="size-5" />}
              value={`${projectData.length}+`}
              label="Documented Repairs"
            />
            <StatCard
              icon={<RiTimeFill className="size-5" />}
              value={responseTime}
              label="Average Response"
            />
            <StatCard
              icon={<RiStarFill className="size-5" />}
              value="5.0"
              label="Customer Rating"
            />
            <StatCard
              icon={<RiMapPinFill className="size-5" />}
              value={`${serviceAreas.length}+`}
              label="Dubai Districts"
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: FINAL CTA — PRIMARY PANEL
      ============================================================ */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-24">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-primary bg-primary p-8 sm:p-10 lg:p-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,oklch(0_0_0/0.08)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30" />

            <div className="pointer-events-none absolute left-0 top-0 size-20">
              <div className="absolute left-0 top-0 h-px w-12 bg-primary-foreground/50" />
              <div className="absolute left-0 top-0 h-12 w-px bg-primary-foreground/50" />
            </div>
            <div className="pointer-events-none absolute bottom-0 right-0 size-20">
              <div className="absolute bottom-0 right-0 h-px w-12 bg-primary-foreground/50" />
              <div className="absolute bottom-0 right-0 h-12 w-px bg-primary-foreground/50" />
            </div>

            <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-1">
                  <span className="size-1.5 rounded-full bg-primary-foreground" />
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                    Your Turn
                  </span>
                </span>

                <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-4xl">
                  Ready to add your car to our portfolio?
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/70 sm:text-base">
                  Call or WhatsApp with your car issue and location. Our
                  certified mechanic will be dispatched to you in {responseTime}
                  — anywhere in {city}.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={numberCallLink}
                    className="group inline-flex h-14 items-center justify-center gap-3 rounded-xl bg-primary-foreground px-7 font-semibold text-primary shadow-lg shadow-black/10 transition-colors hover:bg-primary-foreground/95"
                  >
                    <RiPhoneFill className="size-4" />
                    <span className="text-base">{displayNumber}</span>
                    <RiArrowRightLine className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    href={whatsappCallLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-14 items-center justify-center gap-2.5 rounded-xl border-2 border-primary-foreground/30 bg-primary-foreground/5 px-7 font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:border-primary-foreground/60 hover:bg-primary-foreground/10"
                  >
                    <RiWhatsappFill className="size-4" />
                    WhatsApp Us
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="grid grid-cols-2 gap-3">
                  <TrustTile
                    icon={<RiFlashlightFill className="size-4" />}
                    value={responseTime}
                    label="Response"
                  />
                  <TrustTile
                    icon={<RiShieldCheckFill className="size-4" />}
                    value="100%"
                    label="Guaranteed"
                  />
                  <TrustTile
                    icon={<RiStarFill className="size-4" />}
                    value="5.0"
                    label="Rating"
                  />
                  <TrustTile
                    icon={<RiTimeFill className="size-4" />}
                    value="24/7"
                    label="Support"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          MODAL
      ============================================================ */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          currentIndex={currentIndex}
          totalProjects={projectData.length}
          onClose={closeProject}
          onNavigate={navigateProject}
        />
      )}
    </main>
  );
}

/* ============================================================
   Sub-components
   ============================================================ */

function HeroChip({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-background/10 bg-background/[0.03] px-3.5 py-2 backdrop-blur-sm">
      <span className="flex size-5 items-center justify-center rounded-full bg-primary/15 text-primary">
        {icon}
      </span>
      <span className="text-xs font-semibold text-background sm:text-sm">
        {label}
      </span>
    </div>
  );
}

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-background/10 bg-background/[0.03] p-5 backdrop-blur-sm">
      {/* Corner hairlines */}
      <div className="pointer-events-none absolute right-0 top-0 size-12">
        <div className="absolute right-0 top-0 h-px w-6 bg-primary/40" />
        <div className="absolute right-0 top-0 h-6 w-px bg-primary/40" />
      </div>

      <div className="flex size-10 items-center justify-center rounded-xl bg-primary/15">
        <span className="text-primary">{icon}</span>
      </div>
      <p className="mt-4 text-3xl font-black leading-none tracking-tight text-background">
        {value}
      </p>
      <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-wider text-background/50">
        {label}
      </p>
    </div>
  );
}

function TrustTile({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/[0.06] p-4 backdrop-blur-sm">
      <div className="flex size-9 items-center justify-center rounded-lg bg-primary-foreground/15">
        <span className="text-primary-foreground">{icon}</span>
      </div>
      <p className="mt-3 text-base font-bold leading-none text-primary-foreground">
        {value}
      </p>
      <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground/60">
        {label}
      </p>
    </div>
  );
}