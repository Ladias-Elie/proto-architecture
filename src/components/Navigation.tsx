import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b-4 border-primary">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => navigate("/")}
            className="text-base tracking-widest text-primary hover:text-accent transition-colors font-bold uppercase"
          >
            prôto.architecture
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => navigate("/")} 
              className="text-sm text-foreground hover:text-secondary transition-colors font-bold uppercase tracking-wider px-4 py-2 hover:bg-primary hover:text-primary-foreground"
            >
              Agence
            </button>
            <button 
              onClick={() => navigate("/projets")} 
              className="text-sm text-foreground hover:text-secondary transition-colors font-bold uppercase tracking-wider px-4 py-2 hover:bg-accent hover:text-accent-foreground"
            >
              Projets
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary"
          >
            {isOpen ? <X size={28} strokeWidth={3} /> : <Menu size={28} strokeWidth={3} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pt-6 pb-2 flex flex-col gap-4">
            <button 
              onClick={() => { navigate("/"); setIsOpen(false); }} 
              className="text-sm text-foreground hover:text-secondary transition-colors text-left font-bold uppercase tracking-wider px-4 py-2 hover:bg-primary hover:text-primary-foreground"
            >
              Agence
            </button>
            <button 
              onClick={() => { navigate("/projets"); setIsOpen(false); }} 
              className="text-sm text-foreground hover:text-secondary transition-colors text-left font-bold uppercase tracking-wider px-4 py-2 hover:bg-accent hover:text-accent-foreground"
            >
              Projets
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
