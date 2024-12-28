import Section from '@/components/atoms/Section'
import { Undo } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { TextScramble } from '@/components/atoms/ui/TextScramble'

export default function NotFoundPage() {
  return (
    <Section className="relative grid min-h-[calc(100vh-64px)] place-items-center">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-[14rem] font-black leading-none text-red-500">
          <TextScramble>#404</TextScramble>
        </h1>
        <h2 className="text-5xl font-bold">Page not found</h2>
        <Link
          href="/"
          className="mt-4 flex items-center gap-2 text-2xl font-bold uppercase text-primary hover:underline"
        >
          <Undo size={24} />
          Go back
        </Link>
      </div>
      <Image
        src="/404.png"
        alt="Error image"
        width={1000}
        height={800}
        className="absolute left-1/2 top-1/2 -z-10 w-full min-w-[600px] max-w-[736px] -translate-x-1/2 -translate-y-1/2 object-contain opacity-25"
      />
    </Section>
  )
}
