import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import Twitter from 'next-auth/providers/twitter';
import GitHub from 'next-auth/providers/github';
import { getRole } from '@/app/api/auth/getUserRoles';
import { checkEmail } from '@/app/api/auth/getUserRoles';
// import { connectDB } from '@/lib/mongodb';
// import bcrypt from 'bcryptjs';
import Credentials from "next-auth/providers/credentials"
import { saltAndHashPassword } from '@/lib/password';
import { getUserFromDb } from '@/lib/verifyUser';

// import User from '@/models/user';

export const { handlers, auth } = NextAuth({
  providers: [
    Google({
      profile: (profile) => {
        if (checkEmail(profile.email)) {
          const role = checkEmail(profile.email) ? getRole(profile.email) : 'guest';
          return {
            ...profile,
            role,
            image: profile.picture,
            name: profile.name,
            email: profile.email,
            id: profile.id,
          };
        }
      },
    }),
    Twitter,
    GitHub,
   Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },



      authorize: async (credentials:{email:string,password:string}) => {
        let user = null
 
        // logic to salt and hash password
        const pwHash = saltAndHashPassword(credentials.password )
 
        // logic to verify if the user exists
        user = await getUserFromDb(credentials.email, pwHash)
 
        if (!user) {
          // No user found, so this is their first attempt to login
          // Optionally, this is also the place you could do a user registration
          throw new Error("Invalid credentials.")
        }
 
        // return user object with their profile data
        return user
      },
    }),  
  ],  
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = getRole(user.email as string);
        token.email = user.email;
        token.name = user.name;
        token.image = user.image;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      session.user = token;
      return session;
    },
  },
});
