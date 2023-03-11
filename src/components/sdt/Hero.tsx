import { FC } from "react";
import { Button, LinkButton } from "../general/Button";

const Hero: FC = () => {
  return (
    <div>
      <div className="container pt-12 px-5 sm:px-10 pb-8 2xl:px-0 mx-auto">
        <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-6xl bg-gradient-600 bg-clip-text text-transparent-active text-center">
          Telehealth, meet Blockchain, meet SDT crypto coins
        </h1>
        <p className="text-center text-text-600 font-normal text-base sm:text-xl lg:text-2xl w-full sm:w-5/6 xl:w-3/5 mx-auto mt-6 sm:mt-10">
          Using our SDT presents a fast, secure and transparent way that easily
          facilitates cross-border payments – and avoids costly and inefficient
          foreign currency exchange challenges.
        </p>
        <div className="flex flex-row mt-10 gap-6 justify-center">
          <LinkButton
            link="https://docs.stabledoc.com/"
            target="_blank"
            className="bg-primary hover:bg-secondary-900 font-semibold text-white px-8 sm:px-11 py-2 sm:py-3 leading-7 text-xs sm:text-base rounded-full"
          >
            Docs
          </LinkButton>
          <LinkButton
            link="/assets/documents/new-whitepaper.pdf"
            target="_blank"
            className="border border-primary hover:bg-primary/20 px-8 sm:px-11 py-2 sm:py-3 text-primary font-semibold leading-7 text-xs sm:text-base rounded-full"
          >
            Whitepaper
          </LinkButton>
        </div>
      </div>
      <div className="bg-SDT-hero bg-no-repeat bg-cover py-[3.2rem] sm:py-24 lg:py-32 xl:py-40 2xl:py-56 mt-10"></div>
    </div>
  );
};

export default Hero;
