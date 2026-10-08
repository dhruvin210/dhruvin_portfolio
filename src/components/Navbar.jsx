import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { profile } from "../data/portfolio";

const navigationWorlds = [
  { id: "world-builds", target: "what-i-build", label: "Builds", color: "hover:text-cobalt" },
  { id: "world-exp", target: "experience", label: "Experience", color: "hover:text-orangeTech" },
  { id: "world-projects", target: "projects", label: "Projects", color: "hover:text-cobalt" },
  { id: "world-stack", target: "stack-dna", label: "Stack", color: "hover:text-deepNavy" },
  { id: "world-process", target: "how-i-build", label: "Method", color: "hover:text-coral" },
  { id: "world-about", target: "education", label: "Education", color: "hover:text-electricBlue" }
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 25);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-4 sm:px-6">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border-2 border-deepNavy bg-ivory/95 px-4 py-2.5 backdrop-blur-md transition-all duration-300 sm:px-6 ${
          scrolled ? "shadow-brutal" : "shadow-brutalSm"
        }`}
      >
        {/* Brand identity */}
        <button
          onClick={() => scrollTo("")}
          className="group flex items-center gap-2.5 text-left focus-visible:outline-none"
          aria-label="Dhruvin Malot, back to top"
        >
          <div className="grid h-8 w-8 place-items-center rounded-lg border-2 border-deepNavy bg-electricBlue font-display text-xs font-bold text-white shadow-brutalSm transition-transform group-hover:rotate-6">
            DM
          </div>
          <div>
            <span className="font-display text-sm font-extrabold uppercase tracking-tight text-deepNavy block leading-none">
              DHRUVIN MALOT
            </span>
            <span className="font-mono text-[10px] font-semibold text-electricBlue uppercase tracking-wider">
              FULL STACK · SYSTEMS
            </span>
          </div>
        </button>

        {/* Center Navigation Worlds */}
        <nav
          className="hidden lg:flex items-center gap-1 font-mono text-xs font-bold text-deepNavy"
          aria-label="Main navigation"
        >
          {navigationWorlds.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.target)}
              className={`rounded-lg px-2.5 py-2 text-[11px] uppercase transition-colors ${item.color} hover:bg-deepNavy/5`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right CTA / Connect */}
        <div className="flex items-center gap-3">
          <a
            href={profile.resumePath}
            download
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border-2 border-deepNavy bg-softYellow/60 px-3.5 py-1.5 font-mono text-xs font-bold text-deepNavy shadow-brutalSm transition hover:bg-softYellow hover:-translate-y-0.5"
          >
            <span>Resume</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          <button
            onClick={() => scrollTo("contact")}
            className="hidden sm:inline-flex items-center gap-2 rounded-lg border-2 border-deepNavy bg-coral px-4 py-1.5 font-display text-xs font-bold uppercase tracking-wider text-white shadow-brutalSm transition hover:-translate-y-0.5 hover:shadow-brutal"
          >
            <Sparkles className="h-3.5 w-3.5" />
            LET&apos;S CONNECT
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="grid h-9 w-9 place-items-center rounded-lg border-2 border-deepNavy bg-white text-deepNavy shadow-brutalSm lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            id="mobile-navigation"
            className="mt-2 rounded-2xl border-2 border-deepNavy bg-white p-5 shadow-brutal lg:hidden"
          >
            <nav className="flex flex-col gap-2 font-mono text-xs font-bold" aria-label="Mobile Navigation">
              {navigationWorlds.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.target)}
                  className="flex items-center justify-between rounded-xl border border-deepNavy/20 p-3 text-left text-deepNavy hover:bg-softYellow/40"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="h-4 w-4 text-deepNavy/50" />
                </button>
              ))}

              <div className="pt-3 flex flex-col gap-2">
                <button
                  onClick={() => scrollTo("contact")}
                  className="btn-play-coral w-full py-2.5 text-xs text-center"
                >
                  LET&apos;S CONNECT
                </button>
                <a
                  href={profile.resumePath}
                  download
                  className="btn-play-white w-full py-2.5 text-xs text-center"
                >
                  DOWNLOAD RESUME [PDF]
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
