import { FiArrowUpRight, FiBriefcase, FiMapPin } from "react-icons/fi";

const experiences = [
  {
    id: "01",
    company: "Ayman Tech Global",
    location: "London, United Kingdom",
    workMode: "Remote",
    role: "Software Engineer / Full Stack Developer Intern",
    startDate: "Nov 2025",
    endDate: "Jun 2026",
    current: false,
    description:
      "Worked as a remote Software Engineer / Full Stack Developer Intern, gaining practical experience in professional software development and full-stack application development.",
  },
  {
    id: "02",
    company: "Apptron Solutions",
    location: "Jaffna, Sri Lanka",
    workMode: "Remote",
    role: "Software Engineer / Full Stack Developer Intern",
    startDate: "Jun 2026",
    endDate: "Present",
    current: true,
    description:
      "Currently working remotely as a Software Engineer / Full Stack Developer Intern, continuing to develop practical engineering skills through real-world software projects.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-16 sm:py-20 overflow-hidden bg-slate-950"
    >
      {/* bg glow */}
      <div
        className="pointer-events-none absolute h-80 w-80 -left-45 bg-fuchsia-900/60 blur-[110px] top-40 rounded-full"
        aria-hidden="true"
      />

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* header */}
        <div className="mb-10 flex flex-col border-b border-white/6 pb-5 gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="text-[11px] font-mono text-emerald-400 font-semibold">
                02
              </span>

              <span className="bg-emerald-400/40 w-6 h-px" />

              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-600">
                Experience
              </span>
            </div>

            <h2 className="text-2xl font-extrabold sm:text-3xl text-white tracking-tight">
              Where I've been building
            </h2>
          </div>

          <p className="text-xs max-w-xs leading-5 text-slate-500 sm:text-right">
            Practical experience, continuous learning, and real-world software
            development.
          </p>
        </div>

        {/* experience timeline */}
        <div className="relative">
          <div
            className="absolute bg-linear-to-b from-emerald-400/50 via-slate-700 to-transparent top-8 w-px bottom-8 left-2.25 sm:left-5.75"
            aria-hidden="true"
          />

          <div className="space-y-6">
            {experiences.map((experience) => (
              <article
                key={experience.id}
                className="group relative pl-12 sm:pl-14"
              >
                {/* timeline marker */}
                <div className="absolute flex items-center justify-center left-0 top-6 z-10 h-10 w-10 border border-slate-700/80 rounded-xl bg-slate-950 sm:h-12 sm:w-12 shadow-lg shadow-black">
                  <div
                    className={`flex items-center justify-center h-7 w-7 rounded-lg ${experience.current ? "bg-emerald-400/10 text-emerald-400" : "bg-white/4 text-slate-500"}`}
                  >
                    <FiBriefcase size={14} />
                  </div>
                </div>

                {/* experience card */}
                <div
                  className={`relative border rounded-2xl p-5 overflow-hidden transition-all duration-300 sm:p-6 ${experience.current ? "border-emerald-400/15 bg-white/6" : " border-white/6 bg-white/2 hover:border-white/10 hover:bg-white/3"}`}
                >
                  {/* current indicator */}
                  {experience.current && (
                    <div className="absolute flex items-center border border-emerald-400/15 bg-emerald-400/6 px-2.5 py-1 right-5 top-5 gap-2 rounded-full">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex bg-emerald-400 opacity-60 h-full w-full animate-ping rounded-full" />
                        <span className="relative bg-emerald-400 h-1.5 w-1.5 rounded-full inline-flex" />
                      </span>

                      <span className="text-[9px] uppercase tracking-[0.12em] font-bold text-emerald-400">
                        Current
                      </span>
                    </div>
                  )}

                  {/* top row */}
                  <div className="flex flex-col gap-3 sm:items-start sm:justify-between pr-0 sm:flex-row sm:pr-24">
                    <div>
                      <p className="mb-1 text-[10px] font-mono text-slate-600">
                        {experience.id}
                      </p>

                      <h3 className="text-lg tracking-tight text-white font-bold">
                        {experience.company}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-emerald-400/80">
                        {experience.role}
                      </p>
                    </div>

                    {/* date */}
                    <div className="shrink-0">
                      <div className="border border-white/6 rounded-lg py-2 px-3">
                        <p className="text-[11px] font-semibold text-slate-300">
                          {experience.startDate}{" "}
                          <span className="mx-1.5 text-slate-700">- </span>
                          {experience.endDate}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center border-t border-white/5 gap-x-5 gap-y-2 pt-4">
                    <div className="flex items-center gap-1.5">
                      <FiMapPin size={12} className="text-slate-600" />

                      <span className="text-[11px] text-slate-500">
                        {experience.location}
                      </span>
                    </div>

                    <span className="bg-slate-700 h-1 w-1 rounded-full" />

                    <span className="text-[11px] text-slate-500">
                      {experience.workMode} internship
                    </span>
                  </div>

                  {/* description */}
                  <p className="mt-4 text-slate-500 text-xs sm:text-sm max-w-3xl leading-6">
                    {experience.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-[9px] font-mono uppercase tracking-[0.18em] text-slate-700">
                      professional experience
                    </span>

                    <div
                      className={`flex items-center justify-center h-7 w-7 rounded-lg transition-all duration-300 ${experience.current ? "bg-emerald-400/10 text-emerald-400 group-hover:bg-emerald-400/15" : "bg-white/3.5 text-slate-600 group-hover:text-slate-400"}`}
                    >
                      <FiArrowUpRight size={13} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-3">
          <div className="border border-white/5 rounded-xl px-4 py-3 bg-white/2">
            <p className="text-[9px] uppercase tracking-[0.18em] text-slate-600 font-semibold">
              Experience
            </p>

            <p className="mt-1 text-sm text-slate-300 font-bold">
              2 internships
            </p>
          </div>

          <div className="border border-white/5 bg-white/2 px-4 py-3 rounded-xl">
            <p className="text-[9px] uppercase tracking-[0.18em] text-slate-600 font-semibold">
              Work style
            </p>

            <p className="mt-1 text-sm text-slate-300 font-bold">
              Remote collaboration
            </p>
          </div>

          <div className="border border-white/5 bg-white/2 px-4 py-3 rounded-xl">
            <p className="text-[9px] uppercase tracking-[0.18em] text-slate-600 font-semibold">
              Current
            </p>

            <p className="mt-1 text-sm text-slate-300 font-bold">
              Apptron Solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
