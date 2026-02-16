'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

// Images
import heroImage from '@/assets/123/images/proto architecture_amenagement interieur_Lyon_02.webp';
import imgCuisine from '@/assets/123/images/proto architecture_amenagement interieur_Lyon_01.webp';
import imgCuisine2 from '@/assets/123/images/proto architecture_amenagement interieur_Lyon_03.webp';
import imgMeublePont from '@/assets/Colombier/images/meuble-pont-chambre-lyon-7-jean-mace-vue-ensemble.webp';

export default function RenovationAppartementLyon() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "prôto.architecture - Rénovation Appartement Lyon",
    "description": "Architecte spécialisé en rénovation d'appartements à Lyon. Canuts, haussmannien, années 60. Rénovation complète, cuisine, salle de bain. Matériaux écologiques.",
    "url": "https://proto-architecture.fr/renovation-appartement-lyon",
    "telephone": "+33782156364",
    "email": "mail@proto-architecture.fr",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lyon",
      "addressRegion": "Auvergne-Rhône-Alpes",
      "addressCountry": "FR"
    },
    "areaServed": [
      { "@type": "City", "name": "Lyon" },
      { "@type": "City", "name": "Villeurbanne" },
      { "@type": "AdministrativeArea", "name": "Métropole de Lyon" }
    ],
    "serviceType": ["Rénovation appartement Lyon", "Rénovation cuisine Lyon", "Rénovation salle de bain Lyon", "Rénovation énergétique appartement", "Rénovation appartement canut"],
    "priceRange": "€€€"
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quel budget pour rénover un appartement à Lyon ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rénovation légère (peinture, sols) : 500-800€/m². Rénovation complète (cuisine, salle de bain, électricité) : 1 200-1 800€/m². Rénovation lourde (structure, redistribution) : 1 800-2 500€/m². Pour un T3 de 70m², comptez entre 84 000€ et 175 000€ en rénovation complète."
        }
      },
      {
        "@type": "Question",
        "name": "Peut-on rester dans l'appartement pendant les travaux ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pour une rénovation légère ou partielle (une seule pièce), il est possible de rester. Pour une rénovation complète, nous recommandons de quitter le logement pendant la durée des travaux (2 à 5 mois) pour votre confort et pour faciliter l'avancement du chantier."
        }
      },
      {
        "@type": "Question",
        "name": "Quelles sont les contraintes en copropriété ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En copropriété, certains travaux nécessitent l'accord de l'assemblée générale : modification des parties communes, changement de fenêtres, percement de murs porteurs. Nous gérons les démarches auprès du syndic et préparons les dossiers pour l'AG."
        }
      },
      {
        "@type": "Question",
        "name": "Faut-il un architecte pour rénover un appartement ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'architecte n'est pas obligatoire pour une rénovation intérieure sans modification de façade. Cependant, faire appel à un architecte permet d'optimiser les espaces, de coordonner les artisans, de maîtriser le budget et d'éviter les erreurs coûteuses, surtout pour les appartements anciens avec des contraintes techniques."
        }
      },
    ]
  };

  const steps = [
    { num: "01", title: "Premier échange", desc: "30 min gratuit par téléphone ou visio" },
    { num: "02", title: "Visite sur place", desc: "Rencontre avec le lieu et son potentiel" },
    { num: "03", title: "Proposition", desc: "Devis détaillé et calendrier" },
    { num: "04", title: "Esquisse", desc: "Scénarios d'aménagement (1-2 mois)" },
    { num: "05", title: "Autorisations", desc: "Permis et démarches si nécessaire" },
    { num: "06", title: "Exécution", desc: "Plans techniques et consultation des entreprises" },
    { num: "07", title: "Chantier", desc: "Suivi et réception des travaux" },
  ];

  const faqItems = [
    {
      question: "Quel budget pour rénover un appartement à Lyon ?",
      answer: (
        <div className="space-y-4">
          <p className="text-muted-foreground">Le budget dépend de la surface, de l'état initial et du niveau de finitions souhaité. Pour un T3 de 70m², comptez entre 84 000€ et 175 000€ en rénovation complète.</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-2xl font-bold">500-800€</p>
              <p className="text-sm text-muted-foreground">/m² rénovation légère</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-2xl font-bold">1 200-1 800€</p>
              <p className="text-sm text-muted-foreground">/m² rénovation complète</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-2xl font-bold">1 800-2 500€</p>
              <p className="text-sm text-muted-foreground">/m² rénovation lourde</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-2xl font-bold">2 000-3 000€</p>
              <p className="text-sm text-muted-foreground">/m² rénovation écologique</p>
            </div>
          </div>
        </div>
      )
    },
    {
      question: "Peut-on rester dans l'appartement pendant les travaux ?",
      answer: (
        <div className="space-y-3 text-muted-foreground">
          <p><span className="font-semibold text-foreground">Rénovation partielle :</span> il est possible de rester dans le logement si les travaux concernent une seule pièce (cuisine ou salle de bain par exemple).</p>
          <p><span className="font-semibold text-foreground">Rénovation complète :</span> nous recommandons de quitter le logement pendant la durée des travaux (2 à 5 mois) pour votre confort et pour faciliter l'avancement du chantier.</p>
          <p>Nous organisons le phasage des travaux pour minimiser la durée d'absence lorsque c'est possible.</p>
        </div>
      )
    },
    {
      question: "Quelles sont les contraintes en copropriété ?",
      answer: (
        <div className="space-y-3 text-muted-foreground">
          <p><span className="font-semibold text-foreground">Accord AG nécessaire :</span> modification des parties communes, changement de fenêtres, percement de murs porteurs, modification de façade</p>
          <p><span className="font-semibold text-foreground">Déclaration au syndic :</span> travaux impactant la structure ou les réseaux communs</p>
          <p><span className="font-semibold text-foreground">Sans accord :</span> travaux intérieurs sans impact sur les parties communes (peinture, sols, cloisons légères)</p>
          <p>Nous gérons les démarches auprès du syndic et préparons les dossiers pour l'assemblée générale.</p>
        </div>
      )
    },
    {
      question: "Faut-il un architecte pour rénover un appartement ?",
      answer: (
        <p className="text-muted-foreground">
          L'architecte n'est pas obligatoire pour une rénovation intérieure sans modification de façade.
          Cependant, faire appel à un architecte permet d'<strong className="text-foreground">optimiser les espaces</strong>,
          de <strong className="text-foreground">coordonner les artisans</strong>,
          de <strong className="text-foreground">maîtriser le budget</strong> et d'éviter les erreurs coûteuses,
          surtout pour les appartements anciens avec des contraintes techniques (murs porteurs, réseaux vétustes, hauteurs sous plafond).
        </p>
      )
    },
  ];

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <BreadcrumbSchema items={[
        { name: 'Accueil', url: 'https://proto-architecture.fr' },
        { name: 'Rénovation Appartement Lyon', url: 'https://proto-architecture.fr/renovation-appartement-lyon' },
      ]} />
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="pt-24 min-h-[90vh] relative flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src={heroImage}
              alt="Rénovation appartement Lyon - intérieur rénové avec matériaux naturels"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
          </div>

          <div className="container mx-auto px-8 max-w-6xl relative z-10">
            <div className="max-w-2xl space-y-8">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent">
                Lyon & Métropole
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9]">
                Rénovation<br />
                d'appartement<br />
                à Lyon
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Appartements canuts, haussmanniens, années 60 — nous transformons
                votre intérieur en un espace contemporain, lumineux et fonctionnel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="text-base px-8 py-6">
                  <Link href="/#contact">Parler de mon projet</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base px-8 py-6 bg-background/50 backdrop-blur">
                  <Link href="/projets">Voir les réalisations</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Premier échange gratuit • Mission complète ou partielle
              </p>
            </div>
          </div>
        </section>

        {/* Types d'appartements lyonnais - Bento grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-8 max-w-6xl">
            <div className="max-w-2xl mb-16">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4">
                Nos interventions
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                Appartements lyonnais
              </h2>
              <p className="text-lg text-muted-foreground">
                Chaque type d'appartement a ses spécificités. Nous adaptons notre approche
                aux contraintes et au potentiel de votre logement.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {/* Grande carte - Canuts */}
              <div className="md:col-span-2 md:row-span-2 group rounded-2xl border border-accent/20 hover:border-accent/40 transition-colors bg-accent/5 p-8 flex flex-col justify-between min-h-[400px]">
                <span className="text-6xl font-bold text-accent/10">01</span>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Appartements canuts</h3>
                  <p className="text-muted-foreground mb-4 max-w-md">
                    Les canuts de la Croix-Rousse offrent des volumes exceptionnels :
                    hauteurs sous plafond de 4 mètres, grandes fenêtres, possibilité de mezzanines.
                    Nous valorisons ces espaces uniques tout en les adaptant aux usages contemporains.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Croix-Rousse', 'Pentes', 'Plateau', 'Mezzanines', 'Volumes'].map(q => (
                      <span key={q} className="text-xs px-3 py-1 bg-background/80 rounded-full border border-border">{q}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Carte Haussmannien */}
              <div className="group rounded-2xl border border-border hover:border-accent/30 transition-colors bg-muted/30 p-6 flex flex-col justify-between min-h-[200px]">
                <span className="text-4xl font-bold text-accent/10">02</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">Haussmannien & bourgeois</h3>
                  <p className="text-sm text-muted-foreground">
                    Moulures, parquet point de Hongrie, cheminées, hauteur sous plafond.
                    Préservation du patrimoine et modernisation des équipements.
                  </p>
                </div>
              </div>

              {/* Carte Années 60 */}
              <div className="group rounded-2xl border border-border hover:border-accent/30 transition-colors bg-muted/30 p-6 flex flex-col justify-between min-h-[200px]">
                <span className="text-4xl font-bold text-accent/10">03</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">Années 60-70</h3>
                  <p className="text-sm text-muted-foreground">
                    Part-Dieu, Jean Macé, Monplaisir — redistribution des espaces,
                    cuisine ouverte, isolation thermique et phonique.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types de rénovation - Grid 2 colonnes */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4">
                  Nos prestations
                </p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">
                  Types de<br />rénovation
                </h2>

                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-bold">01</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Rénovation complète</h3>
                      <p className="text-sm text-muted-foreground">
                        Reprise totale de l'appartement : redistribution des espaces,
                        électricité, plomberie, sols, murs, plafonds. Un projet global
                        pour un résultat cohérent.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-bold">02</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Cuisine & salle de bain</h3>
                      <p className="text-sm text-muted-foreground">
                        Rénovation ciblée des pièces techniques : agencement optimisé,
                        mobilier sur-mesure, choix des matériaux et équipements.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-bold">03</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Rénovation énergétique</h3>
                      <p className="text-sm text-muted-foreground">
                        Isolation thermique et phonique, remplacement des menuiseries,
                        ventilation performante. Matériaux biosourcés privilégiés.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-bold">04</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Restructuration & décloisonnement</h3>
                      <p className="text-sm text-muted-foreground">
                        Ouverture de murs porteurs, création de trémies, fusion de lots.
                        Études structure et démarches copropriété incluses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden bg-muted">
                  <Image
                    src={imgCuisine2}
                    alt="Rénovation intérieure appartement Lyon - cuisine rénovée"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-4 rounded-xl shadow-lg">
                  <p className="text-sm font-medium">Espaces repensés</p>
                  <p className="text-xs opacity-80">pour votre quotidien</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Réalisations appartements */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-8 max-w-6xl">
            <div className="flex justify-between items-end mb-16">
              <div>
                <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4">
                  Portfolio
                </p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
                  Réalisations<br />en appartement
                </h2>
              </div>
              <Button asChild variant="outline">
                <Link href="/projets">Tous les projets →</Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/projets/renovation-d-une-cuisine-dans-un-appartement-des-annees-60-lyon-7" className="group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={imgCuisine}
                    alt="Rénovation cuisine appartement Lyon 7 Jean Macé"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold group-hover:text-accent transition-colors">Cuisine années 60</h3>
                    <p className="text-sm text-muted-foreground">Rénovation cuisine et mobilier sur-mesure</p>
                  </div>
                  <span className="text-sm text-muted-foreground">Lyon 7</span>
                </div>
              </Link>

              <Link href="/projets/construction-d-un-meuble-pont-dans-un-appartement-lyonnais-lyon-7" className="group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={imgMeublePont}
                    alt="Meuble pont sur-mesure appartement Lyon 7"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold group-hover:text-accent transition-colors">Meuble pont chambre</h3>
                    <p className="text-sm text-muted-foreground">Mobilier sur-mesure, bureau intégré</p>
                  </div>
                  <span className="text-sm text-muted-foreground">Lyon 7</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Process - Timeline */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-8 max-w-6xl">
            <div className="max-w-2xl mb-16">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4">
                Processus
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                Comment ça marche ?
              </h2>
              <p className="text-lg text-muted-foreground">
                De l'idée à la livraison, un accompagnement en 7 étapes.
                Durée totale : 3 à 12 mois selon l'ampleur.
              </p>
            </div>

            <div className="grid md:grid-cols-7 gap-4">
              {steps.map((step, i) => (
                <div key={i} className="relative group">
                  <div className="bg-background rounded-xl p-4 h-full border border-transparent hover:border-accent transition-colors">
                    <span className="text-3xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors">
                      {step.num}
                    </span>
                    <h3 className="font-semibold mt-2 mb-1 text-sm">{step.title}</h3>
                    <p className="text-xs text-muted-foreground">{step.desc}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-[2px] bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-8 max-w-4xl">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4">
                FAQ
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
                Questions fréquentes
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border rounded-xl px-6 data-[state=open]:bg-muted/30"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Arrondissements - SEO local */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-8 max-w-6xl">
            <div className="max-w-2xl mb-16">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4">
                Zone d'intervention
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                Rénovation par<br />arrondissement
              </h2>
              <p className="text-lg text-muted-foreground">
                Nous intervenons dans tous les arrondissements de Lyon et la métropole.
                Chaque quartier a ses typologies d'appartements et ses spécificités.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-background rounded-xl">
                <h3 className="font-semibold mb-3">Lyon 1-4 — Croix-Rousse, Presqu'île, Vieux Lyon</h3>
                <p className="text-sm text-muted-foreground">
                  Appartements canuts aux volumes généreux, immeubles Renaissance du Vieux Lyon,
                  logements de la Presqu'île. Patrimoine classé, contraintes ABF,
                  hauteurs sous plafond exceptionnelles.
                </p>
              </div>
              <div className="p-6 bg-background rounded-xl">
                <h3 className="font-semibold mb-3">Lyon 5-6 — Point du Jour, Brotteaux</h3>
                <p className="text-sm text-muted-foreground">
                  Appartements bourgeois et haussmanniens des Brotteaux, immeubles de standing
                  du 6ème. Moulures, parquet, cheminées à préserver. Rénovation respectueuse
                  du cachet d'origine.
                </p>
              </div>
              <div className="p-6 bg-background rounded-xl">
                <h3 className="font-semibold mb-3">Lyon 7-9 — Jean Macé, Gerland, Vaise</h3>
                <p className="text-sm text-muted-foreground">
                  Appartements des années 60-70, immeubles de reconversion industrielle.
                  Redistribution des espaces, ouverture des cuisines, isolation thermique
                  et phonique, mise aux normes électriques.
                </p>
              </div>
              <div className="p-6 bg-background rounded-xl">
                <h3 className="font-semibold mb-3">Villeurbanne & métropole</h3>
                <p className="text-sm text-muted-foreground">
                  Gratte-Ciel, Charpennes, Tonkin — immeubles des années 30 aux années 80.
                  Caluire, Tassin, Sainte-Foy, Écully, Oullins. Rénovation adaptée
                  à chaque époque de construction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24 bg-foreground text-background">
          <div className="container mx-auto px-8 max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
              Démarrons votre projet
            </h2>
            <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto">
              Premier échange gratuit pour discuter de la rénovation de votre appartement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link href="/#contact">Prendre contact</Link>
              </Button>
              <Button asChild size="lg" className="text-lg px-8 py-6 border-background/30 text-background hover:bg-background/10">
                <a href="tel:+33782156364">07 82 15 63 64</a>
              </Button>
            </div>
            <div className="space-y-2 opacity-60">
              <p>mail@proto-architecture.fr</p>
              <p>Architecte EPFL inscrite à l'Ordre • Lyon</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
