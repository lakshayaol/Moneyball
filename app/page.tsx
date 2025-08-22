import React from 'react'
import { currentUser } from '@clerk/nextjs/server'
import Guest from '@/components/Guest'

export default async function HomePage() {
  const user = await currentUser()

  if(!user) {
    return <Guest />
  }

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {user ? (
        <p>Hello, {user.firstName} {user.lastName}!</p>
      ) : (
        <p>Please log in to see your profile.</p>
      )}
    </div>
  )
}