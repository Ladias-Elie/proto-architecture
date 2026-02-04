import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Architecte Rénovation Lyon | Appartements & Maisons anciennes | prôto.architecture',
  description: 'Architecte rénovation Lyon et alentours. Appartements anciens, maisons en pisé, en pierre, corps de ferme. Matériaux biosourcés. Premier échange gratuit.',
  alternates: {
    canonical: '/architecte-renovation-lyon',
  },
  openGraph: {
    title: 'Architecte Rénovation Lyon | prôto.architecture',
    description: 'Architecte rénovation écologique Lyon. Appartements, maisons en pisé, corps de ferme. Ain, Isère, Monts du Lyonnais.',
    url: 'https://proto-architecture.fr/architecte-renovation-lyon',
    type: 'website',
  },
};

export default function ArchitecteRenovationLyonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
