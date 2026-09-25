import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
} from "react-icons/fi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-16 sm:py-20"
    >
      {/* bg glow */}
      <div className="pointer-events-none absolute bg-fuchsia-500/30 blur-3xl h-72 w-72 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full" />

      <div className="relative mx-auto px-4 lg:px-8 sm:px-6 max-w-6xl">
        {/* heading */}
        <div className="mb-10 flex flex-col border-b border-white/6 pb-5 gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="text-[11px] font-mono text-emerald-400">04</span>

              <span className="w-8 bg-emerald-400/40 h-px" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Contact
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Let's build something.
            </h2>
          </div>

          <p className="max-w-xs leading-5 text-slate-500 text-xs sm:text-right">
            I'm always open to discussing projects, opportunities, or
            interesting ideas. Feel free to reach out.
          </p>
        </div>

        {/* contact panel */}
        <div className="relative overflow-hidden border border-white/10 rounded-2xl bg-white/2">
          <div className="absolute left-0 top-0 h-px w-full bg-linear-to-r from-transparent via-emerald-400/50 to-transparent" />

          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            <div className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r">
              <span className="text-xs font-medium uppercase text-emerald-400 tracking-[0.16em]">
                Get in touch
              </span>

              <h3 className="mt-3 max-w-lg text-xl sm:text-2xl tracking-tight font-bold text-white">
                Have an idea, opportunity, or project in mind?
              </h3>

              <p className="mt-3 max-w-lg text-sm leading-6 text-slate-400">
                Whether it's a collaboration, internship opportunity, or a
                software project, I'd be happy to hear from you.
              </p>

              <a
                href="mailto:hishmahish13@gmail.com"
                className="group mt-6 inline-flex items-center gap-2 bg-emerald-400 px-4 py-2.5 rounded-lg text-xs font-bold text-slate-950 transition hover:bg-emerald-300"
              >
                <FiMail size={14} />
                Send me an email
                <FiArrowUpRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>

            {/* links */}
            <div className="p-6 sm:p-8">
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Find me online
              </div>

              <div className="space-y-2">
                <a
                  href="https://github.com/hishmaiyoob"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between border border-white/10 bg-white/2 px-4 py-3 rounded-lg transition hover:border-white/20 hover:bg-white/4"
                >
                  <div className="flex items-center gap-3">
                    <FiGithub
                      size={16}
                      className="text-slate-400 transition group-hover:text-white"
                    />

                    <div>
                      <div className="text-xs font-semibold text-slate-200">
                        GitHub
                      </div>

                      <div className="mt-0.5 text-[11px] text-slate-600">
                        @hishmaiyoob
                      </div>
                    </div>
                  </div>

                  <FiArrowUpRight
                    size={14}
                    className="text-slate-600 transition group-hover:-translate-y-0.5 group-hover:text-emerald-400 group-hover:translate-x-0.5"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/fathimahishma13/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between border border-white/10 bg-white/2 px-4 py-3 rounded-lg transition hover:border-white/20 hover:bg-white/4"
                >
                  <div className="flex items-center gap-3">
                    <FiLinkedin
                      size={16}
                      className="text-slate-400 transition group-hover:text-white"
                    />

                    <div>
                      <div className="text-xs font-semibold text-slate-200">
                        LinkedIn
                      </div>

                      <div className="mt-0.5 text-[11px] text-slate-600">
                        Connect with me
                      </div>
                    </div>
                  </div>

                  <FiArrowUpRight
                    size={14}
                    className="text-slate-600 transition group-hover:-translate-y-0.5 group-hover:text-emerald-400 group-hover:translate-x-0.5"
                  />
                </a>

                <a
                  href="tel:+94784280173"
                  className="group flex items-center justify-between border border-white/10 bg-white/2 px-4 py-3 rounded-lg transition hover:border-white/20 hover:bg-white/4"
                >
                  <div className="flex items-center gap-3">
                    <FiPhone
                      size={16}
                      className="text-slate-400 transition group-hover:text-white"
                    />

                    <div>
                      <div className="text-xs font-semibold text-slate-200">
                        Phone
                      </div>

                      <div className="mt-0.5 text-[11px] text-slate-600">
                        +94 78 428 0173
                      </div>
                    </div>
                  </div>

                  <FiArrowUpRight
                    size={14}
                    className="text-slate-600 transition group-hover:-translate-y-0.5 group-hover:text-emerald-400 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Fathima Hishma</span>

          <span>Built with React • Tailwind CSS</span>
        </div>
      </div>
    </section>
  );
}
