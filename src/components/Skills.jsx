import { motion } from "framer-motion";
import { Code2, Cpu, Database, Wrench } from "lucide-react";
import { skills } from "../data/portfolio";

const accents = {
  Languages: { Icon: Code2, gradient: "from-fuchsia-500 to-purple-500" },
  "Frameworks & Libraries": { Icon: Cpu, gradient: "from-indigo-500 to-cyan-500" },
  Databases: { Icon: Database, gradient: "from-cyan-500 to-emerald-500" },
  "Tools & Concepts": { Icon: Wrench, gradient: "from-amber-500 to-pink-500" }
};

function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <span className="section-eyebrow">Technical Skills</span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight md:text-5xl">
            A practical stack for <span className="text-gradient">shipping real products</span>
          </h2>
          <p className="mt-3 text-slate-300">
            Languages, frameworks, databases, and tools I use day-to-day across full stack and AI projects.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([title, items], index) => {
            const { Icon, gradient } = accents[title] ?? accents.Languages;
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group glass gradient-border relative overflow-hidden rounded-3xl p-6"
              >
                <div
                  className={`absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br ${gradient} opacity-25 blur-3xl transition group-hover:opacity-50`}
                />

                <div className="flex items-center gap-3">
                  <div className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${gradient} shadow-glow`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">{title}</h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
