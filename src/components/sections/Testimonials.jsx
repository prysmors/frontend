import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Reveal from "../../hooks/useReveal";
import { TESTIMONIALS } from "../../data/content";
import {
  sarahMitchellAvatar,
  danielFosterAvatar,
  emilyCarterAvatar,
  michaelReynoldsAvatar,
  jessicaMorganAvatar,
} from "../../assets";

const AVATARS = {
  "Sarah Mitchell": sarahMitchellAvatar,
  "Daniel Foster": danielFosterAvatar,
  "Emily Carter": emilyCarterAvatar,
  "Michael Reynolds": michaelReynoldsAvatar,
  "Jessica Morgan": jessicaMorganAvatar,
};

export default function Testimonials() {
  const [i, setI] = useState(0);
  const timerRef = useRef(null);

  const t = TESTIMONIALS[i];
  const next = () => { setI((v) => (v + 1) % TESTIMONIALS.length); restartTimer(); };
  const prev = () => { setI((v) => (v - 1 + TESTIMONIALS.length) % TESTIMONIALS.length); restartTimer(); };

  const restartTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setI((v) => (v + 1) % TESTIMONIALS.length);
    }, 5000);
  };

  useEffect(() => {
    restartTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="container-px">
        <Reveal className="mb-14 max-w-xl">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-[var(--color-mint)]">
            Testimonials
          </span>
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] text-[var(--color-text)] sm:text-5xl">
            Voices Behind{" "}
            <span className="text-gradient">Successful Decisions</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="grid grid-cols-1 gap-10 lg:grid-cols-[auto_1fr] lg:items-center">
          <div className="neu-inset-deep hidden h-20 w-20 shrink-0 items-center justify-center rounded-[24px] text-[var(--color-mint)] lg:flex">
            <Quote size={32} aria-hidden="true" />
          </div>

          <div
            className="neu-raised rounded-[32px] p-8 sm:p-10"
            onMouseEnter={() => { if (timerRef.current) clearInterval(timerRef.current); }}
            onMouseLeave={() => { restartTimer(); }}
          >
            <Quote className="mb-5 text-[var(--color-mint)] lg:hidden" size={28} aria-hidden="true" />
            <p className="font-display text-xl font-medium leading-snug text-[var(--color-text)] sm:text-2xl">
              &ldquo;{t.quote}&rdquo;
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="neu-inset flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full">
                  {AVATARS[t.name] ? (
                    <img
                      src={AVATARS[t.name]}
                      alt={`Portrait of ${t.name}`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="font-display text-sm font-bold text-[var(--color-mint)]">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  )}
                </div>
                <div>
                  <p className="font-semibold text-[var(--color-text)]">{t.name}</p>
                  <p className="text-sm text-[var(--color-text-dim)]">{t.role}, {t.company}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  {TESTIMONIALS.map((_, idx) => (
                    <span
                      key={idx}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === i ? "w-6 bg-[var(--color-mint)]" : "w-1.5 bg-[var(--color-border)]"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="neu-raised-sm neu-pressable flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-[var(--color-text)] hover:text-[var(--color-mint)]"
                >
                  <ChevronLeft size={17} aria-hidden="true" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="neu-raised-sm neu-pressable flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-[var(--color-text)] hover:text-[var(--color-mint)]"
                >
                  <ChevronRight size={17} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}