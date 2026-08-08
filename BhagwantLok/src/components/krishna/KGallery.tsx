import { useCallback, useEffect, useState } from "react";

import { K_GALLERY } from "./data";

/** Masonry artwork gallery with a soft lightbox. */
export function KGallery() {
  const [index, setIndex] = useState<number | null>(null);
  const close = useCallback(() => setIndex(null), []);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") setIndex((i) => ((i ?? 0) + 1) % K_GALLERY.length);
      if (e.key === "ArrowLeft")
        setIndex((i) => ((i ?? 0) - 1 + K_GALLERY.length) % K_GALLERY.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close]);

  const active = index === null ? null : K_GALLERY[index];

  return (
    <>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {K_GALLERY.map((img, i) => (
          <button
            key={img.title}
            type="button"
            onClick={() => setIndex(i)}
            className="group relative block w-full overflow-hidden rounded-xl border border-peacock/12 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
          >
            <img
              src={img.src}
              alt={img.alt}
              width={img.w}
              height={img.h}
              loading="lazy"
              decoding="async"
              className="w-full transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brown/75 via-brown/5 to-transparent"
            />
            <span className="pointer-events-none absolute bottom-4 left-5 font-display text-[0.72rem] tracking-[0.26em] text-cream transition-colors duration-700 group-hover:text-gold">
              {img.title.toUpperCase()}
            </span>
          </button>
        ))}
      </div>

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Artwork viewer"
        aria-hidden={!active}
        onClick={close}
        className="fixed inset-0 z-50 flex items-center justify-center p-6"
        style={{
          backgroundColor: "rgba(58,47,36,0.92)",
          backdropFilter: "blur(6px)",
          opacity: active ? 1 : 0,
          pointerEvents: active ? "auto" : "none",
          transition: "opacity 900ms cubic-bezier(0.22,0.61,0.36,1)",
        }}
      >
        {active ? (
          <figure className="relative max-h-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={active.src}
              alt={active.alt}
              width={active.w}
              height={active.h}
              className="mx-auto max-h-[78dvh] w-auto rounded-xl border border-gold/25 object-contain"
            />
            <figcaption className="mt-5 text-center font-display text-[0.72rem] tracking-[0.3em] text-cream/75">
              {active.title.toUpperCase()}
            </figcaption>
            <button
              type="button"
              onClick={close}
              className="absolute -top-12 right-0 font-body text-[0.6rem] tracking-[0.3em] text-cream/60 transition-colors hover:text-gold focus-visible:outline-none"
            >
              CLOSE
            </button>
          </figure>
        ) : null}
      </div>
    </>
  );
}
