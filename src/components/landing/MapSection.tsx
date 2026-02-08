import { MapPin, Navigation } from "lucide-react";

const MapSection = () => {
  return (
    <section id="location" className="section-padding bg-secondary/30 pb-8">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 animate-fade-up">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Our Location
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Find Us in <span className="text-gradient-gold">Handi Bazar</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Located in the heart of Raxaul's trading hub, easily accessible for all your rice needs.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-medium animate-fade-up">
          <div className="aspect-video md:aspect-[21/9] bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3569.8091859453365!2d84.84339131544894!3d26.97870478310012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399351b5c3bf9e7b%3A0x8f8dc9b2e7f1c8c!2sHandi%20Bazar%2C%20Raxaul%2C%20Bihar!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shree Ram Traders Location"
              className="w-full h-full"
            />
          </div>

          {/* Overlay Card */}
          <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-auto md:max-w-sm">
            <div className="bg-card/95 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-strong border border-border">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-foreground">
                    Shree Ram Traders
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Handi Bazar, Raxaul, Bihar, India
                  </p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Handi+Bazar+Raxaul+Bihar"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full justify-center text-sm py-3"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
