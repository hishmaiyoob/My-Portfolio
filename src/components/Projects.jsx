import { useEffect, useState } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCheckCircle,
  FiGithub,
  FiLayers,
} from "react-icons/fi";

const projects = [
  {
    id: "01",
    title: "Taskly",
    subtitle: "Full-Stack Task Management",
    type: "Individual Project",
    description:
      "A full-stack task management application inspired by modern Kanban workflow, designed to help users organize, assign, and track work through a simple three-stage task board.",
    technologies: [
      "React",
      "Vite",
      "Taileind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcryptjs",
      "Axios",
      "dnd-kit",
    ],
    features: [
      "JWT-based authentication",
      "Role-based access control",
      "Three-stage task workflow",
      "Drag-and-drop task management",
      "Task assignment and reassignment",
      "Administrator dashboard",
      "User and task management",
      "Persistent MongoDB storage",
      "Responsive interface",
    ],
    github: "https://github.com/hishmaiyoob/Taskly",
    demo: "https://taskly-five-peach.vercel.app/",
    status: "Live",
    category: "Full Stack",

    screenshots: [
      {
        title: "Admin Dashboard",
        src: "/Projects/Taskly/admin-dashboard.png",
      },
      {
        title: "User Dashboard",
        src: "/Projects/Taskly/user-dashboard.png",
      },
      {
        title: "Landing Page",
        src: "/Projects/Taskly/landing-page.png",
      },
    ],
  },
];

