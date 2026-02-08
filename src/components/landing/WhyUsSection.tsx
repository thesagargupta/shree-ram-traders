import { 
  Award, 
  Package, 
  ShieldCheck, 
  Warehouse, 
  BadgeIndianRupee, 
  Truck 
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Finest Quality Rice",
    description: "We source only premium grains, ensuring every bag meets our strict quality standards."
  },
  {
    icon: Package,
    title: "Wholesale & Retail Supply",
    description: "From small retail packs to large bulk orders, we cater to all business sizes."
  },
  {
    icon: ShieldCheck,
    title: "Trusted Local Business",
    description: "Years of honest dealings have made us a trusted name in Raxaul market."
  },
  {
    icon: Warehouse,
    title: "Hygienic Storage",
    description: "Modern storage facilities ensure rice stays fresh and pest-free."
  },
  {
    icon: BadgeIndianRupee,
    title: "Competitive Pricing",
    description: "Fair prices without compromising on quality. Best value for your money."
  },
  {
    icon: Truck,
    title: "Reliable Supply Chain",
    description: "Consistent availability with timely delivery to keep your business running."
  }
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-pattern-rice" />
      </div>

      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-up">
          {/* <span className="inline-block text-sm font-semibold text-gold uppercase tracking-wider mb-4">
            Why Choose Us
          </span> */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gold font-bold mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Experience the trust and quality that has made us the preferred rice supplier in Raxaul.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-gradient-to-br from-primary-foreground/10 to-primary-foreground/5 backdrop-blur-sm border-2 border-primary-foreground/10 rounded-2xl p-6 md:p-8 transition-all duration-500 hover:bg-primary-foreground/15 hover:border-gold/50 hover:-translate-y-2 hover:shadow-2xl animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold/30 to-gold/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <feature.icon className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-3 group-hover:text-gold transition-colors">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
