import { Calendar, ShoppingBag, MapPinned, Heart } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: "20+",
    label: "Years of Trust",
    description: "Serving Raxaul since years"
  },
  {
    icon: ShoppingBag,
    value: "Bulk",
    label: "Orders Supported",
    description: "Large wholesale quantities"
  },
  {
    icon: MapPinned,
    value: "Local",
    label: "Market Expertise",
    description: "Deep roots in the Market"
  },
  {
    icon: Heart,
    value: "100%",
    label: "Customer Focus",
    description: "Your satisfaction is our priority"
  }
];

const StatsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-secondary/50 via-cream/30 to-secondary/50 relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 bg-pattern-rice opacity-50" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group animate-fade-up hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                <stat.icon className="w-10 h-10 text-accent" />
              </div>
              <div className="font-serif text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
                {stat.value}
              </div>
              <div className="font-semibold text-foreground text-lg mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
