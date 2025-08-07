"use client";

import Image from "next/image";
import Link from "next/link";
import FAQSection from "@/components/faq/page";
import SignupCard from "@/components/signup/page";
import { useEffect, useState } from "react";

interface InsightItem {
  id: number;
  title: string;
  slug: string;
  image?: {
    url?: string;
    formats?: {
      medium?: {
        url: string;
      };
    };
  };
}

const Insight = () => {
  const [insights, setInsights] = useState<InsightItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_API_URL}/api/insights?populate=*`);
        const json = await res.json();
        setInsights(json.data);
      } catch (error) {
        console.error("Failed to fetch insightss:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchInsights();
  }, []);

  const featured = insights[0];
  const featuredImageUrl = featured?.image?.formats?.medium?.url || featured?.image?.url;

  return (
    <div className="w-full relative bg-white">
      {/* Header */}
      <div className="lg:bg-[url('/icons/featuresPage/headerBg.svg')] lg:bg-cover lg:bg-center lg:h-[348px] w-full">
        <div className="container mx-auto relative">
          <div className="px-4 text-center lg:text-left flex flex-col lg:absolute lg:top-[160px] w-full">
            <h1 className="text-black font-inter text-[56px] font-semibold leading-[122%]">
              Insight
            </h1>
            <h2 className="mt-[10px] text-black font-inter text-[18px] font-normal leading-[146%]">
              Built for 3PL warehouses, our software automates everything from inventory tracking
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

      <div className="container mx-auto">
        {/* FEATURED */}
        {featured && (
          <div className="px-4 w-full mt-[80px]">
            <div className="flex lg:flex-row flex-col w-full bg-black rounded-[30px]">
              <div className="lg:w-1/2 w-[350px] md:w-full md:min-h-[390px] min-h-[290px] lg:min-h-[490px] relative">
                <Image
                  src={featuredImageUrl ? `${process.env.NEXT_PUBLIC_CMS_API_URL}${featuredImageUrl}` : "/images/placeholder.png"}
                  alt={featured.title}
                  fill
                  className="object-cover p-[5px] rounded-[30px]"
                />
              </div>
              <div className="lg:w-1/2 lg:min-h-[490px] min-h-[440px] relative px-4 lg:px-0">
                <div className="flex flex-col lg:pl-[70px] mt-[85px]">
                  <h1 className="text-white font-inter lg:text-[30px] text-[26px] font-normal leading-[140%]">
                    {featured.title}
                  </h1>
                  <p className="mt-[10px] text-white font-inter text-[16px] font-normal leading-[26px]">
                    Featured insight description goes here...
                  </p>
                  <Link
                    href={`/insight/${featured.slug}`}
                    className="lg:mt-[40px] mt-[24px] hover:underline text-white font-inter text-[12px] font-medium leading-[20px]"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* GRID LIST */}
        <div className="px-4 mt-[74px] mb-[100px] grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-[24px]">
          {isLoading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : insights.length === 0 ? (
            <p className="text-center text-gray-500">No insights found.</p>
          ) : (
            insights.map((item) => {
              const imageUrl = item.image?.formats?.medium?.url || item.image?.url;
              return (
                <Link href={`/insight/${item.slug}`} key={item.id}>
                  <div className="lg:w-[288px] lg:h-[350px] w-[360px] h-[322px] 2xl:w-[350px] 2xl:h-[400px] rounded-2xl p-1.5 overflow-hidden shadow-xl bg-black text-white flex flex-col cursor-pointer">
                    <div className="relative w-full h-full">
                      <Image
                        src={imageUrl ? `${process.env.NEXT_PUBLIC_CMS_API_URL}${imageUrl}` : "/images/placeholder.png"}
                        alt={item.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col justify-end h-full pl-5">
                      <h3 className="text-[20px] leading-[1.2] text-white font-normal mb-[10px]">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              );
            })
          )}
        </div>

        {/* FAQ + Signup */}
        <div className="lg:max-w-[1440px] lg:mx-auto">
          <FAQSection />
        </div>
        <div>
          <SignupCard />
        </div>
      </div>
    </div>
  );
};

export default Insight;
