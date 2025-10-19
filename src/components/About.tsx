const About = () => {
  return (
    <section id="about" className="py-32 bg-background">
      <div className="container mx-auto px-8">
        <div className="max-w-5xl mx-auto space-y-32">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl text-foreground mb-6 elegant-underline">
                Méthode
              </h2>
            </div>
            <div className="space-y-8 text-foreground/80">
              <div>
                <h3 className="text-2xl text-foreground mb-3">Mes services d'architecte à Lyon</h3>
                <p className="text-lg text-foreground/90 mb-4">
                  Concevoir, rénover et transformer durablement vos espaces de vie.
                </p>
                <p>
                  Basé à Lyon, j'accompagne les particuliers dans la rénovation lourde d'appartements et de maisons, avec une approche éco-responsable. Mon objectif : concevoir des lieux confortables, sains et durables, en valorisant les matériaux naturels, locaux et biosourcés.
                </p>
              </div>

              <div>
                <h4 className="text-xl text-foreground mb-3">🏗️ Mission complète</h4>
                <p className="mb-3">
                  Vous souhaitez être accompagné du premier croquis jusqu'à la livraison ? Je prends en charge l'ensemble du projet, pour vous garantir cohérence, sérénité et qualité de réalisation.
                </p>
                <p className="font-medium mb-2">Phases incluses :</p>
                <ul className="list-none space-y-2 ml-0">
                  <li>• Esquisse & avant-projet – définition des besoins, conception et propositions d'aménagements</li>
                  <li>• Permis de construire / Déclaration préalable – constitution du dossier administratif</li>
                  <li>• Dossier de conception et d'exécution (PRO/DCE) – plans techniques, choix des matériaux, budget et planning</li>
                  <li>• Suivi de chantier (DET / OPC) – coordination des entreprises, vérification de la qualité et du respect des délais</li>
                  <li>• Réception & livraison – accompagnement jusqu'à la remise des clés</li>
                </ul>
                <p className="mt-3 text-foreground/90">
                  👉 Vous bénéficiez d'un interlocuteur unique, à l'écoute de vos besoins, garant de la qualité architecturale et environnementale de votre projet.
                </p>
              </div>

              <div>
                <h4 className="text-xl text-foreground mb-3">🧩 Mission partielle</h4>
                <p className="mb-3">
                  Vous avez déjà une entreprise ou souhaitez gérer une partie du projet ? Je peux intervenir sur une ou plusieurs phases, selon vos besoins :
                </p>
                <ul className="list-none space-y-1 ml-0">
                  <li>• Étude de faisabilité ou esquisse</li>
                  <li>• Avant-projet détaillé</li>
                  <li>• Dossier administratif</li>
                  <li>• Consultation des entreprises</li>
                  <li>• Suivi ponctuel du chantier</li>
                </ul>
                <p className="mt-3 text-foreground/90">
                  💡 Une formule souple, adaptée à votre budget et à votre niveau d'autonomie.
                </p>
              </div>

              <div>
                <h4 className="text-xl text-foreground mb-3">🌱 Missions complémentaires</h4>
                <ul className="list-none space-y-1 ml-0">
                  <li>• Relevé de l'existant : prise de cotes et modélisation 3D</li>
                  <li>• Conseil en matériaux naturels : choix de solutions locales, biosourcées ou à faible impact carbone</li>
                  <li>• Aménagement intérieur et mobilier : optimisation des espaces, ambiance, choix des finitions</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl text-foreground mb-3">💬 Pourquoi me confier votre projet ?</h4>
                <ul className="list-none space-y-1 ml-0">
                  <li>✔ Expertise en rénovation énergétique et architecture durable</li>
                  <li>✔ Connaissance fine du patrimoine lyonnais</li>
                  <li>✔ Collaboration avec des artisans locaux partageant les mêmes valeurs</li>
                  <li>✔ Démarche sur mesure, à taille humaine</li>
                </ul>
              </div>

              <div className="pt-4 border-t border-border/30">
                <h4 className="text-xl text-foreground mb-3">📞 Parlons de votre projet</h4>
                <p className="mb-2">
                  Vous avez un appartement ancien, une maison à rénover ou un projet de transformation ?
                </p>
                <p className="text-foreground/90">
                  👉 Contactez-moi pour un premier échange gratuit de 30 minutes
                </p>
                <p className="mt-3 text-sm">
                  Ensemble, nous définirons les étapes de votre rénovation écologique à Lyon.
                </p>
              </div>
            </div>
          </div>

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
        </div>
      </div>
    </section>
  );
};

export default About;
