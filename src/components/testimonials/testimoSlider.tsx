/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

// Testimonial veri tipi
interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  text: string;
  image: string;
}

export default function TestimonialsCarousel() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Camille Conroy",
      title: "CEO",
      company: "Shipback",
      text: "Ara aspernatur canis bonus aeneus. do corrupti aestus. Certus templum contabesco. Aggredior ceno vacuus theatrum amiculum cogo armarium facilis magnam.",
      image: "/icons/testimonials/profile.svg",
    },
    {
      id: 2,
      name: "Alex Morgan",
      title: "CTO",
      company: "TechFlow",
      text: "Ara aspernatur canis bonus aeneus. Vox amicitia s templum contabesco. Aggredior ceno vacuus theatrum amiculum cogo armarium facilis magnam.",
      image: "/icons/testimonials/profile.svg",
    },
    {
      id: 3,
      name: "Sophia Chen",
      title: "Design Director",
      company: "Artistry Digital",
      text: "Ara aspernatur canis bonus aeneus. Vox amicitia um vulgaris vicissitudo corrupti aestus. Certus templum contabesco. Aggredior ceno vacuus theatrum amiculum cogo armarium facilis magnam.",
      image: "/icons/testimonials/profile.svg",
    },
    {
      id: 4,
      name: "Marcus Johnson",
      title: "Product Manager",
      company: "Innovate Inc",
      text: "Ara aspernatur canis bonus aeneus. Vox amicitia ulgaris vicissitudo corrupti aestus. Certus templum contabesco. Aggredior ceno vacuus theatrum amiculum cogo armarium facilis magnam.",
      image: "/icons/testimonials/profile.svg",
    },
    {
      id: 5,
      name: "Marcus Johnson",
      title: "Product Manager",
      company: "Innovate Inc",
      text: "Ara aspernatur canis bonus aeneus. Vox amicitia speculum asporto cum vulgaris vicissitudo corrupti aestus. Certus templum contabesco. Aggredior ceno vacuus theatrum amiculum cogo armarium facilis magnam.",
      image: "/icons/testimonials/profile.svg",
    },
    {
      id: 6,
      name: "Marcus Johnson",
      title: "Product Manager",
      company: "Innovate Inc",
      text: "Ara aspernatur canis bonus aeneus. Vox amicitia speculum asporto cum vulgaris vicissitudo corrupti aestus. Certus templum contabesco. Aggredior ceno vacuus theatrum amiculum cogo armarium facilis magnam.",
      image: "/icons/testimonials/profile.svg",
    },
    {
      id: 7,
      name: "Marcus Johnson",
      title: "Product Manager",
      company: "Innovate Inc",
      text: "Ara aspernatur canis bonus aeneus. Vox amicitia speculum asporto cum vulgaris vicissitudo corrupti aestus. Certus templum contabesco. Aggredior ceno vacuus theatrum amiculum cogo armarium facilis magnam.",
      image: "/icons/testimonials/profile.svg",
    },
    {
      id: 8,
      name: "Marcus Johnson",
      title: "Product Manager",
      company: "Innovate Inc",
      text: "Ara aspernatur canis bonus aeneus. Vox amicitia speculum asporto cum vulgaris vicissitudo corrupti aestus. Certus templum contabesco. Aggredior ceno vacuus theatrum amiculum cogo armarium facilis magnam.",
      image: "/icons/testimonials/profile.svg",
    },
    // Diğerleri de burada olabilir...
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

      const containerLeft =
        avatarElement.parentElement?.parentElement?.getBoundingClientRect()
          .left || 0;
      const avatarLeft = avatarElement.getBoundingClientRect().left;

      const offset =
        avatarLeft - containerLeft + avatarElement.offsetWidth / 2 - 25;
      setBarLeft(offset);
    }
  };

useEffect(() => {
  const avatarElement = avatarRefs.current[activeIndex];
  if (avatarElement) {
    const containerLeft =
      avatarElement.parentElement?.parentElement?.getBoundingClientRect().left || 0;
    const avatarLeft = avatarElement.getBoundingClientRect().left;

    const offset =
      avatarLeft - containerLeft + avatarElement.offsetWidth / 2 - 25;

    setBarLeft(offset);
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
            {testimonials[activeIndex].title} at{" "}
            {testimonials[activeIndex].company}
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
              className="shrink-0 w-[63px] h-[63px] relative flex justify-center"
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
