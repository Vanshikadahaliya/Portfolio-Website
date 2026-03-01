import { Mail } from "lucide-react";

export function ContactSection() {
  const email = "vanshikadahaliya@gmail.com";

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-slate-900/80 pt-10 md:pt-14"
    >
      <div className="mx-auto max-w-5xl space-y-5">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-slate-50 md:text-xl">
              Contact
            </h2>
            <p className="mt-1 text-sm text-slate-400 md:text-[15px]">
              Open to internships, open source collaborations, and exciting
              problem statements in web and blockchain.
            </p>
          </div>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.22em] text-slate-500 md:mt-0">
            Let&apos;s build something impactful
          </p>
        </div>

        <div className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1.5 text-sm text-slate-300">
            <p className="font-medium text-slate-100">
              Have a role, idea, or project in mind?
            </p>
            <p className="text-xs text-slate-400 md:text-[13px]">
              Reach out with a brief description of what you&apos;re building,
              and I&apos;ll get back to you as soon as I can.
            </p>
          </div>

          <div className="flex flex-col items-start gap-2 md:items-end">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-5 py-2 text-sm font-medium text-slate-950 transition hover:bg-indigo-400"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email Me
            </a>
            <p className="text-[11px] text-slate-500">
              Or send directly:{" "}
              <span className="font-mono text-slate-300">{email}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

