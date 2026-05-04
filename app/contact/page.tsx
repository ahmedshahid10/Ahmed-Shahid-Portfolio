import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact | Ahmed Shahid",
  description:
    "Open to GenAI, software engineering, and AI automation roles. Get in touch with Ahmed Shahid.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            Get in touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary tracking-tight mb-4">
            Let&apos;s Connect
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl leading-relaxed">
            Open to GenAI, software engineering, and AI automation roles. Reach
            out directly.
          </p>
        </div>

        <ContactSection />
      </div>
    </div>
  );
}
