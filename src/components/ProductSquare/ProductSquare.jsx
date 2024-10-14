import ImageSquare from "../ImageSquare/ImageSquare";
import TallAdd from "../TallAdd/TallAdd";

export const ItemSquare = ({
  title,
  img1,
  img2,
  img3,
  img4,
  name1,
  name2,
  name3,
  name4,
  shop,
  hidden,
}) => {
  return (
    <>
      <div
        className={`flex h-[430px] w-full min-w-[200px] flex-col justify-between bg-white p-5 ${hidden}`}
      >
        <div className="flex flex-col gap-3">
          <div className="text-2xl font-bold">{title}</div>
          <div className="flex gap-5">
            <a href="#">
              <img src={img1} alt="" className="h-24 w-full object-cover" />
              <p className="text-sm">{name1}</p>
            </a>
            <a href="#">
              <img src={img2} alt="" className="h-24 w-full object-cover" />
              <p className="text-sm">{name2}</p>
            </a>
          </div>
          <div className="flex gap-5">
            <a href="#">
              <img src={img3} alt="" className="h-24 w-full object-cover" />
              <p className="text-sm">{name3}</p>
            </a>
            <a href="#">
              <img src={img4} alt="" className="h-24 w-full object-cover" />
              <p className="text-sm">{name4}</p>
            </a>
          </div>
        </div>

        <div>
          <a href="#" className="text-sm text-blue-700 hover:text-orange-500">
            {shop}
          </a>
        </div>
      </div>
    </>
  );
};

export default function ProductSquare() {
  return (
    <>
      <div className="relative flex h-full w-full justify-between gap-5">
        <ItemSquare
          title={"Summer fashion for all"}
          name1={"All fashion"}
          name2={"Women's"}
          name3={"Men's"}
          name4={"Kid's"}
          img1={"public/productImgs/All_fashion.jpg"}
          img2={"public/productImgs/Women's.jpg"}
          img3={"public/productImgs/Men's.jpg"}
          img4={"public/productImgs/Kid's.jpg"}
          shop={"Shop"}
        />
        <ItemSquare
          title={"New home arrivals under $50"}
          name1={"Kitchen & dining"}
          name2={"Home imporvement"}
          name3={"Decor"}
          name4={"Bedding & bath"}
          img1={"public/productImgs/Kitchen&dining.jpg"}
          img2={"public/productImgs/Home_improvement.jpg"}
          img3={"public/productImgs/Decor.jpg"}
          img4={"public/productImgs/Bedding&bath.jpg"}
          shop={"Shop the latest from Home"}
        />
        <ImageSquare
          title={"Modify by merch on demand"}
          img1={"public/productImgs/Dog_mama.jpg"}
          shop={"Shop"}
        />
        <TallAdd />
      </div>
    </>
  );
}
