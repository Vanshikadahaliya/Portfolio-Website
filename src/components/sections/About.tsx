import { GraduationCap, ShieldHalf, TerminalSquare } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-slate-900/80 pt-10 md:pt-14"
    >
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-slate-50 md:text-xl">
              About
            </h2>
            <p className="mt-1 text-sm text-slate-400 md:text-[15px]">
              3rd year B.Tech Computer Science student crafting full stack and
              blockchain products with a strong problem-solving mindset.
            </p>
          </div>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.22em] text-slate-500 md:mt-0">
            Full Stack • Blockchain • Open Source
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-[2fr,3fr]">
          <div className="space-y-3 text-sm text-slate-300">
            <p>
              I&apos;m Vanshika Dahaliya, a 3rd year B.Tech CSE student with a
              focus on building reliable web and blockchain applications. I
              enjoy taking ideas from zero to production and iterating quickly
              based on real-world usage.
            </p>
            <p>
              My current roadmap includes deepening my understanding of security
              through OWASP-BLT contributions and scaling my MERN and Solidity
              projects.
            </p>
          </div>

          <div className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                <GraduationCap className="h-4 w-4 text-indigo-400" />
                B.Tech CSE • 3rd Year
              </div>
              <ul className="mt-3 space-y-1.5 text-xs text-slate-400">
                <li>• Strong CS fundamentals and DSA</li>
                <li>• Regular problem-solving practice</li>
                <li>• Comfortable with system design basics</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                <ShieldHalf className="h-4 w-4 text-emerald-400" />
                Open Source & Security
              </div>
              <ul className="mt-3 space-y-1.5 text-xs text-slate-400">
                <li>• Contributor at OWASP-BLT</li>
                <li>• Documentation and security-focused improvements</li>
                <li>• Keen interest in secure web & blockchain systems</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 sm:col-span-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                <TerminalSquare className="h-4 w-4 text-sky-400" />
                What I&apos;m currently focused on
              </div>
              <ul className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-300">
                <li className="rounded-full bg-slate-800/70 px-3 py-1">
                  DSA & Problem Solving
                </li>
                <li className="rounded-full bg-slate-800/70 px-3 py-1">
                  Production MERN Apps
                </li>
                <li className="rounded-full bg-slate-800/70 px-3 py-1">
                  Smart Contract Development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

