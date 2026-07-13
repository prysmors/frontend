import { useEffect, useState, useRef } from "react";

export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  const seen = useRef(new Set());

  useEffect(() => {
    seen.current = new Set();
    const observer = new IntersectionObserver(
      (entries) => {
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
      { rootMargin: "-80px 0px -40% 0px", threshold: 0 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
}
