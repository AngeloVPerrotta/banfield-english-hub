import { Phone, Mail, MapPin, Clock, ExternalLink, MessageCircle, Smartphone } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();

  const infoItems = [
    { icon: MapPin, label: t("contact.address") },
    { icon: Phone, label: `${t("contact.phone_label")}: ${t("contact.phone")}` },
    { icon: Smartphone, label: `${t("contact.whatsapp_label")}: ${t("contact.whatsapp")}` },
    { icon: Mail, label: t("contact.email") },
    { icon: Clock, label: `${t("contact.hours_label")}: ${t("contact.hours")}` },
  ];

  return (
    <section id="contacto" className="py-20 lg:py-28">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">{t("contact.title")}</h2>
          <div className="w-16 h-1 bg-secondary rounded-full mx-auto mt-4 mb-5" />
          <p className="text-muted-foreground text-lg">{t("contact.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8 reveal">
            <div className="space-y-4">
              {infoItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cream flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-navy" />
                  </div>
                  <span className="text-foreground pt-2 text-sm">{item.label}</span>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/5491136693725"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#20bd5a] transition-colors active:scale-[0.97] shadow-lg"
            >
              <MessageCircle className="w-6 h-6" fill="white" />
              {t("contact.whatsapp_cta")}
            </a>

            {/* Quick links */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/5491136693725"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary hover:underline"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                {t("contact.link_inscripciones")}
              </a>
              <a
                href="https://campusnube.com.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary hover:underline"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                {t("contact.link_campus")}
              </a>
              <a
                href="https://maps.app.goo.gl/ek1qiDBHqn8SgaVV9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary hover:underline"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                {t("contact.maps_link")}
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="reveal reveal-delay-1">
            <div className="rounded-xl overflow-hidden shadow-lg aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.5!2d-58.3965!3d-34.7447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd2e616c43daf%3A0x5f6e9d6e8b2ee7c5!2sMaip%C3%BA%20387%2C%20Banfield!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Cultural Inglesa de Banfield"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
