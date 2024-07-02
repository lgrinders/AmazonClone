const ItemSquare = ({
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
      <div className="flex flex-col gap-5 bg-white p-5">
        <div className="text-xl font-bold">{title}</div>
        <div className="flex gap-3">
          <div>
            <img src={img1} alt="" className="h-28 w-36 object-cover" />
            <p className="text-sm">{name1}</p>
          </div>
          <div>
            <img src={img2} alt="" className="h-28 w-36 object-cover" />
            <p className="text-sm">{name2}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div>
            <img src={img3} alt="" className="h-28 w-36 object-cover" />
            <p className="text-sm">{name3}</p>
          </div>
          <div>
            <img src={img4} alt="" className="h-28 w-36 object-cover" />
            <p className="text-sm">{name4}</p>
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
      <div className="relative flex h-full w-full gap-5 p-5">
        <ItemSquare
          title={"Summer fashion for all"}
          name1={"All fashion"}
          name2={"Women's"}
          name3={"Men's"}
          name4={"Kid's"}
          img1={"public/productImages/All_fashion.jpg"}
          img2={"public/productImages/Women's.jpg"}
          img3={"public/productImages/Men's.jpg"}
          img4={"public/productImages/Kid's.jpg"}
          shop={"shop"}
        />
        <ItemSquare
          title={"New home arrivals under $50"}
          name1={"Kitchen & dining"}
          name2={"Home imporvement"}
          name3={"Decor"}
          name4={"Bedding & bath"}
          img1={"public/productImages/Kitchen&dining.jpg"}
          img2={"public/productImages/Home_improvement.jpg"}
          img3={"public/productImages/Decor.jpg"}
          img4={"public/productImages/Bedding&bath.jpg"}
          shop={"Shop the latest from Home"}
        />
      </div>
    </>
  );
}
