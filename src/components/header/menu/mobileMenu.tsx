import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type MobileMenuProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};
const MobileMenu = ({ isOpen, setIsOpen }: MobileMenuProps) => {
  const pathname = usePathname();
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Integrations", href: "/integrations" },
    { label: "Pricing", href: "/pricing" },
    { label: "Insight", href: "/insight" },
    { label: "F.A.Q", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div
      className={`transition-all duration-300 ease-in-out ${
        isOpen ? "min-h-[900px] opacity-100" : "max-h-0 opacity-0"
      } bg-white`}
    >
      {isOpen && (
        <nav className=" relative overflow-x-scroll   w-full  z-50 bg-white px-4 py-6 space-y-6 transition-all duration-300 ease-in-out overflow-y-auto">
          {" "}
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-2 ${
                  isActive
                    ? "text-[#065AF1] font-semibold text-[30px] leading-[1.22]"
                    : "text-black font-semibold text-[30px] leading-[1.22] "
                }`}
              >
                <span
                  className={`w-[3px] h-5 inline-block ${
                    isActive ? "bg-[#065AF1]" : "bg-transparent"
                  }`}
                />
                <span>{item.label}</span>
              </Link>
            );
          })}
          <div className="mt-36 space-y-[20px] w-full flex flex-col justify-center items-center">
            <button className=" border-[1px] border-[#065AF1] rounded-[100px] text-base leading-[1.4] transition-all duration-300 ease-in-out text-[#065AF1] hover:bg-blue-400 hover:text-white py-5 w-full max-w-[361px] ">
              Sign In / Sign Up
            </button>
            <button className=" border-[1px] border-[#065AF1] rounded-[100px] text-base leading-[1.4] transition-all duration-300 ease-in-out text-[#065AF1] hover:bg-blue-400 hover:text-white  py-5 w-full max-w-[361px] ">
              Book a Demo
            </button>
          </div>
        </nav>
      )}
    </div>
  );
};

export default MobileMenu;
