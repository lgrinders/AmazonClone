import { IoCloseOutline, IoChevronForward } from "react-icons/io5";
import { HiMiniUserCircle } from "react-icons/hi2";
import {
  Trending,
  DigitalContent,
  ShopByDepartment,
  ProgramsFeatures,
  HelpSettings,
} from "../../assets/category";

const SectionHeader = ({ title }) => (
  <div className="flex h-12 w-full items-center gap-2 bg-white px-10">
    <h2 className="text-xl font-bold">{title}</h2>
  </div>
);

const SectionItem = ({ item, hasChevron }) => (
  <div className="group flex h-12 w-full items-center justify-between gap-2 bg-white px-10 text-sm hover:bg-neutral-200">
    <h2>{item}</h2>
    {hasChevron && (
      <IoChevronForward
        size={18}
        className="text-neutral-400 group-hover:text-black"
      />
    )}
  </div>
);

const Section = ({ title, items, hasChevron }) => (
  <div className="border-b-2 border-neutral-200 py-2">
    {title && <SectionHeader title={title} />}
    {items.map((item, index) => (
      <SectionItem key={index} item={item} hasChevron={hasChevron} />
    ))}
  </div>
);

export default function SideNav({ sideNavOpen, setSideNavOpen }) {
  return (
    <>
      <div
        className={`fixed left-0 top-0 z-50 h-screen w-96 transform overflow-scroll bg-white transition-transform duration-300 ${
          sideNavOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-12 w-full items-center gap-2 bg-SecondaryNavBarBlue px-5">
          <HiMiniUserCircle className="text-white" size={30} />
          <h2 className="text-xl font-bold text-white">Hello, sign in</h2>
        </div>

        <Section title="Trending" items={Trending} />
        <Section
          title="Digital Content & Devices"
          items={DigitalContent}
          hasChevron={true}
        />
        <Section
          title="Shop By Department"
          items={ShopByDepartment}
          hasChevron={true}
        />
        <Section
          title="Programs & Features"
          items={ProgramsFeatures}
          hasChevron={true}
        />
        <Section
          title="Help & Settings"
          items={HelpSettings}
          hasChevron={true}
        />
      </div>
      {sideNavOpen && (
        <div
          className="fixed left-96 top-0 z-50 flex h-screen w-10 justify-center py-2"
          onClick={() => setSideNavOpen(!sideNavOpen)}
        >
          <IoCloseOutline className="text-white" size={50} />
        </div>
      )}
    </>
  );
}
