import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rénovation Maison Ancienne Lyon | Pisé & Pierre',
  description: 'Rénovation maison ancienne Lyon et région. Maisons en pisé, pierre, corps de ferme. Rénovation lourde, extension, rénovation énergétique. Devis gratuit.',
  alternates: {
    canonical: '/renovation-maison-lyon',
  },
  openGraph: {
    title: 'Rénovation Maison Ancienne Lyon | prôto.architecture',
    description: 'Rénovation maison ancienne Lyon et région. Maisons en pisé, pierre, corps de ferme. Rénovation lourde et énergétique.',
    url: 'https://proto-architecture.fr/renovation-maison-lyon',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rénovation Maison Ancienne Lyon | prôto.architecture',
    description: 'Rénovation maison ancienne Lyon et région. Maisons en pisé, pierre, corps de ferme. Rénovation lourde et énergétique.',
  },
};

export default function RenovationMaisonLyonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
