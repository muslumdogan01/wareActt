import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="">
      <Image
        src="/icons/header/logo.svg"
        alt="Company Logo"
        width={42}
        height={36}
        priority
      />
    </div>
  );
};

export default Logo;
