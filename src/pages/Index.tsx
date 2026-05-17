import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import ScheduleSection from "@/components/ScheduleSection";
import CampusSection from "@/components/CampusSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import WelcomePopup from "@/components/WelcomePopup";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CoursesSection />
        <ScheduleSection />
        <CampusSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <WelcomePopup />
    </div>
  );
};

export default Index;
