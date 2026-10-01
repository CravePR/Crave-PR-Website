import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const BASE_URL = 'https://wearecrave.ca'

export const metadata: Metadata = {
  title: {
    template: '%s | Crave PR',
    default: 'Crave PR — Food & Agriculture Public Relations',
  },
  description:
    'Crave PR is a boutique public relations agency specializing in food, agriculture, agri-tech, and sustainability communications across Canada and North America. Founded in 2009 by Saskia Brussaard.',
  metadataBase: new URL(BASE_URL),
  openGraph: {
    siteName: 'Crave PR',
    type: 'website',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Crave PR',
  url: BASE_URL,
  description:
    'Crave PR is a boutique public relations agency specializing in food, agriculture, agri-tech, and sustainability communications across Canada and North America. Founded by Saskia Brussaard in 2009.',
  founder: {
    '@type': 'Person',
    name: 'Saskia Brussaard',
    jobTitle: 'Founder & Principal, Crave PR',
    url: `${BASE_URL}/about`,
    sameAs: ['https://www.linkedin.com/in/saskiabrussaard/'],
  },
  foundingDate: '2009',
  areaServed: ['Canada', 'United States'],
  email: 'saskia@wearecrave.ca',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className="min-h-screen flex flex-col bg-off-white text-charcoal antialiased"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
