import { useState } from "react";
import NavBar from "../../components/NavigationFolder/NavBar/NavBar";
import SecondaryNavBar from "../../components/NavigationFolder/SecondaryNavBar/SecondaryNavBar";
import SideNav from "../../components/NavigationFolder/SideNav/SideNav";
import BackgroundSlider from "../../components/BackgroundSlider/BackgroundSlider";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import { Slider1Imgs } from "../../assets/ImgArrays";
import RowContainer1 from "../../components/RowContainer1/RowContainer1";
import RowContainer2 from "../../components/RowContainer2/RowContainer2";
import RowContainer3 from "../../components/RowContainer3/RowContainer3";
import BottomPageAdd from "../../components/BottomPageAdd/BottomPageAdd";
import SignInFooter from "../../components/SignInFooter/SignInFooter";
import BackToTopFooter from "../../components/BackToTopFooter/BackToTopFooter";
import Footer from "../../components/Footer/Footer";
import SecondaryFooter from "../../components/SecondaryFooter/SecondaryFooter";

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
      <div className="bg-neutral-200">
        <div className="m-auto flex min-w-[1500px] w-[1500px] flex-col gap-5 pb-5">
          <BackgroundSlider />
          <ProductSlider
            title={"Best Sellers in Grocery & Gourmet Food"}
            images={Slider1Imgs}
          />

          <RowContainer1 />
          <RowContainer2 />
          <RowContainer3 />
          <BottomPageAdd />
        </div>
        <SignInFooter />
        <BackToTopFooter />
        <Footer />
        <SecondaryFooter />
      </div>
    </>
  );
}
