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
          <div className="w-full rounded-[40px] border-[4px] mt-[50px]  border-white/10 bg-[#065AF1] shadow-[inset_0_0_30px_-4px_rgba(10,40,191,0.06),0_20px_80px_-20px_rgba(0,0,0,0.10)]">
          <div className="w-full flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-[10px] p-[6px]">
              <div className=" w-full lg:h-[480px] 2xl:w-[550px] px-5 rounded-2xl max-w-sm 2xl:max-w-lg text-center flex flex-col justify-between mx-auto">
                <div className="flex flex-col justify-between h-full my-[30px]">
                  <div>
                    <div className="lg:w-[320px] h-[50px] flex justify-center items-center gap-2 bg-white/10 p-1 rounded-full">
                      <button
                        onClick={() => setPlan("yearly")}
                        className={`px-[4px] cursor-pointer rounded-[60px] w-[156px] h-[42px] py-[4px]  text-sm font-normal leading-[1.4] transition ${
                          isYearly
                            ? "bg-white text-black"
                            : "text-white/50 hover:bg-white/20"
                        }`}
                      >
                        Yearly
                      </button>
                      <button
                        onClick={() => setPlan("monthly")}
                        className={`px-[4px] rounded-[60px] cursor-pointer w-[156px] h-[42px] py-[4px]  text-sm font-normal leading-[1.4] transition ${
                          !isYearly
                            ? "bg-white text-black"
                            : "text-white/50 hover:bg-white/20"
                        }`}
                      >
                        Monthly
                      </button>
                    </div>
                    <div className="text-[40px] pt-[54px] text-left font-normal leading-[1.4] text-white">
                      <span>${isYearly ? 29 : 35}</span>
                      <p className="text-left font-normal pt-[10px] text-[18px] leading-[1.46] text-white">
                        Built for 3PL warehouses, our software automates
                        everything from inventory tracking
                      </p>
                    </div>
                  </div>
                  <div>
                    <button className="mt-[40px] lg:mt-0 text-white text-sm w-full font-normal leading-[1.46] cursor-pointer  border border-white rounded-full px-4 py-2 hover:bg-white hover:text-blue-500 transition">
                      Customer Pays
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white h-[400px] lg:h-[480px] rounded-4xl w-full lg:w-[412px] 2xl:w-[550px]  text-center lg:rounded-tl-[40px] lg:rounded-bl-[40px] lg:rounded-br-lg lg:rounded-tr-lg flex flex-col ">
                <div className="bg-[#E7EEF6] py-[24px] text-sm font-semibold lg:rounded-tl-[40px] rounded-3xl lg:rounded-tr-lg  ">
                  FBA / UFS
                </div>
                <div className="flex flex-col justify-between h-full mb-[30px]">
                  <div className="w-full text-left pl-[40px]">
                    <div className="lg:pt-[56px] pt-[30px] text-black font-normal text-[40px] leading-[1.4]">
                      $4.5
                    </div>
                    <p className="pt-[10px] text-black font-normal text-[18px] leading-[1.46]">
                      Per FBA box
                    </p>
                    <div className="pt-[30px] text-black font-normal text-[40px] leading-[1.4]">
                      $10
                    </div>
                    <p className="pt-[10px] text-black font-normal text-[18px] leading-[1.46]">
                      Per FBA pallet
                    </p>
                  </div>
                  <button
                    className="border mx-[30px] border-[#065AF1] rounded-full text-sm font-normal leading-[1.46] text-[#065AF1]
                px-4 py-2 hover:bg-blue-500 cursor-pointer hover:text-white transition"
                  >
                    Customer Pays
                  </button>
                </div>
              </div>
              <div className="bg-white h-[400px] lg:h-[480px] rounded-4xl w-full lg:w-[412px] 2xl:w-[550px] text-center lg:rounded-tl-lg lg:rounded-bl-lg lg:rounded-br-[40px] lg:rounded-tr-[40px] flex flex-col ">
                <div className="bg-[#E7EEF6] py-[24px] text-sm font-semibold lg:rounded-tl-lg rounded-3xl lg:rounded-tr-[40px]  ">
                  FBM
                </div>
                <div className="flex flex-col justify-between h-full ">
                  <div className="w-full text-left pl-[40px]">
                    <div className="pt-[56px] text-black font-normal text-[40px] leading-[1.4]">
                      $0.40
                    </div>
                    <p className="pt-[10px] text-black font-normal text-[18px] leading-[1.46]">
                      Per FBM
                    </p>
                  </div>

                  <button
                    className="m-[30px] border border-[#065AF1] rounded-full text-sm font-normal leading-[1.46] text-[#065AF1]
                px-4 py-2 hover:bg-blue-500 cursor-pointer hover:text-white transition"
                  >
                    Customer Pays
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col mt-[150px] items-center">
            <div className="max-w-[1050px] lg:px-[50px] px-4 rounded-[30px] border border-[#065AF11A] bg-white shadow-[inset_0_0_30px_-4px_rgba(10,40,191,0.06),0_20px_80px_-20px_rgba(0,0,0,0.10)]">
              {/* Sample Calculations Section */}
              <div className="bg-white mt-[50px] lg:p-[40px] rounded-[30px] lg:max-w-[800px] mx-auto mb-[50px] ">
                <h2 className="text-center text-black text-[24px] font-normal leading-[1.4] mb-[30px]">
                  Sample Calculations
                </h2>

                <div className="text-left text-black text-[16px] font-normal leading-[1.6] space-y-[24px]">
                  <div>
                    <p className="font-semibold">
                      Sample Order: FBA Single Box
                    </p>
                    <p className="mt-3">
                      Jason, based in Austin, TX, partners with your warehouse
                      for FBA prep services. He requests assistance with
                      preparing and shipping a box to Amazon. For this service,
                      Jason owes you $65.50. Jason makes a total payment of
                      $70.00, which includes:
                    </p>
                    <ul className="list-disc ml-[20px]">
                      <li>$65.50 for your prep services</li>
                      <li>
                        $4.50 technology fee (paid on top of your service
                        charge)
                      </li>
                    </ul>
                    <p>
                      From the $4.50 technology fee, $4.50 is our revenue—this
                      amount is collected by us after you receive payment from
                      Jason. In addition to this, we charge you a $29.00 monthly
                      subscription fee for using our platform.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold mt-3">Sample Order: FBA Pallet</p>
                    <p>
                      Sarah, located in Irvine, CA, uses your warehouse for FBA
                      services. She needs assistance with preparing and shipping
                      a pallet to Amazon. You charge Sarah $450.00 for your prep
                      work. She pays a total of $460.00, which includes:
                    </p>
                    <ul className="list-disc ml-[20px]">
                      <li>$450.00 for your services</li>
                      <li>$10.00 as a technology fee</li>
                    </ul>
                    <p>
                      Once Sarah pays you, we collect the $10.00 technology fee
                      from your total—this is our platform fee. Additionally,
                      your account includes a $29.00 monthly subscription to
                      maintain access to the system and tools we provide.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold">
                      Sample Order: Marketplace Order
                    </p>
                    <p className="mt-3">
                      Max, located in Wayne, NJ, relies on your warehouse to
                      fulfill his daily Etsy orders. Today, he needs help
                      fulfilling 20 orders. He logs into his account, navigates
                      to the ‘Orders’ page, and clicks a button to import his
                      orders directly from Etsy. Once the 20 orders are pulled
                      into the system, a technology fee of $0.10 per order is
                      applied. In total, Max pays you $2.00 for this batch of 20
                      orders. That $2.00 represents the technology fee, which we
                      collect from you after you receive payment from Max.
                      Additionally, you are charged a $29.00 monthly
                      subscription fee for continued access to our platform.
                    </p>
                  </div>
                </div>
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
    </div>
  );
};

export default Pricing;
