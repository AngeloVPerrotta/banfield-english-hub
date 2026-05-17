import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import { images } from "@/config/images";
import { useLanguage } from "@/i18n/LanguageContext";

type MonthData = {
  mes: string;
  mesEn: string;
  imagenes: { src: string; alt: string }[];
};

const novedadesData: MonthData[] = [
  {
    mes: "Abril 2026",
    mesEn: "April 2026",
    imagenes: images.novedades.abril,
  },
  {
    mes: "Marzo 2026",
    mesEn: "March 2026",
    imagenes: images.novedades.marzo,
  },
];

function MonthCarousel({ month }: { month: MonthData }) {
  const { lang } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const title = lang === "es" ? month.mes : month.mesEn;

  return (
    <div className="reveal">
      <h3 className="text-xl font-bold text-navy mb-4">{title}</h3>

      <div className="relative">
        {/* Arrows */}
        <button
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors disabled:opacity-30 disabled:pointer-events-none"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors disabled:opacity-30 disabled:pointer-events-none"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Carousel viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-3 md:gap-4">
            {month.imagenes.map((img, i) => (
              <div
                key={i}
                className="flex-none w-[calc(100%-1rem)] md:w-[calc(33.333%-0.75rem)] rounded-xl overflow-hidden shadow-md"
              >
                <div className="aspect-[4/5]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots */}
      {scrollSnaps.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === selectedIndex ? "bg-navy" : "bg-navy/25"
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function GallerySection() {
  const { t } = useLanguage();

  return (
    <section id="novedades" className="py-20 lg:py-28 bg-cream">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">{t("blog.title")}</h2>
          <div className="w-16 h-1 bg-secondary rounded-full mx-auto mt-4" />
        </div>

        <div className="space-y-16 px-6 md:px-8">
          {novedadesData.map((month, i) => (
            <MonthCarousel key={i} month={month} />
          ))}
        </div>

        <div className="text-center mt-14 reveal">
          <a
            href="https://www.instagram.com/culturalinglesadebanfield/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity active:scale-[0.97]"
          >
            <Instagram className="w-5 h-5" />
            {t("blog.instagram_cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
