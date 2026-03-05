"use client";

import { motion, Variants } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

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
    github: "https://github.com/vanshikadahaliya/grade-shastra",
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
    github:
      "https://github.com/vanshikadahaliya/blockchain-scholarship-tracking",
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
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="grid md:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-xl border bg-white shadow-md"
          >
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="text-gray-500 text-sm">{project.label}</p>
            <p className="mt-2 text-gray-700">{project.description}</p>

            <ul className="mt-3 list-disc ml-5 text-sm">
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <div className="flex gap-4 mt-4">
              <a href={project.github} target="_blank">
                <Github size={18} />
              </a>
              <a href={project.github} target="_blank">
                <ExternalLink size={18} />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}