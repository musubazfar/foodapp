import { redirect } from 'next/navigation';
import React from 'react'

const accounts = () => {
    const userProfileInfo = null;
    if(userProfileInfo === null) redirect ('cart?search=product1&randomvalue=abcde')
  return (
    <div>accounts</div>
  )
}

export default accounts