import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="w-full bg-black p-8">
      <div className="flex w-full items-center justify-between gap-x-12 gap-y-6 text-center md:justify-between">
        <Image
          src="/logotype.svg"
          alt="Logotype Sphere"
          width={220}
          height={100}
          loading="lazy"
          className="h-8"
        />

        <nav className="flex flex-wrap items-center gap-x-8 gap-y-2">
          <Link
            href="https://github.com/MrRedu/sphere/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-light hover:text-primary/60 focus:text-primary/60"
          >
            License
          </Link>
          <Link
            href="https://github.com/MrRedu/sphere/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-light hover:text-primary/60 focus:text-primary/60"
          >
            Contribute
          </Link>
          <Link
            href="https://github.com/MrRedu/sphere"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-light hover:text-primary/60 focus:text-primary/60"
          >
            GitHub
          </Link>
          <Link
            href="https://github.com/MrRedu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-light hover:text-primary/60 focus:text-primary/60"
          >
            Developer
          </Link>
        </nav>
      </div>
      <p className="mb-4 mt-4 block border-t border-primary pt-4 text-center text-sm text-gray-600 md:mb-0">
        {new Date().getFullYear()} © Sphere
      </p>
    </footer>
  )
}
