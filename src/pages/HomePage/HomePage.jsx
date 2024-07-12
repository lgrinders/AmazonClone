import { useState } from "react";
import NavBar from "../../components/NavigationFolder/NavBar/NavBar";
import SecondaryNavBar from "../../components/NavigationFolder/SecondaryNavBar/SecondaryNavBar";
import SideNav from "../../components/NavigationFolder/SideNav/SideNav";
import BackgroundSlider from "../../components/BackgroundSlider/BackgroundSlider";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import { ProductSliderAssets } from "../../assets/ImgArrays";
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
        <div className="m-auto flex max-w-[1500px] min-w-[1000px] flex-col gap-5 pb-5">
          <BackgroundSlider />

          <RowContainer1 />
          <ProductSlider
            title={ProductSliderAssets[0].title}
            images={ProductSliderAssets[0].images}
          />
          <ProductSlider
            title={ProductSliderAssets[1].title}
            images={ProductSliderAssets[1].images}
          />
          <RowContainer2 />
          <ProductSlider
            title={ProductSliderAssets[2].title}
            images={ProductSliderAssets[2].images}
          />
          <RowContainer3 />
          <BottomPageAdd />
          <ProductSlider
            title={ProductSliderAssets[3].title}
            images={ProductSliderAssets[3].images}
          />
        </div>
        <SignInFooter />
        
        <BackToTopFooter />
        <Footer />
        <SecondaryFooter />
      </div>
    </>
  );
}
