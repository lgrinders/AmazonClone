import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoCaretDownSharp } from "react-icons/io5";
import SearchBar from "../SearchBar/SearchBar";
import { FiShoppingCart } from "react-icons/fi";

export default function NavBar() {
  return (
    <>
      <div className="bg-NavBarBlue flex h-16 w-screen items-center gap-10 px-5">
        <div className="w-[150px]">
          <img src="/public/Amazon-logo-white.png" />
        </div>
        <div className="w-[300px]">
          <p className="relative left-6 top-0.5 text-sm text-neutral-400">
            Delivering to your location
          </p>
          <p className="relative bottom-0.5 flex items-center gap-1 font-bold text-white">
            <HiOutlineLocationMarker size={20} />
            Update location
          </p>
        </div>
        <SearchBar />
        <div className="flex w-[90px] items-center gap-1">
          <img
            src="/public/AmericanFlag.png"
            alt="American Flag"
            className="h-3 w-5"
          />
          <p className="text-md font-black text-white">EN</p>

          <div className="flex h-4 items-end justify-center">
            <IoCaretDownSharp size={11} className="text-neutral-300" />
          </div>
        </div>

        <div className="flex w-[250px] gap-1">
          <div>
            <p className="relative top-0.5 text-sm text-white">
              Hello, sign in
            </p>
            <div className="flex items-center">
              <p className="text-md relative bottom-0.5 font-black text-white">
                Accounts & Lists
              </p>
              <IoCaretDownSharp size={11} className="text-neutral-300" />
            </div>
          </div>
        </div>
        <div className="flex w-[140px] gap-1">
          <div>
            <p className="relative top-0.5 text-sm text-white">Returns</p>
            <p className="text-md relative bottom-0.5 font-black text-white">
              & Orders
            </p>
          </div>
        </div>
        <div className="relative">
          <FiShoppingCart className="text-white" size={40} />
          <div className="text-AmazonOrange absolute left-5 top-1.5 text-md font-black">
            0
          </div>
        </div>
      </div>
    </>
  );
}
