 "use client";

import { motion } from "framer-motion";
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

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.09, duration: 0.5, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-slate-900/80 pt-10 md:pt-14"
    >
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-slate-50 md:text-xl">
              Projects
            </h2>
            <p className="mt-1 text-sm text-slate-400 md:text-[15px]">
              A selection of work across education, transparency, and developer
              tooling with a focus on real-world impact.
            </p>
          </div>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.22em] text-slate-500 md:mt-0">
            MERN • Blockchain • Flask
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid gap-5 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.article
              key={project.name}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              className="group flex h-full flex-col justify-between rounded-2xl border border-slate-800/90 bg-slate-900/70 p-4 shadow-[0_18px_60px_rgba(15,23,42,0.85)]"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-50">
                      {project.name}
                    </h3>
                    <p className="text-xs font-medium text-indigo-300/90">
                      {project.label}
                    </p>
                  </div>
                  <span className="rounded-full bg-slate-800 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                    Featured
                  </span>
                </div>

                <p className="text-xs text-slate-400">{project.description}</p>

                <p className="text-[11px] font-medium text-slate-300">
                  Tech:{" "}
                  <span className="font-normal text-slate-400">
                    {project.tech}
                  </span>
                </p>

                <ul className="mt-2 space-y-1.5 text-[11px] text-slate-400">
                  {project.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 flex items-center justify-between gap-2">
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1.5 text-[11px] font-medium text-slate-100 transition-colors hover:border-slate-500 hover:bg-slate-800"
                  >
                    <Github className="h-3.5 w-3.5" aria-hidden="true" />
                    GitHub
                  </a>
                </div>

                <span className="text-[10px] text-slate-500">
                  Code &amp; docs available
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

