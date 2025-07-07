"use client";
import FAQSection from "@/components/faq/page";
import SignupCard from "@/components/signup/page";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import React from "react";

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
              Built for 3PL warehouses, our software automates everything from
              inventory tracking
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
        <div className="px-4 w-full  mt-[50px] ">
          <div className="w-full text-center font-inter font-normal text-[30px] leading-[140%] text-black">
            <h1>
              Discover Exclusive <br />
              Integrations <br />
              Built with Our <br />
              Strategic Partners
            </h1>
          </div>
          <div className="w-full px-4 pt-[50px] ">

            <Swiper spaceBetween={20} slidesPerView={"auto"} className="w-full">
              {[...Array(4)].map((_, i) => (
                <SwiperSlide key={i} style={{ width: "auto" }} className="flex">
                  <div className="w-[200px] rounded-[30px] p-1.5 bg-white border border-[#065AF11A]  shadow-[inset_0px_0px_30px_-4px_#0A28BF0F] text-white flex flex-col">
                <div className="pl-4">
                                  <div className="relative w-full h-full pt-[30px]">
                      <Image
                        src="/icons/integrations/amazon.svg"
                        alt="Warehouse"
                        width={119}
                        height={40}
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <h1 className="pt-[43px]  text-black text-[20px] leading-[122%] font-normal font-inter">Amazon</h1>
                    <p className="pt-[3px] pb-[20px] text-black/70 text-[14px] leading-[146%] font-normal font-inter">
                      Wareact keeps tabs on <br /> your products and keps <br />{" "}
                      your sales channels <br /> in sync.
                    </p>
                </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="w-full px-4 py-[100px] ">
            <div className=" flex flex-col justify-center items-center w-full mb-[35px]">
              <h1 className="text-4xl text-black font-normal leading-[1.4 ] ">
            Marketplaces
              </h1>
            </div>
            <Swiper spaceBetween={20} slidesPerView={"auto"} className="w-full">
              {[...Array(4)].map((_, i) => (
                <SwiperSlide key={i} style={{ width: "auto" }} className="flex">
                  <div className="w-[288px] rounded-[30px] p-1.5 bg-white border border-[#065AF11A]  shadow-[inset_0px_0px_30px_-4px_#0A28BF0F] text-white flex flex-col">
                <div className="flex flex-col justify-center items-center w-full">
                                  <div className=" pt-[50px]">
                      <Image
                        src="/icons/integrations/amazon.svg"
                        alt="Warehouse"
                        width={119}
                        height={40}
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <h1 className="py-[41px]  text-black text-[20px] leading-[122%] font-normal font-inter">Amazon</h1>
                                                                  
                </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="w-full px-4  ">
            <div className=" flex flex-col justify-center items-center w-full mb-[35px]">
              <h1 className="text-4xl text-black font-normal leading-[1.4 ] ">
        Carriers
              </h1>
            </div>
            <Swiper spaceBetween={20} slidesPerView={"auto"} className="w-full">
              {[...Array(4)].map((_, i) => (
                <SwiperSlide key={i} style={{ width: "auto" }} className="flex">
                  <div className="w-[288px] rounded-[30px] p-1.5 bg-white border border-[#065AF11A]  shadow-[inset_0px_0px_30px_-4px_#0A28BF0F] text-white flex flex-col">
                <div className="flex flex-col justify-center items-center w-full">
                                  <div className=" pt-[50px]">
                      <Image
                        src="/icons/integrations/amazon.svg"
                        alt="Warehouse"
                        width={119}
                        height={40}
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <h1 className="py-[41px]  text-black text-[20px] leading-[122%] font-normal font-inter">Amazon</h1>
                                                                  
                </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="lg:max-w-[1440px] lg:mx-auto">
          <FAQSection />
        </div>
        <div>
          <SignupCard />
        </div>
      </div>
    </div>
  );
};

export default Integrations;
