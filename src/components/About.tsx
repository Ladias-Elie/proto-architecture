const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, hsl(var(--primary)) 0, hsl(var(--primary)) 10px, transparent 10px, transparent 20px), repeating-linear-gradient(-45deg, hsl(var(--accent)) 0, hsl(var(--accent)) 10px, transparent 10px, transparent 20px)'
      }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="retro-border bg-primary p-2">
            <div className="bg-background p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 tracking-wider">
                L'Agence
              </h2>
              <div className="space-y-6 text-foreground leading-relaxed text-lg">
                <p className="border-l-4 border-accent pl-6">
                  <strong className="text-secondary">prôto.architecture</strong> est un bureau d'architecture lyonnais fondé sur la conviction que chaque projet mérite une attention particulière et une réponse architecturale sur-mesure.
                </p>
                <p>
                  Diplômé de l'École Polytechnique Fédérale de Lausanne (EPFL), je mets mon expertise au service de vos projets de <strong className="text-accent">rénovation d'appartements et de maisons</strong> dans la <strong className="text-accent">région lyonnaise</strong>.
                </p>
                <p className="border-l-4 border-secondary pl-6">
                  Mon approche privilégie le dialogue constant avec mes clients, permettant de comprendre finement leurs besoins et leurs aspirations. Chaque espace est pensé pour améliorer votre qualité de vie au quotidien, en alliant fonctionnalité et esthétique contemporaine.
                </p>
              </div>
            </div>
          </div>

          <div className="retro-border-accent bg-accent p-2">
            <div className="bg-background p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-accent mb-8 tracking-wider">
                Méthode
              </h2>
              <div className="space-y-6 text-foreground leading-relaxed text-lg">
                <p className="border-l-4 border-primary pl-6">
                  Je vous accompagne à chaque étape de votre projet, de la conception initiale jusqu'à la réalisation finale. Cette démarche collaborative garantit que le résultat final correspond exactement à vos attentes.
                </p>
                <p>
                  Que vous souhaitiez <strong className="text-secondary">restructurer un appartement en centre-ville de Lyon</strong>, <strong className="text-secondary">rénover une maison de caractère</strong>, ou <strong className="text-secondary">optimiser l'agencement de votre espace de vie</strong>, je développe des solutions architecturales qui valorisent votre bien.
                </p>
                <p className="border-l-4 border-accent pl-6">
                  Chaque intervention est l'occasion de repenser l'habitat pour qu'il s'adapte parfaitement à votre mode de vie, tout en respectant l'identité du lieu et les contraintes techniques et réglementaires propres à la <strong className="text-secondary">région Auvergne-Rhône-Alpes</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
