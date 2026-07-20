import { CheckCircle2 } from "lucide-react";
import Reveal from "../../hooks/useReveal";
import { COMPANY } from "../../data/content";
import { aboutIllustration } from "../../assets";

const POINTS = [
  "AI-native decision intelligence built for modern enterprises",
  "Predictive insights that help teams stay ahead of risks and opportunities",
  "Designed for executive leaders across finance, healthcare, retail, manufacturing, and government",
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
              className="h-[280px] w-full object-cover sm:h-[420px] md:h-[500px]"
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
          <h2 className="font-display text-3xl font-extrabold leading-[1.1] text-[var(--color-text)] sm:text-4xl md:text-5xl">
            Built for{" "}
            <span className="text-gradient">Better Business Decisions</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
            Every organization generates valuable data, but turning that data into confident decisions remains one of the biggest challenges for modern enterprises. Teams often work with disconnected systems and historical reports that explain what has already happened but offer little guidance on what comes next.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-text-muted)]">
            Prysmors was created to change that. By combining AI-powered reasoning, predictive analytics, scenario modeling, and enterprise knowledge into a unified platform, Prysmors helps organizations move beyond reporting and toward intelligent, forward-looking decision-making.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-text-muted)]">
            From executive boardrooms to operational teams, organizations across finance, manufacturing, healthcare, retail, and the public sector rely on Prysmors to uncover insights faster, anticipate change, reduce uncertainty, and make strategic decisions with confidence.
          </p>

          <ul className="mt-8 flex flex-col gap-3">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-[var(--color-text)] sm:text-base">
                <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-[var(--color-mint)]" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
