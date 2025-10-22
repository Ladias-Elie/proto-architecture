import heroImage from "@/assets/renovation-maison-village.webp";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center bg-background">
      <div className="container mx-auto px-8 md:px-16 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image */}
          <div className="order-2 lg:order-1 fade-in-slow">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img 
                src={heroImage}
                alt="Rénovation architecturale Lyon - transformation maison village"
                className="absolute inset-0 w-full h-full object-cover opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
            </div>
          </div>

          {/* Right: Typography */}
          <div className="order-1 lg:order-2 space-y-12 fade-in-slow">
            <div className="space-y-8">
              <div className="h-px w-16 bg-accent" />
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-balance">
                prôto.<br/>
                architecture
              </h1>
              
              <p className="text-lg md:text-xl font-light leading-relaxed text-muted-foreground max-w-md">
                Rénovation et transformation de l'habitat existant à Lyon
              </p>
            </div>

            <div className="flex flex-col gap-4 pt-8">
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-base font-light tracking-wide"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Démarrer un projet
              </Button>
              <button 
                onClick={scrollToAbout}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 text-left"
              >
                En savoir plus →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50">
        <div className="w-px h-12 bg-foreground/30 animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
