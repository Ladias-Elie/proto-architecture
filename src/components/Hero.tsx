import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/renovation-maison-village.webp";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center">
      <img 
        src={heroImage}
        alt="Photo d'une maison de village rénové, demontrant une architecture moderne intégrée dans un cadre traditionnel."
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-background/30" />
      
      <div className="relative z-10 container mx-auto px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Titre principal */}
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white drop-shadow-lg">
            Architecture contemporaine<br />ancrée dans le patrimoine
          </h1>
          
          {/* CTA principal */}
          <div className="pt-4">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="text-base px-8"
            >
              Démarrer un projet
            </Button>
          </div>
        </div>
      </div>
        
      <button 
        onClick={() => {
          const aboutSection = document.getElementById('about');
          aboutSection?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors group"
        aria-label="Défiler vers le bas"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" strokeWidth={1} />
      </button>
    </section>
  );
};

export default Hero;
