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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="w-full  z-20 lg:absolute lg:top-0 lg:left-0 px-4 lg:px-0 bg-white lg:bg-transparent flex flex-col">
      <div className="container mx-auto">
        <header className="w-full relative  z-50 h-full ">
          <div className=" flex lg:flex-row md:flex-col  items-center justify-between xl:px-4 py-[30px]">
            <div className="flex items-center space-x-[30px]">
              <Link href="/" className="flex items-center space-x-[4px]">
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

            <div className="hidden md:flex ml-6 space-x-[9px]">
              <button className="w-[151px] h-[40px] rounded-[100px] font-semibold text-[14px] leading-[1.4] transition-all duration-300 ease-in-out hover:bg-[#065AF1] hover:text-white text-[#065AF1] border-[#065AF1]  cursor-pointer border-[1px]">
                Book a Demo
              </button>
              <button className="w-[151px] h-[40px] rounded-[100px] font-semibold text-[14px] leading-[1.4] transition-all duration-300 ease-in-out hover:bg-[#065AF1] hover:text-white text-[#065AF1] border-[#065AF1]  cursor-pointer border-[1px]">
               Sign Up
              </button>
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
