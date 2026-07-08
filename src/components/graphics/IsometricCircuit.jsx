import { motion } from "framer-motion";

/**
 * IsometricCircuit — a CSS-3D illustration of floating isometric cubes linked
 * by a glowing circuit-node network, echoing the "enterprise data as physical
 * blocks wired together" reference. Built entirely from divs/SVG (no image
 * asset), themed in navy/steel with warm amber circuit glow for contrast,
 * exactly like a real depth-of-field product render but fully code-driven
 * so it scales, animates, and stays on-brand.
 */

const CUBES = [
  { top: "10%", left: "58%", size: 76, depth: 46, blur: 0, z: 5, rx: -24, ry: -34, delay: 0.05 },
  { top: "6%", left: "8%", size: 46, depth: 30, blur: 1.5, z: 1, rx: -22, ry: -30, delay: 0.3 },
  { top: "46%", left: "2%", size: 58, depth: 36, blur: 0.5, z: 3, rx: -26, ry: -32, delay: 0.18 },
  { top: "58%", left: "70%", size: 68, depth: 42, blur: 0, z: 4, rx: -20, ry: -36, delay: 0.12 },
  { top: "68%", left: "34%", size: 40, depth: 26, blur: 2, z: 1, rx: -24, ry: -30, delay: 0.4 },
  { top: "2%", left: "34%", size: 34, depth: 22, blur: 2.5, z: 0, rx: -22, ry: -34, delay: 0.5 },
];

const NODES = [
  { top: "18%", left: "20%", size: 5, warm: true, delay: 0.6 },
  { top: "30%", left: "44%", size: 7, warm: true, delay: 0.7 },
  { top: "14%", left: "62%", size: 4, warm: false, delay: 0.8 },
  { top: "52%", left: "24%", size: 6, warm: true, delay: 0.75 },
  { top: "62%", left: "52%", size: 5, warm: true, delay: 0.65 },
  { top: "78%", left: "18%", size: 4, warm: false, delay: 0.9 },
  { top: "80%", left: "62%", size: 6, warm: true, delay: 0.85 },
  { top: "40%", left: "80%", size: 4, warm: false, delay: 0.95 },
];

const LINES = [
  [20, 18, 44, 30],
  [44, 30, 62, 14],
  [44, 30, 24, 52],
  [24, 52, 52, 62],
  [52, 62, 62, 14],
  [24, 52, 18, 78],
  [52, 62, 62, 80],
  [62, 14, 80, 40],
];

export default function IsometricCircuit({ className = "", variant = "compact", id = "iso" }) {
  const large = variant === "large";

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ perspective: large ? 1400 : 900 }}
      role="img"
      aria-label="Illustration of floating enterprise data blocks connected by a glowing decision network"
    >
      {/* Ambient bokeh backdrop */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[15%] top-[20%] h-16 w-16 rounded-full bg-[#ffb020] opacity-25 blur-2xl" />
        <div className="absolute right-[20%] top-[10%] h-10 w-10 rounded-full bg-[var(--color-mint)] opacity-20 blur-xl" />
        <div className="absolute bottom-[15%] left-[40%] h-20 w-20 rounded-full bg-[#ffb020] opacity-20 blur-2xl" />
        <div className="absolute bottom-[25%] right-[12%] h-14 w-14 rounded-full bg-[var(--color-violet)] opacity-20 blur-xl" />
      </div>

      {/* Circuit connector lines */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`${id}-wire`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffb020" stopOpacity="0.65" />
            <stop offset="100%" stopColor="var(--color-mint)" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        {LINES.map(([x1, y1, x2, y2], i) => (
          <motion.line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={`url(#${id}-wire)`}
            strokeWidth="0.35"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </svg>

      {/* Glowing circuit nodes */}
      {NODES.map((n, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: n.delay }}
          className="absolute rounded-full"
          style={{
            top: n.top,
            left: n.left,
            width: n.size,
            height: n.size,
            background: n.warm ? "#ffcf80" : "var(--color-mint)",
            boxShadow: n.warm
              ? "0 0 10px 3px rgba(255,176,32,0.85), 0 0 22px 8px rgba(255,176,32,0.35)"
              : "0 0 10px 3px rgba(39,255,191,0.75), 0 0 22px 8px rgba(39,255,191,0.3)",
          }}
        >
          <motion.span
            className="absolute inset-0 rounded-full"
            style={{ background: n.warm ? "#ffb020" : "var(--color-mint)" }}
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.6, 1] }}
            transition={{ duration: 2.4 + i * 0.2, repeat: Infinity, ease: "easeInOut", delay: n.delay }}
          />
        </motion.span>
      ))}

      {/* Isometric cubes */}
      {CUBES.map((c, i) => (
        <Cube key={i} {...c} large={large} />
      ))}
    </div>
  );
}

function Cube({ top, left, size, depth, blur, z, rx, ry, delay, large }) {
  const scale = large ? 1.5 : 1;
  const w = size * scale;
  const h = size * scale;
  const d = depth * scale;

  const faceTop = "linear-gradient(135deg, #dfe9f5 0%, #aab9cc 100%)";
  const faceFront = "linear-gradient(160deg, #7f8ea3 0%, #3d4a5c 100%)";
  const faceSide = "linear-gradient(200deg, #4c5a6e 0%, #202a36 100%)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.85 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="absolute"
      style={{ top, left, zIndex: z, filter: blur ? `blur(${blur}px)` : undefined }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6 + delay * 4, repeat: Infinity, ease: "easeInOut", delay }}
        style={{
          width: w,
          height: h,
          transformStyle: "preserve-3d",
          transform: `rotateX(${rx}deg) rotateY(${ry}deg)`,
        }}
      >
        {/* top face */}
        <div
          className="absolute rounded-[3px] shadow-[0_2px_6px_rgba(0,0,0,0.35)]"
          style={{
            width: w,
            height: d,
            background: faceTop,
            transform: `rotateX(90deg) translateZ(${h / 2}px)`,
          }}
        />
        {/* front face */}
        <div
          className="absolute rounded-[3px]"
          style={{
            width: w,
            height: h,
            background: faceFront,
            transform: `translateZ(${d / 2}px)`,
          }}
        />
        {/* side face */}
        <div
          className="absolute rounded-[3px]"
          style={{
            width: d,
            height: h,
            background: faceSide,
            transform: `rotateY(90deg) translateZ(${w - d / 2}px)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
}
