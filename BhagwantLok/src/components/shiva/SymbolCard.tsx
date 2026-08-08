import { useState } from "react";

import type { Symbolism } from "./data";

/** Sacred symbol card — calm hover lift, tap/hover reveals the symbolism. */
export function SymbolCard({ symbol }: { symbol: Symbolism }) {
  const [open, setOpen] = useState(false);

  return (
    <button
      type="button"
      aria-expanded={open}
      onClick={() => setOpen((v) => !v)}
      className="group relative block h-full w-full overflow-hidden rounded-2xl border border-silver/10 bg-slate/25 p-7 text-left backdrop-blur-md transition-all duration-700 ease-out hover:-translate-y-1.5 hover:border-moon/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-moon/60"
      style={{ boxShadow: "0 24px 60px -40px rgba(0,0,0,0.95)" }}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-1000 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(156,199,255,0.16), transparent 70%)",
        }}
      />
      <span
        aria-hidden="true"
        className="relative block text-2xl transition-transform duration-[1200ms] ease-out group-hover:-translate-y-0.5"
        style={{ filter: "drop-shadow(0 0 14px rgba(156,199,255,0.35))" }}
      >
        {symbol.glyph}
      </span>

      <span className="relative mt-4 block font-devanagari text-sm tracking-[0.16em] text-moon/70">
        {symbol.sanskrit}
      </span>
      <h3
        className="relative mt-1 font-display text-ivory"
        style={{ fontSize: "1.05rem", letterSpacing: "0.16em" }}
      >
        {symbol.name}
      </h3>
      <p className="relative mt-3 font-body text-[0.8rem] font-light leading-relaxed tracking-[0.06em] text-ivory/60">
        {symbol.meaning}
      </p>

      <span
        className="relative grid transition-all duration-[1100ms] ease-out"
        style={{
          gridTemplateRows: open ? "1fr" : "0fr",
          opacity: open ? 1 : 0,
        }}
      >
        <span className="overflow-hidden">
          <span className="mt-4 block border-t border-silver/10 pt-4 font-body text-[0.78rem] font-light leading-relaxed tracking-[0.06em] text-moon/75">
            {symbol.symbolism}
          </span>
        </span>
      </span>

      <span
        aria-hidden="true"
        className="relative mt-5 block font-body text-[0.58rem] tracking-[0.32em] text-silver/40 transition-colors duration-700 group-hover:text-moon/70"
      >
        {open ? "CLOSE" : "REVEAL"}
      </span>
    </button>
  );
}
