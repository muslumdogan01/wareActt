import React from "react";
import TestimonialsCarousel from "./testimoSlider";
import Insight from "./insight/page";
import AllFeatures from "./allFeatures";

const Testimonials = () => {
  return (
    <div className="bg-[#F4F6FF] block lg:hidden">
      <div className="flex flex-col justify-center items-center pt-[100px]">
        <h1 className="text-black text-center font-inter text-[36px] font-semibold leading-[132%]">
          Every feature needed  <br />
         in one software.
        </h1>
        <p className="text-black text-center font-inter text-[18px] px-2 pt-5 font-normal leading-[160%]">
          Our user experience team has made tons <br /> of researches to optimize the features 
          <br />needed  by any kind and size of warehouse. 
        </p>
      </div>
      
      <AllFeatures/>
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
