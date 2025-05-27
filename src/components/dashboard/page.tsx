import Image from "next/image";
import React from "react";

const Dashboard = () => {
  return (
    <div className="max-w-[1800px] relative">
      <div className=" absolute -top-4 -left-27">
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
        width={1000}
        height={674}
        className="max-w-[900px]"
      />
      <div className="absolute bottom-3 -right-27">
        <Image
          src="/icons/content/rightDots.svg"
          width={250}
          height={75}
          alt="dots"
          className="h-auto"
        />
      </div>
    </div>
  );
};

export default Dashboard;
