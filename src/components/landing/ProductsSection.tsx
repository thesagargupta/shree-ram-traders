import riceBasmati from "@/assets/rice-basmati.webp";
import riceLonggrain from "@/assets/rice-longgrain.webp";
import riceSteam from "@/assets/rice-steam.webp";
// import riceDaily from "@/assets/rice-daily.webp";
// import riceBulk from "@/assets/rice-bulk.webp";
import riceSona from "@/assets/SonaMasoori.webp";
import riceResort from "@/assets/resort.webp";
import sella from "@/assets/sella.webp";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const products = [
  {
    name: "Premium Basmati Rice",
    description: "Extra-long, aged aromatic grains that expand significantly when cooked. Renowned for its delicate fragrance and distinct, non-sticky texture.",
    image: riceBasmati,
    badge: "Best Seller"
  },
  {
    name: "Long Grain Rice",
    description: "Versatile, slender grains that remain fluffy and separate. A reliable all-rounder perfect for pilafs, stir-frys, and side dishes.",
    image: riceLonggrain,
    badge: null
  },
  {
    name: "Half-Steam Rice",
    description: "Partially parboiled to lock in essential nutrients. Offers a shorter cooking time while maintaining a firm, golden grain that won't get mushy.",
    image: riceSteam,
    badge: "Popular"
  },
  {
    name: "Full-Steam/Sella Rice",
    description: "Fully parboiled rice with a robust grain that resists overcooking. Ideal for large-scale catering and dishes that require reheating.",
    image: sella,
    badge: null
  },
  {
    name: "Sona Masoori Rice",
    description: "A lightweight, aromatic medium-grain rice. Low in starch and easy to digest, making it the preferred choice for daily South Indian meals.",
    image: riceSona,
    badge: null
  },
  {
    name: "Premium Resort Rice",
    description: "Specially curated high-yield batches designed for the hospitality industry. Ensures consistent plate presentation and superior taste for bulk dining.",
    image: riceResort,
    badge: "Wholesale"
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="section-padding bg-secondary/30 bg-pattern-rice">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-up">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Our Products
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Premium Rice <span className="text-gradient-gold">Varieties</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully selected range of quality rice, available in both bulk and retail quantities.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group bg-gradient-to-br from-card to-card/80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-up border border-border hover:border-accent/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-accent to-gold-light text-accent-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-lg animate-pulse">
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 bg-gradient-to-br from-white/50 to-transparent">
                <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-accent bg-gradient-to-r from-accent/10 to-accent/5 px-4 py-2 rounded-full border border-accent/20">
                    Available in bulk & retail
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 animate-fade-up">
          <p className="text-muted-foreground mb-6 text-lg">
            Looking for a specific variety or bulk order?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+919430946499"
              className="btn-gold shadow-2xl hover:shadow-gold/50 hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              Call for Enquiry
            </a>
            <a
              href="https://wa.me/919430946499?text=Hello!%20I%27m%20interested%20in%20your%20premium%20rice%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 shadow-xl w-full sm:w-auto justify-center"
            >
              <FaWhatsapp className="w-6 h-6" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
