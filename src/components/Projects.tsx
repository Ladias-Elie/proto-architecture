import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    image: project1,
    title: "Modern Apartment Renovation",
    category: "Residential"
  },
  {
    image: project2,
    title: "Contemporary House",
    category: "New Construction"
  },
  {
    image: project3,
    title: "Luxury Kitchen Design",
    category: "Renovation"
  },
  {
    image: project4,
    title: "Spa Bathroom",
    category: "Interior Design"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            Selected Projects
          </h2>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating attention to detail and commitment to excellence.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-accent text-sm font-semibold mb-2">{project.category}</p>
                    <h3 className="text-foreground text-2xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-muted-foreground mt-12 italic">
            These are placeholder images. Replace them with your professional project photos to showcase your actual work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
