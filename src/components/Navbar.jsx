import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navItems, profile } from "../data/portfolio";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean);
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: "-15% 0px -35% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-4 z-50 transition-all ${scrolled ? "top-2" : "top-4"}`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={`glass flex items-center justify-between rounded-full px-4 py-2.5 transition ${
            scrolled ? "shadow-glow" : ""
          }`}
        >
          <button onClick={() => goTo("home")} className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-grad-brand font-display text-sm font-bold">
              DM
            </span>
            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold leading-none">Dhruvin Malot</p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">Full Stack · AI</p>
            </div>
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => goTo(item.id)}
                className={`relative rounded-full px-4 py-2 text-sm transition ${
                  active === item.id ? "text-white" : "text-slate-300 hover:text-white"
                }`}
              >
                {active === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={profile.resumePath}
              download
              className="hidden items-center gap-2 rounded-full bg-grad-brand px-4 py-2 text-sm font-semibold sm:inline-flex"
            >
              <Download className="h-4 w-4" />
              CV
            </a>
            <button
              onClick={() => setOpen((value) => !value)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="glass mt-2 grid gap-1 rounded-2xl p-3 md:hidden"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => goTo(item.id)}
                  className={`rounded-xl px-4 py-3 text-left text-sm transition ${
                    active === item.id ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href={profile.resumePath}
                download
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-grad-brand px-4 py-3 text-sm font-semibold"
              >
                <Download className="h-4 w-4" /> Download CV
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

export default Navbar;
