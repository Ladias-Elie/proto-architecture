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
    <section id="services" className="py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-16 tracking-tight">
            Services
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            {services.map((service, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-light text-foreground">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
