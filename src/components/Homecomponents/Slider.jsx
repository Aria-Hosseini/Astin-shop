import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);
  const autoSlideInterval = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTranslateX(0);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setTranslateX(0);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setTranslateX(0);
  };

  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.type === "mousedown" ? e.clientX : e.touches[0].clientX);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const currentX = e.type === "mousemove" ? e.clientX : e.touches[0].clientX;
    const diffX = currentX - startX;
    setTranslateX(diffX);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (translateX < -100) {
      nextSlide();
    } else if (translateX > 100) {
      prevSlide();
    }
    setTranslateX(0);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    slider.addEventListener("mousedown", handleDragStart);
    slider.addEventListener("mousemove", handleDragMove);
    slider.addEventListener("mouseup", handleDragEnd);
    slider.addEventListener("mouseleave", handleDragEnd);
    slider.addEventListener("touchstart", handleDragStart);
    slider.addEventListener("touchmove", handleDragMove);
    slider.addEventListener("touchend", handleDragEnd);

    return () => {
      slider.removeEventListener("mousedown", handleDragStart);
      slider.removeEventListener("mousemove", handleDragMove);
      slider.removeEventListener("mouseup", handleDragEnd);
      slider.removeEventListener("mouseleave", handleDragEnd);
      slider.removeEventListener("touchstart", handleDragStart);
      slider.removeEventListener("touchmove", handleDragMove);
      slider.removeEventListener("touchend", handleDragEnd);
    };
  }, [isDragging, startX, translateX]);

  useEffect(() => {
    if (!isHovered && images.length > 1) {
      autoSlideInterval.current = setInterval(() => {
        nextSlide();
      }, 3000);
    }

    return () => {
      if (autoSlideInterval.current) {
        clearInterval(autoSlideInterval.current);
      }
    };
  }, [isHovered, images.length]);

  return (
    <div
      className="relative w-full max-w-5xl mx-auto mt-6 max-h-120 overflow-hidden rounded-2xl shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={sliderRef}
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(calc(-${currentIndex * 100}% + ${translateX}px))`,
          cursor: isDragging ? "grabbing" : "grab",
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full h-[36rem] relative">
            <img
              src={image}
              alt={`تصویر ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/70 text-white text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-800 transition-all duration-300 focus:outline-none"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/70 text-white text-2xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-800 transition-all duration-300 focus:outline-none"
      >
        <FaChevronRight />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-white scale-125"
                : "bg-gray-400/50 hover:bg-gray-200"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default function Slider() {
  const imageUrls = [
    "/img/slider1.jpg",
    "/img/slider2.jpg",
    "/img/slider3.jpg",
    "/img/slider4.jpg",
  ];

  return (
    <div className=" bg-gray-100 flex flex-col items-center justify-start p-3">
      <ImageSlider images={imageUrls} />
    </div>
  );
}