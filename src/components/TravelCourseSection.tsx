import {
  Check,
  Video,
  FileText,
  MessageCircle,
  Mic,
  Award,
  ChevronDown,
} from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";

const WA_LINK =
  "https://wa.me/5491136693725?text=Hola!%20Me%20interesa%20inscribirme%20en%20Inglés%20para%20Viajeros";

/* ───── data ───── */

const badges = [
  "7 sem de curso",
  "120 min por clase",
  "Online vía Zoom",
  "Máx. 10 alumnos",
];

const targetAudience = [
  "Tenés nivel básico de inglés — entendés algo pero no te animás a hablar",
  "Viajás o planeás viajar en los próximos meses",
  "Querés comunicarte en situaciones reales, no aprobar un examen",
  "El inglés del aeropuerto, el hotel o el restaurante te genera ansiedad",
  "Preferís grupos pequeños con práctica real, no clases magistrales",
];

const notForYou = [
  "Buscás prepararte para Cambridge o TOEFL",
  "Ya tenés nivel intermedio o avanzado",
  "Querés clases individuales",
];

const weeks = [
  { label: "S1", title: "Aeropuerto y avión", desc: "Check-in, equipaje, embarque, pedir en el avión" },
  { label: "S2", title: "Hotel", desc: "Reservas, check-in, room service, reclamos" },
  { label: "S3", title: "Restaurantes y comida", desc: "Ordenar, alergias, modificar platos, pagar" },
  { label: "S4", title: "Transporte y orientación", desc: "Taxi, metro, Uber, preguntar direcciones" },
  { label: "S5", title: "Tours y museos", desc: "Entradas, guías, horarios, hablar sobre lo que ves" },
  { label: "S6", title: "Compras", desc: "Tallas, precios, regateo, devoluciones" },
  { label: "S7", title: "Emergencias", desc: "Robo, farmacia, vuelo cancelado, pedir ayuda" },
];

const includes = [
  {
    Icon: Video,
    title: "7 clases en vivo de 120 min",
    desc: "Vía Zoom, grupos de máximo 10 personas",
  },
  {
    Icon: FileText,
    title: "Material de cada semana",
    desc: "PDF de frases clave + audio de práctica",
  },
  {
    Icon: MessageCircle,
    title: "Grupo de WhatsApp activo",
    desc: "Práctica entre clases + corrección personalizada",
  },
  {
    Icon: Mic,
    title: "Corrección por audio semanal",
    desc: "El docente responde cada tarea tuya con nota de voz",
  },
  {
    Icon: Award,
    title: "Certificado de participación",
    desc: "",
  },
];

const faqs = [
  {
    q: "¿Necesito tener nivel avanzado?",
    a: "No. El curso está diseñado para nivel básico — sabés algo pero no te animás a hablar. Empezamos desde ahí.",
  },
  {
    q: "¿Qué pasa si no puedo ir a una clase?",
    a: "Te compartimos el material de la semana y podés escuchar la grabación. Hasta 2 ausencias justificadas no afectan.",
  },
  {
    q: "¿Cómo se paga?",
    a: "Por Mercado Pago (pesos) o transferencia en USD. Recibirás el link al inscribirte.",
  },
  {
    q: "¿Cuándo arranca?",
    a: "Las inscripciones cierran 48 hs antes del primer encuentro. Consultanos por WhatsApp para la próxima fecha.",
  },
];

/* ───── component ───── */

export default function TravelCourseSection() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold tracking-wide text-white">
            PRIMERA COHORTE · CUPOS LIMITADOS
          </span>

          <h1 className="mt-6 text-4xl font-bold text-navy sm:text-5xl lg:text-6xl">
            Inglés para Viajeros
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
            El curso para adultos que saben algo de inglés pero no se animan a
            hablar cuando viajan
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {badges.map((b) => (
              <span
                key={b}
                className="rounded-full border border-navy/20 bg-white px-4 py-1.5 text-sm font-medium text-navy"
              >
                {b}
              </span>
            ))}
          </div>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-lg bg-secondary px-10 py-4 text-lg font-bold text-white shadow-lg transition hover:opacity-90 active:scale-[0.97]"
          >
            INSCRIBIRME AHORA →
          </a>

          <p className="mt-4 text-sm text-foreground/70">
            Precio lanzamiento:{" "}
            <span className="font-semibold text-navy">$85.000</span>{" "}
            <span className="line-through text-foreground/40">$120.000</span>
          </p>
        </div>
      </section>

      {/* ── ¿Para quién es? ── */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
            ¿Para quién es?
          </h2>
          <div className="mx-auto mt-2 h-1 w-16 rounded bg-secondary" />

          <ul className="mx-auto mt-10 max-w-2xl space-y-4">
            {targetAudience.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                <span className="text-foreground/90">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-10 max-w-2xl rounded-xl bg-muted p-6">
            <p className="mb-3 font-semibold text-navy">
              Este curso NO es para vos si:
            </p>
            <ul className="space-y-2 text-sm text-foreground/70">
              {notForYou.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Semana a semana ── */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
            Qué vas a aprender — semana a semana
          </h2>
          <div className="mx-auto mt-2 h-1 w-16 rounded bg-secondary" />

          <div className="mx-auto mt-10 max-w-3xl space-y-5">
            {weeks.map((w) => (
              <div
                key={w.label}
                className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy text-sm font-bold text-white">
                  {w.label}
                </span>
                <div>
                  <p className="font-semibold text-navy">{w.title}</p>
                  <p className="mt-0.5 text-sm text-foreground/70">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Qué incluye ── */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
            Qué incluye el curso
          </h2>
          <div className="mx-auto mt-2 h-1 w-16 rounded bg-secondary" />

          <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
            {includes.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl border border-border bg-white p-6 shadow-sm"
              >
                <Icon className="h-8 w-8 text-secondary" />
                <p className="mt-3 font-semibold text-navy">{title}</p>
                {desc && (
                  <p className="mt-1 text-sm text-foreground/70">{desc}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-cream py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-3xl font-bold text-navy sm:text-4xl">
            Preguntas frecuentes
          </h2>
          <div className="mx-auto mt-2 h-1 w-16 rounded bg-secondary" />

          <Accordion.Root
            type="single"
            collapsible
            className="mx-auto mt-10 max-w-2xl space-y-3"
          >
            {faqs.map((faq, i) => (
              <Accordion.Item
                key={i}
                value={`faq-${i}`}
                className="rounded-xl bg-white shadow-sm"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-semibold text-navy transition hover:opacity-80">
                    {faq.q}
                    <ChevronDown className="h-5 w-5 shrink-0 text-navy/50 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <p className="px-6 pb-5 text-sm leading-relaxed text-foreground/80">
                    {faq.a}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="bg-navy py-20 lg:py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            ¿Listo/a para viajar con confianza?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Inscribite antes de que se llenen los 10 lugares.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg bg-secondary px-10 py-4 text-lg font-bold text-white shadow-lg transition hover:opacity-90 active:scale-[0.97]"
          >
            INSCRIBIRME →
          </a>
        </div>
      </section>
    </>
  );
}
