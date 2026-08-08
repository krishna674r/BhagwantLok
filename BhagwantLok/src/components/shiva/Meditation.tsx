import { useEffect, useRef, useState } from "react";

import linga from "@/assets/shiva-linga.png";

const DURATIONS = [3, 5, 10] as const;

const fmt = (s: number) =>
  `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

/** The quietest room of the journey: a breathing linga and an optional timer. */
export function Meditation() {
  const [minutes, setMinutes] = useState<number>(5);
  const [left, setLeft] = useState<number>(5 * 60);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const ref = useRef<number | null>(null);

  useEffect(() => {
    if (!running) return;
    ref.current = window.setInterval(() => {
      setLeft((v) => {
        if (v <= 1) {
          window.clearInterval(ref.current ?? undefined);
          setRunning(false);
          setDone(true);
          return 0;
        }
        return v - 1;
      });
    }, 1000);
    return () => window.clearInterval(ref.current ?? undefined);
  }, [running]);

  const pick = (m: number) => {
    setMinutes(m);
    setLeft(m * 60);
    setRunning(false);
    setDone(false);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative flex h-[19rem] w-full max-w-md items-center justify-center sm:h-[23rem]">
        <span
          aria-hidden="true"
          className="breathe-glow absolute h-64 w-64 rounded-full sm:h-80 sm:w-80"
          style={{
            background:
              "radial-gradient(circle, rgba(156,199,255,0.3) 0%, rgba(156,199,255,0.08) 45%, transparent 70%)",
          }}
        />
        <img
          src={linga}
          alt="A glowing stone Shiva Linga"
          width={1024}
          height={1024}
          loading="lazy"
          decoding="async"
          className="breathe-slow relative h-56 w-auto object-contain sm:h-72"
          style={{ filter: "drop-shadow(0 0 40px rgba(156,199,255,0.35))" }}
        />
      </div>

      <p
        className="mt-2 font-devanagari text-ivory/80"
        style={{ fontSize: "clamp(1.1rem, 3vw, 1.5rem)", letterSpacing: "0.08em" }}
      >
        ॐ नमः शिवाय
      </p>

      <p
        aria-live="polite"
        className="mt-8 font-display text-ivory tabular-nums"
        style={{ fontSize: "clamp(2rem, 7vw, 3rem)", letterSpacing: "0.16em" }}
      >
        {fmt(left)}
      </p>

      <div className="mt-7 flex items-center gap-3">
        {DURATIONS.map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => pick(m)}
            aria-pressed={minutes === m}
            className={`rounded-full border px-5 py-2 font-body text-[0.6rem] tracking-[0.28em] transition-all duration-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-moon/60 ${
              minutes === m
                ? "border-moon/60 text-moon"
                : "border-silver/15 text-ivory/45 hover:border-silver/35 hover:text-ivory/70"
            }`}
          >
            {m} MIN
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={() => {
          if (done) pick(minutes);
          else setRunning((v) => !v);
        }}
        className="mt-8 rounded-full border border-moon/40 px-11 py-4 font-body text-[0.64rem] tracking-[0.34em] text-ivory/85 transition-all duration-700 hover:border-moon hover:text-moon focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-moon/60"
        style={{ boxShadow: "0 0 50px -22px rgba(156,199,255,0.8)" }}
      >
        {done ? "BEGIN AGAIN" : running ? "PAUSE" : "BEGIN SITTING"}
      </button>

      <p className="mt-8 max-w-sm text-center font-body text-[0.72rem] font-light leading-loose tracking-[0.1em] text-ivory/40">
        {done
          ? "The sitting is complete. Carry the quiet with you."
          : "Let the breath follow the glow — in as it widens, out as it settles."}
      </p>
    </div>
  );
}
