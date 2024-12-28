'use client' // <- Que sea server después
import { signOut } from 'next-auth/react'

import Section from '@/components/atoms/Section'

export default function ProfilePage() {
  return (
    <Section className="min-h-[600px]">
      <h2>{`</Page>`}</h2>
      <button
        className="bg-red-500"
        onClick={() => signOut({ callbackUrl: '/' })}
      >
        Sign out
      </button>
    </Section>
  )
}
