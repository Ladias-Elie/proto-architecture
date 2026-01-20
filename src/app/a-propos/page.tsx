'use client'

import { Metadata } from 'next'
import { useRouter } from 'next/navigation'
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/analytics"

export default function AboutPage() {
  const router = useRouter()

  const handleContactClick = () => {
    router.push("/")
    setTimeout(() => {
      trackEvent({
        category: "CTA",
        action: "Click",
        label: "About Page Contact Button",
      })
      const contactSection = document.getElementById('contact')
      contactSection?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 100)
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "À propos de prôto.architecture",
    "description": "Atelier d'architecture lyonnais spécialisé dans la rénovation écologique, reconversion et transformation durable du bâti existant",
    "mainEntity": {
      "@type": "ProfessionalService",
      "name": "prôto.architecture",
      "description": "Atelier d'architecture dédié à la rénovation écologique et la transformation du bâti existant",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lyon",
        "addressCountry": "FR"
      },
      "founder": {
        "@type": "Person",
        "name": "Camille Brachet",
        "jobTitle": "Architecte",
        "alumniOf": "École Polytechnique Fédérale de Lausanne"
      }
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-background">
        <Navigation />

        <main className="pt-32 pb-20">
          <section className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl text-foreground mb-6 font-light tracking-tight">
                prôto.architecture
              </h1>

              <p className="text-xl md:text-2xl text-foreground/70 mb-16 font-light leading-relaxed">
                Concevoir des espaces généreux, durables et ancrés dans leur territoire.
              </p>

              {/* Section 1 - Présentation de l'atelier */}
              <div className="space-y-6 text-foreground/80 text-lg leading-relaxed mb-20">
                <p>
                  <strong>prôto.architecture</strong> est un atelier d'architecture basé à Lyon, dédié à la réhabilitation et à la transformation du bâti existant. Notre approche architecturale met l'accent sur la valorisation du "déjà-là" par le respect du lieu et de son contexte, le choix de matériaux locaux et le travail de la matière première, et la conception de scénarios élaborés avec les habitants, adaptés aux usages.
                </p>
                <p>
                  Nous croyons que l'architecture doit être à la fois poétique, fonctionnelle et responsable, attentive à la lumière, aux usages et aux ressources du territoire. Chaque projet est l'occasion de révéler le potentiel d'un lieu en créant des espaces généreux, confortables et durables, pensés pour celles et ceux qui les habitent au quotidien.
                </p>
                <p>
                  Notre travail s'inscrit dans une démarche de sobriété constructive, privilégiant la pérennité, la simplicité et la qualité des matériaux.
                </p>
              </div>

              {/* Section 2 - À propos de l'architecte */}
              <div className="border-t border-border/50 pt-12">
                <h2 className="text-2xl md:text-3xl text-foreground mb-8 font-light">
                  Une approche humaine et engagée
                </h2>

                <div className="space-y-6 text-foreground/80 text-lg leading-relaxed relative">
                  <p className="relative">
                    L'atelier est fondé et dirigé par <strong>Camille Brachet</strong>, architecte - ingénieure, diplômée de l'École Polytechnique Fédérale de Lausanne (EPFL) en 2017. Après plusieurs expériences en France et à l'étranger, elle s'installe à Lyon en 2021 pour développer une pratique tournée vers la rénovation écologique et l'habitat sur mesure.
                  </p>
                  <p className="relative">
                    Son travail explore l'équilibre entre rationalité constructive et poésie de l'espace, avec une attention particulière portée à la lumière naturelle, aux matières brutes et à la cohérence environnementale des projets.
                  </p>
                  <p className="relative">
                    Chaque projet est avant tout une rencontre — entre un lieu, une histoire et des personnes prêtes à inventer ensemble une manière plus durable d'habiter.
                  </p>
                </div>
              </div>

              {/* Contact CTA */}
              <div className="mt-16 text-center">
                <p className="text-foreground/80 text-lg leading-relaxed mb-8">
                  Un projet en tête ? Discutons-en ensemble.
                </p>
                <Button
                  onClick={handleContactClick}
                  size="lg"
                  className="px-8 py-6 text-base"
                >
                  Prendre contact
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
