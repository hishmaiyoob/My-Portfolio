import {
  FiArrowUpRight,
  FiBookOpen,
  FiCode,
  FiLayers,
  FiZap,
} from "react-icons/fi";

const focusAreas = [
  {
    number: "01",
    icon: FiCode,
    title: "Web Development",
    description:
      "Building responsive and maintainable web applications with modern frontend technologies.",
  },
  {
    number: "02",
    icon: FiLayers,
    title: "UI & Interfaces",
    description:
      "Creating clean, accessible interfaces with attention to layout, usability and detail.",
  },
  {
    number: "03",
    icon: FiZap,
    title: "Problem Solving",
    description:
      "Breaking down problems, learning quickly and turning ideas into practical solutions.",
  },
];

const technologies = [
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "Next.js",
  "Git",
];

export default function About() {
  return (
    <section
      className="relative py-16 bg-slate-950 overflow-hidden sm:py-20"
      id="about"
    >
      {/* bg glow */}
      <div
        className="pointer-events-none absolute bg-emerald-900/70 -left-40 h-80 w-80 top-40 rounded-full blur-[100px]"
        aria-hidden="true"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bg-fuchsia-900/50 h-80 w-80 bottom-20 -right-40 rounded-full blur-[100px]"
      />

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* header */}
        <div className="mb-10 flex flex-col border-b border-white/6 pb-5 gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="font-mono text-[11px] text-emerald-400">
                01
              </span>

              <span className="bg-emerald-400/40 h-px w-8" />

              <span className="text-xs uppercase font-semibold tracking-[0.2em] text-slate-500">
                About
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl text-white font-extrabold tracking-tight">
              A little about me
            </h2>
          </div>

          <p className="max-w-xs text-xs leading-5 text-slate-500 sm:text-right">
            Learning, building, and growing one project at a time.
          </p>
        </div>

        {/* intro + profile */}
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text=xl sm:text-2xl leading-8 sm:leading-9 tracking-tight text-slate-200">
              I'm a{" "}
              <span className="text-emerald-400">Software Engineer Intern</span>{" "}
              who enjoys turning ideas into useful, thoughtful digital
              experiences.
            </p>

            <div className="mt-5 max-w-2xl space-y-4 leading-6 text-sm text-slate-400">
              <p>
                I'm currently developing my skills by working with modern web
                technologies and building projects that challenge me to think
                beyond just writing code.
              </p>

              <p>
                I care about writing clean code, understanding how things work,
                and creating interfaces that are simple, responsive, and
                enjoyable to use.
              </p>
            </div>

            <div className="mt-7 inline-flex items-center border border-white/7 gap-3 rounded-xl bg-white/2.5 px-4 py-3">
              <div className="flex justify-center items-center h-8 w-8 bg-emerald-400/10 rounded-lg text-emerald-400">
                <FiBookOpen size={15} />
              </div>

              <div>
                <p className="text-xs font-bold text-slate-200">
                  Always learning
                </p>

                <p className="mt-0.5 text-[10px] text-slate-500">
                  Exploring better ways to build software
                </p>
              </div>

              <span className="ml-2 bg-emerald-400 h-1.5 w-1.5 rounded-full shadow-lg shadow-emerald-400" />
            </div>
          </div>

          {/* profile snapshot */}
          <div className="relative">
            <div className="border border-white/7 bg-white/2.5 p-5 rounded-2xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                    Profile
                  </p>

                  <p className="mt-1 text-sm text-slate-200 font-bold">
                    Currently focused on
                  </p>
                </div>

                <div className="flex items-center justify-center h-8 w-8 border border-emerald-400/10 rounded-lg bg-emerald-400/6 text-emerald-400">
                  <FiArrowUpRight size={15} />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <span className="text-xs text-slate-500">Role</span>
                  <span className="text-xs text-slate-200 font-semibold">
                    Software Engineer Intern
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <span className="text-xs text-slate-500">Focus</span>
                  <span className="text-xs text-slate-200 font-semibold">
                    Full-stack Web
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <span className="text-xs text-slate-500">Approach</span>
                  <span className="text-xs text-slate-200 font-semibold">
                    Learn • Build • Improve
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">Mindset</span>
                  <span className="text-xs text-slate-200 font-semibold">
                    Always curious
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute border border-slate-800 bg-slate-950 rounded-lg py-1.5 px-3 -bottom-3 right-5">
              <span className="text-slate-600 text-[9px] font-mono">
                <span className="text-fuchsia-400">const</span>{" "}
                <span className="text-emerald-400">growth</span> ={" "}
                <span className="text-slate-400">continuous</span>
              </span>
            </div>
          </div>
        </div>

        {/* focus areas */}
        <div className="mt-14">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-600">
                What I enjoy
              </p>

              <h3 className="mt-1 text-slate-200 text-lg font-bold">
                Building with purpose
              </h3>
            </div>

            <span className="hidden sm:block text-slate-700 text-[10px] font-mono">
              /focus
            </span>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {focusAreas.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group relative border border-white/6 rounded-2xl p-5 bg-white/2 transition-all duration-300 hover:-translate-y-1 hover:border-e-mist-400/20 hover:bg-white/3.5"
                >
                  {/* number */}
                  <span className="absolute right-4 top-4 font-mono text-slate-700 transition-colors duration-300 text-[10px] group-hover:text-emerald-500/40">
                    {item.number}
                  </span>

                  {/* icon */}
                  <div className="mb-5 flex items-center justify-center h-9 w-9 border border-white/7 rounded-lg bg-slate-900 text-slate-300 transition-colors duration-300 group-hover:border-e-mist-400/20 group-hover:text-emerald-400">
                    <Icon size={16} />
                  </div>

                  <h4 className="text-sm text-slate-200 font-bold">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* technologies */}
        <div className="mt-12 border-t border-white/6 pt-7">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-600">
                Toolkit
              </p>

              <p className="mt-1 text-slate-300 font-semibold text-sm">
                Technologies I work and learn with
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="border border-white/6 px-3 py-1.5 rounded-lg bg-white/2.5 text-[11px] font-medium text-slate-300 transition-colors duration-200 hover:border-e-mist-400/20 hover:text-emerald-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* bottom line */}
        <div className="mt-10 flex items-center gap-3">
          <span className="flex-1 bg-linear-to-r from-emerald-400/30 to-transparent h-px" />

          <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-slate-700">
            Learning in progress
          </span>

          <span className="flex-1 h-px bg-linear-to-l from-fuchsia-400/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
