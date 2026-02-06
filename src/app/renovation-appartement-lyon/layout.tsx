import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rénovation Appartement Lyon | Architecte DPLG | prôto.architecture',
  description: 'Architecte rénovation appartement Lyon. Canuts Croix-Rousse, haussmannien, années 60. Rénovation complète, cuisine, salle de bain. Matériaux écologiques. Devis gratuit.',
  alternates: {
    canonical: '/renovation-appartement-lyon',
  },
  openGraph: {
    title: 'Rénovation Appartement Lyon | prôto.architecture',
    description: 'Architecte rénovation appartement Lyon. Canuts Croix-Rousse, haussmannien, années 60. Rénovation complète, cuisine, salle de bain. Matériaux écologiques.',
    url: 'https://proto-architecture.fr/renovation-appartement-lyon',
    type: 'website',
  },
};

export default function RenovationAppartementLyonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
