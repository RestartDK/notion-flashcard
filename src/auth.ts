import NextAuth, { NextAuthConfig } from "next-auth"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "@/db"

export const authConfig = { 
  adapter: DrizzleAdapter(db),
  providers: [
    
  ],
  callbacks: {
    async session({session, user}) {
      session.user.id = user.id
      return session
    },
  },
} satisfies NextAuthConfig

export const { 
  handlers, 
  auth, 
  signOut,
  signIn
} = NextAuth(authConfig)
