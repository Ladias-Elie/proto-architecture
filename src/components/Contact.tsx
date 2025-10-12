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
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl text-foreground mb-6 elegant-underline">
                Contact
              </h2>
            </div>
            <div className="space-y-8">
              <p className="text-lg text-foreground/80 leading-relaxed">
                Vous avez un projet de rénovation à Lyon ou dans sa région ? 
                Discutons ensemble de vos ambitions architecturales.
              </p>
              
              <a 
                href="mailto:mail@proto-architecture.fr"
                className="inline-block text-accent hover:text-foreground transition-colors text-lg border-b border-accent"
              >
                mail@proto-architecture.fr
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
