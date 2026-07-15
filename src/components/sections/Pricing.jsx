import { Check, ArrowUpRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Reveal from "../../hooks/useReveal";
import { PRICING_TIERS } from "../../data/content";

export default function Pricing() {
  const navigate = useNavigate();
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="container-px">
        <Reveal className="mb-16 max-w-xl">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-[var(--color-mint)]">
            Pricing
          </span>
          <h2 className="font-display text-3xl font-extrabold leading-[1.05] text-[var(--color-text)] sm:text-4xl md:text-5xl">
            PLANS THAT SCALE <span className="text-gradient">WITH YOUR DECISIONS.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
            Every tier includes the core decision intelligence engine. Move up
            for more data sources, simulation depth, and dedicated support.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {PRICING_TIERS.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.1}>
              <div
                className={`relative flex h-full flex-col rounded-[32px] p-8 sm:p-9 ${
                  tier.featured
                    ? "neu-raised neu-raised-hover ring-1 ring-[var(--color-mint)]/40"
                    : "neu-raised neu-raised-hover"
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3.5 left-8 flex items-center gap-1.5 rounded-full bg-[var(--color-mint)] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wide text-[#06110d]">
                    <Sparkles size={12} aria-hidden="true" />
                    Most Popular
                  </span>
                )}

                <h3 className="font-display text-xl font-bold text-[var(--color-text)]">
                  {tier.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {tier.desc}
                </p>

                <div className="mt-6 flex items-end gap-1">
                  <span className="font-display text-4xl font-extrabold text-[var(--color-text)]">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="mb-1 text-sm text-[var(--color-text-dim)]">{tier.period}</span>
                  )}
                </div>

                {tier.href ? (
                  <a
                    href={tier.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`neu-pressable mt-7 flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-2xl text-sm font-bold transition-colors ${
                      tier.featured
                        ? "bg-[var(--color-mint)] text-[#06110d] btn-glow"
                        : "neu-raised-sm text-[var(--color-text)]"
                    }`}
                  >
                    {tier.cta}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                ) : (
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/#contact");
                    }}
                    className={`neu-pressable mt-7 flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-2xl text-sm font-bold transition-colors ${
                      tier.featured
                        ? "bg-[var(--color-mint)] text-[#06110d] btn-glow"
                        : "neu-raised-sm text-[var(--color-text)]"
                    }`}
                  >
                    {tier.cta}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                )}

                <ul className="mt-8 flex flex-1 flex-col gap-3.5 border-t border-[var(--color-border-soft)] pt-7">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-[var(--color-text-muted)]">
                      <span className="neu-inset mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[var(--color-mint)]">
                        <Check size={12} strokeWidth={3} aria-hidden="true" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 text-center text-sm text-[var(--color-text-dim)]">
          Need a proof-of-concept first? <span className="text-[var(--color-mint)]">Every plan starts with a 2-week pilot.</span>
        </Reveal>
      </div>
    </section>
  );
}
