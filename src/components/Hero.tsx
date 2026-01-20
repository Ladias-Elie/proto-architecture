'use client'

import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/renovation-maison-village.webp";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-background">
      {/* Grid overlay moved to global `GridOverlay` component in App.tsx */}
      
      <div className="container mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Typography */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none text-balance">
                prôto.<br/>
                architecture
              </h1>
              
              <p className="text-xl md:text-2xl font-light leading-relaxed max-w-xl text-balance">
                Rénovation et transformation de l'habitat existant
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={heroImage.src}
                alt="Rénovation architecturale Lyon - transformation maison village"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Frame effect */}
              <div className="absolute inset-0 border-4 border-background pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
        
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
        aria-label="Défiler vers le bas"
      >
        <ArrowDown className="w-4 h-4 animate-bounce" strokeWidth={2} />
      </button>
    </section>
  );
};

export default Hero;
