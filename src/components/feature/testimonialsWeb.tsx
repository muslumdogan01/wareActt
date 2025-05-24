/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

const testimonials = [
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
    <div className="max-w-6xl mx-auto p-8">
      <div className="flex justify-between items-start">
        {/* Left side - Content */}
        <div className="flex-1 max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Testimonials
          </h2>

          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              {currentTestimonial.text}
            </p>

            <div className="space-y-1">
              <p className="font-semibold text-gray-900">
                {currentTestimonial.name}
              </p>
              <p className="text-gray-600 text-sm">
                {currentTestimonial.title}
              </p>
            </div>

            {/* User profiles - only show 3 at a time */}
            <div className="pt-4">
              <div className="flex space-x-3 overflow-hidden">
                <div
                  className="flex space-x-3 transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(0px)` }}
                >
                  {visibleProfiles.map((testimonial, index) => {
                    const actualIndex = visibleStartIndex + index;
                    return (
                      <button
                        key={testimonial.id}
                        onClick={() => handleProfileClick(actualIndex)}
                        className={`relative rounded-full transition-all duration-200 flex-shrink-0 ${
                          actualIndex === activeIndex
                            ? "ring-2 ring-blue-500 ring-offset-2"
                            : "hover:ring-2 hover:ring-gray-300 hover:ring-offset-1"
                        }`}
                      >
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Navigation buttons */}
        <div className="flex flex-col space-y-2 ml-8">
          <button
            onClick={handlePrevious}
            className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
