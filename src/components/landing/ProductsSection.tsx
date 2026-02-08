import riceBasmati from "@/assets/rice-basmati.jpg";
import riceLonggrain from "@/assets/rice-longgrain.jpg";
import riceSteam from "@/assets/rice-steam.jpg";
import riceDaily from "@/assets/rice-daily.jpg";
import riceBulk from "@/assets/rice-bulk.jpg";

const products = [
  {
    name: "Premium Basmati Rice",
    description: "Long, aromatic grains perfect for biryani and special occasions. Known for its exceptional fragrance and fluffy texture.",
    image: riceBasmati,
    badge: "Best Seller"
  },
  {
    name: "Long Grain Rice",
    description: "Elegant, slender grains that stay separate when cooked. Ideal for pulao, fried rice, and everyday cooking.",
    image: riceLonggrain,
    badge: null
  },
  {
    name: "Steam Rice",
    description: "Parboiled for enhanced nutrition and easy cooking. Retains more vitamins and has a firm, non-sticky texture.",
    image: riceSteam,
    badge: "Popular"
  },
  {
    name: "Daily Use Rice",
    description: "Affordable quality rice for everyday meals. Perfect for regular family cooking with consistent taste.",
    image: riceDaily,
    badge: null
  },
  {
    name: "Bulk Supply Rice",
    description: "Large quantity orders for hotels, restaurants, and retailers. Competitive wholesale pricing with reliable supply.",
    image: riceBulk,
    badge: "Wholesale"
  }
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
              className="group bg-card rounded-2xl overflow-hidden shadow-soft card-hover animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full shadow-gold">
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                    Available in bulk & retail
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 animate-fade-up">
          <p className="text-muted-foreground mb-4">
            Looking for a specific variety or bulk order?
          </p>
          <a
            href="tel:+919430946499"
            className="btn-primary"
          >
            Call Us for Enquiry
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
