import { images } from "@/config/images";
import { useLanguage } from "@/i18n/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();

  // Se parte la línea de SEA para inyectar el link
  const sea = t("about.sea");
  const seaIndex = sea.indexOf("SEA");
  const seaBefore = seaIndex >= 0 ? sea.slice(0, seaIndex) : sea;
  const seaAfter = seaIndex >= 0 ? sea.slice(seaIndex + 3) : "";

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
          <p className="text-muted-foreground leading-relaxed text-base">{t("about.p2")}</p>
          <p className="leading-relaxed text-base font-medium text-foreground/80">
            {seaBefore}
            <a
              href="https://www.idiomas.org.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-navy underline underline-offset-2 hover:opacity-75 transition-opacity"
            >
              SEA
            </a>
            {seaAfter}
          </p>
        </div>
      </div>
    </section>
  );
}
