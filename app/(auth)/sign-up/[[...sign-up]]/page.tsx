import { SignIn, SignUp } from '@clerk/nextjs'
import React from 'react'

function page() {
  return (
    <div className='auth-page'>
      <SignUp/>
    </div>
  )
}

export default page