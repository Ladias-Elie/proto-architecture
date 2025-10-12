import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Merci pour votre intérêt. Je vous recontacterai rapidement.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsl(var(--accent) / 0.1) 0%, transparent 50%)'
      }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="retro-border-accent bg-accent inline-block px-12 py-6 mb-12 rotate-1 hover:rotate-0 transition-transform">
            <h2 className="text-4xl md:text-5xl font-bold text-accent-foreground tracking-wider">
              Contact
            </h2>
          </div>
          
          <div className="space-y-8 retro-border bg-background p-8 md:p-12">
            <p className="text-xl text-foreground leading-relaxed font-bold uppercase tracking-wide">
              Vous avez un projet de rénovation à Lyon ou dans sa région ? 
              Discutons ensemble de vos ambitions architecturales.
            </p>
            
            <a 
              href="mailto:mail@proto-architecture.fr"
              className="inline-block bg-secondary text-secondary-foreground px-8 py-4 retro-border hover:translate-y-1 hover:shadow-none transition-all text-lg font-bold uppercase tracking-wider"
            >
              mail@proto-architecture.fr
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
