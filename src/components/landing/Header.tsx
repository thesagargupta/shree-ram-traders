import { Phone, MapPin, Menu, X, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useState, forwardRef, useImperativeHandle } from "react";
import logo from "/logo.webp";
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

export interface HeaderRef {
  openMobileMenu: () => void;
}

const Header = forwardRef<HeaderRef>((props, ref) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [callbackOpen, setCallbackOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    country: "+91",
  });

  useImperativeHandle(ref, () => ({
    openMobileMenu: () => setMobileMenuOpen(true),
  }));

  const countries = useMemo(
    () => [
      { name: "India", dial: "+91", flag: "🇮🇳" },
      { name: "Nepal", dial: "+977", flag: "🇳🇵" },
      { name: "Bangladesh", dial: "+880", flag: "🇧🇩" },
      { name: "United Arab Emirates", dial: "+971", flag: "🇦🇪" },
      { name: "Qatar", dial: "+974", flag: "🇶🇦" },
      { name: "Saudi Arabia", dial: "+966", flag: "🇸🇦" },
      { name: "United Kingdom", dial: "+44", flag: "🇬🇧" },
      { name: "United States", dial: "+1", flag: "🇺🇸" },
      { name: "Canada", dial: "+1", flag: "🇨🇦" },
      { name: "Australia", dial: "+61", flag: "🇦🇺" },
    ],
    []
  );

  // Lock body scroll when Modal OR Mobile Menu is open
  useEffect(() => {
    if (callbackOpen || mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [callbackOpen, mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const openCallback = () => {
    setMobileMenuOpen(false); // Close mobile menu first
    // Small timeout ensures the menu animation finishes slightly or feels smoother
    setTimeout(() => setCallbackOpen(true), 150);
    setSubmitted(false);
  };

  const closeCallback = () => {
    setCallbackOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border overflow-x-hidden">
        <div className="container-custom mx-auto max-w-full">
          <div className="flex items-center justify-between h-16 md:h-20 px-4 max-w-full">
            
            {/* --- Logo Section (Fixed with Scaling) --- */}
            <div className="flex items-center gap-1.5 sm:gap-2 -ml-2 md:-ml-3 shrink-0">
              {/* Logo Wrapper: Fixed size + Overflow Hidden */}
              <div className="relative h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 shrink-0 overflow-hidden flex items-center justify-center">
                {/* Image: Scaled up to remove whitespace */}
                <img
                  src={logo}
                  alt="Shree Ram Traders logo"
                  className="w-full h-full object-contain scale-[1.6]"
                  loading="eager"
                />
              </div>
              
              {/* Text Content */}
              <div className="flex flex-col justify-center min-w-0">
                <h1 className="font-serif font-bold text-base sm:text-lg md:text-xl text-foreground leading-tight truncate">
                  Shree Ram Traders
                </h1>
                <p className="text-[10px] md:text-xs text-muted-foreground hidden sm:block tracking-wide truncate">
                  Premium Rice Seller
                </p>
              </div>
            </div>

            {/* --- Desktop Navigation --- */}
            <nav className="hidden lg:flex items-center gap-8">
              {["about", "products", "why-us", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors capitalize"
                >
                  {section.replace("-", " ")}
                </button>
              ))}
            </nav>

            {/* --- Desktop CTA Buttons --- */}
            <div className="hidden lg:flex items-center gap-4 shrink-0">
              <a
                href="tel:+919031735298"
                className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors whitespace-nowrap group"
              >
                <Phone className="w-4 h-4 animate-vibrate" />
                +91 90317 35298
              </a>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setCallbackOpen(true);
                  setSubmitted(false);
                }}
                className="btn-gold text-sm py-2 px-4 flex items-center gap-2 whitespace-nowrap"
              >
                <IoMdCall className="w-4 h-4" />
                Request Callback
              </button>
            </div>

            {/* --- Mobile Request Callback Button --- */}
            <button
              onClick={(e) => {
                e.preventDefault();
                setCallbackOpen(true);
                setSubmitted(false);
              }}
              className="lg:hidden btn-gold text-xs sm:text-sm py-2 px-3 sm:px-4 flex items-center gap-1.5 sm:gap-2 whitespace-nowrap shrink-0"
            >
              <IoMdCall className="w-4 h-4" />
              <span className="hidden sm:inline">Request Callback</span>
              <span className="sm:hidden">Callback</span>
            </button>
          </div>
        </div>
      </header>

      {/* ========================================
        FULL SCREEN SLIDE-IN MOBILE MENU
        ========================================
      */}
      <div
        className={`fixed inset-0 z-[60] flex justify-end transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none delay-300"
        }`}
      >
        {/* Backdrop (Darkens the content behind) */}
        <div 
          className={`absolute inset-0 bg-black/20 backdrop-blur-[2px] transition-opacity duration-300 ${
             mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* The Drawer Panel */}
        <div
          className={`relative w-full max-w-sm h-full bg-background border-l border-border shadow-2xl transform transition-transform duration-300 ease-out-expo flex flex-col ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between px-6 h-20 border-b border-border/50 shrink-0">
             <span className="font-serif font-bold text-lg">Menu</span>

             <button
               onClick={() => setMobileMenuOpen(false)}
               className="p-2 -mr-2 rounded-full hover:bg-accent/10 transition-colors"
             >
               <X className="w-6 h-6" />
             </button>
          </div>

          {/* Menu Links */}
          <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-2">
            {["about", "products", "why-us", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="group flex items-center justify-between py-4 text-2xl font-serif font-medium text-foreground border-b border-border/40 hover:text-accent transition-all"
              >
                <span className="capitalize">{section.replace("-", " ")}</span>
                <ChevronRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent" />
              </button>
            ))}
          </div>

          {/* Menu Footer (CTAs) */}
          <div className="p-6 bg-accent/5 border-t border-border/50 shrink-0 flex flex-col gap-4">
             <a
                href="tel:+919031735298"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-xl border border-input bg-background font-semibold text-foreground hover:bg-accent/5 transition-colors"
              >
                <Phone className="w-5 h-5 text-accent" />
                +91 90317 35298
              </a>
              
              <button
                onClick={openCallback}
                className="btn-gold w-full justify-center py-4 text-base shadow-lg shadow-accent/20"
              >
                <IoMdCall className="w-5 h-5 mr-2" />
                Request Callback
              </button>
          </div>
        </div>
      </div>

      {/* ========================================
        CALLBACK MODAL
        ========================================
      */}
      {callbackOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center px-4 py-8">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeCallback}
          />
          <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-background shadow-[0_25px_80px_rgba(0,0,0,0.35)] animate-in fade-in zoom-in-95 duration-300">
            {/* Background decorative blobs */}
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -left-24 -bottom-16 h-52 w-52 rounded-full bg-primary/15 blur-3xl" />

            <div className="relative px-6 py-6 sm:px-8 sm:py-7">
              <button
                type="button"
                onClick={closeCallback}
                className="absolute right-4 top-4 rounded-full border border-border bg-background/80 p-2 text-foreground/80 transition hover:text-foreground hover:bg-accent/10"
                aria-label="Close request callback"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Premium Support
                </span>
                <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                  Request a Callback
                </h2>
                <p className="text-sm text-muted-foreground sm:text-base">
                  Share your details and our team will call you within business hours.
                </p>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="callback-full-name"
                      className="text-sm font-semibold text-foreground"
                    >
                      Full Name
                    </label>
                    <input
                      id="callback-full-name"
                      type="text"
                      required
                      value={form.fullName}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, fullName: e.target.value }))
                      }
                      placeholder="Enter your full name"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="callback-phone"
                      className="text-sm font-semibold text-foreground"
                    >
                      Phone Number
                    </label>
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <select
                        aria-label="Country code"
                        value={form.country}
                        onChange={(e) =>
                          setForm((prev) => ({ ...prev, country: e.target.value }))
                        }
                        className="w-full rounded-lg border border-input bg-background px-3 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all sm:max-w-[160px]"
                      >
                        {countries.map((country) => (
                          <option
                            key={`${country.dial}-${country.name}`}
                            value={country.dial}
                          >
                            {country.flag} {country.dial} {country.name}
                          </option>
                        ))}
                      </select>
                      <input
                        id="callback-phone"
                        type="tel"
                        required
                        inputMode="tel"
                        value={form.phone}
                        onChange={(e) =>
                          setForm((prev) => ({ ...prev, phone: e.target.value }))
                        }
                        placeholder="Enter phone number"
                        className="w-full flex-1 rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-gold w-full justify-center py-3 text-base"
                  >
                    Submit Request
                  </button>

                  <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground sm:flex-row sm:justify-center">
                    <span>Or WhatsApp us directly</span>
                    <a
                      href="https://wa.me/919031735298"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-accent px-4 py-2 font-semibold text-accent transition hover:bg-accent/10"
                    >
                      <FaWhatsapp className="h-4 w-4" />
                      WhatsApp Us
                    </a>
                  </div>
                </form>
              ) : (
                <div className="mt-6 flex flex-col gap-5">
                  <div className="rounded-xl border border-accent/30 bg-accent/10 px-5 py-4">
                    <p className="text-sm font-semibold text-accent">
                      Request received
                    </p>
                    <p className="mt-1 text-sm text-foreground">
                      Thanks {form.fullName || "there"}! We will call you at{" "}
                      {form.country} {form.phone}.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <a
                      href="https://wa.me/919031735298"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold w-full justify-center py-3 text-base"
                    >
                      <FaWhatsapp className="h-5 w-5" />
                      Chat on WhatsApp
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setForm((prev) => ({ ...prev, phone: "", fullName: "" }));
                      }}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-accent/10"
                    >
                      Submit Another Request
                    </button>
                    <button
                      type="button"
                      onClick={closeCallback}
                      className="text-sm font-semibold text-muted-foreground hover:text-foreground"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
});

Header.displayName = "Header";

export default Header;