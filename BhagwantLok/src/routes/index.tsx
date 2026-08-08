import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";

import mountains from "@/assets/mountains.jpg";
import templeGate from "@/assets/temple-gate.png";
import { Particles } from "@/components/landing/Particles";
import { Mandala } from "@/components/landing/Mandala";
import { trackEvent } from "@/lib/analytics";
import { canonical } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bhagwant Lok — Enter the Realm of the Divine" },
      {
        name: "description",
        content:
          "Cross the threshold into Bhagwant Lok: a still, luminous realm of sacred geometry, mountain mist and temple light.",
      },
      { property: "og:title", content: "Bhagwant Lok — Enter the Realm of the Divine" },
      {
        property: "og:description",
        content:
          "Cross the threshold into Bhagwant Lok: a still, luminous realm of sacred geometry, mountain mist and temple light.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://divine-arrival-portal.lovable.app/" },
      { property: "og:image", content: "https://divine-arrival-portal.lovable.app/og-image.jpg" },
      { name: "twitter:image", content: "https://divine-arrival-portal.lovable.app/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: canonical("/") }],
  }),
  component: Landing,
});

// Phase timeline (ms): 1 spark · 2 mandala · 3 scenery · 4 approach · 5 title · 6 invitation
const MARKS = [400, 3000, 5200, 7200, 9200, 11000];

