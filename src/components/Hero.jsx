import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles, Stethoscope } from "lucide-react";
import { profile } from "../data/portfolio";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

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
    <section id="home" className="relative flex min-h-screen items-center pt-24 pb-12">
      <div className="mx-auto w-full max-w-6xl px-6">
        {/* Badge */}
        <motion.div initial="hidden" animate="show" custom={0} variants={fadeUp} className="mb-5">
          <span className="section-eyebrow">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {profile.badge}
          </span>
        </motion.div>

        {/* Big name */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={0.08}
          variants={fadeUp}
          className="mb-4 leading-none"
        >
          <h1 className="font-display font-extrabold tracking-tight">
            <span className="block text-[clamp(4rem,12vw,9rem)] text-white leading-[0.95]">
              {profile.name.split(" ")[0]}
            </span>
            <span className="block text-[clamp(4rem,12vw,9rem)] text-gradient leading-[0.95]">
              {profile.name.split(" ")[1]}
            </span>
          </h1>
        </motion.div>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.22, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5 h-px w-full max-w-lg origin-left bg-gradient-to-r from-brand-purple/60 via-brand-indigo/40 to-transparent"
        />

        {/* Role heading + description + CTAs + socials */}
        <div className="max-w-xl">
          <motion.h2
            initial="hidden"
            animate="show"
            custom={0.28}
            variants={fadeUp}
            className="font-display text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl"
          >
            <span className="text-white">Full Stack </span>
            <span className="text-gradient">Developer</span>
            <br />
            <span className="text-white">&amp; AI Builder</span>
          </motion.h2>

          <motion.p
            initial="hidden"
            animate="show"
            custom={0.38}
            variants={fadeUp}
            className="mt-4 text-sm text-slate-300 md:text-base"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            custom={0.46}
            variants={fadeUp}
            className="mt-6 flex flex-wrap gap-3"
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
            custom={0.54}
            variants={fadeUp}
            className="mt-5 flex items-center gap-3"
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
        </div>

        {/* Skill chips */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={0.62}
          variants={fadeUp}
          className="mt-8 grid grid-cols-3 gap-3 text-xs uppercase tracking-[0.2em] text-slate-400 max-w-sm"
        >
          <div className="glass rounded-2xl p-3 text-center">
            <Sparkles className="mx-auto mb-1 h-4 w-4 text-brand-purple" />
            <p>MERN Stack</p>
          </div>
          <div className="glass rounded-2xl p-3 text-center">
            <Sparkles className="mx-auto mb-1 h-4 w-4 text-brand-cyan" />
            <p>AI &amp; Vision</p>
          </div>
          <div className="glass rounded-2xl p-3 text-center">
            <Sparkles className="mx-auto mb-1 h-4 w-4 text-brand-indigo" />
            <p>Java · Python</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
