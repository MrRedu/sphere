import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID as string,
      clientSecret: GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  // pages: {
  //   signIn: '/sign-in', -> Página para iniciar sesión personal
  // },
})

export { handler as GET, handler as POST }
