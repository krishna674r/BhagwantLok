import { createFileRoute, Link } from "@tanstack/react-router";

import { breadcrumbLd, canonical } from "@/lib/site";
import { useEffect, useState } from "react";

import hero from "@/assets/krishna-hero.jpg";
import vrindavan from "@/assets/krishna-vrindavan.jpg";
import gitaArt from "@/assets/krishna-art-gita.jpg";
import rasaArt from "@/assets/krishna-art-rasa.jpg";
import { Devotion } from "@/components/krishna/Devotion";
import { FluteAudio } from "@/components/krishna/FluteAudio";
import { KGallery } from "@/components/krishna/KGallery";
import { KSymbolCard } from "@/components/krishna/KSymbolCard";
import { PetalDrift } from "@/components/krishna/PetalDrift";
import { Reveal } from "@/components/shiva/Reveal";
import {
  BAL_LEELA,
  GITA,
  K_GALLERY,
  K_STORIES,
  K_SYMBOLS,
  K_TEACHINGS,
  MANTRAS,
  type KStory,
} from "@/components/krishna/data";

export const Route = createFileRoute("/krishna")({
  head: () => ({
    meta: [
      { title: "Lord Krishna — A Journey Through Vrindavan | Bhagwant Lok" },
      {
        name: "description",
        content:
          "An immersive Krishna journey: Vrindavan and the Yamuna, the Bal Leela, sacred symbols, the Bhagavad Gita, mantras, a devotion space and a gallery of divine art.",
      },
      { property: "og:title", content: "Lord Krishna — A Journey Through Vrindavan" },
      {
        property: "og:description",
        content:
          "Enter Vrindavan — the divine flute, the childhood leelas, the wisdom of the Bhagavad Gita and a quiet space for devotion.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://divine-arrival-portal.lovable.app/krishna" },
      { property: "og:image", content: "https://divine-arrival-portal.lovable.app/og-image.jpg" },
      { name: "twitter:image", content: "https://divine-arrival-portal.lovable.app/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: canonical("/krishna") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Divine Journeys", path: "/hub" },
            { name: "Krishna Journey", path: "/krishna" },
          ]),
        ),
      },
    ],
  }),
  component: KrishnaJourney,
});

const EASE = "cubic-bezier(0.22, 0.61, 0.36, 1)";

function SectionLabel({ sanskrit, label }: { sanskrit: string; label: string }) {
  return (
    <Reveal className="mb-12 text-center">
      <p className="font-devanagari text-peacock/70" style={{ letterSpacing: "0.08em" }}>
        {sanskrit}
      </p>
      <h2
        className="mt-3 font-display text-brown"
        style={{ fontSize: "clamp(1.3rem, 3.6vw, 2.1rem)", letterSpacing: "0.24em" }}
      >
        {label}
      </h2>
      <span
        aria-hidden="true"
        className="mx-auto mt-6 block h-px w-24"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(212,175,55,0.85), transparent)",
        }}
      />
    </Reveal>
  );
}

