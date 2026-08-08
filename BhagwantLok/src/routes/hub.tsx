import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import courtyard from "@/assets/courtyard.jpg";
import krishna from "@/assets/deity-krishna.jpg";
import rama from "@/assets/deity-rama.jpg";
import shiva from "@/assets/deity-shiva.jpg";
import { DeityCard, type Deity } from "@/components/hub/DeityCard";
import { Particles } from "@/components/landing/Particles";
import { Petals } from "@/components/landing/Petals";
import { trackEvent } from "@/lib/analytics";
import { breadcrumbLd, canonical } from "@/lib/site";

export const Route = createFileRoute("/hub")({
  head: () => ({
    meta: [
      { title: "Choose Your Divine Journey — Bhagwant Lok" },
      {
        name: "description",
        content:
          "Stand in the sacred courtyard of Bhagwant Lok and choose your path — Shiva, Krishna or Rama. Each leads to timeless wisdom and devotion.",
      },
      { property: "og:title", content: "Choose Your Divine Journey — Bhagwant Lok" },
      {
        property: "og:description",
        content:
          "A timeless temple courtyard where three divine paths await: Shiva, Krishna and Rama.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://divine-arrival-portal.lovable.app/hub" },
      { property: "og:image", content: "https://divine-arrival-portal.lovable.app/og-image.jpg" },
      { name: "twitter:image", content: "https://divine-arrival-portal.lovable.app/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: canonical("/hub") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Divine Journeys", path: "/hub" },
          ]),
        ),
      },
    ],
  }),
  component: Hub,
});

const DEITIES: Deity[] = [
  {
    id: "shiva",
    name: "SHIVA",
    sanskrit: "शिव",
    glyph: "🔱",
    description: "Meditation • Transformation • Stillness",
    image: shiva,
    accent: "#8fb3d9",
  },
  {
    id: "krishna",
    name: "KRISHNA",
    sanskrit: "कृष्ण",
    glyph: "🦚",
    description: "Love • Wisdom • Devotion",
    image: krishna,
    accent: "#4a6fd4",
  },
  {
    id: "rama",
    name: "RAMA",
    sanskrit: "राम",
    glyph: "🏹",
    description: "Dharma • Courage • Virtue",
    image: rama,
    accent: "#d4af37",
  },
];

const ease = "cubic-bezier(0.22, 0.61, 0.36, 1)";

function Hub() {
  const [revealed, setRevealed] = useState(false);
  const [selected, setSelected] = useState<Deity | null>(null);
  const navigate = useNavigate();

  const handleSelect = (d: Deity) => {
    setSelected(d);
    trackEvent("select_deity", { deity: d.id });
    window.setTimeout(
      () =>
        navigate({
          to: d.id === "shiva" ? "/shiva" : d.id === "krishna" ? "/krishna" : "/rama",
        }),
      1400,
    );
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(true);
      return;
    }
    const t = window.setTimeout(() => setRevealed(true), 260);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="relative min-h-[100dvh] w-full overflow-hidden" style={{ backgroundColor: "#050505" }}>
      {/* Courtyard */}
      <div
        aria-hidden="true"
        className="fixed inset-0"
        style={{
          opacity: revealed ? 1 : 0,
          transform: `scale(${revealed ? 1.04 : 1.12})`,
          transition: `opacity 3200ms ${ease}, transform 12000ms ${ease}`,
        }}
      >
        <img
          src={courtyard}
          alt=""
          width={1920}
          height={1080}
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Fog + light rays + vignette */}
      <div
        aria-hidden="true"
        className="fixed inset-0 mist-drift"
        style={{
          background:
            "radial-gradient(ellipse at 30% 35%, rgba(212,175,55,0.14), transparent 55%), radial-gradient(ellipse at 70% 70%, rgba(107,122,143,0.12), transparent 60%)",
        }}
      />
      <div
        aria-hidden="true"
        className="fixed inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(5,5,5,0.86) 0%, rgba(5,5,5,0.7) 30%, rgba(5,5,5,0.88) 70%, #050505 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 45%, transparent 35%, rgba(5,5,5,0.85) 100%)",
        }}
      />

      <div className="fixed inset-0">
        <Particles active={revealed} />
        <Petals />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-24 text-center sm:px-10 sm:py-32">
        <h1
          className="font-devanagari text-ivory"
          style={{
            fontSize: "clamp(2.4rem, 7vw, 4.75rem)",
            lineHeight: 1.2,
            letterSpacing: "0.03em",
            textShadow: "0 0 48px rgba(212,175,55,0.45)",
            opacity: revealed ? 1 : 0,
            transform: `translateY(${revealed ? "0" : "20px"})`,
            transition: `opacity 2200ms ${ease}, transform 2200ms ${ease}`,
          }}
        >
          भगवंत लोक
        </h1>

        <p
          className="font-display text-gold"
          style={{
            marginTop: "1.4rem",
            fontSize: "clamp(0.95rem, 2.4vw, 1.5rem)",
            letterSpacing: "0.36em",
            textIndent: "0.36em",
            opacity: revealed ? 0.95 : 0,
            transition: `opacity 2200ms 400ms ${ease}`,
          }}
        >
          Choose Your Divine Journey
        </p>

        <p
          className="font-body text-ivory/60"
          style={{
            marginTop: "1.5rem",
            maxWidth: "40rem",
            fontSize: "clamp(0.78rem, 1.7vw, 0.95rem)",
            fontWeight: 200,
            lineHeight: 2,
            letterSpacing: "0.12em",
            opacity: revealed ? 1 : 0,
            transition: `opacity 2200ms 900ms ${ease}`,
          }}
        >
          Each path leads to timeless wisdom, devotion, and self-discovery.
        </p>

        <div className="mt-20 grid w-full grid-cols-1 gap-10 sm:mt-24 sm:gap-14 lg:grid-cols-3 lg:gap-12">
          {DEITIES.map((d, i) => (
            <DeityCard key={d.id} deity={d} index={i} revealed={revealed} onSelect={handleSelect} />
          ))}
        </div>

        <Link
          to="/"
          className="mt-24 font-body text-[0.62rem] tracking-[0.34em] text-ivory/35 transition-colors duration-700 hover:text-ivory/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold/60"
          style={{ opacity: revealed ? 1 : 0, transition: `opacity 2000ms 1400ms ${ease}` }}
        >
          RETURN TO THE THRESHOLD
        </Link>
      </div>

      {/* Crossfade into the chosen realm */}
      <div
        className="fixed inset-0 z-40 flex items-center justify-center"
        aria-hidden={!selected}
        style={{
          opacity: selected ? 1 : 0,
          pointerEvents: selected ? "auto" : "none",
          transition: `opacity 1600ms ${ease}`,
          backgroundColor: "#050505",
        }}
        onClick={() => setSelected(null)}
      >
        {selected ? (
          <>
            <img
              src={selected.image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover opacity-30"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background: `radial-gradient(ellipse at 50% 50%, ${selected.accent}33, rgba(5,5,5,0.92) 62%)`,
              }}
            />
            <div className="relative px-8 text-center">
              <p className="font-devanagari text-ivory" style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)" }}>
                {selected.sanskrit}
              </p>
              <p
                className="mt-4 font-body text-ivory/60"
                style={{ fontSize: "0.72rem", letterSpacing: "0.34em", fontWeight: 200 }}
              >
                ENTERING THE REALM OF {selected.name}
              </p>
              <p className="mt-10 font-body text-[0.6rem] tracking-[0.3em] text-ivory/30">
                TAP TO RETURN
              </p>
            </div>
          </>
        ) : null}
      </div>
    </main>
  );
}
