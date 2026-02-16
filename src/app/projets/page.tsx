import { Metadata } from 'next'
import Link from "next/link"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import BreadcrumbSchema from "@/components/BreadcrumbSchema"
import { projects } from "@/data/projects"

export const metadata: Metadata = {
  title: "Projets de Rénovation à Lyon | Portfolio",
  description: "Découvrez nos projets de rénovation à Lyon et en région. Appartements anciens, maisons en pisé, corps de ferme, extensions. Avant/après et détails techniques.",
  alternates: {
    canonical: '/projets',
  },
  openGraph: {
    title: 'Projets de Rénovation Lyon | prôto.architecture',
    description: "Découvrez nos projets de rénovation à Lyon. Appartements anciens, maisons en pisé, corps de ferme, extensions.",
    url: 'https://proto-architecture.fr/projets',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projets de Rénovation Lyon | prôto.architecture',
    description: "Découvrez nos projets de rénovation à Lyon. Appartements anciens, maisons en pisé, corps de ferme, extensions.",
  },
}

export default function ProjectsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Projets d'architecture à Lyon",
    "description": "Portfolio des projets architecturaux réalisés par prôto.architecture dans la région lyonnaise.",
    "url": "https://proto-architecture.fr/projets"
  }

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <BreadcrumbSchema items={[
        { name: 'Accueil', url: 'https://proto-architecture.fr' },
        { name: 'Projets', url: 'https://proto-architecture.fr/projets' },
      ]} />
      <Navigation />

      <main className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl font-light text-foreground mb-12">Nos projets</h1>
            <div className="grid md:grid-cols-3 gap-12">
              {projects.map((project) => (
                <Link
                  key={project.title}
                  href={`/projets/${project.slug}`}
                  className="group block"
                >
                  {/* Titre en haut */}
                  <div className="mb-3 min-h-[2.5rem] flex items-start justify-between gap-4">
                    <h2 className="text-sm font-medium text-foreground group-hover:text-accent transition-colors duration-300 leading-snug">
                      {project.title}
                    </h2>
                    <span className="text-xs text-muted-foreground whitespace-nowrap pt-0.5">
                      {project.year}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                    <img
                      src={typeof project.coverImage === 'string' ? project.coverImage : project.coverImage.src}
                      alt={`${project.title} - Projet d'architecture ${project.category} à ${project.location}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
                  </div>

                  {/* Catégorie et localisation en bas */}
                  <div className="mt-3 flex items-center text-xs text-muted-foreground">
                    <span className="uppercase tracking-wider text-left">
                      {project.category}
                    </span>
                    <span className="flex-1" />
                    <span className="text-right">
                      {project.location}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
