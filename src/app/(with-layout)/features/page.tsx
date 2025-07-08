import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="w-full relative h-screen">
      <div className="lg:bg-[url('/icons/featuresPage/headerBg.svg')] lg:bg-cover lg:bg-center lg:h-[348px] w-full ">
        <div className="container mx-auto relative">
          <div className="px-4 text-center lg:text-left flex flex-col lg:absolute lg:top-[160px] w-full ">
            <h1 className="text-black font-inter  text-[56px] not-italic font-semibold leading-[122%]">
              Features  
            </h1>
            <h2 className="mt-[10px] text-black font-inter text-[18px] not-italic font-normal leading-[146%]">
              Built for 3PL warehouses, our software automates everything from
              inventory tracking
            </h2>
          </div>
          <div className="lg:block hidden absolute top-22 2xl:right-[-80px] right-[-45px]">
            <Image
              src="/icons/featuresPage/square.svg"
              alt="Header background"
              width={375}
              height={375}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-screen">
            <div className="pl-5 lg:py-[50px] py-[30px] pr-4">
                            <div className="relative w-full flex justify-start">
                              <Image
                                src="icons/integrations/titleLine.svg"
                                alt="features"
                                width={52}
                                height={130}
                             
                              />
                            </div>
                            <h1 className="lg:pt-[170px] pt-[43px]   text-black lg:text-[30px] text-[20px] leading-[122%] font-normal font-inter">
                           Discover Exclusive Integrations
Built with Our Strategic
Partners
                            </h1>
                            <p className="pt-[3px] min-h-[80px] text-black/70 lg:text-[18px] text-[14px] leading-[160%] font-normal font-inter">
                       
                             
                            </p>
                          </div>
      </div>
    </div>
  );
};

export default Features;
