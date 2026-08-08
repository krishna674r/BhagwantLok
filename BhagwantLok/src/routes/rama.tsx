import { createFileRoute, Link } from "@tanstack/react-router";

import { breadcrumbLd, canonical } from "@/lib/site";
import { useEffect, useState } from "react";

import ayodhya from "@/assets/rama-ayodhya.jpg";
import hero from "@/assets/rama-hero.jpg";
import ramrajya from "@/assets/rama-ramrajya.jpg";
import returnArt from "@/assets/rama-art-return.jpg";
import { LeafDrift } from "@/components/rama/LeafDrift";
import { RGallery } from "@/components/rama/RGallery";
import { RSymbolCard } from "@/components/rama/RSymbolCard";
import { SarayuAudio } from "@/components/rama/SarayuAudio";
import { Reveal } from "@/components/shiva/Reveal";
import {
  RAMAYANA,
  RAM_RAJYA_PILLARS,
  R_GALLERY,
  R_MANTRAS,
  R_STORIES,
  R_SYMBOLS,
  R_TEACHINGS,
  type RStory,
} from "@/components/rama/data";

export const Route = createFileRoute("/rama")({
  head: () => ({
    meta: [
      { title: "Shri Rama — A Pilgrimage Through Ayodhya | Bhagwant Lok" },
      {
        name: "description",
        content:
          "An immersive Rama journey: Ayodhya at sunrise, the Ramayana timeline, sacred symbols, teachings of dharma, illustrated stories, mantras, Ram Rajya and a gallery of divine art.",
      },
      { property: "og:title", content: "Shri Rama — Maryada Purushottam" },
      {
        property: "og:description",
        content:
          "Walk beside Shri Rama through Ayodhya, the forests of exile, Ram Setu and the dawn of Ram Rajya.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://divine-arrival-portal.lovable.app/rama" },
      { property: "og:image", content: "https://divine-arrival-portal.lovable.app/og-image.jpg" },
      { name: "twitter:image", content: "https://divine-arrival-portal.lovable.app/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: canonical("/rama") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Divine Journeys", path: "/hub" },
            { name: "Rama Journey", path: "/rama" },
          ]),
        ),
      },
    ],
  }),
  component: RamaJourney,
});

const EASE = "cubic-bezier(0.22, 0.61, 0.36, 1)";

function SectionLabel({ sanskrit, label }: { sanskrit: string; label: string }) {
  return (
    <Reveal className="mb-12 text-center">
      <p className="font-devanagari text-maroon/75" style={{ letterSpacing: "0.08em" }}>
        {sanskrit}
      </p>
      <h2
        className="mt-3 font-display text-ink"
        style={{ fontSize: "clamp(1.3rem, 3.6vw, 2.1rem)", letterSpacing: "0.24em" }}
      >
        {label}
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
  );
}

const ROLES = [
  { title: "Ideal Son", text: "He gave up a crown in a single breath so that his father's word to a queen would stand." },
  { title: "Ideal Brother", text: "Lakshmana followed him into exile; Bharata refused the throne for him. Such love is earned, not inherited." },
  { title: "Ideal Husband", text: "He crossed an ocean for Sita, and bore the sorrow of what duty later asked of them both." },
  { title: "Ideal King", text: "He held himself to the strictest reading of the law he asked his people to trust." },
  { title: "Defender of Dharma", text: "Not a conqueror of lands but a keeper of the line — maryada — that makes civilisation possible." },
];

