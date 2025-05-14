

import Image from "next/image";
import React from "react";

const ProductOverview = () => {
  return (
    <section className="w-full  bg-[url('/images/content/productBg.png')]  bg-no-repeat bg-cover hidden lg:block">
      <div className="max-w-[1400px] mx-auto overflow-hidden flex ">
        {/* Görsel */}
        <div className="-ml-124 flex-shrink-0 ">
          <Image
            src="/images/content/product1.png"
            width={780}
            height={600}
            alt="Dashboard Preview"
            className="max-w-full h-auto pt-[122px]"
          />
        </div>

        <div className="w-[441px]  pl-[97px] pr-[44px] text-center space-x-[24px] justify-center lg:text-left flex pt-[401px]">
          <div className="min-w-[215px]">
            <h2 className="text-3xl text-right text-black font-semibold leading-[1.32]">
              A more <br className="hidden lg:block" /> innovative <br />{" "}
              experience
            </h2>
            <p className="text-[18px] text-right text-black opacity-50 pt-[10px]">
              Possimus cicuta non <br /> depromo tamquam cornu <br /> abbas unus
              cinis verbum <br />
              tamdiu damnatio.
            </p>

          </div>
          <div className="w-[60px]">
          <Image
            src="/icons/content/productsLine.svg"
            width={60}
            height={22}
            alt="Dashboard Preview"

          />
        </div>
        </div>
        <div className="-mr-32 flex-shrink-0 ">

          <Image
            src="/images/content/product2.png"
            width={780}
            height={600}
            alt="Dashboard Preview"
            className="max-w-full h-auto pt-[281px]"
          />
        </div>

      </div>

    </section>
  );
};

export default ProductOverview;
