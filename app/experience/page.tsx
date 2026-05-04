import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";

export const metadata: Metadata = {
  title: "Experience | Ahmed Shahid",
  description:
    "Professional timeline — GenAI Specialist and Data Specialist at Siemens Canada, with experience across software engineering and academia.",
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            Career
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary tracking-tight mb-4">
            Professional Timeline
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
            From data pipelines to AI agent deployment — a record of impact across enterprise and startup environments.
          </p>
        </div>

        <ExperienceTimeline />
      </div>
    </div>
  );
}
