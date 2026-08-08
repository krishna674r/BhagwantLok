import { createFileRoute, Link } from "@tanstack/react-router";

import { breadcrumbLd, canonical } from "@/lib/site";
import { useEffect, useState } from "react";

import hero from "@/assets/shiva-hero.jpg";
import kailash from "@/assets/shiva-kailash-pano.jpg";
import ardhanari from "@/assets/shiva-art-ardhanari.jpg";
import temple from "@/assets/shiva-temple.jpg";
import { AmbientAudio } from "@/components/shiva/AmbientAudio";
import { Gallery } from "@/components/shiva/Gallery";
import { Meditation } from "@/components/shiva/Meditation";
import { Reveal } from "@/components/shiva/Reveal";
import { Snowfall } from "@/components/shiva/Snowfall";
import { SymbolCard } from "@/components/shiva/SymbolCard";
import {
  JYOTIRLINGAS,
  STORIES,
  SYMBOLS,
  TEACHINGS,
  type Story,
} from "@/components/shiva/data";

export const Route = createFileRoute("/shiva")({
  head: () => ({
    meta: [
      { title: "Mahadev — A Pilgrimage to Kailash | Bhagwant Lok" },
      {
        name: "description",
        content:
          "An immersive Shiva journey: Mount Kailash, the sacred symbols, twelve Jyotirlingas, timeless stories, mantras, teachings and a still meditation space.",
      },
      { property: "og:title", content: "Mahadev — A Pilgrimage to Kailash" },
      {
        property: "og:description",
        content:
          "Enter the moonlit realm of Mahadev — symbols, Jyotirlingas, sacred stories, mantras and a quiet space to sit.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://divine-arrival-portal.lovable.app/shiva" },
      { property: "og:image", content: "https://divine-arrival-portal.lovable.app/og-image.jpg" },
      { name: "twitter:image", content: "https://divine-arrival-portal.lovable.app/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: canonical("/shiva") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Divine Journeys", path: "/hub" },
            { name: "Shiva Journey", path: "/shiva" },
          ]),
        ),
      },
    ],
  }),
  component: ShivaJourney,
});

const EASE = "cubic-bezier(0.22, 0.61, 0.36, 1)";

function SectionLabel({ sanskrit, label }: { sanskrit: string; label: string }) {
  return (
    <Reveal className="mb-12 text-center">
      <p className="font-devanagari text-moon/60" style={{ letterSpacing: "0.1em" }}>
        {sanskrit}
      </p>
      <h2
        className="mt-3 font-display text-ivory"
        style={{ fontSize: "clamp(1.3rem, 3.6vw, 2.1rem)", letterSpacing: "0.26em" }}
      >
        {label}
      </h2>
      <span
        aria-hidden="true"
        className="mx-auto mt-6 block h-px w-24"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(156,199,255,0.6), transparent)",
        }}
      />
    </Reveal>
  );
}

