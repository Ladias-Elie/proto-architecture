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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-8 md:px-24">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <button
            onClick={() => handleNavigation("/")}
            className="text-2xl tracking-tight hover:opacity-70 transition-opacity"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            prôto.
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            <button
              onClick={() => handleNavigation("/a-propos")}
              className={`text-sm tracking-wide transition-colors ${
                isActive("/a-propos") 
                  ? "text-accent" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
              style={{ fontFamily: 'Inter' }}
            >
              À propos
            </button>
            <button
              onClick={() => handleNavigation("/projets")}
              className={`text-sm tracking-wide transition-colors ${
                isActive("/projets") 
                  ? "text-accent" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
              style={{ fontFamily: 'Inter' }}
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
              className="text-sm tracking-wide text-foreground hover:text-accent transition-colors border-b border-foreground pb-1"
              style={{ fontFamily: 'Inter' }}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:opacity-70 transition-opacity"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-8 space-y-6 border-t border-border">
            <button
              onClick={() => handleNavigation("/a-propos")}
              className={`block w-full text-left text-base ${
                isActive("/a-propos") ? "text-accent" : "text-muted-foreground"
              }`}
            >
              À propos
            </button>
            <button
              onClick={() => handleNavigation("/projets")}
              className={`block w-full text-left text-base ${
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
              className="block w-full text-left text-base text-foreground"
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
