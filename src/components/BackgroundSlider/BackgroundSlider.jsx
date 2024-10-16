import React, { useState, useEffect } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import ProductSquare from "../ProductSquare/ProductSquare";

const images = [
  "backgroundSliderImgs/sliderImg1.jpg",
  "backgroundSliderImgs/sliderImg2.jpg",
  "backgroundSliderImgs/sliderImg3.jpg",
  "backgroundSliderImgs/sliderImg4.jpg",
  "backgroundSliderImgs/sliderImg5.jpg",
  "backgroundSliderImgs/sliderImg6.jpg",
  "backgroundSliderImgs/sliderImg7.jpg",
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
    }, 6000);

    setIntervalId(newIntervalId);

    return () => clearInterval(newIntervalId);
  }, [currentIndex]);

  return (
    <div className="relative z-10 m-auto w-full overflow-x-hidden">
      <div
        className="absolute inset-0 flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="relative h-full w-full flex-shrink-0">
            <div
              className="relative h-[600px] w-full flex-shrink-0"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-200"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative z-10 flex h-60 w-full justify-between text-white">
        <div
          className="flex w-20 items-center justify-center rounded-md border-white focus:border-2"
          tabIndex={0}
          onClick={handlePrevClick}
        >
          <IoChevronBack size={50} className="arrow-left" />
        </div>
        <div
          className="flex w-20 items-center justify-center rounded-md border-white focus:border-2"
          tabIndex={1}
          onClick={handleNextClick}
        >
          <IoChevronForward size={50} className="arrow-right" />
        </div>
      </div>
      <div className="px-5">
        <ProductSquare />
      </div>
    </div>
  );
}
