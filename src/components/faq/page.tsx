"use client";
import { useState } from "react";

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

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row lg:space-x-[88px] justify-center lg:items-start items-center rounded-xl px-4 py-[100px] lg:py-[250px]">
      <div className="lg:min-w-[400px] flex flex-col justify-start text-left space-y-5">
        <h2 className="text-black text-center lg:text-left font-inter text-[36px] not-italic font-semibold leading-[1.32]">
          F.A.Q Lorem ipsum <br />
          dolor sit amet
        </h2>
        <button className="w-fit cursor-pointer hidden  hover:bg-blue-50 lg:inline-flex items-center px-[20px] py-[10px] gap-[10px] rounded-[100px] border border-[#065AF1] text-[#065AF1] font-inter text-[14px] not-italic font-semibold leading-[140%]">
          More F.A.Q
        </button>
      </div>
      <div className="space-y-3 w-full lg:max-w-[600px] mt-5 lg:mt-0">
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
  );
}
