import { certifications, education } from "../data/portfolio";

function Education() {
  return (
    <section id="education" className="relative border-b-2 border-deepNavy bg-mint px-4 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-3 border-b border-deepNavy/25 pb-4 font-mono text-xs font-bold uppercase">
          <span>06 / Field notes · education</span><span>Learning is part of the system</span>
        </div>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em]">The foundation</p>
            <h2 className="mt-4 font-display text-5xl font-extrabold uppercase leading-[0.9] tracking-tight sm:text-7xl">Curiosity, with structure.</h2>
            <p className="mt-6 max-w-lg leading-relaxed text-deepNavy/75">Computer engineering at MIT World Peace University, alongside practical engineering simulations through Forage.</p>
          </div>
          <div className="space-y-8">
            <article className="border-t-2 border-deepNavy pt-5">
              <div className="flex flex-wrap justify-between gap-2 font-mono text-xs font-bold uppercase"><span>Undergraduate degree</span><span>2022 — 2026</span></div>
              <h3 className="mt-4 font-display text-2xl font-bold uppercase sm:text-3xl">{education.institution}</h3>
              <p className="mt-2 font-semibold">{education.degree} · {education.location}</p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-deepNavy/75">{education.description}</p>
            </article>
            <div className="border-t-2 border-deepNavy pt-5">
              <div className="flex flex-wrap justify-between gap-2 font-mono text-xs font-bold uppercase"><span>Engineering simulations</span><span>Forage</span></div>
              <div className="mt-4 grid gap-x-8 sm:grid-cols-2">
                {certifications.map((cert, i) => (
                  <article key={cert.title} className="border-b border-deepNavy/25 py-4">
                    <p className="font-mono text-xs font-bold text-deepNavy/60">0{i + 1} / {cert.issuer}</p>
                    <h3 className="mt-2 font-display text-lg font-bold uppercase">{cert.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-deepNavy/75">{cert.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
