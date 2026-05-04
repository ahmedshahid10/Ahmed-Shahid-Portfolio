import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "developer-portfolio",
    title: "Developer Portfolio",
    category: "Frontend",
    description:
      "An interactive developer portfolio with a custom WebGL hero and 3D animations built with React.js and Three.js for high engagement and fast load performance.",
    context:
      "Personal project to demonstrate frontend engineering, animation, and performance optimization.",
    tools: ["React.js", "Three.js", "WebGL", "Next.js", "TypeScript", "Tailwind CSS"],
    outcomes: [
      "35% increase in user engagement time via WebGL hero section",
      "30% reduction in load time through code optimization and efficient graphics rendering",
    ],
    impact:
      "Demonstrates advanced frontend capabilities through measurable performance improvements and polished interactive design.",
    featured: true,
  },
  {
    id: "pdf-to-ppt",
    title: "PDF to PPT Converter",
    category: "GenAI",
    description:
      "An NLP-powered pipeline that converts research PDFs into structured, presentation-ready PowerPoint content using text summarization and Huffman compression.",
    context:
      "Academic and productivity tool built to automate the research-to-presentation workflow.",
    tools: ["Python", "NLTK", "ReportLab", "Huffman Algorithm"],
    outcomes: [
      "40% improvement in system reliability via comprehensive testing framework",
      "30% reduction in text volume through Huffman-based compression",
    ],
    impact:
      "Showcased applied NLP, document automation, and rigorous software testing practices.",
    featured: true,
  },
  {
    id: "reit-energy-optimization",
    title: "REIT Energy Optimization",
    category: "GenAI",
    description:
      "AI-assisted feasibility analysis assessing Battery Energy Storage System (BESS) integration for REIT clients using GenAI research synthesis and financial modelling.",
    context:
      "Enterprise consulting project conducted at Siemens Canada using SiemensGPT and Microsoft Copilot.",
    tools: [
      "SiemensGPT",
      "Microsoft Copilot",
      "Excel",
      "Financial Modelling",
    ],
    outcomes: [
      "40% reduction in analysis turnaround time vs. traditional manual methods",
      "Synthesized 15+ research sources into scenario-based financial projections adopted as internal recommendations",
    ],
    impact:
      "Applied GenAI tools to compress expert research cycles and deliver scenario-based financial models for client decision-making.",
    featured: true,
  },
];
