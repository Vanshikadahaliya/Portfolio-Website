import {
  Facebook,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  SquareStack,
  X,
} from "lucide-react";

export function ContactSection() {
  const email = "vanshikadahaliya@gmail.com";
  const phone = "7827915992";
  const location = "Greater Noida, Uttar Pradesh, India";

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 border-t border-slate-900/80 pt-16 pb-20 md:pt-20 md:pb-24"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:px-0 xl:grid-cols-[1.45fr_1fr]">
        <div className="rounded-[2rem] border border-slate-800 bg-slate-950/80 p-8 shadow-[0_30px_90px_-50px_rgba(15,23,42,0.95)] sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-400">
            Contact with me
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
            Let&apos;s start something great.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            If you have any questions or concerns, please don&apos;t hesitate to contact me. I am open to any work opportunities that align with my skills and interests.
          </p>

        <form className="mt-10 space-y-6">
          <label className="block text-sm font-medium text-slate-200">
            Your Name:
            <input
              type="text"
              placeholder="Enter your name"
              className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
            />
          </label>
          <label className="block text-sm font-medium text-slate-200">
            Your Email:
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
            />
          </label>
          <label className="block text-sm font-medium text-slate-200">
            Your Message:
            <textarea
              rows={5}
              placeholder="Write your message"
              className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
            />
          </label>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:brightness-110"
          >
            Send Message
            <Mail className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>
      </div>

      <div className="relative rounded-[2rem] border border-slate-800 bg-slate-950/80 p-8 shadow-[0_30px_90px_-50px_rgba(15,23,42,0.95)] sm:p-10">
        <div className="absolute right-0 top-1/2 hidden h-40 w-16 -translate-y-1/2 rounded-l-full bg-slate-950/90 sm:block">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="rotate-90 text-xs uppercase tracking-[0.35em] text-slate-100">
              Contact
            </span>
          </div>
        </div>
        <div className="space-y-8">
          <div className="space-y-5">
            <div className="flex items-center gap-3 text-slate-100">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900/90 text-slate-200">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                  Email
                </p>
                <p className="mt-1 text-base text-slate-100">{email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-100">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900/90 text-slate-200">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                  Phone
                </p>
                <p className="mt-1 text-base text-slate-100">{phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-100">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900/90 text-slate-200">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                  Location
                </p>
                <p className="mt-1 text-base text-slate-100">{location}</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Follow me
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/vanshikadahaliya"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-900/90 text-slate-200 transition hover:bg-slate-800"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/vanshika-dahaliya-a9419a306"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-900/90 text-slate-200 transition hover:bg-slate-800"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-900/90 text-slate-200 transition hover:bg-slate-800"
              >
                <X className="h-5 w-5" />
              </a>
              <a
                href="https://stackoverflow.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-900/90 text-slate-200 transition hover:bg-slate-800"
              >
                <SquareStack className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-900/90 text-slate-200 transition hover:bg-slate-800"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

