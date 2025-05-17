import Image from "next/image";
import React from "react";

const MenuClose = () => {
  return (
    <div className="flex justify-center items-center">
      <Image src="/icons/header/menuClose.svg" alt="menu" width={30} height={30} />
    </div>
  );
};

export default MenuClose;
