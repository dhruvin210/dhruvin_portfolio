import { motion } from "framer-motion";
import { GraduationCap, Award, ArrowUpRight } from "lucide-react";
import { certifications, profile } from "../data/portfolio";

function Education() {
  return (
    <section id="education" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <span className="section-eyebrow">Education & Certifications</span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight md:text-5xl">
            Academic foundation paired with <span className="text-gradient">simulation-driven learning</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="glass gradient-border relative overflow-hidden rounded-3xl p-6"
          >
            <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-brand-purple/30 blur-3xl" />

            <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-grad-brand shadow-glow">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>

            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{profile.educationRange}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold">{profile.university}</h3>
            <p className="mt-1 text-sm text-brand-cyan">{profile.degree}</p>
            <p className="mt-3 text-sm text-slate-300">
              Focused on full stack development, AI and machine learning, computer vision, scalable system design,
              and UI/UX innovation.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Computer Engineering", "Pune, India", "B.Tech 2026"].map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4">
            {certifications.map((cert, index) => (
              <motion.a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass gradient-border group relative flex items-start gap-4 overflow-hidden rounded-3xl p-5"
              >
                <div className="absolute -top-20 -right-20 h-44 w-44 rounded-full bg-brand-cyan/20 opacity-0 blur-3xl transition group-hover:opacity-100" />

                <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 shadow-glow">
                  <Award className="h-5 w-5 text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="font-display text-lg font-semibold">{cert.title}</h4>
                    <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-cyan" />
                  </div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{cert.issuer}</p>
                  <p className="mt-2 text-sm text-slate-300">{cert.summary}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
