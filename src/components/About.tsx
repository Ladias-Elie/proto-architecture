import { GraduationCap, MapPin, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            About
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Education</h3>
              <p className="text-muted-foreground">EPFL, Lausanne</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">Lyon, France</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Practice</h3>
              <p className="text-muted-foreground">Independent Architect</p>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              With a degree from EPFL in Lausanne, I bring Swiss precision and attention to detail to every project. 
              Based in Lyon, I work independently to provide personalized architectural services that truly reflect 
              each client's vision and lifestyle.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              My approach combines technical expertise with creative problem-solving, ensuring that every space 
              I design is both functional and beautiful. Whether it's a complete renovation or a new construction 
              project, I'm committed to delivering exceptional results that exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
