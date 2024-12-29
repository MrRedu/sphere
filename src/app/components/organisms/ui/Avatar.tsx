'use client'
import { LogOut, UserCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

import { useOnlineStatus } from '@/hooks/useIsOnline'
import { Button } from '../../molecules/ui/Button'

export const Avatar = () => {
  const { data: session } = useSession()
  const isOnline = useOnlineStatus()

  if (!session)
    return (
      <button onClick={() => signIn()}>
        <UserCircle size={40} />
      </button>
    )

  return (
    <div className="flex items-center gap-2">
      <Button
        onClick={() => signOut({ callbackUrl: '/' })}
        className="h-10 w-10 p-2"
      >
        <LogOut />
      </Button>
      <Link href="/profile" className="relative">
        <Image
          src={session.user?.image as string}
          alt={session.user?.name as string}
          width={40}
          height={40}
          className="rounded-full"
        />
        <span
          className={`absolute bottom-0 left-7 h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800 ${isOnline ? 'bg-green-400' : 'bg-redd-500 animate-pulse'}`}
        />
      </Link>
    </div>
  )
}
