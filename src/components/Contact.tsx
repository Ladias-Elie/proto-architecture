import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
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
      title: "Message sent!",
      description: "Thank you for your interest. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-16 tracking-tight">
            Contact
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-light">Location</p>
                <p className="text-foreground font-light">Lyon, France</p>
              </div>
              
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-light">Email</p>
                <p className="text-foreground font-light">contact@example.com</p>
              </div>
              
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2 font-light">Phone</p>
                <p className="text-foreground font-light">+33 X XX XX XX XX</p>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="font-light"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="font-light"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="font-light resize-none"
                />
              </div>
              <button 
                type="submit" 
                className="text-sm text-foreground hover:text-accent transition-colors font-light border-b border-foreground pb-1"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
