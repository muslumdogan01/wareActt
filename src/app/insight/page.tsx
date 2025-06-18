"use client";

import Image from "next/image";
import Link from "next/link";

const insightItems = [
  {
    image: "/images/insight/insight.png",
    title: "Suspendisse mattis non leo",
    tags: ["#dropshiping", "#e-commerce"],
  },
  {
    image: "/images/insight/insight2.png",
    title: "Cras gravida convallis",
    tags: ["#logistics", "#b2b"],
  },
  {
    image: "/images/insight/insight3.png",
    title: "Curabitur blandit tempus",
    tags: ["#digital", "#marketing"],
  },
  {
    image: "/images/insight/insight3.png",
    title: "Curabitur blandit tempus",
    tags: ["#digital", "#marketing"],
  },
];

const Insight = () => {
  return (
    <div className="w-full relative ">
      <div className="bg-[url('/icons/featuresPage/headerBg.svg')] bg-cover bg-center h-[348px] w-full ">
        <div className="container mx-auto relative">
          <div className="px-4 flex flex-col absolute top-[160px] w-full  bg-red-50 ">
            <h1 className="text-black font-inter text-[56px] not-italic font-semibold leading-[122%]">
              Insight
            </h1>
            <h1 className="mt-[10px] text-black font-inter text-[18px] not-italic font-normal leading-[146%]">
              Built for 3PL warehouses, our software automates everything from
              inventory tracking
            </h1>
          </div>
          <div className="absolute top-22 2xl:right-[-80px] right-[-45px]">
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
        <div className="px-4 w-full  mt-[80px] ">
          <div className="flex w-full bg-black rounded-[30px]">
            <div className="w-1/2  min-h-[490px] relative">
              <Image
                src="/images/featuresPage/fea1.png"
                alt="Header background"
                fill
                className="object-cover p-[5px] rounded-[30px]"
              />
            </div>
            <div className="w-1/2 min-h-[490px] relative ">
              <div className="flex flex-col pl-[70px] mt-[85px] ">
                <h1 className="text-white font-inter text-[30px] not-italic font-normal leading-[140%]">
                  How We Built Our Own <br /> CLI for Better Application <br /> Bootstrapping
                </h1>
                <p className="mt-[10px] text-white font-inter text-[16px] not-italic font-normal leading-[26px]">
                  See how we mastered application bootstrapping <br /> with a CLI tool,
                  simplifying project setups and <br /> development workflows...
                </p>
                <Link
                  href="/features"
                  className="mt-[40px] cursor-pointer hover:underline  items-center text-white font-inter text-[12px] not-italic font-medium leading-[20px]"
                >
                  More Feature
                </Link>
                           <div className="flex  gap-[10px] mt-[63px] ">
                <span className="bg-[#065AF1] text-[12px] leading-[1.2] text-white font-normal px-[10px] py-[4px] rounded-[30px]">
                  #dropshiping
                </span>
                <span className="bg-[#065AF1] text-[12px] leading-[1.2] text-white font-normal px-[10px] py-[4px] rounded-[30px]">
                  #e-commerce
                </span>
              </div>
              </div>
            </div>
          </div>
        </div>
          <div className="flex w-full space-x-[24px]">
                {insightItems.map((item, index) => (
                  <div
                    key={index}
                    className="w-[288px] h-[350px] rounded-2xl p-1.5 overflow-hidden shadow-xl bg-black text-white flex flex-col"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/insight/insight.png"
                        alt="Warehouse"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
        
                    {/* Alt içerik */}
                    <div className="flex flex-col justify-end h-full pl-5">
                      <h3 className="text-[20px] leading-[1.2] text-white font-normal mb-[10px]">
                        Suspendisse <br /> mattis non leo
                      </h3>
        
                      <div className="flex  gap-[10px] mb-[15px]">
                        <span className="bg-[#065AF1] text-[12px] leading-[1.2] text-white font-normal px-[10px] py-[4px] rounded-[30px]">
                          #dropshiping
                        </span>
                        <span className="bg-[#065AF1] text-[12px] leading-[1.2] text-white font-normal px-[10px] py-[4px] rounded-[30px]">
                          #e-commerce
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
      </div>
    </div>
  );
};

export default Insight;
