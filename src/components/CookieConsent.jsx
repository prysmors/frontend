import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "prysmors_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1800);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-label="Cookie consent"
          aria-live="polite"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 30 }}
          className="fixed bottom-6 left-4 right-4 z-[60] mx-auto max-w-lg rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/95 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl"
        >
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--color-mint-deep)] text-[var(--color-mint)]">
              <Cookie size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="mb-1 text-sm font-semibold text-[var(--color-text)]">We use cookies</p>
              <p className="text-xs leading-relaxed text-[var(--color-text-muted)]">
                We use cookies to improve your experience and analyze site performance. No personal data is sold or shared with third parties.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                <button
                  onClick={accept}
                  className="rounded-lg bg-[var(--color-mint)] px-4 py-2 text-xs font-bold text-[#06110d] transition-transform hover:-translate-y-px"
                >
                  Accept All
                </button>
                <button
                  onClick={decline}
                  className="rounded-lg border border-[var(--color-border)] px-4 py-2 text-xs font-semibold text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-border)] hover:text-[var(--color-text)]"
                >
                  Decline
                </button>
              </div>
            </div>
            <button
              onClick={decline}
              aria-label="Close cookie consent"
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[var(--color-text-dim)] transition-colors hover:text-[var(--color-text)]"
            >
              <X size={15} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
