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

            <div className="mb-16">
              <h1 className="text-4xl md:text-5xl text-foreground mb-4 elegant-underline">
                {project.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {project.location}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {/* Photos Carousel */}
              <div>
                <h2 className="text-xl text-foreground mb-6">Photographies</h2>
                {project.images.length > 0 ? (
                  <Carousel className="w-full">
                    <CarouselContent>
                      {project.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="aspect-[4/3] bg-muted overflow-hidden">
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
                        <CarouselPrevious className="border border-border bg-background hover:bg-muted" />
                        <CarouselNext className="border border-border bg-background hover:bg-muted" />
                      </>
                    )}
                  </Carousel>
                ) : (
                  <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                    <p className="text-muted-foreground text-sm">Aucune photo disponible</p>
                  </div>
                )}
              </div>

              {/* Plans Carousel */}
              <div>
                <h2 className="text-xl text-foreground mb-6">Plans</h2>
                {project.plans.length > 0 ? (
                  <Carousel className="w-full">
                    <CarouselContent>
                      {project.plans.map((plan, index) => (
                        <CarouselItem key={index}>
                          <div className="aspect-[4/3] bg-muted overflow-hidden">
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
                        <CarouselPrevious className="border border-border bg-background hover:bg-muted" />
                        <CarouselNext className="border border-border bg-background hover:bg-muted" />
                      </>
                    )}
                  </Carousel>
                ) : (
                  <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                    <p className="text-muted-foreground text-sm">Plans à venir</p>
                  </div>
                )}
              </div>
            </div>

            <div className="max-w-3xl">
              <p className="text-foreground/80 leading-relaxed text-lg">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
