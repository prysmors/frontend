import {
  BrainCircuit,
  TrendingUp,
  GitBranch,
  Network,
  LayoutDashboard,
  PlugZap,
  ArrowUpRight,
} from "lucide-react";
import Reveal from "../../hooks/useReveal";
import { CAPABILITIES } from "../../data/content";

const ICONS = {
  "brain-circuit": BrainCircuit,
  "trending-up": TrendingUp,
  "git-branch": GitBranch,
  network: Network,
  "layout-dashboard": LayoutDashboard,
  "plug-zap": PlugZap,
};

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative py-24 sm:py-32">
      <div className="container-px">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-[var(--color-mint)]">
              Core Capabilities
            </span>
            <h2 className="font-display text-4xl font-extrabold leading-[1.05] text-[var(--color-text)] sm:text-5xl">
              WHAT <span className="text-gradient">PRYSMORS DOES</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group flex min-h-[44px] cursor-pointer items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-[var(--color-text)] transition-colors hover:text-[var(--color-mint)]"
            >
              Request a Demo
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-[var(--color-border-soft)] bg-[var(--color-border-soft)] sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((cap, i) => {
            const Icon = ICONS[cap.icon];
            return (
              <Reveal key={cap.id} delay={(i % 3) * 0.08}>
                <div className="group relative h-full bg-[var(--color-bg-alt)] p-8 transition-colors hover:bg-[var(--color-surface)]">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] text-[var(--color-mint)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:border-[#27FFbf]/50">
                      <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs text-[var(--color-text-dim)]">{cap.id}</span>
                  </div>
                  <h3 className="mb-2.5 font-display text-lg font-bold text-[var(--color-text)]">
                    {cap.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{cap.desc}</p>
                  <div className="mt-6 h-px w-8 bg-[var(--color-border)] transition-all duration-300 group-hover:w-14 group-hover:bg-[var(--color-mint)]" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
