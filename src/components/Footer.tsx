import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-12">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand - Left */}
          <div className="space-y-2 flex flex-col justify-end">
            <p className="text-xs text-muted-foreground leading-tight max-w-[200px]">
              Atelier d'architecture lyonnais dédié à la rénovation écologique et durable.
            </p>
            <a 
              href="https://www.instagram.com/proto.architecture/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-accent transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" strokeWidth={2} />
              @proto.architecture
            </a>
            <h3 className="text-2xl font-bold tracking-tighter">prôto.</h3>
          </div>

          {/* Empty middle column */}
          <div></div>

          {/* Camille Brachet - Right */}
          <div className="space-y-2 flex flex-col justify-end">
            <p className="text-xs text-muted-foreground leading-tight max-w-[200px]">
              Architecte EPFL inscrite à l'ordre des architectes Auvergne-Rhône-Alpes
            </p>

            <div className="flex items-center gap-5">
              <a 
                href="https://www.epfl.ch/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="EPFL"
                className="opacity-60 hover:opacity-100 transition-opacity"
              >
                <img 
                  src="https://www.epfl.ch/wp/5.5/wp-content/themes/wp-theme-2018/assets/svg/epfl-logo.svg" 
                  alt="EPFL" 
                  className="h-5"
                />
              </a>

              <a 
                href="https://www.architectes.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Ordre des Architectes"
                className="opacity-60 hover:opacity-100 transition-opacity"
              >
                <img 
                  src="/logo-ordre-architectes.png" 
                  alt="Ordre des Architectes" 
                  className="h-5"
                />
              </a>
            </div>
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Camille Brachet</h4>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
