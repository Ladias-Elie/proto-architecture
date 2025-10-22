import heroImage from "@/assets/renovation-maison-village.webp";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex items-center bg-background grain-texture">
      <div className="container mx-auto px-8 md:px-24 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Editorial Typography */}
          <div className="lg:col-span-5 space-y-10 fade-in-editorial">
            {/* Issue/Date Label */}
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-foreground" />
              <span className="text-xs tracking-[0.3em] uppercase font-medium" style={{ fontFamily: 'Inter' }}>
                Lyon 2024
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
                prôto.<br/>
                <span className="italic">architecture</span>
              </h1>
              
              <p className="text-lg md:text-xl leading-relaxed max-w-md italic text-foreground/80">
                « Réinventer l'habitat existant avec élégance et conscience »
              </p>
            </div>

            {/* Subtitle */}
            <div className="border-l-2 border-accent pl-6 max-w-md">
              <p className="text-base leading-relaxed text-muted-foreground">
                Atelier d'architecture spécialisé dans la rénovation lourde, la transformation et la reconversion du patrimoine bâti lyonnais.
              </p>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-6 pt-6">
              <Button 
                size="lg" 
                className="text-base"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Commencer un projet
              </Button>
              <button 
                onClick={scrollToAbout}
                className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors group flex items-center gap-2"
                style={{ fontFamily: 'Inter' }}
              >
                Découvrir
                <span className="transform group-hover:translate-y-1 transition-transform">↓</span>
              </button>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Main Image */}
              <div className="aspect-[4/5] overflow-hidden editorial-shadow-lg">
                <img 
                  src={heroImage}
                  alt="Architecture rénovation Lyon - Transformation patrimoine"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Image Caption */}
              <div className="mt-6 flex items-start justify-between gap-8">
                <p className="text-xs leading-relaxed text-muted-foreground italic max-w-md">
                  Rénovation complète d'une maison de village en pierre, alliant respect du patrimoine et confort contemporain.
                </p>
                <span className="text-xs tracking-widest text-muted-foreground" style={{ fontFamily: 'Inter' }}>
                  01
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
