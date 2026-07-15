import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const HEADER_HEIGHT = 80;

function scrollToHash(hash) {
  if (!hash) return false;
  const el = document.querySelector(hash);
  if (!el) return false;
  const rect = el.getBoundingClientRect();
  const top = rect.top + window.scrollY - HEADER_HEIGHT;
  window.scrollTo({ top, behavior: "smooth" });
  return true;
}

export function forceScrollToHash(hash) {
  if (!hash) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  scrollToHash(hash);
}

export function forceScrollToTop() {
  window.scrollTo({ top: 0, behavior: "instant" });
}

export default function ScrollManager() {
  const { pathname, hash } = useLocation();
  const prevPathname = useRef(pathname);
  const prevHash = useRef(hash);

  useEffect(() => {
    const pathChanged = pathname !== prevPathname.current;
    const hashChanged = hash !== prevHash.current;

    prevPathname.current = pathname;
    prevHash.current = hash;

    if (!pathChanged && !hashChanged) return;

    if (pathChanged) {
      window.scrollTo({ top: 0, behavior: "instant" });
      if (hash) {
        let attempts = 0;
        const tryScroll = () => {
          if (scrollToHash(hash)) return;
          if (attempts < 60) {
            attempts++;
            requestAnimationFrame(tryScroll);
          }
        };
        requestAnimationFrame(tryScroll);
      }
    } else if (hashChanged) {
      if (hash) {
        scrollToHash(hash);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }, [pathname, hash]);

  return null;
}
