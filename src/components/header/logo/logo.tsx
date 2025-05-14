import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <>
      <Image
        src="/icons/header/logo.svg"
        alt="Company Logo"
        width={42}
        height={36}
        priority
      />
    </>
  );
};

export default Logo;
