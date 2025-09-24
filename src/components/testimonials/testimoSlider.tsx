/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  text: string;
  image: string;
}

export default function TestimonialsCarousel() {
  const testimonials: Testimonial[] = [
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

  const [activeIndex, setActiveIndex] = useState(0);
  const avatarRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [barLeft, setBarLeft] = useState(0);

const handleAvatarClick = (index: number) => {
  setActiveIndex(index);

  const avatarElement = avatarRefs.current[index];
  if (avatarElement) {
    avatarElement.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });

    const container =
      avatarElement.parentElement?.parentElement as HTMLElement | null;
    const containerRect = container?.getBoundingClientRect();
    const avatarRect = avatarElement.getBoundingClientRect();

    if (containerRect) {
      // Ortadaki referans noktasını bul
      const containerCenter = containerRect.width / 2;
      const avatarCenter =
        avatarRect.left - containerRect.left + avatarRect.width / 2;

      // Mavi bar'ın ortalanması için sol konumunu hesapla
      const newBarLeft = avatarCenter - 50; // çünkü bar'ın genişliği 100px

      setBarLeft(newBarLeft);
    }
  }
};

useEffect(() => {
  const avatarElement = avatarRefs.current[activeIndex];
  const container =
    avatarElement?.parentElement?.parentElement as HTMLElement | null;
  const containerRect = container?.getBoundingClientRect();
  const avatarRect = avatarElement?.getBoundingClientRect();

  if (containerRect && avatarRect) {
    const containerCenter = containerRect.width / 2;
    const avatarCenter =
      avatarRect.left - containerRect.left + avatarRect.width / 2;

    const newBarLeft = avatarCenter - -70;
    setBarLeft(newBarLeft);
  }
}, []);

  return (
    <div className="max-w-md mx-auto p-6 ">
      <h2 className="text-4xl font-semibold leading-[1.3] text-black text-center mb-6">
        Testimonials
      </h2>

      <div className="mb-8">
        <p className="text-center text-lg font-normal leading-[1.6] mb-6">
          {testimonials[activeIndex].text}
        </p>
        <div className="text-center font-medium">
          <span className="text-black text-[14px] font-semibold leading-[1.6]">
            {testimonials[activeIndex].name},{" "}
          </span>
          <span className="text-black/50 text-[14px] font-normal leading-[1.6]">
            {" "}
            {testimonials[activeIndex].title}
           
          </span>
        </div>
      </div>

      {/* Avatar row */}
      <div className="relative h-[200px]">
        <div className="flex overflow-x-auto gap-6 px-2 py-5 scroll-smooth scrollbar-hide">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={(el) => {
                avatarRefs.current[index] = el;
              }}
              className="shrink-0 w-[63px] rounded-full overflow-hidden h-[63px] relative flex justify-center"
            >
              <button
                onClick={() => handleAvatarClick(index)}
                className={`rounded-full overflow-hidden w-full h-full transition-all ${
                  activeIndex === index
                    ? "ring-2 ring-blue-500 ring-offset-2"
                    : ""
                }`}
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </button>
            </div>
          ))}
        </div>

        {/* Mavi çizgi */}
        <div
          className="absolute transition-all duration-300 w-[100px] h-[1px] bg-blue-500 "
          style={{
            bottom: "-20px", // alta yerleştiriyoruz ama parent sınırları içinde kalıyor
            left: `${barLeft}px`,
          }}
        />
      </div>
    </div>
  );
}
