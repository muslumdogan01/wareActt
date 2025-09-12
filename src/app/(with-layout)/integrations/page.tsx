"use client";
import FAQSection from "@/components/faq/page";
import SignupCard from "@/components/signup/page";
import "swiper/css";
import Image from "next/image";
import React from "react";
import IntegrationsMarket from "@/components/integrations/integrations-market";
import CarriersSection from "./integrations-carriers";



const Integrations = () => {
  return (
    <div className="w-full relative bg-white">
      <div className="lg:bg-[url('/icons/featuresPage/headerBg.svg')] lg:bg-cover lg:bg-center lg:h-[348px] w-full ">
        <div className="container mx-auto relative">
          <div className="px-4 text-center lg:text-left flex flex-col lg:absolute lg:top-[160px] w-full ">
            <h1 className="text-black font-inter  text-[56px] not-italic font-semibold leading-[122%]">
              Integrations
            </h1>
            <h2 className="mt-[10px] text-black font-inter text-[18px] not-italic font-normal leading-[146%]">
              Exclusive Integrations Built with Our Strategic Partners
            </h2>
          </div>
          <div className="lg:block hidden absolute top-22 2xl:right-[-80px] right-[-45px]">
            <Image
              src="/icons/featuresPage/square.svg"
              alt="Header background"
              width={375}
              height={375}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto ">
        <div className="px-4 w-full  pt-[50px] pb-[100px]">
          <div className="w-full items-center lg:flex lg:space-x-[52px] py-[50px]">
            <div className=" hidden lg:flex ">
              <span className="w-[2px] h-[130px] bg-[#065AF1] "></span>
              <Image
                src="/icons/integrations/titleLine.svg"
                alt="Warehouse"
                width={52}
                height={130}
                className="object-cover "
              />
            </div>

            <h1 className="text-center lg:text-left font-inter font-normal text-[30px] leading-[140%] text-black">
              Marketplaces
            </h1>
          </div>

          <IntegrationsMarket/>
         

          <div className="w-full px-4  ">
            <div className="w-full lg:flex lg:space-x-[52px] pt-[100px] pb-[30px] lg:pt-[150px] lg:pb-[50px] lg:items-center">
              <div className=" hidden lg:flex ">
                <span className="w-[2px] h-[130px] bg-[#065AF1] "></span>
                <Image
                  src="/icons/integrations/contentLine.svg"
                  alt="Warehouse"
                  width={52}
                  height={46}
                  className="object-cover "
                />
              </div>

              <h1 className="text-center lg:text-left font-inter font-normal text-[30px] leading-[140%] text-black">
                Carriers
              </h1>
            </div>
              <CarriersSection/>
          </div>
        </div>

        <div className="lg:max-w-[1440px] lg:mx-auto">
          <FAQSection limit={5} />
        </div>
        <div>
          <SignupCard />
        </div>
      </div>
    </div>
  );
};

export default Integrations;
