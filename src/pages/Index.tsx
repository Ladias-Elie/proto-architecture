import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "prôto.architecture",
    "image": "https://lovable.dev/opengraph-image-p98pqg.png",
    "description": "Architecte diplômé EPFL à Lyon. Spécialisé en rénovation d'appartements et maisons dans la région lyonnaise.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lyon",
      "addressCountry": "FR"
    },
    "url": window.location.origin,
    "priceRange": "€€€",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "45.764043",
        "longitude": "4.835659"
      }
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="prôto.architecture - Architecte Lyon | Rénovation & Construction"
        description="Architecte diplômé EPFL à Lyon. Spécialisé en rénovation d'appartements et maisons dans la région lyonnaise. Conception architecturale sur-mesure et accompagnement complet."
        canonical="/"
        structuredData={structuredData}
      />
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
