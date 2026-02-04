'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

// Images
import heroImage from '@/assets/CHV/images/proto architecture_renovation maison_bugey_03-interieur.webp';
import imgCuisine from '@/assets/123/images/proto architecture_amenagement interieur_Lyon_01.webp';
import imgValromey from '@/assets/CHV/images/proto architecture_renovation maison_bugey_04-interieur.webp';
import imgMeublePont from '@/assets/Colombier/images/meuble-pont-chambre-lyon-7-jean-mace-vue-ensemble.webp';
import imgMaison from '@/assets/CHV/images/proto architecture_renovation maison_bugey_01-facade.webp';
import imgLumiere from '@/assets/BAG/images/maison_bigorre_06-interieur.webp'

export default function ArchitecteRenovationLyon() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "prôto.architecture - Architecte Rénovation Lyon",
    "description": "Architecte rénovation Lyon et alentours. Appartements anciens, maisons en pisé ou pierre, corps de ferme. Approche écologique avec matériaux biosourcés.",
    "url": "https://proto-architecture.fr/architecte-renovation-lyon",
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
      { "@type": "AdministrativeArea", "name": "Rhône" },
      { "@type": "AdministrativeArea", "name": "Ain" },
      { "@type": "AdministrativeArea", "name": "Isère" },
      { "@type": "AdministrativeArea", "name": "Monts du Lyonnais" }
    ],
    "serviceType": ["Rénovation appartement Lyon", "Rénovation maison ancienne", "Rénovation maison pisé", "Rénovation corps de ferme", "Mobilier sur-mesure"],
    "priceRange": "€€€"
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quel budget prévoir pour une rénovation à Lyon ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rénovation légère : 500-800€/m². Rénovation complète : 1200-1800€/m². Rénovation lourde : 1800-2500€/m². Rénovation écologique : 2000-3000€/m²."
        }
      },
      {
        "@type": "Question",
        "name": "Combien coûtent les honoraires d'architecte ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pour une mission complète, les honoraires représentent 8 à 12% du montant des travaux."
        }
      },
      {
        "@type": "Question",
        "name": "Faut-il un permis de construire pour rénover à Lyon ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Déclaration préalable pour modification façade ou création <20m². Permis de construire pour extension >20m² ou surélévation."
        }
      }
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
      question: "Quel budget prévoir pour une rénovation à Lyon ?",
      answer: (
        <div className="space-y-4">
          <p className="text-muted-foreground">Le budget dépend de la surface, de l'état initial et du niveau de finitions souhaité.</p>
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
      question: "Combien coûtent les honoraires d'architecte ?",
      answer: (
        <p className="text-muted-foreground">
          Pour une mission complète : <strong className="text-foreground">8 à 12%</strong> du montant des travaux selon la complexité.
          Pour une mission partielle (esquisse, permis, plans) : forfait adapté à vos besoins.
        </p>
      )
    },
    {
      question: "Faut-il une autorisation d'urbanisme pour rénover à Lyon ?",
      answer: (
        <div className="space-y-3 text-muted-foreground">
          <p><span className="font-semibold text-foreground">Déclaration préalable :</span> modification façade, création &lt;20m²</p>
          <p><span className="font-semibold text-foreground">Permis de construire :</span> extension &gt;20m², surélévation, changement de destination</p>
          <p><span className="font-semibold text-foreground">Pas de démarche :</span> rénovation intérieure sans modification de structure</p>
        </div>
      )
    },
    {
      question: "Combien de temps dure une rénovation ?",
      answer: (
        <div className="space-y-2 text-muted-foreground">
          <p>Études et démarches : <strong className="text-foreground">3-6 mois</strong></p>
          <p>Travaux cuisine/SdB : <strong className="text-foreground">1-2 mois</strong></p>
          <p>Appartement complet : <strong className="text-foreground">3-5 mois</strong></p>
          <p>Maison complète : <strong className="text-foreground">6-10 mois</strong></p>
        </div>
      )
    },
    {
      question: "Proposez-vous un conseil avant achat ?",
      answer: (
        <p className="text-muted-foreground">
          Oui, nous proposons une <strong className="text-foreground">mission conseil pré-achat</strong> : visite du bien avec vous,
          évaluation de faisabilité, identification des points de vigilance (structure, humidité) et estimation du budget travaux.
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
      <Navigation />

      <main>
        {/* Hero Section - Full width image with overlay */}
        <section className="pt-24 min-h-[90vh] relative flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src={heroImage}
              alt="Rénovation intérieure Lyon - transformation appartement ancien avec matériaux naturels"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
          </div>

          <div className="container mx-auto px-8 max-w-6xl relative z-10">
            <div className="max-w-2xl space-y-8">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent">
                Lyon & Rhône-Alpes
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9]">
                Architecte<br />
                rénovation
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Transformation d'appartements anciens et rénovation de maisons
                en pisé, pierre ou corps de ferme. Une approche écologique.
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

        {/* Services - Bento grid style */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-8 max-w-6xl">
            <div className="max-w-2xl mb-16">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4">
                Nos interventions
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                Rénovation à Lyon
              </h2>
              <p className="text-lg text-muted-foreground">
                Appartements lyonnais, maisons en pisé ou en pierre, anciens corps de ferme...
                Nous intervenons sur tous types de bâti à Lyon et ses alentours.
              </p>
            </div>

            {/* Bento Grid */}
            <div className="grid md:grid-cols-3 gap-4">
              {/* Grande carte - Appartements */}
              <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-2xl bg-muted/30 p-8 flex flex-col justify-end min-h-[400px]">
                <Image
                  src={imgCuisine}
                  alt="Rénovation appartement Lyon"
                  fill
                  className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-3">Appartements anciens</h3>
                  <p className="text-muted-foreground mb-4 max-w-md">
                    Rénovation complète, cuisine et salle de bain, réaménagement intérieur,
                    rénovation énergétique. Nous maîtrisons les contraintes de copropriété
                    et préservons les éléments patrimoniaux.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Croix-Rousse', 'Presqu\'île', 'Part-Dieu', 'Jean Macé', 'Monplaisir'].map(q => (
                      <span key={q} className="text-xs px-3 py-1 bg-background/80 rounded-full">{q}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Carte Maisons */}
              <div className="group relative overflow-hidden rounded-2xl bg-muted/30 p-6 min-h-[200px]">
                <Image
                  src={imgMaison}
                  alt="Rénovation maison ancienne Lyon"
                  fill
                  className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2">Maisons anciennes</h3>
                  <p className="text-sm text-muted-foreground">
                    Pisé, pierre, corps de ferme. Rénovation lourde aux alentours de Lyon.
                  </p>
                </div>
              </div>

              {/* Carte Mobilier */}
              <div className="group relative overflow-hidden rounded-2xl bg-muted/30 p-6 min-h-[200px]">
                <Image
                  src={imgMeublePont}
                  alt="Mobilier sur-mesure Lyon"
                  fill
                  className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                />
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2">Mobilier sur-mesure</h3>
                  <p className="text-sm text-muted-foreground">
                    Cuisines, bibliothèques, meubles-ponts, bureaux, dressing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approche - Avec image de plan */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4">
                  Notre approche
                </p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">
                  Rénovation<br />écologique
                </h2>

                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-bold">01</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Valoriser l'existant</h3>
                      <p className="text-sm text-muted-foreground">
                        Murs en pisé, pierre de taille, poutres anciennes...
                        Nous révélons le potentiel du bâti traditionnel.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-bold">02</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Matériaux biosourcés</h3>
                      <p className="text-sm text-muted-foreground">
                        Fibre de bois, ouate de cellulose, chanvre, chaux naturelle,
                        bois local pour des espaces sains et durables.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-bold">03</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Lumière naturelle</h3>
                      <p className="text-sm text-muted-foreground">
                        Optimisation des ouvertures, couleurs, organisation des espaces
                        pour maximiser la clarté.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image rénovation */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden bg-muted">
                  <Image
                    src={imgLumiere}
                    alt="Rénovation intérieure lumineuse Lyon"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-4 rounded-xl shadow-lg">
                  <p className="text-sm font-medium">Espaces lumineux</p>
                  <p className="text-xs opacity-80">repensés pour vous</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Réalisations - Cards modernes */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-8 max-w-6xl">
            <div className="flex justify-between items-end mb-16">
              <div>
                <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4">
                  Portfolio
                </p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
                  Réalisations
                </h2>
              </div>
              <Button asChild variant="outline">
                <Link href="/projets">Tous les projets →</Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/projets/transformation-d-un-atelier-en-logement-champagne-en-valromey" className="group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={imgValromey}
                    alt="Rénovation maison Champagne-en-Valromey Ain"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold group-hover:text-accent transition-colors">Ferme bugiste</h3>
                    <p className="text-sm text-muted-foreground">Transformation atelier en logement</p>
                  </div>
                  <span className="text-sm text-muted-foreground">Ain</span>
                </div>
              </Link>

              <Link href="/projets/construction-d-un-meuble-pont-dans-un-appartement-lyonnais-lyon-7" className="group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={imgMeublePont}
                    alt="Meuble pont Lyon 7"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold group-hover:text-accent transition-colors">Meuble pont chambre</h3>
                    <p className="text-sm text-muted-foreground">Mobilier sur-mesure, bureau intégré</p>
                  </div>
                  <span className="text-sm text-muted-foreground">Jean Macé</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Process - Timeline moderne */}
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
                Durée totale : 3 à 18 mois selon l'ampleur.
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

        {/* FAQ - Accordion */}
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

        {/* Zone intervention */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4">
                  Zone d'intervention
                </p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">
                  Lyon et<br />Rhône-Alpes
                </h2>
                <p className="text-muted-foreground mb-8">
                  Appartements à Lyon, maisons en pisé dans l'Ain, corps de ferme en Isère...
                  Nous intervenons sur l'ensemble du territoire lyonnais et ses alentours.
                </p>
                <Button asChild size="lg">
                  <Link href="/#contact">Une question ? Contactez nous.</Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-background rounded-xl">
                  <h3 className="font-semibold mb-3">Lyon et métropole</h3>
                  <p className="text-sm text-muted-foreground">
                    Lyon 1 à 9, Villeurbanne, Caluire, Tassin, Sainte-Foy,
                    Écully, Oullins, Bron, Vénissieux
                  </p>
                </div>
                <div className="p-6 bg-background rounded-xl">
                  <h3 className="font-semibold mb-3">Monts d'Or & Lyonnais</h3>
                  <p className="text-sm text-muted-foreground">
                    Saint-Cyr, Poleymieux, Limonest, Dardilly,
                    Monts du Lyonnais, Beaujolais
                  </p>
                </div>
                <div className="p-6 bg-background rounded-xl col-span-2">
                  <h3 className="font-semibold mb-3">Ain, Isère et au-delà</h3>
                  <p className="text-sm text-muted-foreground">
                    Bugey, Dombes, Nord-Isère, Savoie — rénovation lourde de maisons
                    en pisé, en pierre, anciens corps de ferme et bâti rural
                  </p>
                </div>
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
              Premier échange gratuit pour discuter de vos besoins et des prochaines étapes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link href="/#contact">Prendre contact</Link>
              </Button>
              <Button asChild size="lg"  className="text-lg px-8 py-6 border-background/30 text-background hover:bg-background/10">
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
