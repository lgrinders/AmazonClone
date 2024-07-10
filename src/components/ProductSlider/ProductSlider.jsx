import React, { useRef, useEffect, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

export default function ProductSlider({ title, images }) {
  const containerRef = useRef(null);
  const [whereIsScroll, setWhereIsScroll] = useState("left");
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container.scrollLeft === 0) {
        setWhereIsScroll("left");
      } else if (
        container.scrollLeft + container.clientWidth ===
        container.scrollWidth
      ) {
        setWhereIsScroll("right");
      } else {
        setWhereIsScroll("middle");
      }
    };

    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollContainerBy = (amount) => {
    const container = containerRef.current;
    container.scrollBy({
      left: amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="w-full min-w-full p-5"
      onMouseEnter={(e) => setIsHovering(true)}
      onMouseLeave={(e) => setIsHovering(false)}
    >
      <div className="relative flex w-full flex-col bg-white px-5 py-2.5">
        <button
          onClick={() =>
            scrollContainerBy(-containerRef.current.clientWidth / 2)
          }
          className={`${isHovering === true && whereIsScroll === "left" && "opacity-50 duration-700"} ${isHovering === true && whereIsScroll !== "left" && "opacity-100 duration-700"} duration-700 absolute left-5 top-24 flex h-28 w-14 items-center justify-center rounded-sm rounded-l-none bg-white opacity-0 shadow-[rgba(0,0,15,0.5)_4px_2px_4px_0px]`}
        >
          <IoChevronBack size={40} />
        </button>
        <h2 className="pb-2.5 text-xl font-bold">{title}</h2>
        <div
          className={`${isHovering ? "scrollbar" : "hiddenScrollbar"} duration-700 flex gap-5 overflow-x-scroll`}
          ref={containerRef}
        >
          {images.map((item, idx) => {
            return <img src={item} alt="" key={idx} className="pb-2.5" />;
          })}
        </div>
        <button
          onClick={() =>
            scrollContainerBy(containerRef.current.clientWidth / 2)
          }
          className={`${isHovering === true && whereIsScroll === "right" && "opacity-50 duration-700"} ${isHovering === true && whereIsScroll !== "right" && "opacity-100 duration-700"} duration-700 opacity-0 absolute right-5 top-24 flex h-28 w-14 items-center justify-center rounded-sm rounded-l-none bg-white shadow-[rgba(0,0,15,0.5)_-4px_2px_4px_0px]`}
        >
          <IoChevronForward size={40} />
        </button>
      </div>
    </section>
  );
}
