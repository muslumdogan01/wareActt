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
    <div className="w-full flex flex-col justify-center items-center rounded-xl px-4 py-[100px]">
      <h2 className="text-black text-center font-inter text-[36px] not-italic font-semibold leading-[1.32]">
        F.A.Q Lorem ipsum <br />
        dolor sit amet
      </h2>

      <div className="space-y-3 w-full max-w-4xl mt-5">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl py-[20px] px-[20px]  cursor-pointer transition-all"
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
