import { Phone, MapPin, ChevronDown } from "lucide-react";
import heroRice from "@/assets/hero-rice.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-28 pb-28 sm:pt-32 sm:pb-32 md:pt-40 md:pb-12">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroRice}
          alt="Premium Rice"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/95 via-forest/85 to-forest-dark/70" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-gold/10 rounded-full blur-3xl animate-float delay-300 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 container-custom px-4 text-center flex flex-col items-center justify-center h-full">
        <div className="max-w-5xl mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-md border border-gold/30 rounded-full px-4 py-1.5 mb-6 animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            <span className="text-xs md:text-sm font-medium text-cream tracking-wide">
              Trusted Since more than 20 Years in Raxaul
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-cream mb-4 sm:mb-6 animate-fade-up delay-100 leading-tight px-2">
            Finest Quality Rice
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold mt-2 pb-2 animate-pulse">
              You Can Trust
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-cream/90 mb-8 max-w-2xl mx-auto animate-fade-up delay-200 leading-relaxed px-2">
            Wholesale & Retail Rice Supplier in Raxaul, Bihar. 
            Premium quality rice for homes, restaurants, and businesses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-up delay-300 w-full sm:w-auto px-4 sm:px-0">
            <a
              href="tel:+919031735298"
              className="btn-gold w-full sm:w-auto justify-center text-base md:text-lg py-3 md:py-4 px-8 shadow-2xl shadow-gold/30 hover:shadow-gold/50 hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
            <a
              href="https://maps.google.com/?q=Shree+Ram+Traders+Raxaul" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 md:py-4 rounded-lg font-semibold text-cream bg-white/10 backdrop-blur-sm border-2 border-cream/50 hover:bg-cream hover:text-forest hover:border-cream transition-all duration-300 hover:scale-105"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 md:mt-16 flex flex-wrap items-center justify-center gap-y-6 gap-x-8 md:gap-12 animate-fade-up delay-400">
            <div className="text-center min-w-[100px]">
              <div className="text-3xl md:text-4xl font-serif font-bold text-gold">20+</div>
              <div className="text-xs md:text-sm text-cream/70 uppercase tracking-wider mt-1">Years of Trust</div>
            </div>
            
            <div className="w-px h-10 bg-cream/20 hidden sm:block" />
            
            <div className="text-center min-w-[100px]">
              <div className="text-3xl md:text-4xl font-serif font-bold text-gold">1000+</div>
              <div className="text-xs md:text-sm text-cream/70 uppercase tracking-wider mt-1">Happy Customers</div>
            </div>
            
            <div className="w-px h-10 bg-cream/20 hidden sm:block" />
            
            <div className="text-center min-w-[100px]">
              <div className="text-3xl md:text-4xl font-serif font-bold text-gold">10+</div>
              <div className="text-xs md:text-sm text-cream/70 uppercase tracking-wider mt-1">Rice Varieties</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Positioned in the padding area */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        
        {/* Mobile View: Arrow Icon */}
        <div className="flex md:hidden flex-col items-center gap-2 animate-bounce">
           <span className="text-[10px] text-cream/80 uppercase tracking-widest font-medium">Scroll</span>
           <ChevronDown className="w-6 h-6 text-gold" />
        </div>

        {/* Desktop View: Mouse Animation */}
        <div className="hidden md:flex flex-col items-center gap-2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex items-start justify-center p-2 opacity-80 hover:opacity-100 transition-opacity">
            <div className="w-1.5 h-3 bg-gold rounded-full animate-scroll-down" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;