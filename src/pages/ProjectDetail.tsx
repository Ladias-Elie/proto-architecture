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

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <Link 
              to="/projets"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={1} />
              Retour aux projets
            </Link>

            <div className="mb-20">
              <h1 className="text-5xl md:text-6xl text-foreground mb-4 elegant-underline">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {project.location}
              </p>
              
              <p className="mt-8 text-foreground/80 leading-relaxed text-lg max-w-3xl">
                {project.description}
              </p>
            </div>

            {project.images.length > 0 && (
              <div className="mb-20">
                <h2 className="text-3xl text-foreground mb-8 elegant-underline">
                  Photographies
                </h2>
                <Carousel className="w-full">
                  <CarouselContent>
                    {project.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <div className="aspect-video bg-muted overflow-hidden">
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
              </div>
            )}

            {project.plans.length > 0 && (
              <div>
                <h2 className="text-3xl text-foreground mb-8 elegant-underline">
                  Plans
                </h2>
                <Carousel className="w-full">
                  <CarouselContent>
                    {project.plans.map((plan, index) => (
                      <CarouselItem key={index}>
                        <div className="aspect-video bg-muted overflow-hidden">
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
