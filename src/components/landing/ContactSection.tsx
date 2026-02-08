import { Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Enquiry Sent!",
      description: "We will contact you shortly. Thank you for your interest!",
    });

    setFormData({ name: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="animate-fade-up">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Contact Us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Get in <span className="text-gradient-gold">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions about our rice varieties or want to place a bulk order? 
              We're here to help! Call us directly or send an enquiry.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              <a
                href="tel:+919430946499"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border card-hover group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Call Us Now</div>
                  <div className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    +91 94309 46499
                  </div>
                </div>
              </a>

              <a
                href="https://maps.google.com/?q=Handi+Bazar+Raxaul+Bihar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border card-hover group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Visit Our Shop</div>
                  <div className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    Handi Bazar, Raxaul, Bihar
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Business Hours</div>
                  <div className="text-lg font-semibold text-foreground">
                    Mon - Sat: 8:00 AM - 8:00 PM
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="tel:+919430946499"
              className="btn-gold w-full justify-center text-lg"
            >
              <Phone className="w-5 h-5" />
              Call Now for Enquiry
            </a>
          </div>

          {/* Enquiry Form */}
          <div className="animate-slide-in-right">
            <div className="bg-card rounded-2xl shadow-medium p-6 md:p-8 border border-border">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                Send an Enquiry
              </h3>
              <p className="text-muted-foreground mb-6">
                Fill the form below and we'll get back to you shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us about your requirement..."
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Enquiry
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
