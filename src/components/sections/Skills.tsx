import {
  Box,
  Code2,
  Database,
  Layout,
  Layers,
  Server,
  Zap,
  GitBranch,
} from "lucide-react";

const skillCards = [
  { name: "HTML", Icon: Code2, accent: "text-amber-400" },
  { name: "CSS", Icon: Layout, accent: "text-sky-400" },
  { name: "JavaScript", Icon: Zap, accent: "text-amber-300" },
  { name: "React", Icon: Box, accent: "text-cyan-400" },
  { name: "Next.js", Icon: Server, accent: "text-white" },
  { name: "Node.js", Icon: Database, accent: "text-emerald-400" },
  { name: "MongoDB", Icon: GitBranch, accent: "text-emerald-400" },
  { name: "Solidity", Icon: Layers, accent: "text-violet-400" },
  { name: "Docker", Icon: Layers, accent: "text-sky-500" },
];

export function SkillsSection() {
  const marqueeCards = [...skillCards, ...skillCards];

  return (
    <section
      id="skills"
      className="scroll-mt-24 pt-16 pb-20 md:pt-20 md:pb-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-0">
        <div className="relative mb-12 flex items-center justify-center">
          <span className="absolute left-0 right-0 h-px bg-slate-800/90" />
          <span className="relative z-10 rounded-full bg-slate-950/80 px-6 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-slate-100 shadow-sm shadow-slate-950/30">
            Skills
          </span>
        </div>

        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-sm text-slate-400 sm:text-base">
            A stack focused on shipping full stack, production-ready web and
            blockchain applications.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/70 p-6 shadow-[0_25px_80px_-45px_rgba(15,23,42,0.9)]">
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-x-6 top-1/2 h-px bg-slate-800/80" />
            <div className="marquee flex items-center gap-5 py-6">
              {marqueeCards.map(({ name, Icon, accent }, index) => (
                <div
                  key={`${name}-${index}`}
                  className="min-w-[11rem] shrink-0 rounded-[1.75rem] border border-slate-800 bg-slate-950/90 px-5 py-6 text-center shadow-sm shadow-slate-950/30 transition duration-300"
                >
                  <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-900/95 ${accent}`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <p className="mt-4 text-sm font-semibold tracking-tight text-slate-100">
                    {name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

