import Image from "next/image";
import React from "react";

const LogoLine = () => {
  return (
    <>
      <Image
        src="/icons/header/logoLine.svg"
        alt="logo"
        width={1}
        height={24}
        priority
      />
    </>
  );
};

export default LogoLine;
