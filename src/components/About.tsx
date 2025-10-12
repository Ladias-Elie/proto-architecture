const About = () => {
  return (
    <section id="about" className="py-32 bg-background">
      <div className="container mx-auto px-8">
        <div className="max-w-5xl mx-auto space-y-32">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl text-foreground mb-6 elegant-underline">
                L'Agence
              </h2>
            </div>
            <div className="space-y-6 text-foreground/80">
              <p>
                <span className="text-accent">prôto.architecture</span> est un bureau d'architecture lyonnais fondé sur la conviction que chaque projet mérite une attention particulière et une réponse architecturale sur-mesure.
              </p>
              <p>
                Diplômé de l'École Polytechnique Fédérale de Lausanne (EPFL), je mets mon expertise au service de vos projets de rénovation d'appartements et de maisons dans la région lyonnaise.
              </p>
              <p>
                Mon approche privilégie le dialogue constant avec mes clients, permettant de comprendre finement leurs besoins et leurs aspirations. Chaque espace est pensé pour améliorer votre qualité de vie au quotidien, en alliant fonctionnalité et esthétique contemporaine.
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
                Je vous accompagne à chaque étape de votre projet, de la conception initiale jusqu'à la réalisation finale. Cette démarche collaborative garantit que le résultat final correspond exactement à vos attentes.
              </p>
              <p>
                Que vous souhaitiez restructurer un appartement en centre-ville de Lyon, rénover une maison de caractère, ou optimiser l'agencement de votre espace de vie, je développe des solutions architecturales qui valorisent votre bien.
              </p>
              <p>
                Chaque intervention est l'occasion de repenser l'habitat pour qu'il s'adapte parfaitement à votre mode de vie, tout en respectant l'identité du lieu et les contraintes techniques et réglementaires propres à la région Auvergne-Rhône-Alpes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
