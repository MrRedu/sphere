'use client'
import { Fingerprint, LogOut, MailCheck } from 'lucide-react'
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'

import Section from '@/components/atoms/Section'
import { hideEmail } from '@/lib/utils'

import { Button } from './Button'

export const UserProfile = () => {
  const { data: session, status } = useSession()
  const fistName = session?.user?.name?.split(' ')[0] || 'Name LastName'
  const lastName = session?.user?.name?.split(' ')[1]

  return (
    <Section className="flex items-center gap-4 pt-16">
      <Image
        src={session?.user?.image || '/placeholder_250x250.jpg'}
        alt={session?.user?.name || 'Photo user'}
        width={100}
        height={100}
        className="rounded-full"
      />
      <div className="flex flex-col gap-1">
        <h2 className="mb-2 text-3xl font-bold">
          {fistName} {lastName && `${lastName?.charAt(0)}.`}
        </h2>

        <div className="flex items-center gap-2">
          <MailCheck size={14} />
          <span className="font-semibold">
            {hideEmail(session?.user?.email || '') || 'email@example.com'}
          </span>
        </div>

        {status === 'authenticated' ? (
          <div className="flex items-center gap-2">
            <Fingerprint size={14} />
            <span className="font-semibold">Authenticated</span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Fingerprint size={14} />
            <span className="font-semibold">Status</span>
          </div>
        )}
      </div>
      <Button
        className="mb-auto ml-auto"
        onClick={() => signOut({ callbackUrl: '/' })}
      >
        <LogOut />
        Sign Out
      </Button>
    </Section>
  )
}
