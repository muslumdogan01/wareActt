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

const InsightWeb = () => {
  return (
    <div className="w-full ">
      <div className=" flex  justify-between items-center  mb-[35px]">
        <h1 className="text-4xl text-black font-semibold leading-[1.3] ">
          Insight
        </h1>
<Link href="/features" className="cursor-pointer hover:bg-blue-50 inline-flex items-center px-[20px] py-[10px] gap-[10px] rounded-[100px] border border-[#065AF1] text-[#065AF1] font-inter text-[14px] not-italic font-semibold leading-[140%]">
  More Feature
</Link>
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
  );
};

export default InsightWeb;
