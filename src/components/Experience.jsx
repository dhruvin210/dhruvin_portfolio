import { useState } from "react";
import { Sparkles, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { experiences } from "../data/portfolio";

const nextDynamixStackMap = [
  { tier: "FRONTEND", label: "React · Next.js · TypeScript", desc: "Storefront components, responsive customer views, and state management for KUDLZ." },
  { tier: "API LAYER", label: "RESTful Endpoints · FastAPI", desc: "Decoupled route controllers, request validation, and high-throughput handlers." },
  { tier: "BACKEND", label: "Node.js · Express.js · JWT", desc: "RBAC authorization, JWT authentication, and reusable service architecture." },
  { tier: "DATABASE", label: "Prisma ORM · SQL · PostgreSQL", desc: "Relational schema modeling, database transactions, and data migrations." },
  { tier: "COMMERCE", label: "Medusa.js Platform", desc: "Custom headless pet-commerce architecture, product catalogue, and order workflows." },
  { tier: "CMS", label: "Strapi Headless CMS", desc: "Structured content models, marketing pages, and client assets administration." },
  { tier: "DEPLOYMENT", label: "Docker · GitHub Actions · Linux", desc: "Containerized service containers, CI/CD automated build pipelines, and Linux runtime." }
];

function Experience() {
  const [activeArchTier, setActiveArchTier] = useState(nextDynamixStackMap[0]);

  // Reverse so road flows 2024 -> 2025 -> 2026
  const chronologicalExperiences = [...experiences].reverse();
  const currentExp = experiences[0]; // NextDynamix

  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 px-4 sm:px-8 border-b-2 border-deepNavy bg-[#FFF3E0]"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-12 border-b border-deepNavy/15 font-mono text-xs font-bold text-deepNavy">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-orangeTech motion-safe:animate-ping" />
            <span className="bg-orangeTech/30 px-2.5 py-0.5 rounded border border-deepNavy">
              WORLD 03 // THE EXPERIENCE ROAD
            </span>
          </div>

          <span className="hidden sm:inline text-deepNavy/70">
            [JOURNEY PATH] 2024 NETSOL → 2025 STL → 2025 INTERSECT → 2026 NEXTDYNAMIX
          </span>
        </div>

        {/* Section Title */}
        <div className="max-w-4xl mb-16">
          <h2 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-deepNavy uppercase leading-[0.9]">
            THE EXPERIENCE ROAD.
          </h2>
          <p className="mt-6 font-sans text-base sm:text-xl text-deepNavy/80 max-w-2xl font-normal leading-relaxed">
            A chronological road of production software engineering roles, high-concurrency booking backends, and headless e-commerce architecture.
          </p>
        </div>

        {/* ============================================================== */}
        {/* 1. HERO STATION: NEXTDYNAMIX TECH (CURRENT ROLE) */}
        {/* ============================================================== */}
        <div className="rounded-3xl border-2 border-deepNavy bg-white p-6 sm:p-12 shadow-brutalLg mb-16 relative overflow-hidden">
          {/* Top Pill / Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b-2 border-deepNavy">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-deepNavy bg-limeTech px-3 py-1 font-mono text-xs font-bold text-deepNavy shadow-brutalSm">
                <span className="h-2 w-2 rounded-full bg-deepNavy motion-safe:animate-ping" />
                ACTIVE / CURRENT STATION
              </span>
              <span className="font-mono text-xs font-bold text-deepNavy">
                JUN 2026 — PRESENT
              </span>
            </div>

            <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-electricBlue text-white border border-deepNavy">
              {currentExp.tag}
            </span>
          </div>

          {/* Company & Role Header */}
          <div className="pt-6 pb-8 border-b border-deepNavy/15">
            <h3 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-deepNavy">
              {currentExp.company}
            </h3>
            <p className="font-mono text-base sm:text-lg font-bold text-electricBlue uppercase tracking-wider mt-1">
              {currentExp.role}
            </p>
            <p className="mt-4 font-sans text-base sm:text-lg text-deepNavy/80 max-w-3xl leading-relaxed">
              {currentExp.summary}
            </p>
          </div>

          {/* Key Deliverables & Interactive Architecture Explorer */}
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] pt-8 items-start">
            {/* Left Column: Verified Technical Deliverables */}
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-deepNavy block mb-4">
                AUDITED TECHNICAL CONTRIBUTIONS:
              </span>

              <ul className="space-y-3 font-sans text-sm text-deepNavy leading-relaxed">
                {currentExp.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="grid h-5 w-5 flex-shrink-0 place-items-center rounded bg-softYellow border border-deepNavy font-mono text-xs font-bold text-deepNavy mt-0.5">
                      0{i + 1}
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-6">
                {currentExp.tech.map((t) => (
                  <span
                    key={t}
                    className="tag-fragment bg-ivory text-deepNavy"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Interactive NextDynamix Architecture Navigator */}
            <div className="rounded-2xl border-2 border-deepNavy bg-ivory p-6 shadow-brutalSm font-mono">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-deepNavy/20 text-xs font-bold">
                <span className="text-deepNavy uppercase flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-electricBlue" />
                  NEXTDYNAMIX ARCHITECTURE EXPLORER
                </span>
                <span className="text-electricBlue font-bold text-[10px]">TAP TO INSPECT</span>
              </div>

              {/* Stack Tier Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 mb-4 text-xs font-bold">
                {nextDynamixStackMap.map((node) => {
                  const isActive = activeArchTier.tier === node.tier;
                  return (
                      <button
                      key={node.tier}
                        type="button"
                        aria-pressed={isActive}
                      onClick={() => setActiveArchTier(node)}
                      className={`p-2 rounded-lg border border-deepNavy text-center transition-all ${
                        isActive
                          ? "bg-electricBlue text-white shadow-brutalSm font-extrabold"
                          : "bg-white text-deepNavy hover:bg-softYellow"
                      }`}
                    >
                      {node.tier}
                    </button>
                  );
                })}
              </div>

              {/* Active Tier Callout */}
              <div className="p-4 rounded-xl border border-deepNavy bg-white space-y-1">
                <span className="text-[10px] text-electricBlue font-extrabold uppercase block">
                  [{activeArchTier.tier}]
                </span>
                <p className="font-bold text-deepNavy text-xs">
                  {activeArchTier.label}
                </p>
                <p className="font-sans text-xs text-deepNavy/80 pt-1 leading-relaxed">
                  {activeArchTier.desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Earlier stations shown as a connected timeline */}
        <div>
          <div className="mb-6 flex items-center justify-between gap-4 font-mono text-xs font-bold uppercase tracking-wider text-deepNavy">
            <span>Earlier stations</span><span className="hidden sm:block">2024 — 2025</span>
          </div>
          <div className="relative grid gap-0 md:grid-cols-3 md:gap-5">
            <div aria-hidden="true" className="absolute bottom-0 left-3 top-0 w-px bg-deepNavy/30 md:left-0 md:right-0 md:top-3 md:h-px md:w-auto" />
            {chronologicalExperiences.slice(0, 3).map((exp, index) => (
              <div
                key={exp.company}
                className="relative flex flex-col justify-between py-5 pl-10 md:pl-0 md:pt-9"
              >
                <span className="absolute left-[7px] top-7 z-10 h-3 w-3 rounded-full border-2 border-deepNavy bg-orangeTech md:left-0 md:top-0" />
                <div>
                  <div className="flex items-center justify-between gap-2 border-b border-deepNavy/20 pb-3 font-mono text-xs font-bold text-deepNavy">
                    <span className="text-deepNavy/55">0{index + 1} / EXPERIENCE</span>
                    <span className="text-deepNavy/70 text-[11px]">{exp.period}</span>
                  </div>

                  <h4 className="font-display font-extrabold text-xl uppercase tracking-tight text-deepNavy">
                    {exp.company}
                  </h4>
                  <p className="font-mono text-xs font-bold text-orangeTech uppercase mt-1 mb-3">
                    {exp.role}
                  </p>

                  <p className="font-sans text-xs text-deepNavy/80 leading-relaxed mb-4">
                    {exp.summary}
                  </p>

                  <ul className="mb-4 mt-4 space-y-1.5 font-sans text-xs text-deepNavy">
                    {exp.bullets.slice(0, 1).map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-orangeTech mt-1.5 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-x-2 gap-y-1 border-t border-deepNavy/15 pt-3">
                  {exp.tech.slice(0, 4).map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded border border-deepNavy bg-ivory font-mono text-[11px] font-bold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
