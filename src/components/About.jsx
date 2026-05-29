import { motion } from "framer-motion";
import { Code2, Cpu, Layers, MapPin, Sparkles } from "lucide-react";
import { featureCards, profile, stats } from "../data/portfolio";

const featureIcon = {
  "Full Stack": Code2,
  "AI & Vision": Cpu,
  "System Design": Layers
};

function PhotoFrame() {
  return (
    <div className="relative mx-auto h-[520px] w-full max-w-md">
      {/* Glow blobs behind the frame */}
      <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[48px] bg-grad-soft blur-3xl opacity-60" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 -z-10 h-48 w-48 rounded-full bg-brand-cyan/30 blur-3xl" />
      <div className="pointer-events-none absolute -top-10 -right-10 -z-10 h-48 w-48 rounded-full bg-brand-purple/30 blur-3xl" />

      {/* Main photo card */}
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        className="gradient-border relative h-full w-full overflow-hidden rounded-[36px] border border-white/10 bg-ink-900 shadow-glow"
      >
        <img
          src="/profile-photo.jpg"
          alt={`Portrait of ${profile.name}`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        {/* Subtle grid + gradient overlays */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(5,8,22,0.45)_70%,rgba(5,8,22,0.92)_100%)]" />
        <div className="absolute inset-0 mix-blend-overlay opacity-25 grid-bg" />

        {/* Top-left status chip */}
        <div className="absolute left-4 top-4">
          <span className="glass-strong inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-slate-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to Work
          </span>
        </div>

        {/* Top-right location chip */}
        <div className="absolute right-4 top-4">
          <span className="glass-strong inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] text-slate-200">
            <MapPin className="h-3 w-3 text-brand-cyan" />
            {profile.location}
          </span>
        </div>

        {/* Bottom info card */}
        <div className="absolute inset-x-4 bottom-4">
          <div className="glass-strong flex items-center gap-3 rounded-2xl p-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-grad-brand text-white">
              <Sparkles className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Currently</p>
              <p className="truncate text-sm font-semibold">Building AI-integrated MERN products</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating accent shapes */}
      <motion.div
        animate={{ y: [-8, 10, -8], rotate: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-6 top-16 h-14 w-14 rotate-12 rounded-2xl bg-grad-brand opacity-90 shadow-glow"
      />
      <motion.div
        animate={{ y: [10, -10, 10], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-5 top-1/3 h-10 w-10 rounded-full bg-brand-cyan/80 shadow-glowCyan"
      />
      <motion.div
        animate={{ y: [-12, 8, -12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-7 bottom-24 h-16 w-16 rounded-3xl border border-white/15 bg-white/5 backdrop-blur"
      />

      {/* Floating glass mini cards */}
      <motion.div
        animate={{ y: [6, -10, 6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute -left-6 bottom-24 hidden rounded-2xl px-4 py-3 sm:block"
      >
        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Stack</p>
        <p className="font-display text-sm font-semibold text-gradient">MERN · Java · AI</p>
      </motion.div>

      <motion.div
        animate={{ y: [-6, 12, -6] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute -right-4 top-6 hidden rounded-2xl px-4 py-3 sm:block"
      >
        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Education</p>
        <p className="font-display text-sm font-semibold text-gradient">B.Tech · MIT-WPU</p>
      </motion.div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <span className="section-eyebrow">About Me</span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight md:text-5xl">
            Crafting secure platforms with <span className="text-gradient">AI built in</span>
          </h2>
          <p className="mt-4 text-slate-300">
            I’m a B.Tech Computer Engineering student at MIT World Peace University, Pune, and a results-oriented Full Stack
            Developer. I build with Java, Python, and the MERN stack, with proven internship experience at Intersect
            Creative, STL Digital, and Netsol IT Solutions delivering REST APIs, scalable schemas, and AI-integrated
            platforms.
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-3 gap-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="glass relative overflow-hidden rounded-2xl p-5 text-center"
                >
                  <div className="absolute inset-0 -z-10 bg-grad-soft opacity-40" />
                  <p className="font-display text-3xl font-bold text-gradient">{item.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {featureCards.map((card) => {
                const Icon = featureIcon[card.title] ?? Code2;
                return (
                  <motion.div
                    key={card.title}
                    whileHover={{ y: -6 }}
                    className="glass group relative overflow-hidden rounded-2xl p-5"
                  >
                    <div
                      className={`absolute inset-0 -z-10 bg-gradient-to-br ${card.accent} opacity-0 transition group-hover:opacity-100`}
                    />
                    <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-grad-brand">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-display text-lg font-semibold">{card.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{card.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <PhotoFrame />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
