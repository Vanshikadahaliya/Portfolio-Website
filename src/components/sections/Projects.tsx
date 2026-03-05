<<<<<<< HEAD
const containerVariants = {
=======
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
>>>>>>> e37c082 (fix framer motion types)
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5,
      ease: [0.42, 0, 0.58, 1]
    }
  }
};