function ShivaJourney() {
  const [entered, setEntered] = useState(true);
  const [story, setStory] = useState<Story | null>(null);

  useEffect(() => {
    setEntered(true);
  }, []);

  useEffect(() => {
    if (!story) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setStory(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [story]);

  return (
    <main className="relative w-full overflow-x-hidden bg-void text-ivory">
      {/* Floating ambience toggle */}
      <div className="fixed right-4 top-4 z-40 sm:right-6 sm:top-6">
        <AmbientAudio />
      </div>

      {/* ---------------- HERO ---------------- */}
      <section className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            opacity: entered ? 1 : 0,
            transform: `scale(${entered ? 1.03 : 1.12})`,
            transition: `opacity 3000ms ${EASE}, transform 14000ms ${EASE}`,
          }}
        >
          <img
            src={hero}
            alt="Mount Kailash beneath a full moon, wrapped in mist"
            width={1920}
            height={1088}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>

        <div
          aria-hidden="true"
          className="cloud-drift absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 26% 22%, rgba(156,199,255,0.18), transparent 55%), radial-gradient(ellipse at 74% 68%, rgba(36,52,71,0.55), transparent 62%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(5,5,5,0.72) 0%, rgba(5,5,5,0.35) 38%, rgba(5,5,5,0.88) 82%, #050505 100%)",
          }}
        />
        <Snowfall />

        <div className="relative z-10 px-6 text-center">
          <p
            className="font-devanagari text-ivory"
            style={{
              fontSize: "clamp(1.6rem, 6vw, 3.4rem)",
              letterSpacing: "0.06em",
              textShadow: "0 0 60px rgba(156,199,255,0.55)",
              opacity: entered ? 1 : 0,
              transform: `translateY(${entered ? 0 : 18}px)`,
              transition: `opacity 2600ms ${EASE}, transform 2600ms ${EASE}`,
            }}
          >
            ॐ नमः शिवाय
          </p>

          <h1
            className="mt-8 font-display text-ivory"
            style={{
              fontSize: "clamp(2.6rem, 11vw, 7rem)",
              letterSpacing: "0.2em",
              textIndent: "0.2em",
              lineHeight: 1.05,
              textShadow: "0 0 90px rgba(156,199,255,0.35)",
              opacity: entered ? 1 : 0,
              transition: `opacity 3000ms 600ms ${EASE}`,
            }}
          >
            Mahadev
          </h1>

          <p
            className="mx-auto mt-8 max-w-2xl font-body text-ivory/65"
            style={{
              fontSize: "clamp(0.74rem, 1.9vw, 0.95rem)",
              fontWeight: 200,
              lineHeight: 2.1,
              letterSpacing: "0.14em",
              opacity: entered ? 1 : 0,
              transition: `opacity 2600ms 1400ms ${EASE}`,
            }}
          >
            The Eternal Consciousness. The Destroyer of Ignorance. The Lord of
            Transformation.
          </p>

          <a
            href="#who"
            className="mt-14 inline-block rounded-full border border-moon/40 px-12 py-4 font-body text-[0.64rem] tracking-[0.36em] text-ivory/85 transition-all duration-1000 hover:border-moon hover:bg-moon/10 hover:text-moon focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-moon/60"
            style={{
              boxShadow: "0 0 60px -22px rgba(156,199,255,0.9)",
              opacity: entered ? 1 : 0,
              transition: `opacity 2400ms 2200ms ${EASE}, border-color 900ms, background-color 900ms, color 900ms`,
            }}
          >
            BEGIN THE JOURNEY
          </a>
        </div>

        <span
          aria-hidden="true"
          className="absolute bottom-8 left-1/2 h-14 w-px -translate-x-1/2 moon-glow"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(216,222,233,0.7))",
          }}
        />
      </section>

      {/* ---------------- 1. WHO IS SHIVA ---------------- */}
      <section
        id="who"
        className="relative mx-auto w-full max-w-6xl scroll-mt-10 px-6 py-28 sm:px-10 sm:py-40"
      >
        <SectionLabel sanskrit="शिव तत्त्व" label="WHO IS SHIVA" />
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <p className="font-body text-[0.9rem] font-light leading-loose tracking-[0.08em] text-ivory/75">
              Before the first sound, before time drew its first breath, there was
              stillness. That stillness is Shiva — <em>Shi-va</em>, "that which is
              not": the vast emptiness in which every galaxy, thought and lifetime
              arises and dissolves.
            </p>
            <p className="mt-7 font-body text-[0.86rem] font-light leading-loose tracking-[0.08em] text-ivory/55">
              He is Mahadev, the great god who owns nothing — smeared in ash,
              seated on a mountain of snow, eyes half closed. He is the ascetic and
              the householder, the destroyer and the most tender of lovers, the
              silence at the heart of the dance.
            </p>
            <p className="mt-7 font-body text-[0.86rem] font-light leading-loose tracking-[0.08em] text-ivory/55">
              What he destroys is never the world — only the ignorance that hides
              it. To turn toward Mahadev is to turn toward what remains when
              everything false has quietly fallen away.
            </p>
            <p className="mt-10 font-devanagari text-moon/70" style={{ fontSize: "1.15rem" }}>
              कर्पूरगौरं करुणावतारं
            </p>
          </Reveal>

          <Reveal className="order-1 lg:order-2" delay={200}>
            <div className="relative overflow-hidden rounded-3xl border border-silver/10">
              <img
                src={ardhanari}
                alt="Painting of Shiva as Ardhanarishvara, half Shiva and half Parvati"
                width={1024}
                height={1024}
                loading="lazy"
                decoding="async"
                className="w-full object-cover"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(5,5,5,0.7), transparent 55%)",
                }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- 2. SACRED SYMBOLS ---------------- */}
      <section className="relative mx-auto w-full max-w-6xl px-6 py-28 sm:px-10 sm:py-36">
        <SectionLabel sanskrit="पवित्र प्रतीक" label="THE SACRED SYMBOLS" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SYMBOLS.map((s, i) => (
            <Reveal key={s.id} delay={(i % 4) * 120}>
              <SymbolCard symbol={s} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- 3. MOUNT KAILASH ---------------- */}
      <section className="relative flex min-h-[90dvh] w-full items-center justify-center overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0">
          <img
            src={kailash}
            alt="Himalayan peaks at night with prayer flags and falling snow"
            width={1920}
            height={1088}
            loading="lazy"
            decoding="async"
            className="cloud-drift h-full w-full scale-110 object-cover"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #050505 0%, rgba(5,5,5,0.45) 30%, rgba(5,5,5,0.6) 70%, #050505 100%)",
          }}
        />
        <Snowfall density={1.4} />

        <Reveal className="relative z-10 max-w-2xl px-6 text-center">
          <p className="font-devanagari text-moon/70">कैलाश पर्वत</p>
          <h2
            className="mt-4 font-display text-ivory"
            style={{ fontSize: "clamp(1.8rem, 6vw, 3.4rem)", letterSpacing: "0.2em" }}
          >
            MOUNT KAILASH
          </h2>
          <p className="mt-8 font-body text-[0.86rem] font-light leading-loose tracking-[0.12em] text-ivory/70">
            No one has climbed it. No one is meant to. Four great rivers begin
            near its foot, and pilgrims walk a circle of fifty-two kilometres
            around it in silence, breath freezing in the thin air.
          </p>
          <p className="mt-6 font-body text-[0.82rem] font-light leading-loose tracking-[0.12em] text-ivory/45">
            Here the wind carries prayer flags instead of words, and the moon
            never quite sets. This is the seat of Mahadev — not a destination, but
            a stillness you arrive at.
          </p>
        </Reveal>
      </section>

      {/* ---------------- 4. TWELVE JYOTIRLINGAS ---------------- */}
      <section className="relative mx-auto w-full max-w-6xl px-6 py-28 sm:px-10 sm:py-36">
        <SectionLabel sanskrit="द्वादश ज्योतिर्लिङ्ग" label="THE TWELVE JYOTIRLINGAS" />
        <Reveal className="mx-auto mb-14 max-w-xl text-center">
          <p className="font-body text-[0.82rem] font-light leading-loose tracking-[0.1em] text-ivory/50">
            Twelve shrines across the land, where Shiva is said to have appeared
            as an endless pillar of light.
          </p>
        </Reveal>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {JYOTIRLINGAS.map((j, i) => (
            <Reveal as="li" key={j.name} delay={(i % 3) * 110}>
              <article
                className="group relative h-full overflow-hidden rounded-2xl border border-silver/10 bg-slate/20 p-6 backdrop-blur-md transition-all duration-700 hover:-translate-y-1 hover:border-moon/40"
                style={{ boxShadow: "0 22px 55px -42px rgba(0,0,0,0.95)" }}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-1000 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.12), transparent 70%)",
                  }}
                />
                <p className="relative font-body text-[0.55rem] tracking-[0.34em] text-moon/50">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3
                  className="relative mt-3 font-display text-ivory"
                  style={{ fontSize: "1rem", letterSpacing: "0.14em" }}
                >
                  {j.name}
                </h3>
                <p className="relative mt-1 font-devanagari text-[0.85rem] text-moon/60">
                  {j.sanskrit}
                </p>
                <p className="relative mt-3 font-body text-[0.66rem] tracking-[0.2em] text-silver/45">
                  {j.place.toUpperCase()}
                </p>
                <p className="relative mt-4 font-body text-[0.78rem] font-light leading-relaxed tracking-[0.06em] text-ivory/55">
                  {j.note}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ---------------- 5. SACRED STORIES ---------------- */}
      <section className="relative mx-auto w-full max-w-6xl px-6 py-28 sm:px-10 sm:py-36">
        <SectionLabel sanskrit="पुराण कथा" label="SACRED STORIES" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STORIES.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 130}>
              <button
                type="button"
                onClick={() => setStory(s)}
                className="group relative block h-full w-full overflow-hidden rounded-2xl border border-silver/10 text-left transition-all duration-700 hover:-translate-y-1.5 hover:border-moon/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-moon/60"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    width={1024}
                    height={1280}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover opacity-75 transition-all duration-[1600ms] ease-out group-hover:scale-105 group-hover:opacity-100"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(5,5,5,0.96) 10%, rgba(5,5,5,0.45) 55%, transparent 100%)",
                    }}
                  />
                </div>
                <div className="relative -mt-24 p-6">
                  <p className="font-devanagari text-[0.9rem] text-moon/70">
                    {s.sanskrit}
                  </p>
                  <h3
                    className="mt-2 font-display text-ivory"
                    style={{ fontSize: "1.05rem", letterSpacing: "0.12em" }}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-3 font-body text-[0.78rem] font-light leading-relaxed tracking-[0.08em] text-ivory/55">
                    {s.summary}
                  </p>
                  <span
                    aria-hidden="true"
                    className="mt-5 inline-flex items-center gap-3 font-body text-[0.58rem] tracking-[0.32em] text-silver/45 transition-colors duration-700 group-hover:text-moon"
                  >
                    READ
                    <span className="h-px w-7 bg-silver/30 transition-all duration-700 group-hover:w-12 group-hover:bg-moon/70" />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- 6. MANTRAS ---------------- */}
      <section className="relative w-full overflow-hidden px-6 py-28 sm:py-36">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `url(${temple})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #050505, rgba(36,52,71,0.55), #050505)",
          }}
        />
        <div className="relative mx-auto w-full max-w-4xl">
          <SectionLabel sanskrit="मन्त्र" label="MANTRAS" />

          <Reveal className="rounded-3xl border border-silver/10 bg-void/50 p-9 text-center backdrop-blur-md sm:p-12">
            <p
              className="font-devanagari text-ivory"
              style={{
                fontSize: "clamp(1.4rem, 5vw, 2.4rem)",
                lineHeight: 1.7,
                textShadow: "0 0 50px rgba(156,199,255,0.4)",
              }}
            >
              ॐ नमः शिवाय
            </p>
            <p className="mt-5 font-body text-[0.72rem] tracking-[0.3em] text-moon/70">
              OM NAMAH SHIVAYA
            </p>
            <p className="mx-auto mt-6 max-w-lg font-body text-[0.82rem] font-light leading-loose tracking-[0.08em] text-ivory/55">
              "I bow to Shiva." The five-syllable mantra — the five elements, the
              five senses — returned to the one consciousness that holds them.
            </p>
          </Reveal>

          <Reveal
            delay={160}
            className="mt-8 rounded-3xl border border-silver/10 bg-void/50 p-9 text-center backdrop-blur-md sm:p-12"
          >
            <p
              className="font-devanagari text-ivory"
              style={{
                fontSize: "clamp(1rem, 3.2vw, 1.6rem)",
                lineHeight: 2,
                textShadow: "0 0 50px rgba(156,199,255,0.3)",
              }}
            >
              ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् ।<br />
              उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात् ॥
            </p>
            <p className="mt-5 font-body text-[0.68rem] leading-relaxed tracking-[0.24em] text-moon/70">
              OM TRYAMBAKAM YAJAMAHE SUGANDHIM PUSHTIVARDHANAM
              <br />
              URVARUKAMIVA BANDHANAN MRITYOR MUKSHIYA MAMRITAT
            </p>
            <p className="mx-auto mt-6 max-w-xl font-body text-[0.82rem] font-light leading-loose tracking-[0.08em] text-ivory/55">
              The Mahamrityunjaya Mantra. "We worship the three-eyed one who
              nourishes all beings. As a ripe cucumber falls free of its vine, may
              we be freed from death — not from life, but into deathlessness."
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------- 7. MEDITATION ---------------- */}
      <section className="relative w-full px-6 py-28 sm:py-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 45%, rgba(36,52,71,0.5), transparent 65%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-3xl">
          <SectionLabel sanskrit="ध्यान" label="MEDITATION SPACE" />
          <Meditation />
        </div>
      </section>

      {/* ---------------- 8. TEACHINGS ---------------- */}
      <section className="relative mx-auto w-full max-w-6xl px-6 py-28 sm:px-10 sm:py-36">
        <SectionLabel sanskrit="उपदेश" label="TIMELESS TEACHINGS" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TEACHINGS.map((t, i) => (
            <Reveal key={t.text} delay={(i % 3) * 120}>
              <figure
                className="h-full rounded-2xl border border-silver/10 bg-slate/20 p-8 backdrop-blur-md transition-colors duration-700 hover:border-moon/35"
                style={{ boxShadow: "0 22px 55px -44px rgba(0,0,0,0.95)" }}
              >
                <span aria-hidden="true" className="block font-display text-2xl text-moon/40">
                  ॐ
                </span>
                <blockquote className="mt-4 font-body text-[0.9rem] font-light italic leading-loose tracking-[0.05em] text-ivory/80">
                  {t.text}
                </blockquote>
                <figcaption className="mt-6 font-body text-[0.58rem] tracking-[0.3em] text-silver/40">
                  {t.source.toUpperCase()}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- 9. GALLERY ---------------- */}
      <section className="relative mx-auto w-full max-w-6xl px-6 py-28 sm:px-10 sm:py-36">
        <SectionLabel sanskrit="चित्रशाला" label="GALLERY" />
        <Reveal>
          <Gallery />
        </Reveal>
      </section>

      {/* ---------------- 10. CLOSING ---------------- */}
      <section className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(${hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(36,52,71,0.5), rgba(5,5,5,0.95) 62%)",
          }}
        />
        <Snowfall density={0.7} />

        <Reveal className="relative z-10 px-6 text-center">
          <p
            className="font-devanagari text-ivory"
            style={{
              fontSize: "clamp(1.7rem, 7vw, 4rem)",
              letterSpacing: "0.05em",
              textShadow: "0 0 70px rgba(156,199,255,0.5)",
            }}
          >
            हर हर महादेव
          </p>
          <p className="mx-auto mt-8 max-w-lg font-body text-[0.85rem] font-light leading-loose tracking-[0.16em] text-ivory/65">
            May the light of Mahadev guide your path.
          </p>
          <Link
            to="/hub"
            className="mt-14 inline-block rounded-full border border-moon/40 px-12 py-4 font-body text-[0.62rem] tracking-[0.34em] text-ivory/85 transition-all duration-1000 hover:border-moon hover:bg-moon/10 hover:text-moon focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-moon/60"
            style={{ boxShadow: "0 0 60px -24px rgba(156,199,255,0.9)" }}
          >
            RETURN TO BHAGWANT LOK
          </Link>
        </Reveal>
      </section>

      {/* ---------------- STORY LIGHTBOX ---------------- */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Sacred story"
        aria-hidden={!story}
        onClick={() => setStory(null)}
        className="fixed inset-0 z-50 flex items-center justify-center p-5 sm:p-10"
        style={{
          backgroundColor: "rgba(5,5,5,0.94)",
          backdropFilter: "blur(8px)",
          opacity: story ? 1 : 0,
          pointerEvents: story ? "auto" : "none",
          transition: `opacity 900ms ${EASE}`,
        }}
      >
        {story ? (
          <article
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[86dvh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-silver/12 bg-slate/25 p-8 backdrop-blur-xl sm:p-12"
          >
            <img
              src={story.image}
              alt={story.title}
              width={1024}
              height={1280}
              className="h-52 w-full rounded-2xl object-cover opacity-85 sm:h-64"
            />
            <p className="mt-7 font-devanagari text-moon/70">{story.sanskrit}</p>
            <h3
              className="mt-2 font-display text-ivory"
              style={{ fontSize: "clamp(1.2rem, 4vw, 1.9rem)", letterSpacing: "0.14em" }}
            >
              {story.title}
            </h3>
            <p className="mt-6 font-body text-[0.9rem] font-light leading-loose tracking-[0.07em] text-ivory/75">
              {story.body}
            </p>
            <button
              type="button"
              onClick={() => setStory(null)}
              className="mt-9 font-body text-[0.6rem] tracking-[0.32em] text-silver/50 transition-colors duration-700 hover:text-moon focus-visible:outline-none"
            >
              CLOSE
            </button>
          </article>
        ) : null}
      </div>
    </main>
  );
}
