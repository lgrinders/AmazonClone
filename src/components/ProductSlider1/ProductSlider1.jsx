import { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

export default function ProductSlider1({ title, images }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="px-5 w-full">
      <div className="relative flex flex-col bg-white px-5 pb-2.5 pt-5">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="pointer-events-none absolute inset-0 mt-2 flex h-full w-full items-center justify-between p-5">
          <div className="pointer-events-auto relative h-28 w-12 rounded-md rounded-l-none bg-white p-0.5">
            <div className="flex h-full items-center justify-center rounded-md border-black shadow-[rgba(0,0,15,0.5)_10px_4px_10px_0px] focus:border-2">
              <IoChevronBack size={30} />
            </div>
          </div>
          <div className="pointer-events-auto relative h-28 w-12 rounded-md rounded-r-none bg-white p-0.5">
            <div className="flex h-full items-center justify-center rounded-md border-black shadow-[rgba(0,0,15,0.5)_-10px_4px_10px_0px] focus:border-2">
              <IoChevronForward size={30} />
            </div>
          </div>
        </div>
        <div
          className={`products scrollbar flex items-center justify-between gap-2 overflow-x-scroll ${isHovered ? "hovered" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {images.map((img, index) => {
            return <img src={img} key={index} className="pb-2.5" />;
          })}
        </div>
      </div>
    </div>
  );
}
