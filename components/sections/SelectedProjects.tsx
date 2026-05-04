"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { cn, useReducedMotion } from "@/lib/utils";
import type { Project } from "@/types";

const categoryStyles: Record<string, string> = {
  Frontend: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  GenAI: "text-violet-400 bg-violet-400/10 border-violet-400/20",
  Data: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
};

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reducedMotion = useReducedMotion();

  return (
    <motion.article
      ref={ref}
      initial={reducedMotion ? false : { opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      className={cn(
        "group flex flex-col p-6 rounded-xl border border-border bg-surface",
        "hover:border-primary/30 hover:shadow-glow hover:-translate-y-1.5",
        "transition-all duration-300"
      )}
    >
      {/* Category badge */}
      <div className="mb-4">
        <span
          className={cn(
            "text-[10px] font-semibold px-2.5 py-0.5 rounded-full border",
            categoryStyles[project.category] ??
              "text-text-muted bg-surface-raised border-border"
          )}
        >
          {project.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-text-primary font-semibold text-lg leading-tight mb-2 group-hover:text-primary transition-colors duration-200">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-text-secondary text-sm leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      {/* Outcomes */}
      {project.outcomes.length > 0 && (
        <ul className="space-y-1.5 mb-5">
          {project.outcomes.map((outcome) => (
            <li
              key={outcome}
              className="flex gap-2 text-xs text-text-muted leading-snug"
            >
              <span className="text-primary/70 flex-shrink-0 mt-0.5 select-none">
                ↑
              </span>
              {outcome}
            </li>
          ))}
        </ul>
      )}

      {/* Tools */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="text-[10px] px-2 py-0.5 rounded-md bg-surface-raised border border-border text-text-muted"
          >
            {tool}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export function SelectedProjects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const reducedMotion = useReducedMotion();
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={headingRef}
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2">
            What I've built
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            Selected Work
          </h2>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* View all */}
        <div className="flex justify-end">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-primary transition-colors group"
          >
            View All Projects
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
