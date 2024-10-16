import { ItemSquare } from "../ProductSquare/ProductSquare";
import ImageSquare from "../ImageSquare/ImageSquare";

export default function RowContainer1() {
  return (
    <>
      <div className="flex h-[430px] px-5">
        <div className="flex w-full gap-5">
          <ImageSquare
            title={"Cravings by Chrissy Teigen"}
            img1={"productImgs/couple.jpg"}
            shop={"Shop baking mixes and more"}
          />
          <ImageSquare
            title={"Introducing: new Beats Pill"}
            img1={"productImgs/pill.jpg"}
            shop={"Shop now"}
          />
          <ItemSquare
            title={"Upgrades for you pet"}
            name1={"Feeders"}
            name2={"Smart collars"}
            name3={"Water fountains"}
            name4={"Treat dispensers"}
            img1={"productImgs/bowl1.jpg"}
            img2={"productImgs/collar.jpg"}
            img3={"productImgs/bowl2.jpg"}
            img4={"productImgs/bowl3.jpg"}
            shop={"Shop more tech picks"}
          />
          <ItemSquare
            title={"Explore more Prime Day offers"}
            name1={"Prime Video"}
            name2={"Most-loved finds"}
            name3={"Amazon Music Unlimited"}
            name4={"Shop early deals"}
            img1={"productImgs/boys.jpg"}
            img2={"productImgs/jbl.jpg"}
            img3={"productImgs/music.jpg"}
            img4={"productImgs/boxes.jpg"}
            shop={"Shop early deals now"}
            hidden={"hidden xl:flex"}
          />
        </div>
      </div>
    </>
  );
}
