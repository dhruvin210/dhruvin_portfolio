import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";
import { caseStudies, projects } from "../data/portfolio";
import ProjectArt from "../components/ProjectArt";
import { GithubIcon } from "../components/BrandIcons";

function MockupShowcase({ variant }) {
  return (
    <div className="relative mx-auto h-[460px] w-full max-w-xl">
      <motion.div
        animate={{ y: [-12, 12, -12] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-[420px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-[44px] border border-white/15 bg-ink-900 p-3 shadow-glow"
      >
        <div className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-ink-950" />
        <div className="h-full w-full overflow-hidden rounded-[36px] bg-grad-soft">
          <ProjectArt variant={variant} className="h-full w-full" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [10, -14, 10], rotate: [-2, 2, -2] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute -left-2 top-10 hidden w-56 rounded-2xl p-4 sm:block"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Active Sessions</p>
        <p className="mt-1 font-display text-2xl font-bold text-gradient">+ Live</p>
        <div className="mt-3 h-2 rounded-full bg-white/10">
          <div className="h-full w-3/4 rounded-full bg-grad-brand" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [-10, 14, -10], rotate: [2, -2, 2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute -right-4 bottom-6 hidden w-56 rounded-2xl p-4 sm:block"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Performance</p>
        <p className="mt-1 font-display text-2xl font-bold text-gradient">Optimized</p>
        <div className="mt-3 grid grid-cols-3 gap-1.5">
          <span className="h-6 rounded-md bg-brand-purple/40" />
          <span className="h-6 rounded-md bg-brand-cyan/40" />
          <span className="h-6 rounded-md bg-brand-indigo/40" />
        </div>
      </motion.div>
    </div>
  );
}

function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  const data = caseStudies[slug];

  if (!project || !data) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-3xl font-bold">Project not found</h1>
        <Link to="/" className="btn-ghost mt-6">
          <ArrowLeft className="h-4 w-4" /> Back home
        </Link>
      </section>
    );
  }

  return (
    <article className="relative pb-28 pt-32">
      <div className="mx-auto max-w-6xl px-6">
        <Link to="/" className="btn-ghost mb-10">
          <ArrowLeft className="h-4 w-4" /> Back to portfolio
        </Link>

        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">{project.category}</span>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight md:text-6xl">
              <span className="text-gradient">{data.title}</span>
            </h1>
            <p className="mt-4 max-w-xl text-slate-300">{data.subtitle}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {data.stack.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={project.link} className="btn-primary">
                Visit Project <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href={project.github} target="_blank" rel="noreferrer" className="btn-ghost">
                <GithubIcon className="h-4 w-4" /> View Code
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="pointer-events-none absolute inset-0 rounded-[36px] bg-grad-soft blur-3xl" />
            <MockupShowcase variant={project.image} />
          </motion.div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {data.results.map((result) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="glass gradient-border rounded-3xl p-6 text-center"
            >
              <p className="font-display text-4xl font-bold text-gradient">{result.value}</p>
              <p className="mt-2 text-sm text-slate-400">{result.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <Block title="Overview" body={data.overview} />
          <Block title="Challenge" body={data.challenge} />
          <Block title="Solution" body={data.solution} />
          <div className="glass gradient-border rounded-3xl p-6">
            <h3 className="font-display text-2xl font-semibold">Tech Stack</h3>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {data.stack.map((item) => (
                <span key={item} className="chip justify-center">
                  <Sparkles className="h-3 w-3 text-brand-cyan" /> {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-display text-2xl font-semibold">Features</h3>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {data.features.map((feature) => (
              <li key={feature} className="glass flex items-start gap-3 rounded-2xl p-4 text-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-cyan" />
                <span className="text-slate-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="glass gradient-border overflow-hidden rounded-3xl"
            >
              <ProjectArt variant={project.image} className="h-48 w-full" />
              <div className="p-4 text-sm text-slate-400">Screen {index} preview</div>
            </motion.div>
          ))}
        </div>
      </div>
    </article>
  );
}

function Block({ title, body }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="glass gradient-border rounded-3xl p-6"
    >
      <h3 className="font-display text-2xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">{body}</p>
    </motion.div>
  );
}

export default CaseStudy;
