import { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleNavigation = (id) => {
    setActiveSection(id);
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 z-50 top-0 px-4 pt-4 sm:px-6 lg:px-8">
      <nav
        className={`mx-auto border flex items-center justify-between max-w-6xl transition-all duration-300 rounded-2xl ${scrolled ? "border-slate-700/70 bg-slate-950/85 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl" : "border-white/10 bg-slate-950/55 px-5 py-3.5 backdrop-blur-lg"}`}
      >
        {/* logo */}
        <a
          href="#home"
          onClick={() => handleNavigation("home")}
          className="group flex items-center gap-3"
        >
          <div className="relative flex items-center justify-center h-9 w-9 overflow-hidden bg-linear-to-br from-emerald-400 via-emerald-500 to-fuchsia-600 rounded-xl shadow-lg shadow-emerald-500/10 transition-transform duration-300 group-hover:scale-105">
            <span className="text-xs font-extrabold tracking-tight text-white">
              FH
            </span>
          </div>

          <div className="sm:block hidden">
            <p className="text-sm font-bold tracking-tight text-slate-100">
              Fathima Hishma
            </p>

            <p className="text-[10px] uppercase tracking-[0.18em] font-medium text-slate-400">
              Software Engineer
            </p>
          </div>
        </a>

        {/* desktop navigation */}
        <div className="md:flex items-center gap-1 hidden">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                href={item.href}
                key={item.href}
                onClick={() => handleNavigation(sectionId)}
                className="relative text-[13px] font-semibold rounded-lg px-3.5 py-2"
              >
                {isActive && (
                  <span className="absolute bg-white/[0.07] inset-0 rounded-lg" />
                )}

                <span
                  className={`relative z-10 transition-colors duration-200 ${isActive ? "text-white" : "text-slate-400 hover:text-slate-100"}`}
                >
                  {item.label}
                </span>

                {isActive && (
                  <span className="absolute bottom-1 left-1/2 h-0.5 bg-emerald-400 w-3 -translate-x-1/2 rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        <a
          href="#contact"
          className="group items-center px-4 py-2 text-[13px] gap-1.5 bg-emerald-600 rounded-lg md:flex hidden font-bold text-white shadow-lg shadow-emerald-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-500 hover:shadow-emerald-500/20"
        >
          Let's Talk
          <FiArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </a>

        {/* mobile */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex items-center justify-center h-9 w-9 border border-slate-700/70 rounded-lg bg-white/3 text-slate-300 transition hover:border-slate-600 hover:text-white md:hidden"
        >
          {menuOpen ? <FiX size={19} /> : <FiMenu size={19} />}
        </button>
      </nav>

      {/* mobile navigation */}
      <div
        className={`mx-auto mt-2 border border-slate-700/70 bg-slate-950/95 rounded-2xl max-w-6xl overflow-hidden transition-all backdrop-blur-xl duration-300 md:hidden ${menuOpen ? "max-h-105 opacity-100 translate-y-0" : "pointer-events-none max-h-0 -translate-y-2 opacity-0"}`}
      >
        <div className="p-2">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                href={item.href}
                key={item.href}
                onClick={() => handleNavigation(sectionId)}
                className={`text-sm flex items-center justify-between font-semibold rounded-xl px-4 py-3 transition ${isActive ? "bg-white/6 text-white" : "text-slate-400 hover:bg-white/4 hover:text-white"}`}
              >
                <span>{item.label}</span>

                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50" />
                )}
              </a>
            );
          })}

          <div className="my-2 h-px bg-slate-800" />

          <a
            href="#contact"
            onClick={() => handleNavigation("contact")}
            className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-emerald-500"
          >
            Let's Talk
            <FiArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}
