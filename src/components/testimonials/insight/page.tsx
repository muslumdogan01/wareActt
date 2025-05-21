"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const Insight = () => {
  return (
    <div className="w-full px-4 py-[100px] ">
      <div className=" flex flex-col justify-center items-center w-full mb-[35px]">
        <h1 className="text-4xl text-black font-semibold leading-[1.3] ">
          Insight
        </h1>
      </div>
      <Swiper spaceBetween={20} slidesPerView={"auto"} className="w-full">
        {[...Array(5)].map((_, i) => (
          <SwiperSlide key={i} style={{ width: "auto" }} className="flex">
            <div className="w-[288px] h-[350px] rounded-2xl p-1.5 overflow-hidden shadow-xl bg-black text-white flex flex-col">
              <div className="relative w-full h-full">
                <Image
                  src="/images/insight/insight.png"
                  alt="Warehouse"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Alt içerik */}
              <div className="flex flex-col justify-end h-full pl-5">
                <h3 className="text-[20px] leading-[1.2] text-white font-normal mb-[10px]">
                  Suspendisse <br /> mattis non leo
                </h3>

                <div className="flex  gap-[10px] mb-[15px]">
                  <span className="bg-[#065AF1] text-[12px] leading-[1.2] text-white font-normal px-[10px] py-[4px] rounded-[30px]">
                    #dropshiping
                  </span>
                  <span className="bg-[#065AF1] text-[12px] leading-[1.2] text-white font-normal px-[10px] py-[4px] rounded-[30px]">
                   #e-commerce
                  </span>

                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Insight;
