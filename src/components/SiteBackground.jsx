import { useEffect, useRef } from "react";

const COLS = 70;
const ROWS = 34;
const DOT_ALPHA = 0.55;
const MAX_TILT = 6;

export default function SiteBackground() {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);
  const tilt = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  const mouse = useRef({ nx: 0, ny: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    let mouseTimer = null;
    const onMouseMove = (e) => {
      if (mouseTimer) return;
      mouseTimer = setTimeout(() => { mouseTimer = null; }, 16);
      mouse.current.nx = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.ny = (e.clientY / window.innerHeight) * 2 - 1;
    };
    const onMouseLeave = () => {
      mouse.current.nx = 0;
      mouse.current.ny = 0;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseout", onMouseLeave);

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let t = 0;

    const draw = () => {
      if (document.hidden) {
        raf = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const spacingX = width / (COLS - 1);
      const spacingY = height / (ROWS - 1);

      for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
          const x = col * spacingX;
          const yBase = row * spacingY;

          const wave =
            Math.sin(col * 0.18 + row * 0.09 + t) * 14 +
            Math.sin(col * 0.07 - row * 0.15 + t * 0.6) * 10 +
            Math.sin(row * 0.22 + t * 0.4) * 6;

          const y = yBase + wave;

          const norm = (wave + 30) / 60;
          const clamped = Math.max(0, Math.min(1, norm));

          const r = 70 + clamped * 30;
          const g = 110 + clamped * 90;
          const b = 200 + clamped * 55;
          const alpha = (0.12 + clamped * 0.5) * DOT_ALPHA;

          const size = 0.6 + clamped * 1.3;

          ctx.beginPath();
          ctx.fillStyle = `rgba(${r | 0}, ${g | 0}, ${b | 0}, ${alpha.toFixed(3)})`;
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (!prefersReduced) {
        t += 0.006;
      }

      tilt.current.tx = mouse.current.ny * -MAX_TILT;
      tilt.current.ty = mouse.current.nx * MAX_TILT;
      tilt.current.x += (tilt.current.tx - tilt.current.x) * 0.04;
      tilt.current.y += (tilt.current.ty - tilt.current.y) * 0.04;

      if (wrapRef.current) {
        wrapRef.current.style.transform = `perspective(1200px) rotateX(${tilt.current.x.toFixed(
          2
        )}deg) rotateY(${tilt.current.y.toFixed(2)}deg) scale(1.04)`;
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseout", onMouseLeave);
    };
  }, []);

  return (
    <div className="site-bg" aria-hidden="true">
      <div className="site-bg__wash" />
      <div className="site-bg__wave-wrap" ref={wrapRef}>
        <canvas ref={canvasRef} className="site-bg__wave-canvas" />
      </div>
      <div className="site-bg__noise" />
    </div>
  );
}
