import {
  AmazonPaymentProducts,
  GetToKnowUs,
  LetUsHelpYou,
  MakeMoneyWithUs,
} from "../../assets/FooterInfo";

export default function () {
  return (
    <>
      <div className="flex min-w-full justify-center gap-20 bg-SecondaryNavBarBlue py-10 text-neutral-200">
        <div>
          <h2 className="pb-2 text-xl font-bold text-white">Get to Know Us</h2>
          <ul className="flex flex-col gap-2 text-sm">
            {GetToKnowUs.map((item, idx) => {
              return (
                <li key={idx}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h2 className="pb-2 text-xl font-bold text-white">
            Make Money With Us
          </h2>
          <ul className="flex flex-col gap-2 text-sm">
            {MakeMoneyWithUs.map((item, idx) => {
              return (
                <li key={idx}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h2 className="pb-2 text-xl font-bold text-white">
            Amazon Payment Products
          </h2>
          <ul className="flex flex-col gap-2 text-sm">
            {AmazonPaymentProducts.map((item, idx) => {
              return (
                <li key={idx}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h2 className="pb-2 text-xl font-bold text-white">Let Us Help You</h2>
          <ul className="flex flex-col gap-2 text-sm">
            {LetUsHelpYou.map((item, idx) => {
              return (
                <li key={idx}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
