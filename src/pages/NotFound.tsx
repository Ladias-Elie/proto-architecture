import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-8 space-y-12">
        <h1 className="text-9xl md:text-[12rem] text-foreground/20">
          404
        </h1>
        
        <div className="space-y-6">
          <p className="text-3xl text-foreground">
            Page introuvable
          </p>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </div>
        
        <a href="/">
          <button className="text-accent hover:text-foreground transition-colors border-b border-accent">
            Retour à l'accueil
          </button>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
