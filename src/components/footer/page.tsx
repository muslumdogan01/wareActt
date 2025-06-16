"use client"

import Link from "next/link";
import { SocialIcon } from "./socialIcon";
import { usePathname } from "next/navigation";

import FooterLogo from "./logo";
import LogoTitle from "./logoTitle";
import LogoLine from "./logoLine";
import Image from "next/image";

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer className="w-full bg-black text-white pt-[50px] lg:pt-[110px] ">
      <div className="2xl:max-w-[1440px] mx-auto pb-[50px] lg:pb-[69px] px-4 flex flex-col md:flex-row md:items-center md:justify-between">
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
          <div className="px-6 w-fit hidden md:flex  items-center">
            <LogoLine />
          </div>
          {/* Navigation - vertical on mobile, horizontal on desktop */}
          <nav className="flex flex-col  items-center justify-center w-full space-y-4 md:flex-row md:space-y-0 md:space-x-6 ">
            <Link
              href="/"
              className={`${
                pathname === "/" ? "text-white" : "text-[#7A7A7A]"
              } hover:text-[#949494] font-inter text-[14px] not-italic font-semibold leading-[140%]`}
            >
              Home
            </Link>
            <Link
              href="/features"
              className={`${
                pathname === "/features" ? "text-white" : "text-[#7A7A7A]"
              } hover:text-[#949494] font-inter text-[14px] not-italic font-semibold leading-[140%]`}
            >
              Features
            </Link>
            <Link
              href="/integrations"
              className="text-[#7A7A7A] hover:text-[#949494] font-inter text-[14px] not-italic font-semibold leading-[140%]"
            >
              Integrations
            </Link>
            <Link
              href="/pricing"
              className="text-[#7A7A7A] hover:text-[#949494] font-inter text-[14px] not-italic font-semibold leading-[140%]"
            >
              Pricing
            </Link>
            <Link
              href="/insight"
              className="text-[#7A7A7A] hover:text-[#949494] font-inter text-[14px] not-italic font-semibold leading-[140%]"
            >
              Insight
            </Link>
            <Link
              href="/faq"
              className="text-[#7A7A7A] hover:text-[#949494] font-inter text-[14px] not-italic font-semibold leading-[140%]"
            >
              F.A.Q
            </Link>
            <Link
              href="/contact"
              className="text-[#7A7A7A] hover:text-[#949494] font-inter text-[14px] not-italic font-semibold leading-[140%]"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Social icons */}
        <div className="flex justify-center mt-[50px] md:mt-0 space-x-4">
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
      <div className="w-full flex justify-center lg:hidden">
        <div className="bg-white/20 w-full h-[1px] mx-5 mb-[50px] lg:mb-0"></div>
      </div>
      <div className="w-full lg:bg-white/10 lg:min-h-[325px] mb-[50px] lg:mb-0 lg:pt-[60px]">
        <div className="2xl:max-w-[1440px] mx-auto">
          <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center mb-[50px] lg:mb-0 px-4">
            <h1 className="hidden lg:block text-white text-[14px] not-italic font-normal leading-[140%]">
              © 2024 WareAct. All rights reserved
            </h1>
            <div className="flex space-x-[40px] text-white/30 lg:text-white text-[14px] not-italic font-normal leading-[140%]">
              <span className="cursor-pointer hover:text-gray-300">
                Privacy Policy
              </span>
              <span className="cursor-pointer hover:text-gray-300">
                Terms and Condition
              </span>
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
