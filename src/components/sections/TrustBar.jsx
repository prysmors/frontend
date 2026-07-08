import { TRUST_LOGOS } from "../../data/content";

export default function TrustBar() {
  const items = [...TRUST_LOGOS, ...TRUST_LOGOS];

  return (
    <section
      aria-label="Enterprise integrations"
      className="relative border-y border-[var(--color-border-soft)] bg-[var(--color-bg-alt)] py-7"
    >
      <div className="container-px">
        <p className="mb-5 text-center text-xs font-semibold uppercase tracking-widest text-[var(--color-text-dim)]">
          Integrates with the systems you already run
        </p>
        <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="animate-marquee flex w-max items-center gap-14 group-hover:[animation-play-state:paused]">
            {items.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="font-display text-lg font-bold tracking-tight text-[var(--color-text-dim)] opacity-50 transition-opacity hover:opacity-100"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
