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
      <div className="absolute inset-0 bg-background/30" />
        
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
