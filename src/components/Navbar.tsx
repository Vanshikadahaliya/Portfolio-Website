 "use client";

import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { useCallback } from "react";

const NAV_ITEMS = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

export function Navbar() {
  const handleScroll = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <header className="sticky top-0 z-20 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 md:px-6 md:py-5 lg:px-0">
        <Link
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleScroll("hero");
          }}
          className="text-base font-semibold tracking-tight text-slate-100 md:text-lg"
        >
          Vanshika Dahaliya
          <span className="ml-1 rounded-full bg-indigo-500/20 px-2 py-0.5 text-[10px] font-medium text-indigo-300">
            Portfolio
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-5 text-sm font-medium text-slate-300 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleScroll(item.id)}
                  className="rounded-full px-3.5 py-1.5 text-sm tracking-wide text-slate-300 transition-colors hover:bg-slate-800 hover:text-slate-50"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/vanshikadahaliya"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-800"
            >
              <Github className="h-4.5 w-4.5" aria-hidden="true" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/vanshika-dahaliya-a9419a306"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-800"
            >
              <Linkedin className="h-4.5 w-4.5" aria-hidden="true" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

