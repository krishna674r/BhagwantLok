export type Deity = {
  id: string;
  name: string;
  sanskrit: string;
  glyph: string;
  description: string;
  image: string;
  accent: string;
};

export function DeityCard({
  deity,
  index,
  revealed,
  onSelect,
}: {
  deity: Deity;
  index: number;
  revealed: boolean;
  onSelect: (d: Deity) => void;
}) {
  const ease = "cubic-bezier(0.22, 0.61, 0.36, 1)";

  return (
    <button
      type="button"
      onClick={() => onSelect(deity)}
      className="deity-float group relative block w-full overflow-hidden rounded-[1.75rem] border border-ivory/10 text-left backdrop-blur-sm transition-all duration-700 ease-out hover:-translate-y-2 hover:border-gold/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? undefined : "translateY(28px)",
        transition: `opacity 1600ms ${index * 220}ms ${ease}, transform 1600ms ${index * 220}ms ${ease}, border-color 700ms ${ease}, box-shadow 700ms ${ease}`,
        animationDelay: `${index * 1.6}s`,
        boxShadow: "0 24px 60px -30px rgba(0,0,0,0.9)",
      }}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[5/4]">
        <img
          src={deity.image}
          alt={`${deity.name} — ${deity.description}`}
          width={1024}
          height={1024}
          loading="lazy"
          decoding="async"
          className="h-full w-full scale-[1.02] object-cover opacity-80 transition-all duration-[1400ms] ease-out group-hover:scale-105 group-hover:opacity-100"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(5,5,5,0.96) 8%, rgba(5,5,5,0.55) 45%, rgba(5,5,5,0.12) 100%)",
          }}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-1000 group-hover:opacity-100"
          style={{
            background: `radial-gradient(ellipse at 50% 30%, ${deity.accent}38, transparent 65%)`,
          }}
        />
      </div>

      <div className="relative -mt-24 px-7 pb-8 sm:-mt-28 sm:px-9 sm:pb-10">
        <span
          aria-hidden="true"
          className="block text-2xl transition-transform duration-700 group-hover:-translate-y-0.5"
        >
          {deity.glyph}
        </span>
        <span className="mt-3 block font-devanagari text-ivory/60 text-sm tracking-[0.2em]">
          {deity.sanskrit}
        </span>
        <h2
          className="mt-1 font-display text-ivory"
          style={{ fontSize: "clamp(1.5rem, 3.6vw, 2.1rem)", letterSpacing: "0.16em" }}
        >
          {deity.name}
        </h2>
        <p
          className="mt-3 font-body text-ivory/60"
          style={{
            fontSize: "clamp(0.68rem, 1.6vw, 0.8rem)",
            fontWeight: 200,
            letterSpacing: "0.22em",
          }}
        >
          {deity.description}
        </p>
        <span
          className="mt-6 inline-flex items-center gap-3 font-body text-[0.62rem] tracking-[0.34em] text-gold/60 transition-colors duration-700 group-hover:text-gold"
          aria-hidden="true"
        >
          ENTER
          <span className="h-px w-8 bg-gold/40 transition-all duration-700 group-hover:w-14 group-hover:bg-gold/80" />
        </span>
      </div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[1.75rem] opacity-0 transition-opacity duration-1000 group-hover:opacity-100"
        style={{ boxShadow: `0 0 70px -6px ${deity.accent}55, inset 0 0 60px -30px ${deity.accent}` }}
      />
    </button>
  );
}
