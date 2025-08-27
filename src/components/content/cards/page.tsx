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
      title: "Easy & Fast<br/> Onboarding",
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
      title: "Carrier & Marketplace <br/> Integrations",
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
      title: "Smart Inventory <br/> Management",
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
      <Swiper spaceBetween={20} slidesPerView={"auto"}>
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
