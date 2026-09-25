import {
  FiArrowDown,
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 pt-28 pb-16 sm:pt-32 sm:pb-20"
    >
      {/* bg glow */}
      <div
        className="pointer-events-none h-125 -top-65 absolute left-1/3 bg-emerald-900/70 blur-[120px] w-125 rounded-full -translate-x-1/2"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none h-50 top-80 absolute -right-50 bg-fuchsia-900/90 blur-[110px] w-87.5 rounded-full"
        aria-hidden="true"
      />

      {/* subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(225,225,225,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* main hero */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* left */}
          <div className="max-w-2xl">
            {/* availability badge */}
            <div className="mb-5 inline-flex items-center border border-emerald-400/15 rounded-full gap-2 bg-emerald-400/6 px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full bg-emerald-400 rounded-full animate-ping opacity-60" />
                <span className="relative inline-flex h-2 w-2 bg-emerald-400 rounded-full" />
              </span>

              <span className="text-[11px] font-semibold text-emerald-300 tracking-wide">
                Open to internship & junior opportunities
              </span>
            </div>

            {/* intro */}
            <p className="mb-3 text-sm font-medium text-slate-400 sm:text-base">
              Hi, I'm{" "}
              <span className="font-semibold text-slate-200">
                Fathima Hishma
              </span>
              .
            </p>

            {/* heading */}
            <h1 className="text-4xl font-extrabold text-white leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-[4.15rem]">
              Software Engineer Intern
              <span className="block text-slate-400">
                building{" "}
                <span className="bg-linear-to-r from-emerald-300 via-emerald-400 to-fuchsia-400 bg-clip-text text-transparent">
                  modern web experiences
                </span>
                .
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
              I enjoy turning ideas into clean, responsive web applications
              while continuously learning and improving as a software engineer.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 bg-emerald-600 px-5 py-3 rounded-xl text-sm font-bold text-white shadow-lg shadow-emerald-950/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-500"
              >
                View my work
                <FiArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-slate-700/80 rounded-xl px-5 py-3 bg-white/2.5 text-sm text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-600 hover:bg-white/5"
              >
                View Resume
              </a>
            </div>

            {/* social links */}
            <div className="mt-7 flex items-center gap-5">
              <a
                href="https://github.com/hishmaiyoob"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-slate-500 transition-colors duration-200 hover:text-white"
              >
                <FiGithub size={19} />
              </a>

              <a
                href="https://www.linkedin.com/in/fathimahishma13/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-slate-500 transition-colors duration-200 hover:text-white"
              >
                <FiLinkedin size={19} />
              </a>

              <a
                href="mailto:hishmahish13@gmail.com"
                aria-label="Email"
                className="text-slate-500 transition-colors duration-200 hover:text-emerald-400"
              >
                <FiMail size={19} />
              </a>

              <span className="h-px w-10 bg-slate-700" />

              <span className="text-[11px] uppercase tracking-[0.16em] text-slate-500 font-medium">
                Build • Design • Ship
              </span>
            </div>
          </div>

          {/* right */}
          <div className="relative mx-auto w-full max-w-107.5 lg:ml-auto">
            {/* outer glow */}
            <div
              className="absolute bg-emerald-500/10 left-1/2 top-1/2 h-70 w-70 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]"
              aria-hidden="true"
            />

            {/* Image card */}
            <div className="border border-white/8 relative overflow-hidden rounded-4xl bg-linear-to-br from-white/7 to-white/1.5 p-2 shadow-2xl shadow-black/30">
              {/* inner frame */}
              <div className="relative overflow-hidden border border-white/6 rounded-[1.6rem] bg-slate-900/70">
                {/* decor */}
                <div
                  aria-hidden="true"
                  className="absolute bg-linear-to-b from-emerald-500/10 to-transparent inset-x-0 top-0 h-40"
                />

                <div
                  aria-hidden="true"
                  className="absolute bg-fuchsia-500/8 rounded-full blur-3xl -right-16 top-10 h-32 w-32"
                />

                {/* image */}
                <div className="relative flex items-end justify-center min-h-105 px-5 pt-8 sm:min-h-112.5">
                  <img
                    src="/me.png"
                    alt="illustrated portrait of fathima hishma"
                    className="relative z-10 mix-h-105 w-auto max-w-full object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.35)] transition-transform duration-700 hover:scale-[1.025]"
                  />

                  {/* bottom fade */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 z-20 h-28 bg-linear-to-t from-slate-950/90 to-transparent"
                  />
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-30 flex items-center justify-between rounded-xl border border-white/8 bg-slate-950/75 px-4 py-3 backdrop-blur-xl">
                  <div>
                    <p className="text-xs font-bold text-white">
                      Software Engineer Intern
                    </p>

                    <p className="mt-0.5 text-[10px] text-slate-500">
                      Web • Product • Technology
                    </p>
                  </div>

                  <div className="flex items-center justify-center h-8 w-8 bg-emerald-400/10 text-emerald-400 rounded-lg">
                    <FiArrowUpRight size={15} />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute items-center gap-2 -left-3 top-12  hidden sm:flex border border-slate-700/70 bg-slate-950/90 rounded-xl px-3 py-2.5 shadow-xl shadow-black/40 backdrop-blur-xl">
              <span className="flex items-center justify-center h-7 w-7 bg-emerald-400/10 rounded-lg">
                <span className="h-2 w-2 bg-emerald-400 rounded-full shadow-lg" />
              </span>

              <div>
                <p className="text-[10px] font-bold text-slate-200">
                  Currently
                </p>

                <p className="text-[9px] text-slate-500">Building & learning</p>
              </div>
            </div>

            <div className="absolute -right-3 bottom-24 border border-slate-700/70 rounded-xl px-3 py-2.5 bg-slate-950/90 shadow-xl shadow-black/40 backdrop-blur-xl sm:block hidden">
              <p className="font-mono text-[10px]">
                <span className="text-fuchsia-400">&lt;</span>
                <span className="text-emerald-400">build</span>
                <span className="text-fuchsia-400">/&gt;</span>
              </p>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="mt-7 flex items-center justify-between border-t border-white/6 pt-5">
          <div className="flex items-center gap-2 text-[11px] text-slate-500">
            <span className="h-1.5 w-1.5 bg-emerald-400 rounded-full" />
            Open to new opportunities
          </div>

          <a
            href="#about"
            className="group hidden sm:flex items-center text-[11px] gap-2 font-semibold uppercase tracking-[0.15em] text-slate-600 transition-colors hover:text-slate-300"
          >
            Scroll to explore
            <FiArrowDown
              size={13}
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
