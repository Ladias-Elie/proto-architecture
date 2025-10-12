const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-xs text-muted-foreground font-light">
            © {new Date().getFullYear()} prôto.architecture. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
