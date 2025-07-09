"use client";
import { useState } from "react";
import Image from "next/image";
import React from "react";
import SignupCard from "@/components/signup/page";

const faqData = [
  {
    question: "İhtiyacınız olan her türlü teslimat,",
    answer:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    question: "İhtiyacınız olan her türlü teslimat,",
    answer:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    question: "İhtiyacınız olan her türlü teslimat,",
    answer:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    question: "İhtiyacınız olan her türlü teslimat,",
    answer:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
  {
    question: "İhtiyacınız olan her türlü teslimat,",
    answer:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="w-full relative bg-white 4xl:h-full ">
      <div className="lg:bg-[url('/icons/featuresPage/headerBg.svg')] lg:bg-cover lg:bg-center lg:h-[348px] w-full ">
        <div className="container mx-auto relative">
          <div className="px-4 text-center lg:text-left flex flex-col lg:absolute lg:top-[160px] w-full ">
            <h1 className="text-black font-inter  text-[56px] not-italic font-semibold leading-[122%]">
              F.A.Q
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
              Explore the Most Frequently <br className="hidden md:block" />
              Asked Questions About <br className="hidden md:block" />
              Our Platform
            </h1>
          </div>
          <div className="w-full mt-[50px] ">
            <div className="space-y-3 w-full mt-5 lg:mt-0">
              {faqData.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className=" rounded-[10px] border border-[rgba(0,0,0,0.10)] bg-white py-[20px] px-[20px]  cursor-pointer transition-all"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-black font-inter text-[18px] not-italic font-normal leading-[1.6]">
                        {item.question}
                      </span>
                      <span className="text-[24px] font-normal text-black">
                        {isOpen ? "−" : "+"}
                      </span>
                    </div>

                    {/* Animasyonlu Açılır Alan */}
                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 mt-3"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-black font-inter text-[18px] not-italic font-normal leading-[1.6]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-[150px] ">
            <SignupCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
