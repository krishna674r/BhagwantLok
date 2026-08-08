import { useMemo } from "react";

/** Slow drifting petals / motes. Pure CSS, transform+opacity only. */
export function Petals({ count = 14 }: { count?: number }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: (i * 97) % 100,
        delay: -(i * 3.7) % 40,
        duration: 34 + ((i * 7) % 26),
        size: 5 + ((i * 3) % 7),
        drift: ((i % 5) - 2) * 40,
        opacity: 0.18 + ((i * 13) % 30) / 100,
      })),
    [count],
  );

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {petals.map((p, i) => (
        <span
          key={i}
          className="petal-fall absolute top-[-8%] block rounded-[60%_40%_60%_40%]"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 1.6,
            opacity: p.opacity,
            background: "linear-gradient(160deg, rgba(248,246,240,0.9), rgba(212,175,55,0.55))",
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            ["--drift" as string]: `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
