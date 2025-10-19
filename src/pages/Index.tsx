import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "prôto.architecture",
    "image": "https://lovable.dev/opengraph-image-p98pqg.png",
    "description": "Architecte rénovation Lyon spécialisé en rénovation lourde, énergétique et écologique d'appartements et maisons anciennes. Matériaux biosourcés et approche durable.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lyon",
      "addressRegion": "Rhône",
      "addressCountry": "FR"
    },
    "url": window.location.origin,
    "priceRange": "€€€",
    "areaServed": [
      {
        "@type": "City",
        "name": "Lyon"
      },
      {
        "@type": "State",
        "name": "Rhône"
      }
    ],
    "knowsAbout": [
      "Rénovation lourde appartement ancien Lyon",
      "Rénovation énergétique Lyon",
      "Rénovation écologique Lyon",
      "Matériaux biosourcés",
      "Rénovation maison ancienne",
      "Architecture durable",
      "Rénovation patrimoine lyonnais"
    ],
    "serviceType": [
      "Rénovation complète",
      "Rénovation énergétique",
      "Rénovation écologique",
      "Extension de maison",
      "Surélévation"
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Architecte Rénovation Lyon | Rénovation Écologique & Énergétique"
        description="Architecte rénovation Lyon spécialisé en rénovation lourde d'appartements et maisons anciennes. Rénovation énergétique, écologique et durable avec matériaux biosourcés. Expert rénovation patrimoine lyonnais."
        canonical="/"
        structuredData={structuredData}
      />
      <Navigation />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
