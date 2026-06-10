"use client";

import { motion, Variants } from "framer-motion";
import { Github } from "lucide-react";

type Project = {
  name: string;
  description: string;
  tech: string;
  features: string[];
  github: string;
  label: string;
};

const projects: Project[] = [
  {
    name: "Grade Shastra",
    label: "Educational resource hub",
    description:
      "A centralized hub for university students to access study materials and previous year question papers.",
    tech: "MERN Stack",
    features: [
      "Secure authentication",
      "Study material repository",
      "Student uploads with moderation"
    ],
    github: "https://github.com/Vanshikadahaliya/grade_shastra",
  },
  {
    name: "Blockchain Scholarship Tracking System",
    label: "Transparent NGO scholarships",
    description:
      "Blockchain-based system for tracking scholarship distribution with transparency.",
    tech: "Solidity, Hardhat, Next.js",
    features: [
      "Smart contract management",
      "Transparent donor tracking",
      "Blockchain ledger"
    ],
    github: "https://github.com/Vanshikadahaliya/ScholarChain",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1] as const
    }
  }
};

export default function ProjectsSection() {  return (
    <section id="projects" className="py-20">
      <div className="mb-10 px-4 sm:px-6 lg:px-0">
        <h2 className="text-3xl font-semibold text-slate-100">Projects</h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="grid md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-0"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-xl border border-slate-800 bg-slate-950 shadow-md"
          >
            <h3 className="text-xl font-semibold text-slate-100">{project.name}</h3>
            <p className="text-slate-400 text-sm">{project.label}</p>
            <p className="mt-2 text-slate-300">{project.description}</p>

            <ul className="mt-3 list-disc ml-5 text-sm text-slate-400">
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <div className="flex gap-4 mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-slate-100 transition-colors hover:bg-slate-800"
                aria-label={`${project.name} GitHub repository`}
              >
                <Github size={18} />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}