import React from "react";
import ReusableSlider from "./cards/page";
import DeliveryInfo from "./deliveryInfo/page";
import ProductOverview from "./productOverview/page";

const Content = () => {
  return (
    <div className="w-full h-full flex flex-col  relative">
      <div className="md:flex md:w-full md:justify-center md:items-center lg:pt-[423px]">
        <ReusableSlider iconPosition="top" />
      </div>
      <DeliveryInfo/>
      <ProductOverview/>
    </div>
  );
};

export default Content;
