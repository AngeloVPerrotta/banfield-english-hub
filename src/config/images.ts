import logoImg from '@/assets/logo.png';
import campusImg from '@/assets/foto-campus.jpg';

// Hero — carrusel (fotos verticales 1200x1600)
import portada1 from '@/assets/portada-1.jpg';
import portada2 from '@/assets/portada-2.jpg';
import aulaNinos from '@/assets/aula-ninos.jpg';
import aulaAdolescentes from '@/assets/aula-adolescentes.jpg';
import aulaAdultos from '@/assets/aula-adultos.jpg';
import aulaKinder from '@/assets/aula-kinder.jpg';

// Pop-up — creatividad de reserva; el pop-up está desactivado (ver WelcomePopup.tsx)
import popupKinder from '@/assets/popup-kinder.jpg';

export const images = {
  logo: logoImg,
  hero: {
    carousel: [
      { src: portada1, alt: 'Administración de la Cultural Inglesa de Banfield' },
      { src: aulaNinos, alt: 'Clase de inglés para niños' },
      { src: aulaAdolescentes, alt: 'Clase de inglés para adolescentes' },
      { src: aulaAdultos, alt: 'Clase de inglés para adultos' },
      { src: portada2, alt: 'Pasillo del instituto' },
      { src: aulaKinder, alt: 'Clase de Kinder' },
    ],
  },
  campus: campusImg,
  popup: {
    kinder: popupKinder,
  },
};
