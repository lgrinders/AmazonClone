import { useState } from "react";
import NavBar from "../../components/NavigationFolder/NavBar/NavBar";
import SecondaryNavBar from "../../components/NavigationFolder/SecondaryNavBar/SecondaryNavBar";
import SideNav from "../../components/NavigationFolder/SideNav/SideNav";
import BackgroundSlider from "../../components/BackgroundSlider/BackgroundSlider";
import ProductSlider1 from "../../components/ProductSlider1/ProductSlider1";
import ProductSlider2 from "../../components/ProductSlider2/ProductSlider2";
import ProductSlider3 from "../../components/ProductSlider3/ProductSlider3";
import { Slider1Imgs } from "../../assets/ImgArrays";
import RowContainer1 from "../../components/RowContainer1/RowContainer1";
import RowContainer2 from "../../components/RowContainer2/RowContainer2";
import RowContainer3 from "../../components/RowContainer3/RowContainer3";
import BottomPageAdd from "../../components/BottomPageAdd/BottomPageAdd";
import SignInFooter from "../../components/SignInFooter/SignInFooter";
import BackToTopFooter from "../../components/BackToTopFooter/BackToTopFooter";
import Footer from "../../components/Footer/Footer";

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
      <div className="bg-neutral-200 pb-52">
        <div className="m-auto flex max-w-[1500px] flex-col gap-5 pb-5">
          <BackgroundSlider />
          <ProductSlider1
            title={"Best Sellers in Grocery & Gourmet Food"}
            images={Slider1Imgs}
          />

          <RowContainer1 />
          <RowContainer2 />
          <ProductSlider2
            title={"Best Sellers in Home & Kitchen"}
            images={Slider1Imgs}
          />
          <ProductSlider3
            title={"Best Sellers in Home & Kitchen"}
            images={Slider1Imgs}
          />
          <RowContainer3 />
          <BottomPageAdd />
        </div>
        <SignInFooter />
        <BackToTopFooter />
        <Footer />
      </div>
    </>
  );
}