function KrishnaJourney() {
  const [entered, setEntered] = useState(true);
  const [story, setStory] = useState<KStory | null>(null);

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
    <main className="relative w-full overflow-x-hidden bg-cream text-brown">
      <div className="fixed right-4 top-4 z-40 sm:right-6 sm:top-6">
        <FluteAudio />
      </div>

      {/* ---------------- HERO ---------------- */}
      <section className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            opacity: entered ? 1 : 0,
            transform: `scale(${entered ? 1.03 : 1.12})`,
            transition: `opacity 3000ms ${EASE}, transform 16000ms ${EASE}`,
          }}
        >
          <img
            src={hero}
            alt="Krishna playing the flute beside the Yamuna river at sunrise in Vrindavan"
            width={1920}
            height={1088}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Sun rays and warm haze */}
        <div
          aria-hidden="true"
          className="cloud-drift absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 28% 24%, rgba(255,238,190,0.45), transparent 58%), radial-gradient(ellipse at 76% 72%, rgba(14,90,138,0.32), transparent 62%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(58,47,36,0.42) 0%, rgba(58,47,36,0.18) 35%, rgba(58,47,36,0.72) 82%, #fff8e7 100%)",
          }}
        />
        <PetalDrift />

        <div className="relative z-10 px-6 text-center">
          <p
            className="font-devanagari text-cream"
            style={{
              fontSize: "clamp(1.6rem, 6vw, 3.4rem)",
              letterSpacing: "0.06em",
              textShadow: "0 0 60px rgba(212,175,55,0.75)",
              opacity: entered ? 1 : 0,
              transform: `translateY(${entered ? 0 : 18}px)`,
              transition: `opacity 2600ms ${EASE}, transform 2600ms ${EASE}`,
            }}
          >
            राधे कृष्ण
          </p>

          <h1
            className="mt-8 font-display text-cream"
            style={{
              fontSize: "clamp(2.4rem, 10vw, 6.5rem)",
              letterSpacing: "0.18em",
              textIndent: "0.18em",
              lineHeight: 1.05,
              textShadow: "0 0 90px rgba(212,175,55,0.55)",
              opacity: entered ? 1 : 0,
              transition: `opacity 3000ms 600ms ${EASE}`,
            }}
          >
            Lord Krishna
          </h1>

          <p
            className="mx-auto mt-8 max-w-2xl font-body text-cream/80"
            style={{
              fontSize: "clamp(0.74rem, 1.9vw, 0.95rem)",
              fontWeight: 200,
              lineHeight: 2.1,
              letterSpacing: "0.13em",
              opacity: entered ? 1 : 0,
              transition: `opacity 2600ms 1400ms ${EASE}`,
            }}
          >
            The Divine Flute. The Teacher of the Bhagavad Gita. The Embodiment of
            Love and Wisdom.
          </p>

          <a
            href="#who"
            className="mt-14 inline-block rounded-full border border-gold/60 bg-peacock/25 px-12 py-4 font-body text-[0.64rem] tracking-[0.34em] text-cream backdrop-blur-sm transition-all duration-1000 hover:border-gold hover:bg-gold/25 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
            style={{
              boxShadow: "0 0 60px -20px rgba(212,175,55,0.95)",
              opacity: entered ? 1 : 0,
              transition: `opacity 2400ms 2200ms ${EASE}, border-color 900ms, background-color 900ms`,
            }}
          >
            BEGIN THE JOURNEY
          </a>
        </div>

        <span
          aria-hidden="true"
          className="moon-glow absolute bottom-8 left-1/2 h-14 w-px -translate-x-1/2"
          style={{
            background: "linear-gradient(to bottom, transparent, rgba(212,175,55,0.9))",
          }}
        />
      </section>

      {/* ---------------- 1. WHO IS KRISHNA ---------------- */}
      <section
        id="who"
        className="relative mx-auto w-full max-w-6xl scroll-mt-10 px-6 py-28 sm:px-10 sm:py-40"
      >
        <SectionLabel sanskrit="कृष्ण तत्त्व" label="WHO IS KRISHNA" />
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <p className="font-body text-[0.9rem] font-light leading-loose tracking-[0.06em] text-brown/85">
              Krishna is the eighth avatar of Vishnu and, to countless hearts, the
              whole of the divine wearing a peacock feather. He arrives not as
              thunder but as a flute heard from across a river at dusk.
            </p>
            <p className="mt-7 font-body text-[0.86rem] font-light leading-loose tracking-[0.06em] text-brown/65">
              He is the child who steals butter, the friend who runs barefoot with
              cowherds, the beloved of Radha, the king of Dwarka and the charioteer
              who steadies a trembling warrior with seven hundred verses of
              clarity. Every role he takes he takes completely, and none of them
              hold him.
            </p>
            <p className="mt-7 font-body text-[0.86rem] font-light leading-loose tracking-[0.06em] text-brown/65">
              His teaching, in the end, is playful and enormous: live fully, act
              without grasping, love without condition. Leela — divine play — is not
              an escape from the world. It is the way a free being moves through it.
            </p>
            <p className="mt-10 font-devanagari text-peacock/80" style={{ fontSize: "1.15rem" }}>
              वसुदेवसुतं देवं कंसचाणूरमर्दनम्
            </p>
          </Reveal>

          <Reveal className="order-1 lg:order-2" delay={200}>
            <div
              className="relative overflow-hidden rounded-3xl border border-gold/25"
              style={{ boxShadow: "0 30px 70px -50px rgba(58,47,36,0.9)" }}
            >
              <img
                src={rasaArt}
                alt="Krishna and Radha dancing with the gopis in the moonlit forest"
                width={1024}
                height={1024}
                loading="lazy"
                decoding="async"
                className="w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- 2. BAL LEELA ---------------- */}
      <section className="relative w-full bg-soft-ivory px-6 py-28 sm:py-36">
        <div className="mx-auto w-full max-w-6xl">
          <SectionLabel sanskrit="बाल लीला" label="DIVINE CHILDHOOD" />
          <Reveal className="mx-auto mb-14 max-w-xl text-center">
            <p className="font-body text-[0.82rem] font-light leading-loose tracking-[0.08em] text-brown/55">
              Before the philosopher, the child. Six mornings from Gokul and
              Vrindavan that the world has never stopped retelling.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BAL_LEELA.map((l, i) => (
              <Reveal key={l.id} delay={(i % 3) * 120}>
                <article
                  className="group h-full overflow-hidden rounded-2xl border border-peacock/12 bg-cream transition-all duration-700 hover:-translate-y-1.5 hover:border-gold/60"
                  style={{ boxShadow: "0 22px 50px -40px rgba(58,47,36,0.7)" }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={l.image}
                      alt={l.title}
                      width={1024}
                      height={1280}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="font-devanagari text-[0.9rem] text-peacock/80">
                      {l.sanskrit}
                    </p>
                    <h3
                      className="mt-2 font-display text-brown"
                      style={{ fontSize: "1.02rem", letterSpacing: "0.1em" }}
                    >
                      {l.title}
                    </h3>
                    <p className="mt-3 font-body text-[0.79rem] font-light leading-relaxed tracking-[0.05em] text-brown/60">
                      {l.summary}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 3. SACRED SYMBOLS ---------------- */}
      <section className="relative mx-auto w-full max-w-6xl px-6 py-28 sm:px-10 sm:py-36">
        <SectionLabel sanskrit="पवित्र प्रतीक" label="SACRED SYMBOLS" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {K_SYMBOLS.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 120}>
              <KSymbolCard symbol={s} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- 4. VRINDAVAN ---------------- */}
      <section className="relative flex min-h-[90dvh] w-full items-center justify-center overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0">
          <img
            src={vrindavan}
            alt="The forests of Vrindavan beside the Yamuna in golden light"
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
              "linear-gradient(to bottom, #fff8e7 0%, rgba(58,47,36,0.35) 26%, rgba(58,47,36,0.55) 70%, #fff8e7 100%)",
          }}
        />
        <PetalDrift density={1.3} />

        <Reveal className="relative z-10 max-w-2xl px-6 text-center">
          <p className="font-devanagari text-cream/90">वृन्दावन</p>
          <h2
            className="mt-4 font-display text-cream"
            style={{
              fontSize: "clamp(1.8rem, 6vw, 3.4rem)",
              letterSpacing: "0.2em",
              textShadow: "0 0 70px rgba(212,175,55,0.6)",
            }}
          >
            VRINDAVAN
          </h2>
          <p className="mt-8 font-body text-[0.86rem] font-light leading-loose tracking-[0.1em] text-cream/85">
            Kadamba trees bending over the Yamuna, peacocks calling before rain,
            cows returning at dusk in a haze of golden dust. Here the divine did
            not preach — it played.
          </p>
          <p className="mt-6 font-body text-[0.82rem] font-light leading-loose tracking-[0.1em] text-cream/60">
            They say Vrindavan is not a place on a map but a state of the heart:
            wherever love is offered without conditions, the flute is already
            playing.
          </p>
        </Reveal>
      </section>

      {/* ---------------- 5. BHAGAVAD GITA ---------------- */}
      <section className="relative w-full overflow-hidden px-6 py-28 sm:py-36">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${gitaArt})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #fff8e7, rgba(255,248,231,0.82), #fff8e7)",
          }}
        />
        <div className="relative mx-auto w-full max-w-6xl">
          <SectionLabel sanskrit="श्रीमद्भगवद्गीता" label="THE BHAGAVAD GITA" />
          <Reveal className="mx-auto mb-14 max-w-xl text-center">
            <p className="font-body text-[0.82rem] font-light leading-loose tracking-[0.08em] text-brown/55">
              Spoken between two armies, to one man who could not lift his bow.
              Seven hundred verses on how to live.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {GITA.map((g, i) => (
              <Reveal key={g.ref} delay={(i % 3) * 120}>
                <article
                  className="h-full rounded-2xl border border-peacock/12 bg-soft-ivory p-7 transition-all duration-700 hover:-translate-y-1 hover:border-gold/60"
                  style={{ boxShadow: "0 22px 50px -40px rgba(58,47,36,0.65)" }}
                >
                  <p className="font-body text-[0.56rem] tracking-[0.34em] text-gold">
                    {g.theme.toUpperCase()}
                  </p>
                  <p className="mt-4 font-devanagari text-[1rem] leading-loose text-peacock">
                    {g.sanskrit}
                  </p>
                  <blockquote className="mt-4 font-body text-[0.88rem] font-light italic leading-loose tracking-[0.04em] text-brown/85">
                    {g.verse}
                  </blockquote>
                  <p className="mt-4 font-body text-[0.78rem] font-light leading-relaxed tracking-[0.05em] text-brown/55">
                    {g.note}
                  </p>
                  <p className="mt-5 font-body text-[0.56rem] tracking-[0.28em] text-brown/35">
                    {g.ref.toUpperCase()}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 6. SACRED STORIES ---------------- */}
      <section className="relative w-full bg-soft-ivory px-6 py-28 sm:py-36">
        <div className="mx-auto w-full max-w-6xl">
          <SectionLabel sanskrit="पुराण कथा" label="SACRED STORIES" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {K_STORIES.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 130}>
                <button
                  type="button"
                  onClick={() => setStory(s)}
                  className="group relative block h-full w-full overflow-hidden rounded-2xl border border-peacock/12 bg-brown text-left transition-all duration-700 hover:-translate-y-1.5 hover:border-gold/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
                  style={{ boxShadow: "0 22px 50px -40px rgba(58,47,36,0.7)" }}
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      width={1024}
                      height={1280}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(58,47,36,0.96) 12%, rgba(58,47,36,0.35) 55%, transparent 100%)",
                      }}
                    />
                  </div>
                  <div className="relative -mt-24 p-6">
                    <p className="font-devanagari text-[0.9rem] text-gold">
                      {s.sanskrit}
                    </p>
                    <h3
                      className="mt-2 font-display text-cream"
                      style={{ fontSize: "1.05rem", letterSpacing: "0.1em" }}
                    >
                      {s.title}
                    </h3>
                    <p className="mt-3 font-body text-[0.78rem] font-light leading-relaxed tracking-[0.05em] text-cream/70">
                      {s.summary}
                    </p>
                    <span
                      aria-hidden="true"
                      className="mt-5 inline-flex items-center gap-3 font-body text-[0.58rem] tracking-[0.32em] text-cream/55 transition-colors duration-700 group-hover:text-gold"
                    >
                      READ
                      <span className="h-px w-7 bg-cream/40 transition-all duration-700 group-hover:w-12 group-hover:bg-gold" />
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 7. MANTRAS ---------------- */}
      <section className="relative w-full px-6 py-28 sm:py-36">
        <div className="mx-auto w-full max-w-4xl">
          <SectionLabel sanskrit="मन्त्र" label="MANTRAS" />
          {MANTRAS.map((m, i) => (
            <Reveal
              key={m.translit}
              delay={i * 160}
              className={`${i === 0 ? "" : "mt-8"} rounded-3xl border border-gold/30 bg-soft-ivory p-9 text-center sm:p-12`}
            >
              <p
                className="whitespace-pre-line font-devanagari text-peacock"
                style={{ fontSize: "clamp(1.1rem, 3.6vw, 1.9rem)", lineHeight: 1.9 }}
              >
                {m.sanskrit}
              </p>
              <p className="mt-5 whitespace-pre-line font-body text-[0.66rem] leading-relaxed tracking-[0.26em] text-gold">
                {m.translit}
              </p>
              <p className="mx-auto mt-6 max-w-xl font-body text-[0.82rem] font-light leading-loose tracking-[0.06em] text-brown/65">
                {m.meaning}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- 8. DEVOTION SPACE ---------------- */}
      <section className="relative w-full overflow-hidden px-6 py-28 sm:py-40">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 45%, rgba(14,90,138,0.95), rgba(58,47,36,0.98) 68%)",
          }}
        />
        <PetalDrift density={0.7} />
        <div className="relative mx-auto w-full max-w-3xl">
          <Reveal className="mb-12 text-center">
            <p className="font-devanagari text-gold/85">भक्ति</p>
            <h2
              className="mt-3 font-display text-cream"
              style={{ fontSize: "clamp(1.3rem, 3.6vw, 2.1rem)", letterSpacing: "0.24em" }}
            >
              DEVOTION SPACE
            </h2>
            <span
              aria-hidden="true"
              className="mx-auto mt-6 block h-px w-24"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(212,175,55,0.9), transparent)",
              }}
            />
          </Reveal>
          <Devotion />
        </div>
      </section>

      {/* ---------------- 9. TEACHINGS ---------------- */}
      <section className="relative mx-auto w-full max-w-6xl px-6 py-28 sm:px-10 sm:py-36">
        <SectionLabel sanskrit="उपदेश" label="TIMELESS TEACHINGS" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {K_TEACHINGS.map((t, i) => (
            <Reveal key={t.text} delay={(i % 3) * 120}>
              <figure
                className="h-full rounded-2xl border border-peacock/12 bg-soft-ivory p-8 transition-colors duration-700 hover:border-gold/60"
                style={{ boxShadow: "0 22px 50px -42px rgba(58,47,36,0.65)" }}
              >
                <span aria-hidden="true" className="block font-display text-2xl text-gold">
                  ॐ
                </span>
                <blockquote className="mt-4 font-body text-[0.9rem] font-light italic leading-loose tracking-[0.04em] text-brown/85">
                  {t.text}
                </blockquote>
                <figcaption className="mt-6 font-body text-[0.58rem] tracking-[0.3em] text-brown/40">
                  {t.source.toUpperCase()}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- 10. GALLERY ---------------- */}
      <section className="relative w-full bg-soft-ivory px-6 py-28 sm:py-36">
        <div className="mx-auto w-full max-w-6xl">
          <SectionLabel sanskrit="चित्रशाला" label="GALLERY" />
          <Reveal>
            <KGallery />
          </Reveal>
        </div>
      </section>

      {/* ---------------- 11. CLOSING ---------------- */}
      <section className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${K_GALLERY[7]?.src ?? hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(58,47,36,0.55), rgba(58,47,36,0.92) 65%)",
          }}
        />
        <PetalDrift density={0.8} />

        <Reveal className="relative z-10 px-6 text-center">
          <p
            className="font-devanagari text-cream"
            style={{
              fontSize: "clamp(1.7rem, 7vw, 4rem)",
              letterSpacing: "0.05em",
              textShadow: "0 0 70px rgba(212,175,55,0.7)",
            }}
          >
            राधे राधे
          </p>
          <p className="mx-auto mt-8 max-w-lg font-body text-[0.85rem] font-light leading-loose tracking-[0.14em] text-cream/80">
            May the wisdom and love of Lord Krishna illuminate your heart.
          </p>
          <Link
            to="/hub"
            className="mt-14 inline-block rounded-full border border-gold/60 px-12 py-4 font-body text-[0.62rem] tracking-[0.32em] text-cream transition-all duration-1000 hover:border-gold hover:bg-gold/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
            style={{ boxShadow: "0 0 60px -22px rgba(212,175,55,0.95)" }}
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
          backgroundColor: "rgba(58,47,36,0.92)",
          backdropFilter: "blur(8px)",
          opacity: story ? 1 : 0,
          pointerEvents: story ? "auto" : "none",
          transition: `opacity 900ms ${EASE}`,
        }}
      >
        {story ? (
          <article
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[86dvh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-gold/30 bg-cream p-8 sm:p-12"
          >
            <img
              src={story.image}
              alt={story.title}
              width={1024}
              height={1280}
              className="h-52 w-full rounded-2xl object-cover sm:h-64"
            />
            <p className="mt-7 font-devanagari text-peacock/80">{story.sanskrit}</p>
            <h3
              className="mt-2 font-display text-brown"
              style={{ fontSize: "clamp(1.2rem, 4vw, 1.9rem)", letterSpacing: "0.12em" }}
            >
              {story.title}
            </h3>
            <p className="mt-6 font-body text-[0.9rem] font-light leading-loose tracking-[0.05em] text-brown/80">
              {story.body}
            </p>
            <button
              type="button"
              onClick={() => setStory(null)}
              className="mt-9 font-body text-[0.6rem] tracking-[0.32em] text-brown/45 transition-colors duration-700 hover:text-gold focus-visible:outline-none"
            >
              CLOSE
            </button>
          </article>
        ) : null}
      </div>
    </main>
  );
}
