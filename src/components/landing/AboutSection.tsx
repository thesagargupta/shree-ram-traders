import { Award, Users, Handshake, Leaf } from "lucide-react";
import logo from "/logo.webp";

const AboutSection = () => {
  const values = [
    {
      icon: Award,
      title: "Quality First",
      description: "Only the finest grains make it to our shelves"
    },
    {
      icon: Handshake,
      title: "Fair Pricing",
      description: "Competitive rates for wholesale and retail"
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Building lasting relationships with every customer"
    },
    {
      icon: Leaf,
      title: "Fresh Supply",
      description: "Consistent quality with reliable delivery"
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              A Trusted Name in{" "}
              <br></br>
              <span className="text-gradient-gold">Quality Rice</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              <strong className="text-foreground">Shree Ram Traders</strong> is a trusted name in Raxaul for supplying 
              premium quality rice. Located in the Handi Bazar, we have been serving the 
              community with dedication and commitment to excellence.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We serve both wholesalers and retailers with consistent quality, fair pricing, 
              and honest business practices. Our goal is simple – to provide the best rice 
              that brings satisfaction to every meal.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="flex items-start gap-3 p-4 sm:p-5 rounded-xl bg-gradient-to-br from-card to-card/50 border border-border hover:border-accent/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <value.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-base mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-slide-in-right">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Decorative circles with animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl animate-pulse" />
              <div className="absolute inset-8 bg-gradient-to-tr from-secondary to-cream rounded-full opacity-60 animate-float" />
              
              {/* Logo Container with enhanced styling */}
              <div className="absolute inset-16 bg-gradient-to-br from-card to-white rounded-full border-4 border-accent/40 shadow-2xl flex items-center justify-center overflow-hidden hover:border-accent transition-all duration-300 hover:scale-105">
                 <img 
                    src={logo} 
                    alt="Shree Ram Traders logo" 
                    className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-110" 
                 />
              </div>

              {/* Floating badges with enhanced styling */}
              <div className="absolute -top-2 -right-2 bg-gradient-to-br from-card to-white shadow-xl rounded-xl px-4 py-3 animate-float z-10 border-2 border-accent/30 hover:border-accent transition-all">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  <span className="text-sm font-semibold">Premium Quality</span>
                </div>
              </div>
              <div className="absolute -bottom-2 -left-2 bg-gradient-to-br from-card to-white shadow-xl rounded-xl px-4 py-3 animate-float delay-500 z-10 border-2 border-accent/30 hover:border-accent transition-all">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" />
                  <span className="text-sm font-semibold">Trusted Business</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;