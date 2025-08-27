"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const integrations = [
  {
    imgSrc: "/icons/integrations/amazon.svg",
    descriptionLines: [
      "Seamlessly connect your operations with ",
      "Amazon and streamline your fulfillment workflow.",
    ],
  },
  {
    imgSrc: "/icons/integrations/shopy.svg",
    descriptionLines: [
      "Effortlessly sync your Shopify store to manage orders, ",
      "inventory, and shipping in one place.",
    ],
  },
  {
    imgSrc: "/images/content/ebay.png",
    descriptionLines: [
      "Integrate with eBay to automate your logistics and",
      "fulfill orders faster and more accurately.",
    ],
  },
  {
    imgSrc: "/icons/integrations/walmart.svg",
    descriptionLines: [
      "Wareact keeps tabs on your",
      " products and keeps your sales",
      "channelsin sync.",
    ],
  },
  {
    imgSrc: "/images/integrations/tiktok.png",
    descriptionLines: [
      "Sync your TikTok Shop with our system and ",
      "turn trends into tracked shipments with ease.",
    ],
  },
  {
    imgSrc: "/icons/features/etsy.svg",
    descriptionLines: [
      "Enhance your Etsy fulfillment with real-time ",
      "integration that keeps your creative business moving.",
    ],
  },
];

const IntegrationsMarket = () => {
  return (
    <div>
      <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrations.map((item, i) => (
          <div
            key={i}
            className="w-full rounded-[30px] bg-white border border-[#065AF11A] shadow-[inset_0px_0px_30px_-4px_#0A28BF0F] text-white flex flex-col"
          >
            <div className="pl-5 lg:py-[50px] py-[30px] pr-4">
              <div className="relative w-full flex justify-start">
                <Image
                  src={item.imgSrc}
                  alt="brands"
                  width={0}
                  height={0}
                  sizes="auto"
                  className="lg:h-[50px] w-[120px] lg:w-[150px] object-left object-contain"
                  unoptimized
                />
              </div>

              <p className="lg:pt-[170px] pt-[43px] min-h-[80px] text-black/70 lg:text-[18px] text-[14px] leading-[160%] font-normal font-inter">
                {item.descriptionLines.map((line, index) => (
                  <span key={index}>
                    {line}
                    <br className="hidden lg:block" />
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 📱 Mobil: Swiper Slider Gösterimi */}
      <div className="lg:hidden">
        <Swiper
          spaceBetween={20}
          slidesPerView="auto"
          allowTouchMove={true}
          className="w-full"
        >
          {integrations.map((item, i) => (
            <SwiperSlide key={i} style={{ width: "auto" }} className="flex">
              <div className="w-[200px] h-[240px] rounded-[30px] bg-white border border-[#065AF11A] shadow-[inset_0px_0px_30px_-4px_#0A28BF0F] text-white flex flex-col">
                <div className="pl-5 py-[30px] pr-4">
                  <div className="relative w-full flex justify-start">
                    <Image
                      src={item.imgSrc}
                      alt="brands"
                      width={0}
                      height={0}
                      sizes="auto"
                      className="w-[120px] max-h-[50px] object-contain"
                      unoptimized
                    />
                  </div>

                  <p className="pt-[43px] px-1 h-[20px] text-black/70 text-[14px] leading-[160%] font-normal font-inter">
                    {item.descriptionLines.map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default IntegrationsMarket;
