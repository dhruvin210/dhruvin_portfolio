import { useState } from "react";
import { Sparkles, Network } from "lucide-react";

const dnaEcosystem = [
  {
    branch: "LANGUAGES",
    color: "bg-electricBlue text-white border-deepNavy",
    accent: "#315CFF",
    technologies: [
      { name: "TypeScript", connections: ["React.js", "Next.js", "Node.js", "Prisma", "Express.js"], role: "Strict type safety across full-stack client, server, and ORM schemas." },
      { name: "JavaScript", connections: ["React.js", "Node.js", "Express.js", "jQuery"], role: "Asynchronous runtime and DOM manipulation logic." },
      { name: "Python", connections: ["OpenCV", "Deep Learning", "FastAPI"], role: "Computer vision encoding pipelines and numerical preprocessing." },
      { name: "Java", connections: ["Algorithms", "Data Structures"], role: "Algorithmic foundation and memory structures." },
      { name: "C/C++", connections: ["System Architecture"], role: "Low-level resource understanding and operating system principles." }
    ]
  },
  {
    branch: "FRONTEND",
    color: "bg-mint text-deepNavy border-deepNavy",
    accent: "#42D6A4",
    technologies: [
      { name: "React.js", connections: ["TypeScript", "Next.js", "Tailwind CSS", "REST APIs"], role: "Component hierarchy, custom hooks, and dynamic dashboards." },
      { name: "Next.js", connections: ["React.js", "TypeScript", "Medusa.js"], role: "Full-stack routing, storefront SSR, and optimized production builds." },
      { name: "Tailwind CSS", connections: ["React.js", "Next.js"], role: "Utility design systems, responsive layouts, and modern aesthetics." },
      { name: "Redux", connections: ["React.js"], role: "Predictable centralized state management for complex UI trees." }
    ]
  },
  {
    branch: "BACKEND & APIS",
    color: "bg-limeTech text-deepNavy border-deepNavy",
    accent: "#B7E94C",
    technologies: [
      { name: "Node.js", connections: ["Express.js", "TypeScript", "Prisma", "MongoDB", "MySQL"], role: "High-throughput server runtime handling concurrent requests." },
      { name: "Express.js", connections: ["Node.js", "REST APIs", "JWT Auth"], role: "RESTful route routing, input validation middleware, and auth security." },
      { name: "FastAPI", connections: ["Python", "REST APIs"], role: "Asynchronous backend endpoints and rapid API prototyping." },
      { name: "REST APIs", connections: ["Express.js", "Next.js", "FastAPI"], role: "Contract-first endpoint design with structured error handling." }
    ]
  },
  {
    branch: "DATA & PERSISTENCE",
    color: "bg-orangeTech text-deepNavy border-deepNavy",
    accent: "#FF9F43",
    technologies: [
      { name: "PostgreSQL", connections: ["Prisma", "Node.js", "SQL"], role: "Relational ACID transactions, structured schemas, and indexing." },
      { name: "MySQL", connections: ["Node.js", "Express.js", "SQL"], role: "Relational querying with optimized indexing cutting response by 35%–40%." },
      { name: "MongoDB", connections: ["Node.js", "Express.js"], role: "Document persistence for flexible session memory and research records." },
      { name: "Prisma", connections: ["TypeScript", "PostgreSQL", "Node.js"], role: "Type-safe ORM generating automated migrations and query builders." }
    ]
  },
  {
    branch: "COMMERCE & CMS",
    color: "bg-coral text-white border-deepNavy",
    accent: "#FF6B5E",
    technologies: [
      { name: "Medusa.js", connections: ["Next.js", "TypeScript", "Node.js"], role: "Headless e-commerce platform powering the KUDLZ storefront at NextDynamix." },
      { name: "Strapi", connections: ["Next.js", "REST APIs"], role: "Headless content management system organizing marketing and catalogue content." }
    ]
  },
  {
    branch: "SYSTEMS & DEVOPS",
    color: "bg-softYellow text-deepNavy border-deepNavy",
    accent: "#FFD95A",
    technologies: [
      { name: "Docker", connections: ["Linux", "GitHub Actions"], role: "Containerized reproducible multi-service application environments." },
      { name: "GitHub Actions", connections: ["Docker", "Git"], role: "Automated CI/CD test verification and deployment pipelines." },
      { name: "Linux", connections: ["Docker", "Node.js"], role: "Server environment operations, shell scripting, and process execution." }
    ]
  },
  {
    branch: "CLINICAL AI & VISION",
    color: "bg-lavender text-deepNavy border-deepNavy",
    accent: "#A78BFA",
    technologies: [
      { name: "OpenCV", connections: ["Python", "Deep Learning"], role: "Real-time webcam video stream decoding, face detection, and bounding boxes." },
      { name: "Deep Learning", connections: ["OpenCV", "Python"], role: "128-dimensional facial embedding classification achieving ~94% accuracy." },
      { name: "AI/ML Integration", connections: ["React.js", "Node.js"], role: "Clinical evidence ranking (PubMed/OpenAlex) and diagnostic symptom scoring." }
    ]
  }
];

