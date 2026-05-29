import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "../data/portfolio";

function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <span className="section-eyebrow">Work Experience</span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight md:text-5xl">
            Internships across <span className="text-gradient">full stack & systems</span>
          </h2>
          <p className="mt-3 text-slate-300">
            Each role sharpened a different layer of the stack, from REST API architecture and MySQL performance
            to security hardening and stakeholder communication.
          </p>
        </motion.div>

        <div className="relative">
          <div className="pointer-events-none absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-brand-purple/60 via-brand-indigo/40 to-brand-cyan/40 md:block" />

          <div className="grid gap-6">
            {experiences.map((item, index) => (
              <motion.article
                key={item.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="glass gradient-border relative overflow-hidden rounded-3xl p-6 md:pl-20"
              >
                <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-grad-soft opacity-40 blur-3xl" />

                <div className="absolute left-3 top-6 hidden h-8 w-8 -translate-x-1/2 place-items-center rounded-full bg-grad-brand text-[11px] font-bold shadow-glow md:grid">
                  {item.initials}
                </div>

                <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.duration}</p>
                    <h3 className="mt-1 font-display text-2xl font-semibold">{item.role}</h3>
                    <p className="text-sm text-brand-cyan">{item.company}</p>
                  </div>
                  <div className="hidden h-10 w-10 place-items-center rounded-xl bg-white/5 text-brand-purple md:grid">
                    <Briefcase className="h-5 w-5" />
                  </div>
                </div>

                <ul className="mt-4 grid gap-2 text-sm text-slate-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-grad-brand" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
