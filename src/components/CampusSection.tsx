import { images } from "@/config/images";
import { Monitor, FileText, BarChart3 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function CampusSection() {
  const { t } = useLanguage();

  const features = [
    { icon: Monitor, key: "campus.feature_material" },
    { icon: FileText, key: "campus.feature_boletines" },
    { icon: BarChart3, key: "campus.feature_examenes" },
  ];

  return (
    <section id="campus" className="py-20 lg:py-28 bg-navy">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground">
            {t("campus.title")}
          </h2>
          <div className="w-16 h-1 bg-gold rounded-full" />
          <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-lg">
            {t("campus.desc")}
          </p>
          <div className="space-y-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-3 text-primary-foreground/90">
                <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center flex-shrink-0">
                  <f.icon className="w-5 h-5 text-gold" />
                </div>
                <span className="font-medium">{t(f.key)}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2">
            <a
              href="https://campusnube.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-navy px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity active:scale-[0.97]"
            >
              {t("campus.cta")}
            </a>
            <span className="text-primary-foreground/60 text-sm">{t("campus.cta_sub")}</span>
          </div>
        </div>

        <div className="reveal reveal-delay-2 flex justify-center">
          <img
            src={images.campus}
            alt="Alumnos de la Cultural Inglesa de Banfield en clase"
            className="w-full max-w-md drop-shadow-xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
