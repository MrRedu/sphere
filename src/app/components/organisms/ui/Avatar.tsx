'use client'
import useOnlineStatus from '@/hooks/useIsOnline'
import { UserCircle } from 'lucide-react'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

export const Avatar = () => {
  const { data: session, status } = useSession()
  const isOnline = useOnlineStatus()

  if (!session)
    return (
      <button onClick={() => signIn()}>
        <UserCircle size={40} />
      </button>
    )

  return (
    <Link href="/profile" className="relative">
      <Image
        src={session.user?.image as string}
        alt={session.user?.name as string}
        width={40}
        height={40}
        className="rounded-full"
      />
      <span
        className={`absolute left-7 top-0 h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800 ${isOnline ? 'bg-green-400' : 'bg-redd-500 animate-pulse'}`}
      />
    </Link>
  )
}
