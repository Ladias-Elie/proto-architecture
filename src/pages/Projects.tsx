import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-32 pb-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, hsl(var(--accent)) 0, hsl(var(--accent)) 2px, transparent 2px, transparent 40px), repeating-linear-gradient(0deg, hsl(var(--secondary)) 0, hsl(var(--secondary)) 2px, transparent 2px, transparent 40px)'
        }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="retro-border bg-secondary inline-block px-12 py-6 mb-16 -rotate-1 hover:rotate-0 transition-transform">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground tracking-wider">
                Projets
              </h1>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {projects.map((project, index) => (
                <Link
                  key={project.id}
                  to={`/projets/${project.id}`}
                  className="group"
                >
                  <div className={`retro-border hover:translate-y-1 hover:shadow-none transition-all ${
                    index % 2 === 0 ? 'rotate-1' : '-rotate-1'
                  } hover:rotate-0`}>
                    <div className="relative overflow-hidden aspect-square bg-muted">
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="bg-background p-6">
                      <div className="inline-block bg-accent text-accent-foreground px-3 py-1 mb-3">
                        <p className="text-xs uppercase tracking-widest font-bold">{project.category}</p>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors uppercase tracking-wide">{project.title}</h3>
                      <p className="text-sm text-muted-foreground font-bold uppercase">{project.location} · {project.year}</p>
                    </div>
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
