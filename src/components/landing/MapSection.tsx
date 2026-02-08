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
        <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-fade-up border-4 border-border hover:border-accent/30 transition-all duration-300">
          <div className="aspect-video md:aspect-[21/9] bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.51312961215!2d84.8480879754419!3d26.982313276605737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399351de7109deb1%3A0x39aec707b0465b20!2sSHREE%20RAM%20TRADERS!5e0!3m2!1sen!2sin!4v1770562309326!5m2!1sen!2sin"
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
          <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-auto md:max-w-sm animate-slide-in-left">
            <div className="bg-gradient-to-br from-card/95 to-white/90 backdrop-blur-md rounded-2xl p-5 md:p-6 shadow-2xl border-2 border-accent/30 hover:border-accent transition-all duration-300 hover:scale-105">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/30 to-accent/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
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
                href="https://maps.google.com/?q=Shree+Ram+Traders+Raxaul"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full justify-center text-sm py-3 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
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
