'use client'
import { Fingerprint, LogOut, MailCheck } from 'lucide-react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'

import Section from '@/components/atoms/Section'
import { hideEmail } from '@/lib/utils'
import { useFavouriteAnimes } from '@/stores/animes/favourite-animes.store'

export const UserProfile = () => {
  const favouriteAnimes = useFavouriteAnimes(state => state.favouriteAnimes)
  const { data: session, status } = useSession()
  const fistName = session?.user?.name?.split(' ')[0] || 'Name LastName'
  const lastName = session?.user?.name?.split(' ')[1]

  return (
    <Section className="flex w-full flex-col justify-between gap-4 pt-16 md:flex-row">
      <div className="flex flex-wrap items-center gap-4">
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
      </div>
      <div className="flex items-end">
        <p className="text-xl font-semibold text-light">
          ({favouriteAnimes?.length}) favourite animes
        </p>
      </div>
    </Section>
  )
}
