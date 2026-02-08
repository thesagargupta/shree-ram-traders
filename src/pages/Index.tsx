import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import ProductsSection from "@/components/landing/ProductsSection";
import WhyUsSection from "@/components/landing/WhyUsSection";
import StatsSection from "@/components/landing/StatsSection";
import ContactSection from "@/components/landing/ContactSection";
import MapSection from "@/components/landing/MapSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <WhyUsSection />
        <StatsSection />
        <ContactSection />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
