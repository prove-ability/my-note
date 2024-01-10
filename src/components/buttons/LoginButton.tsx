'use client'

import { signIn } from 'next-auth/react'
import type { ClientSafeProvider } from 'next-auth/react'

interface Props {
  auth?: ClientSafeProvider
}

export default function LoginButton({ auth }: Props) {
  const handleClickButton = () => {
    if (!auth) {
      signIn()
      return
    }

    signIn(auth.id)
  }

  return (
    <button
      type="button"
      className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={handleClickButton}
    >
      {auth ? `Sign In with ${auth.name}` : 'Login'}
    </button>
  )
}
