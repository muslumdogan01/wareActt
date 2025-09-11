import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      src="/icons/header/logo.svg"
      alt="title"
      width={46}
      height={40}
      priority
    />
  );
};

export default Logo;
