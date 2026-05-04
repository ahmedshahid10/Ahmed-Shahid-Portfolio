"use client";

import { useState } from "react";
import type { Project } from "@/types";

const CATEGORIES = ["All", "GenAI", "Frontend"] as const;

const categoryColors: Record<string, string> = {
  Frontend: "text-secondary bg-secondary/10 border-secondary/25",
  GenAI: "text-primary bg-primary/10 border-primary/25",
};

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1.5 rounded-xl text-sm font-semibold transition-colors duration-200 ${
              active === cat
                ? "bg-primary text-white shadow-lg shadow-primary/20"
                : "bg-surface-raised border border-border text-text-muted hover:text-text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtered.map((project) => (
          <div
            key={project.id}
            className="flex flex-col p-5 rounded-xl bg-surface-raised border border-border hover:border-primary/30 transition-colors duration-200"
          >
            <span
              className={`inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full border w-fit mb-3 ${
                categoryColors[project.category] ??
                "text-text-muted bg-surface border-border"
              }`}
            >
              {project.category}
            </span>

            <h3 className="text-text-primary font-bold text-base mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">
              {project.description}
            </p>

            {project.outcomes.length > 0 && (
              <ul className="space-y-1.5 mb-4">
                {project.outcomes.map((o) => (
                  <li key={o} className="flex gap-2 text-xs text-text-muted">
                    <span className="text-primary flex-shrink-0 select-none">↑</span>
                    {o}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-[10px] px-2 py-0.5 rounded-md bg-surface border border-border text-text-muted"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center py-16 text-text-muted text-sm">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}
