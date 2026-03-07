import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

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
  title: 'Nova Interior design - Toko Furniture & Desain Interior Terbaik di Banjarmasin',
  description:
    'Nova Interior design adalah toko mebel furniture dan jasa desain interior terbaik di Banjarmasin. Jual sofa, meja, kursi, lemari, tempat tidur berkualitas premium dengan harga terjangkau. Melayani konsultasi desain interior.',
  keywords: [
    'nova interior design',
    'nova interior banjarmasin',
    'toko furniture banjarmasin',
    'desain interior banjarmasin',
    'toko meubel terbaik banjarmasin',
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
  authors: [{ name: 'Nova Interior design' }],
  creator: 'Nova Interior design',
  publisher: 'Nova Interior design',
  openGraph: {
    title: 'Nova Interior design - Toko Furniture & Desain Interior Terbaik',
    description:
      'Nova Interior design adalah toko furniture dan jasa desain interior terbaik di Banjarmasin. Sedia sofa, meja, kursi, lemari, tempat tidur berkualitas.',
    locale: 'id_ID',
    type: 'website',
    siteName: 'Nova Interior design',
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
              name: 'Nova Interior design',
              description:
                'Nova Interior design adalah toko furniture dan jasa desain interior terbaik di Banjarmasin. Jual sofa, meja, kursi, lemari, tempat tidur berkualitas premium.',
              url: '/',
              telephone: '+62-896-9253-0975',
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
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Analytics />
      </body>
    </html>
  )
}
