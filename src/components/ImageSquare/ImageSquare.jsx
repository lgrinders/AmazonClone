export default function ImageSquare({ title, img1, shop, hidden }) {
  return (
    <>
      <div
        className={`flex flex-col justify-between bg-white p-5 ${hidden} w-full`}
      >
        <div className="flex flex-col gap-3">
          <div className="text-2xl font-bold">{title}</div>
          <a href="#">
            <img src={img1} alt="" className="h-72 object-cover" />
          </a>
        </div>

        <a href="#" className="text-sm text-blue-700 hover:text-orange-500">
          {shop}
        </a>
      </div>
    </>
  );
}