function Skills() {
  const [hoveredTech, setHoveredTech] = useState(null);

  // Check if a skill is connected to the currently hovered skill
  const isConnected = (techName) => {
    if (!hoveredTech) return true;
    if (hoveredTech.name === techName) return true;
    return hoveredTech.connections.includes(techName);
  };

  return (
    <section
      id="stack-dna"
      className="relative py-24 sm:py-32 px-4 sm:px-8 border-b-2 border-deepNavy bg-[#FFF9F0]"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-12 border-b border-deepNavy/15 font-mono text-xs font-bold text-deepNavy">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-limeTech" />
            <span className="bg-limeTech/40 px-2.5 py-0.5 rounded border border-deepNavy">
              WORLD 05 // LIVING STACK DNA
            </span>
          </div>

          <span className="hidden sm:inline text-deepNavy/70">
            [INTERCONNECTED ECOSYSTEM] HOVER ANY NODE TO ILLUMINATE PATHWAY
          </span>
        </div>

        {/* Section Title */}
        <div className="max-w-4xl mb-12">
          <h2 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-deepNavy uppercase leading-[0.9]">
            STACK DNA.
          </h2>
          <p className="mt-6 font-sans text-base sm:text-xl text-deepNavy/80 max-w-2xl font-normal leading-relaxed">
            Technologies do not live in isolation — they form an interconnected ecosystem. Hover any technology to see its dependency connections across client, server, and data tiers.
          </p>
        </div>

        {/* Master Ecosystem Grid */}
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
          {/* Left Column: Interconnected Technology Constellation */}
            <div className="border-y-2 border-deepNavy bg-white/60 p-5 sm:p-8 lg:space-y-6">
            <div className="flex items-center justify-between pb-3 border-b-2 border-deepNavy font-mono text-xs font-bold text-deepNavy">
              <span className="flex items-center gap-2">
                <Network className="h-4 w-4 text-electricBlue" />
                DHRUVIN&apos;S LIVING STACK TOPOLOGY
              </span>
              <span className="text-[10px] text-electricBlue uppercase">
                {hoveredTech ? `[ACTIVE: ${hoveredTech.name}]` : "[HOVER ANY NODE]"}
              </span>
            </div>

            {/* Branches List */}
            <div className="space-y-5">
              {dnaEcosystem.map((branch) => (
                  <div key={branch.branch} className="border-t border-deepNavy/15 pt-4 first:border-0 first:pt-0">
                  <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold text-deepNavy">
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: branch.accent }} />
                    <span>{branch.branch}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {branch.technologies.map((tech) => {
                      const active = isConnected(tech.name);
                      const isSelf = hoveredTech?.name === tech.name;

                      return (
                        <button
                          key={tech.name}
                          type="button"
                          aria-pressed={isSelf}
                          onMouseEnter={() => setHoveredTech(tech)}
                          onMouseLeave={() => setHoveredTech(null)}
                          onFocus={() => setHoveredTech(tech)}
                          onBlur={() => setHoveredTech(null)}
                          onClick={() => setHoveredTech(isSelf ? null : tech)}
                          className={`px-3 py-1.5 rounded-xl border-2 border-deepNavy font-mono text-xs font-bold transition-all duration-200 ${
                            isSelf
                              ? "bg-deepNavy text-white shadow-brutalSm scale-105"
                              : active
                              ? `${branch.color} shadow-brutalSm hover:scale-105`
                              : "bg-white text-deepNavy/30 border-deepNavy/20 opacity-40"
                          }`}
                        >
                          {tech.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic Node Inspector Console */}
            <div className="border-y-2 border-deepNavy bg-limeTech/35 p-5 font-mono sm:p-8 lg:sticky lg:top-28">
            <div className="flex items-center justify-between pb-3 mb-6 border-b-2 border-deepNavy text-xs font-bold text-deepNavy">
              <span className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-electricBlue" />
                ECOSYSTEM INSPECTOR
              </span>
              <span className="bg-white px-2 py-0.5 rounded border border-deepNavy text-[10px]">
                LIVE SPEC
              </span>
            </div>

            {hoveredTech ? (
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] text-deepNavy/70 uppercase block">INSPECTED TECHNOLOGY</span>
                  <h3 className="font-display font-extrabold text-3xl uppercase tracking-tight text-deepNavy mt-1">
                    {hoveredTech.name}
                  </h3>
                </div>

                <div className="p-4 rounded-xl border-2 border-deepNavy bg-white space-y-1">
                  <span className="text-[10px] text-electricBlue font-bold uppercase block">[PRODUCTION ROLE]</span>
                  <p className="font-sans text-xs text-deepNavy leading-relaxed">
                    {hoveredTech.role}
                  </p>
                </div>

                <div className="p-4 rounded-xl border-2 border-deepNavy bg-white space-y-2">
                  <span className="text-[10px] text-deepNavy/70 font-bold uppercase block">[CONNECTED PATHWAYS]</span>
                  <div className="flex flex-wrap gap-1.5">
                    {hoveredTech.connections.map((conn) => (
                      <span key={conn} className="px-2 py-0.5 rounded border border-deepNavy bg-softYellow text-xs font-bold">
                        → {conn}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 space-y-3">
                <div className="grid h-12 w-12 place-items-center rounded-full border-2 border-deepNavy bg-softYellow mx-auto shadow-brutalSm">
                  <Network className="h-6 w-6 text-deepNavy" />
                </div>
                <p className="font-display font-bold text-base text-deepNavy uppercase">
                  HOVER OVER A TECHNOLOGY
                </p>
                <p className="font-sans text-xs text-deepNavy/70 max-w-xs mx-auto leading-relaxed">
                  Hover over React, TypeScript, Node, Medusa, or OpenCV to inspect real architectural dependencies across the stack.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
