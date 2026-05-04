"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Github, FileText, ChevronDown } from "lucide-react";
import { siteConfig } from "@/data/site";
import { contactInfo } from "@/data/contact";

export function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <aside className="bg-surface rounded-2xl border border-border overflow-hidden lg:sticky lg:top-8">
      {/* Red top accent bar */}
      <div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary" />

      {/* Profile */}
      <div className="p-6 text-center">
        <div className="relative inline-block mb-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/40 flex items-center justify-center text-2xl font-bold text-white ring-4 ring-primary/20 ring-offset-2 ring-offset-surface mx-auto select-none">
            AS
          </div>
          <div className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-green-400 border-2 border-surface" />
        </div>

        <h1 className="text-lg font-bold text-text-primary mb-2">{siteConfig.name}</h1>
        <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-surface-raised border border-border text-primary">
          {siteConfig.role}
        </span>

        <button
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          className="mt-4 flex items-center gap-1.5 mx-auto text-xs text-text-muted hover:text-text-primary transition-colors lg:hidden"
        >
          Show contacts
          <ChevronDown size={13} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
        </button>
      </div>

      {/* Divider */}
      <div className="mx-5 border-t border-border" />

      {/* Contacts + social */}
      <div className={`p-5 space-y-4 ${open ? "block" : "hidden lg:block"}`}>
        <ContactRow
          icon={<Mail size={15} />}
          label="Email"
          value={contactInfo.email}
          href={`mailto:${contactInfo.email}`}
        />
        <ContactRow
          icon={<Phone size={15} />}
          label="Phone"
          value={contactInfo.phone}
        />
        <ContactRow
          icon={<MapPin size={15} />}
          label="Location"
          value={contactInfo.location}
        />

        <div className="border-t border-border" />

        <div className="flex justify-center gap-3">
          <SocialBtn href={contactInfo.linkedin} label="LinkedIn">
            <Linkedin size={17} />
          </SocialBtn>
          <SocialBtn href={contactInfo.github} label="GitHub">
            <Github size={17} />
          </SocialBtn>
        </div>

        <Link
          href={contactInfo.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-secondary hover:bg-secondary/90 text-white text-sm font-semibold transition-colors"
        >
          <FileText size={15} />
          Download CV
        </Link>
      </div>
    </aside>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-xl bg-surface-raised border border-border flex items-center justify-center flex-shrink-0 text-primary">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-[10px] text-text-muted uppercase tracking-widest leading-none mb-0.5">
          {label}
        </p>
        <p className="text-sm text-text-primary truncate">{value}</p>
      </div>
    </div>
  );

  if (href)
    return (
      <a href={href} className="block hover:opacity-80 transition-opacity">
        {inner}
      </a>
    );
  return <div>{inner}</div>;
}

function SocialBtn({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-xl bg-surface-raised border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/40 transition-colors"
    >
      {children}
    </Link>
  );
}
