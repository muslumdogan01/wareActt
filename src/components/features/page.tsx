"use client"
import React, { useEffect, useState } from "react";

interface FeatureItem {
  number: number;
  title: string;
  description: string;
}

const FeaturesItems = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("/data/features.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);

  const renderBox = (
    item: FeatureItem,
    index: number,
    styleClass: string
  ) => (
    <div
      key={index}
      style={{
        boxShadow:
          "0px 20px 80px -20px #0000001A, inset 0px 0px 30px -4px #0A28BF0F",
      }}
      className={styleClass}
    >
      <div className="rounded-full flex justify-center items-center bg-[#065AF1] lg:h-[92px] lg:w-[92px] h-[52px] w-[52px] text-white">
        <span className="text-white text-2xl ">{item.number}</span>
      </div>
      <div>
        <h1 className="pt-[30px] lg:pt-[40px] font-normal text-[20px] lg:text-[30px] leading-[1.22] text-black ">
          {item.title}
        </h1>
        <p className="pt-[3px] lg:pt-[10px] font-normal text-[14px] lg:text-[18px] lg:leading-[1.6] leading-[1.4] text-black ">
          {item.description}
        </p>
      </div>
    </div>
  );

  const renderBottomBox = (item: FeatureItem, index: number) => (
    <div
      key={index}
      style={{
        boxShadow:
          "0px 20px 80px -20px #0000001A, inset 0px 0px 30px -4px #0A28BF0F",
      }}
      className="lg:py-[40px] py-[20px] flex flex-col justify-between lg:pl-[40px] pl-[20px] w-[354px]  lg:w-[392px] 2xl:w-[482px] md:h-[300px] lg:h-[450px] 2xl:h-[500px]  bg-white rounded-[40px] border border-[#065AF11A] shadow-[0px_20px_80px_-20px_#0000001A]"
    >
      <div className="rounded-full flex justify-center items-center bg-[#065AF1] lg:h-[92px] lg:w-[92px] h-[52px] w-[52px] text-white">
        <span className="text-white text-2xl "> {item.number} </span>
      </div>
      <div>
        <h3 className="text-[20px] lg:text-[30px] 2xl:text-[40px] pt-[30px] lg:pt-[144px] leading-[122%] font-normal text-black ">
          {item.title}
        </h3>
        <p className="text-[14px] lg:text-[18px] 2xl:text-[22px] font-normal md:pt-[10px] pt-[3px] leading-[160%] text-black/70">
          {item.description}
        </p>
      </div>
    </div>
  );

  const chunkedRows = [];
  let index = 0;

  while (index < features.length) {
    const topRow = features.slice(index, index + 4);
    const bottomRow = features.slice(index + 4, index + 7);
    chunkedRows.push({ topRow, bottomRow });
    index += 7;
  }

  return (
    <div>
      {chunkedRows.map((chunk, chunkIndex) => (
        <React.Fragment key={chunkIndex}>
          <div className="flex flex-col justify-center items-center space-y-2 md:flex-row md:space-x-[24px] w-full ">
            {chunk.topRow.slice(0, 2).map((item, index) =>
              renderBox(
                item,
                index,
                "flex flex-col justify-between lg:py-[40px] py-[20px] lg:pl-[40px] pl-[20px] w-[354px]  lg:w-[600px] 2xl:w-[750px] 2xl:h-[360px] lg:h-[317px] border border-[#065AF11A] shadow-[inset_0_0_30px_-4px_#0A28BF0F] rounded-[40px]"
              )
            )}
          </div>
          <div className="flex flex-col md:flex-row md:space-x-[24px] justify-center items-center w-full lg:pt-[24px] pt-[1px]">
            {chunk.topRow.slice(2, 4).map((item, index) =>
              renderBox(
                item,
                index,
                "flex flex-col justify-between mt-5 md:mt-0 lg:py-[40px] py-[20px] lg:pl-[40px] pl-[20px] w-[354px] h-[207px] lg:w-[600px] 2xl:w-[750px] 2xl:h-[360px] lg:h-[317px] border border-[#065AF11A] shadow-[inset_0_0_30px_-4px_#0A28BF0F] rounded-[40px]"
              )
            )}
          </div>
          <div className="w-full flex flex-wrap justify-center items-center md:space-x-[24px] lg:space-y-[20px] space-y-[10px] py-5 lg:py-10">
            {chunk.bottomRow.map((item, index) => renderBottomBox(item, index))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default FeaturesItems;
