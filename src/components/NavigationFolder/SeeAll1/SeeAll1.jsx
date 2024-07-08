import { useState } from "react";
import { IoChevronDown, IoChevronForward } from "react-icons/io5";

export default function SeeAll1() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <>
      <div className="group flex h-12 w-full gap-2 bg-white px-10 text-sm hover:bg-neutral-200">
        {isOpen && (
          <div className="flex w-full flex-col">
            <div className="group flex h-12 w-full items-center justify-between gap-2 bg-white px-10 text-sm hover:bg-neutral-200">
              <h2>Same-Day Delivery</h2>
              <IoChevronForward
                size={18}
                className="text-neutral-400 group-hover:text-black"
              />
            </div>
            <div className="group flex h-12 w-full items-center justify-between gap-2 bg-white px-10 text-sm hover:bg-neutral-200">
              <h2>Medical Care & Pharmacy</h2>
              <IoChevronForward
                size={18}
                className="text-neutral-400 group-hover:text-black"
              />
            </div>
            <div className="group flex h-12 w-full items-center justify-between gap-2 bg-white px-10 text-sm hover:bg-neutral-200">
              <h2>Amazon Physical Stores</h2>
              <IoChevronForward
                size={18}
                className="text-neutral-400 group-hover:text-black"
              />
            </div>
            <div className="group flex h-12 w-full items-center justify-between gap-2 bg-white px-10 text-sm hover:bg-neutral-200">
              <h2>Amazon Business</h2>
              <IoChevronForward
                size={18}
                className="text-neutral-400 group-hover:text-black"
              />
            </div>
          </div>
        )}
        <div
          className="flex items-center gap-2"
          onClick={(e) => setisOpen(!isOpen)}
        >
          <h2>See all</h2>
          <IoChevronDown className="text-neutral-400 group-hover:text-black" />
        </div>
      </div>
    </>
  );
}
