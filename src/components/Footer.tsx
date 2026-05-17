import { Instagram, Facebook, Phone, Smartphone, Mail, Clock, MapPin } from "lucide-react";
import { images } from "@/config/images";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { label: t("nav.inicio"), href: "/#inicio" },
    { label: t("nav.cursos"), href: "/#cursos" },
    { label: t("nav.horarios"), href: "/#horarios" },
    { label: t("nav.campus"), href: "/#campus" },
    { label: t("nav.novedades"), href: "/#novedades" },
    { label: t("nav.contacto"), href: "/#contacto" },
  ];

  const infoItems = [
    { icon: MapPin, text: t("footer.address") },
    { icon: Phone, text: t("footer.phone") },
    { icon: Smartphone, text: t("footer.whatsapp") },
    { icon: Mail, text: t("footer.email") },
    { icon: Clock, text: t("footer.hours") },
  ];

  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
        {/* Brand */}
        <div className="space-y-4 lg:col-span-1">
          <img
            src={images.logo}
            alt="Cultural Inglesa de Banfield"
            className="w-20 h-auto"
            style={{ mixBlendMode: 'multiply' }}
          />
          <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
            {t("footer.tagline")}
          </p>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          <h4 className="font-semibold text-sm mb-3 text-gold">{t("footer.nav_title")}</h4>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Info */}
        <div className="space-y-2">
          <h4 className="font-semibold text-sm mb-3 text-gold">{t("footer.info_title")}</h4>
          {infoItems.map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-primary-foreground/70">
              <item.icon className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-gold/70" />
              <span>{item.text}</span>
            </div>
          ))}
          <a
            href="https://maps.app.goo.gl/ek1qiDBHqn8SgaVV9"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-xs text-secondary/80 hover:text-secondary transition-colors mt-1"
          >
            {t("footer.maps_link")} →
          </a>
        </div>

        {/* Social */}
        <div className="space-y-4">
          <h4 className="font-semibold text-sm mb-3 text-gold">{t("footer.social_title")}</h4>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/culturalinglesadebanfield/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100031968476884"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/40">
          <span>{t("footer.copyright")}</span>
          <span>{t("footer.address")}</span>
        </div>
      </div>
    </footer>
  );
}
