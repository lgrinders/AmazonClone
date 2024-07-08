import { useState } from "react";
import { IoCaretDownSharp, IoSearchSharp } from "react-icons/io5";
import { categories } from "../../../assets/category";

export default function SearchBar() {
  const [showingDropDown, setShowingDropDown] = useState(false);

  console.log(showingDropDown);

  return (
    <div className="w-full min-w-[400px] px-4">
      <div className="rounded-md focus-within:ring-2 focus-within:ring-AmazonOrange">
        <div className="flex h-10 items-center rounded-md">
          <div
            className="group relative flex h-full w-12 items-center justify-center gap-2 rounded-l-md bg-neutral-200 hover:bg-neutral-300"
            onClick={(e) => setShowingDropDown(!showingDropDown)}
          >
            <p className="text-xs text-neutral-700 group-hover:text-black">
              All
            </p>
            <IoCaretDownSharp
              size={11}
              className="text-neutral-700 group-hover:text-black"
            />

            <div
              className={
                showingDropDown
                  ? "absolute -bottom-96 left-0 h-96 w-56 overflow-x-scroll bg-white p-1 text-sm drop-shadow-lg"
                  : "hidden"
              }
            >
              {categories.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="hover:bg-blue-500 hover:text-white"
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex-grow">
            <input
              type="text"
              className="h-10 w-full p-3 outline-none placeholder:text-neutral-600"
              placeholder="Search Amazon"
            />
          </div>
          <div className="flex h-full w-12 items-center justify-center gap-2 rounded-r-md bg-orange-300 hover:bg-SearchYellow">
            <IoSearchSharp size={26} />
          </div>
        </div>
      </div>
    </div>
  );
}
