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
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="retro-border bg-destructive inline-block px-8 py-4 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-destructive-foreground uppercase tracking-wider">Projet introuvable</h1>
          </div>
          <Link to="/projets">
            <Button variant="secondary">Retour aux projets</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, hsl(var(--primary)) 0, hsl(var(--primary)) 1px, transparent 1px, transparent 20px), repeating-linear-gradient(90deg, hsl(var(--accent)) 0, hsl(var(--accent)) 1px, transparent 1px, transparent 20px)'
        }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <Link to="/projets" className="inline-block mb-12">
              <Button variant="outline" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour
              </Button>
            </Link>
            
            <div className="mb-16">
              <div className="inline-block bg-accent text-accent-foreground px-4 py-2 mb-6">
                <p className="text-xs uppercase tracking-widest font-bold">{project.category}</p>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-wider uppercase">
                {project.title}
              </h1>
              <div className="flex gap-4 text-lg text-foreground font-bold">
                <span>{project.location}</span>
                <span className="text-accent">•</span>
                <span>{project.year}</span>
              </div>
            </div>
            
            <div className="max-w-3xl mb-20 retro-border bg-muted p-8">
              <p className="text-foreground leading-relaxed text-lg">
                {project.description}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Photos Carousel */}
              <div className="retro-border bg-background p-6">
                <div className="inline-block bg-primary text-primary-foreground px-4 py-2 mb-6">
                  <h2 className="text-sm uppercase tracking-widest font-bold">Photographies</h2>
                </div>
                {project.images.length > 0 ? (
                  <Carousel className="w-full">
                    <CarouselContent>
                      {project.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="aspect-square overflow-hidden border-4 border-primary">
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
                  <div className="aspect-square bg-muted flex items-center justify-center border-4 border-primary">
                    <p className="text-foreground text-sm font-bold uppercase">Aucune photo</p>
                  </div>
                )}
              </div>
              
              {/* Plans Carousel */}
              <div className="retro-border-accent bg-background p-6">
                <div className="inline-block bg-secondary text-secondary-foreground px-4 py-2 mb-6">
                  <h2 className="text-sm uppercase tracking-widest font-bold">Plans</h2>
                </div>
                {project.plans.length > 0 ? (
                  <Carousel className="w-full">
                    <CarouselContent>
                      {project.plans.map((plan, index) => (
                        <CarouselItem key={index}>
                          <div className="aspect-square overflow-hidden bg-white border-4 border-accent">
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
                  <div className="aspect-square bg-muted flex items-center justify-center border-4 border-accent">
                    <p className="text-foreground text-sm font-bold uppercase">Plans à venir</p>
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
