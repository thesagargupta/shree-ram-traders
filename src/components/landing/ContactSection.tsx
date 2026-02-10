import { Phone, MapPin, Clock, Send, Wheat, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { validateMessage, validateName, validatePhoneAuto } from "@/lib/contactValidation";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<
    | null
    | {
        firstSuccessfulMethod?: "whatsapp" | "email";
        methodStatus?: Record<string, string>;
      }
  >(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nameError = validateName(formData.name);
    if (nameError) {
      toast({
        title: "Invalid Name",
        description: nameError,
        variant: "destructive",
      });
      return;
    }

    const phoneError = validatePhoneAuto(formData.phone);
    if (phoneError) {
      toast({
        title: "Invalid Phone Number",
        description: phoneError,
        variant: "destructive",
      });
      return;
    }

    const messageError = validateMessage(formData.message);
    if (messageError) {
      toast({
        title: "Invalid Message",
        description: messageError,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const apiUrl = `/api/contact`;
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitResult({
          firstSuccessfulMethod: data.firstSuccessfulMethod,
          methodStatus: data.methodStatus,
        });
        setFormData({ name: "", phone: "", message: "" });
      } else {
        toast({
          title: "Failed to Send",
          description: data.message || "Please try again or call us directly at +91 94309 46499",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Connection Error",
        description: "Unable to send enquiry. Please call us at +91 94309 46499",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
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
                className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-br from-card to-card/50 border border-border hover:border-accent/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-medium">Call Us Now</div>
                  <div className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    +91 94309 46499
                  </div>
                </div>
              </a>

              <a
                href="https://maps.google.com/?q=Shree+Ram+Traders+Raxaul"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-br from-card to-card/50 border border-border hover:border-accent/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-medium">Visit Our Shop</div>
                  <div className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    Handi Bazar, Raxaul, Bihar
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-br from-card to-card/50 border border-border">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-medium">Business Hours</div>
                  <div className="text-lg font-semibold text-foreground">
                    Mon - Sat: 8:00 AM - 8:00 PM
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="tel:+919430946499"
              className="btn-gold w-full justify-center text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call Now for Enquiry
            </a>
          </div>

          {/* Enquiry Form */}
          <div className="animate-slide-in-right">
            <div className="bg-gradient-to-br from-card to-white rounded-2xl shadow-2xl p-6 md:p-8 border-2 border-border hover:border-accent/30 transition-all duration-300">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
                Send an Enquiry
              </h3>
              <p className="text-muted-foreground mb-8">
                Fill the form below and we'll get back to you shortly.
              </p>

              {submitResult ? (
                <div className="rounded-2xl border border-accent/30 bg-accent/10 p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-accent/20 flex items-center justify-center">
                      <CheckCircle2 className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="text-lg font-bold text-foreground">Request submitted</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {submitResult.firstSuccessfulMethod === "whatsapp"
                          ? "WhatsApp notification is confirmed. Email will be attempted in the background."
                          : submitResult.firstSuccessfulMethod === "email"
                            ? "Email notification is confirmed. WhatsApp will be attempted in the background."
                            : "We received your request. We will contact you shortly."}
                      </p>
                      <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
                        {/* <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1">
                          <Wheat className="h-4 w-4 text-accent" />
                          <span>
                            {submitResult.methodStatus?.whatsapp ? `WhatsApp: ${submitResult.methodStatus.whatsapp}` : "WhatsApp"}
                          </span>
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1">
                          <Wheat className="h-4 w-4 text-accent" />
                          <span>
                            {submitResult.methodStatus?.email ? `Email: ${submitResult.methodStatus.email}` : "Email"}
                          </span>
                        </div> */}
                      </div>

                      <button
                        type="button"
                        onClick={() => setSubmitResult(null)}
                        className="mt-5 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-accent/10"
                      >
                        Send Another Enquiry
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
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
                    minLength={5}
                    rows={4}
                    placeholder="Tell us about your requirement..."
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="relative inline-flex items-center justify-center">
                        <Wheat className="w-5 h-5 text-white animate-spin" />
                        <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-white/80 animate-ping" />
                      </span>
                      <span className="animate-pulse">Submitting...</span>
                    </span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Enquiry
                    </>
                  )}
                </button>
              </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
