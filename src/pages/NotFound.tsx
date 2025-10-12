import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, hsl(var(--primary)) 0, hsl(var(--primary)) 20px, hsl(var(--secondary)) 20px, hsl(var(--secondary)) 40px)'
      }} />
      
      <div className="text-center relative z-10">
        <div className="retro-border bg-destructive inline-block px-16 py-8 mb-8 rotate-3 hover:rotate-0 transition-transform">
          <h1 className="text-8xl md:text-9xl font-bold text-destructive-foreground tracking-wider">404</h1>
        </div>
        <div className="retro-border-accent bg-accent inline-block px-8 py-4 mb-8">
          <p className="text-2xl md:text-3xl text-accent-foreground font-bold uppercase tracking-widest">Page introuvable</p>
        </div>
        <a href="/">
          <button className="bg-primary text-primary-foreground px-8 py-4 retro-border hover:translate-y-1 hover:shadow-none transition-all text-lg font-bold uppercase tracking-wider">
            Retour à l'accueil
          </button>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
