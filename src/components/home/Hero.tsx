import { FC } from "react";
import { Button, LinkButton } from "../general/Button";
import Image from "next/image";

const Hero: FC = () => {
  return (
    <div className="pl-auto sm:container lg:max-w-none mx-auto xl:pl-[3rem] pt-9 lg:pt-0 lg:pl-10 px-5 sm:px-10 lg:px-0 flex flex-col lg:flex-row justify-between bg-[#F5FAFF] lg:bg-secondary-600 lg:bg-opacity-10">
      <div className="flex flex-col lg:basis-[70%] 2xl:basis-[39%] gap-2 my-auto">
        <h1 className="font-extrabold lg:font-bold text-3xl sm:text-4xl lg:text-6xl bg-gradient-600 bg-clip-text text-transparent-active">
          The Future Of Healthcare, Delivered Today
        </h1>
        <div className="flex flex-col border-l-2 sm:border-l-4 lg:border-l-8 border-primary pl-3 sm:pl-5 lg:pl-8 gap-y-3 sm:gap-y-6 lg:gap-y-8 mt-5">
          <p className="text-lg sm:text-xl lg:text-2xl text-text-300 mt-1 sm:mt-2 lg:mt-8">
            Redefining the nature of healthcare as ongoing, multi-modal,
            personalized and decentralized.
          </p>
          <LinkButton
            link="https://telehealth.stabledoc.com/"
            target="_blank"
            className="bg-primary hover:bg-secondary-900 font-semibold text-white w-40 sm:w-40 lg:w-52 py-2 sm:py-3 leading-7 text-xs sm:text-base rounded-full"
          >
            Get Started
          </LinkButton>
        </div>
      </div>
      <div className="hidden lg:block">
        <Image
          src="/img/home/home-hero.png"
          alt="telehealth services"
          width={800}
          height={800}
        />
      </div>
      <div className="lg:hidden mt-10">
        <Image
          src="/img/home/hero-mobile.png"
          alt="telehealth services"
          width={800}
          height={800}
        />
      </div>
    </div>
  );
};
export default Hero;
