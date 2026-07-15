import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "../../hooks/useReveal";
import { WHY_US } from "../../data/content";
import {
  aiNativeArchitectureIcon,
  enterpriseSecurityIcon,
  nvidiaComputeIcon,
  dedicatedImplementationIcon,
} from "../../assets";

const WHY_US_ICONS = [
  aiNativeArchitectureIcon,
  enterpriseSecurityIcon,
  nvidiaComputeIcon,
  dedicatedImplementationIcon,
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=60"
          alt=""
          className="h-full w-full object-cover opacity-[0.04]"
          loading="lazy"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)] via-transparent to-[var(--color-bg)]" />
      </div>

      <div className="container-px relative z-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_1.1fr]">
          {/* Left copy */}
          <Reveal y={24}>
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-[var(--color-mint)]">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl font-extrabold leading-[1.05] text-[var(--color-text)] sm:text-4xl md:text-5xl">
              WHY <span className="text-gradient">CHOOSE PRYSMORS?</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
              Prysmors isn't another analytics layer on top of what you already have. It's a new
              class of enterprise software: a continuously reasoning decision engine that turns
              data into action.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn-mint"
              >
                Let's Talk
              </a>
              <a
                href="#capabilities"
                onClick={(e) => { e.preventDefault(); document.querySelector("#capabilities")?.scrollIntoView({ behavior: "smooth" }); }}
                className="btn-outline"
              >
                Learn More
                <ArrowUpRight size={16} />
              </a>
            </div>
          </Reveal>

          {/* Right cards grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {WHY_US.map((item, i) => (
                <Reveal key={item.id} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 280, damping: 22 }}
                    className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/80 p-6 backdrop-blur-sm transition-all hover:border-[var(--color-mint)]/30 hover:bg-[var(--color-surface)]"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] transition-colors group-hover:border-[var(--color-mint)]/40">
                        <img
                          src={WHY_US_ICONS[i]}
                          alt={item.title}
                          className="h-8 w-8 object-contain"
                        />
                      </span>
                      <span className="font-mono text-xs text-[var(--color-text-dim)]">{item.id}</span>
                    </div>
                    <h3 className="mb-2 font-display text-base font-bold text-[var(--color-text)]">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">{item.desc}</p>
                  </motion.div>
                </Reveal>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
