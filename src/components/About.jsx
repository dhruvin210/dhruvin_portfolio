const domains = [
  {
    id: "01", title: "Product interfaces", label: "Frontend", color: "bg-mint", text: "I build responsive application interfaces and connect them to the systems behind them.", path: ["React", "TypeScript", "Product UI"], stack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux"]
  },
  {
    id: "02", title: "APIs & data", label: "Backend", color: "bg-softYellow", text: "From validated REST endpoints to relational schemas, I focus on dependable flows and clear boundaries.", path: ["Express", "REST APIs", "SQL"], stack: ["Node.js", "Express.js", "FastAPI", "PostgreSQL", "MySQL", "Prisma"]
  },
  {
    id: "03", title: "AI & computer vision", label: "Intelligence", color: "bg-lavender", text: "I connect research sources and computer vision models to useful, interactive product experiences.", path: ["Research sources", "Models", "Insight"], stack: ["Python", "OpenCV", "Deep Learning", "PubMed API", "OpenAlex"]
  },
  {
    id: "04", title: "Commerce & content", label: "Platforms", color: "bg-coral", text: "At NextDynamix, I contribute to storefront, commerce, CMS, and integration work across a pet-commerce platform.", path: ["Storefront", "Medusa.js", "Strapi"], stack: ["Medusa.js", "Strapi CMS", "Docker", "REST APIs", "SQL"]
  }
];

function About() {
  return (
    <section id="what-i-build" aria-labelledby="build-title" className="relative border-b-2 border-deepNavy bg-ivory px-4 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4 border-b border-deepNavy/15 pb-4 font-mono text-xs font-bold uppercase text-deepNavy">
          <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-mint" /> 01 // What I build</span>
          <span className="hidden sm:inline text-deepNavy/60">Interfaces · systems · intelligent products</span>
        </div>
        <div className="mb-12 grid gap-6 md:grid-cols-[1fr_0.65fr] md:items-end">
          <h2 id="build-title" className="font-display text-5xl font-extrabold uppercase leading-[0.88] tracking-tight text-deepNavy sm:text-7xl lg:text-8xl">Things that work together.</h2>
          <p className="max-w-lg leading-relaxed text-deepNavy/75">The interesting work happens between the pieces. Here are the kinds of systems I like building, and how their parts fit together.</p>
        </div>
        <div className="grid gap-x-12 lg:grid-cols-2">
          {domains.map((domain) => (
            <article key={domain.id} className="grid grid-cols-[2.5rem_1fr] gap-4 border-t-2 border-deepNavy py-7 sm:grid-cols-[3.5rem_1fr] sm:gap-6">
              <span className="font-mono text-sm font-bold text-deepNavy/45">{domain.id}</span>
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight sm:text-3xl">{domain.title}</h3>
                  <span className={`rounded px-2 py-1 font-mono text-[10px] font-bold uppercase ${domain.color}`}>{domain.label}</span>
                </div>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-deepNavy/75 sm:text-base">{domain.text}</p>
                <div className="mt-5 flex flex-wrap items-center gap-y-2 font-mono text-xs font-bold">
                  {domain.path.map((node, index) => <span key={node} className="inline-flex items-center">{index > 0 && <span aria-hidden="true" className="mx-2 text-deepNavy/40">→</span>}<span className="rounded border border-deepNavy/25 bg-white/80 px-2.5 py-1.5">{node}</span></span>)}
                </div>
                <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 border-t border-deepNavy/15 pt-3 font-mono text-[10px] font-semibold text-deepNavy/60">
                  {domain.stack.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
