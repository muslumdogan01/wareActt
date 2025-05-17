"use client";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";

const ProductOverview = () => {
const containerRef = useRef<HTMLDivElement>(null)
  const [windowWidth, setWindowWidth] = useState(0)

  // Update window width on resize
  useEffect(() => {
    const updateWidth = () => {
      setWindowWidth(window.innerWidth)
    }

    // Initial set
    updateWidth()

    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  }, [])

  // Fixed spacing values
  const FIXED_SPACING = 155 // Fixed 155px spacing on both sides
  const LEFT_OFFSET = 140
  const RIGHT_OFFSET = 120

  // Calculate dimensions based on window width
  const baseWidth = 1440 // Base design width
  const scale = Math.max(1, windowWidth / baseWidth)

  // Calculate image dimensions
  const leftImageWidth = 800 * scale
  const rightImageWidth = 800 * scale
  const imageHeight = 600 * scale

  // Calculate the center content width to ensure no overlap
  const availableWidth =
    windowWidth - (leftImageWidth - LEFT_OFFSET) - (rightImageWidth - RIGHT_OFFSET) - FIXED_SPACING * 2
  const centerWidth = Math.max(1400, availableWidth)

  return (
   <div className="relative w-full hidden lg:block" ref={containerRef}>
      <div
        className="flex items-center justify-center mr-96"
        style={{
          height: `${imageHeight}px`,
          minHeight: "600px",
        }}
      >
        {/* Left image with -140px offset */}
        <div
          className="absolute -left-[30rem] 4xl:-left-[120rem]"
          style={{
            transform: `translateX(-${LEFT_OFFSET}px)`,
            width: `${leftImageWidth}px`,
            height: `${imageHeight}px`,
          }}
        >
          <div className="relative w-full h-full">
            <Image src={"/images/content/product1.png"} alt="sadasd" fill style={{ objectFit: "cover" }} />
          </div>
        </div>

        {/* Center text with fixed 155px margins on both sides */}
        <div
          className="z-10 text-center"
          style={{
            fontSize: `${16 * scale}px`,
            width: `${centerWidth}px`,
            marginLeft: `${FIXED_SPACING}px`,
            marginRight: `${FIXED_SPACING}px`,
          }}
        >
          adasdklajflkasdflkasjflkasfj
        </div>

        {/* Right image with -120px offset */}
        <div
          className="absolute -right-[25rem]"
          style={{
            transform: `translateX(${RIGHT_OFFSET}px)`,
            width: `${rightImageWidth}px`,
            height: `${imageHeight}px`,
          }}
        >
          <div className="relative w-full h-full">
            <Image src={"/images/content/product1.png"} alt="sadasd" fill style={{ objectFit: "cover" }} />
          </div>
        </div>
      </div>
    </div>
    // <section className="w-full bg-[url('/images/content/productBg.png')] bg-no-repeat bg-cover hidden lg:block">
    //   <div className="relative flex items-end justify-between max-w-[1920px] mx-auto overflow-visible">
    //     {/* Sol resim */}
    //     <div className="relative flex-shrink-0 -ml-[124px]">
    //       <Image
    //         src="/images/content/product1.png"
    //         width={780}
    //         height={600}
    //         alt="Dashboard Preview"
    //         className="w-[35vw] min-w-[450px] max-w-[780px] h-auto pt-[122px]"
    //       />
    //     </div>

    //     {/* Metin ve çizgi */}
    //     <div className="flex justify-between items-start px-0 pt-[401px] gap-[44px]">
    //       <div style={{ paddingLeft: "155px", paddingRight: "44px" }} className="text-center lg:text-left min-w-[215px]">
    //         <h2 className="text-3xl text-right text-black font-semibold leading-[1.32]">
    //           A more <br className="hidden lg:block" /> innovative <br />{" "}
    //           experience
    //         </h2>
    //         <p className="text-[18px] text-right text-black opacity-50 pt-[10px]">
    //           Possimus cicuta non <br /> depromo tamquam cornu <br /> abbas unus
    //           cinis verbum <br />
    //           tamdiu damnatio.
    //         </p>
    //       </div>
    //       <div className="w-[60px]">
    //         <Image
    //           src="/icons/content/productsLine.svg"
    //           width={60}
    //           height={22}
    //           alt="products line"
    //         />
    //       </div>
    //     </div>

    //     {/* Sağ resim */}
    //     <div className="relative flex-shrink-0 -mr-[32px]">
    //       <Image
    //         src="/images/content/product2.png"
    //         width={780}
    //         height={600}
    //         alt="Dashboard Preview"
    //         className="w-[30vw] min-w-[400px] max-w-[780px] h-auto pt-[281px]"
    //       />
    //     </div>
    //   </div>
    // </section>
  );
};

export default ProductOverview;
