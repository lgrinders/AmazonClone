export default function ImageSquare({ title, img1, shop, hidden }) {
  return (
    <>
      <div className={`flex flex-col justify-between gap-3 p-5 bg-white min-w-[345px] w-full ${hidden}`}>
        <div className="text-2xl font-bold">{title}</div>
        <div>
          <div>
            <img
              src={img1}
              alt=""
              className="h-[300px] w-[300px] object-cover"
            />
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
}
