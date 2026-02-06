import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobilier Sur-Mesure Lyon | Cuisine, Rangement, Bureau | prôto.architecture',
  description: 'Architecte mobilier sur-mesure Lyon. Cuisines, bibliothèques, meubles-ponts, bureaux, dressings. Design sur-mesure, matériaux écologiques. Collaboration artisans locaux.',
  alternates: {
    canonical: '/mobilier-sur-mesure-lyon',
  },
  openGraph: {
    title: 'Mobilier Sur-Mesure Lyon | prôto.architecture',
    description: 'Architecte mobilier sur-mesure Lyon. Cuisines, bibliothèques, meubles-ponts, bureaux, dressings. Design sur-mesure, matériaux écologiques.',
    url: 'https://proto-architecture.fr/mobilier-sur-mesure-lyon',
    type: 'website',
  },
};

export default function MobilierSurMesureLyonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
