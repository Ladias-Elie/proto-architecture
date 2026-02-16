import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Extension Maison Lyon | Surélévation, Agrandissement',
  description: 'Architecte extension maison Lyon et région. Surélévation, agrandissement, véranda, aménagement de combles. Intégration architecturale, matériaux biosourcés. Devis gratuit.',
  alternates: {
    canonical: '/extension-maison-lyon',
  },
  openGraph: {
    title: 'Extension Maison Lyon | prôto.architecture',
    description: 'Architecte extension maison Lyon et région. Surélévation, agrandissement, véranda, aménagement de combles. Intégration architecturale, matériaux biosourcés.',
    url: 'https://proto-architecture.fr/extension-maison-lyon',
    type: 'website',
  },
};

export default function ExtensionMaisonLyonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
