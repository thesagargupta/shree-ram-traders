import { Award, Users, Handshake, Leaf } from "lucide-react";
import logo from "/logo.png";

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
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              A Trusted Name in{" "}
              <span className="text-gradient-gold">Quality Rice</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              <strong className="text-foreground">Shree Ram Traders</strong> is a trusted name in Raxaul for supplying 
              premium quality rice. Located in the heart of Handi Bazar, we have been serving the 
              community with dedication and commitment to excellence.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We serve both wholesalers and retailers with consistent quality, fair pricing, 
              and honest business practices. Our goal is simple – to provide the best rice 
              that brings satisfaction to every meal.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border card-hover"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <value.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{value.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-slide-in-right">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Decorative circles */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
              <div className="absolute inset-8 bg-secondary rounded-full opacity-50" />
              
              {/* Logo Container */}
              <div className="absolute inset-16 bg-card rounded-full border-4 border-accent/30 flex items-center justify-center overflow-hidden shadow-xl">
                 <img 
                    src={logo} 
                    alt="Shree Ram Traders logo" 
                    className="w-full h-full object-cover rounded-full" 
                 />
              </div>

              {/* Floating badges */}
              <div className="absolute top-0 right-0 bg-card shadow-medium rounded-lg px-4 py-2 animate-float z-10 border border-border">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  <span className="text-sm font-semibold">Premium Quality</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 bg-card shadow-medium rounded-lg px-4 py-2 animate-float delay-500 z-10 border border-border">
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