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
  const [langOpen, setLangOpen] = useState(false);
  const [accountsOpen, setAccountsOpen] = useState(false);
  const [medicalOpen, setMedicalOpen] = useState(false);
  const [groceriesOpen, setGroceriesOpen] = useState(false);

  return (
    <>
      <div
        className={
          sideNavOpen
            ? "pointer-events-none fixed z-50 h-screen w-full bg-black/70"
            : null
        }
      />
      <div
        className={
          langOpen || accountsOpen
            ? "pointer-events-none fixed z-40 h-screen w-full bg-black/70"
            : null
        }
      />
      <div
        className={
          medicalOpen || groceriesOpen
            ? "pointer-events-none fixed z-30 h-screen w-full bg-black/70"
            : null
        }
      />

      <NavBar setLangOpen={setLangOpen} setAccountsOpen={setAccountsOpen} />
      <SecondaryNavBar
        sideNavOpen={sideNavOpen}
        setSideNavOpen={setSideNavOpen}
        setGroceriesOpen={setGroceriesOpen}
        setMedicalOpen={setMedicalOpen}
      />
      <SideNav sideNavOpen={sideNavOpen} setSideNavOpen={setSideNavOpen} />
      <div className="bg-neutral-200">
        <div className="m-auto flex min-w-[1000px] max-w-[1500px] flex-col gap-5 pb-5">
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
