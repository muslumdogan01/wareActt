"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const Insight = () => {

  return (
<div className="w-full px-4 py-8 bg-[#f5f5f5]">
      <Swiper
        spaceBetween={20}
        slidesPerView={"auto"}
        className="w-full"
      >
        {[...Array(5)].map((_, i) => (
          <SwiperSlide
            key={i}
            style={{ width: "auto" }}
            className="flex"
          >
            <div className="w-[228px] h-[350px] rounded-2xl overflow-hidden shadow-xl bg-black text-white flex flex-col">
              {/* Görsel */}
              <div className="relative w-full h-[180px]">
                <Image
                  src="/images/insight/insight.png" // senin görsel yoluna göre düzenle
                  alt="Warehouse"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Alt içerik */}
              <div className="flex flex-col justify-end h-full ">
                <h3 className="text-lg font-semibold mb-4">
                  Suspendisse <br /> mattis non leo
                </h3>

                <div className="flex  gap-2">
                  <span className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                    #dropshiping
                  </span>
                  <span className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
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
  // return (
  //   <div className='mt-[100px] flex flex-col justify-center w-full'>
  //     <h1 className='text-4xl text-black font-semibold leading-[1.3] '>Insight</h1>
  //   </div>
  // )
}

export default Insight