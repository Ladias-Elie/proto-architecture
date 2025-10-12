const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="retro-border bg-secondary mb-12 inline-block px-8 py-4">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground tracking-wider">
              Services
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Rénovation d'appartements",
                description: "Transformation complète ou partielle de votre appartement lyonnais. Optimisation des espaces, redistribution des volumes, et création d'ambiances contemporaines adaptées à la vie urbaine.",
                color: "primary"
              },
              {
                title: "Rénovation de maisons",
                description: "Réhabilitation de maisons individuelles dans la région lyonnaise. Mise en valeur du patrimoine existant, extension si nécessaire, et modernisation selon vos besoins actuels.",
                color: "accent"
              },
              {
                title: "Conception sur-mesure",
                description: "Développement de solutions architecturales personnalisées, depuis les études préliminaires jusqu'aux plans d'exécution. Chaque projet est pensé dans ses moindres détails.",
                color: "secondary"
              },
              {
                title: "Accompagnement complet",
                description: "Suivi de projet de A à Z : conception, dépôt de permis de construire ou déclaration préalable, consultation des entreprises, et suivi de chantier pour garantir la qualité d'exécution.",
                color: "primary"
              }
            ].map((service, index) => (
              <div key={index} className={`retro-border bg-background p-6 hover:translate-y-1 hover:shadow-none transition-all`}>
                <div className={`inline-block px-4 py-2 mb-4 ${
                  service.color === 'primary' ? 'bg-primary text-primary-foreground' :
                  service.color === 'accent' ? 'bg-accent text-accent-foreground' :
                  'bg-secondary text-secondary-foreground'
                }`}>
                  <h3 className="text-sm font-bold uppercase tracking-wider">{service.title}</h3>
                </div>
                <p className="text-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
