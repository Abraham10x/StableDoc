import { FC } from "react";
import { Button } from "../general/Button";

const Hero: FC = () => {
  return (
    <div>
      <div className="container pt-12 px-10 pb-8 2xl:px-0 mx-auto">
        <h1 className="font-bold text-6xl bg-gradient-600 bg-clip-text text-transparent-active text-center">
          Telehealth, meet Blockchain, meet SDT crypto coins
        </h1>
        <p className="text-center text-text-600 font-normal text-2xl w-3/5 mx-auto mt-10">
          Using our SDT presents a fast, secure and transparent way that easily
          facilitates cross-border payments – and avoids costly and inefficient
          foreign currency exchange challenges.
        </p>
        <div className="flex flex-row mt-10 gap-6 justify-center">
          <Button className="bg-primary font-semibold text-white px-11 py-3 leading-7 text-base rounded-full">
            Get Started
          </Button>
          <Button className="border border-primary px-8 py-3 text-primary font-semibold leading-7 text-base rounded-full">
            Whitepaper
          </Button>
        </div>
      </div>
      <div className="bg-SDT-hero bg-no-repeat bg-cover py-56 mt-10"></div>
    </div>
  );
};

export default Hero;
