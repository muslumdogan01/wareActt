import React from "react";
import ReusableSlider from "../content/cards/page";
import TestimonialsCarousel from "./testimoSlider";
import Insight from "./insight/page";

const Testimonials = () => {
  return (
    <div className="bg-[#F4F6FF] block lg:hidden">
      <div className="flex flex-col justify-center items-center pt-[100px]">
        <h1 className="text-black text-center font-inter text-[36px] font-semibold leading-[132%]">
          and discover <br />
          mooooore features
        </h1>
        <p className="text-black text-center font-inter text-[18px] pt-5 font-normal leading-[160%]">
          Possimus cicuta non depromo <br /> tamquam cornu abbas unus cinis{" "}
          <br /> verbum tamdiu damnatio.
        </p>
      </div>
      <ReusableSlider iconPosition="bottom" />

      <div>
        <TestimonialsCarousel />
      </div>
      <div className="w-full bg-[#F4F6FF]">
        <Insight />
      </div>
    </div>
  );
};

export default Testimonials;
