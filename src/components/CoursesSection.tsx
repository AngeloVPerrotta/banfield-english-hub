import { Baby, BookOpen, Users, GraduationCap, Briefcase, Globe, Check, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/i18n/LanguageContext";

const WA_NUMBER = "5491136693725";

type Course = {
  key: string;
  icon: LucideIcon;
  // El mensaje precargado va siempre en español: lo lee el equipo del instituto.
  waText: string;
};

const englishCourses: Course[] = [
  { key: "kinder", icon: Baby, waText: "Hola! Quiero reservar una vacante en el curso de Kinder" },
  { key: "ninos", icon: BookOpen, waText: "Hola! Quiero consultar horarios y vacantes del curso de Niños" },
  { key: "adolescentes", icon: Users, waText: "Hola! Quiero información del curso de Adolescentes" },
  { key: "adultos", icon: GraduationCap, waText: "Hola! Quiero hacer el test de nivelación gratuito para el curso de Adultos" },
];

const portugueseCourses: Course[] = [
  { key: "pt_adultos", icon: Briefcase, waText: "Hola! Quiero consultar por el curso de portugués para adultos" },
  { key: "pt_adolescentes", icon: Globe, waText: "Hola! Quiero información del curso de portugués para adolescentes" },
];

// Cada diferencial se escribe como "Título. Explicación." y se corta en el primer
// punto para destacar el título. Si no hay corte, se muestra todo como texto plano.
function splitHighlight(text: string) {
  const i = text.indexOf(". ");
  if (i < 0) return { label: "", body: text };
  return { label: text.slice(0, i + 1), body: text.slice(i + 2) };
}

function CourseGroup({ heading, courses }: { heading: string; courses: Course[] }) {
  const { t, tList } = useLanguage();

  return (
    <div className="reveal">
      <h3 className="text-xl sm:text-2xl font-bold text-navy mb-6">{heading}</h3>

      <Accordion type="single" collapsible className="space-y-4">
        {courses.map((course) => {
          const base = `courses.${course.key}`;
          return (
            <AccordionItem
              key={course.key}
              value={course.key}
              className="border-0 rounded-xl bg-background shadow-[0_2px_12px_rgba(0,0,0,0.06)] data-[state=open]:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-shadow duration-300"
            >
              <AccordionTrigger className="px-5 sm:px-6 py-5">
                <span className="flex items-start gap-4">
                  <course.icon className="w-7 h-7 shrink-0 text-secondary mt-0.5" />
                  <span className="block">
                    <span className="block text-lg font-bold text-navy">{t(`${base}.name`)}</span>
                    <span className="block mt-1 text-sm text-muted-foreground">
                      {t(`${base}.brief`)}
                    </span>
                  </span>
                </span>
              </AccordionTrigger>

              <AccordionContent className="px-5 sm:px-6 pb-6">
                <div className="space-y-5 border-t border-border pt-5">
                  {tList(`${base}.description`).map((paragraph, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed text-base">
                      {paragraph}
                    </p>
                  ))}

                  <div>
                    <h4 className="text-base font-bold text-navy mb-3">
                      {t(`${base}.diffs_title`)}
                    </h4>
                    <ul className="space-y-2.5">
                      {tList(`${base}.diffs`).map((item, i) => {
                        const { label, body } = splitHighlight(item);
                        return (
                          <li
                            key={i}
                            className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                          >
                            <Check className="w-4 h-4 shrink-0 text-secondary mt-1" />
                            <span>
                              {label && (
                                <strong className="font-semibold text-foreground/85">
                                  {label}{" "}
                                </strong>
                              )}
                              {body}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <p className="rounded-lg bg-cream px-4 py-3 text-sm font-medium text-navy">
                    {t(`${base}.facts`)}
                  </p>

                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(course.waText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity active:scale-[0.97]"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {t(`${base}.cta`)}
                  </a>
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}

export default function CoursesSection() {
  const { t } = useLanguage();

  return (
    <section id="cursos" className="py-20 lg:py-28 bg-cream">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">{t("courses.title")}</h2>
          <div className="w-16 h-1 bg-secondary rounded-full mx-auto mt-4 mb-5" />
          <p className="text-muted-foreground text-lg">{t("courses.subtitle")}</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-14">
          <CourseGroup heading={t("courses.group_english")} courses={englishCourses} />
          <CourseGroup heading={t("courses.group_portuguese")} courses={portugueseCourses} />
        </div>

        {/* Link discreto: no compite con el CTA de cada tarjeta */}
        <div className="text-center mt-12 reveal">
          <a
            href="/#inscripcion"
            className="text-sm font-medium text-gold hover:underline"
          >
            {t("courses.enroll_link")} →
          </a>
        </div>
      </div>
    </section>
  );
}
