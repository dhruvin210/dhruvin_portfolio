import { useState } from "react";
import { Sparkles } from "lucide-react";

const pipelineStages = [
  { num: "01", title: "UNDERSTAND", color: "bg-electricBlue text-white", desc: "Deconstruct the user journey, isolate business edge cases, and establish non-functional requirements (SLAs, concurrency)." },
  { num: "02", title: "DESIGN", color: "bg-mint text-deepNavy", desc: "Craft intuitive, accessible interaction states, sub-200ms optimistic feedback loops, and clean component hierarchies." },
  { num: "03", title: "ARCHITECT", color: "bg-softYellow text-deepNavy", desc: "Design relational database schemas (MySQL/PostgreSQL), query indexing strategies, and modular service contracts." },
  { num: "04", title: "BUILD", color: "bg-orangeTech text-deepNavy", desc: "Write type-safe TypeScript code across client and server with robust error boundaries, JWT tokens, and RBAC authorization." },
  { num: "05", title: "INTEGRATE", color: "bg-lavender text-deepNavy", desc: "Connect third-party headless platforms (Medusa.js, Strapi CMS) and external scientific APIs (PubMed, OpenAlex)." },
  { num: "06", title: "TEST", color: "bg-coral text-white", desc: "Enforce strict input validation, harden endpoints against injection vulnerabilities, and execute rigorous QA testing." },
  { num: "07", title: "SHIP", color: "bg-limeTech text-deepNavy", desc: "Containerize via Docker, automate CI/CD using GitHub Actions, and monitor live response throughput on Linux servers." }
];

function Process() {
  const [activeStage, setActiveStage] = useState(pipelineStages[0]);

  return (
    <section
      id="how-i-build"
      className="relative py-24 sm:py-32 px-4 sm:px-8 border-b-2 border-deepNavy bg-[#FFF3E0]"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-12 border-b border-deepNavy/15 font-mono text-xs font-bold text-deepNavy">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-orangeTech motion-safe:animate-ping" />
            <span className="bg-orangeTech/30 px-2.5 py-0.5 rounded border border-deepNavy">
              05 // HOW I BUILD
            </span>
          </div>

          <span className="hidden sm:inline text-deepNavy/70">
            [PIPELINE LIFECYCLE] UNDERSTAND → ARCHITECT → BUILD → INTEGRATE → SHIP
          </span>
        </div>

        {/* Section Title */}
        <div className="max-w-4xl mb-12">
          <h2 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-deepNavy uppercase leading-[0.9]">
            HOW I BUILD.
          </h2>
          <p className="mt-6 font-sans text-base sm:text-xl text-deepNavy/80 max-w-2xl font-normal leading-relaxed">
            A disciplined product lifecycle that turns raw requirements into resilient, tested production systems.
          </p>
        </div>

        {/* Interactive Pipeline Stage Selector Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-8 font-mono text-xs font-bold">
          {pipelineStages.map((stage) => {
            const isSelected = activeStage.num === stage.num;
            return (
              <button
                key={stage.num}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setActiveStage(stage)}
                className={`p-3 rounded-xl border-2 border-deepNavy text-center transition-all ${
                  isSelected
                    ? `${stage.color} shadow-brutalSm -translate-y-1 font-extrabold`
                    : "bg-white text-deepNavy hover:bg-softYellow/30"
                }`}
              >
                <span className="text-[10px] block opacity-75">{stage.num}</span>
                <span className="font-display font-bold block">{stage.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Callout Box */}
        <div className="rounded-3xl border-2 border-deepNavy bg-white p-6 sm:p-8 shadow-brutal mb-16">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b-2 border-deepNavy font-mono text-xs font-bold">
            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-1 rounded border border-deepNavy ${activeStage.color}`}>
                STAGE {activeStage.num}
              </span>
              <span className="font-display font-bold text-xl uppercase tracking-tight text-deepNavy">
                {activeStage.title}
              </span>
            </div>
            <span className="text-electricBlue">[LIFECYCLE VERIFIED]</span>
          </div>

          <p className="font-sans text-base sm:text-lg text-deepNavy/85 leading-relaxed font-normal">
            {activeStage.desc}
          </p>
        </div>

        {/* ============================================================== */}
        {/* CURRENTLY BUILDING DYNAMIC MODULE */}
        {/* ============================================================== */}
        <div className="rounded-3xl border-2 border-deepNavy bg-mint p-6 sm:p-10 shadow-brutalLg">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b-2 border-deepNavy">
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 rounded-full bg-deepNavy motion-safe:animate-ping" />
              <span className="font-display font-extrabold text-xl sm:text-2xl uppercase tracking-tight text-deepNavy">
                CURRENTLY BUILDING // REAL-TIME DISPATCH
              </span>
            </div>

            <span className="px-3 py-1 rounded-full border-2 border-deepNavy bg-white font-mono text-xs font-bold text-deepNavy shadow-brutalSm">
              JUNE 2026 — PRESENT
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-3 font-mono text-xs">
            <div className="p-5 rounded-2xl border-2 border-deepNavy bg-white shadow-brutalSm space-y-2">
              <span className="font-bold text-electricBlue block">[01 / E-COMMERCE]</span>
              <h4 className="font-display font-bold text-base uppercase text-deepNavy">
                KUDLZ PET COMMERCE
              </h4>
              <p className="font-sans text-deepNavy/80 text-xs leading-relaxed">
                Developing storefront components, Medusa.js backend logic, Strapi CMS catalogue models, and payments integration at NextDynamix Tech.
              </p>
            </div>

            <div className="p-5 rounded-2xl border-2 border-deepNavy bg-white shadow-brutalSm space-y-2">
              <span className="font-bold text-electricBlue block">[02 / SCALABLE BACKENDS]</span>
              <h4 className="font-display font-bold text-base uppercase text-deepNavy">
                REST APIS &amp; ORM
              </h4>
              <p className="font-sans text-deepNavy/80 text-xs leading-relaxed">
                Implementing TypeScript service layers, Prisma ORM database models, JWT token validation, and RBAC authorization.
              </p>
            </div>

            <div className="p-5 rounded-2xl border-2 border-deepNavy bg-white shadow-brutalSm space-y-2">
              <span className="font-bold text-electricBlue block">[03 / DEVOPS &amp; CI/CD]</span>
              <h4 className="font-display font-bold text-base uppercase text-deepNavy">
                DOCKER &amp; PIPELINES
              </h4>
              <p className="font-sans text-deepNavy/80 text-xs leading-relaxed">
                Containerizing multi-service micro-applications, configuring GitHub Actions test workflows, and deploying on Linux environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
