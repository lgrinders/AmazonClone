import { useState } from "react";
import { IoCaretDownSharp, IoChevronForward } from "react-icons/io5";

export default function Groceries({ setGroceriesOpen }) {
  const [beingHovered, setBeingHovered] = useState(false);
  return (
    <>
      <div
        className="relative flex h-full w-[90px] min-w-[90px] cursor-pointer items-center gap-1 rounded-sm border border-transparent p-2 hover:border-white"
        onMouseEnter={(e) => {
          setBeingHovered(true), setGroceriesOpen(true);
        }}
        onMouseLeave={(e) => {
          setBeingHovered(false), setGroceriesOpen(false);
        }}
      >
        <p className="">Groceries</p>
        <IoCaretDownSharp size={10} className="text-neutral-400" />
        {beingHovered && (
          <div className="absolute left-1 top-9 flex flex-col gap-2 rounded-sm bg-white p-5 shadow-lg">
            <div className="flex flex-col">
              <div className="flex h-16 w-[335px] items-center justify-start gap-5 overflow-hidden rounded-md bg-neutral-100">
                <img
                  src="navigationImgs/map.png"
                  alt="prime one medical"
                  className="left-0 w-16"
                />
                <div className="group">
                  <a
                    href="#"
                    className="text-lg font-bold text-black decoration-red-500 group-hover:underline"
                  >
                    Find a nearby store
                  </a>
                  <p className="text-xs text-neutral-500 decoration-red-500 group-hover:underline">
                    4 locations nearby
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <a
                href="#"
                className="flex h-40 w-40 flex-col items-center justify-center gap-2 rounded-md bg-neutral-100 duration-200 hover:bg-neutral-200"
              >
                <img
                  src="navigationImgs/fresh.png"
                  alt="fresh"
                  className="w-32"
                />
              </a>
              <a
                href="#"
                className="flex h-40 w-40 flex-col items-center justify-center gap-2 rounded-md bg-neutral-100 text-center duration-200 hover:bg-neutral-200"
              >
                <img
                  src="navigationImgs/wholeFoods.png"
                  alt="wholeFoods"
                  className="w-32"
                />
              </a>
              <a
                href="#"
                className="flex h-40 w-40 flex-col items-center justify-center gap-2 rounded-md bg-neutral-100 text-center duration-200 hover:bg-neutral-200"
              >
                <img
                  src="navigationImgs/wholeFoods.png"
                  alt="wholeFoods"
                  className="w-32"
                />
              </a>
              <a
                href="#"
                className="flex h-40 w-40 flex-col items-center justify-center gap-2 rounded-md bg-neutral-100 text-center duration-200 hover:bg-neutral-200"
              >
                <img
                  src="navigationImgs/wholeFoods.png"
                  alt="wholeFoods"
                  className="w-32"
                />
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
