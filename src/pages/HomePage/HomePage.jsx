import { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SecondaryNavBar from "../../components/SecondaryNavBar/SecondaryNavBar";
import SideNav from "../../components/SideNav/SideNav";
import BackgroundSlider from "../../components/BackgroundSlider/BackgroundSlider";

export default function HomePage() {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  return (
    <>
      <div
        className={
          sideNavOpen ? "absolute z-40 h-screen w-screen bg-black/70" : null
        }
      ></div>

      <NavBar />
      <SecondaryNavBar
        sideNavOpen={sideNavOpen}
        setSideNavOpen={setSideNavOpen}
      />

      <SideNav sideNavOpen={sideNavOpen} setSideNavOpen={setSideNavOpen} />
      <div className="bg-neutral-200 min-h-screen">
        <BackgroundSlider />
      </div>
    </>
  );
}
