import Image from "next/image";
import React from "react";

const Menu = () => {
  return (
    <div className="flex justify-center items-center">
      <Image src="/icons/header/menu.svg" alt="menu" width={30} height={30} />
    </div>
  );
};

export default Menu;
