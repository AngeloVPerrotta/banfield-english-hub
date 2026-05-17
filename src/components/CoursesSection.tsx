import { BookOpen, Users, GraduationCap, MessageCircle, User } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const courseIcons = [BookOpen, Users, GraduationCap, MessageCircle, User];
const courseKeys = [
  "ninos",
  "adolescentes",
  "adultos",
  "talleres",
  "personalizados",
] as const;

export default function CoursesSection() {
  const { t } = useLanguage();

  const courses = courseKeys.map((key, i) => ({
    icon: courseIcons[i],
    title: t(`courses.${key}_title`),
    desc: t(`courses.${key}_desc`),
  }));

  return (
    <section id="cursos" className="py-20 lg:py-28 bg-cream">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">{t("courses.title")}</h2>
          <div className="w-16 h-1 bg-secondary rounded-full mx-auto mt-4 mb-5" />
          <p className="text-muted-foreground text-lg">{t("courses.subtitle")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i < 5 ? i + 1 : 4} bg-background rounded-xl p-7 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-shadow duration-300 group`}
            >
              <c.icon className="w-9 h-9 text-secondary mb-4 transition-transform duration-200 group-hover:scale-110" />
              <h3 className="text-lg font-bold text-navy mb-2">{c.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 reveal">
          <a
            href="https://wa.me/5491136693725"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity active:scale-[0.97]"
          >
            {t("courses.cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
