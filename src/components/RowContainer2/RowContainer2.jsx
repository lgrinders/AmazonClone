import { ItemSquare } from "../ProductSquare/ProductSquare";
import ImageSquare from "../ImageSquare/ImageSquare";

export default function RowContainer1() {
  return (
    <>
      <div className="flex h-[430px] px-5">
        <div className="flex w-full gap-5">
          <ImageSquare
            title={"Just launched: Olay Melts"}
            img1={"productImgs/face.jpg"}
            shop={"Start now"}
          />
          <ImageSquare
            title={"Deals on lunch supplies"}
            img1={"productImgs/lunchBoxes.jpg"}
            shop={"Shop all"}
          />
          <ItemSquare
            title={"Send a gift card for Prime Day"}
            name1={"What you wanted"}
            name2={"Prime van in tin"}
            name3={"Amazon box"}
            name4={"Amazon smile"}
            img1={"productImgs/card1.jpg"}
            img2={"productImgs/card2.jpg"}
            img3={"productImgs/card3.jpg"}
            img4={"productImgs/card4.jpg"}
            shop={"See more designs"}
          />
          <ImageSquare
            title={"Deals on school backpacks"}
            img1={"productImgs/backpacks.jpg"}
            shop={"Start sipping now"}
            hidden={"md:hidden xl:flex"}
          />
        </div>
      </div>
    </>
  );
}
