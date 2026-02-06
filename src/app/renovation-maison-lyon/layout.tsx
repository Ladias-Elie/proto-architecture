import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rénovation Maison Ancienne Lyon | Pisé, Pierre, Corps de Ferme | prôto.architecture',
  description: 'Architecte rénovation maison ancienne Lyon et région. Maisons en pisé, pierre, corps de ferme. Rénovation lourde, extension, rénovation énergétique. Matériaux biosourcés. Devis gratuit.',
  alternates: {
    canonical: '/renovation-maison-lyon',
  },
  openGraph: {
    title: 'Rénovation Maison Ancienne Lyon | prôto.architecture',
    description: 'Architecte rénovation maison ancienne Lyon et région. Maisons en pisé, pierre, corps de ferme. Rénovation lourde, extension, rénovation énergétique. Matériaux biosourcés.',
    url: 'https://proto-architecture.fr/renovation-maison-lyon',
    type: 'website',
  },
};

export default function RenovationMaisonLyonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
