import { useState } from "react";
import { IoCaretDownSharp, IoChevronForward } from "react-icons/io5";
import { account, lists } from "../../../assets/category";

export default function AccountsLists({ setAccountsOpen }) {
  const [beingHovered, setBeingHovered] = useState(false);

  return (
    <>
      <div
        className="relative flex h-full min-w-[135px] items-center justify-center gap-1 rounded-sm border-2 border-transparent duration-200 hover:border-white"
        onMouseEnter={(e) => {
          setBeingHovered(true), setAccountsOpen(true);
        }}
        onMouseLeave={(e) => {
          setBeingHovered(false), setAccountsOpen(false);
        }}
      >
        <div>
          <p className="text-xs leading-4 text-white">Hello, sign in</p>
          <div className="flex items-center gap-0.5">
            <p className="text-sm font-black leading-3 text-white">
              Accounts & Lists
            </p>
            <IoCaretDownSharp size={10} className="text-neutral-400" />
          </div>
        </div>
        {beingHovered && (
          <div className="absolute right-1 top-12 rounded-sm bg-white p-3 shadow-lg">
            <div className="bg-lightCyan mb-3 flex w-full items-center justify-between rounded-xl p-3 text-sm">
              <div>Who's shopping? Select a profile.</div>
              <a
                href=""
                className="flex items-center gap-1 hover:text-red-500 hover:underline"
              >
                Manage Profiles <IoChevronForward size={15} />
              </a>
            </div>

            <div className="flex justify-center">
              <div className="w-52">
                <h2 className="font-bold">Your Lists</h2>
                <div className="flex flex-col">
                  {lists.map((item, index) => {
                    return (
                      <a
                        key={index}
                        href="#"
                        className="text-sm hover:text-AmazonOrange hover:underline"
                      >
                        {item}
                      </a>
                    );
                  })}
                </div>
              </div>
              <div className="flex w-52 flex-col border-l-2 border-neutral-100 p-1">
                <h2 className="font-bold">Your Account</h2>
                <div className="flex flex-col">
                  {account.map((item, index) => {
                    return (
                      <a
                        key={index}
                        href="#"
                        className="text-sm hover:text-AmazonOrange hover:underline"
                      >
                        {item}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
