import { Building2, Leaf, Users } from "lucide-react";
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
      brief: "De l'esquisse à la livraison, un accompagnement total.",
      icon: Building2,
      description: `Nous prenons en charge votre projet de A à Z, du premier croquis jusqu'à la livraison des clés. Cette mission complète garantit cohérence, sérénité et qualité tout au long du processus.`,
      phases: [
        {
          title: "Esquisse & Avant-projet",
          content: "Définition des objectifs, analyse du site, premières esquisses et avant-projet sommaire puis détaillé."
        },
        {
          title: "Permis & Autorisations",
          content: "Constitution et dépôt du dossier de permis de construire ou déclaration préalable."
        },
        {
          title: "Projet d'exécution",
          content: "Plans techniques détaillés pour l'entreprise, consultation des artisans, devis comparatifs."
        },
        {
          title: "Suivi de chantier",
          content: "Coordination des entreprises, visites régulières, réception des travaux et livraison."
        }
      ],
      benefits: [
        "Vision globale et cohérente du projet",
        "Interlocuteur unique tout au long du processus",
        "Maîtrise des coûts et des délais",
        "Garantie de la qualité d'exécution"
      ]
    },
    partial: {
      title: "Mission partielle",
      brief: "Esquisse, plans, permis : à la carte selon vos besoins.",
      icon: Leaf,
      description: `Pour les projets plus modestes ou si vous souhaitez gérer une partie des travaux vous-même, nous proposons des missions partielles adaptées à vos besoins.`,
      phases: [
        {
          title: "Esquisse uniquement",
          content: "Étude de faisabilité, premières esquisses, planches d'ambiance pour visualiser le potentiel."
        },
        {
          title: "Avant-projet & Permis",
          content: "Plans d'avant-projet détaillés et constitution du dossier administratif."
        },
        {
          title: "Plans d'exécution",
          content: "Dossier technique complet pour vos artisans, sans suivi de chantier."
        }
      ],
      benefits: [
        "Flexibilité et adaptation à votre budget",
        "Autonomie dans la gestion du projet",
        "Conseil architectural professionnel aux étapes clés"
      ]
    },
    consultation: {
      title: "Consultation",
      brief: "Conseils experts pour vos questions ponctuelles.",
      icon: Users,
      description: `Vous avez besoin d'un regard extérieur, d'un conseil technique ou d'une orientation avant de vous lancer ? Nous proposons des consultations sur mesure.`,
      phases: [
        {
          title: "Rendez-vous conseil",
          content: "Échange sur site ou au cabinet pour évaluer la faisabilité et les premières orientations."
        },
        {
          title: "Étude de faisabilité",
          content: "Analyse du potentiel du lieu, réglementation applicable, premières pistes d'aménagement."
        }
      ],
      benefits: [
        "Format court et accessible",
        "Réponse rapide à vos interrogations",
        "Aide à la décision avant engagement"
      ]
    }
  };

  const [openDialogs, setOpenDialogs] = useState<Record<string, boolean>>({
    complete: false,
    partial: false,
    consultation: false,
  });

  const openDialog = (key: string) => {
    setOpenDialogs({ ...openDialogs, [key]: true });
  };

  const closeDialog = (key: string) => {
    setOpenDialogs({ ...openDialogs, [key]: false });
  };

  return (
    <section id="about" className="py-32 bg-background">
      <div className="container mx-auto px-8 md:px-16">
        {/* Header */}
        <div className="max-w-3xl mb-24">
          <div className="h-px w-16 bg-accent mb-8" />
          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8 text-balance">
            Un accompagnement<br />sur mesure
          </h2>
          <p className="text-lg font-light text-muted-foreground leading-relaxed">
            De la simple consultation à la mission complète, nous adaptons notre intervention à vos besoins et à votre budget.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {Object.entries(missionData).map(([key, mission]) => (
            <Dialog key={key} open={openDialogs[key]} onOpenChange={(open) => !open && closeDialog(key)}>
              <DialogTrigger asChild>
                <button
                  onClick={() => openDialog(key)}
                  className="group text-left p-8 border border-border hover:border-accent/50 transition-all duration-300 bg-card zen-shadow h-full flex flex-col"
                >
                  <mission.icon className="w-8 h-8 mb-6 text-accent opacity-70" strokeWidth={1} />
                  <h3 className="text-2xl font-light mb-4">
                    {mission.title}
                  </h3>
                  <p className="text-muted-foreground font-light leading-relaxed mb-6 flex-grow text-sm">
                    {mission.brief}
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-light text-accent">
                    En savoir plus
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </button>
              </DialogTrigger>

              <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-light flex items-center gap-4">
                    <mission.icon className="w-7 h-7 text-accent opacity-70" strokeWidth={1} />
                    {mission.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-8 pt-6">
                  <p className="text-base leading-relaxed text-muted-foreground font-light">
                    {mission.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-light mb-6 text-muted-foreground">
                      Phases
                    </h4>
                    <div className="space-y-4">
                      {mission.phases.map((phase, idx) => (
                        <div key={idx} className="border-l border-accent/30 pl-6 py-3">
                          <h5 className="font-light mb-2">{phase.title}</h5>
                          <p className="text-sm text-muted-foreground leading-relaxed font-light">
                            {phase.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-light mb-6 text-muted-foreground">
                      Avantages
                    </h4>
                    <ul className="space-y-3">
                      {mission.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-accent mt-1">•</span>
                          <span className="text-sm leading-relaxed font-light">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8 border-t border-border">
                    <Button onClick={scrollToContact} size="lg" className="w-full font-light">
                      Discuter de votre projet
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Philosophy Section */}
        <div className="max-w-4xl mx-auto pt-24 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <div className="h-px w-12 bg-accent/50 mb-6" />
              <h4 className="text-2xl font-light mb-6 leading-tight">
                Architecture durable et responsable
              </h4>
              <p className="text-muted-foreground font-light leading-relaxed">
                Nous croyons en une architecture qui préserve l'existant, utilise des matériaux biosourcés et minimise son empreinte écologique. Chaque projet est pensé pour durer.
              </p>
            </div>
            <div>
              <div className="h-px w-12 bg-accent/50 mb-6" />
              <h4 className="text-2xl font-light mb-6 leading-tight">
                Expertise locale
              </h4>
              <p className="text-muted-foreground font-light leading-relaxed">
                Notre connaissance du territoire lyonnais, de ses réglementations et de son patrimoine bâti nous permet d'offrir un accompagnement précis et adapté à votre contexte.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
