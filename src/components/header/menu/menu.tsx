import Link from 'next/link'
import React from 'react'

const MenuList = () => {
  return (
    <nav className="hidden md:flex items-center gap-[30px] ">
    <Link href="/" className="block hover:text-[#065AF1] font-semibold text-sm leading-[1.4] transition-all duration-300 ease-in-out">
      Home
    </Link>
    <Link href="/features" className="block hover:text-[#065AF1] font-semibold text-sm leading-[1.4] transition-all duration-300 ease-in-out">
      Features
    </Link>
    <Link href="#" className="block hover:text-[#065AF1] font-semibold text-sm leading-[1.4] transition-all duration-300 ease-in-out">
      Integrations
    </Link>
    <Link href="#" className="block hover:text-[#065AF1] font-semibold text-sm leading-[1.4] transition-all duration-300 ease-in-out">
      Pricing
    </Link>
    <Link href="#" className="block hover:text-[#065AF1] font-semibold text-sm leading-[1.4] transition-all duration-300 ease-in-out">
      Insight
    </Link>
    <Link href="#" className="block hover:text-[#065AF1] font-semibold text-sm leading-[1.4] transition-all duration-300 ease-in-out">
      F.A.Q
    </Link>
    <Link href="#" className="block hover:text-[#065AF1] font-semibold text-sm leading-[1.4] transition-all duration-300 ease-in-out">
      Contact
    </Link>
  </nav>
  )
}

export default MenuList