const About = () => {
  return (
    <section id="about" className="py-32 bg-background">
      <div className="container mx-auto px-8">
        <div className="max-w-5xl mx-auto space-y-32">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl text-foreground mb-6 elegant-underline">
                Agence
              </h2>
            </div>
            <div className="space-y-6 text-foreground/80">
              <p>
                <span className="text-accent">prôto.architecture</span> est un bureau d'architecture lyonnais spécialisé dans la rénovation et la transformation de maisons et appartements.
              </p>
              <p>
                Diplômé de l'École Polytechnique Fédérale de Lausanne (EPFL) et inscrit à l'Ordre des Architectes, j'accompagne les particuliers qui souhaitent repenser leur habitat existant — que ce soit pour une rénovation complète, une extension, ou une restructuration intérieure.
              </p>
              <p>
                Mon approche repose sur un accompagnement humain et clair, du premier rendez-vous jusqu'à la réalisation. Un interlocuteur unique, des conseils personnalisés adaptés à votre budget, et une démarche transparente pour transformer votre maison en un lieu qui vous ressemble.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl text-foreground mb-6 elegant-underline">
                Méthode
              </h2>
            </div>
            <div className="space-y-6 text-foreground/80">
              <p>
                Je vous accompagne à chaque étape : conception des plans, dépôt des autorisations, sélection des entreprises, suivi de chantier. Cette présence constante garantit que votre projet avance sereinement et que le résultat correspond exactement à vos attentes.
              </p>
              <p>
                Que vous souhaitiez agrandir une maison dans le Beaujolais, rénover un appartement lyonnais, ou transformer un bien ancien en un espace contemporain et lumineux, je développe des solutions sur-mesure qui valorisent votre patrimoine tout en l'adaptant à votre mode de vie actuel.
              </p>
              <p>
                Chaque projet est l'occasion de créer un équilibre entre respect du contexte, confort d'usage, et esthétique épurée — avec une attention particulière portée à la lumière naturelle, aux matériaux durables, et à l'intégration harmonieuse dans l'environnement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
