import Image from "next/image";
import React from "react";

const ProductOverview = () => {
  return (
    <>
      <section className="w-full relative  min-h-screen">
        {/* Sol görsel */}
        <div className="absolute 2xl:-left-120 -left-60 top-2/5 -translate-y-1/2 w-[30vw] min-w-[500px] 2xl:w-[40vw]">
          <Image
            src="/images/content/product1.png"
            alt="Left Image"
            width={1500}
            height={600}
            className="w-full h-auto"
          />
        </div>

        {/* Sağ görsel */}
        <div className="absolute -right-30 top-1/2 -translate-y-40 w-[30vw] min-w-[500px] 2xl:w-[40vw]">
          <Image
            src="/images/content/product2.png"
            alt="Right Image"
            width={1500}
            height={600}
            className="w-full h-auto"
          />
        </div>

        {/* Orta içerik */}
        <div className="absolute top-2/3 left-1/2  -translate-x-2/3 flex -translate-y-1/2 z-10">
          <div className="flex flex-col ">
            <h2 className="text-3xl 2xl:text-6xl 4xl:2xl:text-9xl text-right text-black font-semibold leading-[1.32]">
              A more <br className="hidden lg:block" /> innovative <br />{" "}
              experience
            </h2>
            <p className="text-[18px] text-right 2xl:text-5xl 4xl:2xl:text-8xl  text-black opacity-50 pt-2">
              Possimus cicuta non <br />
              depromo tamquam cornu <br />
              abbas unus cinis verbum <br />
              tamdiu damnatio.
            </p>
          </div>
          <div className="pt-4 pl-10">
            <Image
              src="/icons/content/productsLine.svg"
              width={60}
              height={22}
              alt="Divider"
              className="4xl:w-60 4xl:mr-10"
            />
          </div>
        </div>
      </section>
      <section className="w-full relative  min-h-screen">
        <div className="absolute 2xl:-right-120 -right-70 top-1/2 -translate-y-40 w-[30vw] min-w-[500px] 2xl:w-[40vw]">
          <Image
            src="/images/content/product2.png"
            alt="Right Image"
            width={1500}
            height={600}
            className="w-full h-auto"
          />
        </div>
        {/* Sol görsel */}
        <div className="absolute 2xl:-left-30 -left-20 top-1/2 -translate-y-1/2 w-[30vw] min-w-[500px] 2xl:w-[40vw]">
          <Image
            src="/images/content/product1.png"
            alt="Left Image"
            width={1500}
            height={600}
            className="w-full h-auto"
          />
        </div>
        {/* Sağ görsel */}
        {/* Orta içerik */}

        <div className="absolute top-1/2 left-1/2 pt-20 -translate-x-1/3 flex -translate-y-1/2 z-10">
          <div className="pt-4 pr-6">
            <Image
              src="/icons/content/productsLine.svg"
              width={60}
              height={22}
              alt="Divider"
              className="rotate-180 4xl:w-60 4xl:mr-10"
            />
          </div>{" "}
          <div className="flex flex-col ">
            <h2 className="text-3xl 2xl:text-6xl 4xl:2xl:text-9xl text-left text-black font-semibold leading-[1.32]">
              A more <br  /> innovative <br />{" "}
              experience
            </h2>
            <p className="text-[18px] text-left 2xl:text-5xl 4xl:2xl:text-8xl text-black opacity-50 pt-2">
              Possimus cicuta non <br />
              depromo tamquam cornu <br />
              abbas unus cinis verbum <br />
              tamdiu damnatio.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full relative  min-h-screen">
        {/* Sol görsel */}
        <div className="absolute 2xl:-left-120 -left-60 top-2/5 -translate-y-1/2 w-[30vw] min-w-[500px] 2xl:w-[40vw]">
          <Image
            src="/images/content/product1.png"
            alt="Left Image"
            width={1500}
            height={600}
            className="w-full h-auto"
          />
        </div>

        {/* Sağ görsel */}
        <div className="absolute -right-30 top-1/2 -translate-y-40 w-[30vw] min-w-[500px] 2xl:w-[40vw]">
          <Image
            src="/images/content/product2.png"
            alt="Right Image"
            width={1500}
            height={600}
            className="w-full h-auto"
          />
        </div>

        {/* Orta içerik */}
        <div className="absolute top-2/3 left-1/2  -translate-x-2/3 flex -translate-y-1/2 z-10">
          <div className="flex flex-col ">
            <h2 className="text-3xl 2xl:text-6xl 4xl:2xl:text-9xl text-right text-black font-semibold leading-[1.32]">
              A more <br className="hidden lg:block" /> innovative <br />{" "}
              experience
            </h2>
            <p className="text-[18px] text-right 2xl:text-5xl 4xl:2xl:text-8xl  text-black opacity-50 pt-2">
              Possimus cicuta non <br />
              depromo tamquam cornu <br />
              abbas unus cinis verbum <br />
              tamdiu damnatio.
            </p>
          </div>
          <div className="pt-4 pl-10">
            <Image
              src="/icons/content/productsLine.svg"
              width={60}
              height={22}
              alt="Divider"
              className="4xl:w-60 4xl:mr-10"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductOverview;
