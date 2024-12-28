import Image from 'next/image'
import Link from 'next/link'

const links = [
  {
    href: 'https://github.com/MrRedu/sphere/blob/main/LICENSE',
    label: 'License',
  },
  {
    href: 'https://github.com/MrRedu',
    label: 'Developer',
  },
  {
    href: 'https://github.com/MrRedu/sphere/issues',
    label: 'Contribute',
  },
  {
    href: 'https://github.com/MrRedu/sphere',
    label: 'Source Code',
  },
]

export const Footer = () => {
  return (
    <footer className="relative flex w-full flex-col justify-between gap-x-12 gap-y-6 p-8 pt-48 text-center lg:flex-row lg:items-center lg:justify-between">
      <div className="absolute left-0 right-0 top-0 mx-auto h-[2px] w-[95%] animate-pulse rounded-full bg-primary" />
      <div className="absolute left-0 right-0 top-0 mx-auto h-[2px] w-[50%] animate-ping rounded-full bg-red-500" />
      <Image
        src="/logotype.svg"
        alt="Logotype Sphere"
        width={800}
        height={192}
        loading="lazy"
        className="h-48"
      />

      <nav className="flex flex-col items-start gap-x-8 gap-y-2 lg:items-end">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-light hover:text-primary/60 focus:text-primary/60"
          >
            {label}
          </Link>
        ))}
      </nav>
    </footer>
  )
}
