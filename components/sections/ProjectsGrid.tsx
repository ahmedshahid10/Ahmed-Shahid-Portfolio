"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { projects } from "@/data/projects";
import { cn, useReducedMotion } from "@/lib/utils";
import type { Project } from "@/types";

const CATEGORIES = [
  "All",
  "GenAI",
  "Frontend",
  "Data",
  "Software Engineering",
] as const;
type Category = (typeof CATEGORIES)[number];

const categoryStyles: Record<string, string> = {
  Frontend: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  GenAI: "text-violet-400 bg-violet-400/10 border-violet-400/20",
  Data: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  "Software Engineering": "text-amber-400 bg-amber-400/10 border-amber-400/20",
};

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const reducedMotion = useReducedMotion();

  return (
    <article className="flex flex-col p-6 rounded-xl border border-border bg-surface h-full hover:border-primary/20 transition-colors duration-200">
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
      <h2 className="text-xl font-bold text-text-primary mb-3 leading-tight">
        {project.title}
      </h2>

      {/* Description */}
      <p className="text-text-secondary text-sm leading-relaxed mb-5">
        {project.description}
      </p>

      {/* Outcomes */}
      <ul className="space-y-2 mb-5">
        {project.outcomes.map((outcome) => (
          <li
            key={outcome}
            className="flex items-start gap-2.5 text-sm text-text-secondary"
          >
            <Check
              size={13}
              className="text-primary mt-0.5 flex-shrink-0"
              strokeWidth={2.5}
            />
            {outcome}
          </li>
        ))}
      </ul>

      {/* Tools */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="text-[10px] px-2 py-0.5 rounded-md bg-surface-raised border border-border text-text-muted"
          >
            {tool}
          </span>
        ))}
      </div>

      {/* Expandable: context + impact */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="expanded"
            initial={reducedMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reducedMotion ? {} : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-border pt-5 space-y-4">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-text-muted mb-2">
                  Context
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {project.context}
                </p>
              </div>
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/15">
                <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-primary mb-2">
                  Impact
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {project.impact}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle */}
      <button
        onClick={() => setExpanded((e) => !e)}
        aria-expanded={expanded}
        className="mt-auto pt-4 flex items-center gap-1.5 text-xs font-medium text-text-muted hover:text-primary transition-colors self-start"
      >
        {expanded ? "Show Less" : "Read More"}
        <ChevronDown
          size={13}
          className={cn(
            "transition-transform duration-200",
            expanded && "rotate-180"
          )}
        />
      </button>
    </article>
  );
}

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const reducedMotion = useReducedMotion();

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Filter bar */}
      <div
        role="tablist"
        aria-label="Filter projects by category"
        className="flex flex-wrap gap-2 mb-10"
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={activeCategory === cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
              activeCategory === cat
                ? "bg-primary text-white shadow-glow"
                : "bg-surface border border-border text-text-secondary hover:border-primary/40 hover:text-text-primary"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid with layout animations */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={reducedMotion ? false : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reducedMotion ? {} : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center py-20 text-text-muted text-sm">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}
