import { useEffect, useRef, useState } from "react";

import silhouette from "@/assets/krishna-silhouette.png";

const LINES = [
  "हरे कृष्ण हरे कृष्ण",
  "कृष्ण कृष्ण हरे हरे",
  "हरे राम हरे राम",
  "राम राम हरे हरे",
];

/** The emotional heart: a glowing Krishna, a breath, and an optional chant. */
export function Devotion() {
  const [chanting, setChanting] = useState(false);
  const [line, setLine] = useState(0);
  const [rounds, setRounds] = useState(0);
  const ref = useRef<number | null>(null);

  useEffect(() => {
    if (!chanting) return;
    ref.current = window.setInterval(() => {
      setLine((v) => {
        const next = (v + 1) % LINES.length;
        if (next === 0) setRounds((r) => r + 1);
        return next;
      });
    }, 3400);
    return () => window.clearInterval(ref.current ?? undefined);
  }, [chanting]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative flex h-[20rem] w-full max-w-md items-center justify-center sm:h-[24rem]">
        <span
          aria-hidden="true"
          className="breathe-glow absolute h-64 w-64 rounded-full sm:h-80 sm:w-80"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.42) 0%, rgba(28,117,188,0.18) 45%, transparent 72%)",
          }}
        />
        <img
          src={silhouette}
          alt="A softly glowing silhouette of Krishna playing the flute"
          width={1024}
          height={1024}
          loading="lazy"
          decoding="async"
          className="breathe-slow relative h-60 w-auto object-contain sm:h-72"
          style={{ filter: "drop-shadow(0 0 42px rgba(212,175,55,0.55))" }}
        />
      </div>

      <p
        aria-live="polite"
        className="mt-4 min-h-[2.6rem] text-center font-devanagari text-cream"
        style={{
          fontSize: "clamp(1.1rem, 3.2vw, 1.6rem)",
          letterSpacing: "0.06em",
          opacity: chanting ? 1 : 0.55,
          transition: "opacity 1200ms ease",
          textShadow: "0 0 40px rgba(212,175,55,0.5)",
        }}
      >
        {chanting ? LINES[line] : "हरे कृष्ण"}
      </p>

      <button
        type="button"
        onClick={() => setChanting((v) => !v)}
        aria-pressed={chanting}
        className="mt-9 rounded-full border border-gold/50 px-11 py-4 font-body text-[0.62rem] tracking-[0.34em] text-cream transition-all duration-700 hover:border-gold hover:bg-gold/12 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
        style={{ boxShadow: "0 0 55px -22px rgba(212,175,55,0.9)" }}
      >
        {chanting ? "REST" : "BEGIN CHANTING"}
      </button>

      <p className="mt-8 max-w-sm text-center font-body text-[0.72rem] font-light leading-loose tracking-[0.1em] text-cream/50">
        {chanting
          ? `${rounds} round${rounds === 1 ? "" : "s"} offered. Let the name move at the speed of your breath.`
          : "Sit a while. Follow the glow as it widens and settles — nothing here needs to be finished."}
      </p>
    </div>
  );
}
