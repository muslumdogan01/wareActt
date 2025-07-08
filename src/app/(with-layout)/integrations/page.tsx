"use client";
import FAQSection from "@/components/faq/page";
import SignupCard from "@/components/signup/page";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import React from "react";

const integrations = [
  {
    title: "Amazon",
    imgSrc: "/icons/integrations/amazon.svg",
    descriptionLines: [
      "Wareact keeps tabs on your",
      " products and keeps your sales",
      "channelsin sync.",
    ],
  },
  {
    title: "Shopify Plus",
    imgSrc: "/icons/integrations/shopy.svg",
    descriptionLines: [
      "Wareact keeps tabs on your",
      " products and keeps your sales",
      "channelsin sync.",
    ],
  },
  {
    title: "eBay",
    imgSrc: "/icons/integrations/walmart.svg",
    descriptionLines: [
      "Wareact keeps tabs on your",
      " products and keeps your sales",
      "channelsin sync.",
    ],
  },
];

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
        <div className="px-4 w-full  pt-[50px]">
          <div className="w-full lg:flex lg:space-x-[52px] py-[50px]">
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
              Discover Exclusive <br className="block md:hidden" />
              Integrations <br />
              Built with Our
              <br className="block md:hidden" />
              Strategic <br className="md:block hidden" /> Partners
            </h1>
          </div>
          <Swiper
            spaceBetween={20}
            slidesPerView="auto"
            allowTouchMove={true}
            className="w-full  overflow-x-auto lg:overflow-visible lg:[pointer-events:none] lg:[touch-action:none]"
          >
            {integrations.map((item, i) => (
              <SwiperSlide key={i} style={{ width: "auto" }} className="flex ">
                <div className="w-[200px] lg:w-[392px] 2xl:w-[488px] rounded-[30px]  bg-white border border-[#065AF11A] shadow-[inset_0px_0px_30px_-4px_#0A28BF0F] text-white flex flex-col ">
                  <div className="pl-5 lg:py-[50px] py-[30px] pr-4">
                    <div className="relative w-full flex justify-start">
                      <Image
                        src={item.imgSrc}
                        alt={item.title}
                        width={0}
                        height={0}
                        sizes="auto"
                        className="lg:h-auto w-[120px] lg:w-auto max-h-[50px] object-contain"
                        unoptimized
                      />
                    </div>
                    <h1 className="lg:pt-[170px] pt-[43px]   text-black lg:text-[30px] text-[20px] leading-[122%] font-normal font-inter">
                      {item.title}
                    </h1>
                    <p className="pt-[3px] min-h-[80px] text-black/70 lg:text-[18px] text-[14px] leading-[160%] font-normal font-inter">
                      {item.descriptionLines.map((line, index) => (
                        <span key={index}>
                          {line}
                          <br className="hidden lg:block" />
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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
                Marketplaces
              </h1>
            </div>
            <Swiper spaceBetween={20} slidesPerView={"auto"} className="w-full">
              {[...Array(4)].map((_, i) => (
                <SwiperSlide key={i} style={{ width: "auto" }} className="flex">
                  <div className="w-[288px] 2xl:w-[352px] rounded-[30px] p-1.5 bg-white border border-[#065AF11A]  shadow-[inset_0px_0px_30px_-4px_#0A28BF0F] text-white flex flex-col">
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
                      <h1 className="py-[41px]  text-black text-[20px] leading-[122%] font-normal font-inter">
                        Amazon
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
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
            <Swiper spaceBetween={20} slidesPerView={"auto"} className="w-full">
              {[...Array(4)].map((_, i) => (
                <SwiperSlide key={i} style={{ width: "auto" }} className="flex">
                  <div className="w-[288px] 2xl:w-[352px] rounded-[30px] p-1.5 bg-white border border-[#065AF11A]  shadow-[inset_0px_0px_30px_-4px_#0A28BF0F] text-white flex flex-col">
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
                      <h1 className="py-[41px]  text-black text-[20px] leading-[122%] font-normal font-inter">
                        Amazon
                      </h1>
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
