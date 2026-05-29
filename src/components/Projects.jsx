import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/portfolio";
import ProjectArt from "./ProjectArt";
import { GithubIcon } from "./BrandIcons";

function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <span className="section-eyebrow">Featured Work</span>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight md:text-5xl">
              Selected <span className="text-gradient">Projects</span>
            </h2>
            <p className="mt-3 text-slate-300">
              A snapshot of full stack and AI builds where engineering depth, scalability, and product polish meet.
            </p>
          </div>
          <Link
            to="/projects/aurevia"
            className="btn-ghost self-start md:self-end"
          >
            View Case Study <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="group glass gradient-border relative overflow-hidden rounded-3xl"
            >
              <div className="relative aspect-[5/3] w-full overflow-hidden">
                <ProjectArt variant={project.image} className="absolute inset-0 h-full w-full transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />
                <span className="absolute left-4 top-4 chip">{project.category}</span>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white transition group-hover:text-brand-cyan"
                  >
                    Visit Project <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-brand-cyan/50 hover:text-white"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-purple/60 to-transparent opacity-0 transition group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
