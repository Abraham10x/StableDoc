import { FC } from "react";
import { Button } from "../general/Button";
import Image from "next/image";

const Hero: FC = () => {
  return (
    <div className="pl-auto sm:container lg:max-w-none mx-auto xl:pl-[3rem] pt-9 lg:pt-0 lg:pl-10 px-5 sm:px-10 lg:px-0 flex flex-col lg:flex-row justify-between bg-[#F5FAFF] lg:bg-secondary-600 lg:bg-opacity-10">
      <div className="flex flex-col basis-[39%] gap-2 my-auto">
        <h1 className="font-bold text-4xl sm:text-6xl bg-gradient-600 bg-clip-text text-transparent-active">
          The Future Of Healthcare, Delivered Today
        </h1>
        <div className="flex flex-col border-l-8 border-primary pl-8 gap-y-8 mt-5">
          <p className="text-2xl text-text-300 mt-3">
            Redefining the nature of healthcare as ongoing, multi-modal,
            personalized and decentralized.
          </p>
          <Button className="bg-primary font-semibold text-white w-52 py-3 leading-7 text-base rounded-full">
            Get Started
          </Button>
        </div>
      </div>
      <div className="">
        <Image
          src="/img/home/home-hero.svg"
          alt="crypto-currency"
          width={800}
          height={800}
        />
      </div>
    </div>
  );
};
export default Hero;
