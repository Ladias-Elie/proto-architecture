import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobilier Sur-Mesure Lyon | Cuisine, Rangement, Bureau',
  description: 'Mobilier sur-mesure Lyon par un architecte. Cuisines, bibliothèques, bureaux, dressings. Matériaux écologiques, collaboration artisans locaux.',
  alternates: {
    canonical: '/mobilier-sur-mesure-lyon',
  },
  openGraph: {
    title: 'Mobilier Sur-Mesure Lyon | prôto.architecture',
    description: 'Mobilier sur-mesure Lyon par un architecte. Cuisines, bibliothèques, bureaux, dressings. Matériaux écologiques.',
    url: 'https://proto-architecture.fr/mobilier-sur-mesure-lyon',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobilier Sur-Mesure Lyon | prôto.architecture',
    description: 'Mobilier sur-mesure Lyon par un architecte. Cuisines, bibliothèques, bureaux, dressings. Matériaux écologiques.',
  },
};

export default function MobilierSurMesureLyonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
