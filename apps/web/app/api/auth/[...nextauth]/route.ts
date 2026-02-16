import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "@repo/db";
import bcrypt from "bcrypt";

export const authOptions = {

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Enter your email" },
        password: { label: "Password", type: "password", placeholder: "Enter your password" }
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        
        if (!user) {
          return null;
        }

        const isPasswordValid = await bcrypt.compare(credentials.password, user.hashedPassword);

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
        };


      } 
      
    })
    
  ],
  callbacks:{
      async jwt({ token, user }: { token: any, user: any }) {
        if (user) {
          token.user = user;
        }
        return token;
      },
    
      async session({ session, token }: { session: any, token: any }) {
        if (session.user) {
          return {
            ...session,
            user: {
              ...session.user,
              id: token.user.id,
            }
          };
        }
        return session;
      }
  },
  secret: process.env.NEXTAUTH_SECRET

}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }