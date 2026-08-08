import { useEffect, useRef } from "react";

type Petal = {
  x: number;
  y: number;
  r: number;
  vy: number;
  vx: number;
  spin: number;
  angle: number;
  hue: number;
  alpha: number;
  butterfly: boolean;
  phase: number;
};

/**
 * Canvas ambience for Vrindavan: slow flower petals and a few drifting
 * butterflies. Transform-only motion, paused for reduced-motion visitors.
 */
export function PetalDrift({ density = 1 }: { density?: number }) {
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
    let petals: Petal[] = [];
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const make = (initial: boolean): Petal => {
      const butterfly = Math.random() < 0.14;
      return {
        x: Math.random() * w,
        y: initial ? Math.random() * h : -20,
        r: butterfly ? 5 + Math.random() * 4 : 3 + Math.random() * 5,
        vy: butterfly ? 0.12 + Math.random() * 0.2 : 0.18 + Math.random() * 0.4,
        vx: (Math.random() - 0.5) * 0.35,
        spin: (Math.random() - 0.5) * 0.012,
        angle: Math.random() * Math.PI * 2,
        hue: Math.random(),
        alpha: 0.25 + Math.random() * 0.45,
        butterfly,
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
      const count = Math.round(Math.min(70, (w * h) / 24000) * density);
      petals = Array.from({ length: count }, () => make(true));
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let t = 0;
    const draw = () => {
      t += 0.016;
      ctx.clearRect(0, 0, w, h);

      for (const p of petals) {
        p.angle += p.spin;
        p.y += p.vy;
        p.x += p.vx + Math.sin(t * 0.5 + p.phase) * 0.35;

        if (p.y - 20 > h || p.x < -40 || p.x > w + 40) {
          Object.assign(p, make(false));
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.globalAlpha = p.alpha;

        if (p.butterfly) {
          const flap = 0.4 + Math.abs(Math.sin(t * 3 + p.phase)) * 0.9;
          ctx.fillStyle = p.hue > 0.5 ? "#1C75BC" : "#D4AF37";
          ctx.beginPath();
          ctx.ellipse(-p.r * 0.6, 0, p.r * flap, p.r * 0.75, -0.4, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.ellipse(p.r * 0.6, 0, p.r * flap, p.r * 0.75, 0.4, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillStyle =
            p.hue > 0.66 ? "#F3C6D6" : p.hue > 0.33 ? "#FFF1C9" : "#E8D9A8";
          ctx.beginPath();
          ctx.ellipse(0, 0, p.r, p.r * 0.55, 0, 0, Math.PI * 2);
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
