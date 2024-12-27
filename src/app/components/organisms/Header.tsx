import { UserCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 mx-auto flex h-full max-h-[64px] w-full max-w-screen-2xl items-center justify-between bg-[#111]/90 px-5 py-4 md:bg-transparent md:px-8 lg:px-12 2xl:px-16">
      <h1 className="hidden" aria-label="Go to landing page">
        Sphere
      </h1>
      <Link href="/">
        <Image
          src="/logo-mark.svg"
          alt="Logo mark Sphere"
          className="h-10 w-10"
          width={100}
          height={100}
        />
      </Link>
      <nav>
        <ul className="flex gap-4">
          <li>
            <a href="#">Popular</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <UserCircle size={40} />
    </header>
  )
}
