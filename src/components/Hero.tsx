import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
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
      <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
      
      <div className="relative z-10 container mx-auto px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Titre principal */}
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-foreground">
            Architecture contemporaine<br />ancrée dans le patrimoine
          </h1>
          
          {/* Sous-titre */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Nous concevons des espaces sur-mesure qui respectent l'histoire tout en embrassant la modernité
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="text-base"
            >
              Démarrer un projet
            </Button>
            <Button 
              size="lg"
              variant="outline"
              asChild
              className="text-base"
            >
              <Link to="/projets">Voir nos réalisations</Link>
            </Button>
          </div>
          
          {/* Éléments de réassurance */}
          <div className="flex items-center justify-center gap-8 pt-8 opacity-60">
            <a 
              href="https://www.epfl.ch/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:opacity-100 transition-opacity"
              aria-label="EPFL"
            >
              <img 
                src="https://www.epfl.ch/wp/5.5/wp-content/themes/wp-theme-2018/assets/svg/epfl-logo.svg" 
                alt="EPFL" 
                className="h-6 brightness-0 dark:brightness-100"
              />
            </a>
            <a 
              href="https://www.architectes.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center hover:opacity-100 transition-opacity"
              aria-label="Ordre des Architectes"
            >
              <img 
                src="/logo-ordre-architectes.png" 
                alt="Ordre des Architectes" 
                className="h-6 brightness-0 dark:brightness-100"
              />
            </a>
          </div>
        </div>
      </div>
        
      <button 
        onClick={() => {
          const aboutSection = document.getElementById('about');
          aboutSection?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-foreground/60 hover:text-accent transition-colors group"
        aria-label="Défiler vers le bas"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" strokeWidth={1} />
      </button>
    </section>
  );
};

export default Hero;
