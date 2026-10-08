import { useState } from "react";
import { ArrowUpRight, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { featuredProject, secondaryProjects } from "../data/portfolio";
import { GithubIcon } from "./BrandIcons";

const universeProjects = [
  {
    id: "aurevia",
    num: "PROJECT 01",
    title: "AUREVIA",
    subtitle: "AI Medical Research Copilot",
    themeBg: "bg-electricBlue text-white",
    cardBg: "bg-white text-deepNavy",
    accentBadge: "bg-lavender text-deepNavy",
    color: "#315CFF",
    summary:
      "Engineered a production MERN platform that aggregates 10,000+ PubMed, OpenAlex, and ClinicalTrials.gov entries into a real-time clinical evidence engine — cutting estimated manual research lookup time by 60% for target users.",
    stack: ["MERN Stack", "TypeScript", "REST APIs", "AI Copilot", "PubMed API", "OpenAlex"],
    metrics: [
      { label: "Research Entries Indexed", value: "10,000+" },
      { label: "External Research APIs", value: "3" },
                    { label: "Estimated lookup time saved", value: "60%" }
    ],
    liveUrl: "https://aurevia-x.vercel.app/",
    githubUrl: "https://github.com/dhruvin210",
    slug: "aurevia",
    visualType: "aurevia"
  },
  {
    id: "nexawell",
    num: "PROJECT 02",
    title: "NEXAWELL",
    subtitle: "AI Digital Health Platform",
    themeBg: "bg-mint text-deepNavy",
    cardBg: "bg-white text-deepNavy",
    accentBadge: "bg-deepNavy text-white",
    color: "#42D6A4",
    summary:
      "Architected a multi-role healthcare platform (patient · doctor · admin) serving appointment scheduling, EHR management, and real-time chat — integrated an AI symptom checker that improved self-diagnosis accuracy by 40%.",
    stack: ["MERN Stack", "Tailwind CSS", "AI Integration", "RBAC", "Real-Time Chat"],
    metrics: [
      { label: "Diagnosis Accuracy Improvement", value: "+40%" },
      { label: "Role Workspaces", value: "3 Roles" },
      { label: "Clinical Messaging", value: "Real-Time" }
    ],
    liveUrl: null,
    githubUrl: "https://github.com/dhruvin210",
    slug: "nexawell",
    visualType: "nexawell"
  },
  {
    id: "face-recog",
    num: "PROJECT 03",
    title: "FACE RECOGNITION",
    subtitle: "Computer Vision & Deep Embeddings",
    themeBg: "bg-orangeTech text-deepNavy",
    cardBg: "bg-white text-deepNavy",
    accentBadge: "bg-softYellow text-deepNavy",
    color: "#FF9F43",
    summary:
      "Achieved ~94% recognition accuracy across 50+ subjects by training deep-learning facial embeddings with OpenCV, with live webcam integration, bounding-box overlay, and name annotation.",
    stack: ["Python", "OpenCV", "Deep Learning", "Batch Preprocessing"],
    metrics: [
      { label: "Model Recognition Accuracy", value: "~94%" },
      { label: "Subjects Classified", value: "50+ Subjects" },
      { label: "Inference Latency Cut", value: "30%" }
    ],
    liveUrl: null,
    githubUrl: "https://github.com/dhruvin210",
    slug: "celebrity-face-recognition",
    visualType: "vision"
  },
  {
    id: "company-site",
    num: "PROJECT 04",
    title: "COMPANY PLATFORM",
    subtitle: "Full Stack Management & Catalogue",
    themeBg: "bg-coral text-white",
    cardBg: "bg-white text-deepNavy",
    accentBadge: "bg-softYellow text-deepNavy",
    color: "#FF6B5E",
    summary:
      "Delivered a production-grade company website with admin panel, product catalogue, and customer inquiry management — secured via JWT-based authentication, reducing admin overhead by 25%.",
    stack: ["MERN Stack", "REST APIs", "JWT Auth", "Admin Panel"],
    metrics: [
      { label: "Admin Operational Overhead", value: "-25%" },
      { label: "Route Security", value: "100% JWT" },
      { label: "Catalogue Workflows", value: "Full CRUD" }
    ],
    liveUrl: null,
    githubUrl: "https://github.com/dhruvin210",
    slug: "company-website",
    visualType: "company"
  }
];

function Projects() {
  const [activeProject, setActiveProject] = useState(universeProjects[0]);
  const [activeRole, setActiveRole] = useState("PATIENT");

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 px-4 sm:px-8 border-b-2 border-deepNavy bg-ivory"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-12 border-b border-deepNavy/15 font-mono text-xs font-bold text-deepNavy">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-lavender" />
            <span className="bg-lavender/40 px-2.5 py-0.5 rounded border border-deepNavy">
              WORLD 04 // PROJECT UNIVERSE
            </span>
          </div>

          <span className="hidden sm:inline text-deepNavy/70">
            [INTERACTIVE SELECTOR] 4 PRODUCTION SYSTEMS &amp; SCIENTIFIC PIPELINES
          </span>
        </div>

        {/* Section Title */}
        <div className="max-w-4xl mb-12">
          <h2 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight text-deepNavy uppercase leading-[0.9]">
            PROJECT UNIVERSE.
          </h2>
          <p className="mt-6 font-sans text-base sm:text-xl text-deepNavy/80 max-w-2xl font-normal leading-relaxed">
            Every project has a distinct architectural grammar and visual identity. Select a system from the universe index to explore its data pipeline.
          </p>
        </div>

        {/* Project index as a color-coded system map */}
        <div className="relative mb-10 grid grid-cols-2 gap-3 font-mono text-xs font-bold md:grid-cols-4">
          {universeProjects.map((proj) => {
            const isSelected = activeProject.id === proj.id;
            return (
              <button
                key={proj.id}
                type="button"
                onClick={() => setActiveProject(proj)}
                aria-pressed={isSelected}
                className={`p-4 text-left transition-all duration-200 border-t-4 border-deepNavy ${
                  isSelected
                    ? `${proj.themeBg} shadow-brutal -translate-y-1`
                    : "bg-white/70 text-deepNavy hover:bg-white"
                }`}
              >
                <span className="text-[10px] opacity-80 block">{proj.num}</span>
                <span className="font-display font-bold text-sm sm:text-base uppercase tracking-tight block">
                  {proj.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* ============================================================== */}
        {/* ACTIVE PROJECT SHOWCASE STAGE */}
        {/* ============================================================== */}
        <div className="border-2 border-deepNavy bg-white p-5 shadow-brutalLg sm:p-10">
          {/* Header Bar */}
          <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b-2 border-deepNavy">
            <div>
              <span className={`px-2.5 py-1 rounded-md border border-deepNavy font-mono text-xs font-bold uppercase ${activeProject.accentBadge}`}>
                {activeProject.num} // {activeProject.subtitle}
              </span>
              <h3 className="font-display font-extrabold text-4xl sm:text-6xl uppercase tracking-tight text-deepNavy mt-3">
                {activeProject.title}
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {activeProject.liveUrl && (
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-play-primary"
                >
                  <span>LIVE DEMO</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}

              <Link
                to={`/projects/${activeProject.slug}`}
                className="btn-play-white"
              >
                <span>SPEC DETAILS</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <a
                href={activeProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="grid h-11 w-11 place-items-center rounded-xl border-2 border-deepNavy bg-white text-deepNavy shadow-brutalSm hover:bg-ivory"
                aria-label="GitHub Repository"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* DYNAMIC PIPELINE VISUALIZATION BASED ON ACTIVE PROJECT */}
          <div className="py-8 border-b-2 border-deepNavy">
            {activeProject.visualType === "aurevia" && (
              <div className="rounded-2xl border-2 border-deepNavy bg-electricBlue/10 p-6 space-y-4 font-mono">
                <span className="text-xs font-bold text-deepNavy uppercase block">
                  [AUREVIA CONVERGING CLINICAL EVIDENCE PIPELINE]
                </span>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-xs">
                  <div className="p-3 bg-white border-2 border-deepNavy rounded-xl text-center shadow-brutalSm">
                    <span className="font-bold text-electricBlue block">PUBMED API</span>
                    <span className="text-[10px] text-deepNavy/70">10,000+ Records</span>
                  </div>
                  <div className="p-3 bg-white border-2 border-deepNavy rounded-xl text-center shadow-brutalSm">
                    <span className="font-bold text-electricBlue block">OPENALEX</span>
                    <span className="text-[10px] text-deepNavy/70">Clinical Citations</span>
                  </div>
                  <div className="p-3 bg-white border-2 border-deepNavy rounded-xl text-center shadow-brutalSm">
                    <span className="font-bold text-electricBlue block">CLINICALTRIALS</span>
                    <span className="text-[10px] text-deepNavy/70">Trials.gov Pipeline</span>
                  </div>
                  <div className="p-3 bg-electricBlue text-white border-2 border-deepNavy rounded-xl text-center shadow-brutalSm font-bold">
                    NODE / EXPRESS
                    <span className="text-[10px] opacity-80 block">Evidence Engine</span>
                  </div>
                  <div className="p-3 bg-lavender border-2 border-deepNavy rounded-xl text-center shadow-brutalSm font-bold">
                    REACT DASHBOARD
                    <span className="text-[10px] text-deepNavy block">-60% Lookup Time</span>
                  </div>
                </div>
              </div>
            )}

            {activeProject.visualType === "nexawell" && (
              <div className="rounded-2xl border-2 border-deepNavy bg-mint/20 p-6 space-y-4 font-mono">
                <div className="flex items-center justify-between text-xs font-bold text-deepNavy">
                  <span>[NEXAWELL LIVING ROLE MATRIX]</span>
                  <span className="text-electricBlue">SELECT ROLE TO INSPECT:</span>
                </div>

                {/* 3 Role Selectors */}
                <div className="grid grid-cols-3 gap-3">
                  {["PATIENT", "DOCTOR", "ADMIN"].map((r) => (
                    <button
                      key={r}
                      type="button"
                      aria-pressed={activeRole === r}
                      onClick={() => setActiveRole(r)}
                      className={`p-3 rounded-xl border-2 border-deepNavy font-bold transition-all ${
                        activeRole === r
                          ? "bg-mint text-deepNavy shadow-brutalSm scale-102"
                          : "bg-white text-deepNavy hover:bg-mint/30"
                      }`}
                    >
                      ROLE // {r}
                    </button>
                  ))}
                </div>

                {/* Dynamic Role Capability Callout */}
                <div className="p-4 rounded-xl border-2 border-deepNavy bg-white text-xs space-y-1">
                  <span className="font-bold text-electricBlue block">[{activeRole} WORKFLOWS ACTIVE]</span>
                  {activeRole === "PATIENT" && (
                    <p className="font-sans text-deepNavy">
                      Appointment scheduling, personal EHR records, real-time consultation messaging, and AI symptom checker (+40% accuracy).
                    </p>
                  )}
                  {activeRole === "DOCTOR" && (
                    <p className="font-sans text-deepNavy">
                      Patient medical history inspector, consultation triage queues, prescription logs, and secure clinical chat.
                    </p>
                  )}
                  {activeRole === "ADMIN" && (
                    <p className="font-sans text-deepNavy">
                      Role-based access control (RBAC), user authentication auditing, clinic operations, and food detection pipeline.
                    </p>
                  )}
                </div>
              </div>
            )}

            {activeProject.visualType === "vision" && (
              <div className="rounded-2xl border-2 border-deepNavy bg-orangeTech/20 p-6 space-y-4 font-mono text-xs">
                <span className="font-bold text-deepNavy uppercase block">
                  [OPENCV VECTOR FACE SCANNER &amp; EMBEDDINGS PIPELINE]
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
                  <div className="p-3 bg-white border-2 border-deepNavy rounded-xl font-bold shadow-brutalSm">
                    01 // WEBCAM STREAM
                    <span className="text-[10px] text-deepNavy/70 block">Live Input Feed</span>
                  </div>
                  <div className="p-3 bg-white border-2 border-deepNavy rounded-xl font-bold shadow-brutalSm">
                    02 // BATCH ENCODING
                    <span className="text-[10px] text-orangeTech block">-30% Latency Cut</span>
                  </div>
                  <div className="p-3 bg-white border-2 border-deepNavy rounded-xl font-bold shadow-brutalSm">
                    03 // DEEP EMBEDDINGS
                    <span className="text-[10px] text-deepNavy/70 block">Facial Vector Space</span>
                  </div>
                  <div className="p-3 bg-orangeTech text-deepNavy border-2 border-deepNavy rounded-xl font-bold shadow-brutalSm">
                    04 // CLASSIFIER
                    <span className="text-[10px] block">~94% Accuracy (50+ Subjects)</span>
                  </div>
                </div>
              </div>
            )}

            {activeProject.visualType === "company" && (
              <div className="rounded-2xl border-2 border-deepNavy bg-coral/20 p-6 space-y-4 font-mono text-xs">
                <span className="font-bold text-deepNavy uppercase block">
                  [STOREFRONT TO ADMIN INQUIRY CRUD ARCHITECTURE]
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
                  <div className="p-3 bg-white border-2 border-deepNavy rounded-xl font-bold shadow-brutalSm">
                    STOREFRONT UI
                    <span className="text-[10px] text-deepNavy/70 block">Customer Inquiries</span>
                  </div>
                  <div className="p-3 bg-coral text-white border-2 border-deepNavy rounded-xl font-bold shadow-brutalSm">
                    JWT AUTH GATEWAY
                    <span className="text-[10px] opacity-90 block">Secured Endpoints</span>
                  </div>
                  <div className="p-3 bg-white border-2 border-deepNavy rounded-xl font-bold shadow-brutalSm">
                    ADMIN CRUD WORKFLOW
                    <span className="text-[10px] text-coral font-bold block">-25% Admin Overhead</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Project Details & Metrics Grid */}
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] pt-8 items-start">
            <div>
              <p className="font-sans text-base sm:text-lg text-deepNavy leading-relaxed mb-6 font-normal">
                {activeProject.summary}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {activeProject.stack.map((s) => (
                  <span key={s} className="tag-fragment bg-softYellow/40 text-deepNavy">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Verified Metrics Counter */}
            <div className="grid grid-cols-3 gap-3 font-mono">
              {activeProject.metrics.map((m) => (
                <div
                  key={m.label}
                    className="border-t-2 border-deepNavy bg-ivory p-3.5 text-center"
                >
                  <span className="font-display font-extrabold text-2xl text-deepNavy block">
                    {m.value}
                  </span>
                  <span className="text-[10px] font-bold text-deepNavy/70 uppercase block mt-1">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
