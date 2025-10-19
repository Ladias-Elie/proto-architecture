import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate("/");
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      contactSection?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  const missionData = {
  complete: {
    title: "Mission complète",
    brief: "Accompagnement du premier croquis jusqu'à la livraison pour garantir cohérence, sérénité et qualité.",
    details: (closeModal: () => void) => (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed">
          Vous souhaitez être accompagné du premier croquis jusqu'à la livraison ? Je prends en charge l'ensemble du projet pour vous garantir cohérence, sérénité et qualité de réalisation.
        </p>

        <div className="space-y-4">
          <h4 className="text-xl font-medium text-foreground">Phases incluses</h4>
          
          <div className="grid gap-4">
            <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-accent">
              <h5 className="font-semibold mb-2">Esquisse & avant-projet</h5>
              <p className="text-sm text-muted-foreground">Définition des besoins, conception et propositions d'aménagements</p>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-accent">
              <h5 className="font-semibold mb-2">Permis de construire / Déclaration préalable</h5>
              <p className="text-sm text-muted-foreground">Constitution du dossier administratif</p>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-accent">
              <h5 className="font-semibold mb-2">Dossier de conception et d'exécution (PRO/DCE)</h5>
              <p className="text-sm text-muted-foreground">Plans techniques, choix des matériaux, budget et planning</p>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-accent">
              <h5 className="font-semibold mb-2">Suivi de chantier (DET / OPC)</h5>
              <p className="text-sm text-muted-foreground">Coordination des entreprises, vérification de la qualité et du respect des délais</p>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-accent">
              <h5 className="font-semibold mb-2">Réception & livraison</h5>
              <p className="text-sm text-muted-foreground">Accompagnement jusqu'à la remise des clés</p>
            </div>
          </div>
        </div>

        <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
          <p className="text-base leading-relaxed">
            Vous bénéficiez d'un <strong>interlocuteur unique</strong>, à l'écoute de vos besoins, garant de la qualité architecturale et environnementale de votre projet.
          </p>
        </div>

        <Button 
          onClick={() => {
            closeModal();
            scrollToContact();
          }}
          className="w-full"
          size="lg"
        >
          Discutons de votre projet
        </Button>
      </div>
    )
  },
  partial: {
    title: "Mission partielle",
    brief: "Intervention sur une ou plusieurs phases selon vos besoins et votre niveau d'autonomie.",
    details: (closeModal: () => void) => (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed">
          Vous avez déjà une entreprise ou souhaitez gérer une partie du projet ? Je peux intervenir sur une ou plusieurs phases, selon vos besoins.
        </p>

        <div className="space-y-4">
          <h4 className="text-xl font-medium text-foreground">Interventions possibles</h4>
          
          <div className="grid gap-4">
            <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-accent">
              <h5 className="font-semibold mb-2">Étude de faisabilité</h5>
              <p className="text-sm text-muted-foreground">Analyse préalable du projet et esquisse</p>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-accent">
              <h5 className="font-semibold mb-2">Avant-projet détaillé</h5>
              <p className="text-sm text-muted-foreground">Plans et définition précise du projet</p>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-accent">
              <h5 className="font-semibold mb-2">Dossier administratif</h5>
              <p className="text-sm text-muted-foreground">Constitution des autorisations nécessaires</p>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-accent">
              <h5 className="font-semibold mb-2">Consultation des entreprises</h5>
              <p className="text-sm text-muted-foreground">Comparaison des devis et sélection</p>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-accent">
              <h5 className="font-semibold mb-2">Suivi ponctuel du chantier</h5>
              <p className="text-sm text-muted-foreground">Visites et vérifications ciblées</p>
            </div>
          </div>
        </div>

        <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
          <p className="text-base leading-relaxed">
            Une formule <strong>souple et adaptée</strong> à votre budget et à votre niveau d'autonomie.
          </p>
        </div>

        <Button 
          onClick={() => {
            closeModal();
            scrollToContact();
          }}
          className="w-full"
          size="lg"
        >
          Discutons de votre projet
        </Button>
      </div>
    )
  },
  complementary: {
    title: "Missions complémentaires",
    brief: "Services additionnels pour enrichir votre projet : relevé 3D, conseil matériaux, aménagement intérieur.",
    details: (closeModal: () => void) => (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed">
          Des prestations complémentaires pour affiner et enrichir votre projet de rénovation.
        </p>

        <div className="space-y-4">
          <h4 className="text-xl font-medium text-foreground">Services disponibles</h4>
          
          <div className="grid gap-4">
            <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-accent">
              <h5 className="font-semibold mb-2">Relevé de l'existant</h5>
              <p className="text-sm text-muted-foreground">Prise de cotes précise et modélisation 3D de votre bien pour une base de travail fiable et un rendu visuel de votre futur projet</p>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-accent">
              <h5 className="font-semibold mb-2">Conseil en matériaux naturels</h5>
              <p className="text-sm text-muted-foreground">Choix de solutions locales, biosourcées ou à faible impact carbone pour une rénovation respectueuse de l'environnement et de votre santé</p>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-accent">
              <h5 className="font-semibold mb-2">Aménagement intérieur et mobilier</h5>
              <p className="text-sm text-muted-foreground">Optimisation des espaces, création d'ambiance et sélection des finitions pour un intérieur qui vous ressemble</p>
            </div>
          </div>
        </div>

        <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
          <p className="text-base leading-relaxed">
            Des services <strong>personnalisés</strong> pour répondre à vos besoins spécifiques.
          </p>
        </div>

        <Button 
          onClick={() => {
            closeModal();
            scrollToContact();
          }}
          className="w-full"
          size="lg"
        >
          Discutons de votre projet
        </Button>
      </div>
    )
  }
};

  const [openDialogs, setOpenDialogs] = useState<Record<string, boolean>>({
    complete: false,
    partial: false,
    complementary: false
  });

  const handleOpenChange = (key: string, open: boolean) => {
    setOpenDialogs(prev => ({ ...prev, [key]: open }));
  };

  const handleContactClick = (key: string) => {
    handleOpenChange(key, false);
    scrollToContact();
  };

  return (
    <section id="about" className="py-32 bg-background">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl text-foreground mb-8 elegant-underline">
              Services
            </h2>
            
            <div className="space-y-6 text-foreground/80 text-lg leading-relaxed">
              <p className="text-xl md:text-2xl text-foreground/90 font-light">
                Concevoir, rénover et transformer durablement vos espaces de vie.
              </p>
              <p>
                Basé à Lyon, j'accompagne les particuliers dans la rénovation lourde d'appartements et de maisons, avec une approche éco-responsable. Mon objectif : concevoir des lieux confortables, sains et durables, en valorisant les matériaux naturels, locaux et biosourcés.
              </p>
            </div>
          </div>

          {/* Mission Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {Object.entries(missionData).map(([key, mission]) => (
              <Dialog 
                key={key}
                open={openDialogs[key as keyof typeof openDialogs]}
                onOpenChange={(open) => handleOpenChange(key, open)}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader className="flex-grow">
                    <CardTitle className="text-xl mb-3">{mission.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {mission.brief}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full">
                        En savoir plus
                      </Button>
                    </DialogTrigger>
                  </CardContent>
                </Card>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader className="mb-6">
                    <DialogTitle className="text-2xl mb-2">{mission.title}</DialogTitle>
                  </DialogHeader>
                  <div className="text-foreground/80 text-base leading-relaxed">
                    {mission.details(() => handleContactClick(key))}
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {/* Why Choose Section */}
          <div className="bg-muted/30 rounded-lg p-8 md:p-10 space-y-6">
            <h3 className="text-2xl text-foreground">
              Pourquoi me confier votre projet ?
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-foreground/80 text-base">
              <div className="flex items-start gap-3">
                <span className="text-accent mt-1 flex-shrink-0">✓</span>
                <span>Expertise en rénovation énergétique et architecture durable</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent mt-1 flex-shrink-0">✓</span>
                <span>Connaissance fine du patrimoine lyonnais</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent mt-1 flex-shrink-0">✓</span>
                <span>Collaboration avec des artisans locaux partageant les mêmes valeurs</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent mt-1 flex-shrink-0">✓</span>
                <span>Démarche sur mesure, à taille humaine</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
