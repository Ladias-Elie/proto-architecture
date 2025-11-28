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

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch("https://formsubmit.co/ajax/mail@proto-architecture.fr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...values,
          _subject: `Nouveau message de ${values.name} (Site Web)`,
          _template: "table",
        })
      });

      if (response.ok) {
        toast({
          title: "Message envoyé !",
          description: "Merci pour votre intérêt. Je vous recontacterai rapidement.",
        });
        form.reset();
      } else {
        toast({
          title: "Erreur",
          description: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de contacter le serveur. Veuillez vérifier votre connexion.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="max-w-4xl mb-20">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-6 block">
            Contact
          </span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-8 text-balance">
            Démarrons<br />votre projet
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left: Information */}
          <div className="space-y-12">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Que vous ayez une question, un projet en tête ou simplement envie d'échanger sur vos besoins en rénovation, n'hésitez pas à nous contacter.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xs uppercase tracking-widest font-semibold mb-3 text-muted-foreground">Email</h3>
                <a
                  href="mail@proto-architecture.fr"
                  className="text-lg hover:text-accent transition-colors block"
                >
                  mail@proto-architecture.fr
                </a>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-widest font-semibold mb-3 text-muted-foreground">Téléphone</h3>
                <a
                  href="tel:+33782156364"
                  className="text-lg hover:text-accent transition-colors block"
                >
                  07 82 15 63 64
                </a>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-widest font-semibold mb-3 text-muted-foreground">Localisation</h3>
                <p className="text-lg">
                  Lyon & Auvergne-Rhône-Alpes <br />
                  ouvert à des missions partout en France.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="border-2 border-border p-8 bg-muted/20">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-widest font-semibold">Nom</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Votre nom"
                          {...field}
                          className="border-2 border-border focus:border-foreground transition-colors bg-background"
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
                      <FormLabel className="text-xs uppercase tracking-widest font-semibold">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="votre@email.com"
                          {...field}
                          className="border-2 border-border focus:border-foreground transition-colors bg-background"
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
                      <FormLabel className="text-xs uppercase tracking-widest font-semibold">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Parlez-nous de votre projet..."
                          className="min-h-[150px] resize-none border-2 border-border focus:border-foreground transition-colors bg-background"
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
                  className="w-full font-semibold uppercase tracking-wider"
                >
                  Envoyer le message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
