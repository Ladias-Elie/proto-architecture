import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => navigate("/")}
            className="text-sm tracking-wide text-foreground hover:text-accent transition-colors font-bold"
          >
            prôto.architecture
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            <button 
              onClick={() => navigate("/a-propos")} 
              className="text-sm text-foreground hover:text-accent transition-colors tracking-wide"
            >
              Agence
            </button>
            <button 
              onClick={() => navigate("/projets")} 
              className="text-sm text-foreground hover:text-accent transition-colors tracking-wide"
            >
              Projets
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pt-8 pb-4 flex flex-col gap-6">
            <button 
              onClick={() => { navigate("/a-propos"); setIsOpen(false); }} 
              className="text-sm text-foreground hover:text-accent transition-colors text-left tracking-wide"
            >
              Agence
            </button>
            <button 
              onClick={() => { navigate("/projets"); setIsOpen(false); }} 
              className="text-sm text-foreground hover:text-accent transition-colors text-left tracking-wide"
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
