import { useEffect, useState, useRef, useCallback } from "react";

export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  const isNavigatingRef = useRef(false);
  const seen = useRef(new Set());

  const lockNavigation = useCallback((duration = 1200) => {
    isNavigatingRef.current = true;
    setTimeout(() => { isNavigatingRef.current = false; }, duration);
  }, []);

  const setActiveImmediate = useCallback((id) => {
    isNavigatingRef.current = true;
    setActive(id);
    setTimeout(() => { isNavigatingRef.current = false; }, 1200);
  }, []);

  useEffect(() => {
    seen.current = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
        if (isNavigatingRef.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            seen.current.add(entry.target.id);
          } else {
            seen.current.delete(entry.target.id);
          }
        });
        if (seen.current.size > 0) {
          const first = ids.find((id) => seen.current.has(id));
          if (first) setActive(first);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return [active, setActiveImmediate, lockNavigation, isNavigatingRef];
}
