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
    "description": "Architecte à Lyon spécialisé dans la rénovation et transformation de maisons et appartements. Accompagnement sur-mesure du premier rendez-vous jusqu'à la réalisation.",
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
    },
    "knowsAbout": ["Rénovation de maisons", "Extension d'habitation", "Surélévation", "Rénovation d'appartements", "Architecture contemporaine"]
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="prôto.architecture — Architecte rénovation et transformation à Lyon"
        description="Architecte à Lyon spécialisé dans la rénovation et transformation de maisons et appartements. Accompagnement sur-mesure, clair et humain, du premier croquis jusqu'à la réalisation."
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
