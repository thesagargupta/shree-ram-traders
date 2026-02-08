import { Home, Package, Phone, Info, Menu } from "lucide-react";
import { useState } from "react";

interface BottomNavigationProps {
  onMenuOpen: () => void;
}

const BottomNavigation = ({ onMenuOpen }: BottomNavigationProps) => {
  const [activeTab, setActiveTab] = useState("home");

  const scrollToSection = (id: string, tabName: string) => {
    setActiveTab(tabName);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "Home", icon: Home, tab: "home" },
    { id: "products", label: "Products", icon: Package, tab: "products" },
    { id: "about", label: "About", icon: Info, tab: "about" },
    { id: "contact", label: "Contact", icon: Phone, tab: "contact" },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t-2 border-border shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.tab;

          return (
            <button
              key={item.id}
              onClick={() => {
                if (item.action === "menu") {
                  onMenuOpen();
                } else {
                  scrollToSection(item.id, item.tab);
                }
              }}
              className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive
                  ? "text-accent bg-accent/10 scale-110"
                  : "text-muted-foreground hover:text-accent hover:bg-accent/5"
              }`}
              aria-label={item.label}
            >
              <Icon className={`w-5 h-5 ${isActive ? "animate-bounce-slow" : ""}`} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
