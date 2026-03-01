"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const TYPING_WORDS = [
  "Full Stack Developer",
  "Blockchain Enthusiast",
  "Open Source Contributor",
];

function TypingText({
  words,
  typingSpeed = 90,
  pauseBetweenWords = 1500,
}: {
  words: string[];
  typingSpeed?: number;
  pauseBetweenWords?: number;
}) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index % words.length];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = currentWord.slice(0, displayed.length + 1);
        setDisplayed(next);
        if (next === currentWord) {
          setIsDeleting(true);
        }
      } else {
        const next = currentWord.slice(0, displayed.length - 1);
        setDisplayed(next);
        if (!next) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? typingSpeed / 1.5 : typingSpeed);

    if (!isDeleting && displayed === currentWord) {
      clearTimeout(timeout);
      const pauseTimeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseBetweenWords);
      return () => clearTimeout(pauseTimeout);
    }

    return () => clearTimeout(timeout);
  }, [displayed, index, isDeleting, words, typingSpeed, pauseBetweenWords]);

  return (
    <span className="inline-flex items-center">
      <span className="text-indigo-300">{displayed}</span>
      <span className="ml-0.5 h-5 w-[2px] animate-pulse bg-indigo-400" />
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-24 -z-10 h-72 bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.35),transparent_60%)]" />

      <div className="mx-auto flex max-w-5xl flex-col gap-10 md:flex-row md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 space-y-6"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-200 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Available for internships & open source
          </p>

          <div className="space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Hi, I&apos;m{" "}
              <span className="bg-linear-to-r from-indigo-400 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
                Vanshika Dahaliya
              </span>
            </h1>
            <p className="text-sm font-medium text-slate-300 sm:text-base">
              Full Stack Developer&nbsp;|&nbsp;Blockchain Enthusiast&nbsp;|&nbsp;
              Open Source Contributor
            </p>
            <p className="max-w-xl text-sm text-slate-400 sm:text-base">
              Building scalable web and blockchain solutions with real-world
              impact. I love shipping production-ready MERN and blockchain
              projects, contributing to security communities, and solving
              challenging DSA problems.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Focus areas
            </p>
            <p className="text-sm text-slate-300 sm:text-base">
              <TypingText words={TYPING_WORDS} />
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-5 py-2 text-sm font-medium text-slate-950 shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400"
              >
                View Projects
              </Link>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/vanshikadahaliya"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-4 py-2 text-xs font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/vanshika-dahaliya-a9419a306"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-4 py-2 text-xs font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="flex-1"
        >
          <div className="relative mx-auto max-w-xs rounded-3xl border border-slate-800/80 bg-slate-900/60 p-5 shadow-[0_0_60px_rgba(15,23,42,0.9)] backdrop-blur md:max-w-sm">
            <div className="flex flex-col items-center gap-5">
              <div className="relative h-52 w-40 overflow-hidden rounded-[1.6rem] border border-slate-700/80 bg-slate-900 md:h-64 md:w-48">
                <Image
                  src="/profile.png"
                  alt="Portrait of Vanshika Dahaliya"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 192px, 160px"
                  priority
                />
              </div>
              <div className="space-y-1 text-center text-sm text-slate-300">
                <p className="font-medium text-slate-100">
                  B.Tech CSE • 3rd Year
                </p>
                <p className="text-xs text-slate-400">
                  Actively solving DSA, contributing to open source, and
                  building production-grade MERN and blockchain projects.
                </p>
                <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Open to internships & collaborations
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

