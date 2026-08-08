import { useEffect, useRef } from "react";

type P = { x: number; y: number; r: number; vx: number; vy: number; a: number; ph: number };

export function Particles({ active }: { active: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let particles: P[] = [];
    let raf = 0;

    const count = () => (window.innerWidth < 768 ? 34 : 60);

    const seed = () => {
      particles = Array.from({ length: count() }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 0.4 + Math.random() * 1.6,
        vx: (Math.random() - 0.5) * 0.09,
        vy: -0.03 - Math.random() * 0.12,
        a: 0.12 + Math.random() * 0.5,
        ph: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    resize();
    window.addEventListener("resize", resize);

    let t = 0;
    const draw = () => {
      t += 0.01;
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) p.y = h + 10;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        const twinkle = 0.55 + 0.45 * Math.sin(t * 1.4 + p.ph);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${(p.a * twinkle).toFixed(3)})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(212, 175, 55, 0.6)";
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    if (reduced) {
      draw();
      cancelAnimationFrame(raf);
    } else {
      raf = requestAnimationFrame(draw);
    }

    const onVis = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && !reduced) raf = requestAnimationFrame(draw);
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full transition-opacity duration-[3000ms] ease-out"
      style={{ opacity: active ? 1 : 0 }}
    />
  );
}
