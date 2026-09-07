import { useEffect, useState } from "react";
import { images } from "@/config/images";
import { useLanguage } from "@/i18n/LanguageContext";

const slides = images.hero.carousel;
const AUTOPLAY_MS = 5000;
const FADE_MS = 800;

const heroStyles = `
  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .hero-text {
    animation: fadeSlideUp 0.8s ease-out both;
  }
  .hero-buttons {
    animation: fadeSlideUp 0.8s ease-out 0.3s both;
  }
  .hero-slide {
    transition: opacity ${FADE_MS}ms ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .hero-slide { transition-duration: 0ms; }
  }
`;

export default function HeroSection() {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Las 6 fotos caen dentro del viewport, así que loading="lazy" no las
  // diferiría: se montan sólo las ya vistas más la siguiente, para no bajar
  // ~1,4 MB de imágenes en la carga inicial.
  const [mounted, setMounted] = useState(2);
  useEffect(() => {
    setMounted((n) => Math.max(n, Math.min(slides.length, index + 2)));
  }, [index]);

  // Autoplay en loop. El timer se reinicia con cada cambio de foto,
  // así un click en los dots también reinicia la cuenta de 5s.
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(
      () => setIndex((i) => (i + 1) % slides.length),
      AUTOPLAY_MS
    );
    return () => window.clearTimeout(id);
  }, [index, paused]);

  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center bg-navy overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <style>{heroStyles}</style>

      {/* Carrusel: fondo a sangre en mobile, columna derecha (45%) en desktop */}
      <div className="absolute inset-0 lg:left-[55%]">
        {slides.slice(0, mounted).map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            aria-hidden={i !== index}
            className="hero-slide absolute inset-0 w-full h-full object-cover object-[center_30%] lg:object-center"
            style={{ opacity: i === index ? 1 : 0 }}
            loading="eager"
            decoding="async"
          />
        ))}

        {/* Mobile: overlay azul al 70% para que el texto se lea encima */}
        <div className="absolute inset-0 bg-navy/70 lg:hidden" />

        {/* Desktop: empalme suave contra la columna de texto */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-navy to-transparent" />
      </div>

      {/* Contenido */}
      <div className="container relative z-10 py-20 lg:py-32">
        <div className="max-w-2xl lg:max-w-[46%] space-y-6">
          <div className="hero-text">
            <p className="text-gold font-semibold tracking-widest uppercase text-xs mb-6">
              {t("hero.badge")}
            </p>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.08] text-white">
              {t("hero.title")}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-lg leading-relaxed">
              {t("hero.subtitle")}
            </p>
          </div>
          <div className="hero-buttons flex flex-wrap gap-4 pt-2">
            <a
              href="https://wa.me/5491136693725"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-7 py-3.5 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity active:scale-[0.97]"
            >
              {t("hero.cta_primary")}
            </a>
            <a
              href="https://wa.me/5491136693725?text=Hola!%20Me%20interesa%20hacer%20un%20test%20de%20nivelaci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-7 py-3.5 rounded-lg font-semibold text-base hover:bg-white/10 transition-colors active:scale-[0.97]"
            >
              {t("hero.cta_secondary")}
            </a>
          </div>
        </div>
      </div>

      {/* Dots del carrusel — el offset deja libre la ola separadora (alto = 4.17vw) */}
      <div className="pointer-events-none absolute z-30 bottom-[max(2.5rem,5vw)] lg:bottom-[max(5.5rem,5vw)] left-0 right-0 lg:left-[55%] flex justify-center gap-1">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Ver foto ${i + 1} de ${slides.length}`}
            aria-current={i === index}
            className="pointer-events-auto p-2"
          >
            <span
              className={`block w-2 h-2 rounded-full transition-colors duration-300 ${
                i === index ? "bg-gold" : "bg-white/40"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto block">
          <path d="M0 60V20C360 0 720 40 1080 20C1260 10 1380 30 1440 20V60H0Z" fill="hsl(0 0% 100%)" />
        </svg>
      </div>
    </section>
  );
}
