import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { siteConfig } from "@/data/site";
import { contactInfo } from "@/data/contact";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-text-primary font-medium text-sm">
              {siteConfig.name}
            </p>
            <p className="text-text-muted text-xs mt-0.5">{siteConfig.role}</p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-text-muted hover:text-text-primary transition-colors"
            >
              <Github size={18} />
            </Link>
            <Link
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-text-muted hover:text-text-primary transition-colors"
            >
              <Linkedin size={18} />
            </Link>
          </div>

          <p className="text-text-muted text-xs text-center sm:text-right">
            &copy; {year} {siteConfig.name} &mdash; Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
