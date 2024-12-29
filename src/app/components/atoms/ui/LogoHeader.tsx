import Image from 'next/image'
import Link from 'next/link'

export const LogoHeader = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.svg"
        alt="Logotype Sphere"
        className="h-10 w-full md:hidden"
        width={100}
        height={100}
      />
      <Image
        src="/logotype.svg"
        alt="Logotype Sphere"
        className="hidden h-10 w-full md:block"
        width={100}
        height={100}
      />
    </Link>
  )
}
