import { useState } from "react";
import { IoCaretDownSharp } from "react-icons/io5";

export default function Language() {
  const [beingHovered, setBeingHovered] = useState(false);

  return (
    <>
      <div
        className="relative flex h-full min-w-[69px] items-center justify-center gap-0.5 rounded-sm border-2 border-transparent p-2 duration-200 hover:border-white"
        onMouseEnter={(e) => setBeingHovered(true)}
        onMouseLeave={(e) => setBeingHovered(false)}
      >
        <img
          src="/public/AmericanFlag.png"
          alt="American Flag"
          className="h-3 w-5"
        />
        <p className="text- p-0 font-black leading-3 text-white">EN</p>
        <IoCaretDownSharp size={10} className="text-neutral-400" />
        {beingHovered && (
          <form className="absolute left-0 top-12 flex w-52 flex-col rounded-sm bg-white p-4 shadow-lg">
            <div className="flex w-full items-center gap-5">
              <div>
                <input
                  type="radio"
                  id="english"
                  name="language"
                  className="h-4 w-4 rounded-full border border-black text-AmazonOrange accent-AmazonOrange focus:ring-AmazonOrange"
                />
              </div>
              <div className="w-full">
                <label htmlFor="english" className="text-sm">
                  English - EN
                </label>
                <hr className="mt-2 w-full bg-neutral-300" />
              </div>
            </div>
            <div className="flex w-full gap-5">
              <div className="pt-2">
                <input
                  type="radio"
                  id="spanish"
                  name="language"
                  className="h-4 w-4 rounded-full border border-black text-AmazonOrange accent-AmazonOrange focus:ring-AmazonOrange"
                />
              </div>
              <div className="relative w-full">
                <label htmlFor="spanish" className="text-sm">
                  español - ES
                </label>
                <a
                  href="#"
                  className="absolute left-0 top-6 text-sm text-blue-500 hover:underline"
                >
                  Learn More
                </a>
                <hr className="mb-4 mt-6 w-full bg-neutral-300" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="/public/AmericanFlag.png"
                alt="American Flag"
                className="h-3 w-4"
              />
              <h2 className="text-xs">You are shopping on Amazon.com</h2>
            </div>
            <div className="w-full flex justify-center mt-4">
              <a href="#" className="text-blue-500 hover:underline text-sm">
                Change country/region.
              </a>
            </div>
          </form>
        )}
      </div>
    </>
  );
}
