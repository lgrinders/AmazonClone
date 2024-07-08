import { useState } from "react";
import { IoGlobeOutline } from "react-icons/io5";
import { IoCaretDownSharp, IoCaretUpSharp } from "react-icons/io5";

export default function SecondaryMainFooter() {
  const [beingHovered, setBeingHovered] = useState(false);

  return (
    <>
      <div className="flex min-w-full items-center justify-center gap-20 border-t border-neutral-600 bg-SecondaryNavBarBlue py-10">
        <div>
          <a href="#top">
            <img
              src="/public/navigationImgs/amazon-logo-white.png"
              alt="amazon-logo"
              className="w-20"
            />
          </a>
        </div>
        <div className="flex gap-2">
          <div>
            <div
              className="relative flex items-center justify-center gap-6 rounded-sm border border-neutral-400 px-2 py-1.5 text-neutral-200"
              onMouseEnter={(e) => setBeingHovered(true)}
              onMouseLeave={(e) => setBeingHovered(false)}
            >
              {beingHovered && (
                <form className="absolute left-0 top-8 flex w-52 flex-col rounded-sm bg-white p-4 text-black shadow-lg">
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
                      src="/public/navigationImgs/AmericanFlag.png"
                      alt="American Flag"
                      className="h-3 w-4"
                    />
                    <h2 className="text-xs">You are shopping on Amazon.com</h2>
                  </div>
                  <div className="mt-4 flex w-full justify-center">
                    <a
                      href="#"
                      className="text-sm text-blue-500 hover:underline"
                    >
                      Change country/region.
                    </a>
                  </div>
                </form>
              )}

              <div className="flex items-center gap-2">
                <IoGlobeOutline />
                <p className="text-sm">English</p>
              </div>

              <div className="flex flex-col items-center justify-center text-neutral-500">
                <IoCaretUpSharp size={8} />
                <IoCaretDownSharp size={8} />
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center gap-2 rounded-sm border border-neutral-400 px-2 py-1.5 text-neutral-200">
            <img
              src="/public/navigationImgs/americanFlag.png"
              alt="American-Flag"
              className="h-3 w-5"
            />
            <p className="pr-5 text-sm">United States</p>
          </div>
        </div>
      </div>
    </>
  );
}
