import type { Metadata } from 'next'
import { Providers } from './providers'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://proto-architecture.fr'),
  title: {
    default: 'prôto.architecture | Architecte Rénovation Lyon',
    template: '%s | prôto.architecture'
  },
  description: 'Architecte rénovation Lyon spécialisé en rénovation lourde, énergétique et écologique. Transformation et réhabilitation d\'espaces existants avec une approche durable.',
  keywords: [
    'architecte',
    'Lyon',
    'rénovation',
    'réhabilitation',
    'transformation',
    'architecture',
    'durable',
    'écologique',
    'énergétique',
    'maison',
    'appartement',
    'extension',
    'surélévation',
    'restructuration'
  ],
  authors: [{ name: 'prôto.architecture' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://proto-architecture.fr',
    siteName: 'prôto.architecture',
    title: 'prôto.architecture | Architecte Rénovation Lyon',
    description: 'Architecte rénovation Lyon spécialisé en rénovation lourde, énergétique et écologique.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'prôto.architecture | Architecte Rénovation Lyon',
    description: 'Architecte rénovation Lyon spécialisé en rénovation lourde, énergétique et écologique.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
