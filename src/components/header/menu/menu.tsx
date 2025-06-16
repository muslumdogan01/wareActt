import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const MenuList = () => {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/features', label: 'Features' },
    { href: '/integrations', label: 'Integrations' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/insight', label: 'Insight' },
    { href: '/faq', label: 'F.A.Q' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="hidden md:flex items-center gap-[30px]">
      {navItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`block font-semibold text-sm leading-[1.4] transition-all duration-300 ease-in-out ${
              isActive ? 'text-[#065AF1]' : 'text-black hover:text-[#065AF1]'
            }`}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}

export default MenuList
