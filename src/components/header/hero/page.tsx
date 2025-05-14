
import React from "react";

const Hero = () => {
  return (
    <div className=" lg:absolute lg:top-[110px] 2xl:top-[210px] w-full z-50">
      <div className="w-full h-full relative">
        <section className="container mx-auto relative">
          <div className="w-full justify-between items-center flex flex-col lg:flex-row px-8 pt-2 pb-[50px] lg:pb-0 xl:pt-9">
            <h1 className="text-2xl  xl:text-[56px] hidden lg:flex text-left font-semibold leading-[1.22] text-black">
              3PL Warehouse <br /> Management Software <br /> for Next Level
              Logistics
            </h1>

            <h1 className="text-4xl md:text-[56px] block lg:hidden text-center font-semibold leading-[1.22] text-black">
              Precision-Driven 3PL Software for Next-Level Logistics
            </h1>
            <div className="flex flex-col lg:items-start justify-center items-center">
              <p className="text-center lg:text-left mt-[50px] lg:mt-0 text-[18px] leading-[1.46] font-normal">
                Built for 3PL warehouses, our software <br /> automates
                everything from inventory <br className="lg:hidden block" />{" "}
                tracking <br className="hidden lg:block" /> to billing—helping
                you deliver <br className="lg:hidden block" />
                faster, smarter, <br className="hidden lg:block" /> and more
                accurate <br className="lg:hidden block" /> fulfillment.
              </p>
              <button className="cursor-pointer hover:bg-white hover:border-[#065AF1] hover:border-[1px] transition-all duration-300 ease-in-out hover:text-[#065AF1] block lg:hidden mt-[30px] bg-[#065AF1] text-white  w-[179px] h-[40px] rounded-[100px]">
                Book a Demo
              </button>
              <button className="cursor-pointer hover:bg-white hover:border-[#065AF1] hover:border-[1px] transition-all duration-300 ease-in-out hover:text-[#065AF1] hidden lg:block mt-[30px] bg-[#065AF1] text-white  w-[179px] h-[40px] rounded-[100px]">
                See Pricing
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Hero;
