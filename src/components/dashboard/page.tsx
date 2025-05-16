import Image from "next/image";
import React from "react";

const Dashboard = () => {
  return (
    <div className=" w-full hidden lg:flex  justify-center items-baseline  mt-[230px] 3xl:mt-[300px] 4xl:mt-[550px]  relative">

      <section className="flex justify-center items-center  relative z-50">
        <div className="w-full max-w-[1016px] relative">
          <div className="absolute top-[-28px] left-[-105px]">
            <Image
              src="/icons/content/dots.svg"
              width={250}
              height={75}
              alt="dots"
            />
          </div>
          <Image
            src="/images/content/dashboard.png"
            alt="Dashboard preview"
            width={1500}
            height={874}
            className="w-full h-auto object-contain"
          />
          <div className="absolute bottom-0 right-0 xl:right-[-105px]">
            <Image
              src="/icons/content/rightDots.svg"
              width={250}
              height={75}
              alt="dots"
              className="h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
