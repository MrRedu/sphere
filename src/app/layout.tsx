import './globals.css'

import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import { Footer } from '@/components/organisms/ui/Footer'
import { Header } from '@/components/organisms/ui/Header'
import { Providers } from '@/components/Providers'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | Sphere',
    default: 'Sphere: Tu Portal al Universo del Anime',
  },
  authors: [{ name: '(Redu) - Eduardo R.', url: 'https://github.com/MrRedu' }],
  creator: 'Mr Redu',
  description:
    'Bienvenido a Sphere, tu portal definitivo al fascinante universo del anime. Con nuestra aplicación web, podrás explorar una vasta colección de animes. Busca tus series favoritas por nombre, puntuación o categoría y descubre nuevos títulos que se ajusten a tus gustos. Además, podrás guardar tus animes preferidos en una lista de favoritos, facilitando su acceso en cualquier momento. Con una interfaz intuitiva y responsiva, Sphere te ofrece una experiencia fluida y agradable mientras navegas por el mundo del anime. Únete a nosotros y transforma tu forma de disfrutar el anime.',
  keywords: [
    'Sphere',
    'anime',
    'AniList',
    'aplicación de anime',
    'seguimiento de anime',
    'búsqueda de anime',
  ],
  openGraph: {
    title: 'Sphere | Tu Portal al Universo del Anime',
    description: `Tu portal definitivo al fascinante universo del anime. Con nuestra aplicación web, podrás explorar una vasta colección de animes. Busca tus series favoritas por nombre, puntuación o categoría y descubre nuevos títulos que se ajusten a tus gustos. Además, podrás guardar tus animes preferidos en una lista de favoritos, facilitando su acceso en cualquier momento. Con una interfaz intuitiva y responsiva, Sphere te ofrece una experiencia fluida y agradable mientras navegas por el mundo del anime. Únete a nosotros y transforma tu forma de disfrutar el anime.`,
    url: '',
    siteName: 'Sphere',
    images: [
      {
        url: '',
        width: 800,
        height: 600,
        alt: ``,
      },
      {
        url: '',
        width: 1800,
        height: 1600,
        alt: ``,
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative mx-auto min-h-screen max-w-screen-2xl antialiased`}
      >
        <Providers>
          <Header />
          <section className="mx-auto max-w-screen-2xl">{children}</section>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
