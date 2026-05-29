import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { profile } from "../data/portfolio";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const initialForm = { name: "", email: "", subject: "", message: "" };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Please share your name.";
  if (!form.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "Enter a valid email.";
  if (!form.subject.trim()) errors.subject = "Add a short subject.";
  if (!form.message.trim() || form.message.trim().length < 15)
    errors.message = "A few sentences help me reply with care.";
  return errors;
}

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState("");

  const update = (key, value) => {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const submit = (event) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const url =
      `mailto:${profile.email}?subject=${encodeURIComponent(form.subject)}` +
      `&body=${encodeURIComponent(`Hi Dhruvin,\n\nI'm ${form.name}.\n\n${form.message}\n\nReply: ${form.email}`)}`;

    setToast("Opening your email client with the message draft.");
    setForm(initialForm);
    setTimeout(() => {
      window.location.href = url;
      setToast("");
    }, 700);
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <span className="section-eyebrow">Contact</span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight md:text-5xl">
            Let’s create something <span className="text-gradient">amazing together</span>
          </h2>
          <p className="mt-3 text-slate-300">
            Reach out for full-time roles, freelance projects, or AI consultations. I usually reply within a day.
          </p>
        </motion.div>

        <div className="grid items-start gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="glass gradient-border relative overflow-hidden rounded-3xl p-6"
          >
            <div className="absolute -top-24 -right-24 h-60 w-60 rounded-full bg-brand-purple/30 blur-3xl" />

            <div className="relative mb-6 flex items-center gap-4">
              <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 shadow-glow">
                <img
                  src={`${import.meta.env.BASE_URL}profile-photo.jpg`}
                  alt={`Portrait of ${profile.name}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-grad-soft mix-blend-overlay" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Say Hello</p>
                <h3 className="font-display text-2xl font-semibold">{profile.name}</h3>
                <p className="text-sm text-brand-cyan">{profile.role}</p>
              </div>
            </div>

            <p className="text-sm text-slate-400">
              Whether you’re hiring, building a startup, or exploring an AI idea, I would love to hear from you.
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a href={`mailto:${profile.email}`} className="glass flex items-center gap-3 rounded-2xl p-3 transition hover:translate-x-1">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-purple/20 text-brand-purple">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Email</p>
                    <p className="text-white">{profile.email}</p>
                  </div>
                </a>
              </li>
              <li>
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="glass flex items-center gap-3 rounded-2xl p-3 transition hover:translate-x-1">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-cyan/20 text-brand-cyan">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Phone</p>
                    <p className="text-white">{profile.phone}</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="glass flex items-center gap-3 rounded-2xl p-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-indigo/20 text-brand-indigo">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Location</p>
                    <p className="text-white">{profile.location}</p>
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-brand-purple/60"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-brand-purple/60"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={submit}
            noValidate
            className="glass gradient-border relative overflow-hidden rounded-3xl p-6"
          >
            <div className="absolute -bottom-24 -left-24 h-60 w-60 rounded-full bg-brand-cyan/25 blur-3xl" />

            <div className="grid gap-4 md:grid-cols-2">
              <Field
                label="Your Name"
                value={form.name}
                error={errors.name}
                onChange={(value) => update("name", value)}
                placeholder="John Doe"
              />
              <Field
                label="Email Address"
                value={form.email}
                error={errors.email}
                onChange={(value) => update("email", value)}
                placeholder="you@example.com"
                type="email"
              />
              <div className="md:col-span-2">
                <Field
                  label="Subject"
                  value={form.subject}
                  error={errors.subject}
                  onChange={(value) => update("subject", value)}
                  placeholder="Project, role, idea…"
                />
              </div>
              <div className="md:col-span-2">
                <label className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-slate-400">Message</label>
                <textarea
                  rows={6}
                  value={form.message}
                  onChange={(event) => update("message", event.target.value)}
                  placeholder="Tell me a bit about what you have in mind."
                  className={`w-full resize-none rounded-2xl border bg-white/5 p-4 text-sm text-white outline-none transition focus:border-brand-purple/60 focus:bg-white/10 ${
                    errors.message ? "border-red-400/50" : "border-white/10"
                  }`}
                />
                {errors.message && <p className="mt-1 text-xs text-red-300">{errors.message}</p>}
              </div>
            </div>

            <button type="submit" className="btn-primary mt-6 w-full md:w-auto">
              Send Message <Send className="h-4 w-4" />
            </button>
          </motion.form>
        </div>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="glass fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full px-5 py-3 text-sm shadow-glow"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Field({ label, value, onChange, error, placeholder, type = "text" }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-slate-400">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className={`w-full rounded-2xl border bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-brand-purple/60 focus:bg-white/10 ${
          error ? "border-red-400/50" : "border-white/10"
        }`}
      />
      {error && <p className="mt-1 text-xs text-red-300">{error}</p>}
    </div>
  );
}

export default Contact;
