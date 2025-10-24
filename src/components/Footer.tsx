import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-12">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-3xl font-bold tracking-tighter">prôto.</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Atelier d'architecture lyonnais dédié à la rénovation écologique et durable.
            </p>
            <a 
              href="https://www.instagram.com/proto.architecture/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              <Instagram className="w-4 h-4" strokeWidth={2} />
              @proto.architecture
            </a>
          </div>

          {/* Navigation */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a href="/a-propos" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="/projets" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Projets
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Camille Brachet */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Camille Brachet</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Architecte EPFL inscrite à l'ordre des architectes Auvergne-Rhône-Alpes
            </p>

            <div className="flex items-center gap-6 pt-2">
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
                  className="h-6"
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
                  className="h-6"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
