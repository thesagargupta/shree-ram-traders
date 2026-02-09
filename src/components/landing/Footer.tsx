import { Phone, MapPin, Heart, ChevronRight } from "lucide-react";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from "/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-forest-dark pt-16 pb-8 text-primary-foreground border-t-4 border-gold/30 font-sans relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container-custom px-4 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* COLUMN 1: Brand Identity & Description (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Identity Block: Logo + Title */}
            <div className="flex items-center gap-2 -ml-3 md:-ml-4 group"> 
              {/* Logo Wrapper: Constrains the size and hides the overflow from scaling */}
              <div className="relative h-24 w-24 shrink-0 overflow-hidden flex items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110">
                {/* Image: Scaled up to remove internal whitespace */}
                <img
                  src={logo}
                  alt="Shree Ram Traders"
                  className="w-full h-full object-contain scale-[1.6]" 
                  loading="lazy"
                />
              </div>
              
              {/* Title Block */}
              <div className="flex flex-col">
                <h3 className="font-serif font-bold text-2xl md:text-3xl text-gold tracking-wide leading-none">
                  Shree Ram Traders
                </h3>
                <p className="text-[11px] uppercase tracking-[0.2em] text-primary-foreground/60 font-medium mt-1">
                  Premium Rice Supplier
                </p>
              </div>
            </div>

            {/* Description Text */}
            <p className="text-primary-foreground/80 leading-relaxed text-sm md:text-base max-w-md">
              Delivering the finest quality rice to homes and businesses in Raxaul and beyond. 
              Committed to purity, fair pricing, and building lasting relationships since more than 20 years.
            </p>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xs uppercase tracking-wider text-primary-foreground/50 font-bold">Follow Us:</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://wa.me/919031735298"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="w-5 h-5 text-white group-hover:text-gold transition-colors" />
                </a>
                <a
                  href="https://facebook.com/shreeramtraders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-5 h-5 text-white group-hover:text-gold transition-colors" />
                </a>
                <a
                  href="https://instagram.com/shreeramtraders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5 text-white group-hover:text-gold transition-colors" />
                </a>
                <a
                  href="https://twitter.com/shreeramtraders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label="Twitter"
                >
                  <FaTwitter className="w-5 h-5 text-white group-hover:text-gold transition-colors" />
                </a>
                <a
                  href="https://linkedin.com/company/shreeramtraders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5 text-white group-hover:text-gold transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Quick Links (Span 3) */}
          <div className="lg:col-span-3 lg:pl-6 pt-4">
            <h4 className="font-serif font-bold text-xl text-gold mb-6 relative inline-block">
              Quick Links
              {/* Decorative underline with animation */}
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gold rounded-full transition-all duration-300 group-hover:w-full"></span>
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { name: "About Us", href: "#about" },
                { name: "Our Products", href: "#products" },
                { name: "Why Choose Us", href: "#why-us" },
                { name: "Contact", href: "#contact" }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex items-center gap-2 text-sm md:text-base text-primary-foreground/80 hover:text-gold transition-all duration-300 w-fit hover:translate-x-2"
                >
                  <ChevronRight className="w-4 h-4 text-gold/50 group-hover:text-gold transition-colors" />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* COLUMN 3: Contact Info (Span 4) */}
          <div className="lg:col-span-4 pt-4">
            <h4 className="font-serif font-bold text-xl text-gold mb-6 relative inline-block">
              Get in Touch
              {/* Decorative underline */}
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gold/50 rounded-full"></span>
            </h4>
            <div className="flex flex-col gap-5">
              
              {/* Phone */}
              <a href="tel:+919031735298" className="flex items-start gap-4 group transition-all duration-300 hover:translate-x-2">
                <div className="bg-gold/10 p-3 rounded-xl group-hover:bg-gold/20 transition-all duration-300 shrink-0 group-hover:scale-110">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-primary-foreground/50 font-bold mb-0.5">Call Us</p>
                  <p className="text-lg font-medium text-white group-hover:text-gold transition-colors">
                    +91 90317 35298
                  </p>
                </div>
              </a>
              
              {/* Address */}
              <a 
                href="https://maps.google.com/?q=Handi+Bazar+Raxaul+Bihar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group transition-all duration-300 hover:translate-x-2">
                <div className="bg-gold/10 p-3 rounded-xl group-hover:bg-gold/20 transition-all duration-300 shrink-0 group-hover:scale-110">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-primary-foreground/50 font-bold mb-0.5">Visit Us</p>
                  <p className="text-base text-primary-foreground/90 leading-snug group-hover:text-gold transition-colors">
                    Handi Bazar, Raxaul,<br /> Bihar, India - 845305
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Bar: Copyright & Credit */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p className="text-center md:text-left order-2 md:order-1">
            © {currentYear} Shree Ram Traders. All rights reserved.
          </p>
          
          <div className="order-1 md:order-2 flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-full border border-white/5 shadow-sm hover:bg-white/10 transition-colors cursor-default">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-gold fill-gold animate-pulse" />
            <span>for India & Nepal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;