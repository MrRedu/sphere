'use client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { SessionProvider } from 'next-auth/react'
import { PropsWithChildren } from 'react'

const client = new ApolloClient({
  // uri: process.env.ANILIST_API_URL,
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache(),
})

/**
 * A component that provides both Apollo and NextAuth session context to its children.
 *
 * This component wraps its children with both `ApolloProvider` and `SessionProvider`,
 * allowing them to access Apollo Client for GraphQL operations and session information
 * via NextAuth.
 *
 * @param {PropsWithChildren} props - The component props.
 * @param {React.ReactNode} props.children - The child components that will receive
 * the context provided by `ApolloProvider` and `SessionProvider`.
 */

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <SessionProvider>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </SessionProvider>
  )
}
