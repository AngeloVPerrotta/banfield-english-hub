export type Lang = "es" | "en";

export type BlogPost = {
  date: string;
  title: string;
  excerpt: string;
};

const es = {
  nav: {
    inicio: "Inicio",
    cursos: "Nuestros Cursos",
    horarios: "Horarios",
    campus: "Campus Nube",
    novedades: "Novedades",
    contacto: "Contacto",
  },
  header: {
    hours: "Lunes a Viernes · 14:30 a 21:00 hs",
    cta: "Inscribite 2026",
  },
  hero: {
    badge: "Desde 1968 · Miembro fundador SEA",
    title: "Aprendé inglés en tu instituto de siempre",
    subtitle1: "Más de 58 años enseñando inglés en Banfield.",
    subtitle2: "Recibimos a los hijos y nietos de nuestros primeros alumnos.",
    cta_primary: "Inscribite 2026",
    cta_secondary: "Hacé el test de nivelación",
  },
  about: {
    title: "Quiénes somos",
    p1: "La Cultural Inglesa de Banfield nació en 1968 con una idea simple: enseñar inglés de verdad, en el barrio, para todos. Más de 58 años después, seguimos haciendo exactamente eso.",
    p2: "Somos miembros fundadores de SEA, Asociación de Centros de Idiomas",
    p3: "Hoy recibimos a los hijos y nietos de nuestros primeros alumnos. Ese es el mejor reconocimiento que podemos tener.",
  },
  courses: {
    title: "Nuestros Cursos",
    subtitle: "Inglés para todas las edades y niveles · Clases 2026",
    cta: "Inscripciones abiertas 2026",
    ninos_title: "Niños (4–5 años)",
    ninos_desc:
      "Los primeros pasos en inglés, con canciones, juegos y mucho movimiento. Un espacio donde aprender es divertirse.",
    adolescentes_title: "Adolescentes",
    adolescentes_desc:
      "Clases dinámicas que acompañan el ritmo del secundario y preparan para certificaciones internacionales.",
    adultos_title: "Adultos",
    adultos_desc:
      "Horarios flexibles para que el inglés encaje en tu vida, no al revés. Desde nivel básico hasta avanzado.",
    talleres_title: "Talleres de Conversación",
    talleres_desc:
      "Para los que quieren ganar fluidez y confianza al hablar. Práctica oral en grupos pequeños.",
    personalizados_title: "Clases Particulares",
    personalizados_desc:
      "Tu ritmo, tus objetivos, tu horario. Clases individuales o en grupos reducidos, a medida.",
  },
  schedule: {
    title: "Horarios 2026",
    subtitle: "Encontrá el horario que se adapta a tu rutina",
    cta_text: "¿No encontrás el horario ideal? Escribinos y lo resolvemos.",
    cta_button: "Consultá por tu horario",
    col_curso: "Curso",
    col_dias: "Días",
    col_horario: "Horario",
    tab_ninos: "Niños",
    tab_adolescentes: "Adolescentes",
    tab_jovenes: "Jóvenes",
    tab_prep: "Prep. Exámenes",
    tab_adultos: "Adultos",
    tab_conversacion: "Conversación",
  },
  campus: {
    title: "Campus Nube",
    desc: "Campus Nube es la plataforma exclusiva para alumnos de la Cultural Inglesa de Banfield. Accedé a material didáctico, boletines y resultados de exámenes.",
    feature_material: "Material de estudio online",
    feature_boletines: "Boletines y calificaciones",
    feature_examenes: "Resultados de exámenes",
    cta: "Acceder al Campus",
    cta_sub: "Plataforma exclusiva para alumnos",
  },
  blog: {
    title: "Novedades",
    subtitle: "Lo último de nuestra comunidad",
    gallery_title: "Galería",
    instagram_cta: "Seguinos en Instagram",
  },
  blog_posts: [
    {
      date: "Marzo 2026",
      title: "¡Inscripciones abiertas 2026!",
      excerpt:
        "Ya podés inscribirte en todos nuestros cursos para niños, adolescentes y adultos. Consultá horarios y vacantes.",
    },
    {
      date: "Febrero 2026",
      title: "Nuevos horarios de conversación online",
      excerpt:
        "Sumamos clases de conversación los sábados por la mañana y los martes por la noche. Ideal para practicar desde casa.",
    },
    {
      date: "Abril 2026",
      title: "58 años formando generaciones",
      excerpt:
        "Desde 1968, la Cultural Inglesa de Banfield acompaña a familias enteras en su camino con el inglés. Hoy recibimos a los nietos de nuestros primeros alumnos.",
    },
  ] as BlogPost[],
  contact: {
    title: "Contactanos",
    subtitle: "¿Tenés alguna consulta? Estamos para ayudarte.",
    address: "Maipú 387, Banfield, Buenos Aires",
    phone_label: "Teléfono",
    phone: "4202-3595",
    whatsapp_label: "WhatsApp",
    whatsapp: "(+549) 11 3669-3725",
    email_label: "Email",
    email: "info@culturaldebanfield.com.ar",
    hours_label: "Horario de atención",
    hours: "Lunes a Viernes de 14:30 a 21:00 hs",
    whatsapp_cta: "Escribinos por WhatsApp",
    link_inscripciones: "Inscripciones 2026",
    link_campus: "Campus Nube",
    maps_link: "Ver en Google Maps",
  },
  footer: {
    tagline:
      "Más de 58 años enseñando inglés en Banfield. Miembros fundadores de SEA.",
    nav_title: "Navegación",
    social_title: "Seguinos",
    info_title: "Información",
    phone: "4202-3595",
    whatsapp: "(+549) 11 3669-3725",
    email: "info@culturaldebanfield.com.ar",
    hours: "Lunes a Viernes · 14:30 a 21:00 hs",
    address: "Maipú 387, Banfield, Buenos Aires",
    maps_link: "Ver en Google Maps",
    copyright:
      "© 2026 Cultural Inglesa de Banfield. Todos los derechos reservados.",
  },
};

