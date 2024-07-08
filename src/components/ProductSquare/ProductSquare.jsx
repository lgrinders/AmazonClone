import ImageSquare from "../ImageSquare/ImageSquare";

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
}) => {
  return (
    <>
      <div className="flex flex-col justify-between bg-white p-5 min-w-[345px] w-[345px]">
        <div className="flex flex-col gap-3">
          <div className="text-2xl font-bold">{title}</div>
          <div className="flex gap-5">
            <div>
              <img src={img1} alt="" className="h-28 w-36 object-cover" />
              <p className="text-sm">{name1}</p>
            </div>
            <div>
              <img src={img2} alt="" className="h-28 w-36 object-cover" />
              <p className="text-sm">{name2}</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div>
              <img src={img3} alt="" className="h-28 w-36 object-cover" />
              <p className="text-sm">{name3}</p>
            </div>
            <div>
              <img src={img4} alt="" className="h-28 w-36 object-cover" />
              <p className="text-sm">{name4}</p>
            </div>
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
      <div className="relative flex h-[430px] w-full justify-evenly">
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
        <div className="flex h-full flex-col items-center gap-5">
          <div className="flex flex-col gap-3 bg-white p-5 pb-14">
            <h2 className="text-2xl font-bold">
              Sign in for the best experience
            </h2>
            <button className="font-sm rounded-lg bg-yellow-300 p-1.5 text-sm duration-100 hover:bg-yellow-500">
              Sign in seculrely
            </button>
          </div>
          <div>
            <img src="public/productImgs/21&over.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
