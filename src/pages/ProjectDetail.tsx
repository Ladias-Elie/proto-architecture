import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4">Projet introuvable</h1>
          <Link to="/projets" className="text-sm text-foreground hover:text-primary transition-colors font-light border-b border-foreground pb-1">
            Retour aux projets
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <Link to="/projets" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 font-light">
              <ArrowLeft className="mr-2 h-3 w-3" />
              Retour
            </Link>
            
            <div className="mb-16">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-light">{project.category}</p>
              <h1 className="text-3xl md:text-4xl font-light text-foreground mb-6 tracking-tight">
                {project.title}
              </h1>
              <div className="flex gap-4 text-sm text-muted-foreground font-light">
                <span>{project.location}</span>
                <span>•</span>
                <span>{project.year}</span>
              </div>
            </div>
            
            <div className="max-w-3xl mb-20">
              <p className="text-muted-foreground leading-relaxed font-light">
                {project.description}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16">
              {/* Photos Carousel */}
              <div>
                <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-light">Photographies</h2>
                {project.images.length > 0 ? (
                  <Carousel className="w-full">
                    <CarouselContent>
                      {project.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="aspect-square overflow-hidden">
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
                        <CarouselPrevious className="left-4" />
                        <CarouselNext className="right-4" />
                      </>
                    )}
                  </Carousel>
                ) : (
                  <div className="aspect-square bg-muted flex items-center justify-center">
                    <p className="text-muted-foreground text-sm font-light">Aucune photo disponible</p>
                  </div>
                )}
              </div>
              
              {/* Plans Carousel */}
              <div>
                <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-6 font-light">Plans</h2>
                {project.plans.length > 0 ? (
                  <Carousel className="w-full">
                    <CarouselContent>
                      {project.plans.map((plan, index) => (
                        <CarouselItem key={index}>
                          <div className="aspect-square overflow-hidden bg-white">
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
                        <CarouselPrevious className="left-4" />
                        <CarouselNext className="right-4" />
                      </>
                    )}
                  </Carousel>
                ) : (
                  <div className="aspect-square bg-muted flex items-center justify-center">
                    <p className="text-muted-foreground text-sm font-light italic">Les plans peuvent être ajoutés ici</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
