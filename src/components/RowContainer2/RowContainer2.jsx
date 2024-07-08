import { ItemSquare } from "../ProductSquare/ProductSquare";
import ImageSquare from "../ImageSquare/ImageSquare";

export default function RowContainer1() {
  return (
    <>
      <div className="flex h-[430px] w-full justify-between px-5">
        <ImageSquare
          title={"Just launched: Olay Melts"}
          img1={"/public/productImgs/face.jpg"}
          shop={"Start now"}
        />
        <ImageSquare
          title={"Deals on lunch supplies"}
          img1={"/public/productImgs/lunchBoxes.jpg"}
          shop={"Shop all"}
        />
        <ItemSquare
          title={"Send a gift card for Prime Day"}
          name1={"What you wanted"}
          name2={"Prime van in tin"}
          name3={"Amazon box"}
          name4={"Amazon smile"}
          img1={"/public/productImgs/card1.jpg"}
          img2={"/public/productImgs/card2.jpg"}
          img3={"/public/productImgs/card3.jpg"}
          img4={"/public/productImgs/card4.jpg"}
          shop={"See more designs"}
        />
        <ImageSquare
          title={"Deals on school backpacks"}
          img1={"/public/productImgs/backpacks.jpg"}
          shop={"Start sipping now"}
        />
      </div>
    </>
  );
}
