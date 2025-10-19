import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/renovation-maison-village.webp";

const Hero = () => {

  return (
    <section className="min-h-screen relative flex items-start justify-start">
      <img 
        src={heroImage}
        alt="Photo d'une maison de village rénové, demontrant une architecture moderne intégrée dans un cadre traditionnel."
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-background/20" />
      
      <div className="relative z-10 container mx-auto px-8 pt-32">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-2xl md:text-3xl font-light tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-relaxed">
            Architecte à Lyon spécialisé dans la rénovation et transformation de l'habitat existant
          </h1>
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
