import { Home, Building2, PenTool, Lightbulb } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Residential Renovation",
    description: "Transform your existing home into the space of your dreams. From apartment renovations to complete house makeovers, I handle every detail with care and precision."
  },
  {
    icon: Building2,
    title: "New Construction",
    description: "Design and oversee new residential projects from concept to completion. Whether it's your dream home or a modern apartment building, I bring your vision to life."
  },
  {
    icon: PenTool,
    title: "Architectural Design",
    description: "Comprehensive architectural design services including floor plans, elevations, and detailed technical drawings that meet all regulatory requirements."
  },
  {
    icon: Lightbulb,
    title: "Consultation & Planning",
    description: "Expert advice on feasibility, spatial planning, and design solutions. I help you navigate the complexities of your project from the very beginning."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
            Services
          </h2>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            Comprehensive architectural services tailored to your needs, from initial concept to final execution.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-border hover:border-accent transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
