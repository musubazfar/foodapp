import Link from 'next/link'
import React from 'react'

const notFound = () => {
  return (
    <div>
        <h1>Page does not exist</h1>
        <Link href={'/'}>HomePage</Link>
    </div>
  )
}

export default notFound