import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-12 border-t-2 border-border">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <h3 className="text-3xl font-bold tracking-tighter mb-4">prôto.</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Atelier d'architecture lyonnais dédié à la rénovation écologique et durable.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold mb-4 text-muted-foreground">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/a-propos" className="text-sm hover:text-accent transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="/projets" className="text-sm hover:text-accent transition-colors">
                  Projets
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-sm hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="md:col-span-4">
            <div className="mb-8">
              <p className="text-sm mb-4">
                <strong>Camille Brachet</strong><br />
                architecte EPFL inscrite à l'ordre des architectes Auvergne-Rhône-Alpes
              </p>
            </div>

            <h4 className="text-xs uppercase tracking-widest font-semibold mb-4 text-muted-foreground">
              Suivez-nous
            </h4>
            <a 
              href="https://www.instagram.com/proto.architecture/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:text-accent transition-colors mb-6"
            >
              <Instagram className="w-4 h-4" strokeWidth={2} />
              @proto.architecture
            </a>

            <div className="flex items-center gap-6 mt-6 pt-6 border-t border-border">
              <a 
                href="https://www.epfl.ch/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="EPFL"
              >
                <img 
                  src="https://www.epfl.ch/wp/5.5/wp-content/themes/wp-theme-2018/assets/svg/epfl-logo.svg" 
                  alt="EPFL" 
                  className="h-6 opacity-60 hover:opacity-100 transition-opacity"
                />
              </a>

              <a 
                href="https://www.architectes.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Ordre des Architectes"
              >
                <img 
                  src="/logo-ordre-architectes.png" 
                  alt="Ordre des Architectes" 
                  className="h-6 opacity-60 hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">
            © 2024 prôto.architecture — Lyon, France
          </p>
          <p className="text-xs text-muted-foreground">
            Camille Brachet, Architecte EPFL
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
