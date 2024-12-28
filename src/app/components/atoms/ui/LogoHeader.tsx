'use client'

import Image from 'next/image'
import Link from 'next/link'

import useWindowSize from '@/hooks/useWindowSize'

export const LogoHeader = () => {
  const { width } = useWindowSize()

  if (width < 768) {
    return (
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Logotype Sphere"
          className="h-10 w-full"
          width={100}
          height={100}
        />
      </Link>
    )
  }
  return (
    <Link href="/">
      <Image
        src="/logotype.svg"
        alt="Logotype Sphere"
        className="h-8 w-full"
        width={100}
        height={100}
      />
    </Link>
  )
}
