import {
  Conditions,
  SecondaryFooterInfo1,
  SecondaryFooterInfo2,
} from "../../assets/FooterInfo";

export default function SecondaryFooter() {
  return (
    <>
      <div className="min-w-screen flex flex-col items-center bg-NavBarBlue pt-6">
        <div className="grid-row-4 grid grid-cols-7 gap-x-10 gap-y-2">
          {SecondaryFooterInfo1.map((item, index) => {
            return (
              <>
                <a key={index} href="#" className="group">
                  <p className="w-24 text-sm text-white group-hover:underline">
                    {item.title}
                  </p>
                  <p className="w-28 text-xs text-neutral-400 group-hover:underline">
                    {item.description}
                  </p>
                </a>
              </>
            );
          })}
        </div>
        <div className="flex gap-10">
          {SecondaryFooterInfo2.map((item, index) => {
            return (
              <>
                <a key={index} href="#" className="group">
                  <p className="w-24 text-sm text-white group-hover:underline">
                    {item.title}
                  </p>
                  <p className="w-28 text-xs text-neutral-400 group-hover:underline">
                    {item.description}
                  </p>
                </a>
              </>
            );
          })}
        </div>
      </div>
      <div className="min-w-screen flex flex-col items-center bg-NavBarBlue p-10 text-xs text-white">
        <div className="flex gap-3 pb-1">
          {Conditions.map((item, index) => {
            return (
              <a href="#" className="hover:underline">
                {item}
              </a>
            );
          })}
        </div>

        <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
      </div>
    </>
  );
}
