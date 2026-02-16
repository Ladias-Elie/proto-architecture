'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

// Images SSA (chalet avec extension)
import heroImage from '@/assets/SSA/images/proto architecture_renovation chalet_maurienne_01-facade.webp';
import imgInterieurSSA2 from '@/assets/SSA/images/proto architecture_renovation chalet_maurienne_04-interieur.webp';

// Images CHV (façade)
import imgFacadeCHV1 from '@/assets/CHV/images/proto architecture_renovation maison_bugey_01-facade.webp';

export default function ExtensionMaisonLyon() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "prôto.architecture - Extension Maison Lyon",
    "description": "Architecte spécialisé en extension de maison à Lyon et région. Surélévation, agrandissement, véranda, aménagement de combles. Intégration architecturale et matériaux biosourcés.",
    "url": "https://proto-architecture.fr/extension-maison-lyon",
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
      { "@type": "AdministrativeArea", "name": "Monts du Lyonnais" },
      { "@type": "AdministrativeArea", "name": "Ain" },
      { "@type": "AdministrativeArea", "name": "Nord-Isère" },
      { "@type": "AdministrativeArea", "name": "Beaujolais" }
    ],
    "serviceType": ["Extension maison Lyon", "Surélévation maison", "Agrandissement maison", "Aménagement combles"],
    "priceRange": "€€€"
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quel budget pour une extension de maison ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Extension de plain-pied : 1 800-2 500€/m². Surélévation : 2 000-3 000€/m². Pour une extension de 30m², comptez entre 54 000€ et 90 000€ selon la complexité et les finitions."
        }
      },
      {
        "@type": "Question",
        "name": "Faut-il un permis de construire pour agrandir sa maison ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Une déclaration préalable suffit pour une extension de moins de 40m² en zone urbaine (20m² hors zone urbaine). Au-delà, un permis de construire est nécessaire. Si la surface totale après extension dépasse 150m², le recours à un architecte est obligatoire."
        }
      },
      {
        "@type": "Question",
        "name": "Peut-on surélever une maison ancienne ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, dans la plupart des cas. Une étude de structure vérifie la capacité portante des fondations et des murs existants. La surélévation en ossature bois est souvent privilégiée pour sa légèreté. Il faut aussi vérifier le PLU (hauteur maximale autorisée) et les distances aux limites de propriété."
        }
      },
      {
        "@type": "Question",
        "name": "Combien de temps pour réaliser une extension ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Études et autorisations : 3 à 6 mois. Travaux d'extension de plain-pied : 4 à 6 mois. Surélévation : 5 à 8 mois. Comptez au total 8 à 14 mois entre le premier échange et la livraison, selon la complexité du projet."
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
      question: "Quel budget pour une extension de maison ?",
      answer: (
        <div className="space-y-4">
          <p className="text-muted-foreground">Le budget dépend du type d'extension, de la surface, des matériaux et du niveau de finitions.</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-2xl font-bold">1 800-2 500€</p>
              <p className="text-sm text-muted-foreground">/m² extension de plain-pied</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-2xl font-bold">2 000-3 000€</p>
              <p className="text-sm text-muted-foreground">/m² surélévation</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-2xl font-bold">800-1 500€</p>
              <p className="text-sm text-muted-foreground">/m² aménagement de combles</p>
            </div>
          </div>
        </div>
      )
    },
    {
      question: "Faut-il un permis de construire pour agrandir sa maison ?",
      answer: (
        <div className="space-y-3 text-muted-foreground">
          <p><span className="font-semibold text-foreground">Déclaration préalable :</span> extension de moins de 40m² en zone urbaine (20m² hors zone urbaine)</p>
          <p><span className="font-semibold text-foreground">Permis de construire :</span> extension de plus de 40m² en zone urbaine, ou plus de 20m² hors zone urbaine</p>
          <p><span className="font-semibold text-foreground">Architecte obligatoire :</span> si la surface totale après travaux dépasse 150m²</p>
          <p>Nous gérons l'ensemble des démarches administratives et le suivi des autorisations.</p>
        </div>
      )
    },
    {
      question: "Peut-on surélever une maison ancienne ?",
      answer: (
        <div className="space-y-3 text-muted-foreground">
          <p>Oui, dans la plupart des cas. La surélévation est une solution idéale pour gagner de la surface sans emprise au sol supplémentaire.</p>
          <p><span className="font-semibold text-foreground">Étude de structure :</span> vérification de la capacité portante des fondations et des murs existants</p>
          <p><span className="font-semibold text-foreground">Ossature bois :</span> souvent privilégiée pour sa légèreté et sa rapidité de mise en œuvre</p>
          <p><span className="font-semibold text-foreground">PLU :</span> vérification de la hauteur maximale autorisée et des distances aux limites</p>
        </div>
      )
    },
    {
      question: "Combien de temps pour réaliser une extension ?",
      answer: (
        <div className="space-y-3 text-muted-foreground">
          <p><span className="font-semibold text-foreground">Études et autorisations :</span> 3 à 6 mois (esquisse, permis, consultation des entreprises)</p>
          <p><span className="font-semibold text-foreground">Extension de plain-pied :</span> 4 à 6 mois de travaux</p>
          <p><span className="font-semibold text-foreground">Surélévation :</span> 5 à 8 mois de travaux</p>
          <p>Comptez au total 8 à 14 mois entre le premier échange et la livraison, selon la complexité du projet.</p>
        </div>
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
        { name: 'Extension Maison Lyon', url: 'https://proto-architecture.fr/extension-maison-lyon' },
      ]} />
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="pt-24 min-h-[90vh] relative flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src={heroImage}
              alt="Extension de maison Lyon - chalet avec extension contemporaine"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
          </div>

          <div className="container mx-auto px-8 max-w-6xl relative z-10">
            <div className="max-w-2xl space-y-8">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent">
                Lyon & Région
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9]">
                Extension<br />
                de maison
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Surélévation, agrandissement, véranda — nous concevons l'extension
                de votre maison avec une intégration architecturale soignée et des matériaux durables.
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

        {/* Types d'extension - Bento grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-8 max-w-6xl">
            <div className="max-w-2xl mb-16">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4">
                Nos interventions
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                Types d'extension
              </h2>
              <p className="text-lg text-muted-foreground">
                Chaque projet d'extension répond à des contraintes spécifiques. Nous adaptons
                la solution architecturale à votre terrain, votre maison et vos besoins.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {/* Grande carte - Extension latérale */}
              <div className="md:col-span-2 md:row-span-2 group rounded-2xl border border-accent/20 hover:border-accent/40 transition-colors bg-accent/5 p-8 flex flex-col justify-between min-h-[400px]">
                <span className="text-6xl font-bold text-accent/10">01</span>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Extension latérale</h3>
                  <p className="text-muted-foreground mb-4 max-w-md">
                    Agrandissement de plain-pied en continuité avec l'existant. Création de nouvelles
                    pièces de vie, cuisine, suite parentale. Intégration harmonieuse des volumes
                    et des matériaux avec le bâtiment d'origine.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Plain-pied', 'Continuité', 'Pièces de vie', 'Intégration', 'Matériaux locaux'].map(q => (
                      <span key={q} className="text-xs px-3 py-1 bg-background/80 rounded-full border border-border">{q}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Carte Surélévation */}
              <div className="group rounded-2xl border border-border hover:border-accent/30 transition-colors bg-muted/30 p-6 flex flex-col justify-between min-h-[200px]">
                <span className="text-4xl font-bold text-accent/10">02</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">Surélévation</h3>
                  <p className="text-sm text-muted-foreground">
                    Ajout d'un étage, combles aménagés, toiture rehaussée.
                    Gain de surface sans emprise au sol supplémentaire, idéal en zone urbaine dense.
                  </p>
                </div>
              </div>

              {/* Carte Véranda */}
              <div className="group rounded-2xl border border-border hover:border-accent/30 transition-colors bg-muted/30 p-6 flex flex-col justify-between min-h-[200px]">
                <span className="text-4xl font-bold text-accent/10">03</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">Véranda & jardin d'hiver</h3>
                  <p className="text-sm text-muted-foreground">
                    Extension vitrée bioclimatique, lien entre intérieur et extérieur.
                    Apports solaires passifs, espace lumineux toute l'année.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notre approche - Grid 2 colonnes */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-8 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4">
                  Notre approche
                </p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">
                  Concevoir<br />votre extension
                </h2>

                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-bold">01</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Étude de faisabilité</h3>
                      <p className="text-sm text-muted-foreground">
                        Analyse du PLU, du COS, de l'emprise au sol et des distances aux limites.
                        Vérification des contraintes réglementaires avant de dessiner.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-bold">02</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Intégration architecturale</h3>
                      <p className="text-sm text-muted-foreground">
                        Harmonie avec l'existant, choix des matériaux, proportions et volumes.
                        L'extension doit compléter la maison, pas la contredire.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-bold">03</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Performance énergétique</h3>
                      <p className="text-sm text-muted-foreground">
                        Isolation biosourcée (fibre de bois, ouate de cellulose), continuité
                        thermique entre l'existant et l'extension. Confort été comme hiver.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-bold">04</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Autorisations</h3>
                      <p className="text-sm text-muted-foreground">
                        Déclaration préalable ou permis de construire, montage du dossier,
                        suivi de l'instruction. Nous gérons les démarches administratives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden bg-muted">
                  <Image
                    src={imgInterieurSSA2}
                    alt="Intérieur extension de maison - espace lumineux et contemporain"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-4 rounded-xl shadow-lg">
                  <p className="text-sm font-medium">Extension réussie</p>
                  <p className="text-xs opacity-80">intégrée avec soin</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Réalisations */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-8 max-w-6xl">
            <div className="flex justify-between items-end mb-16">
              <div>
                <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4">
                  Portfolio
                </p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
                  Réalisations<br />extensions
                </h2>
              </div>
              <Button asChild variant="outline">
                <Link href="/projets">Tous les projets →</Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Link href="/projets/renovation-et-extension-d-un-chalet-de-montagne-saint-sorlin-d-arves" className="group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={heroImage}
                    alt="Extension chalet de montagne Saint-Sorlin-d'Arves"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold group-hover:text-accent transition-colors">Chalet de montagne</h3>
                    <p className="text-sm text-muted-foreground">Rénovation et extension d'un chalet</p>
                  </div>
                  <span className="text-sm text-muted-foreground">Saint-Sorlin-d'Arves</span>
                </div>
              </Link>

              <Link href="/projets/transformation-d-un-atelier-en-logement-champagne-en-valromey" className="group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={imgFacadeCHV1}
                    alt="Transformation atelier en logement Champagne-en-Valromey"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold group-hover:text-accent transition-colors">Ferme bugiste</h3>
                    <p className="text-sm text-muted-foreground">Transformation d'un atelier en logement</p>
                  </div>
                  <span className="text-sm text-muted-foreground">Champagne-en-Valromey</span>
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
                Durée totale : 8 à 14 mois selon l'ampleur.
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

        {/* Zones d'intervention */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-8 max-w-6xl">
            <div className="max-w-2xl mb-16">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4">
                Zone d'intervention
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                Extension par<br />territoire
              </h2>
              <p className="text-lg text-muted-foreground">
                Nous intervenons à Lyon et dans toute la région pour vos projets d'extension.
                Chaque territoire a ses contraintes urbanistiques et ses typologies constructives.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-background rounded-xl">
                <h3 className="font-semibold mb-3">Lyon & Métropole</h3>
                <p className="text-sm text-muted-foreground">
                  Extensions en zone urbaine dense, PLU strict, contraintes de mitoyenneté.
                  Surélévation et optimisation de l'emprise au sol, intégration dans le tissu existant.
                </p>
              </div>
              <div className="p-6 bg-background rounded-xl">
                <h3 className="font-semibold mb-3">Monts du Lyonnais & Ouest</h3>
                <p className="text-sm text-muted-foreground">
                  Extension de maisons en pisé et terre crue. Continuité avec les matériaux
                  d'origine, respect de la perspirance des murs, intégration paysagère.
                </p>
              </div>
              <div className="p-6 bg-background rounded-xl">
                <h3 className="font-semibold mb-3">Ain & Bugey</h3>
                <p className="text-sm text-muted-foreground">
                  Agrandissement de fermes et granges, transformation de bâtiments agricoles.
                  Pierre locale, charpentes traditionnelles, volumes généreux à révéler.
                </p>
              </div>
              <div className="p-6 bg-background rounded-xl">
                <h3 className="font-semibold mb-3">Nord-Isère & Beaujolais</h3>
                <p className="text-sm text-muted-foreground">
                  Surélévation de maisons, aménagement de combles, extension de pavillons.
                  Ossature bois, isolation performante, intégration dans le paysage local.
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
              Premier échange gratuit pour discuter de l'extension de votre maison.
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
