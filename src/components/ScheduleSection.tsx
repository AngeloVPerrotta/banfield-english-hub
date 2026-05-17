import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useLanguage } from "@/i18n/LanguageContext";

type ScheduleItem = {
  curso: string;
  dias: string;
  horario: string;
  nota?: string;
};

const scheduleData: Record<string, ScheduleItem[]> = {
  "Niños": [
    { curso: "Kinder", dias: "Viernes", horario: "18:00 a 19:30" },
    { curso: "Junior 1A", dias: "Lunes y Miércoles", horario: "17:00 a 18:00" },
    { curso: "Junior 1B", dias: "Martes y Jueves", horario: "18:00 a 19:00" },
    { curso: "Junior 2", dias: "Martes y Jueves", horario: "18:30 a 19:30" },
    { curso: "Junior 3A", dias: "Lunes y Miércoles", horario: "17:30 a 18:30" },
    { curso: "Junior 3B", dias: "Martes y Jueves", horario: "17:30 a 18:30" },
    { curso: "Junior 4A", dias: "Martes y Jueves", horario: "19:30 a 20:30" },
    { curso: "Junior 4B", dias: "Lunes y Miércoles", horario: "18:30 a 19:30" },
  ],
  "Adolescentes": [
    { curso: "Pre-teens A", dias: "Lunes y Miércoles", horario: "18:00 a 19:00" },
    { curso: "Pre-teens B", dias: "Martes y Jueves", horario: "18:00 a 19:00" },
    { curso: "Teens 1A", dias: "Lunes y Miércoles", horario: "19:30 a 20:30" },
    { curso: "Teens 1B", dias: "Martes y Jueves", horario: "16:30 a 17:30" },
    { curso: "Teens 2A", dias: "Lunes y Miércoles", horario: "18:00 a 19:30" },
    { curso: "Teens 2B", dias: "Martes y Jueves", horario: "18:00 a 19:30" },
  ],
  "Jóvenes": [
    { curso: "1st A", dias: "Martes y Jueves", horario: "16:30 a 18:00" },
    { curso: "1st B", dias: "Viernes", horario: "18:00 a 20:30" },
    { curso: "2nd A", dias: "Lunes y Miércoles", horario: "16:30 a 18:00" },
    { curso: "3rd A", dias: "Lunes y Miércoles", horario: "18:00 a 19:30" },
    { curso: "3rd B", dias: "Lunes y Miércoles", horario: "16:30 a 18:00" },
    { curso: "3rd C", dias: "Martes y Jueves", horario: "16:30 a 18:00", nota: "Adolescentes" },
    { curso: "4th A", dias: "Lunes y Miércoles", horario: "18:00 a 19:30" },
    { curso: "4th B", dias: "Martes y Jueves", horario: "15:00 a 16:30" },
    { curso: "4th C", dias: "Martes y Jueves", horario: "16:30 a 18:00" },
    { curso: "5th A", dias: "Lunes y Miércoles", horario: "15:00 a 16:30" },
    { curso: "5th B", dias: "Martes y Jueves", horario: "18:00 a 19:30" },
    { curso: "5th C", dias: "Martes y Jueves", horario: "15:00 a 16:30" },
  ],
  "Prep. Exámenes": [
    { curso: "Pre-FCE A", dias: "Lunes y Miércoles", horario: "16:00 a 17:30" },
    { curso: "Pre-FCE B", dias: "Martes y Jueves", horario: "18:00 a 19:30" },
    { curso: "FCE A", dias: "Lunes y Miércoles", horario: "17:30 a 19:00", nota: "+ clase online Jueves 17:30–19:00" },
    { curso: "FCE B", dias: "Lunes y Miércoles", horario: "19:00 a 20:30", nota: "+ clase online Jueves 17:30–19:00" },
    { curso: "CAE", dias: "Martes y Jueves", horario: "19:00 a 20:30" },
  ],
  "Adultos": [
    { curso: "Elementary A", dias: "Viernes", horario: "18:00 a 20:30" },
    { curso: "Elementary A", dias: "Sábados", horario: "11:30 a 13:30" },
    { curso: "Elementary B", dias: "Viernes", horario: "18:00 a 20:30" },
    { curso: "Pre-intermediate A", dias: "Martes y Jueves", horario: "19:30 a 21:00" },
    { curso: "Pre-intermediate B", dias: "Lunes y Miércoles", horario: "19:30 a 21:00" },
    { curso: "Intermediate A", dias: "Lunes y Miércoles", horario: "19:30 a 21:00" },
    { curso: "Intermediate B", dias: "Martes y Jueves", horario: "19:30 a 21:00" },
    { curso: "Intermediate Plus", dias: "Lunes y Miércoles", horario: "19:30 a 21:00" },
    { curso: "Intermediate Plus", dias: "Sábados", horario: "9:30 a 11:30" },
    { curso: "Upper-intermediate A", dias: "Martes y Jueves", horario: "19:30 a 21:00" },
    { curso: "Upper-intermediate B", dias: "Martes y Jueves", horario: "19:30 a 21:00" },
    { curso: "Advanced", dias: "Sábados", horario: "11:30 a 13:30" },
    { curso: "FCE para adultos", dias: "Sábados", horario: "11:30 a 13:30" },
  ],
  "Conversación": [
    { curso: "Nivel Básico (online)", dias: "Sábados", horario: "9:30 a 11:00" },
    { curso: "Nivel Avanzado (online)", dias: "Martes", horario: "19:00 a 20:30" },
  ],
};

