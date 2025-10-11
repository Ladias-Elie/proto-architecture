import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 leading-tight tracking-tight">
            Transforming spaces with precision and vision
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 font-light leading-relaxed">
            EPFL-trained architect based in Lyon, specializing in residential renovations and architectural design.
          </p>
          <button 
            onClick={scrollToContact}
            className="text-sm text-foreground hover:text-accent transition-colors font-light border-b border-foreground pb-1"
          >
            Start your project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
