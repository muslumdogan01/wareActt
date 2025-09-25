"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const AllFeatures = () => {
  // 🔑 Her kartın kendi ayarı burada
  const data = [
    {
      title: "Smart Shipping<br/> Rules",
      icon: "/icons/features/icon1.svg",
      width: "w-[312px]",
      height: "h-[270px]",
      Position: "bottom",
      hasBorder: false,
    },
    {
      title: "Dynamic <br /> Billing",
      icon: "/icons/features/icon2.svg",
      width: "w-[312px]",
      height: "h-[270px]",
      Position: "bottom",
      hasBorder: true,
    },
    {
      title: " Customizable Roles <br /> & Users Management",
      icon: "/icons/features/icon3.svg",
      width: "w-[312px]",
      height: "h-[270px]",
      Position: "bottom",
      hasBorder: true,
    },
        {
      title: " Advanced Notification <br /> Management",
      icon: "/icons/features/icon4.svg",
      width: "w-[312px]",
      height: "h-[270px]",
      Position: "bottom",
      hasBorder: true,
    },
            {
      title: " Smart Price <br /> Calculator ",
      icon: "/icons/features/icon5.svg",
      width: "w-[312px]",
      height: "h-[270px]",
      Position: "bottom",
      hasBorder: true,
    },
  ];

  return (
    <div className="w-full overflow-hidden lg:mt-[70px] md:flex md:justify-center md:items-center">
      <Swiper spaceBetween={20} slidesPerView={"auto"}>
        {data.map((item, index) => {
          const isImage = typeof item.icon === "string" && item.icon.includes("/");

          return (
            <SwiperSlide
              key={index}
              className={`${
                item.Position === "bottom" ? "max-w-[312px]" : "max-w-[200px]"
              } xl:max-w-[392px]`}
            >
              <div
                className={`relative ${item.width} ${item.height} max-w-[80vw] bg-white ${
                  item.hasBorder ? "border border-[#C2C2C2] rounded-[30px]" : ""
                } shadow-[0_4px_20px_rgba(0,0,0,0.05)] lg:shadow-none m-8 lg:m-0 rounded-[40px] p-6 shrink-0 flex flex-col ${
                  item.Position === "top"
                    ? "justify-between text-[20px] font-normal leading-[1.2] text-black"
                    : "justify-end space-y-[10px] text-[26px] font-normal leading-[1.2] text-black"
                }`}
              >
                {item.Position === "top" && (
                  <div className="text-white bg-[#065AF1] inline-flex lg:w-[92px] w-[60px] h-[60px] lg:h-[92px] justify-center rounded-full items-center">
                    {isImage ? (
                      <Image
                        src={item.icon}
                        alt="icon"
                        width={0}
                        height={0}
                        className="relative z-10 lg:w-[40px] w-[20px] h-[20px] lg:h-[40px]"
                      />
                    ) : (
                      item.icon
                    )}
                  </div>
                )}

                {item.Position === "bottom" && (
                  <div className="text-3xl mb-5">
                    {isImage ? (
                      <Image src={item.icon} alt="icon" width={32} height={32} />
                    ) : (
                      item.icon
                    )}
                  </div>
                )}

                <div
                  className="text-lg lg:text-[30px] font-normal leading-[1.2] lg:px-3"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                ></div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default AllFeatures;