function Landing() {
  const [phase, setPhase] = useState(0);

  const complete = useCallback(() => setPhase(6), []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase(6);
      return;
    }
    const timers = MARKS.map((ms, i) => window.setTimeout(() => setPhase(i + 1), ms));
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (phase >= 6) return;
    const skip = () => setPhase(6);
    window.addEventListener("keydown", skip);
    return () => window.removeEventListener("keydown", skip);
  }, [phase]);

  const at = (n: number) => phase >= n;
  const ease = "cubic-bezier(0.22, 0.61, 0.36, 1)";

  return (
    <main
      className="relative h-[100dvh] w-full overflow-hidden bg-void"
      style={{ backgroundColor: "#050505" }}
      onClick={complete}
    >
      {/* Scenery: mountains, mist, temple silhouettes */}
      <div
        aria-hidden="true"
        className="absolute inset-0 mist-drift"
        style={{
          opacity: at(3) ? 0.85 : 0,
          transform: `scale(${at(4) ? 1.16 : 1.04})`,
          transition: `opacity 4500ms ${ease}, transform 9000ms ${ease}`,
        }}
      >
        <img
          src={mountains}
          alt=""
          width={1920}
          height={1088}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Atmospheric haze */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 62%, rgba(107,122,143,0.16), transparent 60%), linear-gradient(to bottom, #050505 0%, rgba(5,5,5,0.15) 45%, #050505 100%)",
          opacity: at(3) ? 1 : 0,
          transition: `opacity 4000ms ${ease}`,
        }}
      />

      {/* Sacred geometry */}
      <Mandala visible={at(2)} />

      {/* Temple entrance */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 flex justify-center"
        style={{
          opacity: at(4) ? 1 : 0,
          transform: `scale(${at(5) ? 1.1 : 0.86}) translateY(${at(4) ? "0" : "3%"})`,
          transition: `opacity 4000ms ${ease}, transform 9000ms ${ease}`,
        }}
      >
        <img
          src={templeGate}
          alt=""
          width={1536}
          height={1024}
          loading="lazy"
          decoding="async"
          className="h-[78dvh] w-auto max-w-none object-contain opacity-90"
        />
      </div>

      {/* Divine core light */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 core-breathe rounded-full"
        style={{
          width: at(2) ? "min(70vw, 60vh)" : "10px",
          height: at(2) ? "min(70vw, 60vh)" : "10px",
          background:
            "radial-gradient(circle, rgba(248,246,240,0.95) 0%, rgba(212,175,55,0.55) 18%, rgba(212,175,55,0.18) 45%, rgba(212,175,55,0) 70%)",
          opacity: at(1) ? (at(4) ? 0.55 : 1) : 0,
          transition: `width 6000ms ${ease}, height 6000ms ${ease}, opacity 3000ms ${ease}`,
        }}
      />

      <Particles active={at(1)} />

      {/* Light rays */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "conic-gradient(from 200deg at 50% 55%, rgba(212,175,55,0) 0deg, rgba(212,175,55,0.07) 20deg, rgba(212,175,55,0) 42deg, rgba(212,175,55,0) 180deg, rgba(212,175,55,0.05) 205deg, rgba(212,175,55,0) 230deg)",
          maskImage: "radial-gradient(circle at 50% 55%, black 5%, transparent 72%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 55%, black 5%, transparent 72%)",
          opacity: at(3) ? 1 : 0,
          transition: `opacity 5000ms ${ease}`,
        }}
      />

      {/* Vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(5,5,5,0.85) 100%)",
        }}
      />

      {/* Legibility scrim behind the brand */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 42% at 50% 46%, rgba(5,5,5,0.72) 0%, rgba(5,5,5,0.45) 45%, rgba(5,5,5,0) 78%)",
          opacity: at(5) ? 1 : 0,
          transition: `opacity 2600ms ${ease}`,
        }}
      />


      {/* Brand reveal + invitation */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1
          className="font-devanagari text-ivory"
          style={{
            fontSize: "clamp(2.6rem, 8vw, 5.5rem)",
            letterSpacing: "0.04em",
            lineHeight: 1.15,
            textShadow: "0 0 46px rgba(212,175,55,0.55), 0 0 14px rgba(248,246,240,0.25)",
            opacity: at(5) ? 1 : 0,
            transform: `translateY(${at(5) ? "0" : "22px"})`,
            transition: `opacity 2600ms ${ease}, transform 2600ms ${ease}`,
          }}
        >
          भगवंत लोक
        </h1>

        <p
          className="font-display text-gold"
          style={{
            marginTop: "1.1rem",
            fontSize: "clamp(1rem, 2.6vw, 1.75rem)",
            letterSpacing: "0.42em",
            textIndent: "0.42em",
            opacity: at(5) ? 0.95 : 0,
            transform: `translateY(${at(5) ? "0" : "18px"})`,
            transition: `opacity 2600ms 500ms ${ease}, transform 2600ms 500ms ${ease}`,
          }}
        >
          BHAGWANT LOK
        </p>

        <p
          className="font-body text-ivory/70"
          style={{
            marginTop: "1.6rem",
            fontSize: "clamp(0.8rem, 1.8vw, 1rem)",
            fontWeight: 200,
            letterSpacing: "0.3em",
            textIndent: "0.3em",
            opacity: at(5) ? 1 : 0,
            transition: `opacity 2600ms 1100ms ${ease}`,
          }}
        >
          Enter the Realm of the Divine
        </p>

        <div
          style={{
            marginTop: "3.2rem",
            opacity: at(6) ? 1 : 0,
            transform: `translateY(${at(6) ? "0" : "16px"})`,
            transition: `opacity 2200ms ${ease}, transform 2200ms ${ease}`,
            pointerEvents: at(6) ? "auto" : "none",
          }}
        >
          <Link
            to="/hub"
            onClick={() => trackEvent("begin_journey", { from: "landing" })}
            className="group relative inline-block rounded-full border border-gold/40 px-9 py-4 font-body text-ivory backdrop-blur-md transition-all duration-700 ease-out hover:-translate-y-0.5 hover:border-gold/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
            style={{
              background:
                "linear-gradient(180deg, rgba(248,246,240,0.10) 0%, rgba(212,175,55,0.06) 100%)",
              boxShadow: "0 0 34px rgba(212,175,55,0.16), inset 0 1px 0 rgba(248,246,240,0.16)",
              fontSize: "clamp(0.72rem, 1.5vw, 0.85rem)",
              letterSpacing: "0.28em",
              textIndent: "0.28em",
              fontWeight: 300,
            }}
          >
            BEGIN YOUR JOURNEY
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              style={{ boxShadow: "0 0 52px rgba(212,175,55,0.4)" }}
            />
          </Link>

        </div>
      </div>

      {/* Skip */}
      <button
        type="button"
        onClick={complete}
        className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2 font-body text-[0.62rem] tracking-[0.34em] text-ivory/35 transition-opacity duration-1000 hover:text-ivory/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold/60"
        style={{
          opacity: phase >= 1 && phase < 6 ? 1 : 0,
          pointerEvents: phase >= 1 && phase < 6 ? "auto" : "none",
        }}
      >
        SKIP
      </button>
    </main>
  );
}
