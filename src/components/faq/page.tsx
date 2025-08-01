"use client";
import Link from "next/link";
import { useState } from "react";

const faqData = [
  {
    question: "How can WareAct benefit my business?",
    answer:
      "WareAct is designed to simplify and streamline your 3PL warehouse operations. From real-time inventory tracking to automated order management and seamless integration with marketplaces and carriers, WareAct helps reduce manual work, minimize errors, and improve customer satisfaction — so you can focus on growing your business.",
  },
  {
    question: "Is WareAct suitable for small warehouses?",
    answer:
      "Absolutely! WareAct is built to scale. Whether you’re managing a single warehouse or multiple locations, our flexible system can adapt to your needs. Small warehouses benefit from the same powerful tools and automation as larger operations, without unnecessary complexity.",
  },
  {
    question: "Can WareAct integrate with marketplaces?",
    answer:
      "Yes! WareAct integrates with popular eCommerce marketplaces like Amazon, eBay, Shopify, WooCommerce, and more. These integrations ensure that orders, inventory, and shipment updates flow automatically between your warehouse and your sales channels.",
  },
  {
    question: "Can WareAct integrate with carriers?",
    answer:
      "Definitely. WareAct supports direct integrations with major carriers such as UPS, FedEx, DHL, USPS, and many others. This allows you to generate shipping labels, track shipments, and automate notifications — all within the platform.",
  },
  {
    question: "Is WareAct cloud-based or on-premise?",
    answer:
      "WareAct is a cloud-based solution, meaning you can access your warehouse data anytime, anywhere, from any device with an internet connection. No expensive hardware, installations, or maintenance are required on your side.",
  },
  {
    question: "How secure is WareAct?",
    answer:
      "Security is a top priority at WareAct. We use industry-leading encryption protocols, secure data centers, and regular backups to ensure your business data is protected 24/7. You can trust WareAct to keep your sensitive information safe.",
  },
  {
    question: "How do I get started with WareAct?",
    answer:
      "Getting started is easy! Reach out to our team, and we’ll guide you through the onboarding process — from setup and configuration to training and go-live support. We’re here to ensure a smooth and successful start. You can also just sign up and start using immediately.",
  },
  {
    question: "What is the cost of WareAct software?",
    answer:
      "Our pricing is designed to fit businesses of all sizes. We modeled a pricing that will ask payment for each transaction made. Warehouse owner only pays $29 per month and the warehouse customers pay for their transactions.",
  },
  {
    question: "How does the pricing work with WareAct?",
    answer:
      "WareAct offers flexible, transaction-based pricing. Your customers only pay for what they use — no hidden fees. Let's say a customer asked from you to prepare an FBA box and paid you $150, s/he will also pay $4.5 technology fee and it will come to us. Warehouse owner only pays $29 subscription fee per month.",
  },
  {
    question: "How long does it take to implement WareAct?",
    answer:
      "It only takes a few minutes to implement WareAct for your warehouse. You can also show your domain, your logo and brand all over the software.",
  },
  {
    question: "Do you offer training for new users?",
    answer:
      "We have training videos within the software for both warehouse customers and warehouse employees. These videos will be enough to learn everything about the software.",
  },
  {
    question: "How often is WareAct updated?",
    answer:
      "WareAct has a lot to offer and limitless updates are on the way to help your business. New features will bring you more customers and more profit.",
  },
  {
    question: "Is there a mobile app available for WareAct?",
    answer:
      "WareAct was designed with a mobile friendly user interface. However, a mobile app will be available soon on App Store and Google Play very soon.",
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
        <Link
          href="/faq"
          className="w-fit cursor-pointer hidden hover:bg-blue-50 lg:inline-flex items-center px-[20px] py-[10px] gap-[10px] rounded-[100px] border border-[#065AF1] text-[#065AF1] font-inter text-[14px] not-italic font-semibold leading-[140%]"
        >
          More F.A.Q
        </Link>
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
