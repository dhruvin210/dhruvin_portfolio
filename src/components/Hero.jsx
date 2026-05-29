import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import { ArrowRight, Download, Sparkles, Stethoscope } from "lucide-react";
import { profile } from "../data/portfolio";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const HeroScene = lazy(() => import("../three/HeroScene"));

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  })
};

const socialIcons = [
  {
    name: "linkedin",
    href: profile.socials.linkedin,
    Icon: LinkedinIcon,
    label: "LinkedIn"
  },
  {
    name: "github",
    href: profile.socials.github,
    Icon: GithubIcon,
    label: "GitHub"
  },
  {
    name: "aurevia",
    href: profile.socials.aurevia,
    Icon: Stethoscope,
    label: "Aurevia – AI Medical Research Copilot"
  }
];

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-32">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <motion.div initial="hidden" animate="show" custom={0} variants={fadeUp} className="mb-6">
            <span className="section-eyebrow">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {profile.badge}
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={0.1}
            variants={fadeUp}
            className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
          >
            <span className="text-white">Full Stack </span>
            <span className="text-gradient">Developer</span>
            <br />
            <span className="text-white">& AI Builder</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={0.25}
            variants={fadeUp}
            className="mt-6 max-w-xl text-base text-slate-300 md:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={0.4}
            variants={fadeUp}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#projects" className="btn-primary">
              View Work <ArrowRight className="h-4 w-4" />
            </a>
            <a href={profile.resumePath} download className="btn-ghost">
              <Download className="h-4 w-4" /> Download CV
            </a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            custom={0.55}
            variants={fadeUp}
            className="mt-8 flex items-center gap-3"
          >
            {socialIcons.map(({ name, href, Icon, label }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:-translate-y-1 hover:border-brand-purple/60 hover:text-white hover:shadow-glow"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            custom={0.7}
            variants={fadeUp}
            className="mt-10 grid grid-cols-3 gap-3 text-xs uppercase tracking-[0.2em] text-slate-400"
          >
            <div className="glass rounded-2xl p-3 text-center">
              <Sparkles className="mx-auto mb-1 h-4 w-4 text-brand-purple" />
              <p>MERN Stack</p>
            </div>
            <div className="glass rounded-2xl p-3 text-center">
              <Sparkles className="mx-auto mb-1 h-4 w-4 text-brand-cyan" />
              <p>AI & Vision</p>
            </div>
            <div className="glass rounded-2xl p-3 text-center">
              <Sparkles className="mx-auto mb-1 h-4 w-4 text-brand-indigo" />
              <p>Java · Python</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[420px] w-full md:h-[520px]"
        >
          <div className="pointer-events-none absolute inset-0 rounded-[40px] bg-grad-soft blur-3xl" />
          <div className="absolute inset-0 rounded-[40px] border border-white/10" />
          <Suspense
            fallback={
              <div className="grid h-full w-full place-items-center text-slate-400">Loading scene…</div>
            }
          >
            <HeroScene />
          </Suspense>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
