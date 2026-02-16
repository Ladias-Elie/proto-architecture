import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Extension Maison Lyon | Surélévation & Agrandissement',
  description: 'Extension maison Lyon et région. Surélévation, agrandissement, véranda, combles. Intégration architecturale et matériaux biosourcés. Devis gratuit.',
  alternates: {
    canonical: '/extension-maison-lyon',
  },
  openGraph: {
    title: 'Extension Maison Lyon | prôto.architecture',
    description: 'Extension maison Lyon et région. Surélévation, agrandissement, véranda, combles. Matériaux biosourcés.',
    url: 'https://proto-architecture.fr/extension-maison-lyon',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Extension Maison Lyon | prôto.architecture',
    description: 'Extension maison Lyon et région. Surélévation, agrandissement, véranda, combles. Matériaux biosourcés.',
  },
};

export default function ExtensionMaisonLyonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
