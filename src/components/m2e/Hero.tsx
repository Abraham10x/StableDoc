import { FC } from "react";
import { Button } from "../general/Button";
import Image from "next/image";

const Hero: FC = () => {
  return (
    <div className="pl-52 flex flex-col sm:flex-row justify-between bg-secondary-600 bg-opacity-10">
      <div className="flex flex-col basis-[39%] gap-2 my-auto">
        <h1 className="font-bold text-4xl sm:text-6xl bg-gradient-600 bg-clip-text text-transparent-active">
          Move your way to fitness with StableFit app – and a healthier planet
        </h1>
        <p className="text-2xl text-text-300 mt-8">
          Walk, run, jump, jog or dance your way to earn crypto rewards. Redeem
          your earnings for cash or donate them to save the planet.{" "}
        </p>
        <div className="flex flex-row mt-8 gap-10">
          <Button className="bg-primary font-semibold text-white px-11 py-3 leading-7 text-base rounded-full">
            Get Started
          </Button>
          <Button className="border border-primary px-11 py-3 text-primary font-semibold leading-7 text-base rounded-full">
            Litepaper
          </Button>
        </div>
      </div>
      <div className="">
        <Image
          src="/img/m2e/m2e-hero.svg"
          alt="crypto-currency"
          width={700}
          height={700}
        />
      </div>
    </div>
  );
};
export default Hero;
