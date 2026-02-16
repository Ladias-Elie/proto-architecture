import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rénovation Appartement Lyon | Architecte DPLG',
  description: 'Rénovation appartement Lyon par un architecte DPLG. Canuts Croix-Rousse, haussmannien, années 60. Cuisine, salle de bain. Matériaux écologiques.',
  alternates: {
    canonical: '/renovation-appartement-lyon',
  },
  openGraph: {
    title: 'Rénovation Appartement Lyon | prôto.architecture',
    description: 'Rénovation appartement Lyon par un architecte DPLG. Canuts, haussmannien, années 60. Matériaux écologiques.',
    url: 'https://proto-architecture.fr/renovation-appartement-lyon',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rénovation Appartement Lyon | prôto.architecture',
    description: 'Rénovation appartement Lyon par un architecte DPLG. Canuts, haussmannien, années 60. Matériaux écologiques.',
  },
};

export default function RenovationAppartementLyonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
