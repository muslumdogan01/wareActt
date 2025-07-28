"use client";

import FAQSection from "@/components/faq/page";
import SignupCard from "@/components/signup/page";
import Image from "next/image";
import { useState } from "react";

import React from "react";

const Pricing = () => {
  const [plan, setPlan] = useState("yearly");

  const isYearly = plan === "yearly";
  return (
    <div className="w-full relative bg-white ">
      <div className="lg:bg-[url('/icons/featuresPage/headerBg.svg')] lg:bg-cover lg:bg-center lg:h-[348px] w-full ">
        <div className="container mx-auto relative">
          <div className="px-4 text-center lg:text-left flex flex-col lg:absolute lg:top-[160px] w-full ">
            <h1 className="text-black font-inter  text-[56px] not-italic font-semibold leading-[122%]">
              Pricing
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
        <div className="px-4 w-full ">
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
          <div className="w-full rounded-[40px] border-[4px]  border-white/10 bg-[#065AF1] shadow-[inset_0_0_30px_-4px_rgba(10,40,191,0.06),0_20px_80px_-20px_rgba(0,0,0,0.10)]">
            <div className="w-full flex space-x-[10px] p-[6px]">
              <div>
                <div className="bg-white/10 p-6 rounded-2xl w-full max-w-sm 2xl:max-w-lg text-center flex flex-col gap-4">
                  <div className="flex justify-center gap-2 bg-white/10 p-1 rounded-full">
                    <button
                      onClick={() => setPlan("yearly")}
                      className={`px-4 py-1 rounded-full text-sm font-semibold transition ${
                        isYearly
                          ? "bg-white text-blue-500"
                          : "text-white hover:bg-white/20"
                      }`}
                    >
                      Yearly
                    </button>
                    <button
                      onClick={() => setPlan("monthly")}
                      className={`px-4 py-1 rounded-full text-sm font-semibold transition ${
                        !isYearly
                          ? "bg-white text-blue-500"
                          : "text-white hover:bg-white/20"
                      }`}
                    >
                      Monthly
                    </button>
                  </div>
                  <div className="text-3xl font-bold">
                    ${isYearly ? 29 : 35}
                  </div>
                  <p className="text-sm text-white/80">
                    Built for 3PL warehouses, our software automates everything
                    from inventory tracking
                  </p>
                  <button className="mt-2 border border-white rounded-full px-4 py-2 hover:bg-white hover:text-blue-500 transition">
                    Customer Pays
                  </button>
                </div>
              </div>
              <div className="bg-white h-[480px] 2xl:h-[580px] w-[412px] 2xl:w-[550px]  text-center rounded-tl-[40px] rounded-bl-[40px] rounded-br-lg rounded-tr-lg flex flex-col ">
                <div className="bg-[#E7EEF6] py-[24px] text-sm font-semibold rounded-tl-[40px] rounded-tr-lg  ">
                  FBA / UFS
                </div>
                <div className="pt-[56px] text-black font-normal text-[40px] leading-[1.4]">$4.5</div>
                <p className="pt-[10px] text-black font-normal text-[18px] leading-[1.46]">Per FBA box</p>
                <div className="pt-[30px] text-black font-normal text-[40px] leading-[1.4]">$10</div>
                <p className="pt-[10px] text-black font-normal text-[18px] leading-[1.46]">Per FBA pallet</p>
                <button className="mt-[56px] border m-[30px] border-[#065AF1] rounded-full px-4 py-2 hover:bg-blue-500 cursor-pointer hover:text-white transition">
                  Customer Pays
                </button>
              </div>
              <div className="bg-white h-[480px] 2xl:h-[580px]  w-[412px] 2xl:w-[550px] text-center rounded-tl-lg rounded-bl-lg rounded-br-[40px] rounded-tr-[40px] flex flex-col ">
                <div className="bg-[#E7EEF6] py-[24px] text-sm font-semibold rounded-tl-lg rounded-tr-[40px]  ">
                FBM
                </div>
                <div className="pt-[56px] text-black font-normal text-[40px] leading-[1.4]">$0.40</div>
                <p className="pt-[10px] text-black font-normal text-[18px] leading-[1.46]">Per FBM</p>
        
                <button className="mt-[178px] border m-[30px] border-[#065AF1] rounded-full px-4 py-2 hover:bg-blue-500 cursor-pointer hover:text-white transition">
                  Customer Pays
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-[30px] border border-[#065AF11A] bg-white shadow-[inset_0_0_30px_-4px_rgba(10,40,191,0.06),0_20px_80px_-20px_rgba(0,0,0,0.10)]">
            <div className="flex flex-col">
              <h1>Sample Calculations</h1>
              <span>Sample Order: FBA Single Box</span>
              <p>
                Jason, based in Austin, TX, partners with your warehouse for FBA
                prep services. He requests assistance with preparing and
                shipping a box to Amazon. For this service, Jason owes you
                $65.50. Jason makes a total payment of $70.00, which includes:
                $65.50 for your prep services $4.50 technology fee (paid on top
                of your service charge) From the $4.50 technology fee, $4.50 is
                our revenue—this amount is collected by us after you receive
                payment from Jason. In addition to this, we charge you a $29.00
                monthly subscription fee for using our platform.
              </p>
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
    </div>
  );
};

export default Pricing;
