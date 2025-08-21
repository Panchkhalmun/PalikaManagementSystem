import Link from 'next/link'
import React from 'react'

const UserNavbar = () => {
  return (
    <div>
      <div>
        logo
      </div>
      <div>
        <Link href={"/dashboard"}><button >Admin</button></Link>
      </div>
    </div>
  )
}

export default UserNavbar
