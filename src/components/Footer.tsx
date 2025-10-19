import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Left: Logos */}
          <div className="flex items-center gap-8">
            <a 
              href="https://www.epfl.ch/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <img 
                src="https://www.epfl.ch/wp/5.5/wp-content/themes/wp-theme-2018/assets/svg/epfl-logo.svg" 
                alt="EPFL" 
                className="h-8 opacity-50 hover:opacity-100 transition-opacity"
              />
            </a>

            <a 
              href="https://www.architectes.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <img 
                src="/logo-ordre-architectes.png" 
                alt="Ordre des Architectes" 
                className="h-8 opacity-50 hover:opacity-100 transition-opacity"
              />
            </a>
          </div>

          {/* Center: Copyright */}
          <div className="flex-1 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 <span className="font-bold">prôto.architecture</span> — Lyon
            </p>
          </div>

          {/* Right: Instagram */}
          <a 
            href="https://www.instagram.com/proto.architecture/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <Instagram className="w-5 h-5" strokeWidth={1.5} />
            <span className="text-sm">@proto.architecture</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
