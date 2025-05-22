import Link from "next/link"
import { SocialIcon } from "./socialIcon"


export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Logo - hidden on mobile */}
        <div className="hidden md:flex items-center">
          <Link href="/" className="flex items-center">
            {/* <Image src="/logo.svg" alt="WAREACT" width={40} height={40} className="mr-2" /> */}
            <span className="text-xl font-bold">LOGOOOO</span>
          </Link>
        </div>

        {/* Navigation - vertical on mobile, horizontal on desktop */}
        <nav className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-6 md:items-center">
          <Link href="/" className="hover:text-gray-300 transition-colors">
            Home
          </Link>
          <Link href="/features" className="text-gray-400 hover:text-gray-300 transition-colors">
            Features
          </Link>
          <Link href="/integrations" className="text-gray-400 hover:text-gray-300 transition-colors">
            Integrations
          </Link>
          <Link href="/pricing" className="text-gray-400 hover:text-gray-300 transition-colors">
            Pricing
          </Link>
          <Link href="/insight" className="text-gray-400 hover:text-gray-300 transition-colors">
            Insight
          </Link>
          <Link href="/faq" className="text-gray-400 hover:text-gray-300 transition-colors">
            F.A.Q
          </Link>
          <Link href="/contact" className="text-gray-400 hover:text-gray-300 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Social icons */}
        <div className="flex justify-center mt-6 md:mt-0 space-x-4">
          <Link href="#" className="hover:opacity-80 transition-opacity">
            <SocialIcon name="Facebook" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="hover:opacity-80 transition-opacity">
            <SocialIcon name="Twitter" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="hover:opacity-80 transition-opacity">
            <SocialIcon name="Instagram" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="hover:opacity-80 transition-opacity">
            <SocialIcon name="YouTube" />
            <span className="sr-only">YouTube</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
