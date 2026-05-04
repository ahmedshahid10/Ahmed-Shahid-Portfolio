"use client";

import type { ElementType } from "react";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, Github, Download, ExternalLink } from "lucide-react";
import { contactInfo } from "@/data/contact";
import { cn, useReducedMotion } from "@/lib/utils";

interface ContactCard {
  icon: ElementType;
  label: string;
  value: string;
  href: string;
  cta: string;
  external: boolean;
}

const cards: ContactCard[] = [
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
    value: "ahmed-shahid",
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
    cta: "Download resume",
    external: true,
  },
];

function ContactCard({
  card,
  index,
}: {
  card: ContactCard;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const reducedMotion = useReducedMotion();
  const Icon = card.icon;

  return (
    <motion.div
      ref={ref}
      initial={reducedMotion ? false : { opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
    >
      <Link
        href={card.href}
        target={card.external ? "_blank" : undefined}
        rel={card.external ? "noopener noreferrer" : undefined}
        className={cn(
          "group flex flex-col p-6 rounded-xl border border-border bg-surface-raised",
          "hover:border-primary/30 hover:shadow-glow hover:-translate-y-1",
          "transition-all duration-300 block h-full"
        )}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Icon size={18} className="text-primary" />
          </div>
          {card.external && (
            <ExternalLink
              size={14}
              className="text-text-muted group-hover:text-primary transition-colors mt-1"
            />
          )}
        </div>

        <p className="text-[11px] font-semibold tracking-wide uppercase text-text-muted mb-1">
          {card.label}
        </p>
        <p className="text-text-primary font-medium text-sm mb-3 break-all">
          {card.value}
        </p>
        <p className="text-xs text-primary mt-auto group-hover:underline">
          {card.cta} →
        </p>
      </Link>
    </motion.div>
  );
}

export function ContactSection() {
  const reducedMotion = useReducedMotion();
  const noteRef = useRef<HTMLDivElement>(null);
  const noteInView = useInView(noteRef, { once: true, margin: "-40px" });

  return (
    <div className="space-y-10">
      {/* Contact cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cards.map((card, i) => (
          <ContactCard key={card.label} card={card} index={i} />
        ))}
      </div>

      {/* Recruiter note */}
      <motion.div
        ref={noteRef}
        initial={reducedMotion ? false : { opacity: 0, y: 16 }}
        animate={noteInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="p-6 rounded-xl border border-border bg-surface border-l-2 border-l-primary/60"
      >
        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-primary mb-3">
          For Recruiters &amp; Hiring Managers
        </p>
        <p className="text-text-secondary text-sm leading-relaxed">
          Ahmed is actively exploring opportunities in GenAI, AI automation, software
          engineering, and enterprise technology. He&apos;s based in Ontario, Canada and
          open to hybrid and remote roles. Whether you&apos;re looking for a GenAI
          specialist who can ship production-ready agents or a software engineer with
          a strong data and automation background — reach out directly via email or
          LinkedIn.
        </p>
      </motion.div>
    </div>
  );
}
