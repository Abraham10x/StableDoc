import Image from "next/image";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="container pt-12 px-10 pb-8 2xl:px-0 mx-auto mt-32">
      <div className="flex flex-col lg:flex-row justify-between bg-secondary-600 bg-opacity-10 gap-y-24 gap-x-14 px-5 sm:px-16 py-12 rounded-3xl">
        <div className="flex flex-col justify-between h-full basis-[54%] my-auto">
          <div className="flex flex-row gap-5">
            <h1 className="font-bold text-2xl sm:text-3xl lg:text-5xl bg-gradient-600 bg-clip-text text-transparent-active">
              Support
            </h1>
            <Image
              className="lg:hidden"
              src="/img/support/support-hero.png"
              alt="call center"
              width={30}
              height={30}
            />
          </div>
          <p className="text-base sm:text-lg lg:text-2xl text-text-300 mt-8">
            Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing
            elit. dolor sit amet doloroli sitiol conse ctetur adipiscing
            elitdolor sit amet doloroli sitiol conse ctetur adipiscing elit
          </p>
        </div>
        <Image
          className="basis-full lg:basis-[20%] hidden lg:block"
          src="/img/support/support-hero.png"
          alt="call center"
          width={290}
          height={200}
        />
      </div>
    </div>
  );
};

export default Hero;
