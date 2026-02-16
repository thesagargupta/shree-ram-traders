import Header, { HeaderRef } from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import ProductsSection from "@/components/landing/ProductsSection";
import WhyUsSection from "@/components/landing/WhyUsSection";
import StatsSection from "@/components/landing/StatsSection";
import ReviewsSection from "@/components/landing/ReviewsSection";
import ContactSection from "@/components/landing/ContactSection";
import MapSection from "@/components/landing/MapSection";
import Footer from "@/components/landing/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BottomNavigation from "@/components/BottomNavigation";
import { useRef } from "react";

const Index = () => {
  const headerRef = useRef<HeaderRef>(null);

  const handleMenuOpen = () => {
    headerRef.current?.openMobileMenu();
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden w-full pb-16 lg:pb-0">
      <Header ref={headerRef} />
      <main className="w-full">
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <WhyUsSection />
        <StatsSection />
        <ReviewsSection />
        <ContactSection />
        <MapSection />
      </main>
      <Footer />
      <BottomNavigation onMenuOpen={handleMenuOpen} />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
