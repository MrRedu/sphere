'use client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { SessionProvider } from 'next-auth/react'
import { PropsWithChildren } from 'react'

const client = new ApolloClient({
  // uri: process.env.ANILIST_API_URL,
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache(),
})

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <SessionProvider>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </SessionProvider>
  )
}
