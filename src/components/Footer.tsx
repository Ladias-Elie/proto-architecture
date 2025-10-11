const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="text-center text-muted-foreground">
          <p className="text-xs font-light">© {new Date().getFullYear()} Architecture, Lyon</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
