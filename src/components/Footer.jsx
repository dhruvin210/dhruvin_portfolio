import { ArrowUpRight } from "lucide-react";
import { profile } from "../data/portfolio";

function Footer() {
  return (
    <footer className="bg-deepNavy px-6 py-10 text-ivory sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 border-b border-white/20 pb-8 md:flex-row md:items-end">
        <div>
          <p className="font-display text-2xl font-extrabold uppercase">{profile.name}</p>
          <p className="mt-1 font-mono text-xs uppercase tracking-wider text-white/65">
            Full stack · systems · product engineering
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs font-bold uppercase">
          <a className="transition hover:text-softYellow" href={profile.socials.github} target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight className="inline h-3 w-3" />
          </a>
          <a className="transition hover:text-softYellow" href={profile.socials.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight className="inline h-3 w-3" />
          </a>
          <a className="transition hover:text-softYellow" href={profile.socials.email}>Email</a>
          <a className="transition hover:text-softYellow" href={profile.resumePath} target="_blank" rel="noreferrer">Resume</a>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 pt-5 font-mono text-[10px] uppercase tracking-wide text-white/55 sm:flex-row">
        <span>© {new Date().getFullYear()} Dhruvin Malot · Pune, India</span>
        <a className="hover:text-white" href="#intro">Back to the beginning ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
