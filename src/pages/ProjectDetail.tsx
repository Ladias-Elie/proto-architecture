import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { projects } from "@/data/projects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background pt-24 flex items-center justify-center">
        <div className="text-center space-y-8">
          <p className="text-2xl text-foreground">
            Projet introuvable
          </p>
          <Link 
            to="/projets"
            className="inline-block text-accent hover:text-foreground transition-colors border-b border-accent"
          >
            Retour aux projets
          </Link>
        </div>
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "image": project.coverImage,
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
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title={`${project.title} - ${project.location}`}
        description={`${project.category} à ${project.location} (${project.year}). ${project.description.substring(0, 140)}...`}
        canonical={`/projets/${project.id}`}
        ogImage={project.coverImage}
        ogType="article"
        structuredData={structuredData}
      />
      <Navigation />
      
      <main className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <Link 
              to="/projets"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-16"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={1} />
              Retour aux projets
            </Link>

            {/* Title */}
            <div className="mb-12">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
                {project.title}
              </h1>
            </div>

            {/* Info Grid (reordered, no number badges) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Programme */}
              {project.category && (
                <div>
                  <h3 className="text-sm text-muted-foreground mb-2">Programme</h3>
                  <p className="text-foreground leading-relaxed">{project.category}</p>
                </div>
              )}

              {/* Lieu */}
              {project.location && (
                <div>
                  <h3 className="text-sm text-muted-foreground mb-2">Lieu</h3>
                  <p className="text-foreground">{project.location}</p>
                </div>
              )}

              {/* Type de mission */}
              <div>
                <h3 className="text-sm text-muted-foreground mb-2">Type de mission</h3>
                <p className="text-foreground">{project.type}</p>
              </div>

              {/* Année */}
              {project.year && (
                <div>
                  <h3 className="text-sm text-muted-foreground mb-2">Année</h3>
                  <p className="text-foreground">{project.year}</p>
                </div>
              )}

              {/* Surface */}
              {project.surfaces && (
                <div>
                  <h3 className="text-sm text-muted-foreground mb-2">Surface</h3>
                  <p className="text-foreground">{project.surfaces}</p>
                </div>
              )}

              {/* Coût travaux */}
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
              <div>
                {project.images.length > 0 ? (
                  <Carousel className="w-full group">
                    <CarouselContent>
                      {project.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="aspect-[4/3] bg-background flex items-center justify-center">
                            <img
                              src={image}
                              alt={`${project.title} - Photo ${index + 1}`}
                              className="w-auto h-auto max-w-full max-h-full object-contain"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {project.images.length > 1 && (
                      <>
                <CarouselPrevious className="left-4 h-10 w-10 border-2 border-border bg-background hover:bg-background transition-colors" />
                <CarouselNext className="right-4 h-10 w-10 border-2 border-border bg-background hover:bg-background transition-colors" />
                      </>
                    )}
                  </Carousel>
                ) : (
                  <div className="aspect-[4/3] bg-background flex items-center justify-center">
                    <p className="text-muted-foreground text-sm">Aucune photo disponible</p>
                  </div>
                )}
              </div>

              {/* Plans Carousel */}
              <div>
                {project.plans.length > 0 ? (
                  <Carousel className="w-full group">
                    <CarouselContent>
                      {project.plans.map((plan, index) => (
                        <CarouselItem key={index}>
                          <div className="aspect-[4/3] bg-background flex items-center justify-center">
                            <img
                              src={plan}
                              alt={`${project.title} - Plan ${index + 1}`}
                              className="w-auto h-auto max-w-full max-h-full object-contain"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {project.plans.length > 1 && (
                      <>
                <CarouselPrevious className="left-4 h-10 w-10 border-2 border-border bg-background hover:bg-background transition-colors" />
                <CarouselNext className="right-4 h-10 w-10 border-2 border-border bg-background hover:bg-background transition-colors" />
                      </>
                    )}
                  </Carousel>
                ) : (
                  <div className="aspect-[4/3] bg-background flex items-center justify-center">
                    <p className="text-muted-foreground text-sm">Plans à venir</p>
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="max-w-4xl mb-12">
              <p className="text-foreground/80 leading-relaxed text-lg whitespace-pre-line">
                {project.description}
              </p>
            </div>

            {/* Photo Credits */}
            {project.imgCredit && (
              <div className="max-w-4xl">
                <p className="text-sm text-muted-foreground">
                  Crédits photos : {project.imgCredit}
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
