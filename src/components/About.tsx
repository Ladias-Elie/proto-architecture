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
          title: "01 — Esquisse & Avant-projet",
          content: "Définition des objectifs, analyse du site, premières esquisses et avant-projet sommaire puis détaillé."
        },
        {
          title: "02 — Permis & Autorisations",
          content: "Constitution et dépôt du dossier de permis de construire ou déclaration préalable."
        },
        {
          title: "03 — Projet d'exécution",
          content: "Plans techniques détaillés pour l'entreprise, consultation des artisans, devis comparatifs."
        },
        {
          title: "04 — Suivi de chantier",
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
      title: "Missions complémentaires",
      brief: "Accompagnement sur mesure pour demandes particulières.",
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
    <section id="about" className="py-24 bg-background relative">
      {/* Grid overlay for Swiss aesthetic */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{
             backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
             backgroundSize: '24px 24px'
           }} 
      />
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="max-w-4xl mb-20">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-6 block">
            Nos missions
          </span>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-8 text-balance">
            Un accompagnement<br />sur mesure
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            De la simple consultation à la mission complète, nous adaptons notre intervention à vos besoins et à votre budget.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {Object.entries(missionData).map(([key, mission]) => (
            <Dialog key={key} open={openDialogs[key]} onOpenChange={(open) => !open && closeDialog(key)}>
              <DialogTrigger asChild>
                <button
                  onClick={() => openDialog(key)}
                  className="group text-left p-8 border-2 border-border hover:border-foreground transition-all bg-background h-full flex flex-col"
                >
                  <mission.icon className="w-10 h-10 mb-6 text-accent" strokeWidth={1.5} />
                  <h3 className="text-2xl font-bold mb-3 tracking-tight">
                    {mission.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {mission.brief}
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent">
                    En savoir plus
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </button>
              </DialogTrigger>

              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold tracking-tight flex items-center gap-4">
                    <mission.icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
                    {mission.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-8 pt-6">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {mission.description}
                  </p>

                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-semibold mb-4 text-muted-foreground">
                      Phases
                    </h4>
                    <div className="space-y-4">
                      {mission.phases.map((phase, idx) => (
                        <div key={idx} className="border-l-2 border-accent pl-6 py-2">
                          <h5 className="font-semibold mb-2 tracking-tight">{phase.title}</h5>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {phase.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-semibold mb-4 text-muted-foreground">
                      Avantages
                    </h4>
                    <ul className="space-y-2">
                      {mission.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-accent font-bold mt-1">—</span>
                          <span className="text-sm leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t-2 border-border">
                    <Button onClick={scrollToContact} size="lg" className="w-full font-semibold uppercase tracking-wider">
                      Discuter de votre projet
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
