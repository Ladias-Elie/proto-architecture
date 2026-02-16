'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

// Images CHV (ferme bugiste)
import heroImage from '@/assets/CHV/images/proto architecture_renovation maison_bugey_01-facade.webp';
import imgFacade2 from '@/assets/CHV/images/proto architecture_renovation maison_bugey_08-facade.webp';
// Images BAG (maison bigourdane)
import imgInterieurBAG from '@/assets/BAG/images/maison_bigorre_06-interieur.webp';
import imgFacadeBAG from '@/assets/BAG/images/maison_bigorre_11-facade.webp';

export default function RenovationMaisonLyon() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "prôto.architecture - Rénovation Maison Ancienne Lyon",
    "description": "Architecte spécialisé en rénovation de maisons anciennes à Lyon et région. Maisons en pisé, pierre, corps de ferme. Rénovation lourde, extension, rénovation énergétique. Matériaux biosourcés.",
    "url": "https://proto-architecture.fr/renovation-maison-lyon",
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
    "serviceType": ["Rénovation maison ancienne Lyon", "Rénovation maison pisé", "Rénovation corps de ferme", "Rénovation maison pierre", "Extension maison Lyon"],
    "priceRange": "€€€"
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quel budget pour rénover une maison ancienne ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rénovation légère (rafraîchissement, peinture, sols) : 500-800€/m². Rénovation lourde (structure, toiture, planchers, réseaux) : 1 500-2 500€/m². Rénovation globale avec extension : 2 000-3 500€/m². Pour une maison de 150m², comptez entre 225 000€ et 375 000€ en rénovation lourde."
        }
      },
      {
        "@type": "Question",
        "name": "Peut-on rénover une maison en pisé ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, le pisé est un matériau durable qui se rénove très bien avec les techniques adaptées. Il faut respecter la perspirance des murs (pas d'enduit ciment, pas d'isolation par l'extérieur étanche), traiter les remontées capillaires et utiliser des enduits à la chaux. Le pisé offre une excellente inertie thermique."
        }
      },
      {
        "@type": "Question",
        "name": "Faut-il un permis de construire pour rénover une maison ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Une déclaration préalable suffit pour les travaux modifiant l'aspect extérieur (ravalement, fenêtres, toiture). Un permis de construire est nécessaire pour les extensions de plus de 40m² en zone urbaine (20m² hors zone urbaine), les changements de destination, ou si la surface totale dépasse 150m² après travaux (architecte obligatoire)."
        }
      },
      {
        "@type": "Question",
        "name": "Combien de temps dure la rénovation d'une maison ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Études et autorisations : 4 à 8 mois. Travaux de rénovation lourde : 8 à 14 mois. Rénovation globale avec extension : 12 à 18 mois. La durée dépend de l'ampleur des travaux, de l'état initial et des contraintes administratives."
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
      question: "Quel budget pour rénover une maison ancienne ?",
      answer: (
        <div className="space-y-4">
          <p className="text-muted-foreground">Le budget dépend de la surface, de l'état de la structure, de la toiture et du niveau de finitions souhaité. Pour une maison de 150m², comptez entre 225 000€ et 375 000€ en rénovation lourde.</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-2xl font-bold">500-800€</p>
              <p className="text-sm text-muted-foreground">/m² rénovation légère</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-2xl font-bold">1 500-2 500€</p>
              <p className="text-sm text-muted-foreground">/m² rénovation lourde</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-2xl font-bold">2 000-3 500€</p>
              <p className="text-sm text-muted-foreground">/m² avec extension</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-2xl font-bold">2 500-4 000€</p>
              <p className="text-sm text-muted-foreground">/m² rénovation écologique</p>
            </div>
          </div>
        </div>
      )
    },
    {
      question: "Peut-on rénover une maison en pisé ?",
      answer: (
        <div className="space-y-3 text-muted-foreground">
          <p>Oui, le pisé est un matériau <strong className="text-foreground">durable et noble</strong> qui se rénove très bien avec les techniques adaptées.</p>
          <p><span className="font-semibold text-foreground">Perspirance :</span> il faut respecter la capacité du mur à "respirer" — pas d'enduit ciment ni d'isolation étanche par l'extérieur.</p>
          <p><span className="font-semibold text-foreground">Humidité :</span> traitement des remontées capillaires, drainage périphérique, enduits à la chaux.</p>
          <p><span className="font-semibold text-foreground">Inertie thermique :</span> les murs en pisé offrent une excellente régulation thermique naturelle, à valoriser plutôt qu'à masquer.</p>
        </div>
      )
    },
    {
      question: "Faut-il un permis de construire pour rénover une maison ?",
      answer: (
        <div className="space-y-3 text-muted-foreground">
          <p><span className="font-semibold text-foreground">Déclaration préalable :</span> travaux modifiant l'aspect extérieur (ravalement, fenêtres, toiture)</p>
          <p><span className="font-semibold text-foreground">Permis de construire :</span> extensions de plus de 40m² en zone urbaine (20m² hors zone urbaine), changements de destination</p>
          <p><span className="font-semibold text-foreground">Architecte obligatoire :</span> si la surface totale dépasse 150m² après travaux</p>
          <p>Nous gérons l'ensemble des démarches administratives et le suivi des autorisations.</p>
        </div>
      )
    },
    {
      question: "Combien de temps dure la rénovation d'une maison ?",
      answer: (
        <div className="space-y-3 text-muted-foreground">
          <p><span className="font-semibold text-foreground">Études et autorisations :</span> 4 à 8 mois (esquisse, permis, consultation des entreprises)</p>
          <p><span className="font-semibold text-foreground">Travaux rénovation lourde :</span> 8 à 14 mois selon l'ampleur</p>
          <p><span className="font-semibold text-foreground">Rénovation avec extension :</span> 12 à 18 mois au total</p>
          <p>La durée dépend de l'état initial, de l'ampleur des travaux et des contraintes administratives (ABF, PLU).</p>
        </div>
      )
    }
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
        { name: 'Rénovation Maison Lyon', url: 'https://proto-architecture.fr/renovation-maison-lyon' },
      ]} />
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="pt-24 min-h-[90vh] relative flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src={heroImage}
              alt="Rénovation maison ancienne Lyon - façade ferme bugiste rénovée"
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
                Rénovation<br />
                de maison<br />
                ancienne
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Maisons en pisé, pierre, corps de ferme — nous accompagnons la transformation
                de votre maison avec une approche écologique et respectueuse du bâti ancien.
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

        {/* Types de maisons - Bento grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-8 max-w-6xl">
            <div className="max-w-2xl mb-16">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4">
                Nos interventions
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                Maisons anciennes
              </h2>
              <p className="text-lg text-muted-foreground">
                Chaque type de maison a ses spécificités constructives. Nous adaptons notre approche
                aux matériaux d'origine et au potentiel de votre bâtiment.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {/* Grande carte - Pisé */}
              <div className="md:col-span-2 md:row-span-2 group rounded-2xl border border-accent/20 hover:border-accent/40 transition-colors bg-accent/5 p-8 flex flex-col justify-between min-h-[400px]">
                <span className="text-6xl font-bold text-accent/10">01</span>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Maisons en pisé</h3>
                  <p className="text-muted-foreground mb-4 max-w-md">
                    Le pisé est le matériau emblématique de la région lyonnaise. Murs épais en terre crue,
                    gestion de l'humidité, perspirance — nous maîtrisons les techniques de rénovation
                    adaptées à ce patrimoine vernaculaire.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Monts du Lyonnais', 'Terre crue', 'Murs épais', 'Perspirance', 'Enduits chaux'].map(q => (
                      <span key={q} className="text-xs px-3 py-1 bg-background/80 rounded-full border border-border">{q}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Carte Pierre */}
              <div className="group rounded-2xl border border-border hover:border-accent/30 transition-colors bg-muted/30 p-6 flex flex-col justify-between min-h-[200px]">
                <span className="text-4xl font-bold text-accent/10">02</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">Maisons en pierre</h3>
                  <p className="text-sm text-muted-foreground">
                    Ain, Bugey, Beaujolais — pierre locale, enduits à la chaux,
                    restauration de façades. Préservation du caractère et isolation performante.
                  </p>
                </div>
              </div>

              {/* Carte Corps de ferme */}
              <div className="group rounded-2xl border border-border hover:border-accent/30 transition-colors bg-muted/30 p-6 flex flex-col justify-between min-h-[200px]">
                <span className="text-4xl font-bold text-accent/10">03</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">Corps de ferme & granges</h3>
                  <p className="text-sm text-muted-foreground">
                    Transformation, changement de destination, création de logements.
                    Des volumes généreux à révéler et à habiter.
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
                      <h3 className="font-semibold mb-1">Rénovation lourde / globale</h3>
                      <p className="text-sm text-muted-foreground">
                        Reprise de la structure, toiture, planchers, réseaux. Un projet global
                        pour redonner vie à une maison ancienne dans son intégralité.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-bold">02</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Rénovation énergétique</h3>
                      <p className="text-sm text-muted-foreground">
                        Isolation biosourcée (fibre de bois, chanvre, ouate de cellulose),
                        menuiseries performantes, chauffage adapté. Confort et économies d'énergie.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-bold">03</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Extension & surélévation</h3>
                      <p className="text-sm text-muted-foreground">
                        Agrandissement de la maison, véranda bioclimatique, pièce supplémentaire.
                        Intégration architecturale respectueuse du bâti existant.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-bold">04</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Transformation de grange</h3>
                      <p className="text-sm text-muted-foreground">
                        Changement de destination, création de logement dans un bâtiment agricole.
                        Permis de construire, études structure, aménagement des volumes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden bg-muted">
                  <Image
                    src={imgInterieurBAG}
                    alt="Rénovation intérieure maison ancienne - intérieur rénové"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-4 rounded-xl shadow-lg">
                  <p className="text-sm font-medium">Patrimoine rénové</p>
                  <p className="text-xs opacity-80">avec soin et expertise</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Réalisations maisons */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-8 max-w-6xl">
            <div className="flex justify-between items-end mb-16">
              <div>
                <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4">
                  Portfolio
                </p>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
                  Réalisations<br />en maison
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
                    src={imgFacade2}
                    alt="Rénovation ferme bugiste Champagne-en-Valromey"
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

              <Link href="/projets/renovation-d-une-maison-bigourdane-bagnere-de-bigorre" className="group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={imgFacadeBAG}
                    alt="Rénovation maison bigourdane Bagnère-de-Bigorre"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold group-hover:text-accent transition-colors">Maison bigourdane</h3>
                    <p className="text-sm text-muted-foreground">Rénovation d'une maison traditionnelle</p>
                  </div>
                  <span className="text-sm text-muted-foreground">Bagnère-de-Bigorre</span>
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
                Durée totale : 6 à 18 mois selon l'ampleur.
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

        {/* Zones d'intervention - SEO local */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-8 max-w-6xl">
            <div className="max-w-2xl mb-16">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4">
                Zone d'intervention
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                Rénovation par<br />territoire
              </h2>
              <p className="text-lg text-muted-foreground">
                Nous intervenons à Lyon et dans toute la région pour la rénovation de maisons anciennes.
                Chaque territoire a ses typologies constructives et ses matériaux locaux.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-background rounded-xl">
                <h3 className="font-semibold mb-3">Monts du Lyonnais & Ouest lyonnais</h3>
                <p className="text-sm text-muted-foreground">
                  Territoire du pisé et de la terre crue. Maisons rurales aux murs épais,
                  fermes à rénover, granges à transformer. Rénovation respectueuse de la
                  perspirance et de l'inertie thermique des murs en terre.
                </p>
              </div>
              <div className="p-6 bg-background rounded-xl">
                <h3 className="font-semibold mb-3">Ain & Bugey</h3>
                <p className="text-sm text-muted-foreground">
                  Maisons en pierre, fermes bugistes, granges agricoles. Pierre locale,
                  charpentes traditionnelles, volumes généreux. Transformation de bâtiments
                  agricoles en habitations contemporaines.
                </p>
              </div>
              <div className="p-6 bg-background rounded-xl">
                <h3 className="font-semibold mb-3">Nord-Isère & Dauphiné</h3>
                <p className="text-sm text-muted-foreground">
                  Maisons rurales, corps de ferme dauphinois. Pisé et pierre,
                  rénovation énergétique, extension et surélévation. Accompagnement
                  complet des projets de rénovation lourde.
                </p>
              </div>
              <div className="p-6 bg-background rounded-xl">
                <h3 className="font-semibold mb-3">Beaujolais & Monts d'Or</h3>
                <p className="text-sm text-muted-foreground">
                  Pierre dorée, maisons vigneronnes, demeures de caractère. Restauration
                  de façades en pierre locale, rénovation intérieure, mise aux normes
                  énergétiques dans le respect du patrimoine.
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
              Premier échange gratuit pour discuter de la rénovation de votre maison.
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
