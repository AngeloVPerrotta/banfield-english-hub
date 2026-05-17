import { images } from "@/config/images";
import { useLanguage } from "@/i18n/LanguageContext";

const heroStyles = `
  @keyframes kenburns {
    0%   { transform: scale(1) translate(0, 0); }
    50%  { transform: scale(1.15) translate(-2%, -1%); }
    100% { transform: scale(1) translate(0, 0); }
  }
  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .hero-img {
    animation: kenburns 20s ease-in-out infinite;
  }
  .hero-text {
    animation: fadeSlideUp 0.8s ease-out both;
  }
  .hero-buttons {
    animation: fadeSlideUp 0.8s ease-out 0.3s both;
  }
`;

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center bg-navy overflow-hidden">
      <style>{heroStyles}</style>

      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={images.hero}
          alt="Pasillo de la Cultural Inglesa de Banfield decorado para su aniversario"
          className="hero-img w-full h-full object-cover object-[center_30%]"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(27,58,92,0.85) 0%, rgba(27,58,92,0.55) 60%, rgba(27,58,92,0.3) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20 lg:py-32">
        <div className="max-w-2xl space-y-6">
          <div className="hero-text">
            <p className="text-gold font-semibold tracking-widest uppercase text-xs mb-6">
              {t("hero.badge")}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] text-white">
              {t("hero.title")}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-lg leading-relaxed">
              {t("hero.subtitle1")}{" "}
              <br className="hidden sm:block" />
              <span className="font-medium text-white/95">{t("hero.subtitle2")}</span>
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

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full h-auto block">
          <path d="M0 60V20C360 0 720 40 1080 20C1260 10 1380 30 1440 20V60H0Z" fill="hsl(0 0% 100%)" />
        </svg>
      </div>
    </section>
  );
}
