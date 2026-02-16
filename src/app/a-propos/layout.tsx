import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'À propos | Camille Brachet, Architecte Lyon',
  description: "prôto.architecture, atelier d'architecture à Lyon fondé par Camille Brachet (EPFL). Rénovation écologique et transformation durable du bâti existant.",
  alternates: {
    canonical: '/a-propos',
  },
  openGraph: {
    title: 'À propos | prôto.architecture',
    description: "Atelier d'architecture à Lyon fondé par Camille Brachet (EPFL). Rénovation écologique et transformation durable.",
    url: 'https://proto-architecture.fr/a-propos',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'À propos | prôto.architecture',
    description: "Atelier d'architecture à Lyon fondé par Camille Brachet (EPFL). Rénovation écologique et transformation durable.",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
