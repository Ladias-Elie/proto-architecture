const Services = () => {
  return (
    <section id="services" className="py-32 bg-muted/30">
      <div className="container mx-auto px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl text-foreground mb-6 elegant-underline">
              Services
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              {
                title: "Rénovation d'appartements",
                description: "Transformation complète ou partielle de votre appartement lyonnais. Optimisation des espaces, redistribution des volumes, et création d'ambiances contemporaines adaptées à la vie urbaine."
              },
              {
                title: "Rénovation de maisons",
                description: "Réhabilitation de maisons individuelles dans la région lyonnaise. Mise en valeur du patrimoine existant, extension si nécessaire, et modernisation selon vos besoins actuels."
              },
              {
                title: "Conception sur-mesure",
                description: "Développement de solutions architecturales personnalisées, depuis les études préliminaires jusqu'aux plans d'exécution. Chaque projet est pensé dans ses moindres détails."
              },
              {
                title: "Accompagnement complet",
                description: "Suivi de projet de A à Z : conception, dépôt de permis de construire ou déclaration préalable, consultation des entreprises, et suivi de chantier pour garantir la qualité d'exécution."
              }
            ].map((service, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl text-foreground">{service.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
