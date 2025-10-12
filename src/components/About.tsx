const About = () => {
  return (
    <section id="about" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-16 tracking-tight">
            L'Agence
          </h2>
          
          <div className="grid md:grid-cols-3 gap-16 mb-16 text-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-light">Formation</p>
              <p className="text-foreground font-light">EPFL, Lausanne</p>
            </div>
            
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-light">Localisation</p>
              <p className="text-foreground font-light">Lyon, France</p>
            </div>
            
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-light">Structure</p>
              <p className="text-foreground font-light">Indépendant</p>
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto space-y-8">
            <p className="text-muted-foreground leading-relaxed font-light">
              Architecte diplômé de l'EPFL, je m'installe à Lyon pour proposer une approche architecturale 
              sur-mesure, alliant rigueur technique et vision créative. Mon objectif : transformer vos espaces 
              en lieux de vie uniques, pensés pour vous.
            </p>
            <p className="text-muted-foreground leading-relaxed font-light">
              Spécialisé dans la rénovation résidentielle sur Lyon et sa région, j'accompagne particuliers 
              et investisseurs dans leurs projets d'appartements, maisons et locaux. Que vous envisagiez 
              l'acquisition d'un bien à rénover ou la transformation de votre habitat actuel, je conçois 
              des espaces optimisés qui valorisent votre patrimoine.
            </p>
            <p className="text-muted-foreground leading-relaxed font-light">
              De l'esquisse initiale au suivi de chantier, je vous offre un accompagnement complet : 
              études de faisabilité, conception architecturale, dépôt de permis de construire, et coordination 
              avec les artisans. Une attention particulière portée aux détails, aux matériaux et à la lumière 
              naturelle caractérise chacune de mes réalisations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
