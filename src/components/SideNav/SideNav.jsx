import { IoCloseOutline } from "react-icons/io5";
import { HiMiniUserCircle } from "react-icons/hi2";
import { IoChevronForward } from "react-icons/io5";

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
              <div className="flex h-12 w-full items-center gap-2 bg-white px-10 text-sm hover:bg-neutral-200">
                <h2>Best Sellers</h2>
              </div>
              <div className="flex h-12 w-full items-center gap-2 bg-white px-10 text-sm hover:bg-neutral-200">
                <h2>New Releases</h2>
              </div>
              <div className="flex h-12 w-full items-center gap-2 bg-white px-10 text-sm hover:bg-neutral-200">
                <h2>Movers and Shakers</h2>
              </div>
            </div>
            <div className="flex h-12 w-full items-center gap-2 bg-white px-10">
              <h2 className="text-xl font-bold">Digital Content & Devices</h2>
            </div>
            <div className="border-b-2 border-neutral-200 py-2">
              <div className="group flex h-12 w-full items-center justify-between gap-2 bg-white px-10 text-sm hover:bg-neutral-200">
                <h2>Amazon Luna - Cloud Gaming</h2>
                <IoChevronForward
                  size={18}
                  className="text-neutral-400 group-hover:text-black"
                />
              </div>
              <div className="group flex h-12 w-full items-center justify-between gap-2 bg-white px-10 text-sm hover:bg-neutral-200">
                <h2>Prime Video</h2>
                <IoChevronForward
                  size={18}
                  className="text-neutral-400 group-hover:text-black"
                />
              </div>
              <div className="group flex h-12 w-full items-center justify-between gap-2 bg-white px-10 text-sm hover:bg-neutral-200">
                <h2>Amazon Music</h2>
                <IoChevronForward
                  size={18}
                  className="text-neutral-400 group-hover:text-black"
                />
              </div>
              <div className="group flex h-12 w-full items-center justify-between gap-2 bg-white px-10 text-sm hover:bg-neutral-200">
                <h2>Echo & Alexa</h2>
                <IoChevronForward
                  size={18}
                  className="text-neutral-400 group-hover:text-black"
                />
              </div>
              <div className="group flex h-12 w-full items-center justify-between gap-2 bg-white px-10 text-sm hover:bg-neutral-200">
                <h2>Fire Tablets</h2>
                <IoChevronForward
                  size={18}
                  className="text-neutral-400 group-hover:text-black"
                />
              </div>
              <div className="group flex h-12 w-full items-center justify-between gap-2 bg-white px-10 text-sm hover:bg-neutral-200">
                <h2>Fire TV</h2>
                <IoChevronForward
                  size={18}
                  className="text-neutral-400 group-hover:text-black"
                />
              </div>
              <div className="group flex h-12 w-full items-center justify-between gap-2 bg-white px-10 text-sm hover:bg-neutral-200">
                <h2>Kindle E-readers & Books</h2>
                <IoChevronForward
                  size={18}
                  className="text-neutral-400 group-hover:text-black"
                />
              </div>
              <div className="group flex h-12 w-full items-center justify-between gap-2 bg-white px-10 text-sm hover:bg-neutral-200">
                <h2>Audible Books & Originals</h2>
                <IoChevronForward
                  size={18}
                  className="text-neutral-400 group-hover:text-black"
                />
              </div>
              <div className="group flex h-12 w-full items-center justify-between gap-2 bg-white px-10 text-sm hover:bg-neutral-200">
                <h2>Amazon Photos</h2>
                <IoChevronForward
                  size={18}
                  className="text-neutral-400 group-hover:text-black"
                />
              </div>
              <div className="group flex h-12 w-full items-center justify-between gap-2 bg-white px-10 text-sm hover:bg-neutral-200">
                <h2>Amazon Appstore</h2>
                <IoChevronForward
                  size={18}
                  className="text-neutral-400 group-hover:text-black"
                />
              </div>
            </div>
            <div className="flex h-12 w-full items-center gap-2 bg-white px-10">
              <h2 className="text-xl font-bold">Shop By Department</h2>
            </div>
            <div className="border-b-2 border-neutral-200 py-2">
              <div className="group flex h-12 w-full items-center justify-between gap-2 bg-white px-10 text-sm hover:bg-neutral-200">
                <h2>Clothing, Shoes, Jewelry & Watches</h2>
                <IoChevronForward
                  size={18}
                  className="text-neutral-400 group-hover:text-black"
                />
              </div>
              <div className="group flex h-12 w-full items-center justify-between gap-2 bg-white px-10 text-sm hover:bg-neutral-200">
                <h2>Amazon Fresh</h2>
                <IoChevronForward
                  size={18}
                  className="text-neutral-400 group-hover:text-black"
                />
              </div>
              <div className="group flex h-12 w-full items-center justify-between gap-2 bg-white px-10 text-sm hover:bg-neutral-200">
                <h2>Whole Foods Market</h2>
                <IoChevronForward
                  size={18}
                  className="text-neutral-400 group-hover:text-black"
                />
              </div>
              <div className="group flex h-12 w-full items-center justify-between gap-2 bg-white px-10 text-sm hover:bg-neutral-200">
                <h2>Books</h2>
                <IoChevronForward
                  size={18}
                  className="text-neutral-400 group-hover:text-black"
                />
              </div>
              <div className="group flex h-12 w-full items-center justify-between gap-2 bg-white px-10 text-sm hover:bg-neutral-200">
                <h2>See all</h2>
                <IoChevronForward
                  size={18}
                  className="text-neutral-400 group-hover:text-black"
                />
              </div>
            </div>
            <div className="flex h-12 w-full items-center gap-2 bg-white px-10">
              <h2 className="text-xl font-bold">Programs & Features</h2>
            </div>
            <div className="border-b-2 border-neutral-200 py-2">
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
              <div className="group flex h-12 w-full items-center justify-between gap-2 bg-white px-10 text-sm hover:bg-neutral-200">
                <h2>See All</h2>
                <IoChevronForward
                  size={18}
                  className="text-neutral-400 group-hover:text-black"
                />
              </div>
            </div>
            <div className="flex h-12 w-full items-center gap-2 bg-white px-10">
              <h2 className="text-xl font-bold">Help & Settings</h2>
            </div>
            <div className="border-b-2 border-neutral-200 py-2">
              <div className="group flex h-12 w-full items-center justify-between gap-2 bg-white px-10 text-sm hover:bg-neutral-200">
                <h2>Your Account</h2>
                <IoChevronForward
                  size={18}
                  className="text-neutral-400 group-hover:text-black"
                />
              </div>
              <div className="group flex h-12 w-full items-center justify-between gap-2 bg-white px-10 text-sm hover:bg-neutral-200">
                <h2>English</h2>
                <IoChevronForward
                  size={18}
                  className="text-neutral-400 group-hover:text-black"
                />
              </div>
              <div className="group flex h-12 w-full items-center justify-between gap-2 bg-white px-10 text-sm hover:bg-neutral-200">
                <h2>United States</h2>
                <IoChevronForward
                  size={18}
                  className="text-neutral-400 group-hover:text-black"
                />
              </div>
              <div className="group flex h-12 w-full items-center justify-between gap-2 bg-white px-10 text-sm hover:bg-neutral-200">
                <h2>Sign in</h2>
                <IoChevronForward
                  size={18}
                  className="text-neutral-400 group-hover:text-black"
                />
              </div>
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
