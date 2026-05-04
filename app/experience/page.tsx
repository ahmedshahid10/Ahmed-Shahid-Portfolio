import type { Metadata } from "next";
import { GraduationCap, MapPin } from "lucide-react";
import { experiences } from "@/data/experience";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `Resume | ${siteConfig.name}`,
};

export default function ExperiencePage() {
  return (
    <article className="bg-surface rounded-2xl border border-border p-6 sm:p-8 space-y-10">
      {/* Education */}
      <section>
        <SectionHeader title="Education" />
        <div className="relative pl-7 border-l-2 border-border">
          <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-primary border-2 border-surface" />
          <div className="bg-surface-raised rounded-xl border border-border p-5">
            <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
              Sep 2022 – Apr 2025
            </span>
            <h3 className="text-text-primary font-bold text-base mb-1">
              {siteConfig.degree}
            </h3>
            <p className="text-text-muted text-sm flex items-center gap-1.5 mb-4">
              <GraduationCap size={13} />
              {siteConfig.university} &mdash; GPA {siteConfig.gpa}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["Computer Science", "Management Option", `GPA ${siteConfig.gpa}`, "Graduated 2025"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2.5 py-0.5 rounded-lg bg-surface border border-border text-text-muted"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section>
        <SectionHeader title="Experience" />
        <div className="relative pl-7 border-l-2 border-border space-y-6">
          {experiences.map((exp) => (
            <div key={`${exp.company}-${exp.role}`} className="relative">
              <div
                className={`absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 border-surface ${
                  exp.current ? "bg-primary" : "bg-border"
                }`}
              />
              <div className="bg-surface-raised rounded-xl border border-border p-5 hover:border-primary/30 transition-colors">
                <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
                  {exp.startDate} – {exp.endDate}
                </span>
                <div className="flex items-start justify-between gap-3 mb-1">
                  <h3 className="text-text-primary font-bold text-base">
                    {exp.role}
                  </h3>
                  {exp.current && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/25 flex-shrink-0">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-text-muted text-sm flex items-center gap-3 mb-4">
                  <span className="font-medium text-text-secondary">
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={11} />
                    {exp.location}
                  </span>
                </p>
                <ul className="space-y-2 mb-4">
                  {exp.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex gap-2.5 text-sm text-text-secondary leading-snug"
                    >
                      <span className="text-primary flex-shrink-0 mt-0.5 select-none">
                        ›
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-surface border border-border text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <h2 className="text-xl font-bold text-text-primary whitespace-nowrap">
        {title}
      </h2>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}
