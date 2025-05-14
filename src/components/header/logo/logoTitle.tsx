import Image from "next/image";

import React from "react";

const LogoTitle = () => {
  return (
    <Image
      src="/icons/header/logoTitle.svg"
      alt="title"
      width={92}
      height={15}
      priority
    />
  );
};

export default LogoTitle;
