"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const carriers = [
  {
    imgSrc: "/images/content/fed.png",
    descriptionLines:
      "Get fast, reliable shipping with full FedEx integration from label generation to tracking.",
  },
  {
    imgSrc: "/images/content/ups.png",
    descriptionLines:
      "Easily manage your UPS shipments with automated tracking, rate shopping, and more.",
  },
  {
    imgSrc: "/images/content/dhl.png",
    descriptionLines:
      "Expand your global reach with direct DHL integration for international shipping made simple.",
  },
  {
    imgSrc: "/images/content/asen.png",
    descriptionLines:
      "Leverage Asendia for efficient cross-border eCommerce logistics, fully synced with our platform.",
  },
  {
    imgSrc: "/images/content/epost.png",
    descriptionLines:
      "Ship globally at competitive rates through our Epost Global integration — fast, affordable, connected.",
  },
];

export default function CarriersSection() {
  return (
    <div className="w-full">
      {/* 💻 Masaüstü: 3x2 Grid */}
      <div className="hidden lg:grid grid-cols-3 xl:grid-cols-4 gap-6 w-full">
      {carriers.map((carrier, i) => (
  <div
    key={i}
    className="w-[288px] 2xl:w-[352px] h-[235px] rounded-[30px] p-2 bg-white border border-[#065AF11A] shadow-[inset_0px_0px_30px_-4px_#0A28BF0F] text-white flex flex-col "
  >
    <div className="flex flex-col justify-between items-center w-full h-full">
      {/* Üst kısım: Logo */}
      <div className="pt-[30px]">
        <Image
          src={carrier.imgSrc}
          alt="Carrier Logo"
          width={119}
          height={40}
          className="object-cover rounded-lg"
        />
      </div>

      {/* Alt kısım: Açıklama */}
      <div className="mb-2 px-2 text-black text-[16px] leading-[122%] font-normal font-inter text-center">
      {carrier.descriptionLines}
      </div>
    </div>
  </div>
))}
      </div>

      {/* 📱 Mobil: Swiper */}
      <div className="lg:hidden w-full">
  <Swiper spaceBetween={20} slidesPerView="auto" className="w-full">
    {carriers.map((carrier, i) => (
      <SwiperSlide key={i} style={{ width: "auto" }} className="flex">
        <div className="w-[288px] h-[240px] 2xl:w-[352px] rounded-[30px] p-1.5  bg-white border border-[#065AF11A] shadow-[inset_0px_0px_30px_-4px_#0A28BF0F] text-white flex flex-col ">
          <div className="flex flex-col justify-between items-center w-full h-full">
            {/* Üst: Logo */}
            <div className="pt-[20px]">
              <Image
                src={carrier.imgSrc}
                alt="Carrier Logo"
                width={119}
                height={40}
                className="object-cover rounded-lg"
              />
            </div>

            {/* Alt: Açıklama (Artık string!) */}
            <div className="h-20 px-2 text-black   leading-[122%] font-normal font-inter text-center">
             <p className="text-[14px]"> {carrier.descriptionLines}</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>
</div>
  );
}
