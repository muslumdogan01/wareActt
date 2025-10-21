"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "./logo/logo";
import LogoTitle from "./logo/logoTitle";
import Menu from "./logo/menu";
import MenuClose from "./logo/menuClose";
import LogoLine from "./logo/logoLine";
import MenuList from "./menu/menu";
import MobileMenu from "./menu/mobileMenu";
import BookDemoButton from "../bookDemo/page";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="w-full  z-20 lg:absolute lg:top-0 lg:left-0 px-4 lg:px-2 bg-white lg:bg-transparent flex flex-col">
      <div className="xl:container xl:mx-auto sm:mx-auto xs:mx-auto lg:max-w-none lg:mx-auto  sm:container xs:container">
        <header className="w-full relative  z-50 h-full ">
          <div className=" flex lg:flex-row md:flex-col  items-center justify-between  xl:px-4 py-[30px]">
            <div className="flex items-center space-x-[10px]">
              <Link
                href="/"
                className="flex items-center space-x-[4px] shrink-0"
              >
                <Logo />
                {isOpen ? (
                  <div className="flex items-center space-x-[16px] px-4">
                    <LogoLine />
                    <span className="leading-[1.22] md:hidden text-xl transition-opacity duration-300 ease-in-out font-semibold">
                      Menu
                    </span>
                  </div>
                ) : (
                  <LogoTitle />
                )}
              </Link>
              <div className="md:flex items-center hidden">
                <LogoLine />
              </div>
              <MenuList />
            </div>

            <div className="hidden lg:flex ml-6 space-x-[9px]">
              <BookDemoButton />
              <Link href="/sign-up">
                <button className="xl:w-[151px] w-[121px] xl:h-[40px] h-[30px] rounded-[100px] font-semibold text-[14px] leading-[1.4] transition-all duration-300 ease-in-out hover:bg-[#065AF1] hover:text-white text-[#065AF1] border-[#065AF1]  cursor-pointer border-[1px]">
                  Sign Up
                </button>
              </Link>
            </div>

            {/* Hamburger (Mobile only) */}
            <div className="md:hidden cursor-pointer">
              <button onClick={toggleMenu}>
                {isOpen ? <MenuClose /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown */}
          <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </header>
      </div>
    </div>
  );
};

export default Header;
