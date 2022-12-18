import Image from "next/image";
import { FC } from "react";
import { Button } from "../general/Button";

const Hero: FC = () => {
  return (
    <div className="container pt-12 px-10 pb-8 2xl:px-0 mx-auto mt-32">
      <div className="flex flex-col lg:flex-row justify-between bg-secondary-600 bg-opacity-10 gap-y-24 gap-x-14 px-5 sm:px-16 py-12 rounded-3xl relative bg-hero-bg bg-right bg-no-repeat">
        <div className="flex flex-col justify-between h-full basis-[45%] my-auto">
          <p className="font-bold text-xl uppercase text-text-300">
            Stabledoc for health providers
          </p>
          <h1 className="font-bold text-4xl sm:text-5xl bg-gradient-600 bg-clip-text text-transparent-active mt-8">
            Partner with StableDoc
          </h1>
          <p className="text-2xl text-text-300 mt-8">
            With Stabledoc’s 24/7 appointment management solution, you can reach
            new patients at the comfort of their homes, and gain full control of
            your schedule
          </p>
          <div className="flex flex-row mt-8 gap-6">
            <Button className="bg-primary font-semibold text-white px-11 py-3 leading-7 text-base rounded-full">
              Get Started
            </Button>
            <Button className="border border-primary px-8 py-3 text-primary font-semibold leading-7 text-base rounded-full">
              Contact Us
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 right-0">
          <Image
            className="basis-full lg:basis-[20%]"
            src="/img/partners/partners-hero.svg"
            alt="doctors-3d"
            width={560}
            height={560}
          />
        </div>
      </div>
      <div className="flex flex-col mt-20">
        <h2 className=" bg-gradient-600 bg-clip-text text-transparent-active font-medium text-4xl text-center">
          Why provoiders use stabledoc
        </h2>
        <div className="flex flex-row gap-6 mx-auto mt-8">
          <Button className="">
            <Image
              src="/img/partners/apple-store.svg"
              alt="apple-store"
              width={200}
              height={200}
            />
          </Button>
          <Button className="">
            <Image
              src="/img/partners/play-store.svg"
              alt="apple-store"
              width={200}
              height={200}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
