import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-light mb-4" style={{ fontFamily: "'Noto Serif', Georgia, serif" }}>
              prôto.architecture
            </h3>
            <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-xs">
              Atelier d'architecture lyonnais dédié à la rénovation écologique et durable.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-light mb-6 text-muted-foreground">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="/a-propos" className="text-sm font-light hover:text-accent transition-colors duration-300">
                  À propos
                </a>
              </li>
              <li>
                <a href="/projets" className="text-sm font-light hover:text-accent transition-colors duration-300">
                  Projets
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-sm font-light hover:text-accent transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-sm font-light mb-6 text-muted-foreground">
              Suivez-nous
            </h4>
            <a 
              href="https://www.instagram.com/proto.architecture/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-light hover:text-accent transition-colors duration-300 mb-8"
            >
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
              @proto.architecture
            </a>

            <div className="flex items-center gap-4 pt-8 border-t border-border/50">
              <a 
                href="https://www.epfl.ch/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="EPFL"
              >
                <img 
                  src="https://www.epfl.ch/wp/5.5/wp-content/themes/wp-theme-2018/assets/svg/epfl-logo.svg" 
                  alt="EPFL" 
                  className="h-4 opacity-30 hover:opacity-60 transition-opacity duration-300"
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
                  className="h-4 opacity-30 hover:opacity-60 transition-opacity duration-300"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-muted-foreground font-light">
            © 2024 prôto.architecture — Lyon, France
          </p>
          <p className="text-xs text-muted-foreground font-light">
            Camille Brachet, Architecte DPLG EPFL
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