const en: typeof es = {
  nav: {
    inicio: "Home",
    cursos: "Our Courses",
    horarios: "Schedule",
    campus: "Campus Nube",
    novedades: "News",
    contacto: "Contact",
  },
  header: {
    hours: "Mon–Fri · 2:30 PM to 9:00 PM",
    cta: "Enrol 2026",
  },
  hero: {
    badge: "Since 1968 · Founding member of SEA",
    title: "Learn English at your neighbourhood institute",
    subtitle1: "Over 58 years teaching English in Banfield.",
    subtitle2:
      "We now teach the children and grandchildren of our first students.",
    cta_primary: "Enrol 2026",
    cta_secondary: "Take a placement test",
  },
  about: {
    title: "About Us",
    p1: "Cultural Inglesa de Banfield was born in 1968 with a simple idea: to teach real English, in the neighbourhood, for everyone. Over 58 years later, we are still doing exactly that.",
    p2: "We are founding members of SEA, the Association of Language Centres",
    p3: "Today we welcome the children and grandchildren of our very first students. That is the best recognition we could ever receive.",
  },
  courses: {
    title: "Our Courses",
    subtitle: "English for all ages and levels · 2026 classes",
    cta: "Open enrolment 2026",
    ninos_title: "Children (4–5 years)",
    ninos_desc:
      "First steps in English through songs, games and movement. A space where learning means having fun.",
    adolescentes_title: "Teenagers",
    adolescentes_desc:
      "Dynamic classes that keep pace with secondary school and prepare students for international certifications.",
    adultos_title: "Adults",
    adultos_desc:
      "Flexible schedules so English fits your life, not the other way around. From beginner to advanced.",
    talleres_title: "Conversation Workshops",
    talleres_desc:
      "For those who want to gain fluency and confidence speaking. Oral practice in small groups.",
    personalizados_title: "Private Lessons",
    personalizados_desc:
      "Your pace, your goals, your schedule. One-on-one or small group lessons tailored to you.",
  },
  schedule: {
    title: "2026 Schedule",
    subtitle: "Find the timetable that fits your routine",
    cta_text: "Can't find the right slot? Get in touch and we'll sort it out.",
    cta_button: "Enquire about your schedule",
    col_curso: "Course",
    col_dias: "Days",
    col_horario: "Time",
    tab_ninos: "Children",
    tab_adolescentes: "Teenagers",
    tab_jovenes: "Young Adults",
    tab_prep: "Exam Prep",
    tab_adultos: "Adults",
    tab_conversacion: "Conversation",
  },
  campus: {
    title: "Campus Nube",
    desc: "Campus Nube is the exclusive platform for Cultural Inglesa de Banfield students. Access study materials, report cards and exam results.",
    feature_material: "Online study materials",
    feature_boletines: "Report cards & grades",
    feature_examenes: "Exam results",
    cta: "Access the Campus",
    cta_sub: "Exclusive platform for students",
  },
  blog: {
    title: "News",
    subtitle: "The latest from our community",
    gallery_title: "Gallery",
    instagram_cta: "Follow us on Instagram",
  },
  blog_posts: [
    {
      date: "March 2026",
      title: "2026 Enrolment Now Open!",
      excerpt:
        "You can now enrol in all our courses for children, teenagers and adults. Ask about schedules and availability.",
    },
    {
      date: "February 2026",
      title: "New online conversation schedules",
      excerpt:
        "We've added conversation classes on Saturday mornings and Tuesday evenings. Perfect for practising from home.",
    },
    {
      date: "April 2026",
      title: "58 years shaping generations",
      excerpt:
        "Since 1968, Cultural Inglesa de Banfield has accompanied whole families on their English journey. Today we welcome the grandchildren of our first students.",
    },
  ] as BlogPost[],
  contact: {
    title: "Contact Us",
    subtitle: "Any questions? We're happy to help.",
    address: "Maipú 387, Banfield, Buenos Aires",
    phone_label: "Phone",
    phone: "4202-3595",
    whatsapp_label: "WhatsApp",
    whatsapp: "(+549) 11 3669-3725",
    email_label: "Email",
    email: "info@culturaldebanfield.com.ar",
    hours_label: "Office hours",
    hours: "Mon–Fri, 2:30 PM to 9:00 PM",
    whatsapp_cta: "Message us on WhatsApp",
    link_inscripciones: "Enrolment 2026",
    link_campus: "Campus Nube",
    maps_link: "View on Google Maps",
  },
  footer: {
    tagline:
      "Over 58 years teaching English in Banfield. Founding members of SEA.",
    nav_title: "Navigation",
    social_title: "Follow us",
    info_title: "Information",
    phone: "4202-3595",
    whatsapp: "(+549) 11 3669-3725",
    email: "info@culturaldebanfield.com.ar",
    hours: "Mon–Fri · 2:30 PM to 9:00 PM",
    address: "Maipú 387, Banfield, Buenos Aires",
    maps_link: "View on Google Maps",
    copyright:
      "© 2026 Cultural Inglesa de Banfield. All rights reserved.",
  },
};

export const translations: Record<Lang, typeof es> = { es, en };
