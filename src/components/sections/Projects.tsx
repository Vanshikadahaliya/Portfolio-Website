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
      "A centralized hub for university students to access study materials, previous year question papers, and curated resources.",
    tech: "MERN Stack (MongoDB, Express, React, Node.js)",
    features: [
      "Secure authentication and role-based access",
      "Organized study materials and PYQs",
      "Student upload system with moderation",
    ],
    github: "https://github.com/vanshikadahaliya/grade-shastra",
  },
  {
    name: "Blockchain Scholarship Tracking System",
    label: "Transparent NGO scholarships",
    description:
      "A blockchain-powered platform for NGOs to manage and track scholarship distribution with complete donor transparency.",
    tech: "Solidity, Hardhat, Next.js, Ethers.js",
    features: [
      "Smart contracts for scholarship lifecycle",
      "On-chain donor and beneficiary transparency",
      "Audit-friendly blockchain ledger for payouts",
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
            <p className="text-sm text-gray-500 mb-2">{project.label}</p>

            <p className="text-gray-700 mb-3">{project.description}</p>

            <p className="text-sm font-medium mb-2">
              Tech: {project.tech}
            </p>

            <ul className="list-disc ml-5 text-sm mb-4">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                className="flex items-center gap-2 text-blue-600"
              >
                <Github size={18} /> Code
              </a>

              <a
                href={project.github}
                target="_blank"
                className="flex items-center gap-2 text-blue-600"
              >
                <ExternalLink size={18} /> Demo
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}