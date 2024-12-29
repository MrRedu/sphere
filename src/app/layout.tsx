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
  authors: [
    { name: '(Mr Redu) - Eduardo R.', url: 'https://github.com/MrRedu' },
  ],
  creator: 'Mr Redu',
  description:
    'Welcome to Sphere, your ultimate portal to the fascinating universe of anime. With our web application, you can explore a vast collection of anime. Search your favorite series by name, rating or category and discover new titles that match your tastes. In addition, you can save your favorite anime in a favorites list, making it easy to access at any time. With an intuitive and responsive interface, Sphere offers you a smooth and enjoyable experience as you navigate through the world of anime. Join us and transform the way you enjoy anime.',
  keywords: [
    'Sphere',
    'anime',
    'AniList',
    'anime app',
    'anime tracking',
    'anime search',
  ],
  openGraph: {
    title: 'Sphere | Your gateway to the anime universe',
    description: `Your ultimate portal to the fascinating universe of anime. With our web application, you can explore a vast collection of anime. Search your favorite series by name, rating or category and discover new titles that match your tastes. In addition, you can save your favorite anime in a favorites list, making it easy to access at any time. With an intuitive and responsive interface, Sphere offers you a smooth and enjoyable experience as you navigate through the world of anime. Join us and transform the way you enjoy anime`,
    url: 'https://sphere-mrredu.vercel.app/',
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
    locale: 'en-US',
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
