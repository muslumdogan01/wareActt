"use client";
import Image from "next/image";
import React from "react";
import Marketplaces from "./markePlaces";

const ProductOverview = () => {
  return (
    <section className="w-full bg-[url('/images/content/productBg.png')] bg-no-repeat bg-cover hidden lg:block">
      <div className="max-w-[2500px] mx-auto flex justify-center">
        {/* Sol Görsel */}
        <div className="-ml-128 flex-shrink-0">
          <Image
            src="/images/content/home1.png"
            alt="Dashboard Preview"
            width={780}
            height={600}
            className="w-[680px] h-auto pt-[122px] 2xl:w-[1100px] "
          />
        </div>

        {/* Metin + Çizgi */}
        <div className="w-[580px] pl-[97px] pr-[44px] text-center space-x-[24px] justify-center lg:text-left flex pt-[401px]">
          <div className="min-w-[275px]">
            <h2 className="text-3xl text-right text-black font-semibold leading-[1.32]">
              User Friendly <br className="hidden lg:block" /> Interfaces <br />{" "}
            </h2>
            <p className="w-full text-[18px] text-right text-black opacity-50 pt-[10px] leading-[1.6] ">
              We designed with warehouse <br /> managers and customers for  <br />{" "}
              the most efficient use. <br />
           
            </p>
          </div>
          <div className="w-[60px] pt-2">
            <Image
              src="/icons/content/productsLine.svg"
              alt="Separator Line"
              width={60}
              height={22}
            />
          </div>
        </div>

        {/* Sağ Görsel */}
        <div className="-mr-30 flex-shrink-0">
          <Image
            src="/images/content/home2.png"
            alt="Dashboard Preview"
            width={780}
            height={600}
            className="w-[680px] h-auto pt-[281px] 2xl:w-[1100px] "
          />
        </div>
      </div>
      <div className="max-w-[2500px] mx-auto flex justify-center">
        {/* Görsel */}
        <div className="-ml-32 flex-shrink-0 ">
          <Image
            src="/images/content/home3.png"
            width={809}
            height={600}
            alt="Dashboard Preview"
            className="w-[680px] h-auto pt-[122px] 2xl:w-[1100px] "
          />
        </div>
        <div className="w-[580px]  pr-[97px] pl-[44px] text-center space-x-[24px] justify-center lg:text-left flex pt-[401px]">
          <div className="min-w-[60px] pt-2">
            <Image
              src="/icons/content/productsLine.svg"
              width={60}
              height={60}
              alt="Dashboard Preview"
              className="rotate-180 "
            />
          </div>
          <div className="min-w-[365px]">
            <h2 className="text-3xl text-left text-black font-semibold leading-[1.32]">
            Easy to Handle <br className="hidden lg:block" /> Warehouse Processes <br />{" "}
          
            </h2>
            <p className="text-[18px] text-left text-black opacity-50 pt-[10px]">
            Standardized smart  <br /> processes for world-class  <br /> 
            warehousing. No need for <br /> employee trainings.
            </p>
          </div>
        </div>
        <div className=" -mr-129  flex-shrink-0 ">
          <Image
            src="/images/content/home1.png"
            width={809}
            height={600}
            alt="Dashboard Preview"
            className="w-[680px] h-auto pt-[281px] 2xl:w-[1100px] "
          />
        </div>
      </div>
      <div className="max-w-[2500px] mx-auto flex justify-center">
        {/* Sol Görsel */}
        <div className="-ml-128 flex-shrink-0">
          <Image
            src="/images/content/home2.png"
            alt="Dashboard Preview"
            width={780}
            height={600}
            className="w-[680px] h-auto pt-[122px] 2xl:w-[1100px] "
          />
        </div>

        {/* Metin + Çizgi */}
        <div className="w-[441px] pl-[97px] pr-[44px] text-center space-x-[24px] justify-center lg:text-left flex pt-[401px]">
          <div className="min-w-[215px]">
            <h2 className="text-3xl text-right text-black font-semibold leading-[1.32]">
            Unlimited <br className="hidden lg:block" /> Users and <br />{" "}
            Clients
            </h2>
            <p className="text-[18px] text-right text-black opacity-50 pt-[10px]">
            Opportunity to handle <br /> thousands of clients <br /> 
            and employees with <br />
            one subscription.
            </p>
          </div>
          <div className="w-[60px] pt-[6px]">
            <Image
              src="/icons/content/productsLine.svg"
              alt="Separator Line"
              width={60}
              height={22}
            />
          </div>
        </div>

        {/* Sağ Görsel */}
        <div className="-mr-30 flex-shrink-0">
          <Image
            src="/images/content/home3.png"
            alt="Dashboard Preview"
            width={780}
            height={600}
            className="w-[680px] h-auto pt-[281px] 2xl:w-[1100px] "
          />
        </div>
      </div>
      <div className="mt-[200px] mb-[150px]">
        <Marketplaces />
      </div>
    </section>
  );
};

export default ProductOverview;
