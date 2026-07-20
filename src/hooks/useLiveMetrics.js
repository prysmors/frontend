import { useState, useEffect, useRef, useCallback } from "react";

/**
 * Animates a numeric value from `from` to `to` with spring-like easing.
 * Returns the current display value (number).
 */
export function useAnimatedNumber(to, { duration = 800, decimals = 0 } = {}) {
  const [display, setDisplay] = useState(to);
  const fromRef = useRef(to);
  const frameRef = useRef(null);

  useEffect(() => {
    const from = fromRef.current;
    if (from === to) return;
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const value = from + (to - from) * eased;
      setDisplay(Number(value.toFixed(decimals)));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        fromRef.current = to;
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [to, duration, decimals]);

  return display;
}

/**
 * Simulates live-updating metric values that drift within a realistic range.
 * Returns an object of current values keyed by metric id.
 */
export function useSimulatedMetrics(metrics, { interval = 3000, variance = 0.02 } = {}) {
  const [values, setValues] = useState(() =>
    Object.fromEntries(metrics.map((m) => [m.id, m.base]))
  );

  useEffect(() => {
    const id = setInterval(() => {
      setValues((prev) => {
        const next = { ...prev };
        for (const m of metrics) {
          const drift = (Math.random() - 0.5) * 2 * variance * m.base;
          const clamped = Math.max(m.min, Math.min(m.max, prev[m.id] + drift));
          next[m.id] = Number(clamped.toFixed(m.decimals ?? 0));
        }
        return next;
      });
    }, interval);
    return () => clearInterval(id);
  }, [metrics, interval, variance]);

  return values;
}

/**
 * Maintains a rolling sparkline (array of recent values).
 * Pushes a new value every `interval` ms and trims to `maxLen`.
 */
export function useSparkline(base, { maxLen = 20, interval = 2000, variance = 0.03 } = {}) {
  const [points, setPoints] = useState(() => Array(maxLen).fill(base));
  const idxRef = useRef(maxLen);

  useEffect(() => {
    const id = setInterval(() => {
      setPoints((prev) => {
        const last = prev[prev.length - 1];
        const drift = (Math.random() - 0.5) * 2 * variance * base;
        const next = Math.max(base * 0.85, Math.min(base * 1.15, last + drift));
        const updated = [...prev.slice(1), Number(next.toFixed(1))];
        return updated;
      });
      idxRef.current++;
    }, interval);
    return () => clearInterval(id);
  }, [base, interval, variance]);

  return points;
}

/**
 * Returns true once the element enters the viewport (via IntersectionObserver).
 * Useful for triggering animations only when visible.
 */
export function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}
