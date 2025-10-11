import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection("hero")}
            className="text-xl font-semibold text-foreground hover:text-accent transition-colors"
          >
            Architecture
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-accent transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-accent transition-colors">
              Services
            </button>
            <a href="/projects" className="text-foreground hover:text-accent transition-colors">
              Projects
            </a>
            <Button onClick={() => scrollToSection("contact")} variant="default">
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 flex flex-col gap-4">
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-accent transition-colors text-left">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-accent transition-colors text-left">
              Services
            </button>
            <a href="/projects" className="text-foreground hover:text-accent transition-colors text-left">
              Projects
            </a>
            <Button onClick={() => scrollToSection("contact")} variant="default" className="w-full">
              Contact
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
