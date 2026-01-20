import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { projects } from "@/data/projects"
import { ProjectCarousel } from "@/components/ProjectCarousel"

// Generate static paths for all projects at build time
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

// Generate metadata for each project page
export async function generateMetadata({
  params
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return {
      title: 'Projet introuvable',
    }
  }

  const description = `${project.category} à ${project.location} (${project.year}). ${project.description.substring(0, 140)}...`
  const coverImageUrl = typeof project.coverImage === 'string' ? project.coverImage : project.coverImage.src

  return {
    title: `${project.title} - ${project.location}`,
    description,
    alternates: {
      canonical: `/projets/${project.id}`,
    },
    openGraph: {
      title: `${project.title} - ${project.location}`,
      description,
      images: [
        {
          url: coverImageUrl,
          alt: `${project.title} - ${project.category}`,
        },
      ],
      type: 'article',
      url: `https://proto-architecture.fr/projets/${project.id}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} - ${project.location}`,
      description,
      images: [coverImageUrl],
    },
  }
}

// Main component
export default async function ProjectDetailPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  // Structured data for SEO
  const coverImageUrl = typeof project.coverImage === 'string' ? project.coverImage : project.coverImage.src
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "image": coverImageUrl,
    "creator": {
      "@type": "Organization",
      "name": "prôto.architecture"
    },
    "dateCreated": project.year,
    "locationCreated": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": project.location,
        "addressCountry": "FR"
      }
    }
  }

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Navigation />

      <main className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            {/* Title */}
            <div className="mb-12">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
                {project.title}
              </h1>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {project.category && (
                <div>
                  <h3 className="text-sm text-muted-foreground mb-2">Programme</h3>
                  <p className="text-foreground leading-relaxed">{project.category}</p>
                </div>
              )}

              {project.location && (
                <div>
                  <h3 className="text-sm text-muted-foreground mb-2">Lieu</h3>
                  <p className="text-foreground">{project.location}</p>
                </div>
              )}

              <div>
                <h3 className="text-sm text-muted-foreground mb-2">Type de mission</h3>
                <p className="text-foreground">{project.type}</p>
              </div>

              {project.year && (
                <div>
                  <h3 className="text-sm text-muted-foreground mb-2">Année</h3>
                  <p className="text-foreground">{project.year}</p>
                </div>
              )}

              {project.surfaces && (
                <div>
                  <h3 className="text-sm text-muted-foreground mb-2">Surface</h3>
                  <p className="text-foreground">{project.surfaces}</p>
                </div>
              )}

              {project.cost && (
                <div>
                  <h3 className="text-sm text-muted-foreground mb-2">Coût travaux</h3>
                  <p className="text-foreground">{project.cost}</p>
                </div>
              )}
            </div>

            {/* Images Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {/* Photos Carousel */}
              <ProjectCarousel images={project.images} title={project.title} type="Photo" />

              {/* Plans Carousel */}
              <ProjectCarousel images={project.plans} title={project.title} type="Plan" />
            </div>

            {/* Description */}
            <div className="max-w-4xl mb-12">
              <p className="text-foreground/80 leading-relaxed text-lg whitespace-pre-line">
                {project.description}
              </p>
            </div>

            {/* Collaboration */}
            {project.collaboration && (
              <div className="max-w-4xl mb-6">
                <p className="text-sm text-muted-foreground">
                  En collaboration avec :{" "}
                  {project.collaborationUrl ? (
                    <a
                      href={project.collaborationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-accent transition-colors underline"
                    >
                      {project.collaboration}
                    </a>
                  ) : (
                    project.collaboration
                  )}
                </p>
              </div>
            )}

            {/* Photo Credits */}
            {project.imgCredit && (
              <div className="max-w-4xl">
                <p className="text-sm text-muted-foreground">
                  Crédits photos :{" "}
                  {project.imgCreditUrl ? (
                    <a
                      href={project.imgCreditUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-accent transition-colors underline"
                    >
                      {project.imgCredit}
                    </a>
                  ) : (
                    project.imgCredit
                  )}
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
