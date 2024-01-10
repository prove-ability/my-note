import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import NaverProvider from "next-auth/providers/naver"

const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    // ...add more providers here
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID as string,
      clientSecret: process.env.NAVER_CLIENT_SECRET as string
    })
  ],
  callbacks: {
    async signIn(userDetail: {}) {
      if (Object.keys(userDetail).length === 0) {
        return false;
      }
      return true;
    },
    async redirect({ baseUrl }: { baseUrl: string }) {
      return `${baseUrl}/protected`;
    },
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }