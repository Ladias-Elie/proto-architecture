import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().trim().min(2, { message: "Le nom doit contenir au moins 2 caractères" }).max(100),
  email: z.string().trim().email({ message: "Adresse email invalide" }).max(255),
  message: z.string().trim().min(10, { message: "Le message doit contenir au moins 10 caractères" }).max(1000),
});

const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast({
      title: "Message envoyé",
      description: "Merci pour votre intérêt. Je vous recontacterai rapidement.",
    });
    form.reset();
  };

  return (
    <section id="contact" className="py-32 bg-muted/30">
      <div className="container mx-auto px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-24">
            <div className="h-px w-16 bg-accent mb-8" />
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8 text-balance">
              Démarrons<br />votre projet
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-16">
            {/* Left: Information */}
            <div className="md:col-span-2 space-y-12">
              <p className="text-base text-muted-foreground font-light leading-relaxed">
                Que vous ayez une question, un projet en tête ou simplement envie d'échanger, n'hésitez pas à nous contacter.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-light mb-3 text-muted-foreground">Email</h3>
                  <a 
                    href="mailto:camille.brachet@proto-architecture.com" 
                    className="text-base hover:text-accent transition-colors duration-300 block font-light"
                  >
                    camille.brachet@<br/>proto-architecture.com
                  </a>
                </div>
                
                <div>
                  <h3 className="text-sm font-light mb-3 text-muted-foreground">Téléphone</h3>
                  <a 
                    href="tel:+33622603916" 
                    className="text-base hover:text-accent transition-colors duration-300 block font-light"
                  >
                    06 22 60 39 16
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-light mb-3 text-muted-foreground">Localisation</h3>
                  <p className="text-base font-light">Lyon & région<br/>Auvergne-Rhône-Alpes</p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="md:col-span-3 bg-card p-10 zen-shadow">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-light text-muted-foreground">Nom</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Votre nom" 
                            {...field} 
                            className="border-border focus:border-accent transition-colors duration-300 bg-background font-light"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-light text-muted-foreground">Email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="votre@email.com" 
                            {...field}
                            className="border-border focus:border-accent transition-colors duration-300 bg-background font-light"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-light text-muted-foreground">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Parlez-nous de votre projet..." 
                            className="min-h-[180px] resize-none border-border focus:border-accent transition-colors duration-300 bg-background font-light"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full font-light"
                  >
                    Envoyer le message
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
