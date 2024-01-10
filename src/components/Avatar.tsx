import { useSession } from 'next-auth/react'
import Image from 'next/image'

export default function Avatar() {
  const { data: session } = useSession()
  if (!session) {
    return <span className="loading loading-spinner loading-lg" />
  }

  return (
    <div className="avatar">
      <div className="w-8 rounded-full">
        <Image
          src={session.user?.image ?? ''}
          alt="avatar"
          width={24}
          height={24}
        />
      </div>
    </div>
  )
}