function RamaJourney() {
  const [entered, setEntered] = useState(false);
  const [story, setStory] = useState<RStory | null>(null);

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
    <main className="relative w-full overflow-x-hidden bg-warm-ivory text-ink">
      <div className="fixed right-4 top-4 z-40 sm:right-6 sm:top-6">
        <SarayuAudio />
      </div>

      {/* ---------------- HERO ---------------- */}
      <section className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            opacity: entered ? 1 : 0,
            transform: `scale(${entered ? 1.03 : 1.12})`,
            transition: `opacity 3000ms ${EASE}, transform 18000ms ${EASE}`,
          }}
        >
          <img
            src={hero}
            alt="Ayodhya at golden sunrise with temple spires above the flowing Sarayu river"
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
              "radial-gradient(ellipse at 62% 28%, rgba(255,238,190,0.5), transparent 58%), radial-gradient(ellipse at 20% 78%, rgba(123,30,36,0.28), transparent 62%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(58,42,32,0.5) 0%, rgba(58,42,32,0.3) 34%, rgba(58,42,32,0.78) 82%, #fff8e8 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 62% 46% at 50% 52%, rgba(48,32,22,0.62), transparent 72%)",
          }}
        />
        <LeafDrift />


        <div className="relative z-10 px-6 text-center">
          <p
            className="font-devanagari text-warm-ivory"
            style={{
              fontSize: "clamp(1.7rem, 6vw, 3.5rem)",
              letterSpacing: "0.06em",
              textShadow: "0 0 60px rgba(217,140,26,0.8)",
              opacity: entered ? 1 : 0,
              transform: `translateY(${entered ? 0 : 18}px)`,
              transition: `opacity 2600ms ${EASE}, transform 2600ms ${EASE}`,
            }}
          >
            श्री राम
          </p>

          <h1
            className="mt-8 font-display text-warm-ivory"
            style={{
              fontSize: "clamp(2rem, 8.6vw, 5.6rem)",
              letterSpacing: "0.18em",
              textIndent: "0.18em",
              lineHeight: 1.06,
              textShadow: "0 0 90px rgba(212,175,55,0.6)",
              opacity: entered ? 1 : 0,
              transition: `opacity 3000ms 600ms ${EASE}`,
            }}
          >
            Maryada Purushottam
          </h1>

          <p
            className="mx-auto mt-8 max-w-2xl font-body text-warm-ivory"
            style={{
              fontSize: "clamp(0.76rem, 1.9vw, 0.98rem)",
              fontWeight: 300,
              lineHeight: 2.1,
              letterSpacing: "0.13em",
              textShadow: "0 2px 24px rgba(48,32,22,0.85)",
              opacity: entered ? 1 : 0,
              transition: `opacity 2600ms 1400ms ${EASE}`,
            }}
          >
            The Ideal King. The Embodiment of Dharma. The Light of Righteousness.
          </p>

          <a
            href="#who"
            className="mt-14 inline-block rounded-full border border-gold/60 bg-saffron/30 px-12 py-4 font-body text-[0.64rem] tracking-[0.34em] text-warm-ivory backdrop-blur-sm transition-all duration-1000 hover:border-gold hover:bg-gold/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
            style={{
              boxShadow: "0 0 60px -20px rgba(217,140,26,0.95)",
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

      {/* ---------------- 1. WHO IS RAMA ---------------- */}
      <section
        id="who"
        className="relative mx-auto w-full max-w-6xl scroll-mt-10 px-6 py-28 sm:px-10 sm:py-40"
      >
        <SectionLabel sanskrit="राम तत्त्व" label="WHO IS LORD RAMA" />
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="font-body text-[0.9rem] font-light leading-loose tracking-[0.06em] text-ink/85">
              Rama is the seventh avatar of Vishnu, born in Ayodhya to King
              Dasharatha — and yet the Ramayana almost never asks us to worship
              him. It asks us to watch him choose.
            </p>
            <p className="mt-7 font-body text-[0.86rem] font-light leading-loose tracking-[0.06em] text-ink/65">
              He is called Maryada Purushottam: the perfect man of the boundary.
              Where other divinities transcend the rules, Rama accepts them —
              every duty of a son, a husband, a brother, a king — and carries
              them without once setting the weight down.
            </p>
            <p className="mt-7 font-body text-[0.86rem] font-light leading-loose tracking-[0.06em] text-ink/65">
              His life is not a story of victories. It is a long record of
              sacrifices made quietly, on time, for others. That is why, for
              thousands of years, an entire civilisation has measured its idea of
              goodness against one exiled prince walking barefoot into a forest.
            </p>
            <p className="mt-10 font-devanagari text-maroon/80" style={{ fontSize: "1.15rem" }}>
              रामो विग्रहवान् धर्मः
            </p>
            <p className="mt-2 font-body text-[0.62rem] tracking-[0.28em] text-ink/40">
              RAMA IS DHARMA GIVEN A BODY
            </p>
          </Reveal>

          <div className="grid gap-4">
            {ROLES.map((r, i) => (
              <Reveal key={r.title} delay={i * 110}>
                <article
                  className="rounded-2xl border border-maroon/12 bg-soft-cream p-6 transition-colors duration-700 hover:border-gold/60"
                  style={{ boxShadow: "0 20px 46px -42px rgba(58,42,32,0.7)" }}
                >
                  <h3
                    className="font-display text-ink"
                    style={{ fontSize: "0.95rem", letterSpacing: "0.16em" }}
                  >
                    {r.title.toUpperCase()}
                  </h3>
                  <p className="mt-3 font-body text-[0.8rem] font-light leading-relaxed tracking-[0.05em] text-ink/60">
                    {r.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 2. RAMAYANA TIMELINE ---------------- */}
      <section className="relative w-full bg-soft-cream px-6 py-28 sm:py-36">
        <div className="mx-auto w-full max-w-5xl">
          <SectionLabel sanskrit="रामायण" label="THE RAMAYANA JOURNEY" />
          <Reveal className="mx-auto mb-16 max-w-xl text-center">
            <p className="font-body text-[0.82rem] font-light leading-loose tracking-[0.08em] text-ink/55">
              Ten milestones, from a palace in Kosala to the dawn of an ideal
              kingdom.
            </p>
          </Reveal>

          <ol className="relative border-l border-gold/30 pl-6 sm:pl-12">
            {RAMAYANA.map((m, i) => (
              <Reveal as="li" key={m.id} delay={(i % 2) * 120} className="relative pb-16 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute -left-[1.68rem] top-2 h-2.5 w-2.5 rounded-full bg-saffron sm:-left-[3.18rem]"
                  style={{ boxShadow: "0 0 22px 4px rgba(217,140,26,0.45)" }}
                />
                <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-start">
                  <div>
                    <p className="font-body text-[0.55rem] tracking-[0.34em] text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-3 font-devanagari text-[0.95rem] text-maroon/80">
                      {m.sanskrit}
                    </p>
                    <h3
                      className="mt-1 font-display text-ink"
                      style={{ fontSize: "1.1rem", letterSpacing: "0.12em" }}
                    >
                      {m.title}
                    </h3>
                    <p className="mt-4 max-w-xl font-body text-[0.84rem] font-light leading-loose tracking-[0.05em] text-ink/65">
                      {m.text}
                    </p>
                  </div>
                  {m.image ? (
                    <img
                      src={m.image}
                      alt={m.title}
                      width={1024}
                      height={1280}
                      loading="lazy"
                      decoding="async"
                      className="h-40 w-full rounded-2xl border border-maroon/12 object-cover sm:h-32 sm:w-44"
                      style={{ boxShadow: "0 20px 46px -40px rgba(58,42,32,0.8)" }}
                    />
                  ) : null}
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------- 3. SACRED SYMBOLS ---------------- */}
      <section className="relative mx-auto w-full max-w-6xl px-6 py-28 sm:px-10 sm:py-36">
        <SectionLabel sanskrit="पवित्र प्रतीक" label="SACRED SYMBOLS" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {R_SYMBOLS.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 120}>
              <RSymbolCard symbol={s} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- 4. AYODHYA ---------------- */}
      <section className="relative flex min-h-[90dvh] w-full items-center justify-center overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0">
          <img
            src={ayodhya}
            alt="The Ram Mandir and the ghats of the Sarayu river at dawn"
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
              "linear-gradient(to bottom, #fff8e8 0%, rgba(58,42,32,0.32) 26%, rgba(58,42,32,0.58) 70%, #fff8e8 100%)",
          }}
        />
        <LeafDrift density={1.2} />

        <Reveal className="relative z-10 max-w-2xl px-6 text-center">
          <p className="font-devanagari text-warm-ivory/90">अयोध्या</p>
          <h2
            className="mt-4 font-display text-warm-ivory"
            style={{
              fontSize: "clamp(1.8rem, 6vw, 3.4rem)",
              letterSpacing: "0.2em",
              textShadow: "0 0 70px rgba(217,140,26,0.65)",
            }}
          >
            AYODHYA
          </h2>
          <p className="mt-8 font-body text-[0.86rem] font-light leading-loose tracking-[0.1em] text-warm-ivory/85">
            The city whose name means the unconquerable. Sandstone spires above
            the Sarayu, conch shells before sunrise, lamps set adrift on the
            water, and steps worn smooth by fourteen centuries of feet.
          </p>
          <p className="mt-6 font-body text-[0.82rem] font-light leading-loose tracking-[0.1em] text-warm-ivory/60">
            To stand at the ghats at first light is to understand why he wanted
            to come home.
          </p>
        </Reveal>
      </section>

      {/* ---------------- 5. TEACHINGS ---------------- */}
      <section className="relative mx-auto w-full max-w-6xl px-6 py-28 sm:px-10 sm:py-36">
        <SectionLabel sanskrit="राम उपदेश" label="TEACHINGS OF RAMA" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {R_TEACHINGS.map((t, i) => (
            <Reveal key={t.source} delay={(i % 4) * 110}>
              <figure
                className="h-full rounded-2xl border border-maroon/12 bg-soft-cream p-7 transition-all duration-700 hover:-translate-y-1 hover:border-gold/60"
                style={{ boxShadow: "0 22px 50px -42px rgba(58,42,32,0.6)" }}
              >
                <span aria-hidden="true" className="block font-display text-xl text-saffron">
                  ॐ
                </span>
                <blockquote className="mt-4 font-body text-[0.85rem] font-light italic leading-loose tracking-[0.04em] text-ink/85">
                  {t.text}
                </blockquote>
                <figcaption className="mt-6 font-body text-[0.56rem] tracking-[0.3em] text-ink/40">
                  {t.source.toUpperCase()}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- 6. SACRED STORIES ---------------- */}
      <section className="relative w-full bg-soft-cream px-6 py-28 sm:py-36">
        <div className="mx-auto w-full max-w-6xl">
          <SectionLabel sanskrit="पुराण कथा" label="SACRED STORIES" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {R_STORIES.map((s, i) => (
              <Reveal key={s.id} delay={(i % 4) * 120}>
                <button
                  type="button"
                  onClick={() => setStory(s)}
                  className="group relative block h-full w-full overflow-hidden rounded-2xl border border-maroon/12 bg-ink text-left transition-all duration-700 hover:-translate-y-1.5 hover:border-gold/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
                  style={{ boxShadow: "0 22px 50px -40px rgba(58,42,32,0.7)" }}
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
                          "linear-gradient(to top, rgba(58,42,32,0.96) 12%, rgba(58,42,32,0.35) 55%, transparent 100%)",
                      }}
                    />
                  </div>
                  <div className="relative -mt-24 p-6">
                    <p className="font-devanagari text-[0.9rem] text-gold">{s.sanskrit}</p>
                    <h3
                      className="mt-2 font-display text-warm-ivory"
                      style={{ fontSize: "1rem", letterSpacing: "0.1em" }}
                    >
                      {s.title}
                    </h3>
                    <p className="mt-3 font-body text-[0.78rem] font-light leading-relaxed tracking-[0.05em] text-warm-ivory/70">
                      {s.summary}
                    </p>
                    <span
                      aria-hidden="true"
                      className="mt-5 inline-flex items-center gap-3 font-body text-[0.58rem] tracking-[0.32em] text-warm-ivory/55 transition-colors duration-700 group-hover:text-gold"
                    >
                      READ
                      <span className="h-px w-7 bg-warm-ivory/40 transition-all duration-700 group-hover:w-12 group-hover:bg-gold" />
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
          {R_MANTRAS.map((m, i) => (
            <Reveal
              key={m.translit}
              delay={i * 160}
              className={`${i === 0 ? "" : "mt-8"} rounded-3xl border border-gold/30 bg-soft-cream p-9 text-center sm:p-12`}
            >
              <p
                className="whitespace-pre-line font-devanagari text-maroon"
                style={{ fontSize: "clamp(1.1rem, 3.6vw, 1.9rem)", lineHeight: 1.9 }}
              >
                {m.sanskrit}
              </p>
              <p className="mt-5 whitespace-pre-line font-body text-[0.66rem] leading-relaxed tracking-[0.26em] text-saffron">
                {m.translit}
              </p>
              <p className="mx-auto mt-6 max-w-xl font-body text-[0.82rem] font-light leading-loose tracking-[0.06em] text-ink/65">
                {m.meaning}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- 8. RAM RAJYA ---------------- */}
      <section className="relative w-full overflow-hidden px-6 py-28 sm:py-40">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${ramrajya})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #fff8e8 0%, rgba(255,248,232,0.78) 22%, rgba(255,248,232,0.84) 78%, #fff8e8 100%)",
          }}
        />
        <LeafDrift density={0.7} />
        <div className="relative mx-auto w-full max-w-6xl">
          <SectionLabel sanskrit="रामराज्य" label="RAM RAJYA" />
          <Reveal className="mx-auto mb-14 max-w-xl text-center">
            <p className="font-body text-[0.84rem] font-light leading-loose tracking-[0.08em] text-ink/60">
              An age remembered not for its riches but for its fairness — the
              kingdom every later king was quietly compared to.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {RAM_RAJYA_PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 5) * 110}>
                <article
                  className="h-full rounded-2xl border border-gold/25 bg-warm-ivory/85 p-7 text-center backdrop-blur-sm transition-all duration-700 hover:-translate-y-1 hover:border-gold/70"
                  style={{ boxShadow: "0 22px 50px -42px rgba(58,42,32,0.6)" }}
                >
                  <span aria-hidden="true" className="block text-2xl">
                    {p.glyph}
                  </span>
                  <h3
                    className="mt-4 font-display text-ink"
                    style={{ fontSize: "0.9rem", letterSpacing: "0.16em" }}
                  >
                    {p.title.toUpperCase()}
                  </h3>
                  <p className="mt-3 font-body text-[0.78rem] font-light leading-relaxed tracking-[0.05em] text-ink/60">
                    {p.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 9. GALLERY ---------------- */}
      <section className="relative w-full bg-soft-cream px-6 py-28 sm:py-36">
        <div className="mx-auto w-full max-w-6xl">
          <SectionLabel sanskrit="चित्रशाला" label="GALLERY" />
          <Reveal>
            <RGallery />
          </Reveal>
        </div>
      </section>

      {/* ---------------- 10. CLOSING ---------------- */}
      <section className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${R_GALLERY[8]?.src ?? returnArt})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(58,42,32,0.52), rgba(58,42,32,0.93) 66%)",
          }}
        />
        <LeafDrift density={0.8} />

        <Reveal className="relative z-10 px-6 text-center">
          <p
            className="font-devanagari text-warm-ivory"
            style={{
              fontSize: "clamp(1.7rem, 7vw, 4rem)",
              letterSpacing: "0.05em",
              textShadow: "0 0 70px rgba(217,140,26,0.75)",
            }}
          >
            जय श्री राम
          </p>
          <p className="mx-auto mt-8 max-w-lg font-body text-[0.85rem] font-light leading-loose tracking-[0.14em] text-warm-ivory/80">
            May the path of Dharma always illuminate your life.
          </p>
          <Link
            to="/hub"
            className="mt-14 inline-block rounded-full border border-gold/60 px-12 py-4 font-body text-[0.62rem] tracking-[0.32em] text-warm-ivory transition-all duration-1000 hover:border-gold hover:bg-gold/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
            style={{ boxShadow: "0 0 60px -22px rgba(217,140,26,0.95)" }}
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
          backgroundColor: "rgba(58,42,32,0.93)",
          backdropFilter: "blur(8px)",
          opacity: story ? 1 : 0,
          pointerEvents: story ? "auto" : "none",
          transition: `opacity 900ms ${EASE}`,
        }}
      >
        {story ? (
          <article
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[86dvh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-gold/30 bg-warm-ivory p-8 sm:p-12"
          >
            <img
              src={story.image}
              alt={story.title}
              width={1024}
              height={1280}
              className="h-52 w-full rounded-2xl object-cover sm:h-64"
            />
            <p className="mt-7 font-devanagari text-maroon/80">{story.sanskrit}</p>
            <h3
              className="mt-2 font-display text-ink"
              style={{ fontSize: "clamp(1.2rem, 4vw, 1.9rem)", letterSpacing: "0.12em" }}
            >
              {story.title}
            </h3>
            <p className="mt-6 font-body text-[0.9rem] font-light leading-loose tracking-[0.05em] text-ink/80">
              {story.body}
            </p>
            <button
              type="button"
              onClick={() => setStory(null)}
              className="mt-9 font-body text-[0.6rem] tracking-[0.32em] text-ink/45 transition-colors duration-700 hover:text-saffron focus-visible:outline-none"
            >
              CLOSE
            </button>
          </article>
        ) : null}
      </div>
    </main>
  );
}
