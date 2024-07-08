import { useState } from "react";
import { IoCaretDownSharp, IoChevronForward } from "react-icons/io5";

export default function MedicalCare() {
  const [beingHovered, setBeingHovered] = useState(false);

  return (
    <>
      <div
        className="relative flex h-full w-[110px] min-w-[110px] items-center gap-1 rounded-sm border border-transparent p-2 hover:border-white"
        onMouseEnter={(e) => setBeingHovered(true)}
        onMouseLeave={(e) => setBeingHovered(false)}
      >
        <p className="">Medical Care</p>
        <IoCaretDownSharp size={10} className="text-neutral-400" />
        {beingHovered && (
          <div className="absolute left-1 top-9 flex flex-col gap-2 rounded-sm bg-white p-5 shadow-lg">
            <h2 className="text-lg font-bold text-black">
              Your health, your way
            </h2>
            <div className="flex flex-col gap-2">
              <div className="flex h-36 w-80 flex-col items-center justify-center gap-2 rounded-md bg-neutral-100 duration-200 hover:bg-neutral-200">
                <img
                  src="public/navigationImgs/primeOneMedical.png"
                  alt="prime one medical"
                  className="w-40"
                />
                <p className="p-2 text-sm text-neutral-900">
                  Get a care team on call, only $9/mo with prime
                </p>
              </div>
              <div className="flex justify-center gap-2">
                <div className="flex h-36 w-1/2 flex-col items-center justify-center gap-2 rounded-md bg-neutral-100 duration-200 hover:bg-neutral-200">
                  <img
                    src="public/navigationImgs/pharmacy.png"
                    alt="prime one medical"
                    className="w-32"
                  />
                  <p className="w-3/4 text-center text-xs text-neutral-900">
                    Your medications, delivered
                  </p>
                </div>
                <div className="flex h-36 w-1/2 flex-col items-center justify-center gap-2 rounded-md bg-neutral-100 text-center duration-200 hover:bg-neutral-200">
                  <img
                    src="public/navigationImgs/clinic.png"
                    alt="prime one medical"
                    className="w-32"
                  />
                  <p className="text-xs text-neutral-900">
                    Get fast, no commitment telehealth from $29
                  </p>
                </div>
              </div>
              <div>
                <p className="text-blue-500 hover:text-red-700 hover:underline">See all health services</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
