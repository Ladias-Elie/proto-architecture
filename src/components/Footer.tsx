const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Independent Architect, Lyon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
