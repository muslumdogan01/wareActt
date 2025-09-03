"use client";
import { useState, useRef, type TouchEvent } from "react";
import Image from "next/image";

interface SlideData {
  image: string;
  title: string;
  description: string;
}

const slides: SlideData[] = [
  {
    image: "/images/content/mobileDash.png",
    title: "User Friendly<br/>Interfaces",
    description:
      "We designed with warehouse<br/>managers and customers for<br/>the most efficient use.",
  },
  {
    image: "/images/content/mobileDash.png",
    title: "Easy to Handle<br/>Warehouse Processes",
    description:
     "Standardized smart<br/>processes for world-class<br/>warehousing. No need<br/>for employee trainings.",
  },
  {
    image: "/images/content/mobileDash.png",
    title: "Unlimited Users<br/>and Clients",
    description:
      "Opportunity to handle<br/>thousands of clients<br/>and employees with <br/>one subscription.",
  },

];

const MobileDashboard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Handle touch start event
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  // Handle touch move event
  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  // Handle touch end event
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const difference = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50; // Minimum distance required for a swipe

    if (difference > minSwipeDistance) {
      // Swiped left, go to next slide
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    } else if (difference < -minSwipeDistance) {
      // Swiped right, go to previous slide
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }

    // Reset touch positions
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="relative w-full py-[100px] bg-white ">
      <div
        className="overflow-hidden touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex flex-col items-center"
            >
              <div className="relative w-[337px] h-[250px] mb-6 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h2
                className="mt-[30px] text-[30px] font-normal leading-[1.3] text-center "
                dangerouslySetInnerHTML={{ __html: slide.title }}
              />
              <p
                className="mt-[10px] text-black/50 text-center max-w-[90%]"
                dangerouslySetInnerHTML={{ __html: slide.description }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center space-x-2 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      <div className="flex justify-center space-x-3 ">
        {[0, 1, 2, 3].map((index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-black" : "bg-black/20"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileDashboard;
