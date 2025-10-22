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
      description: "Merci pour votre intérêt. Nous vous recontacterons rapidement.",
    });
    form.reset();
  };

  return (
    <section id="contact" className="py-32 bg-background grain-texture">
      <div className="container mx-auto px-8 md:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Editorial Header */}
          <div className="mb-24">
            <div className="flex items-center gap-6 mb-8">
              <span className="text-xs tracking-[0.3em] uppercase text-accent" style={{ fontFamily: 'Inter' }}>
                Contact
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
            
            <h2 className="text-5xl md:text-7xl leading-tight mb-8">
              Démarrons<br />
              <span className="italic">votre projet</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-16">
            {/* Left: Information - Magazine Style */}
            <div className="md:col-span-2 space-y-12">
              <p className="text-lg leading-relaxed text-muted-foreground italic">
                Que vous ayez une question, un projet en tête ou simplement envie d'échanger sur vos ambitions architecturales.
              </p>
              
              <div className="space-y-10">
                <div>
                  <h3 className="text-xs tracking-[0.2em] uppercase mb-4 text-accent" style={{ fontFamily: 'Inter' }}>
                    Email
                  </h3>
                  <a 
                    href="mailto:camille.brachet@proto-architecture.com" 
                    className="text-base hover:text-accent transition-colors block leading-relaxed"
                  >
                    camille.brachet@<br/>proto-architecture.com
                  </a>
                </div>
                
                <div>
                  <h3 className="text-xs tracking-[0.2em] uppercase mb-4 text-accent" style={{ fontFamily: 'Inter' }}>
                    Téléphone
                  </h3>
                  <a 
                    href="tel:+33622603916" 
                    className="text-base hover:text-accent transition-colors block"
                  >
                    06 22 60 39 16
                  </a>
                </div>

                <div>
                  <h3 className="text-xs tracking-[0.2em] uppercase mb-4 text-accent" style={{ fontFamily: 'Inter' }}>
                    Localisation
                  </h3>
                  <p className="text-base">Lyon & région<br/>Auvergne-Rhône-Alpes</p>
                </div>
              </div>

              {/* Decorative Quote */}
              <div className="pt-12 mt-12 border-t border-border">
                <p className="text-sm italic text-muted-foreground leading-relaxed">
                  « Chaque projet est une rencontre — entre un lieu, une histoire et des personnes prêtes à inventer ensemble une manière plus juste d'habiter. »
                </p>
              </div>
            </div>

            {/* Right: Form - Editorial Card */}
            <div className="md:col-span-3 bg-card p-12 editorial-shadow">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs tracking-[0.2em] uppercase text-muted-foreground" style={{ fontFamily: 'Inter' }}>
                          Nom
                        </FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Votre nom" 
                            {...field} 
                            className="border-0 border-b border-border focus:border-accent transition-colors bg-transparent text-base py-3"
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
                        <FormLabel className="text-xs tracking-[0.2em] uppercase text-muted-foreground" style={{ fontFamily: 'Inter' }}>
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="votre@email.com" 
                            {...field}
                            className="border-0 border-b border-border focus:border-accent transition-colors bg-transparent text-base py-3"
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
                        <FormLabel className="text-xs tracking-[0.2em] uppercase text-muted-foreground" style={{ fontFamily: 'Inter' }}>
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Parlez-nous de votre projet..." 
                            className="min-h-[200px] resize-none border-0 border-b border-border focus:border-accent transition-colors bg-transparent text-base py-3"
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
                    className="w-full text-base"
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
