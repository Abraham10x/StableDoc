import Image from "next/image";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="container pt-12 px-10 pb-8 2xl:px-0 mx-auto mt-32">
      <div className="flex flex-col lg:flex-row justify-between bg-secondary-600 bg-opacity-10 gap-y-24 gap-x-14 px-5 sm:px-16 py-12 rounded-3xl">
        <div className="flex flex-col justify-between h-full basis-[54%] my-auto">
          <h1 className="font-bold text-4xl sm:text-5xl bg-gradient-600 bg-clip-text text-transparent-active">
            About Stabledoc
          </h1>
          <p className="text-2xl text-text-300 mt-8">
            Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing
            elit. dolor sit amet doloroli sitiol conse ctetur adipiscing
            elitdolor sit amet doloroli sitiol conse ctetur adipiscing elit
          </p>
        </div>
        <Image
          className="basis-full w-full lg:basis-[20%]"
          src="/img/company/company-hero.svg"
          alt="crypto-currency"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};

export default Hero;
