import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TravelCourseSection from "@/components/TravelCourseSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Viajeros = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <TravelCourseSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Viajeros;
