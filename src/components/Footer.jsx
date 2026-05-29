import { profile } from "../data/portfolio";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-400 md:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Crafted with React, Three.js & Framer Motion.
        </p>
        <div className="flex items-center gap-3">
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:border-brand-purple/60 hover:text-white">
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:border-brand-purple/60 hover:text-white">
            <GithubIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
