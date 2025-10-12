const Services = () => {
  return (
    <section id="services" className="py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-16 tracking-tight">
            Services
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-light">01</p>
              <h3 className="text-lg font-light text-foreground mb-3">Rénovation Résidentielle</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Transformation complète d'appartements et maisons à Lyon et sa région. De l'optimisation 
                des espaces au choix des matériaux, chaque projet est pensé pour valoriser votre bien.
              </p>
            </div>
            
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-light">02</p>
              <h3 className="text-lg font-light text-foreground mb-3">Construction Neuve</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Conception architecturale sur-mesure pour vos projets de construction. Une approche 
                personnalisée qui reflète votre identité et répond à vos besoins.
              </p>
            </div>
            
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-light">03</p>
              <h3 className="text-lg font-light text-foreground mb-3">Permis de Construire</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Gestion complète des démarches administratives : dossiers de permis de construire, 
                déclarations préalables, et conformité réglementaire.
              </p>
            </div>
            
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-light">04</p>
              <h3 className="text-lg font-light text-foreground mb-3">Conseil & Faisabilité</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Études préalables pour évaluer le potentiel de votre bien. Idéal pour les acquéreurs 
                et investisseurs lyonnais cherchant à optimiser leur projet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
