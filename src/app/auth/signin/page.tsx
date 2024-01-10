import LoginButton from '@/components/buttons/LoginButton'

// async function getProviders() {
//   const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/providers`)

//   if (!res.ok) {
//     throw new Error('Failed to fetch providers')
//   }

//   return res.json()
// }

export default async function SignIn() {
  // const resp: ReturnType<typeof getProviders> = (await getProviders()) || {}

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <LoginButton
        auth={{
          id: 'github',
          name: 'GitHub',
          type: 'oauth',
          signinUrl: `${process.env.NEXTAUTH_URL}/api/auth/signin/github`,
          callbackUrl: `${process.env.NEXTAUTH_URL}/api/auth/callback/github`,
        }}
      />
      <LoginButton
        auth={{
          id: 'naver',
          name: 'Naver',
          type: 'oauth',
          signinUrl: `${process.env.NEXTAUTH_URL}/api/auth/signin/naver`,
          callbackUrl: `${process.env.NEXTAUTH_URL}/api/auth/callback/naver`,
        }}
      />
      {/* {Object.values(resp).map((provider) => (
        <div key={provider.id} className="[&:not(:first-child)]:mt-4">
          <LoginButton auth={provider} />
        </div>
      ))} */}
    </div>
  )
}
