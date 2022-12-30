import Image from "next/image";
import { FC } from "react";
import { IoChevronDown } from "react-icons/io5";
import { LinkButton } from "../Button";

const Token: FC = () => {
  const TokenData = [
    {
      id: 1,
      image: "/img/general/nav/contract.svg",
      text: "Our whitepaper",
      link: "/telehealth",
    },
    {
      id: 2,
      image: "/img/general/nav/wallet.svg",
      text: "Token Utility",
      link: "/SDT",
    },
    {
      id: 3,
      image: "/img/general/nav/crypto-contract.svg",
      text: "Smart Contracts",
      link: "#",
    },
    {
      id: 4,
      image: "/img/general/nav/growth.svg",
      text: "Staking and farming",
      link: "#",
    },
  ];
  return (
    <div>
      <div className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
        <p className="md:px-6 lg:px-3 hover:bg-gradient-600 hover:bg-clip-text text-transparent text-text-600 text-base">
          StableDoc Token
          <IoChevronDown className="hover:bg-gradient-600 hover:bg-clip-text hover:font-semibold inline mb-1 ml-1" />
        </p>

        <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 top-full left-0 min-w-[15rem] bg-none before:absolute before:-top-5 before:left-0 before:w-full before:h-5">
          <div className="w-3/4 mx-auto bg-white sm:shadow-md py-5">
            <p className="text-lg text-text-600 my-10 text-center">
              StableDoc offers many solutions to better the healthcare and
              crypto space in Africa.
            </p>
            <div className="sm:grid sm:grid-cols-4 justify-between px-16">
              {TokenData.map((data) => (
                <LinkButton key={data.id} link={data.link}>
                  <div className="flex gap-5">
                    <Image
                      src={data.image}
                      alt={data.text}
                      width={data.id == 2 ? 60 : 40}
                      height={data.id == 2 ? 60 : 40}
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
