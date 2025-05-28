import Image from 'next/image'
import React from 'react'

const FooterLogo = () => {
  return (
       <div className="">
         <Image
           src="/icons/footer/fLogo.svg"
           alt="Company Logo"
           width={42}
           height={36}
           priority
         />
       </div>
  )
}

export default FooterLogo