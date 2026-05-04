import type { Metadata } from "next";
import { Bot, BarChart2, Code2, Users } from "lucide-react";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.role}`,
};

const services = [
  {
    icon: Bot,
    title: "GenAI & AI Agents",
    description:
      "Building custom AI agents and LLM-powered solutions that automate enterprise workflows and deliver measurable efficiency gains using SiemensGPT, Microsoft Copilot, and open-source models.",
  },
  {
    icon: BarChart2,
    title: "Data Analytics",
    description:
      "Creating Tableau and Power BI dashboards connected to live Snowflake data, enabling stakeholders and pricing teams to make data-driven decisions in real time.",
  },
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Engineering full-stack applications with React.js, Node.js, and Python — from machine vision pipelines to internal Power Apps tools and responsive web applications.",
  },
  {
    icon: Users,
    title: "AI Enablement",
    description:
      "Developing training programs, learning modules, and hands-on workshops that accelerate AI adoption and increase team proficiency with enterprise AI platforms.",
  },
];

export default function Home() {
  return (
    <article className="bg-surface rounded-2xl border border-border p-6 sm:p-8">
      {/* About Me */}
      <header className="mb-10">
        <SectionHeader title="About Me" />
        <p className="text-text-secondary leading-relaxed mb-4">
          {siteConfig.summary}
        </p>
        <p className="text-text-secondary leading-relaxed">
          Based in Milton, Ontario, I combine a Computer Science degree (Management
          Option) from Wilfrid Laurier University with hands-on enterprise experience
          at Siemens Canada — bridging technical depth with real business outcomes
          across GenAI, data analytics, and software engineering.
        </p>
      </header>

      {/* What I'm Doing */}
      <section>
        <SectionHeader title="What I'm Doing" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex gap-4 p-5 rounded-xl bg-surface-raised border border-border hover:border-primary/40 transition-colors duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <Icon size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-text-primary text-sm mb-1.5">
                  {title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {description}
                </p>
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
      <h2 className="text-2xl font-bold text-text-primary whitespace-nowrap">
        {title}
      </h2>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}
