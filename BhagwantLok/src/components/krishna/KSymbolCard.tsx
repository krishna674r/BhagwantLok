import { useState } from "react";

import type { KSymbol } from "./data";

/** Sacred symbol card, warm daylight variant — tap or click to reveal meaning. */
export function KSymbolCard({ symbol }: { symbol: KSymbol }) {
  const [open, setOpen] = useState(false);

  return (
    <button
      type="button"
      aria-expanded={open}
      onClick={() => setOpen((v) => !v)}
      className="group relative block h-full w-full overflow-hidden rounded-2xl border border-peacock/12 bg-soft-ivory p-7 text-left transition-all duration-700 ease-out hover:-translate-y-1.5 hover:border-gold/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
      style={{ boxShadow: "0 22px 50px -38px rgba(58,47,36,0.65)" }}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-1000 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.18), transparent 70%)",
        }}
      />
      <span
        aria-hidden="true"
        className="relative block text-2xl transition-transform duration-[1200ms] ease-out group-hover:-translate-y-0.5"
      >
        {symbol.glyph}
      </span>

      <span className="relative mt-4 block font-devanagari text-sm tracking-[0.14em] text-peacock/80">
        {symbol.sanskrit}
      </span>
      <h3
        className="relative mt-1 font-display text-brown"
        style={{ fontSize: "1.05rem", letterSpacing: "0.14em" }}
      >
        {symbol.name}
      </h3>
      <p className="relative mt-3 font-body text-[0.8rem] font-light leading-relaxed tracking-[0.05em] text-brown/65">
        {symbol.meaning}
      </p>

      <span
        className="relative grid transition-all duration-[1100ms] ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr", opacity: open ? 1 : 0 }}
      >
        <span className="overflow-hidden">
          <span className="mt-4 block border-t border-peacock/12 pt-4 font-body text-[0.78rem] font-light leading-relaxed tracking-[0.05em] text-peacock/85">
            {symbol.symbolism}
          </span>
        </span>
      </span>

      <span
        aria-hidden="true"
        className="relative mt-5 block font-body text-[0.58rem] tracking-[0.32em] text-brown/35 transition-colors duration-700 group-hover:text-gold"
      >
        {open ? "CLOSE" : "REVEAL"}
      </span>
    </button>
  );
}
