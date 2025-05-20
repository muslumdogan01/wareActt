"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [topValue, setTopValue] = useState("120px");
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateTopValue = () => {
      const width = window.innerWidth;

      if (width < 1024) {
        setIsDesktop(false); // lg'den küçükse
      } else {
        setIsDesktop(true); // lg ve üstü
        if (width <= 2130) {
          setTopValue("120px");
        } else {
          setTopValue("150px");
        }
      }
    };

    updateTopValue(); // İlk yüklemede çalıştır
    window.addEventListener("resize", updateTopValue); // Dinle
    return () => window.removeEventListener("resize", updateTopValue); // Temizlik
  }, []);

  return (
    <div
      className="w-full z-50"
      style={isDesktop ? { position: "absolute", top: topValue } : {}}
    >
      {/* 👇 alt yapı aynı */}
      <div className="w-full h-full relative ">
        <section className="container mx-auto relative">
          <div className="w-full justify-between items-center flex flex-col lg:flex-row px-5 lg:pb-0 xl:pt-9">
            <h1 className="text-2xl xl:text-[56px] hidden lg:flex text-left font-semibold leading-[1.22] text-black">
              3PL Warehouse <br /> Management Software <br /> for Next Level
              Logistics
            </h1>

            <h1 className="text-4xl md:text-[56px] block lg:hidden text-center font-semibold leading-[1.22] text-black">
              Precision-Driven 3PL Software for Next-Level Logistics
            </h1>
            <div className="flex flex-col lg:items-start justify-center items-center">
              <p className="text-center lg:text-left mt-[50px] lg:mt-0 text-[18px] leading-[1.46] font-normal">
                Built for 3PL warehouses, our software <br /> automates
                everything from inventory <br className="lg:hidden block" />{" "}
                tracking <br className="hidden lg:block" /> to billing—helping
                you deliver <br className="lg:hidden block" />
                faster, smarter, <br className="hidden lg:block" /> and more
                accurate <br className="lg:hidden block" /> fulfillment.
              </p>
              <button className="cursor-pointer hover:bg-white hover:border-[#065AF1] hover:border-[1px] transition-all duration-300 ease-in-out hover:text-[#065AF1] block lg:hidden mt-[30px] bg-[#065AF1] text-white  w-[179px] h-[40px] rounded-[100px]">
                Book a Demo
              </button>
              <button className="cursor-pointer hover:bg-white hover:border-[#065AF1] hover:border-[1px] transition-all duration-300 ease-in-out hover:text-[#065AF1] hidden lg:block mt-[30px] bg-[#065AF1] text-white  w-[179px] h-[40px] rounded-[100px]">
                See Pricing
              </button>
            </div>
          </div>
          <div className="hidden lg:flex justify-end -mt-[7rem] -mr-[8rem] 2xl:-mt-[8.5rem]  3xl:-mt-[20rem] 4xl:-mt-[20rem] 2xl:-mr-[12rem] z-50">
            <Image
              src="/icons/content/square.svg"
              alt="kare"
              width={440}
              height={440}
              className="transition-all duration-300 ease-in-out 2xl:w-[500px] 2xl:h-[500px]"
              sizes="(min-width: 1536px) 640px, 450px"
              priority
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