function BrowserFrame({ screenshot }) {
  return (
    <div className="relative border border-white/10 rounded-xl overflow-hidden bg-slate-950 shadow-2xl shadow-black/30">
      {/* top bar */}
      <div className="flec items-center gap-1.5 h-8 bg-slate-900/90 px-3">
        <span className="bg-white/20 rounded-full h-2 w-2" />
        <span className="bg-white/20 rounded-full h-2 w-2" />
        <span className="bg-white/20 rounded-full h-2 w-2" />

        <div className="border border-white/5 bg-white/3 flex-1 ml-3 h-4 rounded-md" />
      </div>

      {/* screenshot */}
      <div className="bg-slate-950">
        <img
          src={screenshot.src}
          alt={screenshot.title}
          className="block h-auto w-full"
        />
      </div>

      {/* label */}
      <div className="absolute border border-white/10 left-3 bottom-3 rounded-lg bg-slate-950/80 px-2.5 py-1.5 text-[10px] font-medium text-slate-300 backdrop-blur-md">
        {screenshot.title}
      </div>
    </div>
  );
}

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const [projectDirection, setProjectDirection] = useState("next");
  // const [isTransitioning, setIsTransitioning] = useState(false);

  const project = projects[currentProject];

  // change ss every 4 sec
  useEffect(() => {
    if (!project || project.screenshots.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentScreenshot((prev) => {
        return (prev + 1) % project.screenshots.length;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [currentProject, project]);

  const changeProject = (direction) => {
    if (projects.length <= 1) return;

    setProjectDirection(direction);

    setCurrentProject((previous) => {
      if (direction === "next") {
        return (previous + 1) % projects.length;
      }

      return (previous - 1 + projects.length) % projects.length;
    });
  };

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % project.screenshots.length);
  };

  const previousScreenshot = () => {
    setCurrentScreenshot(
      (prev) =>
        (prev - 1 + project.screenshots.length) % project.screenshots.length,
    );
  };

  if (!project) return null;

  const screenshot = project.screenshots[currentScreenshot];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 py-16 sm:py-20"
    >
      {/* bg glow */}
      <div className="pointer-events-none absolute left-3/4 bottom-60 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />

      <div className="relative px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* heading */}
        <div className="mb-2 max-w-3xl">
          <div className="mb-3 flex items-center gap-3">
            <span className="text-xs text-emerald-400 font-mono">03</span>

            <span className="w-8 bg-emerald-400/40 h-px" />

            <span className="text-slate-500 text-xs uppercase tracking-[0.2em] font-semibold">
              Selected Work
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Things i've built.
          </h2>

          <p className="mt-3 text-sm sm:text-base leading-6 max-w-xl text-slate-400">
            A selection of projects where I've worked across frontend, backend,
            databases, authentication, and product interfaces.
          </p>
        </div>

        {/* project */}
        <div
          key={project.id + currentProject}
          className={`animate-project-slide ${
            projectDirection === "next"
              ? "project-slide-next"
              : "project-slide-previous"
          }`}
        >
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="border border-emerald-400/20 rounded-full bg-emerald-400/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
                {project.status}
              </span>

              <span className="border border-white/10 bg-white/3 rounded-full px-3 py-1 text-[11px] font-medium text-slate-400">
                {project.category}
              </span>

              <span className="text-xs text-slate-600">/</span>

              <span className="text-xs text-slate-500">{project.type}</span>
            </div>

            <span className="text-xs font-mono text-slate-600">
              {project.id}
            </span>
          </div>

          <div className="grid grid-cols-[1.35fr_0.65fr] lg:items-start gap-7">
            {/* left */}
            <div className="min-w-0">
              <div className="group relative">
                {/* glow */}
                <div className="absolute -inset-3 rounded-2xl bg-emerald-500/50 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <BrowserFrame screenshot={screenshot} />

                  {/* arrows */}
                  {project.screenshots.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={previousScreenshot}
                        aria-label="Previous screenshot"
                        className="absolute left-3 top-1/2 border border-white/10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-slate-300 bg-slate-950/80 opacity-0 group-hover:opacity-100 hover:border-emerald-400/30 hover:text-emerald-300 transition backdrop-blur-md"
                      >
                        <FiArrowLeft size={15} />
                      </button>

                      <button
                        type="button"
                        onClick={nextScreenshot}
                        aria-label="Next screenshot"
                        className="absolute right-3 top-1/2 border border-white/10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-slate-300 bg-slate-950/80 opacity-0 group-hover:opacity-100 hover:border-emerald-400/30 hover:text-emerald-300 transition backdrop-blur-md"
                      >
                        <FiArrowRight size={15} />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* right */}
            <div className="lg:pt-1">
              <div className="mb-4 flex justify-between">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    {project.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {project.subtitle}
                  </p>
                </div>

                <div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center border border-white/10 gap-2 rounded-lg bg-white/3 px-4 py-2.5 text-xs font-semibold text-slate-300 transition hover:border-white/20 hover:bg-white/6 hover:text-white"
                  >
                    <FiGithub size={14} /> GitHub
                  </a>
                </div>
              </div>

              <p className="text-sm leading-6 text-slate-400">
                {project.description}
              </p>

              {/* features */}
              <div className="mt-6">
                <div className="mb-3 flex items-center gap-2">
                  <FiCheckCircle size={14} className="text-emerald-400" />

                  <span className="text-xs uppercase tracking-[0.14em] font-semibold text-slate-400">
                    Key features
                  </span>
                </div>

                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                  {project.features.slice(0, 6).map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2 text-xs leading-5 text-slate-500"
                    >
                      <span className="mt-2 bg-emerald-400/70 rounded-full h-1 w-1 shrink-0" />

                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* technologies */}
              <div className="mt-6">
                <div className="mb-3 flex items-center gap-2">
                  <FiLayers className="text-fuchsia-400" size={14} />

                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                    Built with
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="border border-white/10 rounded-md bg-white/3 px-2 py-1 text-[10px] font-medium text-slate-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* project navigation */}
          {projects.length > 1 && (
            <div className="mt-2 flex items-center justify-between">
              <div className="text-xs text-slate-600">
                Project{" "}
                <span className="font-mono text-slate-400">
                  {String(currentProject + 1).padStart(2, "0")}
                </span>{" "}
                /{" "}
                <span className="font-mono text-slate-400">
                  {String(projects.length).padStart(2, "0")}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => changeProject("previous")}
                  aria-label="Previous project"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/3 text-slate-400 transition hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-emerald-300"
                >
                  <FiArrowLeft size={15} />
                </button>

                <button
                  type="button"
                  onClick={() => changeProject("next")}
                  aria-label="Next project"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/3 text-slate-400 transition hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-emerald-300"
                >
                  <FiArrowRight size={15} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
