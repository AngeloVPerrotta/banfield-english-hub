import heroImg from '@/assets/hero-students.jpg';
import logoImg from '@/assets/logo.png';
import ninosImg from '@/assets/foto-ninos.jpg';
import adolescentesImg from '@/assets/foto-adolescentes.jpg';
import adultosImg from '@/assets/foto-adultos.jpg';
import institutoImg from '@/assets/foto-instituto.jpg';
import campusImg from '@/assets/foto-campus.jpg';
import blog1Img from '@/assets/blog-1.jpg';
import blog2Img from '@/assets/blog-2.jpg';
import blog3Img from '@/assets/blog-3.jpg';
import gallery1Img from '@/assets/gallery-1.jpg';
import gallery2Img from '@/assets/gallery-2.jpg';
import gallery3Img from '@/assets/gallery-3.jpg';
import gallery4Img from '@/assets/gallery-4.jpg';
import gallery5Img from '@/assets/gallery-5.jpg';
import gallery6Img from '@/assets/gallery-6.jpg';

// Pop-up
import popupViajeros from '@/assets/popup-viajeros.png';

// Marzo
import marzo1 from '@/assets/marzo-1.jpg';
import marzo2 from '@/assets/marzo-2.jpg';
import marzo3 from '@/assets/marzo-3.jpg';
import marzo4 from '@/assets/marzo-4.jpg';
import marzo5 from '@/assets/marzo-5.jpg';
import marzo6 from '@/assets/marzo-6.jpg';
import marzo7 from '@/assets/marzo-7.jpg';
import marzo8 from '@/assets/marzo-8.jpg';

// Abril
import abril1 from '@/assets/abril-1.jpg';
import abril2 from '@/assets/abril-2.jpg';
import abril3 from '@/assets/abril-3.jpg';
import abril4 from '@/assets/abril-4.jpg';
import abril5 from '@/assets/abril-5.jpg';
import abril6 from '@/assets/abril-6.jpg';
import abril7 from '@/assets/abril-7.jpg';
import abril8 from '@/assets/abril-8.jpg';
import abril9 from '@/assets/abril-9.jpg';

export const images = {
  logo: logoImg,
  hero: heroImg,
  cursos: {
    ninos: ninosImg,
    adolescentes: adolescentesImg,
    adultos: adultosImg,
  },
  instituto: institutoImg,
  campus: campusImg,
  blog: [
    { src: blog1Img, alt: 'Inscripciones 2026 en la Cultural Inglesa de Banfield' },
    { src: blog2Img, alt: 'Alumnos adolescentes trabajando en grupo' },
    { src: blog3Img, alt: 'La Cultural Inglesa de Banfield celebra su aniversario' },
  ],
  gallery: [
    { src: gallery1Img, alt: 'Celebración aniversario' },
    { src: gallery2Img, alt: 'Estudiantes adultos' },
    { src: gallery3Img, alt: 'Clases para niños' },
    { src: gallery4Img, alt: 'Taller de conversación' },
    { src: gallery5Img, alt: 'Entrega de diplomas' },
    { src: gallery6Img, alt: 'Presentaciones grupales' },
  ],
  popup: {
    viajeros: popupViajeros,
  },
  novedades: {
    marzo: [
      { src: marzo1, alt: 'Inscripción abierta marzo 2026' },
      { src: marzo2, alt: 'Reservá tu lugar - inscripciones' },
      { src: marzo3, alt: 'Inglés para adultos - comenzá en marzo' },
      { src: marzo4, alt: 'Cursos para adultos información' },
      { src: marzo5, alt: 'Cursos para adultos - programa' },
      { src: marzo6, alt: 'Junior 1 - información del curso' },
      { src: marzo7, alt: 'Junior 1 inscripción abierta' },
      { src: marzo8, alt: '58° aniversario Cultural Inglesa de Banfield' },
    ],
    abril: [
      { src: abril1, alt: 'Inglés para adultos nivel inicial' },
      { src: abril2, alt: 'Taller de conversación en inglés' },
      { src: abril3, alt: 'Taller de conversación nivel avanzado' },
      { src: abril4, alt: 'Taller de conversación nivel básico' },
      { src: abril5, alt: 'Mejorá tu speaking en inglés' },
      { src: abril6, alt: 'Curso preparatorio FCE' },
      { src: abril7, alt: 'FCE para adultos nivel B2' },
      { src: abril8, alt: 'Kinder para 4 y 5 años' },
      { src: abril9, alt: 'Kinder últimas vacantes' },
    ],
  },
};
