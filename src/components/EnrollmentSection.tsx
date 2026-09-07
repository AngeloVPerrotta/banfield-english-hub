import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const WHATSAPP_URL =
  "https://wa.me/5491136693725?text=Hola!%20Quiero%20consultar%20por%20un%20curso";

const STEPS = [1, 2, 3, 4];

export default function EnrollmentSection() {
  const { t } = useLanguage();

  return (
    <section id="inscripcion" className="py-20 lg:py-28 bg-cream">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-14 reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">{t("enrollment.title")}</h2>
          <div className="w-16 h-1 bg-secondary rounded-full mx-auto mt-4 mb-5" />
          <p className="text-muted-foreground text-lg">{t("enrollment.subtitle")}</p>
        </div>

        {/* Línea de tiempo: vertical en mobile, horizontal en desktop */}
        <div className="relative">
          {/* Conector horizontal: de centro a centro del primer y último círculo */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-navy/15"
          />

          <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-8">
            {STEPS.map((n, i) => (
              <li
                key={n}
                className={`reveal reveal-delay-${i + 1} relative flex gap-5 lg:flex-col lg:items-center lg:text-center`}
              >
                {/* Conector vertical hacia el paso siguiente (sólo mobile) */}
                {i < STEPS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="lg:hidden absolute left-6 top-12 -bottom-10 w-px bg-navy/15"
                  />
                )}

                <div className="relative z-10 flex-none w-12 h-12 rounded-full bg-navy ring-4 ring-cream flex items-center justify-center text-white font-bold text-lg">
                  {n}
                </div>

                <div className="lg:mt-5">
                  <h3 className="text-lg font-bold text-navy">{t(`enrollment.step${n}_title`)}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {t(`enrollment.step${n}_desc`)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="text-center mt-14 reveal">
          <p className="text-lg font-semibold text-navy">{t("enrollment.closing")}</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-7 py-3.5 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity active:scale-[0.97]"
          >
            <MessageCircle className="w-5 h-5" />
            {t("enrollment.cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
