/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Kemal Kaya",
    title: "Founder of PrepLarge",
    text: "Amazing interface—everything a 3PL manager could ask for, all in one place!",
    image: "/images/testimonials/kemal.jpeg",
  },
  {
    id: 2,
    name: "İrfan Çiftçi",
    title: "Founder of ComfyShip",
    text: "Finally, the 3PL software we’ve been waiting for. Quick setup, effortless to use—highly recommend!",
        image: "/images/testimonials/irfan.jpeg",
  },
  {
    id: 3,
    name: "İsmet Güneş",
    title: "Owner of ShipHack",
    text: "You can tell it’s built by true 3PL experts. The experience is seamless and spot-on.",
      image: "/images/testimonials/ismet.jpeg",
  },
  {
    id: 4,
    name: "Fatih Vatan",
    title: "Founder of FairHouse",
    text: "Managing our warehouse has never been this easy—and our customers love it too!",
    image: "/images/testimonials/fatih.jpeg",
  },
  
];
export default function TestimonialsWeb() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);

  const visibleCount = 4;

  const handlePrevious = () => {
    const newActiveIndex =
      activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    setActiveIndex(newActiveIndex);

    // Visible profiles slider logic
    if (newActiveIndex < visibleStartIndex) {
      setVisibleStartIndex(Math.max(0, newActiveIndex));
    } else if (newActiveIndex >= visibleStartIndex + visibleCount) {
      setVisibleStartIndex(
        Math.min(
          testimonials.length - visibleCount,
          newActiveIndex - visibleCount + 1
        )
      );
    }
  };

  const handleNext = () => {
    const newActiveIndex =
      activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(newActiveIndex);

    // Visible profiles slider logic
    if (newActiveIndex < visibleStartIndex) {
      setVisibleStartIndex(Math.max(0, newActiveIndex));
    } else if (newActiveIndex >= visibleStartIndex + visibleCount) {
      setVisibleStartIndex(
        Math.min(
          testimonials.length - visibleCount,
          newActiveIndex - visibleCount + 1
        )
      );
    }
  };

  const handleProfileClick = (index: number) => {
    setActiveIndex(index);

    // Adjust visible range if clicked profile is not visible
    if (index < visibleStartIndex) {
      setVisibleStartIndex(Math.max(0, index));
    } else if (index >= visibleStartIndex + visibleCount) {
      setVisibleStartIndex(
        Math.min(testimonials.length - visibleCount, index - visibleCount + 1)
      );
    }
  };

  const currentTestimonial = testimonials[activeIndex];
  const visibleProfiles = testimonials.slice(
    visibleStartIndex,
    visibleStartIndex + visibleCount
  );

  return (
    <div className="w-full">
      <div className="flex justify-around items-center">
        {/* Left side - Content */}
        <div className="flex flex-col">
          <h2 className="text-black font-inter text-[36px] not-italic font-semibold leading-[132%] mb-[70px]">
            Testimonials
          </h2>

          <div className=" max-w-[682px]">
            <p className="mb-5 text-black font-inter text-[18px] min-h-[96px] not-italic font-normal leading-[160%]">
              {currentTestimonial.text}
            </p>

            <div className="flex items-center space-x-1 mb-[70px]">
              <p className=" text-black font-inter text-[14px] not-italic font-semibold leading-[140%]">
                {currentTestimonial.name},
              </p>
              <p className="text-black/50 font-inter text-[14px] not-italic font-normal leading-[140%]">
                {currentTestimonial.title}
              </p>
            </div>

            <div className="flex space-x-3 overflow-hidden">
              <div
                className="flex px-1 space-x-3 transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(0px)` }}
              >
                {visibleProfiles.map((testimonial, index) => {
                  const actualIndex = visibleStartIndex + index;
                  return (
                    <button
                      key={testimonial.id}
                      onClick={() => handleProfileClick(actualIndex)}
                      className={`relative cursor-pointer rounded-full transition-all my-2 duration-200 flex-shrink-0 ${
                        actualIndex === activeIndex
                          ? "ring-2 ring-[#065AF1] ring-offset-2"
                          : "hover:ring-2 hover:ring-gray-300 hover:ring-offset-1"
                      }`}
                    >
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-[53px] h-[53px] rounded-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Navigation buttons */}
        <div className="flex flex-col space-y-[25px]">
          <button
            onClick={handlePrevious}
            className="w-[80px] flex justify-center items-center cursor-pointer h-[80px] bg-white rounded-full hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
  <Image
    src="/icons/features/arrowUp.svg"
    alt=""
    width={24}
    height={24}
  />
          </button>

          <button
            onClick={handleNext}
            className="w-[80px] flex justify-center items-center cursor-pointer h-[80px] bg-white rounded-full hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
  <Image
    src="/icons/features/arrowDown.svg"
    alt=""
    width={24}
    height={24}
  />
          </button>
        </div>
      </div>
      <div className=" flex justify-between mb-[200px] mt-[150px] ">
        <div className="">
          <Image
            src="/icons/features/rightLine.svg"
            alt="Star icon"
            width={100}
            height={0}
          />
        </div>
        <div className="">
          <Image
            src="/icons/features/leftLine.svg"
            alt="Star icon"
            width={600}
            height={0}
          />
        </div>
      </div>
    </div>
  );
}
