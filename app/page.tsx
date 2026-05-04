import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { MetricsStrip } from "@/components/sections/MetricsStrip";
import { FeaturedExperience } from "@/components/sections/FeaturedExperience";
import { SelectedProjects } from "@/components/sections/SelectedProjects";
import { SkillsPreview } from "@/components/sections/SkillsPreview";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.role}`,
  description: siteConfig.summary,
};

export default function Home() {
  return (
    <>
      <Hero />
      <MetricsStrip />
      <FeaturedExperience />
      <SelectedProjects />
      <SkillsPreview />
    </>
  );
}
