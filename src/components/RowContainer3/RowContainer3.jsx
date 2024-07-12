import { ItemSquare } from "../ProductSquare/ProductSquare";
import ImageSquare from "../ImageSquare/ImageSquare";

export default function RowContainer1() {
  return (
    <>
      <div className="flex h-[430px] w-full justify-between px-5 gap-5">
        <ImageSquare
          title={"Cravings by Chrissy Teigen"}
          img1={"/public/productImgs/couple.jpg"}
          shop={"Shop baking mixes and more"}
        />
        <ImageSquare
          title={"Introducing: new Beats Pill"}
          img1={"/public/productImgs/pill.jpg"}
          shop={"Shop now"}
        />
        <ItemSquare
          title={"Upgrades for you pet"}
          name1={"Feeders"}
          name2={"Smart collars"}
          name3={"Water fountains"}
          name4={"Treat dispensers"}
          img1={"/public/productImgs/bowl1.jpg"}
          img2={"/public/productImgs/collar.jpg"}
          img3={"/public/productImgs/bowl2.jpg"}
          img4={"/public/productImgs/bowl3.jpg"}
          shop={"Shop more tech picks"}
        />
        <ItemSquare
          title={"Explore more Prime Day offers"}
          name1={"Prime Video"}
          name2={"Most-loved finds"}
          name3={"Amazon Music Unlimited"}
          name4={"Shop early deals"}
          img1={"/public/productImgs/boys.jpg"}
          img2={"/public/productImgs/jbl.jpg"}
          img3={"/public/productImgs/music.jpg"}
          img4={"/public/productImgs/boxes.jpg"}
          shop={"Shop early deals now"}
        />
      </div>
    </>
  );
}
