"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/data/skills";
import { useReducedMotion } from "@/lib/utils";

export function SkillsPreview() {
  const reducedMotion = useReducedMotion();
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true });
  const bodyRef = useRef<HTMLDivElement>(null);
  const bodyInView = useInView(bodyRef, { once: true, margin: "-60px" });

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
            Tools &amp; languages
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight">
            Technical Toolkit
          </h2>
        </motion.div>

        {/* Skill groups */}
        <div ref={bodyRef} className="space-y-7">
          {skills.map((group, groupIndex) => (
            <div key={group.category}>
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-text-muted mb-3">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={reducedMotion ? false : { opacity: 0, scale: 0.88 }}
                    animate={bodyInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: groupIndex * 0.06 + skillIndex * 0.025,
                      ease: "easeOut",
                    }}
                    className="text-xs px-3 py-1.5 rounded-md bg-surface border border-border text-text-secondary cursor-default hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-colors duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
