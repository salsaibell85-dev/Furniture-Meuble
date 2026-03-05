import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#6B4226',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Meubel Banjarmasin - Toko Furniture Terbaik & Terlengkap di Banjarmasin',
  description:
    'Toko meubel furniture Banjarmasin terbaik dan terlengkap. Jual sofa, meja, kursi, lemari, tempat tidur berkualitas dengan harga terjangkau. Buka 24 jam di Jl. Tembus Mantuil, Banjarmasin Selatan. Hubungi 0812-5644-0494.',
  keywords: [
    'toko meuble furniture banjarmasin',
    'toko toko meuble banjarmasin',
    'toko furniture banjarmasin',
    'toko meuble terbaik banjarmasin',
    'meubel banjarmasin',
    'furniture banjarmasin',
    'furniture murah banjarmasin',
    'toko mebel banjarmasin',
    'jual furniture banjarmasin',
    'sofa banjarmasin',
    'lemari banjarmasin',
    'meja banjarmasin',
    'kursi banjarmasin',
    'tempat tidur banjarmasin',
    'furniture kalimantan selatan',
    'meubel kalimantan selatan',
    'furniture minimalis banjarmasin',
    'furniture modern banjarmasin',
  ],
  authors: [{ name: 'Meubel Banjarmasin' }],
  creator: 'Meubel Banjarmasin',
  publisher: 'Meubel Banjarmasin',
  openGraph: {
    title: 'Meubel Banjarmasin - Toko Furniture Terbaik & Terlengkap',
    description:
      'Toko meubel furniture Banjarmasin terbaik dan terlengkap. Jual sofa, meja, kursi, lemari, tempat tidur berkualitas dengan harga terjangkau.',
    locale: 'id_ID',
    type: 'website',
    siteName: 'Meubel Banjarmasin',
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
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FurnitureStore',
              name: 'Meubel Banjarmasin',
              description:
                'Toko meubel furniture Banjarmasin terbaik dan terlengkap. Jual sofa, meja, kursi, lemari, tempat tidur berkualitas dengan harga terjangkau.',
              url: '/',
              telephone: '+62-812-5644-0494',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Jl. Tembus Mantuil, Kelayan Sel.',
                addressLocality: 'Banjarmasin',
                addressRegion: 'Kalimantan Selatan',
                postalCode: '70112',
                addressCountry: 'ID',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: -3.3345,
                longitude: 114.5917,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                  'Sunday',
                ],
                opens: '00:00',
                closes: '23:59',
              },
              priceRange: 'Rp',
              image: '/images/hero-living-room.jpg',
            }),
          }}
        />
      </head>
      <body
        className={`${plusJakarta.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
