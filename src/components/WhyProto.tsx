const WhyProto = () => {
  const features = [
    {
      title: "Valoriser plutôt que démolir",
      description:
        "Nous croyons qu'une rénovation réussie commence par une analyse fine du bâti existant. Plutôt que de démolir systématiquement, nous révélons le potentiel des lieux : murs en pierre conservés, poutres anciennes valorisées, éléments architecturaux restaurés.",
    },
    {
      title: "Matériaux biosourcés et locaux",
      description:
        "Nous privilégions les matériaux d'origine naturelle pour leur faible impact environnemental et leur qualité : fibre de bois et ouate de cellulose pour l'isolation, enduits à la chaux, menuiseries en bois local. Ces matériaux créent des espaces sains et durables.",
    },
    {
      title: "Performance énergétique",
      description:
        "Chaque projet intègre une réflexion sur l'isolation thermique, les apports solaires passifs et les systèmes de chauffage performants. L'objectif : réduire vos consommations tout en améliorant votre confort.",
    },
    {
      title: "Accompagnement personnalisé",
      description:
        "Architecte diplômée EPFL et inscrite à l'Ordre des Architectes, je vous accompagne de manière transparente et à l'écoute de vos besoins, contraintes et envies.",
    },
  ];

  return (
    <section id="why" className="py-24 bg-background">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="max-w-4xl mb-20">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-6 block">
            Notre approche
          </span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-8 text-balance">
            Une approche respectueuse<br />de l'existant et de l'environnement
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-bold tracking-tight flex items-center gap-3">
                <span className="text-accent" aria-hidden>
                  →
                </span>
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed pl-7">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyProto;
