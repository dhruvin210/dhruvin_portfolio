import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Terminal } from "lucide-react";
import { profile } from "../data/portfolio";

const fragments = [
  { id: "ts", label: "TYPESCRIPT", color: "bg-electricBlue text-white", rot: "-rotate-3", pos: "top-8 left-0 sm:left-5" },
  { id: "react", label: "REACT / NEXT.JS", color: "bg-mint text-deepNavy", rot: "rotate-2", pos: "top-7 right-0 sm:right-8" },
  { id: "node", label: "NODE.JS / REST", color: "bg-limeTech text-deepNavy", rot: "-rotate-2", pos: "bottom-14 left-0 sm:left-12" },
  { id: "sql", label: "SQL / PRISMA", color: "bg-orangeTech text-deepNavy", rot: "rotate-3", pos: "bottom-8 right-0 sm:right-14" },
  { id: "ai", label: "AI / COMPUTER VISION", color: "bg-lavender text-deepNavy", rot: "-rotate-2", pos: "top-1/2 -left-3 hidden md:block" },
  { id: "commerce", label: "MEDUSA / STRAPI", color: "bg-coral text-white", rot: "rotate-2", pos: "top-1/2 -right-3 hidden md:block" }
];

function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const hero = document.getElementById("intro");
    if (!hero || window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches) return undefined;
    const handleMove = (event) => {
      const rect = hero.getBoundingClientRect();
      setMousePos({ x: ((event.clientX - rect.left) / rect.width - 0.5) * 8, y: ((event.clientY - rect.top) / rect.height - 0.5) * 8 });
    };
    const reset = () => setMousePos({ x: 0, y: 0 });
    hero.addEventListener("pointermove", handleMove, { passive: true });
    hero.addEventListener("pointerleave", reset, { passive: true });
    return () => {
      hero.removeEventListener("pointermove", handleMove);
      hero.removeEventListener("pointerleave", reset);
    };
  }, []);

  return (
    <section id="intro" aria-labelledby="hero-title" className="relative flex min-h-[95svh] flex-col justify-between overflow-hidden border-b-2 border-deepNavy px-4 pb-10 pt-28 sm:px-8 sm:pb-14 sm:pt-32">
      <div className="relative mx-auto my-auto w-full max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-deepNavy/15 pb-5 font-mono text-xs font-bold text-deepNavy">
          <span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-electricBlue" /><span className="rounded border border-deepNavy bg-softYellow px-2.5 py-1">DIGITAL FIELD NOTES // 2026</span></span>
          <div className="hidden gap-6 text-[11px] text-deepNavy/65 sm:flex"><span>PUNE, INDIA</span><span>NEXTDYNAMIX TECH</span><span>WEB / APP DEVELOPMENT</span></div>
        </div>

        <div className="relative py-8 text-center sm:py-14">
          <div aria-hidden="true">
            {fragments.map((tag) => <motion.div key={tag.id} animate={{ x: mousePos.x * (tag.id.length % 2 === 0 ? 1.5 : -1.5), y: mousePos.y * (tag.id.length % 2 === 0 ? -1.5 : 1.5) }} transition={{ type: "spring", damping: 30, stiffness: 200 }} className={`absolute ${tag.pos} z-10`}><span className={`tag-fragment ${tag.color} ${tag.rot} shadow-brutalSm select-none`}>{tag.label}</span></motion.div>)}
          </div>
          <motion.div animate={{ x: mousePos.x * 0.5, y: mousePos.y * 0.5 }} transition={{ type: "spring", damping: 40, stiffness: 200 }} className="select-none">
            <h1 id="hero-title" className="font-display text-6xl font-extrabold uppercase leading-[0.8] tracking-[-0.075em] text-deepNavy sm:text-8xl md:text-9xl lg:text-[10.5rem]">DHRUVIN<br /><span className="text-electricBlue [text-shadow:4px_4px_0_#151923]">MALOT</span></h1>
          </motion.div>
          <div className="mx-auto mt-8 max-w-2xl">
            <p className="font-display text-lg font-bold uppercase tracking-tight text-deepNavy sm:text-2xl">Full stack · product systems · AI</p>
            <p className="mt-3 text-sm leading-relaxed text-deepNavy/75 sm:text-base">Trainee — Web/App Development at NextDynamix Tech. I build web applications, APIs, commerce platforms, and AI-powered products.</p>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="#what-i-build" className="btn-play-primary"><span>Explore the work</span><ArrowDown className="h-4 w-4" /></a>
            <a href={profile.resumePath} target="_blank" rel="noreferrer" className="btn-play-white"><span>Open resume (PDF)</span><ArrowUpRight className="h-4 w-4" /></a>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-deepNavy/15 pt-4 font-mono text-[10px] font-bold text-deepNavy/65 sm:text-[11px]">
          <div className="flex items-center gap-2"><Terminal className="h-3.5 w-3.5 text-electricBlue" /><span>MERN · TYPESCRIPT · REST APIS · SQL · MEDUSA.JS · STRAPI · DOCKER · AI</span></div>
          <div className="flex items-center gap-4 text-deepNavy"><a href={profile.socials.github} target="_blank" rel="noreferrer" className="hover:text-electricBlue">GITHUB ↗</a><a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-electricBlue">LINKEDIN ↗</a><a href={profile.socials.email} className="hover:text-coral">EMAIL ↗</a></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
