import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Architecte Rénovation Lyon | Appartements & Maisons',
  description: 'Architecte rénovation Lyon et alentours. Appartements anciens, maisons en pisé, en pierre, corps de ferme. Matériaux biosourcés. Premier échange gratuit.',
  alternates: {
    canonical: '/architecte-renovation-lyon',
  },
  openGraph: {
    title: 'Architecte Rénovation Lyon | prôto.architecture',
    description: 'Architecte rénovation Lyon. Appartements anciens, maisons en pisé, en pierre, corps de ferme. Matériaux biosourcés.',
    url: 'https://proto-architecture.fr/architecte-renovation-lyon',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Architecte Rénovation Lyon | prôto.architecture',
    description: 'Architecte rénovation Lyon. Appartements anciens, maisons en pisé, en pierre, corps de ferme. Matériaux biosourcés.',
  },
};

export default function ArchitecteRenovationLyonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
