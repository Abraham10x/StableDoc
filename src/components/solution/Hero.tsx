import Image from "next/image";
import { FC } from "react";
import { LinkButton } from "../general/Button";

const Hero: FC = () => {
  return (
    <div className="container pt-12 px-5 sm:px-10 sm:pb-8 2xl:px-0 mx-auto mt-32">
      <div className="flex flex-col lg:flex-row justify-between bg-secondary-600 bg-opacity-10 gap-y-24 gap-x-14 px-5 sm:px-16 py-12 rounded-3xl">
        <div className="flex flex-col justify-between h-full basis-[54%] my-auto">
          <div className="flex flex-row justify-start gap-5">
            <h1 className="font-bold text-2xl sm:text-4xl lg:text-5xl bg-gradient-600 bg-clip-text text-transparent-active">
              StableDoc Solutions
            </h1>
            <Image
              className="lg:hidden"
              src="/img/solution/solution-hero.svg"
              alt="crypto-currency"
              width={35}
              height={35}
            />
          </div>
          <p className="text-base lg:text-2xl text-text-300 mt-8">
            Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing
            elit. dolor sit amet doloroli sitiol conse ctetur adipiscing
            elitdolor sit amet doloroli sitiol conse ctetur adipiscing elit
          </p>
        </div>
        <Image
          className="basis-full lg:basis-[20%] hidden lg:block"
          src="/img/solution/solution-hero.svg"
          alt="crypto-currency"
          width={50}
          height={50}
        />
      </div>
      <div className="flex w-full overflow-x-auto mt-6 py-6 justify-start sm:justify-center gap-7">
        <LinkButton
          link="#premium-health-services"
          className="bg-primary hover:bg-secondary-900 transition-all text-white w-48 sm:w-52 lg:w-72 px-5 py-3 text-xs sm:text-sm lg:text-lg font-medium sm:font-bold rounded lg:rounded-xl"
        >
          Premium health services
        </LinkButton>
        <LinkButton
          link="#cross-border-health"
          className="border border-primary hover:bg-primary/20 transition-colors text-primary w-48 sm:w-52 lg:w-72 px-5 py-3 text-xs sm:text-sm lg:text-lg font-medium sm:font-bold rounded lg:rounded-xl"
        >
          Cross border Health
        </LinkButton>
        <LinkButton
          link="#health-blockchain"
          className="border border-primary hover:bg-primary/20 transition-colors text-primary w-48 sm:w-[13.5rem] lg:w-72 px-5 py-3 text-xs sm:text-sm lg:text-lg font-medium sm:font-bold rounded lg:rounded-xl"
        >
          Your health on a blockchain
        </LinkButton>
      </div>
    </div>
  );
};

export default Hero;
