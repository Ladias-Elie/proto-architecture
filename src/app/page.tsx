import { Metadata } from 'next'
import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import About from "@/components/About"
import WhyProto from "@/components/WhyProto"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: {
    absolute: 'Architecte Rénovation Écologique Lyon | prôto.architecture',
  },
  description: "Architecte rénovation écologique à Lyon. Rénovation lourde d'appartements et maisons anciennes, matériaux biosourcés. Premier échange gratuit.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Architecte Rénovation Écologique Lyon | prôto.architecture',
    description: "Architecte rénovation écologique à Lyon. Rénovation lourde d'appartements et maisons anciennes, matériaux biosourcés.",
    url: 'https://proto-architecture.fr',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architecte Rénovation Écologique Lyon | prôto.architecture',
    description: "Architecte rénovation écologique à Lyon. Rénovation lourde d'appartements et maisons anciennes, matériaux biosourcés.",
  },
}

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "prôto.architecture",
    "image": "https://proto-architecture.fr/og-default.jpg",
    "logo": "https://proto-architecture.fr/og-default.jpg",
    "description": "Architecte rénovation Lyon spécialisé en rénovation lourde, énergétique et écologique d'appartements et maisons anciennes. Matériaux biosourcés et approche durable.",
    "url": "https://proto-architecture.fr",
    "telephone": "+33782156364",
    "email": "mail@proto-architecture.fr",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lyon",
      "addressRegion": "Auvergne-Rhône-Alpes",
      "postalCode": "69000",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 45.7640,
      "longitude": 4.8357
    },
    "priceRange": "€€€",
    "founder": {
      "@type": "Person",
      "name": "Camille Brachet",
      "jobTitle": "Architecte",
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "École Polytechnique Fédérale de Lausanne (EPFL)"
      }
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Lyon"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Rhône"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Ain"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Isère"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/proto.architecture/"
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
      "Surélévation",
      "Mobilier sur-mesure"
    ]
  }

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navigation />
      <Hero />
      <WhyProto />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
