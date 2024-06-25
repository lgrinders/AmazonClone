import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import SearchBar from "../SearchBar/SearchBar";
import AccountsLists from "../AccountsLists/AccountsList";
import Languag from "../Languag/Languag";

export default function NavBar() {
  return (
    <>
      <div className="flex h-16 w-screen items-center gap-1 bg-NavBarBlue p-1 px-3">
        <div className="h-full w-[160px] min-w-[130px] rounded-sm border-2 border-transparent p-1 duration-200 hover:border-white">
          <img src="/public/Amazon-logo-white.png" className="p-2" />
        </div>

        <div className="flex h-full min-w-[185px] flex-row-reverse items-center justify-center gap-1 rounded-sm border-2 border-transparent p-2 duration-200 hover:border-white">
          <div className="flex flex-col">
            <p className="text-xs leading-4 text-neutral-300">
              Delivering to your location
            </p>
            <p className="items-center text-sm font-bold leading-3 text-white">
              Update location
            </p>
          </div>
          <HiOutlineLocationMarker size={20} className="text-white" />
        </div>

        <SearchBar />

        <Languag />

        <AccountsLists />

        <div className="flex h-full min-w-[83px] items-center justify-center gap-1 rounded-sm border-2 border-transparent p-2 duration-200 hover:border-white">
          <div>
            <p className="text-sm leading-3 text-white">Returns</p>
            <p className="text-md font-black leading-4 text-white">& Orders</p>
          </div>
        </div>
        <div className="relative flex h-full justify-center gap-1 rounded-sm border-2 border-transparent p-2 duration-200 hover:border-white">
          <FiShoppingCart className="text-white" size={35} />
          <div className="absolute left-6 top-3.5 text-sm font-black text-AmazonOrange">
            0
          </div>
          <div className="flex items-end">
            <p className="-leading-3 hidden text-sm font-black text-white xl:block">
              Cart
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
