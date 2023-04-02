import Image from "next/image";
import { FC } from "react";
import { IoChevronDown } from "react-icons/io5";
import { LinkButton } from "../Button";

const Token: FC = () => {
  const TokenData = [
    {
      id: 1,
      image: "/img/general/nav/wallet.png",
      text: "StableDoc Token",
      link: "/SDT",
    },
    {
      id: 2,
      image: "/img/general/nav/contract.png",
      text: "Our whitepaper",
      link: "/assets/documents/new-whitepaper.pdf",
    },
    {
      id: 3,
      image: "/img/general/nav/crypto-contract.png",
      text: "Move2Earn",
      link: "/M2E",
    },
    {
      id: 4,
      image: "/img/general/nav/growth.png",
      text: "Staking and farming",
      link: "https://app.stabledoc.com/dashboard",
    },
  ];
  return (
    <div>
      <div className="hs-dropdown [--strategy:static] lg:[--strategy:absolute] [--adaptive:none] lg:[--trigger:hover]">
        <p className="md:px-6 lg:px-3 hover:bg-gradient-600 hover:bg-clip-text text-transparent text-text-600 text-base cursor-pointer">
          Blockchain
          {/* <IoChevronDown className="hover:bg-gradient-600 hover:bg-clip-text hover:font-semibold inline mb-1 ml-1" /> */}
        </p>

        <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 top-full left-0 min-w-[15rem] bg-none before:absolute before:-top-5 before:left-0 before:w-full before:h-5">
          <div className="w-full sm:pl-6 lg:pl-0 lg:w-3/4 mx-auto bg-white lg:shadow-md py-5">
            <p className="text-lg text-text-600 my-10 text-center hidden lg:block">
              StableDoc is uniquely positioned to better the healthcare of users
              in the crypto space.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center px-0 lg:px-16 mx-auto">
              {TokenData.map((data) => (
                <LinkButton
                  key={data.id}
                  link={data.link}
                  target={data.id === 4 || data.id === 2 ? "_blank" : ""}
                >
                  <div className="flex gap-5">
                    <Image
                      src={data.image}
                      alt={data.text}
                      width={data.id == 2 ? 40 : 40}
                      height={data.id == 2 ? 40 : 40}
                    />
                    <p className="text-base text-text-600 font-medium my-auto">
                      {data.text}
                    </p>
                  </div>
                </LinkButton>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Token;
