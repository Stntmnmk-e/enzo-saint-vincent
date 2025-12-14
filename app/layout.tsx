import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl = 'https://enzosaintvincent.com'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Enzo Saint Vincent | Indie Rock Artist',
    template: '%s | Enzo Saint Vincent',
  },
  description: 'Official website of Enzo Saint Vincent. Nocturnal soundscapes meet raw emotion. Listen to the latest indie rock tracks and find upcoming tour dates.',
  keywords: ['Enzo Saint Vincent', 'indie rock', 'music', 'artist', 'musician', 'band', 'concerts', 'tour', 'atmospheric rock', 'alternative music'],
  authors: [{ name: 'Enzo Saint Vincent' }],
  creator: 'Enzo Saint Vincent',
  publisher: 'Enzo Saint Vincent',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Enzo Saint Vincent | Indie Rock Artist',
    description: 'Nocturnal soundscapes meet raw emotion. Crafting atmospheric indie rock.',
    url: siteUrl,
    siteName: 'Enzo Saint Vincent',
    images: [
      {
        url: '/images/hero.png',
        width: 1200,
        height: 630,
        alt: 'Enzo Saint Vincent - Indie Rock Artist',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enzo Saint Vincent | Indie Rock Artist',
    description: 'Nocturnal soundscapes meet raw emotion.',
    images: ['/images/hero.png'],
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MusicGroup',
    name: 'Enzo Saint Vincent',
    url: siteUrl,
    image: `${siteUrl}/images/hero.png`,
    genre: ['Indie Rock', 'Alternative Rock', 'Atmospheric Rock'],
    description: 'Nocturnal soundscapes meet raw emotion. Crafting atmospheric indie rock.',
    sameAs: [
      // Social Media Links hier einfügen wenn vorhanden
      // 'https://instagram.com/enzosaintvincent',
      // 'https://spotify.com/artist/...',
    ],
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
