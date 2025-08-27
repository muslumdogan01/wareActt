"use client";
import React from "react";
import TestimonialsWeb from "./testimonialsWeb";
import Image from "next/image";
import Link from "next/link";

const Feature = () => {
  return (
    <>
      <div className="bg-[#F3F4F6] relative w-full z-10">
        <section className="relative  z-20 bg-[url('/icons/features/nokta.svg')] hidden  bg-no-repeat bg-cover lg:flex flex-col items-center justify-center ">
          <div className="w-full max-w-[1230px] mt-[200px]">
            <div className=" w-full relative">
              <div className="space-y-6 absolute top-0 left-0">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Every feature needed 
                    <br />
                    in one software.
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                  Our user experience team has made tons
                    <br />
                    of researches to optimize the features needed
                    <br />
                    by any kind and size of warehouse. 
                  </p>
                </div>
                <Link
                  href="/features"
                  className="cursor-pointer hover:bg-blue-50 inline-flex items-center px-[20px] py-[10px] gap-[10px] rounded-[100px] border border-[#065AF1] text-[#065AF1] font-inter text-[14px] not-italic font-semibold leading-[140%]"
                >
                  All Feature
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-16 items-center  ">
                <div className="flex flex-col justify-end items-end">
                  <div className="grid grid-cols-2 ">
                    <div className="w-[352px] h-[340px] flex items-end relative z-20 shrink-0 border-r-0 border-b-0 rounded-tl-[30px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[0px] border  border-[#C2C2C2] bg-white/30">
                      <div className="space-y-[10px] px-[30px]  py-[30px]">
                        <div className="w-8 h-8">
                          <Image
                            src="/icons/features/kutu.svg"
                            alt="Star icon"
                            width={30}
                            height={30}
                          />
                        </div>
                        <div>
                          <h3 className="text-black font-inter text-[26px] not-italic font-normal leading-[122%]">
                          Smart Shipping <br /> Rules
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="w-[352px] h-[340px] flex items-end shrink-0 rounded-tr-[30px] rounded-tl-[0px] border-b-0 rounded-br-[0px] rounded-bl-[0px] border border-[#C2C2C2] bg-white/30">
                      <div className="space-y-[10px] px-[30px]  py-[30px]">
                        <div className="w-8 h-8">
                          <Image
                            src="/icons/features/kutu.svg"
                            alt="Star icon"
                            width={30}
                            height={30}
                          />
                        </div>
                        <div>
                          <h3 className="text-black font-inter text-[26px] not-italic font-normal leading-[122%]">
                          Dynamic <br /> Billing
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom row - 3 cards */}
                  <div className="grid grid-cols-3">
                    <div className="w-[352px] h-[340px] flex items-end shrink-0 rounded-tl-[30px] border-r-0 rounded-bl-[30px] rounded-tr-[0px] rounded-br-[0px] border border-[#C2C2C2] bg-white/30">
                      <div className="space-y-[10px] px-[30px]  py-[30px]">
                        <div className="w-8 h-8">
                          <Image
                            src="/icons/features/kutu.svg"
                            alt="Star icon"
                            width={30}
                            height={30}
                          />
                        </div>
                        <div>
                          <h3 className="text-black font-inter text-[26px] not-italic font-normal leading-[122%]">
                          Customizable Roles <br /> & Users Management
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="w-[352px] h-[340px] flex items-end shrink-0 border border-r-0 border-[#C2C2C2] bg-white/30">
                      <div className="space-y-[10px] px-[30px]  py-[30px]">
                        <div className="w-8 h-8">
                          <Image
                            src="/icons/features/kutu.svg"
                            alt="Star icon"
                            width={30}
                            height={30}
                          />
                        </div>
                        <div>
                          <h3 className="text-black font-inter text-[26px] not-italic font-normal leading-[122%]">
                          Advanced Notification <br /> Management
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="w-[352px] h-[340px] flex items-end shrink-0 rounded-br-[30px] rounded-tl-[0px]  rounded-bl-[0px] border border-[#C2C2C2] bg-white/30">
                      <div className="space-y-[10px] px-[30px]  py-[30px]">
                        <div className="w-8 h-8">
                          <Image
                            src="/icons/features/kutu.svg"
                            alt="Star icon"
                            width={30}
                            height={30}
                          />
                        </div>
                        <div>
                          <h3 className="text-black font-inter text-[26px] not-italic font-normal leading-[122%]">
                          Smart Price <br /> Calculator 
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blue decorative lines at bottom - left and right */}
              <div className=" flex justify-between mb-[100px] mt-[150px] ">
                <div className="">
                  <Image
                    src="/icons/features/leftLine.svg"
                    alt="Star icon"
                    width={600}
                    height={0}
                  />
                </div>
                <div className="">
                  <Image
                    src="/icons/features/rightLine.svg"
                    alt="Star icon"
                    width={100}
                    height={0}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[1230px] mb-[280px]">
            <TestimonialsWeb />
          </div>
        </section>
      </div>
    </>
  );
};

export default Feature;
