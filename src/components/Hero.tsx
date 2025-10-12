import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToContent = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/40" />
        <div className="absolute inset-0" style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--accent) / 0.1) 2px, hsl(var(--accent) / 0.1) 4px)'
        }} />
      </div>
      
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-8">
        <div className="retro-border bg-primary px-8 py-4 rotate-2 hover:rotate-0 transition-transform">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground tracking-wider">
            PROTO
          </h1>
        </div>
        <div className="retro-border-accent bg-accent px-8 py-4 -rotate-3 hover:rotate-0 transition-transform">
          <p className="text-xl md:text-3xl font-bold text-accent-foreground tracking-widest">
            ARCHITECTURE
          </p>
        </div>
      </div>
      
      <button 
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 bg-secondary text-secondary-foreground px-6 py-3 retro-border hover:translate-y-1 hover:shadow-none transition-all animate-bounce font-bold"
        aria-label="Découvrir"
      >
        <ChevronDown size={32} strokeWidth={3} />
      </button>
    </section>
  );
};

export default Hero;
