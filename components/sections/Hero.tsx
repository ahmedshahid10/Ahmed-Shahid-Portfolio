"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Component, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, FileText, ArrowRight, ChevronDown } from "lucide-react";
import { siteConfig } from "@/data/site";
import { contactInfo } from "@/data/contact";
import { useReducedMotion } from "@/lib/utils";

class CanvasBoundary extends Component<{ children: ReactNode }, { err: boolean }> {
  state = { err: false };
  static getDerivedStateFromError() { return { err: true }; }
  render() { return this.state.err ? null : this.props.children; }
}

const HeroCanvas = dynamic(() => import("@/components/three/HeroCanvas"), {
  ssr: false,
  loading: () => null,
});

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.11, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Ambient glow blobs */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full bg-blue-800/8 blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-24 lg:py-32">

          {/* ── Left: text content ── */}
          <motion.div
            variants={container}
            initial={reducedMotion ? false : "hidden"}
            animate="show"
            className="flex flex-col"
          >
            <motion.span
              variants={item}
              className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-5 block"
            >
              GenAI Specialist · Siemens Canada
            </motion.span>

            <motion.h1
              variants={item}
              className="text-5xl sm:text-6xl xl:text-7xl font-bold text-text-primary tracking-tight leading-[1.05] mb-4"
            >
              {siteConfig.name}
            </motion.h1>

            <motion.div variants={item} className="flex items-center gap-3 mb-6">
              <span className="text-xl sm:text-2xl font-semibold text-primary">
                {siteConfig.role}
              </span>
              <span
                aria-hidden="true"
                className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent max-w-[100px]"
              />
            </motion.div>

            <motion.p
              variants={item}
              className="text-text-secondary text-base sm:text-lg leading-relaxed mb-9 max-w-lg"
            >
              {siteConfig.tagline}
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-3 mb-8">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary-600 text-white text-sm font-semibold transition-all duration-200 shadow-glow hover:shadow-glow-md hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-border hover:border-primary/50 text-text-secondary hover:text-text-primary text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
              >
                Get in Touch
              </Link>
            </motion.div>

            {/* Social links */}
            <motion.div variants={item} className="flex items-center gap-1">
              <Link
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="p-2.5 rounded-lg text-text-muted hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Github size={20} />
              </Link>
              <Link
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="p-2.5 rounded-lg text-text-muted hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href={contactInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download resume"
                className="p-2.5 rounded-lg text-text-muted hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <FileText size={20} />
              </Link>

              <div aria-hidden="true" className="w-px h-5 bg-border mx-2" />

              <span className="text-xs text-text-muted">
                {siteConfig.university}&ensp;&middot;&ensp;GPA {siteConfig.gpa}
              </span>
            </motion.div>
          </motion.div>

          {/* ── Right: Three.js canvas (desktop only) ── */}
          <div
            aria-hidden="true"
            className="hidden lg:flex items-center justify-center h-[480px] xl:h-[540px]"
          >
            <CanvasBoundary>
              <HeroCanvas />
            </CanvasBoundary>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <motion.div
          animate={reducedMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-text-muted/50"
        >
          <ChevronDown size={20} />
        </motion.div>
      </div>
    </section>
  );
}
