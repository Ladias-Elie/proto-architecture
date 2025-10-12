const Footer = () => {
  return (
    <footer className="py-8 bg-primary border-t-4 border-accent">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base text-primary-foreground font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} prôto.architecture
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
