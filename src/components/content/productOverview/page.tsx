"use client";
import Image from "next/image";
import React from "react";
import Marketplaces from "./markePlaces";

const ProductOverview = () => {
  return (
    <section className="w-full  bg-[url('/images/content/productBg.png')] bg-no-repeat bg-cover hidden lg:block">
        
        
        <div className="w-full mx-auto flex 2xl:justify-center  ">
        {/* Sol Görsel */}
        <div className="-ml-128 2xl:-ml-180  flex-shrink-0 pt-[152px]">
          <Image
            src="/images/content/home1.png"
            alt="Dashboard Preview"
            width={809}
            height={600}
            className="w-[809px] h-[auto]  2xl:w-[1200px] border-[10px] border-[#F0F0F0] rounded-[30px]"
          />
        </div>

        {/* Metin + Çizgi */}
        <div className="w-[580px] 2xl:pl-[97px] pr-[44px] text-center space-x-[24px] justify-center lg:text-left flex pt-[501px]">
          <div className="min-w-[275px]">
            <h2 className="2xl:text-3xl text-xl text-right text-black font-semibold leading-[1.32]">
              User Friendly <br className="hidden lg:block" /> Interfaces <br />{" "}
            </h2>
            <p className="w-full 2xl:text-[18px] text-[16px] text-right text-black opacity-50 pt-[10px] leading-[1.6] ">
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
        <div className="-mr-30 2xl:-mr-40  flex-shrink-0 pt-[341px]">
          <Image
            src="/images/content/home2.png"
            alt="Dashboard Preview"
            width={809}
            height={600}
            className="w-[809px] h-auto  2xl:w-[1200px] border-[10px] border-[#F0F0F0] rounded-[30px]"
          />
        </div>
      </div>
     
    
      <div className="w-full mx-auto flex 2xl:justify-center ">
        {/* Görsel */}
        <div className="-ml-70 2xl:-ml-32   flex-shrink-0 pt-[200px] ">
          <Image
            src="/images/content/home3.png"
            width={809}
            height={600}
            alt="Dashboard Preview"
           className="w-[809px] h-auto  2xl:w-[1200px] border-[10px] border-[#F0F0F0] rounded-[30px]"
          />
        </div>
        <div className="w-[580px]  2xl:pr-[97px] pl-[44px] text-center space-x-[24px] justify-center lg:text-left flex pt-[401px]">
          <div className="min-w-[60px] pt-2">
            <Image
              src="/icons/content/productsLine.svg"
              width={60}
              height={60}
              alt="Dashboard Preview"
              className="rotate-180 "
            />
          </div>
          <div className="2xl:min-w-[365px] min-w-[265px]">
            <h2 className="2xl:text-3xl text-xl text-left text-black font-semibold leading-[1.32]">
            Easy to Handle <br className="hidden lg:block" /> Warehouse Processes 
          
            </h2>
            <p className="2xl:text-[18px] text-[16px] text-left text-black opacity-50 pt-[50px]">
            Standardized smart  <br /> processes for world-class  <br /> 
            warehousing. No need for <br /> employee trainings.
            </p>
          </div>
        </div>
        <div className=" 2xl:-mr-80 -mr-50  flex-shrink-0 pt-[550px] ">
          <Image
            src="/images/content/home1.png"
            width={809}
            height={600}
            alt="Dashboard Preview"
        className="w-[809px] h-auto  2xl:w-[1200px] border-[10px] border-[#F0F0F0] rounded-[30px]"
          />
        </div>
      </div>

          <div className="w-full mx-auto flex 2xl:justify-center ">
        {/* Sol Görsel */}
        <div className="-ml-128 2xl:-ml-180  flex-shrink-0 pt-[152px]">
          <Image
            src="/images/content/home1.png"
            alt="Dashboard Preview"
            width={809}
            height={600}
            className="w-[809px] h-[auto]  2xl:w-[1200px] border-[10px] border-[#F0F0F0] rounded-[30px]"
          />
        </div>

        {/* Metin + Çizgi */}
        <div className="w-[580px] 2xl:pl-[97px] 2xl:pr-[44px] text-center space-x-[24px] justify-center lg:text-left flex pt-[550px]">
          <div className="min-w-[275px]">
            <h2 className="2xl:text-3xl text-xl text-right text-black font-semibold leading-[1.32]">
                         Unlimited <br className="hidden lg:block" /> Users and <br />{" "}
            Clients
            </h2>
            <p className="w-full 2xl:text-[18px] text-[16px] text-right text-black opacity-50 pt-[10px] leading-[1.6] ">
               Opportunity to handle <br /> thousands of clients <br /> 
            and employees with <br />
            one subscription.
           
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
        <div className="-mr-30 2xl:-mr-40 flex-shrink-0 pt-[441px]">
          <Image
            src="/images/content/home1.png"
            alt="Dashboard Preview"
            width={809}
            height={600}
            className="w-[809px] h-auto  2xl:w-[1200px] border-[10px] border-[#F0F0F0] rounded-[30px]"
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
