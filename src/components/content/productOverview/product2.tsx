import Image from "next/image";
import React from "react";

const Product2 = () => {
  return (
    <section className="w-full h-screen relative bg-[url('/icons/content/productBg.svg')] bg-no-repeat bg-cover hidden lg:block">
      <div className=" h-screen flex w-full ">
        {/* Görsel */}
        <div className="-left-180 3xl:-left-210 4xl:-left-410 top-40 absolute">
          <Image
            src="/images/content/product1.png"
            width={780}
            height={600}
            alt="Dashboard Preview"
            className="w-full h-auto 3xl:h-screen pt-[122px]"
          />
        </div>

        <div className="w-[441px] left-1/3 top-40 absolute text-center space-x-[24px] justify-center lg:text-left flex pt-[401px]">
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
        <div className="-right-32 3xl:-right-80 4xl:-right-280 top-40 absolute">
          <Image
            src="/images/content/product2.png"
            width={780}
            height={600}
            alt="Dashboard Preview"
            className="w-full h-auto 3xl:h-screen pt-[281px]"
          />
        </div>
      </div>
 
    </section>
  );
};

export default Product2;
