export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  context: string;
  impact: string;
  tools: string[];
  outcomes: string[];
  featured: boolean;
}

export interface Experience {
  id?: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
  technologies: string[];
  current: boolean;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  gpa: string;
  university: string;
  degree: string;
  gradYear: string;
}
