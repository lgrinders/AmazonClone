import { ItemSquare } from "../ProductSquare/ProductSquare";
import ImageSquare from "../ImageSquare/ImageSquare";

export default function RowContainer1() {
  return (
    <>
      <div className="flex h-[430px] w-full px-5 gap-5">
        <ItemSquare
          title={"4th of July Sale"}
          name1={"Fashion"}
          name2={"Patio"}
          name3={"Sports & Outdoors"}
          name4={"Electronics"}
          img1={"/public/productImgs/flipflops.jpg"}
          img2={"/public/productImgs/fork.jpg"}
          img3={"/public/productImgs/ball.jpg"}
          img4={"/public/productimgs/camera.jpg"}
          shop={"Save up to 35%"}
        />
        <ItemSquare
          title={"Summer style update"}
          name1={"Dresses"}
          name2={"Tops"}
          name3={"Shoes"}
          name4={"Swimwear"}
          img1={"/public/productImgs/dress.jpg"}
          img2={"/public/productImgs/top.jpg"}
          img3={"/public/productImgs/shoes.jpg"}
          img4={"/public/productImgs/swimwear.jpg"}
          shop={"Shop now"}
        />
        <ItemSquare
          title={"Most-loved college finds"}
          name1={"Fashion"}
          name2={"Electronics"}
          name3={"School supplies"}
          name4={"Personal care & beauty"}
          img1={"/public/productImgs/purse.jpg"}
          img2={"/public/productImgs/headphones.jpg"}
          img3={"/public/productImgs/markers.jpg"}
          img4={"/public/productImgs/skincare.jpg"}
          shop={"Shop all"}
        />
        <ImageSquare
          title={"Discover a new type of soda"}
          img1={"/public/productImgs/soda.jpg"}
          shop={"Start sipping now"}
          hidden={"md:hidden xl:flex"}
        />
      </div>
    </>
  );
}
