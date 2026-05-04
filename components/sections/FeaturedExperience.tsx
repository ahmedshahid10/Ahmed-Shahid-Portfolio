"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, MapPin, Calendar } from "lucide-react";
import { experiences } from "@/data/experience";
import { cn, useReducedMotion } from "@/lib/utils";
import type { Experience } from "@/types";

const siemensRoles = experiences.filter((e) => e.company === "Siemens Canada");

function ExperienceCard({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={reducedMotion ? false : { opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      className={cn(
        "group relative flex flex-col p-6 rounded-xl border border-border bg-surface-raised",
        "hover:border-primary/30 hover:shadow-glow hover:-translate-y-1",
        "transition-all duration-300"
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
            <span className="text-primary font-bold text-sm select-none">
              {experience.company.charAt(0)}
            </span>
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-semibold tracking-wide text-primary uppercase mb-0.5">
              {experience.company}
            </p>
            <h3 className="text-text-primary font-semibold text-base leading-tight">
              {experience.role}
            </h3>
          </div>
        </div>
        {experience.current && (
          <span className="flex-shrink-0 text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/25">
            Current
          </span>
        )}
      </div>

      {/* Meta row */}
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-text-muted mb-5">
        <span className="flex items-center gap-1.5">
          <Calendar size={11} />
          {experience.startDate} – {experience.endDate}
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin size={11} />
          {experience.location}
        </span>
      </div>

      {/* Top 2 bullets */}
      <ul className="space-y-2.5 flex-1 mb-5">
        {experience.bullets.slice(0, 2).map((bullet, i) => (
          <li
            key={i}
            className="flex gap-2.5 text-sm text-text-secondary leading-snug"
          >
            <span className="text-primary/60 mt-0.5 flex-shrink-0 select-none">
              ›
            </span>
            {bullet}
          </li>
        ))}
      </ul>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5">
        {experience.technologies.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="text-[10px] px-2 py-0.5 rounded-md bg-surface border border-border text-text-muted"
          >
            {tech}
          </span>
        ))}
        {experience.technologies.length > 5 && (
          <span className="text-[10px] px-2 py-0.5 rounded-md bg-surface border border-border text-text-muted">
            +{experience.technologies.length - 5}
          </span>
        )}
      </div>
    </motion.div>
  );
}

export function FeaturedExperience() {
  const reducedMotion = useReducedMotion();
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true });

  return (
    <section className="py-20 lg:py-28">
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
            Where I've worked
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            Enterprise Experience
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {siemensRoles.map((exp, i) => (
            <ExperienceCard
              key={`${exp.company}-${exp.role}`}
              experience={exp}
              index={i}
            />
          ))}
        </div>

        {/* View all */}
        <div className="flex justify-end">
          <Link
            href="/experience"
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-primary transition-colors group"
          >
            View Full Timeline
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
