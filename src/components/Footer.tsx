import { Github, Linkedin } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-900/80 bg-slate-950/95">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-slate-500 md:flex-row md:px-6 lg:px-0">
        <p>
          © {year} <span className="text-slate-300">Vanshika Dahaliya</span>.
          Built with Next.js, Tailwind CSS, and Framer Motion.
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/vanshikadahaliya"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-800"
          >
            <Github className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/vanshika-dahaliya-a9419a306"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 text-slate-200 transition-colors hover:border-slate-500 hover:bg-slate-800"
          >
            <Linkedin className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

