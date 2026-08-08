import { useEffect, useRef } from "react";

type Flake = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  a: number;
  ph: number;
  ash: boolean;
};

/**
 * Gentle Himalayan snowfall with a few embers of floating ash.
 * Canvas based, transform-free, ~60fps, respects reduced motion.
 */
export function Snowfall({ density = 1 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    let flakes: Flake[] = [];

    const count = () =>
      Math.round((window.innerWidth < 768 ? 46 : 90) * density);

    const seed = () => {
      flakes = Array.from({ length: count() }, () => {
        const ash = Math.random() < 0.16;
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          r: ash ? 0.5 + Math.random() * 1.1 : 0.6 + Math.random() * 1.9,
          vx: (Math.random() - 0.5) * 0.14,
          vy: ash ? -0.05 - Math.random() * 0.1 : 0.16 + Math.random() * 0.42,
          a: 0.12 + Math.random() * 0.55,
          ph: Math.random() * Math.PI * 2,
          ash,
        };
      });
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const f of flakes) {
        f.ph += 0.006;
        f.x += f.vx + Math.sin(f.ph) * 0.22;
        f.y += f.vy;

        if (f.y > h + 8) {
          f.y = -8;
          f.x = Math.random() * w;
        }
        if (f.y < -12) {
          f.y = h + 8;
          f.x = Math.random() * w;
        }
        if (f.x < -12) f.x = w + 8;
        if (f.x > w + 12) f.x = -8;

        const twinkle = 0.75 + Math.sin(f.ph * 1.7) * 0.25;
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fillStyle = f.ash
          ? `rgba(212,175,55,${f.a * twinkle * 0.5})`
          : `rgba(216,222,233,${f.a * twinkle})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
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
