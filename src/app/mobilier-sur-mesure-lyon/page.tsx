'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

// Images Colombier (meuble-pont)
import heroImage from '@/assets/Colombier/images/meuble-pont-chambre-lyon-7-jean-mace-vue-ensemble.webp';

// Images Colombier (meuble-pont)
import imgMeublePont2 from '@/assets/Colombier/images/coin-bureau-meuble-pont-lyon-jean-mace.webp';

// Image CHV (cuisine bugey)
import imgCuisineBugey from '@/assets/CHV/images/proto architecture_renovation maison_bugey_04-interieur.webp';

export default function MobilierSurMesureLyon() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "prôto.architecture - Mobilier Sur-Mesure Lyon",
    "description": "Architecte spécialisé en mobilier sur-mesure à Lyon. Cuisines, bibliothèques, meubles-ponts, bureaux, dressings. Design d'architecte, matériaux écologiques, collaboration avec artisans locaux.",
    "url": "https://proto-architecture.fr/mobilier-sur-mesure-lyon",
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
      { "@type": "AdministrativeArea", "name": "Métropole de Lyon" }
    ],
    "serviceType": ["Mobilier sur-mesure Lyon", "Cuisine sur-mesure", "Meuble-pont", "Agencement intérieur", "Bureau sur-mesure"],
    "priceRange": "€€"
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quel budget pour du mobilier sur-mesure ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Meuble-pont / bibliothèque : 3 000-8 000€. Cuisine sur-mesure complète : 8 000-20 000€. Bureau intégré : 2 000-5 000€. Dressing sur-mesure : 3 000-10 000€. Les prix dépendent des dimensions, des matériaux choisis et de la complexité de réalisation."
        }
      },
      {
        "@type": "Question",
        "name": "Pourquoi faire appel à un architecte pour du mobilier ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "L'architecte conçoit le mobilier en cohérence avec l'espace global : proportions, lumière, circulation, matériaux. Les plans d'exécution détaillés garantissent une fabrication précise. Le suivi de réalisation assure la qualité de la pose et des finitions."
        }
      },
      {
        "@type": "Question",
        "name": "Quels matériaux utilisez-vous ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Valchromat (panneaux de fibres de bois teintés dans la masse), panneaux de fibres de bois Unilin, bois massif local (chêne, hêtre), quincaillerie de qualité. Nous privilégions les matériaux durables, écologiques et fabriqués en Europe."
        }
      },
      {
        "@type": "Question",
        "name": "Combien de temps entre la commande et la pose ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Conception et plans : 2 à 4 semaines. Fabrication en atelier : 4 à 8 semaines. Pose : 1 à 3 jours selon la complexité. Comptez au total 2 à 3 mois entre la validation du projet et la livraison."
        }
      },
      {
        "@type": "Question",
        "name": "Travaillez-vous avec des menuisiers locaux ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, nous collaborons avec des menuisiers et artisans lyonnais. Cette proximité permet des échanges réguliers, des ajustements en cours de fabrication et une réactivité optimale pour la pose."
        }
      }
    ]
  };

  const steps = [
    { num: "01", title: "Premier échange", desc: "Besoins, budget, contraintes de l'espace" },
    { num: "02", title: "Relevé & conception", desc: "Mesures, plans 3D, choix des matériaux" },
    { num: "03", title: "Devis détaillé", desc: "Chiffrage précis, planning de réalisation" },
    { num: "04", title: "Fabrication", desc: "Suivi menuisier, contrôle qualité en atelier" },
    { num: "05", title: "Pose & livraison", desc: "Installation, ajustements, finitions" },
  ];

  const faqItems = [
    {
      question: "Quel budget pour du mobilier sur-mesure ?",
      answer: (
        <div className="space-y-4">
          <p className="text-muted-foreground">Le budget dépend des dimensions, des matériaux choisis et de la complexité de réalisation. Voici des fourchettes indicatives.</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-2xl font-bold">3 000-8 000€</p>
              <p className="text-sm text-muted-foreground">meuble-pont / bibliothèque</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-2xl font-bold">8 000-20 000€</p>
              <p className="text-sm text-muted-foreground">cuisine sur-mesure complète</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-2xl font-bold">2 000-5 000€</p>
              <p className="text-sm text-muted-foreground">bureau intégré</p>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <p className="text-2xl font-bold">3 000-10 000€</p>
              <p className="text-sm text-muted-foreground">dressing sur-mesure</p>
            </div>
          </div>
        </div>
      )
    },
    {
      question: "Pourquoi faire appel à un architecte pour du mobilier ?",
      answer: (
        <div className="space-y-3 text-muted-foreground">
          <p>L'architecte apporte une <strong className="text-foreground">vision globale de l'espace</strong> que le mobilier vient servir.</p>
          <p><span className="font-semibold text-foreground">Cohérence :</span> le mobilier est conçu en relation avec l'architecture du lieu — proportions, lumière, circulation, matériaux.</p>
          <p><span className="font-semibold text-foreground">Précision :</span> les plans d'exécution détaillés garantissent une fabrication exacte, sans mauvaises surprises à la pose.</p>
          <p><span className="font-semibold text-foreground">Suivi :</span> nous accompagnons la réalisation du premier croquis à la livraison, en lien avec le menuisier.</p>
        </div>
      )
    },
    {
      question: "Quels matériaux utilisez-vous ?",
      answer: (
        <div className="space-y-3 text-muted-foreground">
          <p><span className="font-semibold text-foreground">Valchromat :</span> panneau de fibres de bois teinté dans la masse, résistant, coloré, écologique (65% fibres recyclées)</p>
          <p><span className="font-semibold text-foreground">Panneaux Unilin :</span> fibres de bois haute densité, finitions mates, large palette de teintes</p>
          <p><span className="font-semibold text-foreground">Bois massif local :</span> chêne, hêtre, issus de forêts gérées durablement</p>
          <p>Nous privilégions les matériaux durables, fabriqués en Europe, avec un faible impact environnemental.</p>
        </div>
      )
    },
    {
      question: "Combien de temps entre la commande et la pose ?",
      answer: (
        <div className="space-y-3 text-muted-foreground">
          <p><span className="font-semibold text-foreground">Conception et plans :</span> 2 à 4 semaines</p>
          <p><span className="font-semibold text-foreground">Fabrication en atelier :</span> 4 à 8 semaines selon la complexité</p>
          <p><span className="font-semibold text-foreground">Pose :</span> 1 à 3 jours selon le volume du mobilier</p>
          <p>Comptez au total 2 à 3 mois entre la validation du projet et la livraison.</p>
        </div>
      )
    },
    {
      question: "Travaillez-vous avec des menuisiers locaux ?",
      answer: (
        <div className="space-y-3 text-muted-foreground">
          <p>Oui, nous collaborons avec des <strong className="text-foreground">menuisiers et artisans lyonnais</strong>, notamment Vinel & Fils.</p>
          <p><span className="font-semibold text-foreground">Proximité :</span> échanges réguliers en atelier, ajustements en cours de fabrication</p>
          <p><span className="font-semibold text-foreground">Qualité :</span> contrôle des finitions, vérification des assemblages avant livraison</p>
          <p><span className="font-semibold text-foreground">Réactivité :</span> pose rapide, ajustements sur place si nécessaire</p>
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
        { name: 'Mobilier Sur-Mesure Lyon', url: 'https://proto-architecture.fr/mobilier-sur-mesure-lyon' },
      ]} />
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="pt-24 min-h-[90vh] relative flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src={heroImage}
              alt="Mobilier sur-mesure Lyon - meuble-pont chambre"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
          </div>

          <div className="container mx-auto px-8 max-w-6xl relative z-10">
            <div className="max-w-2xl space-y-8">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent">
                Lyon
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.9]">
                Mobilier<br />
                sur-mesure
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Design d'architecte, fabrication artisanale, matériaux écologiques —
                du mobilier conçu pour votre espace et fabriqué par des artisans locaux.
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
                Premier échange gratuit • Collaboration artisans locaux
              </p>
            </div>
          </div>
        </section>

        {/* Types de mobilier - Bento grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-8 max-w-6xl">
            <div className="max-w-2xl mb-16">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4">
                Nos réalisations
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                Types de mobilier
              </h2>
              <p className="text-lg text-muted-foreground">
                Chaque meuble est dessiné sur-mesure pour s'intégrer parfaitement
                à votre espace et répondre à vos usages.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {/* Grande carte - Cuisines */}
              <div className="md:col-span-2 md:row-span-2 group rounded-2xl border border-accent/20 hover:border-accent/40 transition-colors bg-accent/5 p-8 flex flex-col justify-between min-h-[400px]">
                <span className="text-6xl font-bold text-accent/10">01</span>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Cuisines sur-mesure</h3>
                  <p className="text-muted-foreground mb-4 max-w-md">
                    Plan de travail, rangements, intégration électroménager. Conception fonctionnelle
                    et épurée en valchromat, bois massif ou panneaux de fibres de bois.
                    Chaque cuisine est pensée pour vos usages quotidiens.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Valchromat', 'Bois massif', 'Rangements', 'Sur-mesure', 'Épuré'].map(q => (
                      <span key={q} className="text-xs px-3 py-1 bg-background/80 rounded-full border border-border">{q}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Carte Meubles-ponts */}
              <div className="group rounded-2xl border border-border hover:border-accent/30 transition-colors bg-muted/30 p-6 flex flex-col justify-between min-h-[200px]">
                <span className="text-4xl font-bold text-accent/10">02</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">Meubles-ponts & rangements</h3>
                  <p className="text-sm text-muted-foreground">
                    Optimisation de l'espace, dressing, bibliothèque, intégration lit et bureau.
                    Chaque centimètre est exploité avec intelligence.
                  </p>
                </div>
              </div>

              {/* Carte Bureaux */}
              <div className="group rounded-2xl border border-border hover:border-accent/30 transition-colors bg-muted/30 p-6 flex flex-col justify-between min-h-[200px]">
                <span className="text-4xl font-bold text-accent/10">03</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">Bureaux & espaces de travail</h3>
                  <p className="text-sm text-muted-foreground">
                    Bureau intégré, poste de télétravail, optimisation des m².
                    Un espace de travail fonctionnel sans sacrifier la chambre.
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
                  Du dessin<br />à la pose
                </h2>

                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-bold">01</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Design d'architecte</h3>
                      <p className="text-sm text-muted-foreground">
                        Conception 3D, plans d'exécution, détails techniques au millimètre.
                        Le mobilier est pensé en cohérence avec l'espace global.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-bold">02</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Matériaux choisis</h3>
                      <p className="text-sm text-muted-foreground">
                        Valchromat, panneaux fibre de bois Unilin, bois massif local.
                        Des matériaux durables, écologiques et fabriqués en Europe.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-bold">03</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Fabrication artisanale</h3>
                      <p className="text-sm text-muted-foreground">
                        Collaboration avec des menuisiers locaux, notamment Vinel & Fils.
                        Suivi en atelier, contrôle qualité, ajustements.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-bold">04</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Pose et finitions</h3>
                      <p className="text-sm text-muted-foreground">
                        Suivi de chantier, ajustements sur place, vérification des finitions.
                        Livraison soignée et mise en service du mobilier.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-2xl overflow-hidden bg-muted">
                  <Image
                    src={imgMeublePont2}
                    alt="Coin bureau meuble-pont sur-mesure Lyon 7 Jean Macé"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-4 rounded-xl shadow-lg">
                  <p className="text-sm font-medium">Fabrication locale</p>
                  <p className="text-xs opacity-80">artisans lyonnais</p>
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
                  Réalisations<br />mobilier
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
                    src={imgCuisineBugey}
                    alt="Cuisine sur-mesure maison bugiste - plan de travail et carrelage vert"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold group-hover:text-accent transition-colors">Cuisine maison bugiste</h3>
                    <p className="text-sm text-muted-foreground">Transformation d'un atelier en logement</p>
                  </div>
                  <span className="text-sm text-muted-foreground">Ain</span>
                </div>
              </Link>

              <Link href="/projets/construction-d-un-meuble-pont-dans-un-appartement-lyonnais-lyon-7" className="group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={heroImage}
                    alt="Meuble-pont sur-mesure Lyon 7 Jean Macé"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold group-hover:text-accent transition-colors">Meuble-pont</h3>
                    <p className="text-sm text-muted-foreground">Construction d'un meuble-pont chambre</p>
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
                Du premier échange à la livraison, un accompagnement en 5 étapes.
                Durée totale : 2 à 3 mois.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-4">
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

        {/* Zone d'intervention */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-8 max-w-6xl">
            <div className="max-w-2xl mb-16">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4">
                Zone d'intervention
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                Où intervenons-nous ?
              </h2>
              <p className="text-lg text-muted-foreground">
                Nous concevons et réalisons du mobilier sur-mesure principalement à Lyon et dans la Métropole.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-background rounded-xl">
                <h3 className="font-semibold mb-3">Lyon & Métropole</h3>
                <p className="text-sm text-muted-foreground">
                  Tous arrondissements de Lyon, Villeurbanne, première couronne.
                  Relevé de mesures, suivi de fabrication et pose inclus.
                  Proximité avec nos artisans menuisiers partenaires.
                </p>
              </div>
              <div className="p-6 bg-background rounded-xl">
                <h3 className="font-semibold mb-3">Au-delà de Lyon</h3>
                <p className="text-sm text-muted-foreground">
                  Déplacement possible en Auvergne-Rhône-Alpes et au-delà.
                  Livraison et pose incluses dans notre prestation.
                  Contactez-nous pour discuter de votre projet.
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
              Premier échange gratuit pour discuter de votre mobilier sur-mesure.
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
