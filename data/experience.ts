import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "Siemens Canada",
    role: "GenAI Specialist",
    location: "Oakville, ON",
    startDate: "Sep 2025",
    endDate: "Present",
    current: true,
    technologies: [
      "SiemensGPT",
      "Microsoft Copilot",
      "LLMs",
      "Python",
      "Power Automate",
      "Azure",
    ],
    bullets: [
      "Built and deployed custom AI agents using SiemensGPT and Microsoft Copilot to automate repetitive cross-departmental workflows, reducing manual processing time by over 30% and enabling teams to redirect effort toward higher-value tasks.",
      "Fine-tuned and evaluated domain-specific LLMs for enterprise use cases, improving contextual accuracy and response coherence by 40% through systematic prompt optimization and targeted dataset refinement.",
      "Drove company-wide AI enablement and adoption by developing and delivering training sessions, learning modules, and hands-on workshops, increasing employee proficiency with SiemensGPT and Copilot tools across multiple departments.",
    ],
  },
  {
    company: "Siemens Canada",
    role: "Data Specialist",
    location: "Oakville, ON",
    startDate: "May 2024",
    endDate: "Aug 2025",
    current: false,
    technologies: ["Tableau", "Snowflake", "Power Apps", "C#", "SAP", "Jira"],
    bullets: [
      "Optimized data reporting for the pricing team by building and maintaining 8+ Tableau dashboards fed by daily Snowflake data, reducing manual reporting effort by 20% and enabling data-driven decision-making across teams.",
      "Increased testing efficiency by 25% by authoring and executing C# test scripts for the COMPAS GO application, ensuring accurate deployments across production and live environments via Jira ticket management.",
      "Built internal Power Apps applications to digitize and streamline manual data entry and approval workflows, reducing form processing time by an estimated 20%, improving data accuracy across departments, and enabling non-technical stakeholders to interact with business data.",
    ],
  },
  {
    company: "Wilfrid Laurier University",
    role: "Lab Instructional Assistant, CS Department",
    location: "Waterloo, ON",
    startDate: "Sep 2023",
    endDate: "Apr 2024",
    current: false,
    technologies: ["Java", "OOP", "JUnit"],
    bullets: [
      "Demonstrated leadership by teaching Introductory Java and Object-Oriented Programming, fostering a collaborative and engaging environment for an average attendance of 60 students per session.",
      "Collaborated with course instructors to design and administer assessments, including quizzes and exams, to evaluate student progress and comprehension.",
      "Successfully proctored online midterms, ensuring academic integrity for approximately 200 students over a 2-hour period per exam.",
    ],
  },
  {
    company: "VTrade Connections Inc.",
    role: "Software Development Engineer",
    location: "Toronto, ON",
    startDate: "May 2023",
    endDate: "Aug 2023",
    current: false,
    technologies: ["Python", "OpenCV", "React.js", "JavaScript", "CSS"],
    bullets: [
      "Led the implementation of machine vision algorithms utilizing Python and OpenCV to analyze textile patterns, achieving a 15% reduction in defects through real-time defect identification.",
      "Engineered a responsive website for VTrade Connections Inc. using JavaScript, CSS, and React.js, resulting in a 25% increase in user session duration, enhancing overall user satisfaction.",
      "Collaborated with cross-functional teams to gather requirements, design, and deploy the Enterprise Resource Planning (ERP) system.",
    ],
  },
];
