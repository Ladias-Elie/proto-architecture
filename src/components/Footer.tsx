import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-20">
      <div className="container mx-auto px-8 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-16">
          {/* Brand - Large */}
          <div className="md:col-span-5">
            <h3 className="text-4xl mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              prôto.<br/>
              <span className="italic">architecture</span>
            </h3>
            <p className="text-sm text-background/70 leading-relaxed max-w-sm italic">
              Atelier d'architecture lyonnais dédié à la rénovation écologique, la reconversion et la transformation durable du bâti existant.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-background/50" style={{ fontFamily: 'Inter' }}>
              Navigation
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="/a-propos" className="text-sm hover:text-background/70 transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="/projets" className="text-sm hover:text-background/70 transition-colors">
                  Projets
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-sm hover:text-background/70 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="md:col-span-4">
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6 text-background/50" style={{ fontFamily: 'Inter' }}>
              Suivez-nous
            </h4>
            <a 
              href="https://www.instagram.com/proto.architecture/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm hover:text-background/70 transition-colors mb-8"
            >
              <Instagram className="w-5 h-5" strokeWidth={1.5} />
              @proto.architecture
            </a>

            <div className="flex items-center gap-6 mt-8 pt-8 border-t border-background/20">
              <a 
                href="https://www.epfl.ch/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="EPFL"
                className="opacity-40 hover:opacity-70 transition-opacity"
              >
                <img 
                  src="https://www.epfl.ch/wp/5.5/wp-content/themes/wp-theme-2018/assets/svg/epfl-logo.svg" 
                  alt="EPFL" 
                  className="h-5 invert"
                />
              </a>

              <a 
                href="https://www.architectes.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Ordre des Architectes"
                className="opacity-40 hover:opacity-70 transition-opacity"
              >
                <img 
                  src="/logo-ordre-architectes.png" 
                  alt="Ordre des Architectes" 
                  className="h-5 invert"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-background/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-xs text-background/50 tracking-wider" style={{ fontFamily: 'Inter' }}>
            © 2024 prôto.architecture — Lyon, France
          </p>
          <p className="text-xs text-background/50 italic">
            Camille Brachet, Architecte DPLG EPFL
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
