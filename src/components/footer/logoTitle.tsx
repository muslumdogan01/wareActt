import Image from 'next/image'
import React from 'react'

const LogoTitle = () => {
  return (
           <div className="">
             <Image
               src="/icons/footer/logoTitle.svg"
               alt="Company Logo"
               width={101}
               height={16}
               priority
             />
           </div>
  )
}

export default LogoTitle