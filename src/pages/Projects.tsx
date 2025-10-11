import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-light text-foreground mb-16 tracking-tight">
              Projects
            </h1>
            
            <div className="grid md:grid-cols-2 gap-16">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  to={`/projects/${project.id}`}
                  className="group space-y-4"
                >
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-light">{project.category}</p>
                    <h3 className="text-lg font-light text-foreground mb-1 group-hover:text-accent transition-colors">{project.title}</h3>
                    <p className="text-sm text-muted-foreground font-light">{project.location}, {project.year}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
