import { CheckCircle2 } from "lucide-react";
import Reveal from "../../hooks/useReveal";
import { COMPANY } from "../../data/content";
import { aboutIllustration } from "../../assets";

const POINTS = [
  "AI-native decision engine, not a retrofitted dashboard",
  "Real-time predictive analytics across every business function",
  "Built for executive teams across finance, healthcare, retail & gov.",
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-px grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal y={30} className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-3xl border border-[var(--color-border)]">
            <img
              src={aboutIllustration}
              alt="Prysmors about illustration"
              loading="lazy"
              className="h-[420px] w-full object-cover sm:h-[500px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent" />
          </div>
          <div
            className="absolute -bottom-8 -right-6 hidden w-56 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/95 p-5 shadow-[0_25px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:block"
            aria-hidden="true"
          >
            <p className="text-[11px] uppercase tracking-wide text-[var(--color-text-dim)]">Founded</p>
            <p className="font-display text-lg font-bold text-[var(--color-text)]">{COMPANY.founded}</p>
            <div className="my-3 h-px bg-[var(--color-border-soft)]" />
            <p className="text-[11px] uppercase tracking-wide text-[var(--color-text-dim)]">HQ</p>
            <p className="text-sm font-medium text-[var(--color-text)]">San Francisco, CA</p>
          </div>
        </Reveal>

        <Reveal y={30} delay={0.1} className="order-1 lg:order-2">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[var(--color-mint)]">
            About Prysmors
          </span>
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] text-[var(--color-text)] sm:text-5xl">
            Built to close the gap between{" "}
            <span className="text-gradient">data and decisions.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
            Organizations run on fragmented reports and historical dashboards that explain the
            past but rarely guide the future. Prysmors was founded to close that gap — combining
            AI reasoning, predictive modeling and enterprise knowledge into a single decision
            layer that sits above your existing systems.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-text-muted)]">
            Today, executive and operations teams across finance, manufacturing, healthcare,
            retail and government use Prysmors as their intelligent decision layer for proactive
            planning, strategic optimization and continuous business improvement.
          </p>

          <ul className="mt-8 flex flex-col gap-3">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-[var(--color-text)] sm:text-base">
                <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-[var(--color-mint)]" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex items-center gap-4 rounded-2xl border border-[var(--color-border-soft)] bg-[var(--color-surface)]/60 p-4">
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=160&q=80"
              alt={`Portrait of ${COMPANY.founder}, ${COMPANY.founderRole} of ${COMPANY.legalName}`}
              loading="lazy"
              className="h-14 w-14 rounded-full object-cover"
              width={112}
              height={112}
            />
            <div>
              <p className="font-semibold text-[var(--color-text)]">{COMPANY.founder}</p>
              <p className="text-sm text-[var(--color-text-dim)]">
                {COMPANY.founderRole}, {COMPANY.legalName}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
