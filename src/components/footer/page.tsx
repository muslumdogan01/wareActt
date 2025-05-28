import Link from "next/link";
import { SocialIcon } from "./socialIcon";

import FooterLogo from "./logo";
import LogoTitle from "./logoTitle";
import LogoLine from "./logoLine";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-[110px] ">
      <div className="2xl:max-w-[1440px] mx-auto pb-[69px] px-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex">
          {/* Logo - hidden on mobile */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center space-x-[30px]">
              <Link href="/" className="flex items-center space-x-[4px]">
                <FooterLogo />
                <LogoTitle />
              </Link>
            </div>
          </div>
          <div className="px-6 w-fit flex items-center">
            <LogoLine />
          </div>
          {/* Navigation - vertical on mobile, horizontal on desktop */}
          <nav className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-6 md:items-center">
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link
              href="/features"
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              Features
            </Link>
            <Link
              href="/integrations"
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              Integrations
            </Link>
            <Link
              href="/pricing"
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/insight"
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              Insight
            </Link>
            <Link
              href="/faq"
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              F.A.Q
            </Link>
            <Link
              href="/contact"
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>

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
      <div className="w-full bg-white/10 min-h-[325px] pt-[60px]">
        <div className="2xl:max-w-[1440px] mx-auto">
          <div className="w-full flex justify-between items-center px-4">
            <h1 className="text-white text-[14px] not-italic font-normal leading-[140%]">© 2024 WareAct. All rights reserved</h1>
            <div className="flex space-x-[40px] text-white text-[14px] not-italic font-normal leading-[140%]">
              <span>Privacy Policy</span>
              <span>Terms and Condition</span>
            </div>
          </div>
        </div>

        <div className="w-full 2xl:max-w-[1440px] mx-auto lg:pt-[60px] hidden lg:flex">
          <Image
            src="/icons/footer/wareact.svg"
            alt="Company Logo"
            width={900}
            height={185}
            priority
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </footer>
  );
}
