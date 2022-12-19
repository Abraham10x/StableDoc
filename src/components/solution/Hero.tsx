import Image from "next/image";
import { FC } from "react";
import { LinkButton } from "../general/Button";

const Hero: FC = () => {
  return (
    <div className="container pt-12 px-10 pb-8 2xl:px-0 mx-auto mt-32">
      <div className="flex flex-col lg:flex-row justify-between bg-secondary-600 bg-opacity-10 gap-y-24 gap-x-14 px-5 sm:px-16 py-12 rounded-3xl">
        <div className="flex flex-col justify-between h-full basis-[54%] my-auto">
          <h1 className="font-bold text-4xl sm:text-5xl bg-gradient-600 bg-clip-text text-transparent-active">
            StableDoc Solutions
          </h1>
          <p className="text-2xl text-text-300 mt-8">
            Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing
            elit. dolor sit amet doloroli sitiol conse ctetur adipiscing
            elitdolor sit amet doloroli sitiol conse ctetur adipiscing elit
          </p>
        </div>
        <Image
          className="basis-full lg:basis-[20%]"
          src="/img/solution/solution-hero.svg"
          alt="crypto-currency"
          width={50}
          height={50}
        />
      </div>
      <div className="flex flex-wrap mt-16 justify-center gap-7">
        <LinkButton
          link="#"
          className="bg-primary text-white px-5 py-3 text-lg font-bold rounded-xl"
        >
          Premium health services
        </LinkButton>
        <LinkButton
          link="#"
          className="border border-primary text-primary px-5 py-3 text-lg font-bold rounded-xl"
        >
          Cross border Health
        </LinkButton>
        <LinkButton
          link="#"
          className="border border-primary text-primary px-5 py-3 text-lg font-bold rounded-xl"
        >
          Your health on a blockchain
        </LinkButton>
      </div>
    </div>
  );
};

export default Hero;
