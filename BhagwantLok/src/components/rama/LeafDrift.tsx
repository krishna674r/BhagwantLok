import { useEffect, useRef } from "react";

type Mote = {
  x: number;
  y: number;
  r: number;
  vy: number;
  vx: number;
  spin: number;
  angle: number;
  hue: number;
  alpha: number;
  bird: boolean;
  phase: number;
};

/**
 * Ambience for the Rama journey: slow drifting leaves, golden motes and a
 * few distant birds. Transform-only motion, disabled for reduced motion.
 */
export function LeafDrift({ density = 1 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    let motes: Mote[] = [];
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const make = (initial: boolean): Mote => {
      const bird = Math.random() < 0.08;
      return {
        x: bird ? -30 - Math.random() * w : Math.random() * w,
        y: initial ? Math.random() * h : bird ? Math.random() * h * 0.45 : -20,
        r: bird ? 4 + Math.random() * 3 : 2.5 + Math.random() * 4.5,
        vy: bird ? (Math.random() - 0.5) * 0.1 : 0.16 + Math.random() * 0.38,
        vx: bird ? 0.5 + Math.random() * 0.7 : (Math.random() - 0.5) * 0.3,
        spin: (Math.random() - 0.5) * 0.011,
        angle: Math.random() * Math.PI * 2,
        hue: Math.random(),
        alpha: bird ? 0.3 + Math.random() * 0.25 : 0.22 + Math.random() * 0.42,
        bird,
        phase: Math.random() * Math.PI * 2,
      };
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(64, (w * h) / 26000) * density);
      motes = Array.from({ length: count }, () => make(true));
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let t = 0;
    const draw = () => {
      t += 0.016;
      ctx.clearRect(0, 0, w, h);

      for (const p of motes) {
        p.angle += p.spin;
        p.y += p.vy + (p.bird ? Math.sin(t * 0.7 + p.phase) * 0.12 : 0);
        p.x += p.vx + (p.bird ? 0 : Math.sin(t * 0.45 + p.phase) * 0.3);

        if (p.y - 20 > h || p.x < -60 || p.x > w + 60) {
          Object.assign(p, make(false));
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.globalAlpha = p.alpha;

        if (p.bird) {
          const flap = Math.sin(t * 4 + p.phase) * p.r * 0.6;
          ctx.strokeStyle = "#7B1E24";
          ctx.lineWidth = 1.1;
          ctx.beginPath();
          ctx.moveTo(-p.r, 0);
          ctx.quadraticCurveTo(-p.r * 0.5, -flap, 0, 0);
          ctx.quadraticCurveTo(p.r * 0.5, -flap, p.r, 0);
          ctx.stroke();
        } else {
          ctx.rotate(p.angle);
          ctx.fillStyle =
            p.hue > 0.66 ? "#D4AF37" : p.hue > 0.33 ? "#D98C1A" : "#C8A96A";
          ctx.beginPath();
          ctx.ellipse(0, 0, p.r, p.r * 0.45, 0, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
      raf = window.requestAnimationFrame(draw);
    };
    raf = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [density]);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
