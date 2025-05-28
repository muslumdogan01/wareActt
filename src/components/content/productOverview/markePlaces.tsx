"use client";

import Image from "next/image";
import { useState } from "react";

export default function Marketplaces() {
  const [activeTab, setActiveTab] = useState<"marketplaces" | "carriers">(
    "marketplaces"
  );

  const marketplaceBrands = [
    { name: "Amazon", logo: "/icons/features/amazon.svg" },
    { name: "Shopify", logo: "/icons/features/shopify.svg" },
    { name: "eBay", logo: "/icons/features/erbay.svg" },
    { name: "Walmart", logo: "/icons/features/walmart.svg" },
    { name: "Etsy", logo: "/icons/features/etsy.svg" },
  ];

  const carrierBrands = [
    { name: "Amazon", logo: "/icons/features/amazon.svg" },
    { name: "Amazon", logo: "/icons/features/amazon.svg" },
    { name: "Amazon", logo: "/icons/features/amazon.svg" },
    { name: "Amazon", logo: "/icons/features/amazon.svg" },

  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-8">
      {/* Tab Navigation */}
      <div className="flex justify-center mb-12">
        <div className="flex space-x-[50px]">
          <button
            onClick={() => setActiveTab("marketplaces")}
            className={`relative  text-[30px] cursor-pointer not-italic font-semibold leading-[132%] transition-colors duration-200 ${
              activeTab === "marketplaces"
                ? "text-[#065AF1]"
                : "text-black hover:text-gray-800"
            }`}
          >
            Marketplaces
            {activeTab === "marketplaces" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 transition-all duration-200" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("carriers")}
            className={`relative text-[30px] cursor-pointer not-italic font-semibold leading-[132%] transition-colors duration-200 ${
              activeTab === "carriers"
                ? "text-blue-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Carriers
            {activeTab === "carriers" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 transition-all duration-200" />
            )}
          </button>
        </div>
      </div>

      {/* Brand Logos */}
      <div className="relative ">
        <div
          className={`transition-all duration-500 ease-in-out ${
            activeTab === "marketplaces"
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
          style={{ display: activeTab === "marketplaces" ? "block" : "none" }}
        >
          <div className="flex justify-center items-center space-x-[30px] flex-wrap ">
            {marketplaceBrands.map((brand, index) => (
              <div
                key={`marketplace-${index}`}
                className="flex items-center justify-center rounded-[70px] bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.04),_0_20px_30px_-10px_rgba(0,0,0,0.10)] hover:bg-gray-100 transition-colors duration-200 min-w-[170px] h-[70px]"
              >
                <Image
                  src={brand.logo}
                  alt="Header background"
                  width={74}
                  height={30}
                />
              </div>
            ))}
          </div>
        </div>

        <div
          className={`transition-all duration-500 ease-in-out ${
            activeTab === "carriers"
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
          style={{ display: activeTab === "carriers" ? "block" : "none" }}
        >
          <div className="flex justify-center items-center space-x-8 flex-wrap gap-y-6">
            {carrierBrands.map((brand, index) => (
              <div
                key={`carrier-${index}`}
                className="flex items-center justify-center rounded-[70px] bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.04),_0_20px_30px_-10px_rgba(0,0,0,0.10)] hover:bg-gray-100 transition-colors duration-200 min-w-[170px] h-[70px]"
              >
                <Image
                  src={brand.logo}
                  alt="Header background"
                  width={74}
                  height={30}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
