import { ArrowDown, ArrowUpRight, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import { profile } from "../data/portfolio";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const initialForm = { name: "", email: "", subject: "", message: "" };

function Contact() {
  const [form, setForm] = useState(initialForm);

  const update = (key, value) => setForm((current) => ({ ...current, [key]: value }));
  const submit = (event) => {
    event.preventDefault();
    const body = `Name: ${form.name} (${form.email})\n\nMessage:\n${form.message}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
  };

  const inputClass = "w-full rounded-lg border border-deepNavy/30 bg-white/80 px-3 py-3 font-sans text-sm text-deepNavy outline-none transition placeholder:text-deepNavy/40 focus:border-deepNavy focus:ring-2 focus:ring-deepNavy/15";

  return (
    <section id="contact" className="relative overflow-hidden bg-coral px-4 py-20 text-deepNavy sm:px-8 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[36px] border-deepNavy/10 sm:h-96 sm:w-96" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-3 border-b border-deepNavy/30 pb-4 font-mono text-xs font-bold uppercase">
          <span>07 / Open channel</span><span>Good things start with a conversation</span>
        </div>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em]">Have a system in mind?</p>
            <h2 className="mt-5 max-w-3xl font-display text-6xl font-extrabold uppercase leading-[0.84] tracking-tight sm:text-8xl">Let’s make it work.</h2>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-deepNavy/80">I’m interested in thoughtful products, ambitious engineering problems, and teams that care about how things work.</p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs font-bold uppercase">
              <a className="inline-flex items-center gap-2 hover:underline" href={profile.socials.email}><Mail className="h-4 w-4" /> Email</a>
              <a className="inline-flex items-center gap-2 hover:underline" href={`tel:${profile.phone.replace(/\s+/g, "")}`}><Phone className="h-4 w-4" /> {profile.phone}</a>
              <a className="inline-flex items-center gap-2 hover:underline" href={profile.socials.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon className="h-4 w-4" /> LinkedIn <ArrowUpRight className="h-3 w-3" /></a>
              <a className="inline-flex items-center gap-2 hover:underline" href={profile.socials.github} target="_blank" rel="noreferrer"><GithubIcon className="h-4 w-4" /> GitHub <ArrowUpRight className="h-3 w-3" /></a>
            </div>
          </div>
          <form onSubmit={submit} className="rounded-2xl border-2 border-deepNavy bg-ivory p-5 shadow-brutalLg sm:p-7">
            <div className="mb-6 flex items-center justify-between border-b border-deepNavy/20 pb-4 font-mono text-xs font-bold uppercase"><span>Write a note</span><span className="text-deepNavy/50">Direct email</span></div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="font-mono text-[10px] font-bold uppercase">Your name<input required autoComplete="name" className={`${inputClass} mt-2 normal-case`} value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Name" /></label>
              <label className="font-mono text-[10px] font-bold uppercase">Your email<input required type="email" autoComplete="email" className={`${inputClass} mt-2 normal-case`} value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@example.com" /></label>
              <label className="font-mono text-[10px] font-bold uppercase sm:col-span-2">Subject<input required className={`${inputClass} mt-2 normal-case`} value={form.subject} onChange={(e) => update("subject", e.target.value)} placeholder="What would you like to discuss?" /></label>
              <label className="font-mono text-[10px] font-bold uppercase sm:col-span-2">Message<textarea required minLength={10} rows={4} className={`${inputClass} mt-2 resize-y normal-case`} value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="A little context goes a long way…" /></label>
            </div>
            <button type="submit" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg border-2 border-deepNavy bg-deepNavy px-4 py-2 font-mono text-xs font-bold uppercase text-white transition hover:-translate-y-0.5 hover:bg-cobalt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deepNavy">Open email draft <Send className="h-3.5 w-3.5" /></button>
          </form>
        </div>
        <a href="#intro" className="mt-16 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase hover:underline"><ArrowDown className="h-4 w-4 rotate-180" /> Back to the start</a>
      </div>
    </section>
  );
}

export default Contact;
