import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects | Ahmed Shahid",
  description:
    "A focused selection of projects spanning GenAI applications, frontend engineering, and data automation.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            Portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary tracking-tight mb-4">
            Selected Work
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
            A focused selection of projects spanning GenAI applications, frontend
            engineering, and data automation.
          </p>
        </div>

        <ProjectsGrid />
      </div>
    </div>
  );
}
