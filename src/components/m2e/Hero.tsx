import { FC } from "react";
import { Button } from "../general/Button";
import Image from "next/image";

const Hero: FC = () => {
  return (
    <div className="pl-auto sm:container lg:max-w-none mx-auto xl:pl-[3rem] pt-9 lg:pt-0 lg:pl-10 px-5 sm:px-10 lg:px-0 flex flex-col lg:flex-row justify-between bg-[#F5FAFF] lg:bg-secondary-600 lg:bg-opacity-10">
      <div className="flex flex-col basis-[39%] gap-2 my-auto">
        <h1 className="font-extrabold lg:font-bold text-3xl sm:text-4xl lg:text-6xl bg-gradient-600 bg-clip-text text-transparent-active">
          Move your way to fitness with StableFit app – and a healthier planet
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-text-300 mt-8">
          Walk, run, jump, jog or dance your way to earn crypto rewards. Redeem
          your earnings for cash or donate them to save the planet.{" "}
        </p>
        <div className="flex flex-row mt-10 gap-6 justify-center sm:justify-start">
          <Button className="bg-primary hover:bg-secondary-900 font-semibold text-white px-8 sm:px-11 py-2 sm:py-3 leading-7 text-xs sm:text-base rounded-full">
            Get Started
          </Button>
          <Button className="border border-primary hover:bg-primary/20 px-8 sm:px-11 py-2 sm:py-3 text-primary font-semibold leading-7 text-xs sm:text-base rounded-full">
            Whitepaper
          </Button>
        </div>
      </div>
      <div className="hidden lg:block">
        <Image
          src="/img/m2e/m2e-hero.svg"
          alt="crypto-currency"
          width={700}
          height={700}
        />
      </div>
      <div className="lg:hidden pb-9 pt-16 mx-auto">
        <Image
          src="/img/m2e/hero-mobile.svg"
          alt="crypto-currency"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
};
export default Hero;
