import { GraduationCap, MapPin, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-16 tracking-tight">
            About
          </h2>
          
          <div className="grid md:grid-cols-3 gap-16 mb-16 text-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-light">Education</p>
              <p className="text-foreground font-light">EPFL, Lausanne</p>
            </div>
            
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-light">Location</p>
              <p className="text-foreground font-light">Lyon, France</p>
            </div>
            
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-light">Practice</p>
              <p className="text-foreground font-light">Independent</p>
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <p className="text-muted-foreground leading-relaxed font-light">
              With a degree from EPFL in Lausanne, I bring Swiss precision and attention to detail to every project. 
              Based in Lyon, I work independently to provide personalized architectural services that truly reflect 
              each client's vision and lifestyle.
            </p>
            <p className="text-muted-foreground leading-relaxed font-light">
              My approach combines technical expertise with creative problem-solving, ensuring that every space 
              I design is both functional and beautiful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
