import { IoCloseOutline } from "react-icons/io5";
import { HiMiniUserCircle } from "react-icons/hi2";
import { IoChevronForward } from "react-icons/io5";
import SeeAll1 from "../SeeAll1/SeeAll1";
import {
  Trending,
  DigitalContent,
  ShopByDepartment,
  ProgramsFeatures,
  HelpSettings,
} from "../../assets/category";

export default function SideNav({ sideNavOpen, setSideNavOpen }) {
  return (
    <>
      {sideNavOpen && (
        <div>
          <div className="absolute left-0 top-0 z-50 h-screen w-96 overflow-scroll bg-white">
            <div className="flex h-12 w-full items-center gap-2 bg-SecondaryNavBarBlue px-5">
              <HiMiniUserCircle className="text-white" size={30} />
              <h2 className="text-xl font-bold text-white">Hello, sign in</h2>
            </div>

            <div className="border-b-2 border-neutral-200 py-2">
              <div className="flex h-12 w-full items-center gap-2 bg-white px-10">
                <h2 className="text-xl font-bold">Trending</h2>
              </div>
              {Trending.map((item, index) => {
                return (
                  <div
                    className="flex h-12 w-full items-center gap-2 bg-white px-10 text-sm hover:bg-neutral-200"
                    key={index}
                  >
                    <h2>{item}</h2>
                  </div>
                );
              })}
            </div>
            <div className="flex h-12 w-full items-center gap-2 bg-white px-10">
              <h2 className="text-xl font-bold">Digital Content & Devices</h2>
            </div>
            <div className="border-b-2 border-neutral-200 py-2">
              {DigitalContent.map((item, index) => {
                return (
                  <div
                    className="group flex h-12 w-full items-center justify-between gap-2 bg-white px-10 text-sm hover:bg-neutral-200"
                    key={index}
                  >
                    <h2>{item}</h2>
                    <IoChevronForward
                      size={18}
                      className="text-neutral-400 group-hover:text-black"
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex h-12 w-full items-center gap-2 bg-white px-10">
              <h2 className="text-xl font-bold">Shop By Department</h2>
            </div>
            <div className="border-b-2 border-neutral-200 py-2">
              {ShopByDepartment.map((item, index) => {
                return (
                  <div
                    className="group flex h-12 w-full items-center justify-between gap-2 bg-white px-10 text-sm hover:bg-neutral-200"
                    key={index}
                  >
                    <h2>{item}</h2>
                    <IoChevronForward
                      size={18}
                      className="text-neutral-400 group-hover:text-black"
                    />
                  </div>
                );
              })}
              {/* <SeeAll1 /> */}
            </div>
            <div className="flex h-12 w-full items-center gap-2 bg-white px-10">
              <h2 className="text-xl font-bold">Programs & Features</h2>
            </div>
            <div className="border-b-2 border-neutral-200 py-2">
              {ProgramsFeatures.map((item, index) => {
                return (
                  <div
                    className="group flex h-12 w-full items-center justify-between gap-2 bg-white px-10 text-sm hover:bg-neutral-200"
                    index
                  >
                    <h2>{item}</h2>
                    <IoChevronForward
                      size={18}
                      className="text-neutral-400 group-hover:text-black"
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex h-12 w-full items-center gap-2 bg-white px-10">
              <h2 className="text-xl font-bold">Help & Settings</h2>
            </div>
            <div className="border-b-2 border-neutral-200 py-2">
              {HelpSettings.map((item, index) => {
                return (
                  <div
                    className="group flex h-12 w-full items-center justify-between gap-2 bg-white px-10 text-sm hover:bg-neutral-200"
                    key={index}
                  >
                    <h2>{item}</h2>
                    <IoChevronForward
                      size={18}
                      className="text-neutral-400 group-hover:text-black"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="absolute left-96 top-0 z-50 flex h-screen w-10 justify-center py-2">
            <IoCloseOutline
              className="text-white"
              size={50}
              onClick={(e) => setSideNavOpen(!sideNavOpen)}
            />
          </div>
        </div>
      )}
    </>
  );
}
