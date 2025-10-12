import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex items-end">
      <img 
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
        alt="Architecture moderne"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
      
      <div className="container mx-auto px-8 pb-32 relative z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-foreground tracking-tight mb-4">
          prôto.architecture
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
          Bureau d'architecture à Lyon
        </p>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-foreground/60 hover:text-accent transition-colors group"
        aria-label="Défiler vers le bas"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" strokeWidth={1} />
      </button>
    </section>
  );
};

export default Hero;
