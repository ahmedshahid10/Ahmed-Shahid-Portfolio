import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { skills } from "@/data/skills";
import { Brain, Code2, BarChart3, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Ahmed Shahid",
  description: siteConfig.summary,
};

const strengths = [
  {
    icon: Brain,
    title: "AI Workflow Automation",
    description:
      "Designing and shipping AI agent solutions in enterprise environments — from prompt engineering to multi-turn chatbot deployment at scale.",
  },
  {
    icon: Code2,
    title: "Software Engineering",
    description:
      "Full-stack development with a focus on clean architecture, type safety, and performance across web, systems, and data tooling.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description:
      "Translating raw data into actionable dashboards, process improvements, and decision-ready reporting across departments.",
  },
  {
    icon: Users,
    title: "Cross-functional Delivery",
    description:
      "Bridging technical teams and business stakeholders to align AI solutions with operational priorities and ship real outcomes.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Page header ── */}
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            Background
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary tracking-tight">
            About Ahmed
          </h1>
        </div>

        {/* ── Professional summary ── */}
        <section className="mb-16">
          <div className="prose prose-invert max-w-none space-y-5">
            <p className="text-text-secondary text-lg leading-relaxed">
              Ahmed is a Computer Science graduate from Wilfrid Laurier University and a
              GenAI Specialist at Siemens Canada — building AI agents, chatbots, and
              automation pipelines that move faster than traditional software delivery.
              His work sits at the boundary where software engineering meets applied AI:
              shipping production-quality solutions with measurable business outcomes.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              Before moving fully into GenAI, Ahmed spent a year as a Data Specialist
              — designing Tableau dashboards, writing test automation in C, and building
              internal Power Apps tools that digitized cross-functional workflows. That
              grounding in data, systems, and process makes his AI work sharper: he
              builds solutions that fit real infrastructure, not just demos.
            </p>
          </div>
        </section>

        {/* ── Core strengths ── */}
        <section className="mb-16">
          <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-6">
            Core Strengths
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {strengths.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group p-5 rounded-xl border border-border bg-surface-raised hover:border-primary/25 hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                    <Icon size={17} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-text-primary font-semibold text-sm mb-1.5">
                      {title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Technical toolkit ── */}
        <section className="mb-16">
          <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-6">
            Technical Toolkit
          </h2>
          <div className="space-y-6">
            {skills.map((group) => (
              <div key={group.category}>
                <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-text-muted mb-3">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 rounded-md bg-surface border border-border text-text-secondary hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Current focus ── */}
        <section className="mb-16">
          <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Current Focus
          </h2>
          <div className="p-6 rounded-xl border border-border bg-surface-raised border-l-2 border-l-primary">
            <p className="text-text-secondary text-base leading-relaxed">
              Currently focused on advancing enterprise GenAI adoption, exploring agentic
              AI systems, and building solutions that sit at the edge of automation and
              human decision-making. Interested in roles that blend deep technical
              delivery with strategic business impact.
            </p>
          </div>
        </section>

        {/* ── Quick facts ── */}
        <section>
          <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-6">
            Quick Facts
          </h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "University", value: siteConfig.university },
              { label: "Degree", value: siteConfig.degree },
              { label: "GPA", value: siteConfig.gpa },
              { label: "Graduated", value: siteConfig.gradYear },
              { label: "Location", value: "Ontario, Canada" },
              { label: "Open to", value: "Hybrid & Remote" },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="flex items-start gap-3 p-4 rounded-lg bg-surface border border-border"
              >
                <dt className="text-xs font-semibold text-text-muted min-w-[80px] pt-0.5">
                  {label}
                </dt>
                <dd className="text-sm text-text-secondary">{value}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </div>
  );
}
