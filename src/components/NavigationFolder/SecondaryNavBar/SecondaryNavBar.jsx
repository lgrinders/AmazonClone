import { RiMenuLine } from "react-icons/ri";
import MedicalCare from "../MedicalCare/MedicalCare";
import Groceries from "../Groceries/Groceries";

export default function SecondaryNavBar({ sideNavOpen, setSideNavOpen, setMedicalOpen, setGroceriesOpen }) {
  return (
    <>
      <div className="flex h-10 items-center bg-SecondaryNavBarBlue px-5 text-sm text-white relative z-30">
        <div
          className="flex h-full w-[70px] min-w-[70px] items-center gap-1 rounded-sm border border-transparent p-2 hover:border-white"
          onClick={(e) => setSideNavOpen(!sideNavOpen)}
        >
          <RiMenuLine size={22} />
          <p className="font-bold">All</p>
        </div>
        <div className="flex h-full w-[140px] min-w-[140px] items-center gap-1 rounded-sm border border-transparent p-2 hover:border-white">
          <p className="">Same-Day Delivery</p>
        </div>
        <MedicalCare setMedicalOpen={setMedicalOpen}/>
        <div className="flex h-full w-[110px] min-w-[110px] items-center gap-1 rounded-sm border border-transparent p-2 hover:border-white">
          <p className="">Amazon Basics</p>
        </div>
        <div className="flex h-full w-[130px] min-w-[130px] items-center gap-1 rounded-sm border border-transparent p-2 hover:border-white">
          <p className="">Customer Service</p>
        </div>
        <div className="flex h-full w-[140px] min-w-[140px] items-center gap-1 rounded-sm border border-transparent p-2 hover:border-white">
          <p className="">Keep Shopping For</p>
        </div>
        <Groceries setGroceriesOpen={setGroceriesOpen}/>
        <div className="flex h-full w-[75px] min-w-[75px] items-center gap-1 rounded-sm border border-transparent p-2 hover:border-white">
          <p className="">Pharmacy</p>
        </div>
        <div className="flex h-full w-[120px] min-w-[120px] items-center gap-1 rounded-sm border border-transparent p-2 hover:border-white">
          <p className="">Shop By Interest</p>
        </div>
        <div className="flex h-full w-[90px] min-w-[90px] items-center gap-1 rounded-sm border border-transparent p-2 hover:border-white">
          <p className="">Livestreams</p>
        </div>
        <div className="flex h-full w-[210px] min-w-[210px] items-center gap-1 rounded-sm border border-transparent p-2 hover:border-white">
          <p className="">Household, Health & Baby Care</p>
        </div>
        <div className="flex h-full w-[90px] min-w-[90px] items-center gap-1 rounded-sm border border-transparent p-2 hover:border-white">
          <p className="">Handemade</p>
        </div>
        <div className="flex h-full w-[130px] min-w-[130px] items-center gap-1 rounded-sm border border-transparent p-2 hover:border-white">
          <p className="">Subscribe & Save</p>
        </div>
        <div className="flex h-full w-[90px] min-w-[90px] items-center gap-1 rounded-sm border border-transparent p-2 hover:border-white">
          <p className="">Best Sellers</p>
        </div>
        <div className="flex h-full w-[55px] min-w-[55px] items-center gap-1 rounded-sm border border-transparent p-2 hover:border-white">
          <p className="">Books</p>
        </div>
        <div className="flex h-full w-[110px] min-w-[110px] items-center gap-1 rounded-sm border border-transparent p-2 hover:border-white">
          <p className="">Amazon Home</p>
        </div>
      </div>
    </>
  );
}
