'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useRouter } from "next/navigation"

const About = () => {
  const router = useRouter()

  const scrollToContact = () => {
    // Close all dialogs
    setOpenDialogs({
      complete: false,
      partial: false,
      consultation: false,
    })

    router.push("/")
    setTimeout(() => {
      const contactSection = document.getElementById('contact')
      contactSection?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 100)
  }

  const missionData = {
    complete: {
      title: "Mission complète",
      brief: "De l'esquisse à la livraison, un accompagnement total.",
      description: `Nous prenons en charge votre projet de A à Z, du premier croquis jusqu'à la livraison des clés. Cette mission complète garantit cohérence, sérénité et qualité tout au long du processus.`,
      phases: [
        {
          title: "Esquisse",
          content: "Définition des objectifs, analyse et réglementation, proposition des premières pistes architecturales."
        },
        {
          title: "Avant projet",
          content: "Mise au point des usages, organisations des espaces, matérialités et façade ."
        },
        {
          title: "Permis et autorisations",
          content: "Permis de construire ou déclaration préalable, rédaction des pièces graphiques et de la notice architecturale Définition des objectifs, analyse du site, premières esquisses et avant-projet sommaire puis détaillé."
        },
        {
          title: "Projet de conception generale & detaillee",
          content: "Finalisation du projet architectural, rédaction des descriptifs et des quantitatifs."
        },
        {
          title: "Dossier de consultation des entreprises",
          content: "Echanges avec les entreprises, demande et analyse des devis."
        },
        {
          title: "Direction des travaux et reception",
          content: "Coordination des entreprise, visite et compte rendu de chantier, réception des travaux Plans techniques détaillés pour l'entreprise, consultation des artisans, devis comparatifs."
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
      description: `Pour les projets plus modestes ou si vous souhaitez gérer une partie des travaux vous-même, nous proposons des missions partielles adaptées à vos besoins.`,
      phases: [
        {
          title: "Esquisse uniquement",
          content: "Étude de faisabilité, premières esquisses, volumétries pour visualiser le projet."
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
      description: `Vous avez besoin d'un regard extérieur, d'un conseil technique ou d'une orientation avant de vous lancer ? Nous proposons des consultations sur mesure.`,
      phases: [
        {
          title: "Rendez-vous conseil",
          content: "Échange sur site ou au cabinet pour évaluer la faisabilité et les premières orientations."
        },
        {
          title: "Relevé des lieux",
          content: "Travail d'observation et de diagnostic de l'existant, relevé métrique."
        },
        {
          title: "Assistance au choix du mobilier et éclairage.",
          content: "Principe d'agencement du mobilier, sélection de références."
        }
      ],
      benefits: [
        "Conseils personnalisés adaptés à vos besoins spécifiques",
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
    <section id="about" className="pt-24 pb-12 bg-background relative">
      {/* Grid overlay moved to global `GridOverlay` component in App.tsx */}
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
            Que vous rénoviez un appartement à Lyon, une maison ancienne dans l'Ain ou un corps de ferme en Rhône-Alpes, nous adaptons notre intervention à vos besoins, votre budget et votre calendrier.
            <br />De la simple consultation avant achat à l'accompagnement complet jusqu'à la livraison, notre approche s'adapte à chaque étape de votre projet.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(missionData).map(([key, mission]) => (
            <Dialog key={key} open={openDialogs[key]} onOpenChange={(open) => !open && closeDialog(key)}>
              <DialogTrigger asChild>
                <button
                  onClick={() => openDialog(key)}
                  className="group text-left p-8 border-2 border-border hover:border-foreground transition-all bg-background h-full flex flex-col"
                >
                  {/* icon removed */}
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
                  <DialogTitle className="text-3xl font-bold tracking-tight">
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
                    <div className="mt-2 space-y-4">
                      {mission.phases.map((phase, idx) => (
                        <div key={idx} className="py-2">
                          <h5 className="font-semibold mb-2 tracking-tight flex items-center gap-3">
                            <span className="flex-shrink-0 text-accent text-base" aria-hidden>
                              →
                            </span>
                            {phase.title}
                          </h5>
                          <p className="text-sm text-muted-foreground leading-relaxed ml-7">
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
                        <li key={idx} className="flex items-center gap-3">
                          {/* Arrow: fixed width so text aligns consistently; vertically centered */}
                          <span className="flex-shrink-0 text-accent text-base" aria-hidden>
                            →
                          </span>
                          <div className="text-sm leading-relaxed">{benefit}</div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6">
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
