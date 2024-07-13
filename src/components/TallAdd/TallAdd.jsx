export default function TallAdd() {
  return (
    <>
      <div className="w-full flex-col items-center justify-between gap-5 hidden xl:flex">
        <div className="flex flex-col gap-3 bg-white p-5 w-[350px]">
          <h2 className="w-full text-2xl font-bold">
            Sign in for the best experience
          </h2>
          <button className="font-sm rounded-lg bg-yellow-300 p-1.5 text-sm duration-100 hover:bg-yellow-500">
            Sign in securely
          </button>
        </div>
        <div className="flex w-full justify-center">
          <img
            src="public/productImgs/21&over.jpg"
            alt=""
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
}
