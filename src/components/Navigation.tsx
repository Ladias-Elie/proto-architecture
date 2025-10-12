import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => navigate("/")}
            className="text-sm tracking-wider text-foreground hover:text-primary transition-colors font-light"
          >
            prôto.architecture
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <button 
              onClick={() => navigate("/")} 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
            >
              Agence
            </button>
            <button 
              onClick={() => navigate("/projets")} 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
            >
              Projets
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
            <button 
              onClick={() => { navigate("/"); setIsOpen(false); }} 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left font-light"
            >
              Agence
            </button>
            <button 
              onClick={() => { navigate("/projets"); setIsOpen(false); }} 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left font-light"
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
