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
                title: "Rénovation complète",
                description: "Transformation totale de votre maison ou appartement à Lyon et sa région. Redistribution des espaces, mise aux normes, création d'ambiances lumineuses et contemporaines adaptées à votre vie quotidienne."
              },
              {
                title: "Extension et surélévation",
                description: "Agrandissement de votre habitat existant par extension latérale ou surélévation. Solutions architecturales discrètes et harmonieuses qui s'intègrent au bâti existant tout en apportant volume et lumière."
              },
              {
                title: "Rénovation partielle",
                description: "Restructuration ciblée d'une partie de votre logement : cuisine, salle de bains, ouverture de cloisons, création de verrières. Intervention précise pour améliorer votre confort sans tout bouleverser."
              },
              {
                title: "Accompagnement de A à Z",
                description: "Suivi complet du projet : études, plans, dépôt de permis de construire, consultation des entreprises, suivi de chantier. Un interlocuteur unique pour garantir qualité et sérénité à chaque étape."
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
