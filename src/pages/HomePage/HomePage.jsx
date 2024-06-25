import { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SecondaryNavBar from "../../components/SecondaryNavBar/SecondaryNavBar";
import SideNav from "../../components/SideNav/SideNav";

export default function HomePage() {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  return (
    <>
      <NavBar />
      <SecondaryNavBar
        sideNavOpen={sideNavOpen}
        setSideNavOpen={setSideNavOpen}
      />
      <SideNav sideNavOpen={sideNavOpen} setSideNavOpen={setSideNavOpen} />
    </>
  );
}
