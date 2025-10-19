import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const About = () => {
  return (
    <>
      <SEO
        title="À propos | Architecte Lyon"
        description="prôto.architecture, bureau d'architecture lyonnais spécialisé dans la rénovation et transformation de maisons et appartements. Diplômé EPFL, inscrit à l'Ordre des Architectes."
        canonical="/a-propos"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "À propos de prôto.architecture",
          "description": "Bureau d'architecture lyonnais spécialisé dans la rénovation"
        }}
      />
      
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="pt-32 pb-20">
          <section className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl text-foreground mb-8 elegant-underline">
                À propos
              </h1>
              
              <div className="space-y-6 text-foreground/80 text-lg leading-relaxed">
                <p>
                  <strong>prôto.architecture</strong> est un bureau créé par Camille Brachet en 2021. Il a pour ambition de proposer une architecture responsable en favorisant les savoir-faire et les matériaux locaux, en écrivant des histoires singulières et rationnelles avec les futurs habitants des lieux.
                </p>
                <p>
                  Je suis architecte diplômée de l'École Polytechnique Fédérale de Lausanne depuis 2017. Après quelques années à voyager pour les études, le travail et le plaisir, je reviens poser mes valises dans la région lyonnaise.
                </p>
                <p>
                  Toujours à la recherche de projets excitants et de nouvelles collaborations, n'hésitez pas à me joindre au <a href="tel:+33782156364" className="text-accent hover:underline">07 82 15 63 64</a> ou à m'écrire à <a href="mailto:mail@proto-architecture.fr" className="text-accent hover:underline">mail@proto-architecture.fr</a>.
                </p>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default About;
