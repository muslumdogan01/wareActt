import Image from "next/image";

import React from "react";

const LogoTitle = () => {
  return (
    <Image
      src="/icons/header/logoTitle.svg"
      alt="title"
      width={101}
      height={16}
      priority
    />
  );
};

export default LogoTitle;
