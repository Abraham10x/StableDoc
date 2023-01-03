import Image from "next/image";
import { FC } from "react";
import { Button } from "../general/Button";
import AppStore from "../general/AppStore";

const Hero: FC = () => {
  return (
    <div className="sm:container pt-12 px-5 sm:px-10 pb-8 2xl:px-0 mx-auto mt-32">
      <div className="flex flex-col lg:flex-row justify-between bg-secondary-600 bg-opacity-10 gap-y-24 gap-x-14 sm:px-16 lg:py-12 rounded-3xl relative lg:bg-hero-bg bg-right bg-no-repeat">
        <div className="flex flex-col justify-between h-full basis-[45%] my-auto px-8 pt-10 lg:pt-0">
          <p className="font-bold text-xs sm:text-base lg:text-xl uppercase text-text-300">
            Stabledoc for health providers
          </p>
          <h1 className="font-bold text-2xl sm:text-4xl lg:text-5xl bg-gradient-600 bg-clip-text text-transparent-active mt-3 lg:mt-8">
            Partner with StableDoc
          </h1>
          <p className="text-base lg:text-2xl text-text-300 mt-4 lg:mt-8">
            With Stabledoc’s 24/7 appointment management solution, you can reach
            new patients at the comfort of their homes, and gain full control of
            your schedule
          </p>
          <div className="flex sm:flex-row mt-8 gap-6">
            <Button className="bg-primary hover:bg-secondary-900 transition-all font-semibold text-white px-8 sm:px-11 py-3 leading-7 text-sm sm:text-base rounded-full">
              Get Started
            </Button>
            <Button className="border border-primary hover:bg-primary/20 transition-all px-8 sm:px-11 py-3 text-primary font-semibold leading-7 text-sm sm:text-base rounded-full">
              Contact Us
            </Button>
          </div>
        </div>
        <div className="lg:hidden basis-full lg:basis-[20%]">
          <Image
            className="w-full"
            src="/img/partners/hero-mobile.png"
            alt="doctors-3d"
            width={400}
            height={400}
          />
        </div>
        <div className="absolute bottom-0 right-0 hidden lg:block">
          <Image
            className="basis-full lg:basis-[20%]"
            src="/img/partners/partners-hero.png"
            alt="doctors-3d"
            width={560}
            height={560}
          />
        </div>
      </div>
      <div className="flex flex-col mt-20">
        <h2 className=" bg-gradient-600 bg-clip-text text-transparent-active font-medium text-2xl sm:text-3xl lg:text-4xl text-center">
          Why provoiders use stabledoc
        </h2>
        <AppStore />
      </div>
    </div>
  );
};

export default Hero;
