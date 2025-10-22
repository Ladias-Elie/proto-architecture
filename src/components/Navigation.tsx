import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-8 md:px-16">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <button
            onClick={() => handleNavigation("/")}
            className="text-xl font-light tracking-wide hover:opacity-60 transition-opacity duration-300"
            style={{ fontFamily: "'Noto Serif', Georgia, serif" }}
          >
            prôto.architecture
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            <button
              onClick={() => handleNavigation("/a-propos")}
              className={`text-sm font-light tracking-wide transition-all duration-300 ${
                isActive("/a-propos") 
                  ? "text-accent" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              À propos
            </button>
            <button
              onClick={() => handleNavigation("/projets")}
              className={`text-sm font-light tracking-wide transition-all duration-300 ${
                isActive("/projets") 
                  ? "text-accent" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Projets
            </button>
            <button 
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
              }}
              className="text-sm font-light tracking-wide text-foreground hover:text-accent transition-colors duration-300 border-b border-foreground/20 pb-1"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:opacity-60 transition-opacity"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" strokeWidth={1} /> : <Menu className="w-5 h-5" strokeWidth={1} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-8 space-y-6 border-t border-border/50">
            <button
              onClick={() => handleNavigation("/a-propos")}
              className={`block w-full text-left text-base font-light tracking-wide ${
                isActive("/a-propos") ? "text-accent" : "text-muted-foreground"
              }`}
            >
              À propos
            </button>
            <button
              onClick={() => handleNavigation("/projets")}
              className={`block w-full text-left text-base font-light tracking-wide ${
                isActive("/projets") ? "text-accent" : "text-muted-foreground"
              }`}
            >
              Projets
            </button>
            <button 
              onClick={() => {
                navigate("/");
                setIsOpen(false);
                setTimeout(() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
              }}
              className="block w-full text-left text-base font-light tracking-wide text-foreground"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
