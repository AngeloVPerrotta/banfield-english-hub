import { images } from "@/config/images";
import { useLanguage } from "@/i18n/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();

  // Split p2 around "SEA" to inject a link
  const p2 = t("about.p2");
  const seaIndex = p2.indexOf("SEA");
  const p2Before = seaIndex >= 0 ? p2.slice(0, seaIndex) : p2;
  const p2After = seaIndex >= 0 ? p2.slice(seaIndex + 3) : "";

  return (
    <section id="nosotros" className="py-20 lg:py-28">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal flex justify-center lg:justify-start">
          <img
            src={images.logo}
            alt="Escudo Cultural Inglesa de Banfield — Fundada en 1968"
            className="w-56 sm:w-72 drop-shadow-lg"
            loading="lazy"
          />
        </div>

        <div className="space-y-5 reveal reveal-delay-1">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">{t("about.title")}</h2>
          <div className="w-16 h-1 bg-secondary rounded-full" />
          <p className="text-muted-foreground leading-relaxed text-base">{t("about.p1")}</p>
          <p className="text-muted-foreground leading-relaxed text-base">
            {p2Before}
            <a
              href="https://www.idiomas.org.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-navy underline underline-offset-2 hover:opacity-75 transition-opacity"
            >
              SEA
            </a>
            {p2After}
          </p>
          <p className="text-muted-foreground leading-relaxed text-base font-medium text-foreground/80">
            {t("about.p3")}
          </p>
        </div>
      </div>
    </section>
  );
}
