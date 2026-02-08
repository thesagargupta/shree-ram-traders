import { X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "919031735298";
  const defaultMessage = "Hello! I'm interested in your premium rice products.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-20 lg:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-3">
        {/* Tooltip/Popup */}
        {isOpen && (
          <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-xs animate-scale-in border-2 border-accent/30">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center">
                  <FaWhatsapp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm">Chat with us</h4>
                  <p className="text-xs text-muted-foreground">We're online!</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close WhatsApp popup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Have questions about our rice varieties? Chat with us on WhatsApp!
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-lg py-2.5 px-4 font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="w-5 h-5" />
              Start Chat
            </button>
          </div>
        )}

        {/* Main WhatsApp Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 flex items-center justify-center animate-bounce-slow"
          aria-label="Open WhatsApp chat"
        >
          {/* Ripple effect */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping" />
          
          {/* WhatsApp Icon */}
          <FaWhatsapp className="w-7 h-7 sm:w-8 sm:h-8 text-white relative z-10" />
          
          {/* Notification badge */}
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-[10px] font-bold text-white">1</span>
          </span>
        </button>
      </div>
    </>
  );
};

export default FloatingWhatsApp;
