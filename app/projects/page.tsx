import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";

export const metadata: Metadata = {
  title: `Portfolio | ${siteConfig.name}`,
};

export default function ProjectsPage() {
  return (
    <article className="bg-surface rounded-2xl border border-border p-6 sm:p-8">
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-xl font-bold text-text-primary whitespace-nowrap">
          Portfolio
        </h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      <ProjectsGrid projects={projects} />
    </article>
  );
}
