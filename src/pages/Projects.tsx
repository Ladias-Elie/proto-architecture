import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-20">
              <h1 className="text-5xl md:text-6xl text-foreground mb-6 elegant-underline">
                Projets
              </h1>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  to={`/projets/${project.id}`}
                  className="group block space-y-4"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {project.location}
                    </p>
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
