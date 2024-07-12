import { MdOutlineStarPurple500 } from "react-icons/md";

export default function BottomPageAdd() {
  return (
    <>
      <div className="w-full px-5">
        <div className="m-auto flex w-[1000px] max-w-[1000px] justify-between bg-white p-10">
          <img
            src="/public/productImgs/duracell.jpg"
            className="ml-5 w-[315px]"
          />
          <div className="flex w-1/2 flex-col gap-1">
            <h2 className="text-xl font-medium">
              Duracell Coppertop AA Batteries with Power Boost Ingredients, 20
              Count Pack Double A Battery with...
            </h2>
            <div className="flex items-center gap-1">
              <div className="flex text-4xl text-yellow-500">
                {[...Array(5)].map((item, index) => {
                  return <MdOutlineStarPurple500 key={index} />;
                })}
              </div>
              <p>55,215</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                <h2 className="text-4xl font-semibold">16</h2>
                <p className="text-xs">93</p>
              </div>
              <img
                src="/public/navigationImgs/prime.png"
                alt="prime-logo"
                className="h-4 w-14"
              />
            </div>
            <button className="w-24 rounded-full bg-cartYellow p-1.5 text-sm hover:bg-cartYellowHover">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
