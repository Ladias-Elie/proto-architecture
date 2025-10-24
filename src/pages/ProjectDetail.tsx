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
              <p className="text-xl text-muted-foreground">
                {project.location}
              </p>
            </div>

            {/* Info Grid with Numbers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Column 1 */}
              <div className="space-y-8">
                {project.category && (
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center text-accent font-semibold">
                        1
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm text-muted-foreground mb-2">Programme</h3>
                      <p className="text-foreground leading-relaxed">{project.category}</p>
                    </div>
                  </div>
                )}

                {project.coutTravaux && (
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center text-accent font-semibold">
                        6
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm text-muted-foreground mb-2">Coût travaux</h3>
                      <p className="text-foreground font-semibold">{project.coutTravaux}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Column 2 */}
              <div className="space-y-8">
                {project.maitriseOuvrage && (
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center text-accent font-semibold">
                        1
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm text-muted-foreground mb-2">Maîtrise d'ouvrage</h3>
                      <p className="text-foreground">{project.maitriseOuvrage}</p>
                    </div>
                  </div>
                )}

                {project.location && (
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center text-accent font-semibold">
                        2
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm text-muted-foreground mb-2">Lieu</h3>
                      <p className="text-foreground">{project.location}</p>
                    </div>
                  </div>
                )}

                {project.year && (
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center text-accent font-semibold">
                        4
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm text-muted-foreground mb-2">Année</h3>
                      <p className="text-foreground">{project.year}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Column 3 */}
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center text-accent font-semibold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm text-muted-foreground mb-2">Type de mission :</h3>
                    <p className="text-accent font-semibold">Mission complète</p>
                  </div>
                </div>

                {project.surfaces && (
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center text-accent font-semibold">
                        5
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm text-muted-foreground mb-2">Surface</h3>
                      <p className="text-foreground">{project.surfaces}</p>
                    </div>
                  </div>
                )}
              </div>
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
                          <div className="aspect-[4/3] overflow-hidden border-4 border-accent">
                            <img
                              src={image}
                              alt={`${project.title} - Photo ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {project.images.length > 1 && (
                      <>
                        <CarouselPrevious className="left-4 h-10 w-10 border-2 border-accent bg-background hover:bg-accent hover:text-background transition-colors" />
                        <CarouselNext className="right-4 h-10 w-10 border-2 border-accent bg-background hover:bg-accent hover:text-background transition-colors" />
                      </>
                    )}
                  </Carousel>
                ) : (
                  <div className="aspect-[4/3] border-4 border-accent flex items-center justify-center">
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
                          <div className="aspect-[4/3] overflow-hidden border-4 border-accent bg-white">
                            <img
                              src={plan}
                              alt={`${project.title} - Plan ${index + 1}`}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {project.plans.length > 1 && (
                      <>
                        <CarouselPrevious className="left-4 h-10 w-10 border-2 border-accent bg-background hover:bg-accent hover:text-background transition-colors" />
                        <CarouselNext className="right-4 h-10 w-10 border-2 border-accent bg-background hover:bg-accent hover:text-background transition-colors" />
                      </>
                    )}
                  </Carousel>
                ) : (
                  <div className="aspect-[4/3] border-4 border-accent flex items-center justify-center">
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
            {project.creditsPhotos && (
              <div className="max-w-4xl">
                <p className="text-sm text-muted-foreground">
                  Crédits photos : {project.creditsPhotos}
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
