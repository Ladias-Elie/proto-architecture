import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => {
              navigate("/");
              setTimeout(() => scrollToSection("hero"), 50);
            }}
            className="text-sm tracking-wider uppercase text-foreground hover:text-accent transition-colors font-light"
          >
            Architecture
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <button onClick={() => scrollToSection("about")} className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light">
              Services
            </button>
            <button onClick={() => navigate("/projects")} className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light">
              Projects
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm text-foreground hover:text-accent transition-colors font-light border-b border-foreground pb-0.5">
              Contact
            </button>
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
          <div className="md:hidden pt-6 pb-2 flex flex-col gap-5">
            <button onClick={() => scrollToSection("about")} className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left font-light">
              About
            </button>
            <button onClick={() => scrollToSection("services")} className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left font-light">
              Services
            </button>
            <button onClick={() => navigate("/projects")} className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left font-light">
              Projects
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm text-foreground hover:text-accent transition-colors text-left font-light border-b border-foreground pb-0.5 w-fit">
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
