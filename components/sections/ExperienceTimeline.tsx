"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Calendar, GraduationCap } from "lucide-react";
import { experiences } from "@/data/experience";
import { siteConfig } from "@/data/site";
import { cn, useReducedMotion } from "@/lib/utils";
import type { Experience } from "@/types";

function ExperienceCard({
  experience,
  isLeft,
  index,
}: {
  experience: Experience;
  isLeft: boolean;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={
        reducedMotion
          ? false
          : { opacity: 0, x: isLeft ? -28 : 28 }
      }
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: 0.05,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      }}
      className={cn(
        "p-6 rounded-xl border border-border bg-surface-raised",
        "hover:border-primary/25 hover:shadow-glow transition-all duration-300"
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
            <span className="text-primary font-bold text-sm select-none">
              {experience.company.charAt(0)}
            </span>
          </div>
          <div>
            <p className="text-[11px] font-semibold tracking-wide uppercase text-primary mb-0.5">
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

      {/* Meta */}
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

      {/* All bullets */}
      <ul className="space-y-2.5 mb-5">
        {experience.bullets.map((bullet, i) => (
          <li
            key={i}
            className="flex gap-2.5 text-sm text-text-secondary leading-snug"
          >
            <span className="text-primary/60 flex-shrink-0 mt-0.5 select-none">
              ›
            </span>
            {bullet}
          </li>
        ))}
      </ul>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5">
        {experience.technologies.map((tech) => (
          <span
            key={tech}
            className="text-[10px] px-2 py-0.5 rounded-md bg-surface border border-border text-text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function TimelineDot({ isActive }: { isActive: boolean }) {
  return (
    <div
      className={cn(
        "w-3 h-3 rounded-full border-2 border-background flex-shrink-0 z-10",
        isActive ? "bg-primary shadow-glow" : "bg-border"
      )}
    />
  );
}

export function ExperienceTimeline() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="space-y-20">
      {/* ── Work Timeline ── */}
      <section>
        <h2 className="text-sm font-semibold tracking-[0.15em] uppercase text-text-muted mb-10">
          Work Experience
        </h2>

        <div className="relative">
          {/* Vertical line — left on mobile, centered on desktop */}
          <div
            aria-hidden="true"
            className="absolute left-[9px] top-3 bottom-3 w-px bg-border
                       md:left-1/2 md:-translate-x-px"
          />

          <div className="space-y-10">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={`${exp.company}-${exp.role}`} className="relative">
                  {/* Mobile dot */}
                  <div className="absolute left-[3px] top-7 md:hidden">
                    <TimelineDot isActive={exp.current ?? false} />
                  </div>

                  {/* Desktop: centered dot */}
                  <div className="hidden md:flex absolute left-1/2 top-7 -translate-x-1/2">
                    <TimelineDot isActive={exp.current ?? false} />
                  </div>

                  {/* Card — mobile: full width with left padding; desktop: half-width alternating */}
                  <div
                    className={cn(
                      // Mobile: always left-aligned, clear the dot
                      "pl-8 md:pl-0",
                      // Desktop: half width
                      "md:w-5/12",
                      // Desktop positioning
                      isLeft
                        ? "md:ml-0 md:pr-5"     // left side: natural flow + right gap
                        : "md:ml-auto md:pl-5"  // right side: push right + left gap
                    )}
                  >
                    <ExperienceCard
                      experience={exp}
                      isLeft={isLeft}
                      index={index}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Education ── */}
      <section>
        <h2 className="text-sm font-semibold tracking-[0.15em] uppercase text-text-muted mb-8">
          Education
        </h2>

        <EducationCard reducedMotion={reducedMotion} />
      </section>
    </div>
  );
}

function EducationCard({ reducedMotion }: { reducedMotion: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={reducedMotion ? false : { opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "p-6 rounded-xl border border-border bg-surface-raised",
        "hover:border-primary/25 transition-colors duration-300"
      )}
    >
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
          <GraduationCap size={20} className="text-primary" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-1.5">
            <div>
              <p className="text-[11px] font-semibold tracking-wide uppercase text-primary mb-0.5">
                {siteConfig.university}
              </p>
              <h3 className="text-text-primary font-semibold text-base leading-tight">
                {siteConfig.degree}
              </h3>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-text-muted mb-4">
            <span className="flex items-center gap-1.5">
              <Calendar size={11} />
              Sep 2022 – Apr 2025
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={11} />
              Waterloo, ON
            </span>
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="text-xs px-3 py-1 rounded-md bg-surface border border-border text-text-secondary">
              GPA: {siteConfig.gpa}
            </span>
            <span className="text-xs px-3 py-1 rounded-md bg-surface border border-border text-text-secondary">
              Graduated {siteConfig.gradYear}
            </span>
            <span className="text-xs px-3 py-1 rounded-md bg-surface border border-border text-text-secondary">
              Management Option
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
