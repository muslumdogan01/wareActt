"use client";

import FAQSection from "@/components/faq/page";
import SignupCard from "@/components/signup/page";
import Image from "next/image";
import Link from "next/link";

const insightItems = [
  {
    image: "/images/insight/insight.png",
    title: "Suspendisse mattis non leo",
    slug: "suspendisse-mattis-non-leo",
    tags: ["#dropshiping", "#e-commerce"],
  },
  {
    image: "/images/insight/ins2.png",
    title: "Cras gravida convallis",
    slug: "cras-gravida-convallis",
    tags: ["#logistics", "#b2b"],
  },
  {
    image: "/images/insight/ins3.png",
    title: "Curabitur blandit tempus",
    slug: "curabitur-blandit-tempus",
    tags: ["#digital", "#marketing"],
  },
  {
    image: "/images/insight/ins4.png",
    title: "Aliquam tincidunt mauris",
    slug: "aliquam-tincidunt-mauris",
    tags: ["#automation", "#technology"],
  },
  {
    image: "/images/insight/insight.png",
    title: "Vestibulum auctor dapibus neque",
    slug: "suspendisse-mattis-non-leo",
    tags: ["#warehouse", "#ai"],
  },
  {
    image: "/images/insight/ins2.png",
    title: "Pellentesque habitant morbi",
    slug: "pellentesque-habitant-morbi",
    tags: ["#3pl", "#innovation"],
  },
  {
    image: "/images/insight/ins3.png",
    title: "Integer vitae libero ac risus",
    slug: "integer-vitae-libero-ac-risus",
    tags: ["#logistics", "#automation"],
  },
  {
    image: "/images/insight/ins4.png",
    title: "Vivamus elementum semper nisi",
    slug: "vivamus-elementum-semper-nisi",
    tags: ["#ecommerce", "#trends"],
  },
];

const Insight = () => {
  return (
    <div className="w-full relative bg-white">
      <div className="lg:bg-[url('/icons/featuresPage/headerBg.svg')] lg:bg-cover lg:bg-center lg:h-[348px] w-full ">
        <div className="container mx-auto relative">
          <div className="px-4 text-center lg:text-left flex flex-col lg:absolute lg:top-[160px] w-full ">
            <h1 className="text-black font-inter  text-[56px] not-italic font-semibold leading-[122%]">
              Insight
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
        <div className="px-4 w-full  mt-[80px] ">
          <div className="flex lg:flex-row flex-col w-full bg-black rounded-[30px]">
            <div className="lg:w-1/2 w-[350px] min-h-[290px] lg:min-h-[490px] relative">
              <Image
                src="/images/featuresPage/fea1.png"
                alt="Header background"
                fill
                className="object-cover p-[5px] rounded-[30px]"
              />
            </div>
            <div className="lg:w-1/2 lg:min-h-[490px] min-h-[440px] relative px-4 lg:px-0">
              <div className="flex flex-col lg:pl-[70px] mt-[85px] ">
                <h1 className="text-white font-inter lg:text-[30px] text-[26px] not-italic font-normal leading-[140%]">
                  How We Built Our Own <br /> CLI for Better Application <br />{" "}
                  Bootstrapping
                </h1>
                <p className="mt-[10px] text-white font-inter text-[16px] not-italic font-normal leading-[26px]">
                  See how we mastered application bootstrapping{" "}
                  <br className="hidden lg:block" /> with a CLI tool,
                  simplifying project setups and{" "}
                  <br className="hidden lg:block" /> development workflows...
                </p>
                <Link
                  href={`/insight/${insightItems[3].slug}`}
                  className="lg:mt-[40px] mt-[24px] cursor-pointer hover:underline items-center text-white font-inter text-[12px] not-italic font-medium leading-[20px]"
                >
                  Read More
                </Link>

                <div className="flex  gap-[10px] lg:mt-[63px] mt-[24px]">
                  <span className="bg-[#065AF1] text-[12px] leading-[1.2] text-white font-normal px-[10px] py-[4px] rounded-[30px]">
                    #dropshiping
                  </span>
                  <span className="bg-[#065AF1] text-[12px] leading-[1.2] text-white font-normal px-[10px] py-[4px] rounded-[30px]">
                    #e-commerce
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 mt-[74px] grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-[24px]">
          {insightItems.map((item, index) => (
            <Link href={`/insight/${item.slug}`} key={index}>
              <div className="lg:w-[288px] lg:h-[350px] w-[360px] h-[322px] 2xl:w-[350px] 2xl:h-[400px] rounded-2xl p-1.5 overflow-hidden shadow-xl bg-black text-white flex flex-col cursor-pointer">
                <div className="relative w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col justify-end h-full pl-5">
                  <h3 className="text-[20px] leading-[1.2] text-white font-normal mb-[10px]">
                    {item.title}
                  </h3>
                  <div className="flex gap-[10px] mb-[15px]">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-[#065AF1] min-w-[92px] text-[12px] leading-[1.2] text-white font-normal px-[10px] py-[4px] rounded-[30px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

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
