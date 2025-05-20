"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SliderCard from "./sliderCard";

const ReusableSlider = ({
  iconPosition,
}: {
  iconPosition?: "top" | "bottom";
}) => {
  const data = [
    {
      title: "Suspendisse <br/> mattis non leo",
  icon: iconPosition === "bottom" ? "/icons/content/testiCircle.svg" : "/icons/content/blueCircle.svg",
    width:
      iconPosition === "bottom"
        ? "w-[312px] "
        : "w-[200px] ",
    height:
      iconPosition === "bottom"
        ? "h-[270px] "
        : "h-[240px] ",
      hasBorder: iconPosition === "bottom",
      
    },
    {
      title: "Suspendisse <br/> mattis non leo",
  icon: iconPosition === "bottom" ? "/icons/content/testiCircle.svg" : "/icons/content/blueCircle.svg",
    width:
      iconPosition === "bottom"
        ? "w-[312px] "
        : "w-[200px] ",
    height:
      iconPosition === "bottom"
        ? "h-[270px] "
        : "h-[240px] ",
      hasBorder: iconPosition === "bottom",
    },
    {
      title: "Suspendisse <br/> mattis non leo",
  icon: iconPosition === "bottom" ? "/icons/content/testiCircle.svg" : "/icons/content/blueCircle.svg",
    width:
      iconPosition === "bottom"
        ? "w-[312px] "
        : "w-[200px] ",
    height:
      iconPosition === "bottom"
        ? "h-[270px] "
        : "h-[240px] ",
      hasBorder: iconPosition === "bottom",
    },
  ];

  return (
    <div className="w-full overflow-hidden  lg:mt-[70px] md:flex  md:justify-center md:items-center">
      <Swiper
  slidesPerView={"auto"}
  spaceBetween={iconPosition === "bottom" ? 24 : -84}
  breakpoints={{
    700: {
      spaceBetween: iconPosition === "bottom" ? 24 : -84,
      allowTouchMove: false,
    },
    1040: {
      spaceBetween: iconPosition === "bottom" ? 24 : -84,
      allowTouchMove: false,
    },
  }}
     
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            className="!w-[calc(100vw-80px)] max-w-[300px] xl:max-w-[420px] "
          >
            <SliderCard
              title={item.title}
              icon={item.icon}
              iconPosition={iconPosition}
              width={item.width}
              height={item.height}
              hasBorder={item.hasBorder}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ReusableSlider;
