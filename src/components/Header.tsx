import { useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { images } from "@/config/images";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/translations";

const WA_NUMBER = "5491136693725";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useLanguage();

  const navLinks = [
    { label: t("nav.inicio"), href: "#inicio" },
    { label: t("nav.cursos"), href: "#cursos" },
    { label: t("nav.horarios"), href: "#horarios" },
    { label: t("nav.campus"), href: "#campus" },
    { label: t("nav.novedades"), href: "#novedades" },
    { label: t("nav.contacto"), href: "#contacto" },
  ];

  const LangToggle = () => (
    <div className="flex items-center gap-0.5 rounded-full border border-border px-1 py-0.5 text-xs font-semibold select-none">
      {(["es", "en"] as Lang[]).map((l, i) => (
        <>
          {i > 0 && <span key={`sep-${l}`} className="text-border/60 px-0.5">|</span>}
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-2 py-0.5 rounded-full transition-colors ${
              lang === l
                ? "bg-navy text-white"
                : "text-foreground/50 hover:text-foreground"
            }`}
          >
            {l.toUpperCase()}
          </button>
        </>
      ))}
    </div>
  );

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy text-primary-foreground text-sm hidden md:block">
        <div className="container flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" /> 4202-3595
            </span>
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-primary-foreground/80 transition-colors"
            >
              📱 11 3669-3725
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> Maipú 387, Banfield
            </span>
          </div>
          <span className="text-primary-foreground/80">{t("header.hours")}</span>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b shadow-sm">
        <div className="container flex items-center justify-between py-3">
          <a href="#inicio" className="flex-shrink-0">
            <img
              src={images.logo}
              alt="Cultural Inglesa de Banfield"
              className="h-10 sm:h-12 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-foreground/70 hover:text-navy transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
            <div className="ml-2">
              <LangToggle />
            </div>
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity active:scale-[0.97]"
            >
              {t("header.cta")}
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
            aria-label="Menú"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="lg:hidden border-t bg-background px-4 pb-4 animate-fade-up">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-medium text-foreground/70 border-b border-border/50 last:border-0"
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center justify-between mt-4 mb-2">
              <span className="text-xs text-muted-foreground">Idioma / Language</span>
              <LangToggle />
            </div>
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-center bg-secondary text-secondary-foreground px-5 py-3 rounded-lg text-sm font-semibold"
            >
              {t("header.cta")}
            </a>
          </nav>
        )}
      </header>
    </>
  );
}
