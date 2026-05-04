import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Linkedin, Github, Download, ExternalLink } from "lucide-react";
import { contactInfo } from "@/data/contact";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `Contact | ${siteConfig.name}`,
};

const cards = [
  {
    icon: Mail,
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    cta: "Send an email",
    external: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/ahmedshahid10",
    href: contactInfo.linkedin,
    cta: "View profile",
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "ahmedshahid10",
    href: contactInfo.github,
    cta: "View profile",
    external: true,
  },
  {
    icon: Download,
    label: "Resume",
    value: "Ahmed_Shahid_Resume.pdf",
    href: contactInfo.resumeUrl,
    cta: "Download PDF",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <article className="bg-surface rounded-2xl border border-border p-6 sm:p-8">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-xl font-bold text-text-primary whitespace-nowrap">
          Contact
        </h2>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.label}
              href={card.href}
              target={card.external ? "_blank" : undefined}
              rel={card.external ? "noopener noreferrer" : undefined}
              className="group flex flex-col p-5 rounded-xl bg-surface-raised border border-border hover:border-primary/40 hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon size={18} className="text-primary" />
                </div>
                {card.external && (
                  <ExternalLink
                    size={13}
                    className="text-text-muted group-hover:text-primary transition-colors mt-0.5"
                  />
                )}
              </div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-text-muted mb-1">
                {card.label}
              </p>
              <p className="text-sm text-text-primary font-medium mb-3 break-all">
                {card.value}
              </p>
              <p className="text-xs text-primary mt-auto group-hover:underline">
                {card.cta} →
              </p>
            </Link>
          );
        })}
      </div>

      {/* Recruiter note */}
      <div className="p-5 rounded-xl bg-surface-raised border border-border border-l-[3px] border-l-primary">
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
          For Recruiters &amp; Hiring Managers
        </p>
        <p className="text-sm text-text-secondary leading-relaxed">
          Ahmed is actively exploring opportunities in GenAI, AI automation, software
          engineering, and enterprise technology. Based in Ontario, Canada — open to
          hybrid and remote roles. Whether you&apos;re looking for a GenAI specialist
          who ships production-ready agents or a software engineer with strong data and
          automation background — reach out via email or LinkedIn.
        </p>
      </div>
    </article>
  );
}
