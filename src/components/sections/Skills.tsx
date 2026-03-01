import { Boxes, Code2, Database, GitBranch, Wrench } from "lucide-react";

const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  backend: ["Node.js", "Express.js"],
  database: ["MongoDB", "MySQL"],
  blockchain: ["Solidity", "Hardhat"],
  tools: ["Git", "GitHub", "VS Code", "Docker"],
};

export function SkillsSection() {
  const chipBase =
    "inline-flex items-center rounded-full bg-slate-900/70 px-3 py-1 text-[11px] text-slate-200 border border-slate-800";

  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-slate-900/80 pt-10 md:pt-14"
    >
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-slate-50 md:text-xl">
              Skills
            </h2>
            <p className="mt-1 text-sm text-slate-400 md:text-[15px]">
              A stack focused on shipping full stack, production-ready web and
              blockchain applications.
            </p>
          </div>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.22em] text-slate-500 md:mt-0">
            End-to-End Product Mindset
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
              <Code2 className="h-4 w-4 text-sky-400" />
              Frontend
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {skills.frontend.map((skill) => (
                <span key={skill} className={chipBase}>
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-200">
              <GitBranch className="h-4 w-4 text-emerald-400" />
              Backend
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {skills.backend.map((skill) => (
                <span key={skill} className={chipBase}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
              <Database className="h-4 w-4 text-indigo-400" />
              Database
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {skills.database.map((skill) => (
                <span key={skill} className={chipBase}>
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-200">
              <Boxes className="h-4 w-4 text-fuchsia-400" />
              Blockchain
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {skills.blockchain.map((skill) => (
                <span key={skill} className={chipBase}>
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-200">
              <Wrench className="h-4 w-4 text-sky-400" />
              Tools
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {skills.tools.map((skill) => (
                <span key={skill} className={chipBase}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

