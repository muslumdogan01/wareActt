import React from "react";
import ReusableSlider from "./cards/page";
import DeliveryInfo from "./deliveryInfo/page";
import ProductOverview from "./productOverview/page";

const Content = () => {
  return (
    <div className="w-full h-full flex flex-col  relative">
      <div className="md:flex md:w-full md:justify-center md:items-center pt-4 lg:pt-[423px]">
        <ReusableSlider iconPosition="top" />
      </div>
      <DeliveryInfo />
      <div className="  hidden lg:block w-full bg-[url('/icons/content/productBg.svg')] bg-no-repeat bg-cover  4xl:py-40">
        <ProductOverview />
      </div>
     
    </div>
  );
};

export default Content;
