import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="w-full relative h-screen">
      <div className="bg-[url('/icons/featuresPage/headerBg.svg')] bg-cover bg-center h-[348px] w-full ">
        <div className="container mx-auto relative">
          <div className="absolute top-22 2xl:right-[-80px] right-[-45px]">
            <Image
              src="/icons/featuresPage/square.svg"
              alt="Header background"
              width={375}
              height={375}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-screen"></div>
    </div>
  );
};

export default Features;
