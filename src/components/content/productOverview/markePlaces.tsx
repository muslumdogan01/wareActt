"use client"

import { useState } from "react"

export default function Marketplaces() {
  const [activeTab, setActiveTab] = useState<"marketplaces" | "carriers">("marketplaces")

  const marketplaceBrands = [
    { name: "Amazon", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Shopify", logo: "/placeholder.svg?height=40&width=120" },
    { name: "eBay", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Walmart", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Etsy", logo: "/placeholder.svg?height=40&width=120" },
  ]

  const carrierBrands = [
    { name: "FedEx", logo: "/placeholder.svg?height=40&width=120" },
    { name: "UPS", logo: "/placeholder.svg?height=40&width=120" },
    { name: "DHL", logo: "/placeholder.svg?height=40&width=120" },
    { name: "USPS", logo: "/placeholder.svg?height=40&width=120" },
    { name: "TNT", logo: "/placeholder.svg?height=40&width=120" },
  ]

  return (
    <div className="w-full max-w-4xl mx-auto p-8">
      {/* Tab Navigation */}
      <div className="flex justify-center mb-12">
        <div className="flex space-x-8">
          <button
            onClick={() => setActiveTab("marketplaces")}
            className={`relative  text-[30px] cursor-pointer not-italic font-semibold leading-[132%] transition-colors duration-200 ${
              activeTab === "marketplaces" ? "text-[#065AF1]" : "text-black hover:text-gray-800"
            }`}
          >
            Marketplaces
            {activeTab === "marketplaces" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 transition-all duration-200" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("carriers")}
            className={`relative pb-2 text-lg font-medium transition-colors duration-200 ${
              activeTab === "carriers" ? "text-blue-600" : "text-gray-600 hover:text-gray-800"
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
      <div className="relative overflow-hidden">
        <div
          className={`transition-all duration-500 ease-in-out ${
            activeTab === "marketplaces" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ display: activeTab === "marketplaces" ? "block" : "none" }}
        >
          <div className="flex justify-center items-center space-x-8 flex-wrap gap-y-6">
            {marketplaceBrands.map((brand, index) => (
              <div
                key={`marketplace-${index}`}
                className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 min-w-[140px] h-16"
              >
                <span className="text-sm font-medium text-gray-700">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`transition-all duration-500 ease-in-out ${
            activeTab === "carriers" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ display: activeTab === "carriers" ? "block" : "none" }}
        >
          <div className="flex justify-center items-center space-x-8 flex-wrap gap-y-6">
            {carrierBrands.map((brand, index) => (
              <div
                key={`carrier-${index}`}
                className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 min-w-[140px] h-16"
              >
                <span className="text-sm font-medium text-gray-700">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
