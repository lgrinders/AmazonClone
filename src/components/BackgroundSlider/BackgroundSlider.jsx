import React, { useState, useEffect } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import ProductSquare from "../ProductSquare/ProductSquare";

const images = [
  "/public/sliderImg1.jpg",
  "/public/sliderImg2.jpg",
  "/public/sliderImg3.jpg",
  "/public/sliderImg4.jpg",
  "/public/sliderImg5.jpg",
  "/public/sliderImg6.jpg",
  "/public/sliderImg7.jpg",
];

export default function BackgroundSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const clearExistingInterval = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const handlePrevClick = () => {
    clearExistingInterval();
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  const handleNextClick = () => {
    clearExistingInterval();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const newIntervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // 6000ms = 6 seconds

    setIntervalId(newIntervalId);

    // Clear interval on component unmount
    return () => clearInterval(newIntervalId);
  }, [currentIndex]);

  return (
    <div className="relative m-auto  max-w-[1500px] overflow-hidden bg-blue-500">
      <div
        className="absolute inset-0 flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="relative h-full w-full flex-shrink-0">
            <div
              className="fade-bottom h-full w-full flex-shrink-0"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        ))}
      </div>
      <div className="relative z-10 flex h-64 w-full justify-between text-white">
        <div
          className="flex w-20 items-center justify-center rounded-md border-white focus:border-2"
          tabIndex={0}
          onClick={handlePrevClick}
        >
          <IoChevronBack size={50} />
        </div>
        <div
          className="flex w-20 items-center justify-center rounded-md border-white focus:border-2"
          tabIndex={1}
          onClick={handleNextClick}
        >
          <IoChevronForward size={50} />
        </div>
      </div>
      <ProductSquare />
    </div>
  );
}
