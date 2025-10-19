import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const missionData = {
  complete: {
    title: "Mission complète",
    brief: "Accompagnement du premier croquis jusqu'à la livraison pour garantir cohérence, sérénité et qualité.",
    details: (
      <div className="space-y-4">
        <p>
          Vous souhaitez être accompagné du premier croquis jusqu'à la livraison ? Je prends en charge l'ensemble du projet, pour vous garantir cohérence, sérénité et qualité de réalisation.
        </p>
        <div>
          <h4 className="font-semibold mb-3">Phases incluses :</h4>
          <ul className="space-y-2 ml-4">
            <li>• <strong>Esquisse & avant-projet</strong> – définition des besoins, conception et propositions d'aménagements</li>
            <li>• <strong>Permis de construire / Déclaration préalable</strong> – constitution du dossier administratif</li>
            <li>• <strong>Dossier de conception et d'exécution (PRO/DCE)</strong> – plans techniques, choix des matériaux, budget et planning</li>
            <li>• <strong>Suivi de chantier (DET / OPC)</strong> – coordination des entreprises, vérification de la qualité et du respect des délais</li>
            <li>• <strong>Réception & livraison</strong> – accompagnement jusqu'à la remise des clés</li>
          </ul>
        </div>
        <p className="text-muted-foreground">
          Vous bénéficiez d'un interlocuteur unique, à l'écoute de vos besoins, garant de la qualité architecturale et environnementale de votre projet.
        </p>
      </div>
    )
  },
  partial: {
    title: "Mission partielle",
    brief: "Intervention sur une ou plusieurs phases selon vos besoins et votre niveau d'autonomie.",
    details: (
      <div className="space-y-4">
        <p>
          Vous avez déjà une entreprise ou souhaitez gérer une partie du projet ? Je peux intervenir sur une ou plusieurs phases, selon vos besoins :
        </p>
        <ul className="space-y-2 ml-4">
          <li>• Étude de faisabilité ou esquisse</li>
          <li>• Avant-projet détaillé</li>
          <li>• Dossier administratif</li>
          <li>• Consultation des entreprises</li>
          <li>• Suivi ponctuel du chantier</li>
        </ul>
        <p className="text-muted-foreground">
          Une formule souple, adaptée à votre budget et à votre niveau d'autonomie.
        </p>
      </div>
    )
  },
  complementary: {
    title: "Missions complémentaires",
    brief: "Services additionnels pour enrichir votre projet : relevé 3D, conseil matériaux, aménagement intérieur.",
    details: (
      <div className="space-y-4">
        <ul className="space-y-3 ml-4">
          <li>
            <strong>• Relevé de l'existant</strong> : prise de cotes et modélisation 3D
          </li>
          <li>
            <strong>• Conseil en matériaux naturels</strong> : choix de solutions locales, biosourcées ou à faible impact carbone
          </li>
          <li>
            <strong>• Aménagement intérieur et mobilier</strong> : optimisation des espaces, ambiance, choix des finitions
          </li>
        </ul>
      </div>
    )
  }
};

const About = () => {
  return (
    <section id="about" className="py-32 bg-background">
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header Section - Full Width */}
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl text-foreground elegant-underline inline-block">
              Mes services d'architecte à Lyon
            </h2>
            <p className="text-xl md:text-2xl text-foreground/90 font-light">
              Concevoir, rénover et transformer durablement vos espaces de vie.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Basé à Lyon, j'accompagne les particuliers dans la rénovation lourde d'appartements et de maisons, avec une approche éco-responsable. Mon objectif : concevoir des lieux confortables, sains et durables, en valorisant les matériaux naturels, locaux et biosourcés.
            </p>
          </div>

          {/* Mission Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(missionData).map(([key, mission]) => (
              <Dialog key={key}>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02] h-full">
                    <CardHeader>
                      <CardTitle className="text-xl">{mission.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed mt-3">
                        {mission.brief}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full">
                        En savoir plus
                      </Button>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{mission.title}</DialogTitle>
                  </DialogHeader>
                  <DialogDescription asChild>
                    <div className="text-foreground/80 leading-relaxed">
                      {mission.details}
                    </div>
                  </DialogDescription>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {/* Why Choose Section */}
          <div className="bg-muted/30 rounded-lg p-8 md:p-12 space-y-6">
            <h3 className="text-2xl md:text-3xl text-foreground font-light">
              Pourquoi me confier votre projet ?
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-foreground/80">
              <div className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                <span>Expertise en rénovation énergétique et architecture durable</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                <span>Connaissance fine du patrimoine lyonnais</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
                <span>Collaboration avec des artisans locaux partageant les mêmes valeurs</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent mt-1">✓</span>
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
