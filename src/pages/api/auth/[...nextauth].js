import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const user = {};

        try {
          if (
            credentials.username == "test" &&
            credentials.password == "test"
          ) {
            user.id = "1";
            user.token = "0pl2yx69FydTME8r5Qspp1I8bBarJ1vv";
            user.username = "test";

            return user;
          }

          return false;
        } catch (err) {
          return "Username or password is invalid.";
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.token = user.token;
      }

      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user.username = token.username;
        session.user.id = token.id;
        session.user.token = token.token;
      }

      return session;
    },
  },
});
