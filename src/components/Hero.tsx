import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/renovation-maison-village.webp";

const Hero = () => {

  return (
    <section className="min-h-screen relative flex items-center justify-center">
      <img 
        src={heroImage}
        alt="Photo d'une maison de village rénové, demontrant une architecture moderne intégrée dans un cadre traditionnel."
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-background/20" />
      
      <div className="relative z-10 container mx-auto px-8 text-center">
        <div className="max-w-xl mx-auto animate-fade-in">
          <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4 md:p-6 shadow-lg">
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-primary mb-2">
              prôto.architecture
            </h1>
            <p className="text-sm md:text-base font-light text-foreground/80 leading-relaxed">
              Architecte à Lyon spécialisé dans la rénovation et transformation de l'habitat existant
            </p>
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
