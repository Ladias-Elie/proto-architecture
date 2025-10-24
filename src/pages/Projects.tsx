import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { projects } from "@/data/projects";

const Projects = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Projets d'architecture à Lyon",
    "description": "Portfolio des projets architecturaux réalisés par prôto.architecture dans la région lyonnaise.",
    "url": `${window.location.origin}/projets`
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Projets - Portfolio Architecture Lyon"
        description="Découvrez nos projets de rénovation et construction à Lyon. Appartements, maisons et rénovations d'intérieur réalisés par prôto.architecture."
        canonical="/projets"
        structuredData={structuredData}
      />
      <Navigation />
      
      <main className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  to={`/projets/${project.id}`}
                  className="group block space-y-4"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={project.coverImage}
                      alt={`${project.title} - Projet d'architecture ${project.category} à ${project.location}`}
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
