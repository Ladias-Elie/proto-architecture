import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            {/* Logo EPFL */}
            <a 
              href="https://www.epfl.ch/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <span className="text-2xl font-serif text-foreground/60 hover:text-accent transition-colors">EPFL</span>
            </a>

            {/* Instagram Link */}
            <a 
              href="https://www.instagram.com/proto.architecture/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
            >
              <Instagram className="w-5 h-5" strokeWidth={1.5} />
              <span className="text-sm">@proto.architecture</span>
            </a>

            {/* Logo Ordre des Architectes */}
            <a 
              href="https://www.architectes.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <span className="text-sm text-foreground/60 hover:text-accent transition-colors uppercase tracking-wider">Ordre des Architectes</span>
            </a>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 prôto.architecture — Lyon
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
