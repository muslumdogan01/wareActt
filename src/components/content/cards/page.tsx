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
      icon:
        iconPosition === "bottom"
          ? "/icons/content/testiCircle.svg"
          : "/icons/content/blueCircle.svg",
      width:
        iconPosition === "bottom" ? "w-[312px] " : "w-[200px] xl:w-[392px]",
      height:
        iconPosition === "bottom" ? "h-[270px] " : "h-[240px] xl:h-[450px]",
      hasBorder: iconPosition === "bottom",
    },
    {
      title: "Suspendisse <br/> mattis non leo",
      icon:
        iconPosition === "bottom"
          ? "/icons/content/testiCircle.svg"
          : "/icons/content/blueCircle.svg",
      width:
        iconPosition === "bottom" ? "w-[312px] " : "w-[200px] xl:w-[392px]",
      height:
        iconPosition === "bottom" ? "h-[270px] " : "h-[240px] xl:h-[450px]",
      hasBorder: iconPosition === "bottom",
    },
    {
      title: "Suspendisse <br/> mattis non leo",
      icon:
        iconPosition === "bottom"
          ? "/icons/content/testiCircle.svg"
          : "/icons/content/blueCircle.svg",
      width:
        iconPosition === "bottom" ? "w-[312px] " : "w-[200px] xl:w-[392px]",
      height:
        iconPosition === "bottom" ? "h-[270px] " : "h-[240px] xl:h-[450px]",
      hasBorder: iconPosition === "bottom",
    },
  ];

  return (
    <div className="w-full overflow-hidden  lg:mt-[70px] md:flex  md:justify-center md:items-center">
      <Swiper
        spaceBetween={16}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            className={`${
              iconPosition === "bottom" ? "max-w-[312px]" : "max-w-[200px]"
            } xl:max-w-[392px]`}
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
