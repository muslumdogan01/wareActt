import FAQSection from "@/components/faq/page";
import SignupCard from "@/components/signup/page";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="w-full relative bg-white">
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

      <div className="container mx-auto ">
        <div className="px-4 w-full  ">
          <div className="w-full lg:flex lg:space-x-[52px] pt-[50px]">
            <div className=" hidden lg:flex ">
              <span className="w-[2px] h-[130px] bg-[#065AF1] "></span>
              <Image
                src="/icons/integrations/titleLine.svg"
                alt="Warehouse"
                width={52}
                height={130}
                className="object-cover "
              />
            </div>

            <h1 className="text-center lg:text-left font-inter font-normal text-[30px] leading-[140%] text-black">
              Discover Exclusive <br className="block md:hidden" />
              Integrations <br />
              Built with Our
              <br className="block md:hidden" />
              Strategic <br className="md:block hidden" /> Partners
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-[24px] w-full pt-[50px] ">
            <div
              style={{
                boxShadow: `0px 20px 80px -20px #0000001A, inset 0px 0px 30px -4px #0A28BF0F`,
              }}
              className="lg:py-[40px] py-[20px] lg:pl-[40px] pl-[20px] w-[354px] h-[207px] lg:w-[600px] 2xl:w-[750px] 2xl:h-[360px] lg:h-[317px] border border-[#065AF11A]  shadow-[inset_0_0_30px_-4px_#0A28BF0F] rounded-[40px] "
            >
              <Image
                src="/icons/features/circle.svg"
                alt="features"
                width={0}
                height={0}
                className="object-cover w-[62px] h-[62px] lg:w-[92px] lg:h-[92px]"
              />
              <h1 className="pt-[30px] lg:pt-[40px] font-normal text-[20px] lg:text-[30px] leading-[1.22] text-black ">
                Customizable Roles & Users
              </h1>
              <p className="pt-[3px] lg:pt-[10px] font-normal text-[14px] lg:text-[18px] lg:leading-[1.6] leading-[1.4] text-black ">
                Customize user roles and permissions to align with{" "}
                <br className="hidden lg:block" /> your operational needs.
              </p>
            </div>
            <div
              style={{
                boxShadow: `0px 20px 80px -20px #0000001A, inset 0px 0px 30px -4px #0A28BF0F`,
              }}
              className="mt-5 lg:mt-0 lg:py-[40px] py-[20px] lg:pl-[40px] pl-[20px] w-[354px] h-[207px] lg:w-[600px] 2xl:w-[750px] 2xl:h-[360px] lg:h-[317px] border border-[#065AF11A]  shadow-[inset_0_0_30px_-4px_#0A28BF0F] rounded-[40px] "
            >
              <Image
                src="/icons/features/circle.svg"
                alt="features"
                width={0}
                height={0}
                className="object-cover w-[62px] h-[62px] lg:w-[92px] lg:h-[92px]"
              />
              <h1 className="pt-[30px] lg:pt-[40px] font-normal text-[20px] lg:text-[30px] leading-[1.22] text-black ">
                Employee Performance Tracking
              </h1>
              <p className="pt-[3px] lg:pt-[10px] font-normal text-[14px] lg:text-[18px] leading-[1.6] text-black ">
                Monitor employee performance in real-time to drive
                <br className="hidden lg:block" />
                operational excellence.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-[24px] w-full lg:pt-[24px] pt-[16px] ">
            <div
              style={{
                boxShadow: `0px 20px 80px -20px #0000001A, inset 0px 0px 30px -4px #0A28BF0F`,
              }}
              className="lg:py-[40px] py-[20px] lg:pl-[40px] pl-[20px] w-[354px] h-[207px] lg:w-[600px] 2xl:w-[750px] 2xl:h-[360px] lg:h-[317px] border border-[#065AF11A]  shadow-[inset_0_0_30px_-4px_#0A28BF0F] rounded-[40px] "
            >
              <Image
                src="/icons/features/circle.svg"
                alt="features"
                width={0}
                height={0}
                className="object-cover w-[62px] h-[62px] lg:w-[92px] lg:h-[92px]"
              />
              <h1 className="pt-[30px] lg:pt-[40px] font-normal text-[20px] lg:text-[30px] leading-[1.22] text-black ">
                Customizable Roles & Users
              </h1>
              <p className="pt-[3px] lg:pt-[10px] font-normal text-[14px] lg:text-[18px] lg:leading-[1.6] leading-[1.4] text-black ">
                Customize user roles and permissions to align with{" "}
                <br className="hidden lg:block" /> your operational needs.
              </p>
            </div>
            <div
              style={{
                boxShadow: `0px 20px 80px -20px #0000001A, inset 0px 0px 30px -4px #0A28BF0F`,
              }}
              className="mt-5 lg:mt-0 lg:py-[40px] py-[20px] lg:pl-[40px] pl-[20px] w-[354px] h-[207px] lg:w-[600px] 2xl:w-[750px] 2xl:h-[360px] lg:h-[317px] border border-[#065AF11A]  shadow-[inset_0_0_30px_-4px_#0A28BF0F] rounded-[40px] "
            >
              <Image
                src="/icons/features/circle.svg"
                alt="features"
                width={0}
                height={0}
                className="object-cover w-[62px] h-[62px] lg:w-[92px] lg:h-[92px]"
              />
              <h1 className="pt-[30px] lg:pt-[40px] font-normal text-[20px] lg:text-[30px] leading-[1.22] text-black ">
                Employee Performance Tracking
              </h1>
              <p className="pt-[3px] lg:pt-[10px] font-normal text-[14px] lg:text-[18px] leading-[1.6] text-black ">
                Monitor employee performance in real-time to drive
                <br className="hidden lg:block" />
                operational excellence.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:max-w-[1440px] lg:mx-auto">
          <FAQSection />
        </div>
        <div>
          <SignupCard />
        </div>
      </div>
    </div>
  );
};

export default Features;
