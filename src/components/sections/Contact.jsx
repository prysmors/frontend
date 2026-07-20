import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Turnstile } from "@marsidev/react-turnstile";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import Reveal from "../../hooks/useReveal";
import { COMPANY } from "../../data/content";

const INPUT_CLASS =
  "w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] px-4 py-3 text-sm text-[var(--color-text)] placeholder-[var(--color-text-dim)] outline-none transition-all focus:border-[var(--color-mint)] focus:ring-2 focus:ring-[var(--color-mint)]/15";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnjeqjpa";

export default function Contact() {
  const formRef = useRef(null);
  const [token, setToken] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    if (!token) {
      setErrors([{ message: "Please complete the security check." }]);
      return;
    }

    setSubmitting(true);

    const data = new FormData(formRef.current);
    data.append("cf-turnstile-response", token);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSucceeded(true);
      } else {
        const body = await res.json();
        setErrors(body.errors || [{ message: "Something went wrong." }]);
      }
    } catch {
      setErrors([{ message: "Network error. Please try again." }]);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* glow */}
      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full opacity-10 blur-[130px]"
        style={{ background: "radial-gradient(circle, var(--color-mint) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-px relative z-10">
        <Reveal className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-[var(--color-mint)]">
            Contact
          </span>
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] text-[var(--color-text)] sm:text-5xl">
            Let&apos;s Build Smarter{" "}
            <span className="text-gradient">Decisions Together</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[var(--color-text-muted)]">
            Tell us about your enterprise. A senior solutions architect will reach out within one business day.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-[1fr_1.4fr]">
          {/* Contact info */}
          <Reveal y={20} className="flex h-full flex-1 flex-col gap-6">
            <ContactCard
              icon={<MapPin size={18} />}
              label="Headquarters"
              value={COMPANY.address}
              href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY.address)}`}
            />
            <ContactCard
              icon={<Phone size={18} />}
              label="Phone"
              value={COMPANY.phone}
              href={COMPANY.phoneHref}
            />
            <ContactCard
              icon={<Mail size={18} />}
              label="Email"
              value={COMPANY.email}
              href={`mailto:${COMPANY.email}`}
            />

            {/* Google Map */}
            <div className="flex-1 overflow-hidden rounded-2xl border border-[var(--color-border)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2492.4715812652325!2d-122.43380202411643!3d37.77663167198491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581762731c37f%3A0xe31f6c706ca2cfa1!2s555%20Fulton%20St%20C140%2C%20San%20Francisco%2C%20CA%2094102%2C%20USA!5e1!3m2!1sen!2slk!4v1784520462459!5m2!1sen!2slk"
                width="600"
                height="450"
                style={{ border: 0, width: "100%", height: "100%" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Prysmors headquarters location"
                className="h-[220px] min-h-full sm:h-[280px] lg:h-auto"
              />
            </div>
          </Reveal>

          {/* Form */}
          <Reveal y={20} delay={0.1} className="flex h-full flex-col">
            {succeeded ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full flex-col items-center justify-center rounded-3xl border border-[var(--color-mint)]/30 bg-[var(--color-surface)]/80 p-12 text-center"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-mint-deep)] text-[var(--color-mint)]">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="mb-3 font-display text-2xl font-bold text-[var(--color-text)]">
                  Message Received
                </h3>
                <p className="max-w-xs text-sm text-[var(--color-text-muted)]">
                  A solutions architect from Prysmors will be in touch within one business day.
                </p>
              </motion.div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="h-full rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]/80 p-8 backdrop-blur-sm"
                noValidate
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-[var(--color-text-muted)]">
                      Full Name <span className="text-[var(--color-mint)]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      className={INPUT_CLASS}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-[var(--color-text-muted)]">
                      Work Email <span className="text-[var(--color-mint)]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className={INPUT_CLASS}
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label htmlFor="company" className="mb-1.5 block text-xs font-semibold text-[var(--color-text-muted)]">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company name"
                    className={INPUT_CLASS}
                  />
                </div>

                <div className="mt-4">
                  <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-[var(--color-text-muted)]">
                    Message <span className="text-[var(--color-mint)]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="How can we help your organization?"
                    className={`${INPUT_CLASS} resize-none`}
                  />
                </div>

                <div className="mt-5 flex justify-center">
                  <Turnstile
                    siteKey={import.meta.env.DEV ? "1x00000000000000000000AA" : "0x4AAAAAAD0x5xjDG0urBeMF"}
                    onSuccess={setToken}
                    options={{ theme: "dark" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-mint mt-4 w-full justify-center disabled:opacity-70"
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#06110d]/30 border-t-[#06110d]" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={16} />
                      Send Message
                    </span>
                  )}
                </button>

                {errors.length > 0 && errors.map((e, i) => (
                  <p key={i} className="mt-3 text-center text-xs text-red-400">
                    {e.message}
                  </p>
                ))}

                <p className="mt-4 text-center text-[11px] text-[var(--color-text-dim)]">
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, label, value, href }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group flex items-start gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/60 p-5 transition-all hover:border-[var(--color-mint)]/30 hover:bg-[var(--color-surface)]"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-mint-deep)] text-[var(--color-mint)]">
        {icon}
      </span>
      <div>
        <p className="mb-0.5 text-[11px] font-semibold uppercase tracking-wide text-[var(--color-text-dim)]">
          {label}
        </p>
        <p className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-mint)] transition-colors">
          {value}
        </p>
      </div>
    </a>
  );
}
