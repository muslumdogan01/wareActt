import Image from 'next/image'
import React from 'react'

const LogoLine = () => {
  return (
              <div className="">
                <Image
                  src="/icons/footer/logoLine.svg"
                  alt="Company Logo"
                  width={1}
                  height={24}
                  priority
                />
              </div>
  )
}

export default LogoLine