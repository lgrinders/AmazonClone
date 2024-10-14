import { ItemSquare } from "../ProductSquare/ProductSquare";
import ImageSquare from "../ImageSquare/ImageSquare";

export default function RowContainer1() {
  return (
    <>
      <div className="flex h-[430px] px-5">
        <div className="flex w-full gap-5">
          <ItemSquare
            title={"4th of July Sale"}
            name1={"Fashion"}
            name2={"Patio"}
            name3={"Sports & Outdoors"}
            name4={"Electronics"}
            img1={"productImgs/flipflops.jpg"}
            img2={"productImgs/fork.jpg"}
            img3={"productImgs/ball.jpg"}
            img4={"productImgs/camera.jpg"}
            shop={"Save up to 35%"}
          />
          <ItemSquare
            title={"Summer style update"}
            name1={"Dresses"}
            name2={"Tops"}
            name3={"Shoes"}
            name4={"Swimwear"}
            img1={"productImgs/dress.jpg"}
            img2={"productImgs/top.jpg"}
            img3={"productImgs/shoes.jpg"}
            img4={"productImgs/swimwear.jpg"}
            shop={"Shop now"}
          />
          <ItemSquare
            title={"Most-loved college finds"}
            name1={"Fashion"}
            name2={"Electronics"}
            name3={"School supplies"}
            name4={"Personal care & beauty"}
            img1={"productImgs/purse.jpg"}
            img2={"productImgs/headphones.jpg"}
            img3={"productImgs/markers.jpg"}
            img4={"productImgs/skincare.jpg"}
            shop={"Shop all"}
          />
          <ImageSquare
            title={"Discover a new type of soda"}
            img1={"productImgs/soda.jpg"}
            shop={"Start sipping now"}
            hidden={"md:hidden xl:flex"}
          />
        </div>
      </div>
    </>
  );
}
