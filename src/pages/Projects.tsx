import { Link } from "react-router-dom";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { projects } from "@/data/projects";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(projects[0]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Projets d'architecture à Lyon",
    "description": "Portfolio des projets architecturaux réalisés par prôto.architecture dans la région lyonnaise.",
    "url": `${window.location.origin}/projets`
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Projets - Portfolio Architecture Lyon"
        description="Découvrez nos projets de rénovation et construction à Lyon. Appartements, maisons et rénovations d'intérieur réalisés par prôto.architecture."
        canonical="/projets"
        structuredData={structuredData}
      />
      <Navigation />
      
      <main className="flex-1 pt-24 bg-background">
        <div className="h-[calc(100vh-6rem)] flex">
          {/* Left sidebar with project list */}
          <div className="w-full md:w-2/5 lg:w-1/3 overflow-y-auto border-r border-border px-8 py-12">
            <h1 className="text-4xl md:text-5xl text-foreground mb-12 font-light tracking-tight">
              Projets
            </h1>
            
            <nav className="space-y-1">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  to={`/projets/${project.id}`}
                  onMouseEnter={() => setHoveredProject(project)}
                  className="block py-3 text-foreground/70 hover:text-foreground transition-colors duration-300 text-lg tracking-wide"
                >
                  <span className="inline-block border-b border-transparent hover:border-current transition-all duration-300">
                    {project.title}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Right side with large image preview */}
          <div className="hidden md:flex flex-1 items-center justify-center bg-muted p-12">
            <div className="w-full h-full flex items-center justify-center">
              <img
                key={hoveredProject.id}
                src={hoveredProject.coverImage}
                alt={`${hoveredProject.title} - Projet d'architecture ${hoveredProject.category} à ${hoveredProject.location}`}
                className="max-w-full max-h-full object-contain animate-in fade-in duration-500"
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
