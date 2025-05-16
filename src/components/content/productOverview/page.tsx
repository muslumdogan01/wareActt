import Image from "next/image";
import React from "react";

const ProductOverview = () => {
  return (
    <section className="w-full bg-[url('/images/content/productBg.png')] bg-no-repeat bg-cover hidden lg:block">
      <div className="relative flex items-end justify-between max-w-[1920px] mx-auto overflow-visible">
        {/* Sol resim */}
        <div className="relative flex-shrink-0 -ml-[124px]">
          <Image
            src="/images/content/product1.png"
            width={780}
            height={600}
            alt="Dashboard Preview"
            className="w-[35vw] min-w-[450px] max-w-[780px] h-auto pt-[122px]"
          />
        </div>

        {/* Metin ve çizgi */}
        <div className="flex justify-between items-start px-0 pt-[401px] gap-[44px]">
          <div style={{ paddingLeft: "155px", paddingRight: "44px" }} className="text-center lg:text-left min-w-[215px]">
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
              alt="products line"
            />
          </div>
        </div>

        {/* Sağ resim */}
        <div className="relative flex-shrink-0 -mr-[32px]">
          <Image
            src="/images/content/product2.png"
            width={780}
            height={600}
            alt="Dashboard Preview"
            className="w-[30vw] min-w-[400px] max-w-[780px] h-auto pt-[281px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
