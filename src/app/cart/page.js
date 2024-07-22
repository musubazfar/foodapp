'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'

const cart = () => {
    const pathName = usePathname();
    console.log(pathName);

    const searchParams = useSearchParams();
    console.log(searchParams.get('search'), searchParams.get('randomvalue'))
  return (
    <div>This is cart component</div>
  )
}

export default cart