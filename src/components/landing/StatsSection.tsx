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
    description: "Deep roots in Handi Bazar"
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
    <section className="section-padding bg-secondary/50">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-8 h-8 text-accent" />
              </div>
              <div className="font-serif text-3xl md:text-4xl font-bold text-gradient-gold mb-1">
                {stat.value}
              </div>
              <div className="font-semibold text-foreground mb-1">
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
