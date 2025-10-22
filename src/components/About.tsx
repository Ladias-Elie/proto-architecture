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
      number: "I",
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
      number: "II",
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
      number: "III",
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
    <section id="about" className="py-32 bg-muted/30 grain-texture">
      <div className="container mx-auto px-8 md:px-24">
        {/* Header - Editorial Style */}
        <div className="max-w-4xl mb-24">
          <div className="flex items-center gap-6 mb-8">
            <span className="text-xs tracking-[0.3em] uppercase text-accent" style={{ fontFamily: 'Inter' }}>
              Nos Services
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
          
          <h2 className="text-5xl md:text-7xl leading-tight mb-8">
            Un accompagnement<br />
            <span className="italic">sur mesure</span>
          </h2>
          
          <p className="text-xl leading-relaxed text-muted-foreground italic max-w-2xl">
            De la simple consultation à la mission complète, nous adaptons notre intervention à la singularité de chaque projet.
          </p>
        </div>

        {/* Mission Cards - Magazine Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {Object.entries(missionData).map(([key, mission]) => (
            <Dialog key={key} open={openDialogs[key]} onOpenChange={(open) => !open && closeDialog(key)}>
              <DialogTrigger asChild>
                <button
                  onClick={() => openDialog(key)}
                  className="group text-left bg-card editorial-shadow hover:editorial-shadow-lg transition-all duration-500 h-full flex flex-col overflow-hidden"
                >
                  {/* Card Header */}
                  <div className="p-10 border-b border-border">
                    <div className="flex items-start justify-between mb-6">
                      <mission.icon className="w-10 h-10 text-accent" strokeWidth={1.5} />
                      <span className="text-4xl opacity-20" style={{ fontFamily: "'Playfair Display'" }}>
                        {mission.number}
                      </span>
                    </div>
                    <h3 className="text-3xl mb-4">
                      {mission.title}
                    </h3>
                  </div>
                  
                  {/* Card Body */}
                  <div className="p-10 flex-grow flex flex-col">
                    <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                      {mission.brief}
                    </p>
                    <div className="inline-flex items-center gap-2 text-sm text-accent group-hover:gap-3 transition-all" style={{ fontFamily: 'Inter' }}>
                      Lire la suite
                      <span>→</span>
                    </div>
                  </div>
                </button>
              </DialogTrigger>

              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-4xl flex items-center gap-4 mb-4">
                    <mission.icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
                    {mission.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-10 pt-6">
                  <p className="text-lg leading-relaxed text-muted-foreground italic">
                    {mission.description}
                  </p>

                  <div>
                    <h4 className="text-sm tracking-[0.2em] uppercase mb-6 text-accent" style={{ fontFamily: 'Inter' }}>
                      Phases
                    </h4>
                    <div className="space-y-6">
                      {mission.phases.map((phase, idx) => (
                        <div key={idx} className="border-l-2 border-accent/30 pl-6 py-2">
                          <h5 className="text-lg mb-2">{phase.title}</h5>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {phase.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm tracking-[0.2em] uppercase mb-6 text-accent" style={{ fontFamily: 'Inter' }}>
                      Avantages
                    </h4>
                    <ul className="space-y-3">
                      {mission.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                          <span className="text-accent text-xl">•</span>
                          <span className="leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8 border-t border-border">
                    <Button onClick={scrollToContact} size="lg" className="w-full">
                      Discuter de votre projet
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Philosophy Section - Two Column Editorial */}
        <div className="max-w-5xl mx-auto pt-24 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-accent mb-6 block" style={{ fontFamily: 'Inter' }}>
                Notre Philosophie
              </span>
              <h4 className="text-3xl mb-6 leading-tight">
                Architecture durable<br />
                <span className="italic">et responsable</span>
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Nous croyons en une architecture qui préserve l'existant, utilise des matériaux biosourcés et minimise son empreinte écologique. Chaque projet est pensé pour durer.
              </p>
            </div>
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-accent mb-6 block" style={{ fontFamily: 'Inter' }}>
                Basé à Lyon
              </span>
              <h4 className="text-3xl mb-6 leading-tight">
                Expertise<br />
                <span className="italic">locale</span>
              </h4>
              <p className="text-muted-foreground leading-relaxed">
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
