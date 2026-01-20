import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "À propos | Architecte Lyon - Rénovation & Transformation",
  description: "prôto.architecture, atelier d'architecture lyonnais dédié à la rénovation écologique et la transformation du bâti existant. Approche durable et responsable par Camille Brachet, architecte EPFL.",
  alternates: {
    canonical: '/a-propos',
  },
  openGraph: {
    title: "À propos | Architecte Lyon - Rénovation & Transformation",
    description: "prôto.architecture, atelier d'architecture lyonnais dédié à la rénovation écologique et la transformation du bâti existant.",
    url: 'https://proto-architecture.fr/a-propos',
    type: 'website',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
