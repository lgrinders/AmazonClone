import { IoCaretDownSharp, IoSearchSharp } from "react-icons/io5";

export default function SearchBar() {
  return (
    <>
      <div className="flex h-10 w-full items-center">
        <div className="flex h-full w-14 items-center justify-center gap-2 rounded-l-md bg-neutral-200">
          <p className="text-sm text-neutral-700">All</p>
          <IoCaretDownSharp size={11} className="text-neutral-700" />
        </div>
        <div className="flex-grow">
          <input
            type="text"
            className="h-10 w-full p-3 placeholder:text-neutral-600"
            placeholder="Search Amazon"
          />
        </div>
        <div className="bg-SearchYellow flex h-full w-12 items-center justify-center gap-2 rounded-r-md">
          <IoSearchSharp size={26} />
        </div>
      </div>
    </>
  );
}
