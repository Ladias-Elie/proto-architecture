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
                Agence
              </h1>
              
              <div className="space-y-6 text-foreground/80 text-lg">
                <p>
                  <span className="text-accent font-medium">prôto.architecture</span> est un bureau d'architecture lyonnais spécialisé dans la rénovation et la transformation de maisons et appartements.
                </p>
                <p>
                  Diplômé de l'École Polytechnique Fédérale de Lausanne (EPFL) et inscrit à l'Ordre des Architectes, j'accompagne les particuliers qui souhaitent repenser leur habitat existant — que ce soit pour une rénovation complète, une extension, ou une restructuration intérieure.
                </p>
                <p>
                  Mon approche repose sur un accompagnement humain et clair, du premier rendez-vous jusqu'à la réalisation. Un interlocuteur unique, des conseils personnalisés adaptés à votre budget, et une démarche transparente pour transformer votre maison en un lieu qui vous ressemble.
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