const categoryTabKeys: Record<string, string> = {
  "Niños": "schedule.tab_ninos",
  "Adolescentes": "schedule.tab_adolescentes",
  "Jóvenes": "schedule.tab_jovenes",
  "Prep. Exámenes": "schedule.tab_prep",
  "Adultos": "schedule.tab_adultos",
  "Conversación": "schedule.tab_conversacion",
};

const categories = Object.keys(scheduleData);

function ScheduleTable({ items, t }: { items: ScheduleItem[]; t: (k: string) => string }) {
  return (
    <>
      {/* Desktop table */}
      <div className="hidden sm:block overflow-hidden rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-navy text-white">
              <th className="text-left px-5 py-3 font-semibold w-2/5">{t("schedule.col_curso")}</th>
              <th className="text-left px-5 py-3 font-semibold w-1/4">{t("schedule.col_dias")}</th>
              <th className="text-left px-5 py-3 font-semibold">{t("schedule.col_horario")}</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/40"}>
                <td className="px-5 py-3 font-medium text-navy">{item.curso}</td>
                <td className="px-5 py-3 text-foreground/80">{item.dias}</td>
                <td className="px-5 py-3">
                  <span className="font-semibold text-secondary">{item.horario}</span>
                  {item.nota && (
                    <span className="block text-xs text-muted-foreground mt-0.5">{item.nota}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="sm:hidden space-y-3">
        {items.map((item, i) => (
          <div key={i} className="rounded-xl border border-border bg-background p-4 shadow-sm">
            <p className="font-bold text-navy text-base mb-2">{item.curso}</p>
            <div className="flex flex-col gap-1 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">{t("schedule.col_dias")}</span>
                <span className="font-medium text-right">{item.dias}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">{t("schedule.col_horario")}</span>
                <span className="font-semibold text-secondary text-right">{item.horario}</span>
              </div>
              {item.nota && (
                <p className="text-xs text-muted-foreground mt-1 border-t pt-1">{item.nota}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default function ScheduleSection() {
  const { t } = useLanguage();

  return (
    <section id="horarios" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">{t("schedule.title")}</h2>
          <div className="w-16 h-1 bg-secondary rounded-full mx-auto mt-4 mb-5" />
          <p className="text-muted-foreground text-lg">{t("schedule.subtitle")}</p>
        </div>

        <div className="reveal">
          <Tabs defaultValue={categories[0]}>
            <TabsList className="flex flex-wrap h-auto gap-2 mb-8 bg-muted/60 p-1.5 rounded-xl">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  className="rounded-lg px-4 py-2 text-sm font-medium data-[state=active]:bg-navy data-[state=active]:text-white transition-colors"
                >
                  {t(categoryTabKeys[cat])}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((cat) => (
              <TabsContent key={cat} value={cat} className="mt-0">
                <ScheduleTable items={scheduleData[cat]} t={t} />
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="text-center mt-12 reveal">
          <p className="text-muted-foreground mb-4">{t("schedule.cta_text")}</p>
          <a
            href="https://wa.me/5491136693725?text=Hola!%20Quisiera%20consultar%20por%20horarios%20disponibles"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-7 py-3.5 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity active:scale-[0.97]"
          >
            {t("schedule.cta_button")}
          </a>
        </div>
      </div>
    </section>
  );
}
