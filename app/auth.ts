import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { getRole, verifyCredentials } from './api/auth/getUserRoles';
import Credentials from 'next-auth/providers/credentials';
import axios from 'axios';

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google,
    Credentials({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        username: { label: 'Username' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        console.log('credentials: ', credentials);
        try {
          if (!credentials.username || !credentials.password) {
            return null;
          }
          const user = verifyCredentials(credentials);
          if (user) {
            return user;
          }
          return null;
        } catch (error) {
          console.error('Error during authorization:', error);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async session(data: any) {
      if (data.session.user.role === undefined) {
        data.session.user.role = (await getRole(data.session.user.email)) + '' || null;
      }
      !data?.session?.user?.image && (data.session.user.image = data.session.user.image || null);
      console.log('data.session.user.role: ', data.session.user.role);

      return data.session;
    },
  },
});
