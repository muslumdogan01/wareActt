"use client";
import Image from "next/image";
import React from "react";

const Dashboard = () => {
  return (
    <div className="w-full hidden lg:flex justify-center items-baseline relative">
      <section className="flex justify-center items-center relative z-20">
        <div className="w-full max-w-[1016px] relative -mt-60 @[5300px]/Dash:-mt-20 z-20">
          {/* Sol üst süs */}
          <div className="absolute -top-2 z-10 left-[-105px]">
            <Image
              src="/icons/content/dots.svg"
              width={250}
              height={75}
              alt="dots"
            />
          </div>

          {/* Ana resim */}
          <div>
            <Image
              src="/images/content/dashboard.png"
              alt="Dashboard preview"
              width={1500}
              height={874}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Sağ alt süs */}
          <div className="absolute bottom-5 right-0 xl:right-[-105px]">
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
