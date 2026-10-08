import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Layers } from "lucide-react";
import { caseStudies, allProjects } from "../data/portfolio";
import ProjectArt from "../components/ProjectArt";
import { GithubIcon } from "../components/BrandIcons";

function CaseStudy() {
  const { slug } = useParams();
  const project = allProjects.find((item) => item.slug === slug);
  const data = caseStudies[slug];

  if (!project || !data) {
    return (
      <section className="mx-auto max-w-3xl px-6 py-36 text-center font-mono">
        <h1 className="font-display text-3xl font-bold uppercase text-deepNavy">Project not found</h1>
        <p className="mt-2 text-sm text-deepNavy/70">That project page is not available.</p>
        <Link to="/" className="btn-play-white mt-6">
          <ArrowLeft className="h-3.5 w-3.5" /> RETURN HOME
        </Link>
      </section>
    );
  }

  return (
    <article className="relative min-h-screen bg-ivory pb-28 pt-28 sm:pt-36">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Navigation Return */}
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-deepNavy/70 transition hover:text-cobalt"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Return to the project map
        </Link>

        {/* Hero Section */}
        <div className="grid items-start gap-10 border-b-2 border-deepNavy pb-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-3 flex items-center gap-2 font-mono text-xs font-bold uppercase text-cobalt">
              <span>Project file // {slug.toUpperCase()}</span>
            </div>

            <h1 className="font-display text-4xl font-extrabold uppercase leading-[0.9] tracking-tight text-deepNavy sm:text-6xl">
              {data.title}
            </h1>

            <p className="mt-4 font-mono text-xs uppercase tracking-wider text-deepNavy/65 sm:text-sm">
              {data.subtitle}
            </p>

            <p className="mt-6 font-sans text-base leading-relaxed text-deepNavy/80">
              {data.overview}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {data.stack.map((item) => (
                <span key={item} className="tag-fragment bg-white text-xs">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {data.liveUrl && (
                <a
                  href={data.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-play-primary"
                >
                  <span>OPEN LIVE PROJECT</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}

              {data.githubUrl && (
                <a
                  href={data.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-play-white"
                >
                  <GithubIcon className="h-3.5 w-3.5 text-deepNavy" />
                  <span>SOURCE CODE REPO</span>
                </a>
              )}
            </div>
          </div>

                <div className="rounded-2xl border-2 border-deepNavy bg-white p-3 shadow-brutal">
            <ProjectArt variant={slug} className="h-full w-full aspect-[16/10]" />
          </div>
        </div>

        {/* Results Metrics */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3 font-mono">
          {data.results.map((result) => (
            <div
              key={result.label}
              className="border-t-2 border-deepNavy bg-white/70 p-6 text-center"
            >
              <p className="font-display text-3xl font-extrabold text-deepNavy sm:text-4xl">
                {result.value}
              </p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-deepNavy/60">
                {result.label}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Narratives */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Block title="THE ENGINEERING CHALLENGE" body={data.challenge} />
          <Block title="THE ARCHITECTURAL SOLUTION" body={data.solution} />

          <div className="border-2 border-deepNavy bg-white p-6 font-mono sm:p-8">
            <div className="mb-4 flex items-center gap-2 border-b border-deepNavy/20 pb-2">
              <Layers className="h-4 w-4 text-cobalt" />
              <h2 className="text-xs font-bold uppercase tracking-wider text-deepNavy">
                Tools in the system
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {data.stack.map((item) => (
                <span key={item} className="border border-deepNavy/25 bg-softYellow/35 p-2 text-xs text-deepNavy">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="border-2 border-deepNavy bg-white p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-2 border-b border-deepNavy/20 pb-2 font-mono">
              <h2 className="text-xs font-bold uppercase tracking-wider text-deepNavy">
                What it does
              </h2>
            </div>
            <ul className="space-y-2.5 font-sans text-sm leading-relaxed text-deepNavy">
              {data.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-cobalt" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

function Block({ title, body }) {
  return (
    <div className="border-2 border-deepNavy bg-white p-6 sm:p-8">
      <h2 className="mb-3 border-b border-deepNavy/20 pb-2 font-mono text-xs font-bold uppercase tracking-wider text-deepNavy">
        {title}
      </h2>
      <p className="font-sans text-sm leading-relaxed text-deepNavy/75">
        {body}
      </p>
    </div>
  );
}

export default CaseStudy;
