import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import Twitter from 'next-auth/providers/twitter';
import GitHub from 'next-auth/providers/github';
import { getRole } from '@/app/api/auth/getUserRoles';
import { checkEmail } from '@/app/api/auth/getUserRoles';
// import { connectDB } from '@/lib/mongodb';
// import bcrypt from 'bcryptjs';
import CredentialsProvider from 'next-auth/providers/credentials';
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
    // ✅ Email/Password Login Provider
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'example@mail.com' },
        password: { label: 'Password', type: 'password' },
      },
      // async authorize(credentials) {
      //   await connectDB();
      //   console.log('credentials------------------');
      //   console.log(await User.find());

      //   const user = await User.findOne({ email: credentials?.email });
      //   if (!user) throw new Error('No user found');

      //   const isValid = await bcrypt.compare(credentials!.password as string, user.password as string);
      //   if (!isValid) throw new Error('Invalid password');

      //   return user;
      // },
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
